import { useEffect, useRef, useState } from "react";
import ABOUT_BG from "../assets/main/aboutbg.svg";
import BACKGROUND from "../assets/sections/background.jpg";
import PARTNER_BG from "../assets/sections/cards/partner.jpg";
import ROOTED_BG from "../assets/sections/cards/rooted.jpg";
import PARALLEX from "../assets/sections/parallex.svg"
import OUR_VALUES_BG from "../assets/sections/our-values.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ParallaxReveal from "../sections/ParallaxReveal";
import { TEAM_MEMBERS } from "../data/teamMembers";

function useCountUp(target, duration = 1800) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, count };
}

function StatCard({ value, label }) {
  const match = value.match(/^(\d+)([+%]?)$/);
  const num = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const { ref, count } = useCountUp(num);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-[#bde1ce] bg-white px-5 py-4"
    >
      <p className="text-5xl font-bold text-[#0d5c65] sm:text-6xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-[#5d666d]">{label}</p>
    </div>
  );
}

const values = [
  ["Trustworthy", ""],
  ["Empathy", ""],
  ["Mutual Respect", "For co-workers, clients, colleagues, and the profession."],
  ["Education", ""],
  ["Excellent Service", ""],
  [
    "Presence and Ambience",
    "Great and professional appearance in person and in space.",
  ],
  ["God at the Center", ""],
  ["Charitable", ""],
  ["Inclusiveness", "Everyone matters."],
  ["Positive Mindset", ""],
];

const experts = ["glorious-ofeh", "ebitibi-akeke", "adedamola-fagbamigbe"];

function AboutPage() {
  return (
    <>
      <Header currentPage="about" />
      <section
        className="relative flex h-[60vh] sm:min-h-screen items-center overflow-hidden bg-[#050707] px-4 pt-40 sm:py-24 text-white sm:px-8"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl  text-center flex flex-col gap-4">
          <div className="-mt-50">
            <h1 className="font-display text-4xl sm:text-6xl top-4">
             Law Practiced with Purpose.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/90 sm:text-xl">
              We are a new-generation law firm defined not just by what we know, but by how deeply we care. BSY Legal exists to take legal practice in Nigeria to its highest potential.
            </p>
          </div>
          {/* <div className="pointer-events-none absolute -left-[80vw] top-[10vh] hidden rounded-full bg-white px-5 py-3 text-sm text-[#2a3036] shadow-[0_0_28px_rgba(255,255,255,0.45)] md:block md:-left-[12vw]">
            Over 23 Cases Handled
          </div> */}
          <div className="pointer-events-none absolute right-4 top-[37vh] hidden rounded-full bg-white px-5 py-3 text-sm text-[#2a3036] shadow-[0_0_28px_rgba(255,255,255,0.45)] md:block md:right-20">
            35+ Attorneys
          </div>
          {/* <div className="pointer-events-none absolute -bottom-[5vh] -right-[20%] hidden rounded-full bg-white px-5 py-3 text-sm text-[#2a3036] shadow-[0_0_28px_rgba(255,255,255,0.45)] md:block">
            Established Since 1967
          </div> */}
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
      <div
        className="flex h-[] items-center justify-center "
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="bg-[#f5f6f3] text-[#1e252a] w-[98vw]">
          <section className="mx-auto max-w-[95vw] px-4 py-30   text-center sm:px-8">
            <p className="text-xs text-[#80aa36]">Who We Are</p>
            <h2 className="font-display mt-2 text-4xl text-[#151c21] sm:text-6xl">
              BSY Legal
            </h2>
            <p className="mx-auto mt-8 max-w-5xl text-lg leading-10 text-[#485159]">
              BSY Legal is a forward-thinking Nigerian law firm built on a
              singular conviction: that excellent legal service and genuine
              human empathy are not in competition. They are inseparable.
            </p>
            <blockquote className="mx-auto mt-6 max-w-3xl text-xl italic leading-9 text-[#0d5c65]">
              "We are not merely advisors. We are advocates, builders, and
              partners, assembled to help our clients navigate the law with
              confidence and clarity."
            </blockquote>
            <p className="mx-auto mt-6 max-w-5xl text-lg leading-10 text-[#485159]">
              From the boardroom to the courtroom, from protecting legacies to
              building businesses, we bring focused expertise across the legal
              needs that matter most, delivered with the care and precision
              that our clients deserve.
            </p>

            <h3 className="font-display mt-16 text-3xl text-[#151c21] sm:text-5xl">
              Our Approach
            </h3>
            <p className="mx-auto mt-6 max-w-5xl text-lg leading-10 text-[#485159]">
              We believe the future of law in Nigeria belongs to firms willing
              to think differently. BSY Legal was founded to challenge the
              status quo; assembling young, passionate, and highly skilled
              legal minds trained in niche areas of law, united under a
              culture of mutual respect and continuous growth.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-lg leading-10 text-[#485159]">
              Every client engagement is a relationship, not a transaction. We
              listen first. We understand the human stakes behind every
              matter. And we bring our full capability, legal and personal,
              to bear on every brief we carry.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-lg leading-10 text-[#485159]">
              Our firm is equally anchored in faith and service. We place God
              at the center of all we do, and we extend that spirit outward
              through charitable engagement and a commitment to
              inclusiveness, because we believe everyone matters.
            </p>
            <div className="mx-auto mt-12 max-w-5xl space-y-4 text-left">
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl text-[#0d5c65] sm:text-xl">
                  2021
                </span>
                <span className="relative flex-1 border-t-2 border-dotted border-[#bdc8cc]">
  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#bdc8cc]">
    →
  </span>
</span>
                {/* <span className="text-2xl font-semibold text-[#0d5c65] sm:text-lg">
                  Firm established
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl text-[#0d5c65] sm:text-xl">
                  2018
                </span>
                <span className="relative flex-1 border-t-2 border-dotted border-[#bdc8cc]">
  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#bdc8cc]">
    →
  </span>
</span>
                <span className="text-2xl font-semibold text-[#0d5c65] sm:text-lg">
                  Expanded into corporate law
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl text-[#0d5c65] sm:text-xl">
                  2022
                </span>
                <span className="relative flex-1 border-t-2 border-dotted border-[#bdc8cc]">
  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#bdc8cc]">
    →
  </span>
</span> */}
                <span className="text-2xl font-semibold text-[#0d5c65] sm:text-lg">
                  Firm established
                </span>
              </div>
            </div>
          </section>
          <ParallaxReveal
            image={PARALLEX}
            height="60vh"
            eyebrow=""
            title=""
            description="
  "
          >
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
              <div className="grid gap-0 rounded-sm border border-[#eceeed] bg-[#fbfcfa] md:grid-cols-2">
                <div className="p-10">
                  <h3 className="font-display text-4xl sm:text-5xl">
                    Our Mission
                  </h3>

                  <p className="mt-4 text-lg text-[#6b747b]">
                    To assemble the best team of young, passionate lawyers
                    with quality experience in niche areas of law, under a
                    fully balanced and rewarding environment, solving
                    clients' legal needs with empathy.
                  </p>
                </div>

                <div className="p-10">
                  <h3 className="font-display text-4xl sm:text-5xl">
                    Our Vision
                  </h3>

                  <p className="mt-4 text-lg text-[#6b747b]">
                    To build a New-Generation Law Firm to Take Over the
                    Center Stage of Law Practice in Nigeria.
                  </p>
                </div>
              </div>
            </section>
          </ParallaxReveal>
          <section className="relative mx-auto grid max-w-[90vw] -mt-40 z-30 items-stretch px-4 pt-40 pb-20 sm:px-8 md:grid-cols-[1.3fr_1fr]">
            <div className="bg-[#f2f3f1] p-8 md:p-12">
              <h3 className="font-display text-4xl sm:text-6xl">Our Values</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {values.map(([title, text]) => (
                  <div key={title}>
                    <h4 className="text-2xl font-semibold sm:text-3xl">
                      {title}
                    </h4>
                    {text && (
                      <p className="mt-2 text-base leading-7 text-[#5d666d]">
                        {text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          <div
  className="min-h-[340px] [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] hidden sm:block"
  style={{
    backgroundImage: `url(${OUR_VALUES_BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
          </section>

          <section className="mx-auto max-w-[90vw] px-4 pb-20 sm:px-8">
            <div
              className="rounded-3xl px-8 py-20  text-center text-white"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ROOTED_BG})`,
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
            </div>
          </section>

          {/* <section className="mx-auto max-w-[90vw] px-4 pb-20 text-center sm:px-8">
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
                <StatCard key={value} value={value} label={label} />
              ))}
            </div>
          </section> */}

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
                    <img
                      src={member.image}
                      alt={member.name}
                      className="mx-auto h-48 w-48 rounded-full object-cover"
                    />
                    <h4 className="mt-5 text-3xl font-semibold text-[#1d2429] sm:text-4xl">
                      {member.name}
                    </h4>
                    <p className="mt-1 text-sm text-[#8b9196]">
                      {member.role}
                    </p>
                    <a
                      href={`/team/${member.slug}`}
                      className="mt-2 inline-flex rounded-full border border-[#d4e6df] px-3 py-1 text-xs font-medium text-[#256169] hover:bg-[#d4e6df]/20 transition"
                    >
                      View Profile
                    </a>
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

export default AboutPage;
