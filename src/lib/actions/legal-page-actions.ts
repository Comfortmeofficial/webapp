"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/db";
import { LegalPage, LEGAL_PAGE_SLUGS, type LegalPageSlug } from "@/lib/models";
import { requireRole } from "@/lib/rbac";

export type LegalPageFormState = { error: string | null; success?: boolean };

export async function updateLegalPageAction(
  _prevState: LegalPageFormState,
  formData: FormData,
): Promise<LegalPageFormState> {
  await requireRole("super_admin");

  const slug = String(formData.get("slug") ?? "");
  if (!LEGAL_PAGE_SLUGS.includes(slug as LegalPageSlug)) {
    return { error: "Unknown legal page." };
  }

  const title = String(formData.get("title") ?? "").trim();
  const contentMarkdown = String(formData.get("contentMarkdown") ?? "");
  if (title.length < 2) return { error: "Title must be at least 2 characters." };
  if (contentMarkdown.trim().length === 0) {
    return { error: "Content can't be empty." };
  }

  await connectToDatabase();
  await LegalPage.findOneAndUpdate(
    { slug },
    { title, contentMarkdown },
    { upsert: true },
  );

  revalidatePath(`/${slug}`);
  revalidatePath(`/admin/legal/${slug}/edit`);

  return { error: null, success: true };
}
