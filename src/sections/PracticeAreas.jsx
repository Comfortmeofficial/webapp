import Button from "../components/Button";

const practiceAreas = [
  {
    title: "Corporate & Commercial Law",
    desc: "Advising businesses on structuring, transactions, compliance, and day-to-day corporate operations.",
  },
  {
    title: "Dispute Resolution & Litigation",
    desc: "Representing clients in civil and commercial disputes with strategic, results-driven advocacy.",
  },
  {
    title: "Property Law",
    desc: "Handling property transactions, due diligence, and regulatory compliance with precision.",
  },
  {
    title: "Banking & Finance Law",
    desc: "Providing legal support on financing, lending, and regulatory matters for institutions and businesses.",
  },
];

function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-[#f5f6f3] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {practiceAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#e6e6e6] bg-[#f8f8f8] p-6"
              >
                <h3 className="text-base sm:text-lg font-medium text-[#2c343b]">{item.title}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-7 text-[#667077]">{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="pt-2">
            <p className="mb-2 text-xs text-[#80aa36]">Our Service</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-tight text-[#171d22]">Our Practice Areas</h2>
            <p className="mt-3 max-w-md text-base sm:text-lg text-[#5f676d]">
              Comprehensive legal solutions tailored to individuals and businesses.
            </p>
            <Button as="a" href="/contact" variant="accent" className="mt-6">
              View all
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;
