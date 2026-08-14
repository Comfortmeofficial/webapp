import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Button from "@/components/site/Button";
import { SERVICES } from "@/lib/data/services";

export const metadata = {
  title: "Our Services | BSY Legal",
  description:
    "Comprehensive, strategic legal solutions tailored to individuals, businesses, and institutions across diverse sectors.",
};

const LEGAL_BG = "/assets/main/legalbg.jpg";
const BACKGROUND = "/assets/sections/background.jpg";
const PARTNER_BG = "/assets/sections/cards/partner.jpg";
const WOMAN_IMAGE = "/assets/sections/woman_law.svg";

export default function ServicesPage() {
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
        <main className="bg-[#f3f4f1] text-[#1e252a] w-[98vw] overflow-x-hidden">
          <section className="mx-auto w-full sm:w-[98vw] px-3 py-10 sm:px-4 md:px-8 md:py-14 overflow-x-hidden">
            <div className="rounded-sm border border-[#e8ebea] px-4 sm:px-6 md:px-14 py-8 sm:py-10 text-center overflow-x-hidden">
              <p className="mx-auto max-w-5xl font-display text-lg sm:text-2xl md:text-2xl leading-[1.3] text-[#285963] break-words">
                At BSY Legal, we provide a full spectrum of legal services
                designed to meet the evolving needs of our clients. Our
                multidisciplinary expertise allows us to deliver tailored
                solutions with precision, efficiency, and a deep understanding
                of both local and international legal frameworks.
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
            <div className="relative z-10 overflow-x-hidden">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
                {SERVICES.map((service) => (
                  <article
                    key={service.slug}
                    className="rounded-lg border border-[#f0f1f1] bg-[#f8f9f8] p-4 sm:p-5 md:p-6 flex flex-col"
                  >
                    <h3 className="text-base sm:text-lg md:text-2xl font-semibold leading-snug text-[#1e252a]">
                      {service.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 line-clamp-3 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 text-[#5c656d] flex-grow">
                      {service.intro[0]}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-4 text-xs sm:text-sm font-medium text-[#1e252a] hover:text-[#215861] transition self-start"
                    >
                      Learn More →
                    </Link>
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
                Speak With Us
              </Button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
