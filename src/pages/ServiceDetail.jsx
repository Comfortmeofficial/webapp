import BACKGROUND from "../assets/sections/background.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SERVICES } from "../data/services";

function ServiceDetailPage({ slug }) {
  const service = SERVICES.find((item) => item.slug === slug) || SERVICES[0];

  return (
    <>
      <Header currentPage="services" />
      <div
        className="flex w-full items-center justify-center"
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className=" bg-[#f8f9fb] px-4 py-16 pt-32 text-[#1e252a] w-[98vw] sm:px-8">
          <div className="mx-auto max-w-5xl">
            <a
              href="/services"
              className="inline-flex items-center gap-1 rounded-md border border-[#18535b] px-3 py-2 text-xs font-medium text-[#18535b] transition hover:bg-[#18535b]/5"
            >
              ← Back to Services
            </a>

            <h1 className="font-display mt-6 text-3xl text-[#18535b] sm:text-5xl">
              {service.title}
            </h1>

            <article className="mt-8 rounded-md border border-[#eceeec] bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold text-[#18535b]">Description</p>
              <div className="mt-3 space-y-4 text-sm leading-7 text-[#5c656d] sm:text-base">
                {service.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-8 text-sm font-semibold text-[#1e252a] sm:text-base">
                What We Do
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[#5c656d] sm:text-base">
                {service.whatWeDo.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#215861]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm leading-7 text-[#5c656d] sm:text-base">
                {service.closing}
              </p>
            </article>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default ServiceDetailPage;
