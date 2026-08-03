import EFCC from "../assets/sections/trusted-logo/efcc.svg";
import FIRS from "../assets/sections/trusted-logo/firs.svg";
import GOV from "../assets/sections/trusted-logo/gov.svg";
import NBA from "../assets/sections/trusted-logo/nba.svg";
import TCLP from "../assets/sections/trusted-logo/tclp.svg";
import { INSIGHT_ARTICLES } from "../data/insights";

const logoItems = [EFCC, NBA, FIRS, GOV, TCLP];

const articles = INSIGHT_ARTICLES.slice(0, 4).map((article) => ({
  date: article.date,
  title: article.title,
  category: article.category,
  excerpt: article.excerpt,
  image: article.image,
  slug: article.slug,
}));

function Contact() {
  // const logoItems = Array.from({ length: 7 });
  const marqueeLogos = [...logoItems, ...logoItems, ...logoItems, ...logoItems];

  return (
    <section id="contact" className="bg-[#f5f6f3] py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-full px-4 sm:px-8">
        <div className="mx-4 sm:mx-15 flex flex-col gap-4 sm:gap-6">
          <p className="text-xs text-[#80aa36]">Articles & insights</p>
          <div className="flex flex-row items-start justify-between gap-4 sm:gap-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-[#151b20]">
              Insights &
              <br />
              Publications
            </h2>
            <a
              href="/insights"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#d9d9d9] bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-[#1f262c] hover:bg-[#f2f2f2] transition"
            >
              Read More Articles <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 mx-4 sm:mx-15 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article key={`${article.title}-${article.date}`} className="flex h-full flex-col p-1">
              <img
                src={article.image}
                alt={article.title}
                className="h-32 sm:h-44 w-full border border-[#d5d7d8] object-cover"
              />
              <p className="mt-2 sm:mt-3 text-[10px] sm:text-[11px] uppercase tracking-wide text-[#b08d57]">
                {article.date}
              </p>
              <h3 className="mt-1 line-clamp-2 min-h-[60px] font-display text-[24px] font-bold leading-[30px] tracking-normal text-[#1f262c]">
                {article.title}
              </h3>
              <p className="mt-1 text-[10px] sm:text-[11px] text-[#aeb2b7]">{article.category}</p>
              <p className="mt-2 sm:mt-3 line-clamp-3 text-xs sm:text-base leading-6 sm:leading-7 text-[#4c565d]">
                {article.excerpt}
              </p>
              <a
                href={`/insights/${article.slug}`}
                className="mt-auto pt-3 sm:pt-5 inline-block text-xs font-medium text-[#1f262c] hover:text-[#18535b] transition"
              >
                Continue Reading →
              </a>
            </article>
          ))}
        </div>

        {/*
        <div className="mt-16 sm:mt-20 w-[90vw] sm:w-auto h-auto sm:h-[70vh] rounded-md bg-[#eef2ef] px-4 sm:px-2 py-8 sm:py-0 text-center flex flex-col items-center justify-center mx-auto">
          <p className="text-xs text-[#80aa36]">Recognized & Affiliated With</p>
          <h3 className="font-display mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-5xl text-[#12181d]">
            Trusted. Recognized. Connected.
          </h3>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-[#5f676d] px-2 sm:px-0">
            Our services are tailored to meet the unique needs of our clients and the industries in which they operate.
          </p>
          <div className="mx-auto mt-10 sm:mt-20 max-w-full overflow-hidden w-full">
            <div className="animate-marquee-left-slow flex w-max items-center gap-6 sm:gap-10 px-2">
              {marqueeLogos.map((_, index) => (
                <img
                  key={index}
                  src={logoItems[index % logoItems.length]}
                  alt={`Trusted Logo ${index + 1}`}
                  className="h-16 sm:h-24 w-auto object-contain opacity-80 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}

export default Contact;
