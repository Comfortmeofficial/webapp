import { notFound } from "next/navigation";
import { connectToDatabase } from "@/lib/db";
import { Article } from "@/lib/models";
import ArticleContent from "@/components/public/ArticleContent";

export default async function ArticlePreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // No extra role check needed here: this whole route tree already sits
  // behind admin/(protected)/layout.tsx, which redirects unauthenticated
  // visitors before this page ever renders.
  const { id } = await params;

  await connectToDatabase();
  const article = await Article.findById(id)
    .populate("authorId", "name")
    .populate("category", "name")
    .lean();

  if (!article) notFound();

  return (
    <div className="bg-[#f4f5f2]">
      <ArticleContent
        title={article.title}
        category={(article.category as unknown as { name?: string } | null)?.name}
        publishedAt={article.publishedAt as unknown as string | null}
        authorName={(article.authorId as unknown as { name?: string } | null)?.name}
        featuredImageUrl={article.featuredImage?.url}
        contentMarkdown={article.contentMarkdown ?? ""}
        banner={
          <div className="mb-6 rounded-md bg-amber-50 px-4 py-2 text-sm text-amber-800">
            Preview mode — status: <strong>{article.status}</strong>. This
            page is only visible to signed-in admins.
          </div>
        }
      />
    </div>
  );
}
