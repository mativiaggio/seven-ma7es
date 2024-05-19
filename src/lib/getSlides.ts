import fs from "fs";
import path from "path";

export function getSlides() {
  const slidesDirectory = path.join(process.cwd(), "public/examples");
  const filenames = fs.readdirSync(slidesDirectory);
  const slides = filenames.map((filename) => `/examples/${filename}`);
  return slides;
}
