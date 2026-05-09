import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

const values = [
  [
    "Integrity",
    "We uphold the highest ethical standards in every engagement, ensuring honesty, transparency, and accountability.",
  ],
  [
    "Excellence",
    "We are committed to delivering superior legal services through expertise, diligence, and attention to detail.",
  ],
  [
    "Client Commitment",
    "Our clients are at the center of everything we do. We listen, understand, and act in their best interests.",
  ],
  [
    "Cultural Pride",
    "We embrace and reflect the richness of African heritage in our identity, perspective, and approach to legal practice.",
  ],
  [
    "Innovation",
    "We continuously evolve, adopting modern legal strategies and solutions to meet changing client needs.",
  ],
];

const experts = [
  "Mark Gallogly",
  "Jody Greenstone Miller",
  "Rachel More-Oshodi",
];

function AboutPage() {
  return (
    <>
      <Header currentPage="about" />
      <main className="bg-[#f5f6f3] text-[#1e252a]">
        <section className="relative overflow-hidden bg-[#050707] px-4 py-20 text-white sm:px-8 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(104,59,24,0.55),rgba(5,7,7,0.95)_66%)]" />
          <div className="relative mx-auto max-w-7xl text-center">
            <h1 className="font-display text-4xl sm:text-6xl">
              About BSY Legal
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/90 sm:text-xl">
              A full-service Nigerian law firm built on trust, excellence, and a
              deep-rooted commitment to African identity.
            </p>
            <div className="mx-auto mt-10 h-60 max-w-2xl rounded-[999px] border border-white/20 bg-[linear-gradient(180deg,rgba(137,78,35,0.65),rgba(54,30,11,0.2))]" />
            <div className="pointer-events-none absolute left-4 top-[62%] hidden rounded-full bg-white px-5 py-3 text-sm text-[#2a3036] shadow-[0_0_28px_rgba(255,255,255,0.45)] md:block md:left-20">
              Over 23 Cases Handled
            </div>
            <div className="pointer-events-none absolute right-4 top-[42%] hidden rounded-full bg-white px-5 py-3 text-sm text-[#2a3036] shadow-[0_0_28px_rgba(255,255,255,0.45)] md:block md:right-20">
              35+ Attorneys
            </div>
            <div className="pointer-events-none absolute bottom-6 right-[18%] hidden rounded-full bg-white px-5 py-3 text-sm text-[#2a3036] shadow-[0_0_28px_rgba(255,255,255,0.45)] md:block">
              Established Since 1967
            </div>
            <div className="mt-6 grid gap-3 md:hidden">
              <p className="rounded-full bg-white px-5 py-3 text-sm text-[#2a3036]">
                Over 23 Cases Handled
              </p>
              <p className="rounded-full bg-white px-5 py-3 text-sm text-[#2a3036]">
                35+ Attorneys
              </p>
              <p className="rounded-full bg-white px-5 py-3 text-sm text-[#2a3036]">
                Established Since 1967
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 py-20 text-center sm:px-8">
          <p className="text-xs text-[#80aa36]">Hear From Us</p>
          <h2 className="font-display mt-2 text-4xl text-[#151c21] sm:text-6xl">
            Our Story
          </h2>
          <p className="mx-auto mt-8 max-w-5xl text-lg leading-10 text-[#485159]">
            BSY Legal was founded with a clear vision to build a law firm that
            delivers world-class legal services while remaining deeply rooted in
            African values and identity. Through dedication, discipline, and an
            unwavering pursuit of results, BSY Legal has established a
            reputation for reliability, professionalism, and strategic legal
            thinking.
          </p>
          <div className="mx-auto mt-12 max-w-5xl space-y-4 text-left">
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl text-[#0d5c65] sm:text-6xl">
                2015
              </span>
              <span className="h-px flex-1 bg-[#bdc8cc]" />
              <span className="text-2xl font-semibold text-[#0d5c65] sm:text-5xl">
                Firm established
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl text-[#0d5c65] sm:text-6xl">
                2018
              </span>
              <span className="h-px flex-1 bg-[#bdc8cc]" />
              <span className="text-2xl font-semibold text-[#0d5c65] sm:text-5xl">
                Expanded into corporate law
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl text-[#0d5c65] sm:text-6xl">
                2022
              </span>
              <span className="h-px flex-1 bg-[#bdc8cc]" />
              <span className="text-2xl font-semibold text-[#0d5c65] sm:text-5xl">
                Recognised by national legal body
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-20 sm:px-8">
          <div className="grid gap-0 rounded-sm border border-[#eceeed] bg-[#fbfcfa] md:grid-cols-2">
            <div className="p-10">
              <h3 className="font-display text-4xl sm:text-5xl">Our Mission</h3>
              <p className="mt-4 text-lg text-[#6b747b]">
                To deliver exceptional legal solutions with integrity,
                precision, and unwavering dedication.
              </p>
            </div>
            <div className="p-10">
              <h3 className="font-display text-4xl sm:text-5xl">Our Vision</h3>
              <p className="mt-4 text-lg text-[#6b747b]">
                To be a leading African law firm recognised globally for
                excellence, innovation, and cultural authenticity.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[90vw] items-stretch px-4 pb-20 sm:px-8 md:grid-cols-[1.3fr_1fr]">
          <div className="bg-[#f2f3f1] p-8 md:p-12">
            <h3 className="font-display text-4xl sm:text-6xl">Our Values</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {values.map(([title, text]) => (
                <div key={title}>
                  <h4 className="text-2xl font-semibold sm:text-3xl">
                    {title}
                  </h4>
                  <p className="mt-2 text-base leading-7 text-[#5d666d]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[340px] bg-[linear-gradient(135deg,#4d3a28,#b59564)] [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]" />
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-20 sm:px-8">
          <div className="rounded-3xl bg-[linear-gradient(120deg,#2d2f3b,#5a2a1b,#1f2f44)] px-8 py-14 text-center text-white">
            <h3 className="font-display text-4xl sm:text-6xl">
              Rooted in African Excellence
            </h3>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-9 text-white/90">
              At BSY Legal, our identity is deeply intertwined with the richness
              of African heritage. We are proud to reflect the strength,
              resilience, and sophistication of our culture in every aspect of
              our practice.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-20 text-center sm:px-8">
          <h3 className="font-display text-4xl sm:text-6xl">
            Our Key Milestones
          </h3>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <p className="text-[#0d5c65]">
              Recognised by Nigerian Bar Association
            </p>
            <p className="text-[#0d5c65]">Led major litigation cases</p>
            <p className="text-[#0d5c65]">Advised multinational clients</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              ["10+", "Years in Existence"],
              ["200+", "Cases Handled"],
              ["50+", "Corporate Clients"],
              ["98%", "Client Satisfaction"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-2xl border border-[#bde1ce] bg-white px-5 py-4"
              >
                <p className="text-5xl font-bold text-[#0d5c65] sm:text-6xl">
                  {value}
                </p>
                <p className="mt-1 text-sm text-[#5d666d]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-20 text-center sm:px-8">
          <h3 className="font-display text-4xl sm:text-6xl">
            Meet Our Legal Experts
          </h3>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {experts.map((name) => (
              <article key={name}>
                <div className="mx-auto h-48 w-48 rounded-full bg-[linear-gradient(135deg,#4f3a28,#b79565)]" />
                <h4 className="mt-5 text-3xl font-semibold text-[#1d2429] sm:text-4xl">
                  {name}
                </h4>
                <p className="mt-1 text-sm text-[#8b9196]">
                  Senior Legal Counsel
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-24 sm:px-8">
          <div className="rounded-2xl bg-[linear-gradient(90deg,#3d2f2b,#4c3a43,#2b2f3f)] px-8 py-14 text-center text-white">
            <h3 className="font-display text-4xl sm:text-6xl">
              Partner With a Firm You Can Trust
            </h3>
            <p className="mt-3 text-lg text-white/85">
              Let us provide the legal clarity and representation you need
            </p>
            <Button as="a" href="#" variant="accent" className="mt-6">
              Book a Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
