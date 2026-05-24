import { useEffect, useState } from "react";
import LEGAL_BG from "../assets/main/legalbg.svg";
import BACKGROUND from "../assets/sections/background.jpg";
import PARTNER_BG from "../assets/sections/cards/partner.jpg";
import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
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
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#06090c] px-4 py-12 sm:py-20 md:py-24 text-white sm:px-8"
        style={{
          backgroundImage: `url(${LEGAL_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight">
            Our Legal Services
          </h1>
          <p className="mx-auto mt-4 sm:mt-5 max-w-4xl text-xs sm:text-sm md:text-2xl font-medium leading-6 md:leading-8 text-white/90">
            Comprehensive, strategic legal solutions tailored to individuals,
            businesses, and institutions across diverse sectors.
          </p>
        </div>
      </section>
      <div
        className="flex h-[] items-center justify-center w-full overflow-x-hidden"
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="bg-[#f3f4f1] text-[#1e252a] w-full overflow-x-hidden">
          <section className="mx-auto w-full sm:w-[98vw] px-3 py-10 sm:px-4 md:px-8 md:py-14 overflow-x-hidden">
            <div className="rounded-sm border border-[#e8ebea] px-4 sm:px-6 md:px-14 py-8 sm:py-10 text-center overflow-x-hidden">
              <p className="mx-auto max-w-5xl font-display text-lg sm:text-2xl md:text-5xl leading-[1.3] text-[#285963] break-words">
                At BSY Legal, we provide a full spectrum of legal services
                designed to meet the evolving needs of our clients. Our
                multidisciplinary expertise allows us to deliver tailored
                solutions with precision, efficiency, and a deep understanding
                of legal frameworks.
              </p>
            </div>
          </section>

          <section
            className="relative mx-auto max-w-full px-3 pb-12 sm:pb-16 sm:px-4 md:px-8 md:pb-20"
            style={{
              backgroundImage: `url(${WOMAN_IMAGE})`,
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundAttachment: "scroll",
            }}
          >
            <div className="rounded-sm border border-[#eceeec] p-3 sm:p-5 md:p-6 relative z-10 overflow-x-hidden">
              <div className="mb-4 sm:mb-6 overflow-x-auto flex gap-2 sm:gap-3 md:gap-4 border-b border-[#eef0ef] pb-3 sm:pb-4 text-[11px] sm:text-sm">
                {serviceTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-2.5 sm:px-3 py-1.5 font-medium transition whitespace-nowrap ${
                      activeTab === tab
                        ? "text-[#215861]"
                        : "text-[#343c42] hover:text-[#215861]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
                {filteredServices.map((service) => (
                  <article
                    key={service.title}
                    className="rounded-lg border border-[#f0f1f1] bg-[#f8f9f8] p-4 sm:p-5 md:p-6 flex flex-col"
                  >
                    <h3 className="text-base sm:text-lg md:text-2xl font-semibold leading-snug text-[#1e252a]">
                      {service.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 text-[#5c656d] flex-grow">
                      {service.short}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className="mt-4 text-xs sm:text-sm font-medium text-[#1e252a] hover:text-[#215861] transition self-start"
                    >
                      Learn More →
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-full px-3 pb-12 sm:px-4 md:px-8 md:pb-24 overflow-x-hidden">
            <div
              className="rounded-lg sm:rounded-2xl px-4 sm:px-8 py-10 sm:py-16 md:py-32 text-center text-white"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${PARTNER_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="font-display text-2xl sm:text-4xl md:text-6xl leading-snug">
                Partner With a Firm You Can Trust
              </h3>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-lg text-white/85">
                Let us provide the legal clarity and representation you need
              </p>
              <Button as="a" href="/contact" variant="accent" className="mt-5 sm:mt-6 text-xs sm:text-sm">
                Book a Consultation
              </Button>
            </div>
          </section>
        </main>
      </div>
      <Footer />

      {activeService && (
        <div
          onClick={() => setActiveService(null)}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-black/65 px-0 py-0 sm:px-3 sm:py-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full sm:max-w-2xl rounded-t-2xl sm:rounded-xl bg-white p-4 sm:p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#171f25] pr-2">
                {activeService.title}
              </h2>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="shrink-0 rounded-md border border-[#e5e7e7] px-2.5 py-1 text-sm text-[#505860] hover:bg-[#f5f5f5] transition"
              >
                ✕
              </button>
            </div>
            <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-[#586169]">
              {activeService.full}
            </p>
            <div className="mt-6 sm:mt-7">
              <Button
                as="button"
                variant="primary"
                onClick={() => setActiveService(null)}
                className="w-full sm:w-auto text-xs sm:text-sm"
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
