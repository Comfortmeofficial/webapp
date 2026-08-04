import BACKGROUND2 from "../assets/sections/trusted-by-clients.svg";
import BACKGROUND from "../assets/sections/trusted-slider.svg";
import TEAM_1040 from "../assets/team/team_slideshow/IMG_1040copy.jpg";
import TEAM_1043 from "../assets/team/team_slideshow/IMG_1043.jpg";
import TEAM_1047 from "../assets/team/team_slideshow/IMG_1047copy.jpg";
import TEAM_9512 from "../assets/team/team_slideshow/IMG_9512-Recovered.jpg";
import TEAM_9545 from "../assets/team/team_slideshow/IMG_9545.jpg";
import TEAM_9686 from "../assets/team/team_slideshow/IMG_9686.jpg";
import TEAM_9691 from "../assets/team/team_slideshow/IMG_9691.jpg";
import TEAM_9763 from "../assets/team/team_slideshow/IMG_9763.jpg";
import TEAM_9768 from "../assets/team/team_slideshow/IMG_9768.jpg";
import TEAM_9787 from "../assets/team/team_slideshow/IMG_9787copy.jpg";
import TEAM_9805 from "../assets/team/team_slideshow/IMG_9805.jpg";
import TEAM_9820 from "../assets/team/team_slideshow/IMG_9820.jpg";
import TEAM_9831 from "../assets/team/team_slideshow/IMG_9831.jpg";
import TEAM_9847 from "../assets/team/team_slideshow/IMG_9847.jpg";
import TEAM_9853 from "../assets/team/team_slideshow/IMG_9853.jpg";
import TEAM_9860 from "../assets/team/team_slideshow/IMG_9860.jpg";

const teamPhotos = [
  TEAM_1040,
  TEAM_1043,
  TEAM_1047,
  TEAM_9512,
  TEAM_9545,
  TEAM_9686,
  TEAM_9691,
  TEAM_9763,
  TEAM_9768,
  TEAM_9787,
  TEAM_9805,
  TEAM_9820,
  TEAM_9831,
  TEAM_9847,
  TEAM_9853,
  TEAM_9860,
];

function Testimonials() {
  const marqueeItems = [...teamPhotos, ...teamPhotos, ...teamPhotos];

  return (
    <section id="testimonials" className="bg-[#f5f6f3] overflow-hidden">
      {/* Mobile header */}
      <div className="sm:hidden px-6 pt-12 pb-8">
        {/* <p className="text-xs text-[#18535B] uppercase tracking-widest">Testimonials</p> */}
        <h2 className="font-display mt-2 text-[clamp(1.5rem,1rem+2vw,1.875rem)] leading-tight text-[#1a2028]">
          Excellence Starts with Our People.
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#5f686f]">
          We are committed to delivering exceptional legal services backed by
          professionalism, integrity, and results.
        </p>
        <a
          href="/team"
          className="mt-4 inline-flex rounded-md bg-[#18535B] px-4 py-2 text-xs font-medium text-white hover:bg-[#123f45] transition"
        >
          Meet The Team
        </a>
      </div>

      {/* Marquee + desktop panel */}
      <div className="relative flex">
        {/* Desktop left panel */}
        <div className="hidden sm:flex absolute inset-0 pointer-events-none">
          <div className="relative w-[40vw] h-full">
            <div
              className="shadow-xl text-white p-8 md:p-10
                [clip-path:polygon(0_0,95%_0,70%_100%,0_100%)] absolute inset-0 z-10"
              style={{
                backgroundImage: `url(${BACKGROUND})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="bg-[#e6cd91]/95 p-8 md:p-10
                [clip-path:polygon(0_0,90%_0,65%_100%,0_100%)] absolute inset-0 z-20"
            />
            <div
              className="bg-[#18535B] text-white p-6 md:p-10 flex flex-col items-start justify-center
                [clip-path:polygon(0_0,85%_0,60%_100%,0_100%)] absolute inset-0 z-30"
            >
              {/* <p className="text-xs text-[#9cd4d8]">Testimonials</p> */}
              <h2 className="font-display max-w-[22vw] text-3xl sm:text-2xl md:text-3xl leading-tight">
                Excellence Starts with Our People.
              </h2>
              <p className="mt-3 md:mt-5 max-w-[19vw] text-sm md:text-lg leading-7 md:leading-8 text-white/90">
                We are committed to delivering exceptional legal services backed
                by professionalism, integrity, and results.
              </p>
              <a
                href="/team"
                className="mt-4 md:mt-6 inline-flex rounded-md bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#1c242a] hover:bg-gray-100 transition"
              >
                Meet The Team
              </a>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div
          className="w-full overflow-hidden py-8 sm:py-24 md:py-32"
          style={{
            backgroundImage: `url(${BACKGROUND2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="animate-marquee-left-slow flex w-max gap-3 sm:gap-5 pl-2 sm:pl-4 md:pl-8"
            style={{ animationDuration: "55s" }}
          >
            {marqueeItems.map((photo, index) => (
              <div
                key={`team-photo-${index}`}
                className="aspect-[3/2] w-[240px] sm:w-[300px] md:w-[360px] shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-[#73b329] shadow-sm"
              >
                <img
                  src={photo}
                  alt="BSY Legal team"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
