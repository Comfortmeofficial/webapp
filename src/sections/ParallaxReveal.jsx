import { useEffect, useRef, useState } from "react";

function ParallaxReveal({ image, height = "70vh", children }) {
  const wrapperRef = useRef(null);
  const panelRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const ro = new ResizeObserver(([entry]) => {
      setPanelHeight(entry.contentRect.height);
    });
    ro.observe(panel);
    return () => ro.disconnect();
  }, []);

  // Section must be exactly tall enough so the reveal panel never overflows.
  // We use max(70vh, measured px) so the initial paint has enough scroll room
  // and mobile single-column layouts that grow taller are also handled.
  const sectionHeight =
    panelHeight > 0
      ? `calc(${height} + ${panelHeight}px)`
      : `calc(${height} + 70vh)`;

  return (
    <section
      ref={wrapperRef}
      className="relative"
      style={{ height: sectionHeight }}
    >
      {/* Sticky background image */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height }}
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full -mt-20 object-cover will-change-transform -z-10"
          style={{
            transform: `scale(${revealed ? 1 : 1.08})`,
            opacity: revealed ? 1 : 0,
            transition:
              "transform 1.6s cubic-bezier(0.22,1,0.36,1), opacity 1.2s ease",
          }}
        />
        <div
          className="absolute inset-0 h-[40vh] w-full"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.35) 0%,
                rgba(0,0,0,0.12) 40%,
                rgba(0,0,0,0.15) 70%,
                rgba(0,0,0,0.72) 100%
              )
            `,
          }}
        />
      </div>

      {/* Reveal panel — measured so section height always contains it */}
      <div
        ref={panelRef}
        className="absolute left-0 right-0 z-20"
        style={{ top: height }}
      >
        <div className="min-h-[30vh] px-4 py-16 sm:px-8 overflow-hidden bg-[#f5f6f3]">
          {children}
        </div>
      </div>
    </section>
  );
}

export default ParallaxReveal;
