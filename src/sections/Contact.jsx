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
    <section id="contact" className="bg-[#f5f6f3] py-20">
      <div className="mx-auto max-w-full  sm:px-8">
        <div className="mx-15 max-w-2xl ">
          <p className="text-xs text-[#80aa36]">Articles & Insights</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-5xl leading-[0.95] text-[#151b20] sm:text-6xl">
                Insights &
                <br />
                Publications
              </h2>
              <p className="mt-4 max-w-xl text-xl leading-8 text-[#434c53] sm:text-2xl">
                Expert perspectives on legal developments, business risks, and
                regulatory changes.
              </p>
            </div>
            <Button
              as="a"
              href="/insights"
              variant="secondary"
              className="rounded-sm px-4 py-2 text-xs"
            >
              Read More Articles
            </Button>
          </div>
        </div>

        <div className="mt-8 mx-15 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article key={`${article.title}-${article.date}`} className="p-1">
              <img
                src={article.image}
                alt={article.title}
                className="h-44 w-full border border-[#d5d7d8] object-cover"
              />
              <p className="mt-3 text-[11px] tracking-wide text-[#9ca2a8]">
                {article.date}
              </p>
              <h3 className="mt-1 font-display text-[34px] leading-[1.08] text-[#1f262c]">
                {article.title}
              </h3>
              <p className="mt-1 text-[11px] text-[#aeb2b7]">Corporate Law</p>
              <p className="mt-3 text-base leading-7 text-[#4c565d]">
                {article.excerpt}
              </p>
              <a
                href={`/insights/${article.slug}`}
                className="mt-5 inline-block text-xs font-medium text-[#1f262c]"
              >
                Continue Reading →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-20 w-[90vw] h-[70vh] rounded-md bg-[#eef2ef] px-2  text-center flex flex-col items-center justify-center mx-auto">
          <p className="text-xs text-[#80aa36]">Recognized & Affiliated With</p>
          <h3 className="font-display mt-3 text-5xl text-[#12181d]">
            Trusted. Recognized. Connected.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5f676d]">
            We maintain strong professional ties and uphold the highest
            standards within the legal industry.
          </p>
          <div className="mx-auto mt-20 max-w-full overflow-hidden">
            <div className="animate-marquee-left-slow flex w-max items-center gap-10">
              {marqueeLogos.map((_, index) => (
                <img
                  key={index}
                  src={logoItems[index % logoItems.length]}
                  alt={`Trusted Logo ${index + 1}`}
                  className="h-24 w-auto object-contain opacity-80"
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
