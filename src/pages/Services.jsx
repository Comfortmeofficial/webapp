import { useEffect, useState } from "react";
import LEGAL_BG from "../assets/main/legalbg.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

const serviceTabs = [
  "All",
  "Corporate",
  "Disputes",
  "Property",
  "Employment",
  "Finance",
  "Personal",
  "Energy",
  "Immigration",
  "Tax",
];

const services = [
  {
    title: "Corporate & Commercial Law",
    category: "Corporate",
    short:
      "Strategic legal support for businesses navigating complex commercial environments.",
    full: "We support businesses across the full corporate lifecycle, from incorporation and governance to contract structuring, regulatory compliance, and high-value transactions.",
  },
  {
    title: "Intellectual Property",
    category: "Corporate",
    short:
      "Protection and enforcement of intellectual assets and creative rights.",
    full: "Our team advises on trademarks, copyrights, licensing, commercialization, and enforcement strategies that protect valuable intellectual property rights.",
  },
  {
    title: "Litigation & Dispute Resolution",
    category: "Disputes",
    short:
      "Effective representation and strategic resolution of complex disputes.",
    full: "We represent clients in civil and commercial litigation, arbitration, and negotiated settlements with a strategy built around speed, precision, and business outcomes.",
  },
  {
    title: "Real Estate & Property Law",
    category: "Property",
    short:
      "Comprehensive legal support for property transactions and real estate investments.",
    full: "We handle property acquisitions, due diligence, title reviews, lease documentation, and dispute resolution for institutional and private clients.",
  },
  {
    title: "Employment & Labour Law",
    category: "Employment",
    short:
      "Guidance on workplace regulations, employment contracts, and dispute management.",
    full: "We advise employers and employees on workplace frameworks, policy compliance, disciplinary processes, and labour-related disputes.",
  },
  {
    title: "Banking & Finance Law",
    category: "Finance",
    short:
      "Expert legal advisory on financial transactions and regulatory compliance.",
    full: "Our finance team supports lending, security documentation, debt restructuring, and compliance with banking and financial regulations.",
  },
  {
    title: "Family Law & Estate Planning",
    category: "Personal",
    short:
      "Sensitive and professional handling of family matters and succession planning.",
    full: "We provide confidential support for family law matters, wills, probate, succession planning, and long-term estate preservation.",
  },
  {
    title: "Energy, Oil & Gas Law",
    category: "Energy",
    short:
      "Specialised legal services for the energy and natural resources sector.",
    full: "We advise operators, investors, and contractors on project structures, licensing, host-community compliance, and sector-specific regulatory obligations.",
  },
  {
    title: "Immigration Law",
    category: "Immigration",
    short:
      "Legal assistance for immigration processes, permits, and compliance.",
    full: "Our team assists with immigration documentation, work permits, residence pathways, and compliance planning for individuals and businesses.",
  },
  {
    title: "Tax & Revenue Law",
    category: "Tax",
    short: "Advisory on tax compliance, planning, and dispute resolution.",
    full: "We guide clients on tax planning, filing obligations, tax audits, and tax dispute resolution before regulatory authorities and tribunals.",
  },
];

function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeService, setActiveService] = useState(null);

  const filteredServices =
    activeTab === "All"
      ? services
      : services.filter((service) => service.category === activeTab);

  useEffect(() => {
    if (!activeService) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveService(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeService]);

  return (
    <>
      <Header currentPage="services" />
      <main className="bg-[#f3f4f1] text-[#1e252a]">
        <section
          className="relative flex min-h-screen items-center overflow-hidden bg-[#06090c] px-4 py-24 text-white sm:px-8"
          style={{
            backgroundImage: `url(${LEGAL_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative mx-auto max-w-7xl text-center">
            <h1 className="font-display text-5xl sm:text-7xl">
              Our Legal Services
            </h1>
            <p className="mx-auto mt-4 max-w-4xl text-base font-medium leading-8 text-white/90 sm:text-2xl">
              Comprehensive, strategic legal solutions tailored to individuals,
              businesses, and institutions across diverse sectors.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 py-14 sm:px-8">
          <div className="rounded-sm border border-[#e8ebea] bg-[#f6f7f5] px-6 py-10 text-center sm:px-14">
            <p className="mx-auto max-w-5xl font-display text-2xl leading-[1.6] text-[#285963] sm:text-5xl">
              At BSY Legal, we provide a full spectrum of legal services
              designed to meet the evolving needs of our clients. Our
              multidisciplinary expertise allows us to deliver tailored
              solutions with precision, efficiency, and a deep understanding of
              legal frameworks.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-20 sm:px-8">
          <div className="rounded-sm border border-[#eceeec] bg-white p-4 sm:p-6">
            <div className="mb-6 flex flex-wrap gap-4 border-b border-[#eef0ef] pb-4 text-sm sm:text-base">
              {serviceTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-1 font-medium transition ${
                    activeTab === tab
                      ? "text-[#215861]"
                      : "text-[#343c42] hover:text-[#215861]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-lg border border-[#f0f1f1] bg-[#f8f9f8] p-5"
                >
                  <h3 className="text-3xl font-semibold leading-tight text-[#1e252a]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-lg leading-8 text-[#5c656d]">
                    {service.short}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="mt-5 text-sm font-medium text-[#1e252a] hover:text-[#215861]"
                  >
                    Learn More →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-24 sm:px-8">
          <div className="rounded-2xl bg-[linear-gradient(90deg,#3d2f2b,#4c3a43,#2b2f3f)] px-8 py-14 text-center text-white">
            <h3 className="font-display text-4xl sm:text-6xl">
              Partner With a Firm You Can Trust
            </h3>
            <p className="mt-3 text-lg text-white/85">
              Let us provide the legal clarity and representation you need
            </p>
            <Button as="a" href="#" variant="accent" className="mt-6">
              Book a Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      {activeService && (
        <div
          onClick={() => setActiveService(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/65 px-4 py-8"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-3xl font-semibold text-[#171f25] sm:text-4xl">
                {activeService.title}
              </h2>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="rounded-md border border-[#e5e7e7] px-3 py-1 text-sm text-[#505860]"
              >
                ✕
              </button>
            </div>
            <p className="mt-5 text-lg leading-8 text-[#586169]">
              {activeService.full}
            </p>
            <div className="mt-7">
              <Button
                as="button"
                variant="primary"
                onClick={() => setActiveService(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ServicesPage;
