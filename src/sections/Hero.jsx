import HERO_BG from "../assets/main/homebg.png";

// const HERO_BG =
//   "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80";

function Hero() {
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
        <div className="mx-auto max-w-5xl  py-8 sm:py-12 md:py-38">
          <h1 className="hero-reveal-1 font-display text-[clamp(1.875rem,0.63rem+5.3vw,4.875rem)] font-baseS leading-[1.1] text-white">
            Legal Excellence Rooted in
            <br />
            African Heritage
          </h1>
          <p className="hero-reveal-2 mx-auto mt-3 max-w-3xl text-xs sm:mt-4 sm:text-base text-white/85 md:mt-5 md:text-xl">
            Providing exceptional legal services built on trust, empathy and inclusivity
          </p>
          <div className="hero-reveal-3 mt-4 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-3 md:mt-8">
            <a
              href="/services"
              className="inline-flex w-full sm:w-[200px] h-[42px] items-center justify-center gap-[10px] rounded-[10px] border border-[#d9d9d9] bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-[#1c242a] opacity-100 transition duration-300 hover:bg-[#f2f2f2]"
            >
              Learn More
            </a>
            {/* <Button as="a" href="/team" variant="secondary" className="w-full sm:w-auto text-xs sm:text-sm">
              Meet the Team
            </Button> */}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
