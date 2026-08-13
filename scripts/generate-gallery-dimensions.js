import { readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { imageSizeFromFile } from "image-size/fromFile";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleryDir = path.join(__dirname, "../src/assets/gallery/Highlights");
const outputFile = path.join(__dirname, "../src/data/galleryDimensions.json");

const files = readdirSync(galleryDir).filter((file) =>
  file.toLowerCase().endsWith(".jpg"),
);

const dimensions = {};
for (const file of files) {
  const { width, height } = await imageSizeFromFile(
    path.join(galleryDir, file),
  );
  dimensions[file] = { width, height };
}

writeFileSync(outputFile, JSON.stringify(dimensions, null, 2) + "\n");
console.log(`Wrote dimensions for ${files.length} images to ${outputFile}`);
