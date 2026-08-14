import { connectToDatabase } from "@/lib/db";
import { Article } from "@/lib/models";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import InsightsSearch from "@/components/site/InsightsSearch";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Insights & Publications | BSY Legal",
  description:
    "Legal insights and publications from BSY Legal, covering corporate, estate planning, property, and energy law.",
};

const BACKGROUND = "/assets/sections/background.jpg";

export default async function InsightsPage() {
  await connectToDatabase();
  const articles = await Article.find({ status: "published" })
    .sort({ publishedAt: -1 })
    .populate("category", "name")
    .lean();

  const articleCards = articles.map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    publishedAt: article.publishedAt
      ? new Date(article.publishedAt).toISOString()
      : null,
    category:
      (article.category as unknown as { name?: string } | null)?.name ??
      "Insights",
    imageUrl: article.featuredImage?.url ?? "",
  }));

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
        <main className="bg-[#f4f5f2] text-[#1f252b]">
          <InsightsSearch articles={articleCards} />
        </main>
      </div>
      <Footer />
    </>
  );
}
