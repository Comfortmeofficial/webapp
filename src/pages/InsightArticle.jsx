import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { INSIGHT_ARTICLES } from "../data/insights";

function InsightArticlePage({ slug }) {
  const article =
    INSIGHT_ARTICLES.find((item) => item.slug === slug) || INSIGHT_ARTICLES[0];
  const related = INSIGHT_ARTICLES.filter(
    (item) => item.slug !== article.slug,
  ).slice(0, 3);

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
        <main className="bg-[#f4f5f2] px-4 py-12 text-[#1f252b] sm:px-8">
          <div
            className="mx-auto max-w-5xl"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              padding: "2rem",
              borderRadius: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            <a
              href="/insights"
              className="inline-flex rounded-md border border-[#dbe1de] bg-white px-3 py-2 text-xs text-[#435057]"
            >
              ← Back To Publications
            </a>

            <article className="mt-6 rounded-sm border border-[#e7ebea] bg-white p-6 sm:p-8">
              <p className="text-xs text-[#7f888f]">
                {article.category} · {article.date}
              </p>
              <h1 className="font-display mt-3 text-4xl leading-tight text-[#171f25] sm:text-6xl">
                {article.title}
              </h1>
              <p className="mt-2 text-sm text-[#5f686f]">By {article.author}</p>
              <img
                src={article.image}
                alt={article.title}
                className="mt-6 h-56 w-full rounded-md border border-[#dbe0e1] object-cover"
              />

              <div className="mt-7 space-y-5 text-base leading-8 text-[#4f5961] sm:text-lg">
                {article.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 border-t border-[#edf1ef] pt-6">
                <Button as="a" href="#" variant="accent">
                  Book a Consultation
                </Button>
              </div>
            </article>

            <section className="mt-8 rounded-sm border border-[#e7ebea] bg-white p-6 sm:p-8">
              <h2 className="font-display text-3xl text-[#171f25] sm:text-4xl">
                Related Publications
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                {related.map((item) => (
                  <article key={item.slug}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 w-full rounded-sm border border-[#d9dddf] object-cover"
                    />
                    <p className="mt-2 text-[10px] text-[#8d949a]">
                      {item.category}
                    </p>
                    <h3 className="font-display mt-1 text-xl leading-tight text-[#1a2127]">
                      {item.title}
                    </h3>
                    <a
                      href={`/insights/${item.slug}`}
                      className="mt-2 inline-block text-xs font-medium text-[#1a2127]"
                    >
                      Continue Reading →
                    </a>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default InsightArticlePage;
