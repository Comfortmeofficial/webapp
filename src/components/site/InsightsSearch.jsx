"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const TOP_BG = "/assets/sections/topbackground.png";
const WOMAN_IMAGE = "/assets/sections/woman_law.svg";

function formatDate(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsSearch({ articles }) {
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesQuery =
        query.trim().length === 0 ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        (article.excerpt || "").toLowerCase().includes(query.toLowerCase());
      return matchesQuery;
    });
  }, [articles, query]);

  return (
    <>
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
          Insights &<br />
          Publications
        </h1>

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
          {filteredArticles.length === 0 && (
            <p className="text-sm text-[#667077]">
              {articles.length === 0
                ? "No articles published yet."
                : "No articles match your search."}
            </p>
          )}
          {filteredArticles.map((article) => (
            <article key={article.slug}>
              <Link href={`/insights/${article.slug}`} className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="h-40 w-full rounded-sm border border-[#d9dddf] object-cover transition hover:opacity-90"
                />
              </Link>
              <p className="mt-2 text-[10px] text-[#90969c]">{article.category}</p>
              <div className="mt-1 flex items-center justify-between gap-2">
                <Link href={`/insights/${article.slug}`} className="hover:text-[#18535b] transition">
                  <h3 className="font-display text-xl leading-tight text-[#1a2127]">
                    {article.title}
                  </h3>
                </Link>
                {article.publishedAt && (
                  <span className="shrink-0 text-[10px] text-[#90969c]">
                    {formatDate(article.publishedAt)}
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs leading-5 text-[#667077]">
                {article.excerpt}
              </p>
              <Link
                href={`/insights/${article.slug}`}
                className="mt-2 inline-block text-xs font-medium text-[#1a2127]"
              >
                Continue Reading →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
