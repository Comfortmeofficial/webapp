import Button from "../components/Button";

const articles = [
  {
    date: "MARCH 12, 2026",
    title: "Key Legal Considerations for Business Expansion",
    excerpt:
      "A practical overview of the legal factors businesses should consider when scaling operations.",
  },
  {
    date: "FEBRUARY 28, 2026",
    title: "Understanding Property Due Diligence in Nigeria",
    excerpt:
      "Essential checks and legal steps to ensure secure and compliant property transactions.",
  },
  {
    date: "FEBRUARY 10, 2026",
    title: "Navigating Workplace Disputes: A Legal Perspective",
    excerpt:
      "How employers and employees can approach disputes while staying compliant with labour laws.",
  },
  {
    date: "MARCH 12, 2026",
    title: "Key Legal Considerations for Business Expansion",
    excerpt:
      "A practical overview of the legal factors businesses should consider when scaling operations.",
  },
];

function Contact() {
  const logoItems = Array.from({ length: 7 });
  const marqueeLogos = [...logoItems, ...logoItems];

  return (
    <section id="contact" className="bg-[#f5f6f3] py-20">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-8">
        <div>
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
              href="#"
              variant="secondary"
              className="rounded-sm px-4 py-2 text-xs"
            >
              Read More Articles
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article key={`${article.title}-${article.date}`} className="p-1">
              <div
                className="h-44 w-full border border-[#d5d7d8] bg-[linear-gradient(135deg,#4b3828,#b08b5a)]"
                aria-label="Article image placeholder"
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
                href="#"
                className="mt-5 inline-block text-xs font-medium text-[#1f262c]"
              >
                Continue Reading →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-md bg-[#eef2ef] px-6 py-14 text-center">
          <p className="text-xs text-[#80aa36]">Recognized & Affiliated With</p>
          <h3 className="font-display mt-3 text-5xl text-[#12181d]">
            Trusted. Recognized. Connected.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5f676d]">
            We maintain strong professional ties and uphold the highest
            standards within the legal industry.
          </p>
          <div className="mx-auto mt-10 max-w-6xl overflow-hidden">
            <div className="animate-marquee-left-slow flex w-max items-center gap-10">
              {marqueeLogos.map((_, index) => (
                <div
                  key={index}
                  className="h-20 w-20 shrink-0 rounded-full border border-[#d8dcda] bg-white"
                  aria-label="Affiliation logo placeholder"
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
