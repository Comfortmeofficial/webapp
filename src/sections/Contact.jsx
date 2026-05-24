import EFCC from "../assets/sections/trusted-logo/efcc.svg";
import FIRS from "../assets/sections/trusted-logo/firs.svg";
import GOV from "../assets/sections/trusted-logo/gov.svg";
import NBA from "../assets/sections/trusted-logo/nba.svg";
import TCLP from "../assets/sections/trusted-logo/tclp.svg";
import Button from "../components/Button";
import { INSIGHT_ARTICLES } from "../data/insights";

const logoItems = [EFCC, NBA, FIRS, GOV, TCLP];

const articles = INSIGHT_ARTICLES.slice(0, 4).map((article) => ({
  date: article.date,
  title: article.title,
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
        <div className="mx-4 sm:mx-15 max-w-2xl flex flex-col items-start gap-6 sm:gap-8">
          <p className="text-xs text-[#80aa36]">Articles & Insights</p>
          <div className="mt-3 flex flex-col sm:flex-wrap items-start sm:items-end justify-between gap-4 sm:gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-[#151b20]">
                Insights &
                <br />
                Publications
              </h2>
              <p className="mt-3 sm:mt-4 max-w-xl text-base sm:text-lg md:text-2xl leading-7 md:leading-8 text-[#434c53]">
                Expert perspectives on legal developments, business risks, and
                regulatory changes.
              </p>
            </div>
            <Button
              as="a"
              href="/insights"
              variant="secondary"
              className="rounded-sm px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1f262c] hover:text-[#18535b] transition self-start sm:self-end"
            >
              Read More Articles
            </Button>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 mx-4 sm:mx-15 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article key={`${article.title}-${article.date}`} className="p-1">
              <img
                src={article.image}
                alt={article.title}
                className="h-32 sm:h-44 w-full border border-[#d5d7d8] object-cover"
              />
              <p className="mt-2 sm:mt-3 text-[10px] sm:text-[11px] tracking-wide text-[#9ca2a8]">
                {article.date}
              </p>
              <h3 className="mt-1 font-display text-xl sm:text-2xl md:text-[34px] leading-[1.1] sm:leading-[1.08] text-[#1f262c]">
                {article.title}
              </h3>
              <p className="mt-1 text-[10px] sm:text-[11px] text-[#aeb2b7]">Corporate Law</p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-base leading-6 sm:leading-7 text-[#4c565d]">
                {article.excerpt}
              </p>
              <a
                href={`/insights/${article.slug}`}
                className="mt-3 sm:mt-5 inline-block text-xs font-medium text-[#1f262c] hover:text-[#18535b] transition"
              >
                Continue Reading →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 w-[90vw] sm:w-auto h-auto sm:h-[70vh] rounded-md bg-[#eef2ef] px-4 sm:px-2 py-8 sm:py-0 text-center flex flex-col items-center justify-center mx-auto">
          <p className="text-xs text-[#80aa36]">Recognized & Affiliated With</p>
          <h3 className="font-display mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-5xl text-[#12181d]">
            Trusted. Recognized. Connected.
          </h3>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-[#5f676d] px-2 sm:px-0">
            We maintain strong professional ties and uphold the highest
            standards within the legal industry.
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
      </div>
    </section>
  );
}

export default Contact;
