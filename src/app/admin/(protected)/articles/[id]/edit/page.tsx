import Link from "next/link";
import { notFound } from "next/navigation";
import { connectToDatabase } from "@/lib/db";
import { Article, Category, Tag } from "@/lib/models";
import ArticleForm from "@/components/admin/ArticleForm";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await connectToDatabase();
  const [article, categories, tags] = await Promise.all([
    Article.findById(id).lean(),
    Category.find({}).sort({ name: 1 }).lean(),
    Tag.find({}).sort({ name: 1 }).lean(),
  ]);

  if (!article) notFound();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl text-[#151b20]">Edit Article</h1>
          <p className="mt-1 text-sm text-[#8a9096]">{article.title}</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link
            href={`/admin/articles/${id}/preview`}
            className="text-[#18535b] underline"
            target="_blank"
          >
            Preview
          </Link>
          {article.status === "published" && (
            <Link
              href={`/insights/${article.slug}`}
              className="text-[#18535b] underline"
              target="_blank"
            >
              View live
            </Link>
          )}
        </div>
      </div>

      <div className="mt-6">
        <ArticleForm
          categories={categories.map((c) => ({ id: String(c._id), name: c.name }))}
          tags={tags.map((t) => ({ id: String(t._id), name: t.name }))}
          article={{
            id: String(article._id),
            title: article.title,
            slug: article.slug,
            excerpt: article.excerpt ?? "",
            contentMarkdown: article.contentMarkdown ?? "",
            categoryId: article.category ? String(article.category) : "",
            tagIds: (article.tags ?? []).map((t: unknown) => String(t)),
            seoTitle: article.seoTitle ?? "",
            seoDescription: article.seoDescription ?? "",
            publishedAt: article.publishedAt
              ? new Date(article.publishedAt).toISOString().slice(0, 10)
              : "",
            featuredImage: article.featuredImage
              ? {
                  url: article.featuredImage.url,
                  publicId: article.featuredImage.publicId,
                }
              : null,
          }}
        />
      </div>
    </div>
  );
}
