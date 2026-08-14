"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/db";
import { AdminUser } from "@/lib/models";
import { requireSuperAdmin, UnauthorizedError } from "@/lib/rbac";
import { createAdminSchema } from "@/lib/validation";

export type AdminUserFormState = {
  error: string | null;
  success?: boolean;
};

export async function createAdminUserAction(
  _prevState: AdminUserFormState,
  formData: FormData,
): Promise<AdminUserFormState> {
  try {
    const session = await requireSuperAdmin();

    const parsed = createAdminSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
    });
    if (!parsed.success) {
      return { error: parsed.error.issues[0]?.message ?? "Invalid input." };
    }

    await connectToDatabase();

    const existing = await AdminUser.findOne({ email: parsed.data.email });
    if (existing) {
      return { error: "An admin with this email already exists." };
    }

    const passwordHash = await bcrypt.hash(parsed.data.password, 12);
    await AdminUser.create({
      name: parsed.data.name,
      email: parsed.data.email,
      passwordHash,
      role: parsed.data.role,
      isActive: true,
      createdBy: session.user.id,
    });

    revalidatePath("/admin/users");
    return { error: null, success: true };
  } catch (error) {
    if (error instanceof UnauthorizedError) return { error: error.message };
    throw error;
  }
}

export async function toggleAdminActiveAction(adminUserId: string) {
  await requireSuperAdmin();
  await connectToDatabase();

  const target = await AdminUser.findById(adminUserId);
  if (!target) throw new Error("Admin not found.");

  target.isActive = !target.isActive;
  await target.save();

  revalidatePath("/admin/users");
}

export async function deleteAdminUserAction(adminUserId: string) {
  const session = await requireSuperAdmin();

  if (session.user.id === adminUserId) {
    throw new Error("You can't delete your own account.");
  }

  await connectToDatabase();
  await AdminUser.findByIdAndDelete(adminUserId);

  revalidatePath("/admin/users");
}
