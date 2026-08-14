"use server";

import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/db";
import { AdminUser } from "@/lib/models";
import { requireSession } from "@/lib/rbac";

export type ChangePasswordState = { error: string | null; success?: boolean };

export async function changeOwnPasswordAction(
  _prevState: ChangePasswordState,
  formData: FormData,
): Promise<ChangePasswordState> {
  const session = await requireSession();

  const currentPassword = String(formData.get("currentPassword") ?? "");
  const newPassword = String(formData.get("newPassword") ?? "");

  if (newPassword.length < 8) {
    return { error: "New password must be at least 8 characters." };
  }

  await connectToDatabase();
  const user = await AdminUser.findById(session.user.id);
  if (!user) return { error: "User not found." };

  const matches = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!matches) return { error: "Current password is incorrect." };

  user.passwordHash = await bcrypt.hash(newPassword, 12);
  await user.save();

  return { error: null, success: true };
}
