import { useMemo, useState } from "react";
import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { INSIGHT_ARTICLES } from "../data/insights";

const tabs = [
  "All",
  "Corporate",
  "Litigation",
  "Property",
  "Employment",
  "Finance",
  "Energy",
  "Immigration",
];

function InsightsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return INSIGHT_ARTICLES.filter((article) => {
      const matchesTab =
        activeTab === "All" ||
        article.category.toLowerCase().includes(activeTab.toLowerCase());
      const matchesQuery =
        query.trim().length === 0 ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());

      return matchesTab && matchesQuery;
    });
  }, [activeTab, query]);

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
          <section
            className="mx-auto w-[95vw] h-[55vh] px-4 py-20 sm:py-44 sm:px-8 bg-white/90 "
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <h1 className="font-display text-5xl leading-[1.5] text-[#141b20] sm:text-7xl">
              Insights &
              <br />
              Publications
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#3f474d] sm:text-lg">
              A team of experienced legal professionals dedicated to delivering
              excellence, integrity, and results.
            </p>

            <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <label className="block w-full max-w-sm">
                <span className="sr-only">Search articles</span>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full rounded-md border border-[#e6ebea] bg-white px-4 py-2 text-sm text-[#1f252b] outline-none focus:border-[#1f676d]"
                />
              </label>
              <div className="flex flex-row overflow-x-scroll items-center gap-3 text-xs sm:text-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 py-1 transition ${
                      activeTab === tab
                        ? "font-semibold text-[#245e66]"
                        : "text-[#2f373d]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section
            className="relative mx-auto w-[98vw] min-h-[100vh] px-4 py-16 sm:px-8"
            style={{
              backgroundImage: `url(${WOMAN_IMAGE})`,
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundAttachment: "scroll",
            }}
          >
            <h2 className="mb-10 text-xl font-semibold text-[#1e252a] sm:text-2xl">
              Explore our latest thinking across key areas of legal practice.
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {filteredArticles.map((article) => (
                <article key={article.id}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-40 w-full rounded-sm border border-[#d9dddf] object-cover"
                  />
                  <p className="mt-2 text-[10px] text-[#90969c]">
                    {article.category}
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl leading-tight text-[#1a2127]">
                      {article.title}
                    </h3>
                    <span className="shrink-0 text-[10px] text-[#90969c]">
                      {article.date}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[#667077]">
                    {article.excerpt}
                  </p>
                  <a
                    href={`/insights/${article.slug}`}
                    className="mt-2 inline-block text-xs font-medium text-[#1a2127]"
                  >
                    Continue Reading →
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-[#5e666d]">
              <span>Page 1 of 20</span>
              <a href="#" className="px-1">
                {"<"}
              </a>
              <a href="#" className="px-1 text-[#1e252a]">
                1
              </a>
              <a href="#" className="px-1">
                2
              </a>
              <a href="#" className="px-1">
                3
              </a>
              <a href="#" className="px-1">
                4
              </a>
              <a href="#" className="px-1">
                5
              </a>
              <a href="#" className="px-1">
                {">"}
              </a>
              <span>Go to page</span>
              <a href="#" className="px-1">
                100
              </a>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default InsightsPage;
