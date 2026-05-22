import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
import CONTACT_BACKGROUND from "../assets/sections/contact-us.svg";
import HAMMER from "../assets/sections/hammer.svg";

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#f5f6f3] py-16 sm:py-20 md:py-24 text-[#1e252a]"
      style={{
        backgroundImage: `url(${WOMAN_IMAGE})`,
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="mx-auto max-w-[90vw] px-3 sm:px-4 md:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="pt-0 sm:pt-4 lg:pt-8">
            <p className="text-xs text-[#80aa36]">About BSY Legal</p>
            <h2 className="font-display mt-3 max-w-md text-3xl sm:text-4xl md:text-5xl leading-tight text-[#171c21]">
              Built on Expertise. Driven by Results.
            </h2>
          </div>
          <div className="rounded-br-[50px] sm:rounded-br-[100px] rounded-tl-[50px] sm:rounded-tl-[100px] p-2 text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)]"
            style={{
              backgroundImage: `url(${CONTACT_BACKGROUND})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
          <div className="rounded-br-[50px] sm:rounded-br-[100px] rounded-tl-[50px] sm:rounded-tl-[100px] bg-[#0e5e66] p-6 sm:p-8 md:p-12 text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)]">
            <p className="text-base sm:text-2xl md:text-[28px] leading-relaxed md:leading-[2.1rem]">
              BSY Legal is a forward-thinking law firm committed to delivering
              strategic, client-focused legal solutions. With deep expertise
              across multiple practice areas, we combine legal precision with a
              practical understanding of real-world challenges.
            </p>
            <button
              type="button"
              className="mt-6 rounded-md bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#1c242a] hover:bg-gray-100 transition"
            >
              Learn More About Us
            </button>
          </div></div>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {[
              "Corporate & Commercial Law",
              "Dispute Resolution & Litigation",
              "Real Estate & Property Law",
              "Banking & Finance Law",
            ].map((title) => (
              <article
                key={title}
                className="rounded-lg sm:rounded-xl border border-[#ececec] bg-[#f1f2f2] p-4 sm:p-6"
              >
                <img
                  src={HAMMER}
                  alt="Hammer"
                  className="h-10 sm:h-14 w-10 sm:w-14 text-[#5d656d] mb-3 sm:mb-4 object-contain"
                />
                <h3 className="text-base sm:text-lg font-medium text-[#4d545a]">{title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-[#7b8288]">
                  Providing legal support and strategic guidance tailored to
                  your goals.
                </p>
              </article>
            ))}
          </div>
          <div className="pt-0 sm:pt-4">
            <p className="text-xs text-[#80aa36]">Our Service</p>
            <h3 className="font-display mt-2 text-3xl sm:text-4xl md:text-6xl leading-tight text-[#171c21]">
              Our Practice Areas
            </h3>
            <p className="mt-3 max-w-md text-base sm:text-lg text-[#6d747a]">
              Comprehensive legal solutions tailored to individuals and
              businesses
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-[#73b329] px-6 sm:px-9 py-2 sm:py-3 text-xs sm:text-base font-semibold text-white hover:bg-[#5fa024] transition"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
