import { useState } from "react";
import homebg from "../assets/main/homebg.svg";
import Button from "../components/Button";

function Hero() {
  const [showCookie, setShowCookie] = useState(true);

  return (
    <section
      id="home"
      className={`relative min-h-[90vh] overflow-hidden bg-[url(${homebg})] bg-cover bg-center`}
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0d2637,#1f3d4b,#123244)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(196,165,106,0.15)_0px,rgba(196,165,106,0.15)_2px,transparent_2px,transparent_36px)] opacity-35" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 text-center sm:px-8 md:pt-30">
        <div className="mx-auto max-w-5xl border-y border-white/25 py-14 sm:py-18">
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-[78px]">
            Legal Excellence Rooted in
            <br />
            African Heritage
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-white/85 sm:text-2xl">
            Providing world-class legal counsel with integrity, precision, and a
            deep respect for African identity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button as="a" href="/services" variant="primary">
              Explore Our Services
            </Button>
            <Button as="a" href="/team" variant="secondary">
              Meet the Team
            </Button>
          </div>
        </div>
      </div>

      {showCookie && (
        <aside className="absolute bottom-4 right-4 z-20 w-[310px] rounded-2xl bg-white p-5 text-[#273038] shadow-xl sm:bottom-6 sm:right-6">
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
          <h3 className="text-lg font-semibold">Our website uses cookies</h3>
          <p className="mt-2 text-xs leading-5 text-[#738089]">
            Our website uses cookies. By continuing, we assume your permission
            to deploy cookies as detailed in our Privacy Policy.
          </p>
          <div className="mt-4 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setShowCookie(false)}
              className="rounded-md px-3 py-2 text-xs text-[#58636c]"
            >
              Reject All
            </button>
            <button
              type="button"
              onClick={() => setShowCookie(false)}
              className="rounded-md bg-[#1a6268] px-4 py-2 text-xs font-medium text-white"
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
