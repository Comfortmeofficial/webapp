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
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-[#f5f6f3] py-20">
      <div className="mx-auto  max-w-[90vw] overflow-hidden  flex relative">
        <div className="flex absolute inset-0">
          <div className="flex relative w-[40vw] ">
            <div
              className="bg-blue-400  text-white p-10 
          [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] absolute inset-0 z-10"
            ></div>
            <div
              className="bg-red-400  text-white p-10 
          [clip-path:polygon(0_0,95%_0,75%_100%,0_100%)] absolute inset-0 z-20"
            ></div>
            <div
              className="bg-[#18535B] text-white p-10 
          [clip-path:polygon(0_0,90%_0,70%_100%,0_100%)] absolute inset-0 z-30"
            >
              <p className="text-xs text-[#9cd4d8]">Testimonials</p>
              <h2 className="font-display mt-3 text-5xl leading-tight">
                Trusted by Clients.
                <br />
                Proven by Results.
              </h2>
              <p className="mt-5 max-w-sm text-lg leading-8 text-white/90">
                We are committed to delivering exceptional legal services backed
                by professionalism, integrity, and results.
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[20vw] overflow-hidden bg-[repeating-linear-gradient(90deg,#2a1a10_0px,#2a1a10_42px,#6f5b35_42px,#6f5b35_62px,#9f7b3d_62px,#9f7b3d_82px,#4b3726_82px,#4b3726_126px)] py-14 max-w-[70vw]">
          <div className="animate-marquee-left flex w-max gap-5 pl-4 md:pl-8">
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="w-[280px] shrink-0 rounded-2xl bg-white/95 p-5 text-[#293038] shadow-sm md:w-[330px]"
              >
                <p className="text-sm leading-7">{item.quote}</p>
                <p className="mt-5 font-semibold">{item.name}</p>
                <p className="text-sm text-[#6b747c]">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
