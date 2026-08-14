import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { connectToDatabase } from "@/lib/db";
import { Article } from "@/lib/models";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ArticleShareBar from "@/components/site/ArticleShareBar";

export const dynamic = "force-dynamic";

const BACKGROUND = "/assets/sections/background.jpg";
const TOP_BG = "/assets/sections/topbackground.png";

async function getPublishedArticle(slug: string) {
  await connectToDatabase();
  return Article.findOne({ slug, status: "published" })
    .populate("authorId", "name")
    .populate("category", "name")
    .lean();
}

async function getRelatedArticles(excludeSlug: string) {
  await connectToDatabase();
  return Article.find({ status: "published", slug: { $ne: excludeSlug } })
    .sort({ publishedAt: -1 })
    .limit(3)
    .populate("category", "name")
    .lean();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  if (!article) return {};

  return {
    title: article.seoTitle || `${article.title} | BSY Legal Insights`,
    description: article.seoDescription || article.excerpt || undefined,
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);

  if (!article) notFound();

  const related = await getRelatedArticles(slug);
  const author = article.authorId as unknown as { name?: string } | null;

  return (
    <>
      <Header currentPage="insights" />
      <div
        className="flex h-[] items-center justify-center "
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="bg-[#f4f5f2] px-4 py-22 text-[#1f252b] w-[98vw] sm:px-8">
          <div
            className="mx-auto w-[95vw] max-w-6xl"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              padding: "2rem",
              borderRadius: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-1 rounded-md border border-[#dbe1de] bg-white px-3 py-2 text-xs text-[#435057]"
            >
              ← Back To Publications
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div>
                <h1 className="font-display text-3xl leading-tight text-[#171f25] sm:text-4xl">
                  {article.title}
                </h1>
                {article.excerpt && (
                  <p className="mt-5 text-sm leading-7 text-[#5f686f] sm:text-base">
                    {article.excerpt}
                  </p>
                )}
              </div>
              {article.featuredImage?.url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={article.featuredImage.url}
                  alt={article.title}
                  className="h-56 w-full rounded-md object-cover sm:h-72 lg:h-full"
                />
              )}
            </div>

            <div className="prose prose-lg mt-10 max-w-none text-[#4f5961] prose-headings:font-display prose-a:text-[#18535b]">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.contentMarkdown || ""}
              </ReactMarkdown>
            </div>

            {(author?.name || article.publishedAt) && (
              <div className="mt-8 space-y-2 border-t border-[#edf1ef] pt-6 text-sm">
                {author?.name && (
                  <div className="flex gap-3">
                    <span className="w-14 shrink-0 text-[#8d949a]">Author</span>
                    <span className="font-semibold text-[#18535b]">
                      {author.name}
                    </span>
                  </div>
                )}
                {article.publishedAt && (
                  <div className="flex gap-3">
                    <span className="w-14 shrink-0 text-[#8d949a]">Date</span>
                    <span className="font-semibold text-[#18535b]">
                      {new Date(article.publishedAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                )}
              </div>
            )}

            <ArticleShareBar title={article.title} />

            {related.length > 0 && (
              <section className="mt-10 border-t border-[#edf1ef] pt-8">
                <h2 className="font-display text-2xl text-[#171f25] sm:text-3xl">
                  Related Insights
                </h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  {related.map((item) => {
                    const itemCategory = item.category as unknown as {
                      name?: string;
                    } | null;
                    return (
                      <article key={String(item._id)}>
                        {item.featuredImage?.url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.featuredImage.url}
                            alt={item.title}
                            className="h-32 w-full rounded-sm border border-[#d9dddf] object-cover"
                          />
                        ) : (
                          <div className="h-32 w-full rounded-sm border border-[#d9dddf] bg-[#eceeec]" />
                        )}
                        <p className="mt-2 text-[10px] text-[#8d949a]">
                          {itemCategory?.name ?? "Insights"}
                        </p>
                        <h3 className="font-display mt-1 text-xl leading-tight text-[#1a2127]">
                          {item.title}
                        </h3>
                        <Link
                          href={`/insights/${item.slug}`}
                          className="mt-2 inline-block text-xs font-medium text-[#1a2127]"
                        >
                          Continue Reading →
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
