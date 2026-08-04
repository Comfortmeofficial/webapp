import { useState } from "react";
import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import FacebookIcon from "../assets/sections/footer/social-icons/Facebook.svg";
import InstagramIcon from "../assets/sections/footer/social-icons/instagram.svg";
import XIcon from "../assets/sections/footer/social-icons/x.svg";
import { INSIGHT_ARTICLES } from "../data/insights";
import Footer from "../components/Footer";
import Header from "../components/Header";

function InsightArticlePage({ slug }) {
  const article =
    INSIGHT_ARTICLES.find((item) => item.slug === slug) || INSIGHT_ARTICLES[0];
  const related = INSIGHT_ARTICLES.filter(
    (item) => item.slug !== article.slug,
  ).slice(0, 3);
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available — no-op
    }
  }

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
            <a
              href="/insights"
              className="inline-flex items-center gap-1 rounded-md border border-[#dbe1de] bg-white px-3 py-2 text-xs text-[#435057]"
            >
              ← Back To Publications
            </a>

            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div>
                <h1 className="font-display text-3xl leading-tight text-[#171f25] sm:text-4xl">
                  {article.title}
                </h1>
                <p className="mt-5 text-sm leading-7 text-[#5f686f] sm:text-base">
                  {article.excerpt}
                </p>
              </div>
              <img
                src={article.image}
                alt={article.title}
                className="h-56 w-full rounded-md object-cover sm:h-72 lg:h-full"
              />
            </div>

            <div className="mt-10 space-y-5 text-base leading-8 text-[#4f5961] sm:text-lg">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {(article.author || article.date) && (
              <div className="mt-8 space-y-2 border-t border-[#edf1ef] pt-6 text-sm">
                {article.author && (
                  <div className="flex gap-3">
                    <span className="w-14 shrink-0 text-[#8d949a]">Author</span>
                    <span className="font-semibold text-[#18535b]">
                      {article.author}
                    </span>
                  </div>
                )}
                {article.date && (
                  <div className="flex gap-3">
                    <span className="w-14 shrink-0 text-[#8d949a]">Date</span>
                    <span className="font-semibold text-[#18535b]">
                      {article.date}
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8">
              <p className="text-sm font-semibold text-[#1a2127]">
                Share this Article
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="transition hover:opacity-90"
                >
                  <img src={FacebookIcon} alt="" className="h-9 w-9" />
                </a>
                <a
                  href="https://instagram.com/bsylegal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Instagram"
                  className="transition hover:opacity-90"
                >
                  <img src={InstagramIcon} alt="" className="h-9 w-9" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="transition hover:opacity-90"
                >
                  <img src={XIcon} alt="" className="h-9 w-9" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 rounded-full border border-[#dbe1de] bg-white px-4 py-2 text-xs font-medium text-[#435057] transition hover:bg-[#f5f5f5]"
                >
                  {copied ? "Copied!" : "Copy Link"}
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5Zm7-1h4v2h-4v-2Zm3-4h3a5 5 0 1 1 0 10h-3v-2h3a3 3 0 1 0 0-6h-3V7Z" />
                  </svg>
                </button>
              </div>
            </div>

            {related.length > 0 && (
              <section className="mt-10 border-t border-[#edf1ef] pt-8">
                <h2 className="font-display text-2xl text-[#171f25] sm:text-3xl">
                  Related Insights
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
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default InsightArticlePage;
