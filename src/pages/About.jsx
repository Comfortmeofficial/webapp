import { useEffect, useRef, useState } from "react";
import ABOUT_BG from "../assets/main/aboutbg.jpg";
import BACKGROUND from "../assets/sections/background.jpg";
import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
import MISSION_BG from "../assets/sections/mission_bg.png";
import PARTNER_BG from "../assets/sections/cards/partner.jpg";
import ROOTED_BG from "../assets/sections/cards/rooted.jpg";
import PARALLEX from "../assets/sections/parallex.svg"
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

const coreValues = [
  {
    group: "BRAVE",
    items: [
      ["Belief", "We have confidence in our mission and our people."],
      [
        "Reliability",
        "We carry out consistent and dependable legal service delivery.",
      ],
      ["Accountability", "We own our actions, advice, and outcomes."],
      ["Vigilant", "We are precise, aware, and proactive."],
      [
        "Excellence",
        "We are relentless in our pursuit of world-class legal service.",
      ],
    ],
  },
  {
    group: "SWITCH",
    items: [
      [
        "Strategic",
        "We ensure that the solutions we deliver are well structured, sustainable and have our expected outcomes.",
      ],
      [
        "Winning Mindset",
        "We ensure our services are focused on achieving success and demonstrating resilience in complex matters.",
      ],
      [
        "Innovation",
        "We deliver creative, modern, contemporary, and technology-driven legal solutions.",
      ],
      [
        "Think",
        "We maintain a critical, independent, and forward-thinking legal mindset in every matter.",
      ],
      [
        "Competence",
        "We demonstrate strong technical expertise supported by continuous professional growth.",
      ],
      [
        "Homegrown",
        "We foster a culture of gratitude, humility, and mutual respect in all client and team relationships.",
      ],
    ],
  },
];

const experts = ["ebitibi-akeke", "glorious-ofeh", "adedamola-fagbamigbe"];

function AboutPage() {
  return (
    <>
      <Header currentPage="about" />
      <section
        className="relative flex h-[95vh]  items-center overflow-hidden bg-[#050707] px-4 pt-40 -mt-32 sm:py-24 text-white sm:px-8"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-7xl  text-center flex flex-col gap-4">
          <div className="-mt-50">
            <h1 className="font-display text-4xl sm:text-6xl">
              Law Practiced with <span className="text-[#d4af6a]">Purpose.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base font-light leading-8 text-white/90 sm:text-md">
              We are a new-generation law firm defined not just by what we know, but by how deeply we care. BSY Legal exists to take legal practice in Nigeria to its highest potential.
            </p>
          </div>
          <div className="pointer-events-none absolute -right-[25vw] -bottom-[20vh] hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#2a3036] shadow-[0_0_28px_rgba(255,255,255,0.45)] md:flex">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path d="M12 3v18M7 21h10M5 7l-3 6a3 3 0 0 0 6 0l-3-6ZM19 7l-3 6a3 3 0 0 0 6 0l-3-6ZM5 7h14M12 3l-2 4h4l-2-4Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            35+ Attorneys
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

            {/* <blockquote className="mx-auto mt-16 max-w-3xl text-center text-xl italic leading-9 text-[#0d5c65]">
              "We are not merely advisors. We are advocates, builders, and
              partners, assembled to help our clients navigate the law with
              confidence and clarity."
            </blockquote> */}
            {/* <p className="mx-auto mt-6 max-w-5xl text-center text-lg leading-10 text-[#485159]">
              From the boardroom to the courtroom, from protecting legacies to
              building businesses, we bring focused expertise across the legal
              needs that matter most, delivered with the care and precision
              that our clients deserve.
            </p> */}
            {/*
            <div className="mx-auto mt-12 max-w-5xl space-y-4 text-left">
              {[
                ["2021", "Firm established"],
                ["", "Expanded into corporate law"],
                ["", "Recognised by national legal body"],
              ].map(([year, label]) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="font-display text-xl text-[#0d5c65] md:text-4xl">
                    {year}
                  </span>
                  <span className="relative flex-1 border-t-2 border-dotted border-[#bdc8cc]">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#bdc8cc]">
                      →
                    </span>
                  </span>
                  <span className="text-lg font-semibold text-[#0d5c65] md:text-2xl">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            */}
          </section>
          <ParallaxReveal
            image={PARALLEX}
            height="60vh"
            eyebrow=""
            title=""
            description="
  "
          >
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
                    Providing first-rate service focused on delivering
                    deliberate BRAVE steps that drives a transformational
                    SWITCH in legal mindset, practice, and culture.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-4xl sm:text-5xl">
                    Our Vision
                  </h3>

                  <p className="mt-4 text-lg text-[#6b747b]">
                    To be a premier law firm with an Africa-centered
                    perspective, committed to strengthening the Nigerian
                    legal system.
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
                backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${ROOTED_BG})`,
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
                    <a href={`/team/${member.slug}`} className="block">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="mx-auto h-[350px] w-[350px] rounded-full object-cover object-top opacity-100 transition hover:opacity-90"
                      />
                    </a>
                    <h4 className="mt-5 text-xl font-semibold text-[#1d2429] sm:text-2xl">
                      {member.name}
                    </h4>
                    <p className="mt-1 text-sm text-[#8b9196]">
                      {member.role}
                    </p>
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
