import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { TEAM_MEMBERS } from "../data/teamMembers";

function TeamMemberPage({ slug }) {
  const member =
    TEAM_MEMBERS.find((item) => item.slug === slug) || TEAM_MEMBERS[0];

  return (
    <>
      <Header currentPage="team" />
      <div
        className="flex w-full items-center justify-center"
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main
          className="relative w-[98vw] overflow-hidden px-4 py-16 pt-32 text-[#1e252a] sm:px-8"
          style={{
            backgroundImage: `url(${TOP_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-[#f4f5f2]/80" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <a
              href="/team"
              className="inline-flex items-center gap-1 rounded-md border border-[#18535b] px-3 py-2 text-xs font-medium text-[#18535b] transition hover:bg-[#18535b]/5"
            >
              ← Back to Our Teams
            </a>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <img
                src={member.image}
                alt={member.name}
                className="h-[220px] w-[220px] rounded-full object-cover object-top sm:h-[260px] sm:w-[260px]"
              />
              <div>
                <h1 className="text-3xl font-bold uppercase text-[#151d22] sm:text-4xl">
                  {member.name}
                </h1>
                <p className="mt-1 text-lg text-[#3b4850] sm:text-xl">
                  {member.role}
                </p>
                {member.specialties && (
                  <p className="mt-2 text-xs text-[#7f8890]">
                    {member.specialties}
                  </p>
                )}
              </div>
            </div>

            <section className="mt-8 rounded-md border border-[#eceeec] bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold text-[#18535b]">
                Quick Contact
              </p>
              <div className="mt-4 flex flex-col gap-4 text-sm text-[#4f5b62] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 transition hover:text-[#18535b]"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>{member.email}</span>
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 underline underline-offset-2 transition hover:text-[#18535b]"
                    >
                      <svg
                        className="h-4 w-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                      </svg>
                      <span>{member.linkedin}</span>
                    </a>
                  )}
                </div>
                <Button
                  as="a"
                  href="/contact"
                  variant="accent"
                  className="shrink-0 text-xs sm:text-sm"
                >
                  Book a Consultation
                </Button>
              </div>
            </section>

            {member.bio.length > 0 && (
              <section className="mt-6 rounded-md border border-[#eceeec] bg-white p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#18535b]">
                  Web Profile
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#5c656d] sm:text-base">
                  {member.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {member.qualifications.length > 0 && (
              <section className="mt-6 rounded-md border border-[#eceeec] bg-white p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#18535b]">
                  Qualification
                </p>
                <ul className="mt-3 space-y-1 text-sm text-[#2f3a41]">
                  {member.qualifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default TeamMemberPage;
