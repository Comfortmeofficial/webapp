import { useState } from "react";
import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import WORK_WITH_BG from "../assets/sections/cards/workWith.jpg";
import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { TEAM_MEMBERS } from "../data/teamMembers";

const teamTabs = [
  "All",
  "Corporate",
  "Litigation",
  "Property",
  "Employment",
  "Finance",
  "Energy",
  "Immigration",
];

const featuredMembers = TEAM_MEMBERS.filter((member) =>
  ["mark-gallogly", "jody-greenstone-miller", "rachel-more-oshodi"].includes(
    member.slug,
  ),
);

const teamMembers = [
  { name: "Adewale Ogunleye", category: "Corporate", slug: "adewale-ogunleye" },
  { name: "Adewale Ogunleye", category: "Finance", slug: "adewale-ogunleye" },
  {
    name: "Adewale Ogunleye",
    category: "Employment",
    slug: "adewale-ogunleye",
  },
  {
    name: "Adewale Ogunleye",
    category: "Litigation",
    slug: "adewale-ogunleye",
  },
  { name: "Adewale Ogunleye", category: "Corporate", slug: "adewale-ogunleye" },
  { name: "Adewale Ogunleye", category: "Property", slug: "adewale-ogunleye" },
  { name: "Adewale Ogunleye", category: "Energy", slug: "adewale-ogunleye" },
  {
    name: "Adewale Ogunleye",
    category: "Immigration",
    slug: "adewale-ogunleye",
  },
  { name: "Adewale Ogunleye", category: "Corporate", slug: "adewale-ogunleye" },
  { name: "Adewale Ogunleye", category: "Finance", slug: "adewale-ogunleye" },
];

function TeamPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredMembers =
    activeTab === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeTab);

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
            className="w-full sm:w-[98vw] min-h-screen sm:h-[100vh] sm:px-4 md:px-8 justify-center mx-auto flex flex-col items-center py-12 sm:py-0 overflow-x-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="rounded-sm px-4 sm:px-5 md:px-10 py-12 sm:py-20 md:py-32 text-center bg-white/80 w-full sm:w-[98vw] h-auto sm:h-full flex flex-col justify-center overflow-x-hidden">
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#171d22] pb-2 sm:pb-4 break-words">
                Our Team
              </h1>
              <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base md:text-lg leading-6 md:leading-7 text-[#3f474d] break-words">
                A team of experienced legal professionals dedicated to
                delivering excellence, integrity, and results.
              </p>

              <div className="mt-8 sm:mt-16 md:mt-42 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-hidden">
                {featuredMembers.map((member) => (
                  <article key={member.slug}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="mx-auto h-40 sm:h-48 md:h-64 w-40 sm:w-48 md:w-64 rounded-full object-cover"
                    />
                    <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-[#1e252a]">
                      {member.name}
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm leading-5 text-[#9aa0a5]">
                      {member.role}
                    </p>
                    <a
                      href={`/team/${member.slug}`}
                      className="mt-2 inline-flex rounded-full border border-[#d4e6df] px-3 py-1 text-xs font-medium text-[#256169] hover:bg-[#d4e6df]/20 transition"
                    >
                      View Profile
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="relative mx-auto max-w-full px-3 py-16 sm:px-4 md:px-8 md:py-20 overflow-x-hidden"
            style={{
              backgroundImage: `url(${WOMAN_IMAGE})`,
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundAttachment: "scroll",
            }}
          >
            <div className="rounded-sm border border-[#edf0ef] p-3 sm:p-4 md:p-6 relative z-10 overflow-x-hidden">
              <div className="mb-4 sm:mb-6 overflow-x-auto flex gap-2 sm:gap-4 border-b border-[#eef1ef] pb-3 sm:pb-4 text-xs sm:text-sm">
                {teamTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 sm:px-3 py-1 font-medium transition whitespace-nowrap ${
                      activeTab === tab
                        ? "text-[#235e66]"
                        : "text-[#31393f] hover:text-[#235e66]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid gap-4 sm:gap-5 md:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 overflow-hidden">
                {filteredMembers.map((member, index) => (
                  <article
                    key={`${member.name}-${index}`}
                    className="text-center p-2 sm:p-3"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="mx-auto h-20 sm:h-24 w-20 sm:w-24 rounded-full object-cover"
                    />
                    <h3 className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold text-[#1e252a]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#6b747b]">{member.role}</p>
                    <p className="mt-1 text-[10px] leading-4 text-[#9fa5aa] line-clamp-2">
                      {member.specialties}
                    </p>
                    <a
                      href={`/team/${member.slug}`}
                      className="mt-2 inline-flex rounded-full border border-[#d4e6df] px-2 sm:px-3 py-1 text-[10px] font-medium text-[#256169] hover:bg-[#d4e6df]/20 transition"
                    >
                      View Profile
                    </a>
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
                Work With Experienced Legal Professionals
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/85">
                Our team is ready to provide the legal expertise you need.
              </p>
              <Button as="a" href="#" variant="accent" className="mt-4 sm:mt-6 text-xs sm:text-sm">
                Book a Consultation
              </Button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default TeamPage;
