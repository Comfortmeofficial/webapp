import Footer from "../components/Footer";
import Header from "../components/Header";
import { LEGACY_PROFILES } from "../data/legacyProfiles";

function LegacyProfilePage({ slug }) {
  const profile =
    LEGACY_PROFILES.find((item) => item.slug === slug) || LEGACY_PROFILES[0];

  return (
    <>
      <Header />
      <main className="bg-[#f3f3f1] text-[#1f252b]">
        <section className="mx-auto max-w-[90vw] px-4 py-10 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d9dddf] pb-4">
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

        <section className="mx-auto grid max-w-[90vw] gap-8 px-4 pb-10 sm:px-8 lg:grid-cols-[1fr_360px]">
          <div className="pt-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9da4aa]">
              Heritage Profiles
            </p>
            <h1 className="font-display mt-2 text-5xl text-[#21292f] sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-xl border-l-2 border-[#c6ccd0] pl-4 text-sm italic leading-7 text-[#5f686f]">
              {profile.intro}
            </p>
            <div className="mt-5 flex items-center gap-3 text-[10px] text-[#6f787f]">
              <span className="font-semibold">{profile.date}</span>
              <span>•</span>
              <span>{profile.label}</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[360px] border border-[#d8dcde] bg-white p-2">
            <div className="h-[360px] w-full bg-[linear-gradient(135deg,#6f7378,#b7b9bc)]" />
            <div className="absolute bottom-4 left-4 max-w-[160px] bg-[#f5f5f4] p-3 text-[10px] text-[#3f474d] shadow-sm">
              {profile.quote}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] border-t border-[#dde1e2] px-4 py-8 sm:px-8">
          <h2 className="font-display text-3xl text-[#1f262c] sm:text-4xl">
            {profile.resilienceTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-xs leading-6 text-[#727a80]">
            {profile.resilienceText}
          </p>
          <a
            href="#"
            className="mt-2 inline-block text-[10px] font-medium text-[#7b6447] uppercase tracking-wide"
          >
            Explore case studies
          </a>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {profile.cards.map((card, idx) => (
              <article
                key={card.title}
                className={
                  idx === 1
                    ? "border border-[#111] bg-black p-4 text-white"
                    : "border border-[#dce0e2] bg-white p-4"
                }
              >
                <h3
                  className={`font-display text-2xl ${idx === 1 ? "" : "text-[#222a30]"}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-2 text-xs leading-6 ${idx === 1 ? "text-white/80" : "text-[#6a737a]"}`}
                >
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 py-10 text-center sm:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#b29b70]">
            Chronicles of Justice
          </p>
          <h2 className="font-display mt-2 text-5xl text-[#1e262c] sm:text-6xl">
            Life and Times
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-8">
            {profile.timeline.map((item) => (
              <div key={item.year}>
                <p className="font-display text-3xl text-[#7f683f]">
                  {item.year}
                </p>
                <p className="mt-1 text-xs text-[#5d666d]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#ececea] px-4 py-12 text-center sm:px-8">
          <p className="font-display text-6xl text-[#b6a57f]">99</p>
          <p className="font-display mt-2 text-2xl italic text-[#1f252b] sm:text-3xl">
            {profile.closingQuote}
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#9a8f74]">
            {profile.name}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LegacyProfilePage;
