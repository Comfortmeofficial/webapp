import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import Button from "../components/Button";
import Header from "../components/Header";
import { TEAM_MEMBERS } from "../data/teamMembers";

function TeamMemberPage({ slug }) {
  const member =
    TEAM_MEMBERS.find((item) => item.slug === slug) || TEAM_MEMBERS[0];

  return (
    <>
      <Header currentPage="team" />
      <div
        className="flex h-[] items-center justify-center "
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="bg-[#f4f5f2] px-4 py-22 text-[#1e252a] w-[98vw] sm:px-8">
          <div
            className="mx-auto w-[95vw]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              padding: "2rem",
              borderRadius: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            <a
              href="/team"
              className="inline-flex rounded-md border border-[#dbe1de] bg-white px-3 py-2 text-xs text-[#435057]"
            >
              ← Back To Our Team
            </a>

            <section className="mt-7 rounded-sm border border-[#e8ecea] bg-white p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-3xl font-semibold text-[#151d22]">
                    {member.name}
                  </h1>
                  <p className="text-base text-[#4f5a61]">{member.role}</p>
                  {member.specialties && (
                    <p className="mt-2 text-xs text-[#7f8890]">
                      {member.specialties}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* <section className="mt-4 rounded-sm border border-[#e8ecea] bg-white p-5">
              <p className="text-xs font-semibold text-[#3b4850]">
                Specialization
              </p>
              <p className="mt-2 text-xs text-[#738088]">
                {member.specialties}
              </p>
            </section> */}

            <section className="mt-4 rounded-sm border border-[#e8ecea] bg-white p-5">
              <p className="text-xs font-semibold text-[#3b4850]">
                Quick Contact
              </p>
              <div className="mt-3 flex flex-col gap-3 text-sm text-[#4f5b62] sm:flex-row sm:items-center sm:justify-between">
                <p>{member.email}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#256169] underline underline-offset-2"
                  >
                    LinkedIn Profile
                  </a>
                )}
                <Button as="a" href="#" variant="accent" className="text-xs">
                  Speak With Us
                </Button>
              </div>
            </section>

            {member.bio.length > 0 && (
              <section className="mt-4 rounded-sm border border-[#e8ecea] bg-white p-5">
                <p className="text-xs font-semibold text-[#3b4850]">
                  Biography
                </p>
                <div className="mt-3 space-y-4 text-xs leading-6 text-[#6d767d]">
                  {member.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {member.qualifications.length > 0 && (
              <section className="mt-4 rounded-sm border border-[#e8ecea] bg-white p-5">
                <p className="text-xs font-semibold text-[#3b4850]">
                  Qualification
                </p>
                <ul className="mt-2 space-y-1 text-xs text-[#2f3a41]">
                  {member.qualifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* <section className="mt-4 rounded-sm border border-[#e8ecea] bg-white p-5">
              <p className="text-xs font-semibold text-[#3b4850]">
                Bar Admissions
              </p>
              <ul className="mt-2 space-y-1 text-xs text-[#2f3a41]">
                {member.admissions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section> */}

          </div>
        </main>
      </div>
    </>
  );
}

export default TeamMemberPage;
