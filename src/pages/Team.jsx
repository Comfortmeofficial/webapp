import { useState } from "react";
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
      <main className="bg-[#f4f5f2] text-[#1f252b]">
        <section className="mx-auto max-w-[90vw] px-4 py-16 sm:px-8">
          <div className="rounded-sm bg-[linear-gradient(135deg,#f6f7f4,#f2f3f1)] px-5 py-12 text-center sm:px-10">
            <h1 className="font-display text-5xl text-[#171d22] sm:text-6xl">
              Our Team
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#3f474d] sm:text-lg">
              A team of experienced legal professionals dedicated to delivering
              excellence, integrity, and results.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {featuredMembers.map((member) => (
                <article key={member.slug}>
                  <div className="mx-auto h-44 w-44 rounded-full bg-[linear-gradient(135deg,#4e3a28,#b59666)]" />
                  <h2 className="mt-4 text-xl font-semibold text-[#1e252a]">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-[#9aa0a5]">
                    Co-Founder, Managing Principal of Three Cairns Group and
                    Board Chairperson
                  </p>
                  <a
                    href={`/team/${member.slug}`}
                    className="mt-2 inline-flex rounded-full border border-[#d4e6df] px-3 py-1 text-[10px] font-medium text-[#256169]"
                  >
                    View Profile
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-20 sm:px-8">
          <div className="rounded-sm border border-[#edf0ef] bg-white p-4 sm:p-6">
            <div className="mb-6 flex flex-wrap gap-4 border-b border-[#eef1ef] pb-4 text-xs sm:text-sm">
              {teamTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-1 font-medium transition ${
                    activeTab === tab
                      ? "text-[#235e66]"
                      : "text-[#31393f] hover:text-[#235e66]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
              {filteredMembers.map((member, index) => (
                <article
                  key={`${member.name}-${index}`}
                  className="text-center"
                >
                  <div className="mx-auto h-24 w-24 rounded-full bg-[linear-gradient(135deg,#50402f,#a78559)]" />
                  <h3 className="mt-3 text-base font-semibold text-[#1e252a]">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#6b747b]">Legal Counsel</p>
                  <p className="mt-1 text-[10px] leading-4 text-[#9fa5aa]">
                    Corporate Law, Banking & Finance, Tax Advisory
                  </p>
                  <a
                    href={`/team/${member.slug}`}
                    className="mt-2 inline-flex rounded-full border border-[#d4e6df] px-3 py-1 text-[10px] font-medium text-[#256169]"
                  >
                    View Profile
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-24 sm:px-8">
          <div className="rounded-2xl bg-[linear-gradient(90deg,#3d2f2b,#4c3a43,#2b2f3f)] px-8 py-14 text-center text-white">
            <h3 className="font-display text-4xl sm:text-6xl">
              Work With Experienced Legal Professionals
            </h3>
            <p className="mt-3 text-base text-white/85 sm:text-lg">
              Our team is ready to provide the legal expertise you need.
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

export default TeamPage;
