import { useEffect, useState } from "react";
import LEGAL_BG from "../assets/main/legalbg.svg";
import BACKGROUND from "../assets/sections/background.jpg";
import PARTNER_BG from "../assets/sections/cards/partner.jpg";
import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

const services = [
  {
    title: "Corporate Practice / Secretarial",
    short:
      "Corporate structuring, governance, regulatory compliance, and commercial transactions for companies, investors, and founders.",
    intro: [
      "Strong corporate governance and regulatory compliance remain essential for business operations, particularly for contemporary businesses in an evolving commercial environment.",
      "At BSY, our legal advice is tailor-made to serve companies, investors, founders, and institutions on corporate structuring, governance, regulatory compliance, and commercial transactions, ensuring legal frameworks support business growth and operational stability. Our corporate advisory services span from business inception and structuring to expansion, global recognition, sustainability, and long-term strategic growth.",
    ],
    whatWeDo: [
      "Company incorporation and post-incorporation compliance",
      "Corporate governance and company secretarial services",
      "CAC filings, annual returns, and statutory compliance",
      "Board and shareholder meeting documentation",
      "Mergers, acquisitions, and corporate restructuring",
      "Joint ventures, strategic alliances, and partnership arrangements",
      "Commercial contract drafting, review, and negotiation",
      "Shareholder agreements and equity structuring",
      "Capital raising, structured finance, and investment advisory",
      "Private equity and venture capital transactions",
      "Offshore structuring and cross-border investment advisory",
      "Business conversion, recapitalization, and ownership restructuring",
      "Regulatory compliance and transactional due diligence",
    ],
    closing:
      "BSY Legal acts for startups, local and multinational corporations, financial institutions, founders, and private investors across diverse sectors of the African economy.",
  },
  {
    title: "Energy / Power / Maritime",
    short:
      "Regulatory, operational, and transactional advisory across the energy, clean energy, and maritime value chain.",
    intro: [
      "Our lawyers recognize that the energy, power, and maritime sectors remain central to economic growth, infrastructure development, industrial expansion, and international trade in any nation.",
      "This is why our practice spans regulatory, operational, commercial, and transactional matters across the energy, clean energy, and maritime value chain, supporting the transition toward sustainable power systems, reduced carbon emissions, and long-term energy security.",
    ],
    whatWeDo: [
      "Construction and operational contracts",
      "Energy and maritime dispute resolution",
      "Energy and maritime joint venture arrangements",
      "Energy project structuring and financing",
      "Energy/Power advisory across upstream, midstream, and downstream operations",
      "Infrastructure and project finance transactions",
      "Maritime transactions and shipping contracts",
      "Power generation, transmission, distribution, and regulatory compliance",
      "Power Purchase Agreements (PPAs) and related energy contracts",
      "Regulatory engagement and sector compliance advisory",
      "Renewable energy advisory, project development, and regulatory compliance",
    ],
    closing:
      "We act for energy companies, shipping operators, infrastructure developers, investors, and commercial stakeholders operating within Nigeria's energy and maritime sectors.",
  },
  {
    title: "Estate Planning & Wealth Management",
    short:
      "Wealth preservation, estate planning, trusts, wills, and succession arrangements for individuals, families, and family offices.",
    intro: [
      "Preserving wealth requires deliberate legal planning, robust asset protection structures, and well-structured, long-term succession strategies designed to withstand generational, economic, and regulatory changes.",
      "We advise high-net-worth individuals, families, business owners, and family offices on comprehensive wealth preservation, estate planning, trusts, wills, and succession arrangements tailored to their personal, family, and commercial objectives, ensuring assets are protected, efficiently structured, and smoothly transitioned across generations.",
      "Our approach integrates legal foresight with practical structuring solutions that address risk exposure, ownership continuity, and cross-border asset considerations. We also support clients in aligning their wealth structures with governance frameworks, investment goals, and family legacy objectives, ensuring clarity, stability, and long-term preservation of value.",
    ],
    whatWeDo: [
      "Wealth structuring and asset protection strategies",
      "Family office formation and governance advisory",
      "Investment and portfolio structuring",
      "Tax-conscious succession and ownership planning",
      "Business succession and transition strategies",
      "Will drafting, review, and estate planning",
      "Trust creation and trustee advisory",
      "Probate and estate administration",
      "Letters of Administration and probate applications",
      "Cross-border succession planning",
      "Pre-nuptial and post-nuptial agreements",
      "Philanthropic and charitable structuring",
    ],
    closing:
      "BSY Legal delivers discreet, practical, and long-term legal solutions designed to preserve wealth and protect generational legacies.",
  },
  {
    title: "Litigation & Arbitration",
    short:
      "Strategic, commercially aware representation in litigation, arbitration, and alternative dispute resolution.",
    intro: [
      "Corporate services naturally come with their share of disagreements, and these disputes require legal representation that is strategic, commercially aware, and results-oriented. Our lawyers are well equipped to represent clients in litigation, arbitration, and alternative dispute resolution proceedings across a broad range of commercial and corporate matters, combining legal precision with practical insight to protect client interests, manage risk effectively, and achieve efficient, commercially sound outcomes.",
      "We focus on resolving disputes in a manner that preserves value, mitigates disruption to business operations, and, where possible, secures early and cost-effective settlement. Our experience spans complex multi-party disputes, high-value contractual claims, shareholder conflicts, regulatory enforcement actions, and cross-border matters, ensuring clients are supported at every stage of the dispute resolution process.",
    ],
    whatWeDo: [
      "Commercial litigation and dispute resolution",
      "Corporate and shareholder disputes",
      "Contractual and transactional disputes",
      "Real estate and title disputes",
      "Energy, maritime, and infrastructure disputes",
      "Debt recovery and enforcement proceedings",
      "Employment and labour-related disputes",
      "Arbitration and mediation proceedings",
      "Regulatory and compliance-related disputes",
      "Probate and estate disputes",
      "Enforcement of judgments and arbitral awards",
    ],
    closing:
      "At BSY Legal, we represent corporates, investors, financial institutions, property owners, and private clients in contentious matters across Nigeria.",
  },
  {
    title: "Property / Real Estate Practice",
    short:
      "End-to-end legal support for property acquisitions, financing, leasing, and development.",
    intro: [
      "The real estate market remains one of the most valuable and legally complex sectors in any nation's economy, requiring advisers with deep knowledge of land tenure systems, regulatory approvals, financing structures, and property transactions.",
      "BSY Legal advises investors, developers, lenders, landlords, and occupiers on the full spectrum of real estate and property-related matters, providing end-to-end legal support that ensures transactions are secure, compliant, and commercially sound.",
      "Our practice is focused on safeguarding title, reducing transactional risk, and enabling efficient deal execution across acquisitions, developments, and asset management. We also support clients in navigating regulatory requirements and structuring property interests in a way that protects value and supports long-term investment objectives.",
    ],
    whatWeDo: [
      "Property acquisitions, disposals, and legal due diligence",
      "Title perfection and Governor's Consent applications",
      "Land registration and regulatory compliance",
      "Real estate financing, mortgages, and security structuring",
      "Development agreements and construction contracts",
      "SPVs, joint ventures, and REIT structuring",
      "Commercial and residential lease drafting and negotiation",
      "Property management advisory and tenancy documentation",
      "Lease renewals, rent reviews, and termination advisory",
      "Facility management and property administration agreements",
      "Real estate dispute resolution and title-related matters",
    ],
    closing:
      "We provide commercially grounded legal support to private investors, developers, financial institutions, landlords, family offices, and corporate occupiers.",
  },
  {
    title: "Technology & Telecommunications",
    short:
      "Regulatory, commercial, and transactional support for telecom operators, fintechs, and technology-driven businesses.",
    intro: [
      "Africa's underutilized digital economy continues to expand rapidly through telecommunications growth, fintech innovation, digital infrastructure, and technology-enabled businesses. We provide legal support to technology companies, telecom operators, startups, and digital platforms navigating an evolving regulatory and commercial environment, ensuring compliance while enabling scalable and sustainable growth.",
      "Our practice supports clients across the full technology lifecycle — from formation and product development to fundraising, market entry, and expansion — while addressing key legal issues such as data protection, intellectual property, licensing, and regulatory approvals.",
    ],
    whatWeDo: [
      "Telecommunications regulatory and licensing advisory",
      "Technology and software agreements",
      "SaaS, platform, and digital product contracts",
      "Data protection, cybersecurity, and privacy compliance",
      "Technology outsourcing and service agreements",
      "E-commerce and digital business structuring",
      "Intellectual property protection and commercialisation",
      "Fintech and digital payment regulatory advisory",
      "Media, content licensing, and distribution agreements",
      "Venture capital and startup financing transactions",
      "Founders' agreements and investment documentation",
    ],
    closing:
      "Our lawyers advise founders, telecom operators, investors, fintech companies, media platforms, and technology-driven businesses across Africa and beyond.",
  },
];

const sectors = [
  "Corporate and Commercial",
  "Energy and Power Sector",
  "Property and Real Estate",
  "Technology, Media and Telecommunications (TMT) Sector",
  "Investment & Asset Management",
  "Agricultural Sector",
  "Banking and Finance",
  "Health and Wellness",
  "Public Sector & Government Advisory",
];

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

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
        className="relative flex h-[60vh] sm:min-h-screen items-center justify-center overflow-hidden bg-[#06090c] px-4 py-12 sm:py-20 md:py-24 text-white sm:px-8"
        style={{
          backgroundImage: `url(${LEGAL_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight">
            Our Services
          </h1>
          {/* <p className="mx-auto mt-4 sm:mt-5 max-w-4xl text-xs sm:text-sm md:text-2xl font-medium leading-6 md:leading-8 text-white/90">
            Comprehensive, strategic legal solutions tailored to individuals,
            businesses, and institutions across diverse sectors.
          </p> */}
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
              <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
                {services.map((service) => (
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

          <section className="mx-auto w-full sm:w-[98vw] px-3 pb-10 sm:px-4 md:px-8 md:pb-14 overflow-x-hidden">
            <div className="rounded-sm border border-[#e8ebea] px-4 sm:px-6 md:px-14 py-8 sm:py-10 overflow-x-hidden">
              <h2 className="text-center font-display text-2xl sm:text-3xl md:text-4xl text-[#1e252a]">
                Sectors & Industries We Deliver Our Services To
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {sectors.map((sector) => (
                  <p
                    key={sector}
                    className="rounded-md border border-[#e8ecea] bg-[#f8f9f8] px-4 py-3 text-xs sm:text-sm text-[#2f373d]"
                  >
                    {sector}
                  </p>
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
                Speak With Us
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
            <div className="space-y-4 text-sm sm:text-base leading-6 sm:leading-7 text-[#586169]">
              {activeService.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-5 text-sm sm:text-base font-semibold text-[#1e252a]">
              What We Do
            </p>
            <ul className="mt-2 space-y-1.5 text-sm sm:text-base leading-6 text-[#586169]">
              {activeService.whatWeDo.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#215861]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-[#586169]">
              {activeService.closing}
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
