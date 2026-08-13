import Header from "../components/Header";
import Footer from "../components/Footer";
import coverImg from "../assets/gallery/cover.jpg";

const highlightImageModules = import.meta.glob("../assets/gallery/Highlights/*.jpg", {
  eager: true,
});

const galleryImages = Object.values(highlightImageModules)
  .map((module) => module.default)
  .sort((a, b) => a.localeCompare(b))
  .map((src) => ({
    src,
    alt: src.split("/").pop() || "Gallery image",
  }));

function GalleryPage() {
  return (
    <>
      <Header currentPage="gallery" />

      <main id="gallery-top" className="min-h-screen bg-white text-[#1a1a1a]">
        <section
          className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-[#f9f6f3]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.2)), url(${coverImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),rgba(0,0,0,0.42))]" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-5 text-center">
            <span className="mb-5 inline-flex items-center rounded-full border border-white/80 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.35em] text-white backdrop-blur-sm">
              5 Years of Excellence
            </span>
            <h1 className="text-4xl font-light uppercase tracking-[0.06em] text-white sm:text-6xl md:text-[5rem] lg:text-[6rem]">
              BSY Moments
            </h1>
            <button
              type="button"
              className="mt-8 border border-white/80 bg-white/10 px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white/20 backdrop-blur-sm"
            >
              VIEW GALLERY
            </button>
          </div>
        </section>

        <section className="bg-white px-3 pb-20 pt-8 sm:px-6">
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
        </section>
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
