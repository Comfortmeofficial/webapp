import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Button from "@/components/site/Button";
import ParallaxReveal from "@/components/site/sections/ParallaxReveal";
import { TEAM_MEMBERS } from "@/lib/data/teamMembers";

export const metadata = {
  title: "The Firm | BSY Legal",
  description:
    "BSY Legal is a new-generation Nigerian law firm built on integrity, empathy, and excellence.",
};

const ABOUT_BG = "/assets/gallery/Highlights/IMG_9831.jpg";
const BACKGROUND = "/assets/sections/background.jpg";
const WOMAN_IMAGE = "/assets/sections/woman_law.svg";
const MISSION_BG = "/assets/sections/mission_bg.png";
const PARTNER_BG = "/assets/sections/cards/partner.jpg";
const ROOTED_BG = "/assets/sections/cards/rooted.jpg";
const PARALLEX = "/assets/sections/parallex.svg";

const coreValues = [
  {
    group: "",
    items: [
      ["Trustworthiness", "The foundation of every relationship we build."],
      ["Empathy", "Understanding the person behind every legal matter."],
      ["Mutual Respect", "For clients, colleagues, and the profession."],
      ["Education", "Committed to knowledge, growth, and legal literacy."],
      ["Excellent Service", "Nothing less than our very best, always."],
      [
        "Presence & Ambience",
        "Professional appearance in person and in space.",
      ],
      ["God at the Centre", "Our faith shapes everything we do."],
      ["Charitable", "Giving back to the communities we serve."],
      ["Inclusiveness", "Every person who walks through our doors matters."],
      [
        "Positive Mindset",
        "Solutions-focused, resilient, and forward-looking.",
      ],
    ],
  },
];

const experts = ["ebitibi-akeke", "glorious-ofeh", "adedamola-fagbamigbe"];

export default function AboutPage() {
  return (
    <>
      <Header currentPage="about" />
      <section
        className="relative flex h-[95vh]  items-center overflow-hidden bg-[#050707] px-4 pt-40 -mt-32 sm:py-24 text-white sm:px-8"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: " top",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl  text-center flex flex-col gap-4">
          <div className="mt-40">
            <h1 className="font-display text-4xl sm:text-6xl">
              Law Practiced with <span className="text-[#d4af6a]">Purpose.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base font-light leading-8 text-white/90 sm:text-md">
              We are a new-generation law firm defined not just by what we know, but by how deeply we care. BSY Legal exists to take legal practice in Nigeria to its highest potential.
            </p>
          </div>
        </div>
      </section>
      <div
        className="flex h-[] items-center justify-center "
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="bg-[#f5f6f3] text-[#1e252a] w-[98vw]">
          <section
            className="mx-auto max-w-[95vw] px-4 py-30 sm:px-8"
            style={{
              backgroundImage: `url(${WOMAN_IMAGE})`,
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="font-display text-4xl text-[#151c21] sm:text-5xl">
                  Who We Are
                </h2>
                <blockquote className="mt-6 border-l-4 border-[#b08d57] bg-[#faf6ec] p-6 text-lg italic leading-8 text-[#3f474d]">
                  BSY Legal is a forward-thinking Nigerian law firm built on a
                  singular conviction: that excellent legal service and
                  genuine human empathy are not in competition, they are
                  inseparable.
                </blockquote>
              </div>
              <div>
                <h3 className="font-display text-4xl text-[#151c21] sm:text-5xl">
                  Our Approach
                </h3>
                <p className="mt-6 text-lg leading-8 text-[#485159]">
                  We believe the future of law in Nigeria belongs to firms
                  willing to think differently. BSY Legal was founded to
                  challenge the status quo, assembling young, passionate, and
                  highly skilled legal minds trained in niche areas of law,
                  united under a culture of mutual respect and continuous
                  growth.
                </p>
                <p className="mt-6 text-lg leading-8 text-[#485159]">
                  Every client engagement is a relationship, not a
                  transaction. We listen first. We understand the human
                  stakes behind every matter. And we bring our full
                  capability, legal and personal to bear on every brief we
                  carry.
                </p>
                <p className="mt-6 text-lg leading-8 text-[#485159]">
                  Our firm is equally anchored in faith and service. We place
                  God at the centre of all we do, and we extend that spirit
                  outward through charitable engagement and a commitment to
                  inclusiveness because we believe everyone matters.
                </p>
              </div>
            </div>
          </section>
          <ParallaxReveal image={PARALLEX} height="60vh">
            <section
              className="-mx-4 w-[calc(100%+2rem)] px-4 py-16 sm:-mx-8 sm:w-[calc(100%+4rem)] sm:px-8"
              style={{
                backgroundImage: `linear-gradient(rgba(245,246,243,0.85), rgba(245,246,243,0.85)), url(${MISSION_BG})`,
                backgroundRepeat: "no-repeat, repeat",
              }}
            >
              <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-16">
                <div>
                  <h3 className="font-display text-4xl sm:text-5xl">
                    Our Mission
                  </h3>

                  <p className="mt-4 text-lg text-[#6b747b]">
                    To assemble the best team of young, passionate lawyers
                    with quality experience in niche areas of law, under a
                    fully balanced and rewarding environment, solving
                    clients&apos; legal needs with empathy at every turn.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-4xl sm:text-5xl">
                    Our Vision
                  </h3>

                  <p className="mt-4 text-lg text-[#6b747b]">
                    To build a new-generation law firm that takes centre
                    stage in the practice of law in Nigeria, redefining what
                    it means to deliver justice with excellence, integrity,
                    and ambition.
                  </p>
                </div>
              </div>
            </section>
          </ParallaxReveal>
          <section className="relative mx-auto max-w-[90vw] z-30 px-4 pt-20 pb-20 sm:px-8">
            <h3 className="font-display text-4xl sm:text-6xl">Our Core Values</h3>
            {coreValues.map(({ group, items }) => (
              <div key={group} className="mt-12">
                <div className="flex items-center gap-4">
                  <span className="shrink-0 text-lg font-bold tracking-wide text-[#151c21]">
                    {group}
                  </span>
                  <span className="flex-1 border-t-2 border-dashed border-[#b08d57]" />
                </div>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                  {items.map(([title, text]) => (
                    <div key={title}>
                      <h4 className="text-xl font-semibold text-[#151c21]">
                        {title}
                      </h4>
                      <p className="mt-2 text-base leading-7 text-[#5d666d]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="mx-auto max-w-[90vw] px-4 pb-20 sm:px-8">
            <div
              className="rounded-3xl px-8 py-20  text-center text-white"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.55)), url(${ROOTED_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="font-display text-4xl sm:text-6xl">
                Rooted in African Excellence
              </h3>
              <p className="mx-auto mt-4 max-w-4xl text-lg leading-9 text-white/90">
                At BSY Legal, our identity is deeply intertwined with the
                richness of African heritage. We are proud to reflect the
                strength, resilience, and sophistication of our culture in every
                aspect of our practice.
              </p>
              <p className="mx-auto mt-2 max-w-4xl text-lg leading-9 text-white/90">
                Our approach blends global legal standards with a distinctly
                African perspective, allowing us to serve both local and
                international clients with authenticity and depth
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-[90vw] px-4 pb-20 text-center sm:px-8">
            <h3 className="font-display text-4xl sm:text-6xl">
              Meet Our Legal Experts
            </h3>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {experts.map((slug) => {
                const member = TEAM_MEMBERS.find((item) => item.slug === slug);
                if (!member) return null;
                return (
                  <article key={member.slug}>
                    <Link href={`/team/${member.slug}`} className="block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="mx-auto h-[350px] w-[350px] rounded-full object-cover object-top opacity-100 transition hover:opacity-90"
                      />
                      <h4 className="mt-5 text-xl font-semibold text-[#1d2429] sm:text-2xl">
                        {member.name}
                      </h4>
                      <p className="mt-1 text-sm text-[#8b9196]">
                        {member.role}
                      </p>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mx-auto max-w-[90vw] px-4 pb-24 sm:px-8">
            <div
              className="rounded-2xl px-8 py-34 text-center text-white"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${PARTNER_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="font-display text-4xl sm:text-6xl">
                Partner With a Firm You Can Trust
              </h3>
              <p className="mt-3 text-lg text-white/85">
                Let us provide the legal clarity and representation you need
              </p>
              <Button as="a" href="/contact" variant="accent" className="mt-6">
                Speak With Us
              </Button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
