import { useEffect, useRef, useState } from "react";

function ParallaxReveal({
  image,
  eyebrow,
  title,
  description,
  height = "70vh",
  children,
}) {
  const wrapperRef = useRef(null);

  const [revealed, setRevealed] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
      {
        threshold: 0.15,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative"
      style={{
        height: `calc(${height} + 100vh)`,
      }}
    >
      {/* ================================= */}
      {/* Sticky Hero */}
      {/* ================================= */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{
          height,
        }}
      >
        {/* Background */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{
            transform: `
              scale(${revealed ? 1 : 1.08})
              translateY(${scrollY * 0.06}px)
            `,
            opacity: revealed ? 1 : 0,
            transition:
              "transform 1.6s cubic-bezier(0.22,1,0.36,1), opacity 1.2s ease",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
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

        {/* Hero Content */}
        <div
          className="absolute inset-0 flex items-center justify-center px-6"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s",
          }}
        >
          <div className="mx-auto max-w-5xl text-center text-white">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              {eyebrow}
            </p>

            <h2 className="font-display text-4xl leading-[0.95] sm:text-6xl md:text-7xl">
              {title.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              {description}
            </p>

            <div
              className="mx-auto mt-8 h-px bg-white/30"
              style={{
                width: revealed ? "180px" : "0px",
                transition: "width 1s ease 1s",
              }}
            />
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* Reveal Panel */}
      {/* ================================= */}
      <div
        className="absolute left-0 right-0 z-20"
        style={{
          top: height,
        }}
      >
        <div
          className="
            min-h-[65vh]
            overflow-hidden
            rounded-t-[3rem]
            bg-[#f5f6f3]
          "
          style={{
            boxShadow: "0 -40px 80px rgba(0,0,0,0.45)",
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export default ParallaxReveal;
