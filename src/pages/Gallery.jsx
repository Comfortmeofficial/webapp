import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coverImg from "../assets/gallery/Highlights/IMG_1043.jpg";
import BACKGROUND from "../assets/sections/background.jpg";
import galleryDimensions from "../data/galleryDimensions.json";

const COLUMN_BREAKPOINTS = [
  { minWidth: 1280, columnCount: 4 },
  { minWidth: 768, columnCount: 3 },
  { minWidth: 0, columnCount: 2 },
];

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

// Random shuffle plus a repair pass: images that were near each other in the
// original (capture-order) sequence are usually visually similar, so we keep
// them at least `minGap` apart in the final order.
function declusterShuffle(images, minGap = 3) {
  const result = shuffle(images);
  for (let i = 1; i < result.length; i++) {
    const prevOriginalIndex = result[i - 1].originalIndex;
    if (Math.abs(result[i].originalIndex - prevOriginalIndex) < minGap) {
      for (let j = i + 1; j < result.length; j++) {
        if (Math.abs(result[j].originalIndex - prevOriginalIndex) >= minGap) {
          [result[i], result[j]] = [result[j], result[i]];
          break;
        }
      }
    }
  }
  return result;
}

// Assigns each image to the column that's currently shortest (same idea as
// giving the next job to the least-loaded worker), so columns of
// naturally-varied-height images still end at roughly the same bottom edge.
// Assumes all columns share the same width.
//
// Which *column* an image lands in is decided largest-first (LPT): a big
// image placed early still has other columns free to balance against,
// while placing it late (i.e. in shuffle order) can leave no room left to
// even things out. Display order within a column still follows the
// original (shuffled) sequence, so the grid doesn't look sorted by size.
function layoutMasonryColumns(images, columnCount) {
  const columnHeights = new Array(columnCount).fill(0);
  const columnIndexByImage = new Map();

  const bySizeDescending = [...images].sort(
    (a, b) => 1 / b.aspectRatio - 1 / a.aspectRatio,
  );
  for (const image of bySizeDescending) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (columnHeights[i] < columnHeights[shortest]) shortest = i;
    }
    columnIndexByImage.set(image.src, shortest);
    columnHeights[shortest] += 1 / image.aspectRatio;
  }

  const columns = Array.from({ length: columnCount }, () => []);
  for (const image of images) {
    columns[columnIndexByImage.get(image.src)].push(image);
  }
  return columns;
}

function getColumnCount(width) {
  const match = COLUMN_BREAKPOINTS.find((bp) => width >= bp.minWidth);
  return match.columnCount;
}

function useColumnCount() {
  const [columnCount, setColumnCount] = useState(() =>
    typeof window === "undefined" ? 2 : getColumnCount(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => setColumnCount(getColumnCount(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return columnCount;
}

const sortedGalleryImages = Object.entries(highlightImageModules)
  .map(([path, module]) => {
    const filename = path.split("/").pop();
    const dimensions = galleryDimensions[filename];
    return {
      src: module.default,
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

const [firstGalleryImage, ...restGalleryImages] = sortedGalleryImages;
const galleryImages = firstGalleryImage
  ? [firstGalleryImage, ...declusterShuffle(restGalleryImages)]
  : declusterShuffle(restGalleryImages);

function GalleryPage() {
  const columnCount = useColumnCount();
  const galleryColumns = useMemo(
    () => layoutMasonryColumns(galleryImages, columnCount),
    [columnCount],
  );

  return (
    <>
      <Header currentPage="gallery" />

      <main id="gallery-top" className="min-h-screen bg-white text-[#1a1a1a]">
        <section
          className="relative flex min-h-[clamp(420px,72vh,760px)] items-center justify-center overflow-hidden bg-[#f9f6f3]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${coverImg})`,
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

          <div className="mx-auto flex max-w-[1400px] items-start gap-3">
            {galleryColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-1 flex-col gap-3">
                {column.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded-sm border border-[#e7e0d8] bg-[#f5f0eb]"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="block h-auto w-full object-cover transition duration-300 hover:opacity-90"
                    />
                  </figure>
                ))}
              </div>
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
