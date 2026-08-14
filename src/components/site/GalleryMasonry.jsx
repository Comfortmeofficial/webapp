"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

const COLUMN_BREAKPOINTS = [
  { minWidth: 1280, columnCount: 4 },
  { minWidth: 768, columnCount: 3 },
  { minWidth: 0, columnCount: 2 },
];

function getColumnCount(width) {
  const match = COLUMN_BREAKPOINTS.find((bp) => width >= bp.minWidth);
  return match.columnCount;
}

function useColumnCount() {
  // Always start at the same value the server would render (2), regardless
  // of the real viewport — reading window.innerWidth here would make the
  // client's first render disagree with the SSR HTML. The effect below
  // corrects it right after mount.
  const [columnCount, setColumnCount] = useState(2);

  useEffect(() => {
    const handleResize = () => setColumnCount(getColumnCount(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return columnCount;
}

function subscribeNever() {
  return () => {};
}

// True only once we're running on the client, past the first paint. Used to
// gate the random shuffle below: SSR and the client's first render must
// produce identical output, so both render the deterministic (unshuffled)
// order, then this flips true and the shuffle applies.
function useHasMounted() {
  return useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );
}

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

function shuffleForDisplay(images) {
  const [first, ...rest] = images;
  return first ? [first, ...declusterShuffle(rest)] : declusterShuffle(rest);
}

// Assigns each image to the column that's currently shortest (same idea as
// giving the next job to the least-loaded worker), so columns of
// naturally-varied-height images still end at roughly the same bottom edge.
// Which *column* an image lands in is decided largest-first (LPT): a big
// image placed early still has other columns free to balance against.
// Display order within a column still follows the original (shuffled)
// sequence, so the grid doesn't look sorted by size.
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

export default function GalleryMasonry({ images }) {
  const columnCount = useColumnCount();
  const hasMounted = useHasMounted();

  const displayImages = useMemo(
    () => (hasMounted ? shuffleForDisplay(images) : images),
    [images, hasMounted],
  );

  const galleryColumns = useMemo(
    () => layoutMasonryColumns(displayImages, columnCount),
    [displayImages, columnCount],
  );

  return (
    <div className="mx-auto flex max-w-[1400px] items-start gap-3">
      {galleryColumns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-1 flex-col gap-3">
          {column.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-sm border border-[#e7e0d8] bg-[#f5f0eb]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
  );
}
