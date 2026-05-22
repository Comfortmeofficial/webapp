import { useState } from "react";
import HERO_BG from "../assets/main/homebg.svg";
import Button from "../components/Button";

// const HERO_BG =
//   "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80";

function Hero() {
  const [showCookie, setShowCookie] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0d1c24]"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-black/20" />

      {/* Cinematic reveal lines — anchored at vertical centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 hidden sm:block"
        style={{ top: "65.88%", zIndex: 10 , width: "55%", justifyContent: "center", margin: "0 auto" }}
      >
        <div className="hero-line-top" />
        <div className="hero-line-bottom" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 text-center sm:px-8 sm:pb-16 sm:pt-24 md:pb-20 md:pt-30 min-h-screen flex flex-col justify-center sm:justify-start">
        <div className="mx-auto max-w-5xl border-y py-6 sm:py-12 md:py-18">
          <h1 className="hero-reveal-1 font-display text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-6xl lg:text-[78px]">
            Legal Excellence Rooted in
            <br />
            African Heritage
          </h1>
          <p className="hero-reveal-2 mx-auto mt-3 max-w-3xl text-xs sm:mt-4 sm:text-base text-white/85 md:mt-5 md:text-2xl">
            Providing world-class legal counsel with integrity, precision, and a
            deep respect for African identity.
          </p>
          <div className="hero-reveal-3 mt-4 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-3 md:mt-8">
            <Button as="a" href="/services" variant="primary" className="w-full sm:w-auto text-xs sm:text-sm">
              Explore Our Services
            </Button>
            <Button as="a" href="/team" variant="secondary" className="w-full sm:w-auto text-xs sm:text-sm">
              Meet the Team
            </Button>
          </div>
        </div>
      </div>

      {showCookie && (
        <aside className="fixed bottom-0 left-0 right-0 z-20 w-full sm:bottom-6 sm:left-auto sm:right-6 sm:w-[310px] rounded-t-2xl sm:rounded-2xl bg-white p-4 sm:p-5 text-[#273038] shadow-xl">
          <button
            type="button"
            onClick={() => setShowCookie(false)}
            className="absolute right-3 top-2 text-[#7f8990]"
            aria-label="Close cookie banner"
          >
            ✕
          </button>
          <div className="mx-auto mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f8dfb3] text-sm">
            🍪
          </div>
          <h3 className="text-sm sm:text-base font-semibold">Our website uses cookies</h3>
          <p className="mt-2 text-xs leading-5 text-[#738089]">
            Our website uses cookies. By continuing, we assume your permission
            to deploy cookies as detailed in our Privacy Policy.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setShowCookie(false)}
              className="w-full sm:w-auto rounded-md px-3 py-2 text-xs text-[#58636c]"
            >
              Reject All
            </button>
            <button
              type="button"
              onClick={() => setShowCookie(false)}
              className="w-full sm:w-auto rounded-md bg-[#1a6268] px-4 py-2 text-xs font-medium text-white"
            >
              Accept cookies
            </button>
          </div>
        </aside>
      )}
    </section>
  );
}

export default Hero;
