import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LEGACY_PROFILES } from "../data/legacyProfiles";

function LegacyProfilePage({ slug }) {
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
        <main className="w-full bg-[#f3f3f1] text-[#1f252b]">
          {/* Hero Section */}
          <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-8 border-b border-[#d9dddf] pb-8">
              <a href="/" className="text-sm font-medium text-[#2f373d]">
                BSY Legal
              </a>
              <nav className="flex flex-wrap items-center gap-4 text-[10px] text-[#6b747b] sm:gap-6">
                <a href="/">Home</a>
                <a
                  href="/about"
                  className="font-semibold text-[#1f252b] underline underline-offset-4"
                >
                  About Us
                </a>
                <a href="/services">Our Services</a>
                <a href="/team">Our Team</a>
                <a href="/insights">Articles & Insights</a>
                <a
                  href="/contact"
                  className="rounded-sm bg-black px-3 py-1 text-white"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </section>

          {/* Hero Content with Image */}
          <section
            className="mx-auto max-w-7xl px-4 py-16 sm:px-8"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9da4aa]">
                  Heritage Profiles
                </p>
                <h1 className="font-display mt-4 text-5xl sm:text-6xl text-[#21292f]">
                  {profile.name}
                </h1>
                <p className="mt-4 text-sm text-[#6f787f]">
                  <span className="font-semibold">{profile.date}</span>
                  <span> • </span>
                  <span>{profile.label}</span>
                </p>
                <p className="mt-6 max-w-lg border-l-2 border-[#c6ccd0] pl-4 text-sm italic leading-7 text-[#5f686f]">
                  {profile.intro}
                </p>
              </div>
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-auto w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Rise Section */}
          <section
            className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8"
            style={{
              backgroundImage: `url(${WOMAN_IMAGE})`,
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundAttachment: "scroll",
            }}
          >
            <h2 className="font-display text-4xl text-[#1f262c] sm:text-5xl">
              {profile.riseTitle}
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-8 text-[#5f686f]">
              {profile.riseText}
            </p>
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
          <section className="bg-[#ececea] px-4 py-16 text-center sm:px-8">
            <p className="font-display text-4xl sm:text-6xl text-[#b6a57f]">
              "
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

export default LegacyProfilePage;
