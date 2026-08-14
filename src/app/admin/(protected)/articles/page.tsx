import Link from "next/link";
import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Article } from "@/lib/models";
import ArticleRowActions from "@/components/admin/ArticleRowActions";

export default async function AdminArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const session = await auth();
  const { status } = await searchParams;

  await connectToDatabase();
  const filter =
    status === "draft" || status === "published" ? { status } : {};
  const articles = await Article.find(filter)
    .sort({ updatedAt: -1 })
    .populate("authorId", "name")
    .lean();

  const heading =
    status === "draft"
      ? "Drafts"
      : status === "published"
        ? "Published Articles"
        : "All Articles";

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-[#151b20]">{heading}</h1>
        <Link
          href="/admin/articles/new"
          className="rounded-md bg-[#18535b] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#123f45]"
        >
          Create Article
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-[#e6ebea] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f9faf9] text-xs uppercase text-[#8a9096]">
            <tr>
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Author</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Updated</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-6 text-center text-[#8a9096]">
                  No articles here yet.
                </td>
              </tr>
            )}
            {articles.map((article) => (
              <tr key={String(article._id)} className="border-t border-[#f0f2f1]">
                <td className="px-5 py-3">
                  <Link
                    href={`/admin/articles/${article._id}/edit`}
                    className="text-[#1e252a] hover:underline"
                  >
                    {article.title}
                  </Link>
                </td>
                <td className="px-5 py-3 text-[#5c656d]">
                  {(article.authorId as unknown as { name?: string } | null)
                    ?.name ?? "—"}
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase ${
                      article.status === "published"
                        ? "bg-[#e3f3e6] text-[#1d7a35]"
                        : "bg-[#f2f0e6] text-[#8a7326]"
                    }`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-[#8a9096]">
                  {new Date(article.updatedAt as unknown as string).toLocaleDateString()}
                </td>
                <td className="px-5 py-3">
                  <ArticleRowActions
                    articleId={String(article._id)}
                    status={article.status as "draft" | "published"}
                    authorId={String(article.authorId?._id ?? article.authorId)}
                    currentUserId={session!.user.id}
                    currentUserRole={session!.user.role}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
