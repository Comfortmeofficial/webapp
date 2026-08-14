import Link from "next/link";
import { connectToDatabase } from "@/lib/db";
import { Article } from "@/lib/models";

async function getLatestArticles() {
  await connectToDatabase();
  const articles = await Article.find({ status: "published" })
    .sort({ publishedAt: -1 })
    .limit(4)
    .lean();
  return articles;
}

export default async function HomeInsights() {
  const articles = await getLatestArticles();

  return (
    <section id="contact" className="bg-[#f5f6f3] py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-full px-4 sm:px-8">
        <div className="mx-4 sm:mx-15 flex flex-col gap-4 sm:gap-6">
          <p className="text-xs text-[#80aa36]">Articles & insights</p>
          <div className="flex flex-row items-start justify-between gap-4 sm:gap-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-[#151b20]">
              Insights &<br />
              Publications
            </h2>
            <Link
              href="/insights"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#d9d9d9] bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-[#1f262c] hover:bg-[#f2f2f2] transition"
            >
              Read More Articles <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {articles.length === 0 ? (
          <p className="mt-6 mx-4 sm:mx-15 text-sm text-[#8a9096]">
            No articles published yet.
          </p>
        ) : (
          <div className="mt-6 sm:mt-8 mx-4 sm:mx-15 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <article key={String(article._id)} className="flex h-full flex-col p-1">
                <Link href={`/insights/${article.slug}`} className="block">
                  {article.featuredImage?.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={article.featuredImage.url}
                      alt={article.title}
                      className="h-32 sm:h-44 w-full border border-[#d5d7d8] object-cover transition hover:opacity-90"
                    />
                  ) : (
                    <div className="h-32 sm:h-44 w-full border border-[#d5d7d8] bg-[#eceeec]" />
                  )}
                </Link>
                <p className="mt-2 sm:mt-3 text-[10px] sm:text-[11px] uppercase tracking-wide text-[#b08d57]">
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </p>
                <Link
                  href={`/insights/${article.slug}`}
                  className="block hover:text-[#18535b] transition"
                >
                  <h3 className="mt-1 line-clamp-2 min-h-[60px] font-display text-[24px] font-bold leading-[30px] tracking-normal text-[#1f262c]">
                    {article.title}
                  </h3>
                </Link>
                <p className="mt-2 sm:mt-3 line-clamp-3 text-xs sm:text-base leading-6 sm:leading-7 text-[#4c565d]">
                  {article.excerpt}
                </p>
                <Link
                  href={`/insights/${article.slug}`}
                  className="mt-auto pt-3 sm:pt-5 inline-block text-xs font-medium text-[#1f262c] hover:text-[#18535b] transition"
                >
                  Continue Reading →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
