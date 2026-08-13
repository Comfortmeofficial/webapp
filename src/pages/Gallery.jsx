import Header from "../components/Header";
import Footer from "../components/Footer";
import coverImg from "../assets/gallery/Highlights/IMG_1043.jpg";
import BACKGROUND from "../assets/sections/background.jpg";


const highlightImageModules = import.meta.glob("../assets/gallery/Highlights/*.jpg", {
  eager: true,
});

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const sortedGalleryImages = Object.values(highlightImageModules)
  .map((module) => module.default)
  .sort((a, b) => a.localeCompare(b))
  .map((src) => ({
    src,
    alt: src.split("/").pop() || "Gallery image",
  }));

const [firstGalleryImage, ...restGalleryImages] = sortedGalleryImages;
const galleryImages = firstGalleryImage
  ? [firstGalleryImage, ...shuffle(restGalleryImages)]
  : shuffle(restGalleryImages);

function GalleryPage() {
  return (
    <>
      <Header currentPage="gallery" />

      <main id="gallery-top" className="min-h-screen bg-white text-[#1a1a1a]">
        <section
          className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-[#f9f6f3]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${coverImg})`,
            backgroundSize: "cover",
            backgroundPosition: "60% 35% ",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),rgba(0,0,0,0.42))]" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-end px-5 pb-36 sm:pb-44 text-center top-60">
            <span className="mb-5 inline-flex items-center rounded-full border border-white/80 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.35em] text-white backdrop-blur-sm">
              5 Years of Excellence
            </span>
            <h1 className="text-4xl font-light uppercase tracking-[0.06em] text-white sm:text-6xl md:text-[5rem] lg:text-[6rem]">
              BSY Moments
            </h1>
            {/* <button
              type="button"
              className="mt-8 border border-white/80 bg-white/10 px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white/20 backdrop-blur-sm"
            >
              VIEW GALLERY
            </button> */}
          </div>
        </section>
          <div
                  className="flex flex-col items-center justify-center"
                  style={{
                    backgroundImage: `url(${BACKGROUND})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
        <section className="bg-white px-3 pb-20 pt-8 sm:px-4 max-w-full w-[98vw] sm:w-[98vw]">
          <div className="mx-auto mb-7 max-w-[1400px] text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#7a736d]">
              Celebrating five years of impact
            </p>
          </div>

          <div className="mx-auto max-w-[1400px] columns-2 gap-3 md:columns-3 xl:columns-4">
            {galleryImages.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="mb-3 overflow-hidden rounded-sm border border-[#e7e0d8] bg-[#f5f0eb]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto w-full object-cover transition duration-300 hover:opacity-90"
                />
              </figure>
            ))}
          </div>
        </section></div>
      </main>

      <a
        href="#gallery-top"
        className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1f3135] text-lg text-white shadow-lg transition hover:bg-[#142a2f]"
        aria-label="Back to top"
      >
        ↑
      </a>

      <Footer />
    </>
  );
}

export default GalleryPage;
