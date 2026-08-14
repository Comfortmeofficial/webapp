import Link from "next/link";
import { connectToDatabase } from "@/lib/db";
import { Article } from "@/lib/models";

async function getStats() {
  await connectToDatabase();

  const [total, published, drafts, recent] = await Promise.all([
    Article.countDocuments({}),
    Article.countDocuments({ status: "published" }),
    Article.countDocuments({ status: "draft" }),
    Article.find({})
      .sort({ updatedAt: -1 })
      .limit(6)
      .populate("authorId", "name")
      .lean(),
  ]);

  return { total, published, drafts, recent };
}

export default async function AdminOverviewPage() {
  const { total, published, drafts, recent } = await getStats();

  const cards = [
    { label: "Total Articles", value: total },
    { label: "Published", value: published },
    { label: "Drafts", value: drafts },
  ];

  return (
    <div>
      <h1 className="font-serif text-2xl text-[#151b20]">Overview</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-lg border border-[#e6ebea] bg-white p-5"
          >
            <p className="text-xs text-[#8a9096]">{card.label}</p>
            <p className="mt-1 font-serif text-3xl text-[#151b20]">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-semibold text-[#151b20]">
          Recent activity
        </h2>
        <div className="mt-3 overflow-hidden rounded-lg border border-[#e6ebea] bg-white">
          {recent.length === 0 && (
            <p className="p-5 text-sm text-[#8a9096]">
              No articles yet.{" "}
              <Link href="/admin/articles/new" className="text-[#18535b] underline">
                Create your first one
              </Link>
              .
            </p>
          )}
          {recent.map((article) => (
            <Link
              key={String(article._id)}
              href={`/admin/articles/${article._id}/edit`}
              className="flex items-center justify-between border-b border-[#f0f2f1] px-5 py-3 text-sm last:border-b-0 hover:bg-[#f9faf9]"
            >
              <span className="text-[#1e252a]">{article.title}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase ${
                  article.status === "published"
                    ? "bg-[#e3f3e6] text-[#1d7a35]"
                    : "bg-[#f2f0e6] text-[#8a7326]"
                }`}
              >
                {article.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
