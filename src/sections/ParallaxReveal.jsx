import { useEffect, useRef, useState } from "react";
import PARALLAX_BG from "../assets/main/legalbg.svg";

function ParallaxReveal({ children }) {
  const wrapperRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* ── Sticky image layer ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="sticky top-0 h-screen overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <img
          src={PARALLAX_BG}
          alt=""
          className="h-full w-full object-cover"
          style={{
            transform: revealed ? "scale(1)" : "scale(1.07)",
            opacity: revealed ? 1 : 0,
            transition:
              "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease-out",
            willChange: "transform, opacity",
          }}
        />

        {/* Depth gradient: dark top edge + heavier vignette at bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.04) 35%, rgba(0,0,0,0.04) 60%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Centred callout — fades in after image */}
        <div
          className="absolute inset-0 flex items-center justify-center text-center"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 1s ease-out 0.65s, transform 1s ease-out 0.65s",
          }}
        >
          <div className="px-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              What Our Clients Say
            </p>
            <h2 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
              Trusted by Clients.
              <br />
              Proven by Results.
            </h2>
            {/* Decorative thin line — mirrors the hero animation motif */}
            <div
              className="mx-auto mt-8 h-px bg-white/30"
              style={{
                width: revealed ? "180px" : "0px",
                transition: "width 0.9s ease-out 1.1s",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Cover section ────────────────────────────────────────────── */}
      {/*
        margin-top: 100vh pushes the cover so it starts at 200vh from the
        wrapper top. The user scrolls 100vh with only the image visible,
        then the cover enters from below and slides over the sticky image.
        z-index: 2 ensures it visually covers the image (z-index: 1).
      */}
      <div
        className="relative"
        style={{
          zIndex: 2,
          marginTop: "100vh",
        }}
      >
        {/* Rounded-top panel with top shadow — creates the "lifted card" feel */}
        <div
          className="overflow-hidden rounded-tl-[2rem] rounded-tr-[2rem]"
          style={{ boxShadow: "0 -24px 64px rgba(0, 0, 0, 0.45)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default ParallaxReveal;
