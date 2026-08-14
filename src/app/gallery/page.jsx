import fs from "node:fs";
import path from "node:path";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import GalleryMasonry from "@/components/site/GalleryMasonry";
import galleryDimensions from "@/lib/data/galleryDimensions.json";

export const metadata = {
  title: "Gallery | BSY Legal",
  description: "Celebrating five years of impact — BSY Legal moments.",
};

export const dynamic = "force-dynamic";

const COVER_IMG = "/assets/gallery/Highlights/IMG_1043.jpg";
const BACKGROUND = "/assets/sections/background.jpg";

// Deliberately NOT shuffled here. The random reorder is a purely decorative,
// client-only concern (same as the original site, which rendered entirely
// client-side) — doing it with Math.random() in a Server Component would
// have SSR and the client-hydration pass disagree on the order, since
// Next.js can invoke this render more than once per request. GalleryMasonry
// does the shuffle itself, after mount.
function getGalleryImages() {
  const dir = path.join(process.cwd(), "public/assets/gallery/Highlights");
  const filenames = fs
    .readdirSync(dir)
    .filter((name) => /\.(jpe?g|png)$/i.test(name));

  return filenames
    .map((filename) => {
      const dimensions = galleryDimensions[filename];
      return {
        src: `/assets/gallery/Highlights/${filename}`,
        alt: filename || "Gallery image",
        filename,
        aspectRatio:
          dimensions && dimensions.height
            ? dimensions.width / dimensions.height
            : 1,
      };
    })
    .sort((a, b) => a.filename.localeCompare(b.filename))
    .map((image, index) => ({ ...image, originalIndex: index }));
}

export default function GalleryPage() {
  const galleryImages = getGalleryImages();

  return (
    <>
      <Header currentPage="gallery" />

      <main id="gallery-top" className="min-h-screen bg-white text-[#1a1a1a]">
        <section
          className="relative flex min-h-[clamp(420px,72vh,760px)] items-center justify-center overflow-hidden bg-[#f9f6f3]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${COVER_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "60% 35% ",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),rgba(0,0,0,0.42))]" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-end px-5 pb-20 sm:pb-36 lg:pb-44 text-center top-24 sm:top-40 lg:top-60">
            <span className="mb-5 inline-flex items-center rounded-full border border-white/80 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.35em] text-white backdrop-blur-sm">
              5 Years of Excellence
            </span>
            <h1 className="text-4xl font-light uppercase tracking-[0.06em] text-white sm:text-6xl md:text-[5rem] lg:text-[6rem]">
              BSY Moments
            </h1>
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

            <GalleryMasonry images={galleryImages} />
          </section>
        </div>
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
