import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Button from "@/components/site/Button";
import { TEAM_MEMBERS } from "@/lib/data/teamMembers";

export const metadata = {
  title: "Our Team | BSY Legal",
  description:
    "A team of experienced legal professionals dedicated to delivering excellence, integrity, and results.",
};

const BACKGROUND = "/assets/sections/background.jpg";
const TOP_BG = "/assets/sections/topbackground.png";
const WORK_WITH_BG = "/assets/sections/cards/workWith.jpg";
const WOMAN_IMAGE = "/assets/sections/woman_law.svg";

const FEATURED_SLUGS = ["ebitibi-akeke", "funmbi-onabolu", "glorious-ofeh"];
const featuredMembers = FEATURED_SLUGS.map((slug) =>
  TEAM_MEMBERS.find((member) => member.slug === slug),
).filter(Boolean);

const REST_SLUGS = ["adedamola-fagbamigbe", "ademola-temitope", "ebima-akeke", "deborah-lawrence"];
const restMembers = REST_SLUGS.map((slug) =>
  TEAM_MEMBERS.find((member) => member.slug === slug),
).filter(Boolean);

const shortName = (fullName) => fullName.split(" ").slice(0, 2).join(" ");

export default function TeamPage() {
  return (
    <>
      <Header currentPage="team" />
      <div
        className="flex h-[] items-center justify-center w-full overflow-x-hidden"
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="bg-[#f4f5f2] text-[#1f252b] w-[98vw] overflow-x-hidden">
          <section
            className="w-full sm:w-[98vw] min-h-screen sm:px-4 md:px-8 justify-center mx-auto flex flex-col items-center py-12 sm:py-16 overflow-x-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="rounded-sm px-4 sm:px-5 md:px-10 py-12 sm:py-16 md:py-20 text-center bg-white/80 w-full sm:w-[98vw] flex flex-col justify-center overflow-x-hidden">
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#171d22] pb-2 sm:pb-4 break-words">
                Our Team
              </h1>
              <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base md:text-lg leading-6 md:leading-7 text-[#3f474d] break-words">
                A team of experienced legal professionals dedicated to
                delivering excellence, integrity, and results.
              </p>

              <div className="mt-8 sm:mt-12 md:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-hidden">
                {featuredMembers.map((member) => (
                  <article key={member.slug}>
                    <Link href={`/team/${member.slug}`} className="block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="mx-auto h-56 sm:h-72 md:h-[350px] w-56 sm:w-72 md:w-[350px] rounded-full object-cover object-top transition hover:opacity-90"
                      />
                      <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-[#1e252a]">
                        {member.name}
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm leading-5 text-[#9aa0a5]">
                        {member.role}
                      </p>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="relative mx-auto max-w-full px-3 pt-6 pb-16 sm:px-4 md:px-8 md:pt-8 md:pb-20 overflow-x-hidden"
            style={{
              backgroundImage: `url(${WOMAN_IMAGE})`,
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundAttachment: "scroll",
            }}
          >
            <div className="rounded-sm border border-[#edf0ef] p-3 sm:p-4 md:p-6 relative z-10 overflow-x-hidden">
              <div className="grid gap-4 sm:gap-5 md:gap-7 grid-cols-2 lg:grid-cols-4 overflow-hidden">
                {restMembers.map((member) => (
                  <article key={member.slug} className="text-center p-2 sm:p-3">
                    <Link href={`/team/${member.slug}`} className="block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="mx-auto h-[200px] w-[200px] rounded-full border border-[#d9d9d9] object-cover object-top opacity-100 transition hover:opacity-90"
                      />
                      <h3 className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold text-[#1e252a]">
                        {shortName(member.name)}
                      </h3>
                      <p className="text-xs text-[#6b747b]">{member.role}</p>
                    </Link>
                    <Link
                      href={`/team/${member.slug}`}
                      className="mt-2 inline-flex rounded-full border border-[#d4e6df] px-2 sm:px-3 py-1 text-[10px] font-medium text-[#256169] hover:bg-[#d4e6df]/20 transition"
                    >
                      View Profile
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-full px-3 pb-16 sm:px-4 md:px-8 md:pb-24 overflow-x-hidden">
            <div
              className="rounded-lg sm:rounded-2xl px-4 sm:px-8 py-12 sm:py-20 md:py-34 text-center text-white"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${WORK_WITH_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="font-display text-2xl sm:text-4xl md:text-6xl">
                Work With A Team That Exudes Excellence
              </h3>
              <Button as="a" href="/contact" variant="accent" className="mt-4 sm:mt-6 text-xs sm:text-sm">
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
