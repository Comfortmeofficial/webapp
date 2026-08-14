"use server";

import { revalidatePath } from "next/cache";
import slugify from "slugify";
import { connectToDatabase } from "@/lib/db";
import { Category, Tag } from "@/lib/models";
import { requireRole } from "@/lib/rbac";

export type TaxonomyFormState = { error: string | null };

async function createTaxonomyEntry(
  model: typeof Category | typeof Tag,
  name: string,
) {
  await requireRole("super_admin");
  await connectToDatabase();

  const trimmed = name.trim();
  if (trimmed.length < 2) return { error: "Name must be at least 2 characters." };

  const slug = slugify(trimmed, { lower: true, strict: true });
  const existing = await model.findOne({ slug });
  if (existing) return { error: "That already exists." };

  await model.create({ name: trimmed, slug });
  revalidatePath("/admin/categories");
  revalidatePath("/admin/tags");
  return { error: null };
}

export async function createCategoryAction(
  _prevState: TaxonomyFormState,
  formData: FormData,
): Promise<TaxonomyFormState> {
  return createTaxonomyEntry(Category, String(formData.get("name") ?? ""));
}

export async function createTagAction(
  _prevState: TaxonomyFormState,
  formData: FormData,
): Promise<TaxonomyFormState> {
  return createTaxonomyEntry(Tag, String(formData.get("name") ?? ""));
}

export async function deleteCategoryAction(categoryId: string) {
  await requireRole("super_admin");
  await connectToDatabase();
  await Category.findByIdAndDelete(categoryId);
  revalidatePath("/admin/categories");
}

export async function deleteTagAction(tagId: string) {
  await requireRole("super_admin");
  await connectToDatabase();
  await Tag.findByIdAndDelete(tagId);
  revalidatePath("/admin/tags");
}
