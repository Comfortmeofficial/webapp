function About() {
  return (
    <section id="about" className="bg-[#f5f6f3] py-24 text-[#1e252a]">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="pt-8">
            <p className="text-xs text-[#80aa36]">About BSY Legal</p>
            <h2 className="font-display mt-3 max-w-md text-5xl leading-tight text-[#171c21]">
              Built on Expertise. Driven by Results.
            </h2>
          </div>
          <div className="rounded-br-[100px] rounded-tl-[100px] border-8 border-[#0f2023] bg-[#0e5e66] p-8 text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] md:p-12">
            <p className="text-[28px] leading-[2.1rem]">
              BSY Legal is a forward-thinking law firm committed to delivering
              strategic, client-focused legal solutions. With deep expertise
              across multiple practice areas, we combine legal precision with a
              practical understanding of real-world challenges.
            </p>
            <button
              type="button"
              className="mt-6 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#1c242a]"
            >
              Learn More About Us
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Corporate & Commercial Law",
              "Dispute Resolution & Litigation",
              "Real Estate & Property Law",
              "Banking & Finance Law",
            ].map((title) => (
              <article
                key={title}
                className="rounded-xl border border-[#ececec] bg-[#f1f2f2] p-6"
              >
                <h3 className="text-lg font-medium text-[#4d545a]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#7b8288]">
                  Providing legal support and strategic guidance tailored to
                  your goals.
                </p>
              </article>
            ))}
          </div>
          <div className="pt-4">
            <p className="text-xs text-[#80aa36]">Our Service</p>
            <h3 className="font-display mt-2 text-6xl leading-tight text-[#171c21]">
              Our Practice Areas
            </h3>
            <p className="mt-3 max-w-md text-lg text-[#6d747a]">
              Comprehensive legal solutions tailored to individuals and
              businesses
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-[#73b329] px-9 py-3 text-base font-semibold text-white"
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
