"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/db";
import { Article } from "@/lib/models";
import { requireRole, requireSession, UnauthorizedError } from "@/lib/rbac";
import { generateUniqueSlug } from "@/lib/slug";
import { articleInputSchema } from "@/lib/validation";

export type ArticleFormState = { error: string | null };

function revalidateArticleRoutes(slug?: string) {
  revalidatePath("/admin/articles");
  revalidatePath("/insights");
  if (slug) revalidatePath(`/insights/${slug}`);
}

/** Handles both create (no articleId field) and edit (articleId present). */
export async function saveArticleAction(
  _prevState: ArticleFormState,
  formData: FormData,
): Promise<ArticleFormState> {
  let redirectTo: string | null = null;

  try {
    const session = await requireRole("super_admin", "admin");

    const parsed = articleInputSchema.safeParse({
      title: formData.get("title"),
      slug: formData.get("slug") ?? "",
      excerpt: formData.get("excerpt") ?? "",
      contentMarkdown: formData.get("contentMarkdown"),
      categoryId: formData.get("categoryId") ?? "",
      tagIds: formData.getAll("tagIds"),
      seoTitle: formData.get("seoTitle") ?? "",
      seoDescription: formData.get("seoDescription") ?? "",
      publishedAt: formData.get("publishedAt") ?? "",
    });
    if (!parsed.success) {
      return { error: parsed.error.issues[0]?.message ?? "Invalid input." };
    }

    await connectToDatabase();

    const articleId = formData.get("articleId");
    const featuredImageUrl = formData.get("featuredImageUrl");
    const featuredImagePublicId = formData.get("featuredImagePublicId");
    const featuredImageWidth = formData.get("featuredImageWidth");
    const featuredImageHeight = formData.get("featuredImageHeight");

    const featuredImage =
      typeof featuredImageUrl === "string" && featuredImageUrl.length > 0
        ? {
            url: featuredImageUrl,
            publicId: String(featuredImagePublicId ?? ""),
            width: Number(featuredImageWidth) || undefined,
            height: Number(featuredImageHeight) || undefined,
          }
        : null;

    if (typeof articleId === "string" && articleId.length > 0) {
      // Edit: any admin/super_admin can edit any article per the brief.
      const existing = await Article.findById(articleId);
      if (!existing) return { error: "Article not found." };

      const slug =
        parsed.data.slug && parsed.data.slug.length > 0
          ? await generateUniqueSlug(parsed.data.slug, articleId)
          : existing.slug;

      existing.title = parsed.data.title;
      existing.slug = slug;
      existing.excerpt = parsed.data.excerpt ?? "";
      existing.contentMarkdown = parsed.data.contentMarkdown;
      existing.category = parsed.data.categoryId || null;
      existing.tags = parsed.data.tagIds ?? [];
      existing.seoTitle = parsed.data.seoTitle ?? "";
      existing.seoDescription = parsed.data.seoDescription ?? "";
      if (parsed.data.publishedAt) {
        existing.publishedAt = new Date(parsed.data.publishedAt);
      }
      if (featuredImage) existing.featuredImage = featuredImage;
      await existing.save();

      revalidateArticleRoutes(slug);
      redirectTo = `/admin/articles/${existing._id}/edit`;
    } else {
      const slug = await generateUniqueSlug(
        parsed.data.slug && parsed.data.slug.length > 0
          ? parsed.data.slug
          : parsed.data.title,
      );

      const created = await Article.create({
        title: parsed.data.title,
        slug,
        excerpt: parsed.data.excerpt ?? "",
        contentMarkdown: parsed.data.contentMarkdown,
        featuredImage,
        category: parsed.data.categoryId || null,
        tags: parsed.data.tagIds ?? [],
        authorId: session.user.id,
        status: "draft",
        seoTitle: parsed.data.seoTitle ?? "",
        seoDescription: parsed.data.seoDescription ?? "",
        publishedAt: parsed.data.publishedAt
          ? new Date(parsed.data.publishedAt)
          : null,
      });

      revalidateArticleRoutes(slug);
      redirectTo = `/admin/articles/${created._id}/edit`;
    }
  } catch (error) {
    if (error instanceof UnauthorizedError) return { error: error.message };
    throw error;
  }

  redirect(redirectTo);
}

async function assertCanPublish(articleAuthorId: string) {
  const session = await requireRole("super_admin", "admin");
  if (
    session.user.role !== "super_admin" &&
    session.user.id !== articleAuthorId
  ) {
    throw new UnauthorizedError(
      "Admins can only publish or unpublish their own articles.",
    );
  }
}

export async function publishArticleAction(articleId: string) {
  await connectToDatabase();
  const article = await Article.findById(articleId);
  if (!article) throw new Error("Article not found.");

  await assertCanPublish(article.authorId.toString());

  article.status = "published";
  // Don't clobber a date the admin deliberately set (e.g. backdating a
  // migrated article) — only default it on the very first publish.
  if (!article.publishedAt) article.publishedAt = new Date();
  await article.save();

  revalidateArticleRoutes(article.slug);
}

export async function unpublishArticleAction(articleId: string) {
  await connectToDatabase();
  const article = await Article.findById(articleId);
  if (!article) throw new Error("Article not found.");

  await assertCanPublish(article.authorId.toString());

  article.status = "draft";
  await article.save();

  revalidateArticleRoutes(article.slug);
}

export async function deleteArticleAction(articleId: string) {
  await requireRole("super_admin");
  await connectToDatabase();

  const article = await Article.findByIdAndDelete(articleId);
  if (article) revalidateArticleRoutes(article.slug);
}

/** Used by the preview route to confirm the viewer is allowed to see a draft. */
export async function assertCanViewDraft() {
  await requireSession();
}
