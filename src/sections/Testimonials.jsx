import BACKGROUND2 from "../assets/sections/trusted-by-clients.svg";
import BACKGROUND from "../assets/sections/trusted-slider.svg";

const testimonials = [
  {
    quote:
      "BSY Legal provided exceptional guidance throughout our transaction. Their attention to detail and responsiveness made the entire process seamless.",
    name: "Adewale M.",
    role: "Business Owner",
  },
  {
    quote:
      "Their professionalism and depth of knowledge stood out immediately. We felt confident and supported at every stage of our case.",
    name: "Chioma E.",
    role: "Entrepreneur",
  },
  {
    quote:
      "BSY Legal combines practical insight with legal excellence. They brought clarity and structure to a very complex dispute.",
    name: "Ibrahim M.",
    role: "Private Client",
  },
];

function Testimonials() {
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-[#f5f6f3] py-16 sm:py-20 md:h-auto">
      <div className="mx-auto overflow-hidden flex relative">
        <div className="flex absolute inset-0">
          <div className="hidden sm:flex relative w-[40vw] h-[80vh] drop-shadow-gray-950">
            <div
              className="flex shadow-xl shadow-black-900 text-white p-8 md:p-10
          [clip-path:polygon(0_0,100%_0,70%_100%,0_100%)] absolute inset-0 z-10"
              style={{
                backgroundImage: `url(${BACKGROUND})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="bg-[#e6cd91]/95 text-white p-8 md:p-10
          [clip-path:polygon(0_0,95%_0,65%_100%,0_100%)] absolute inset-0 z-20"
            ></div>
            <div
              className="bg-[#18535B] text-white p-6 md:p-10
          [clip-path:polygon(0_0,90%_0,60%_100%,0_100%)] absolute inset-0 z-30"
            >
              <p className="text-xs text-[#9cd4d8]">Testimonials</p>
              <h2 className="font-display mt-2 md:mt-3 text-3xl md:text-5xl leading-tight">
                Trusted by Clients.
                <br />
                Proven by Results.
              </h2>
              <p className="mt-3 md:mt-5 max-w-sm text-sm md:text-lg leading-7 md:leading-8 text-white/90">
                We are committed to delivering exceptional legal services backed
                by professionalism, integrity, and results.
              </p>
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden py-16 sm:py-24 md:py-45 max-w-full w-full sm:w-auto"
          style={{
            backgroundImage: `url(${BACKGROUND2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="animate-marquee-left flex w-max gap-3 sm:gap-5 pl-2 sm:pl-4 md:pl-8">
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="w-[240px] sm:w-[280px] shrink-0 rounded-xl sm:rounded-2xl bg-white/95 p-4 sm:p-5 text-[#293038] shadow-sm md:w-[330px]"
              >
                <p className="text-xs sm:text-sm leading-6 md:leading-7">{item.quote}</p>
                <p className="mt-3 sm:mt-5 font-semibold text-sm">{item.name}</p>
                <p className="text-xs sm:text-sm text-[#6b747c]">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
