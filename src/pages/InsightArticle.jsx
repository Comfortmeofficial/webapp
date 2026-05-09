import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { INSIGHT_ARTICLES } from "../data/insights";

function InsightArticlePage({ slug }) {
  const article = INSIGHT_ARTICLES.find((item) => item.slug === slug) || INSIGHT_ARTICLES[0];
  const related = INSIGHT_ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header currentPage="insights" />
      <main className="bg-[#f4f5f2] px-4 py-12 text-[#1f252b] sm:px-8">
        <div className="mx-auto max-w-5xl">
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
            <div className="mt-6 h-56 rounded-md border border-[#dbe0e1] bg-[linear-gradient(135deg,#5f4028,#9e7d56)]" />

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
            <h2 className="font-display text-3xl text-[#171f25] sm:text-4xl">Related Publications</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug}>
                  <div className="h-32 rounded-sm border border-[#d9dddf] bg-[linear-gradient(120deg,#5f4028,#9e7d56)]" />
                  <p className="mt-2 text-[10px] text-[#8d949a]">{item.category}</p>
                  <h3 className="font-display mt-1 text-xl leading-tight text-[#1a2127]">{item.title}</h3>
                  <a href={`/insights/${item.slug}`} className="mt-2 inline-block text-xs font-medium text-[#1a2127]">
                    Continue Reading →
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default InsightArticlePage;
