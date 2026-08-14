import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { LEGACY_PROFILES } from "@/lib/data/legacyProfiles";

const BACKGROUND = "/assets/sections/background.jpg";
const TOP_BG = "/assets/sections/topbackground.png";
const WOMAN_IMAGE = "/assets/sections/woman_law.svg";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const profile = LEGACY_PROFILES.find((item) => item.slug === slug);
  if (!profile) return {};
  return {
    title: `${profile.name} | BSY Legal`,
    description: profile.intro,
  };
}

export default async function LegacyProfilePage({ params }) {
  const { slug } = await params;
  const profile =
    LEGACY_PROFILES.find((item) => item.slug === slug) || LEGACY_PROFILES[0];

  return (
    <>
      <Header />
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="w-[98vw] bg-[#f3f3f1] text-[#1f252b]  py-[10%] ">
          {/* Hero Content with Image */}
          <section
            className="relative mx-auto w-full min-h-[85vh] overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-12 lg:grid-cols-2 lg:gap-16">
              {/* Text content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
                  Heritage Profile
                </p>
                <h1 className="font-display mt-4 text-5xl sm:text-6xl text-[#171f25]">
                  {profile.name}
                </h1>
                <p className="mt-6 max-w-lg border-l-2 border-[#b08d57] pl-4 text-lg italic leading-8 text-[#2f373d]">
                  {profile.intro}
                </p>
                <div className="mt-10 flex gap-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#b08d57]">
                      Born
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#1f252b]">
                      {profile.date}
                    </p>
                  </div>
                  <div className="border-l border-[#dcdfdc] pl-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#b08d57]">
                      Legacy
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#1f252b]">
                      {profile.label}
                    </p>
                  </div>
                </div>
              </div>

              {/* Framed image */}
              <div className="mx-auto w-full max-w-lg border border-[#e2e5e2] bg-white p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-[420px] w-full object-cover sm:h-[480px]"
                />
              </div>
            </div>
          </section>

          {/* Rise Section */}
          <section
            className="relative mx-auto flex min-h-[80vh] w-[98vw] flex-col items-center justify-center px-4 py-16 sm:px-8"
            style={{
              backgroundImage: `url(${WOMAN_IMAGE})`,
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundAttachment: "scroll",
            }}
          >
            <h2 className="font-display text-center text-4xl text-[#1f262c] sm:text-5xl">
              {profile.riseTitle}
            </h2>
            <div className="mx-auto mt-8 max-w-4xl space-y-6 text-center text-base leading-8 text-[#5f686f]">
              {profile.riseText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Chronology Section - Dark Background */}
          <section className="bg-[#1a1f24] py-16 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <div className="grid gap-16 lg:grid-cols-2">
                {/* Timeline */}
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl">
                    {profile.chronologyTitle}
                  </h3>
                  <div className="mt-8 space-y-8">
                    {profile.chronologyItems.map((item) => (
                      <div key={item.year}>
                        <p className="font-display text-2xl text-[#b29b70]">
                          {item.year}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/75">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-2xl text-white/60">
                    The Impact
                  </h3>
                  <div className="mt-8 space-y-8">
                    {profile.impactStats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-5xl sm:text-6xl text-[#b29b70]">
                          {stat.number}
                        </p>
                        <p className="mt-2 text-sm text-white/75">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership Section with Backdrop */}
          <section
            className="relative py-20 sm:py-24"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${profile.backdropImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl sm:text-5xl text-white">
                  {profile.resilienceTitle}
                </h2>
                <p className="mt-4 text-base leading-8 text-white/85">
                  {profile.resilienceText}
                </p>
              </div>
            </div>
          </section>

          {/* Closing Quote */}
          <section className="bg-[#ececea] px-4 py-16 text-center sm:px-8 h-[60vh] flex items-center justify-center">
            <p className="font-display text-4xl sm:text-6xl text-[#b6a57f]">
              &quot;
            </p>
            <p className="mt-4 font-display text-xl italic sm:text-3xl text-[#1f252b]">
              {profile.closingQuote}
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-[#9a8f74]">
              {profile.name}
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
