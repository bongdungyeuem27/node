import sharp from "sharp";
export function resize(buffer, width, height) {
  return sharp(buffer)
    .rotate()
    .resize(width, height, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .withMetadata();
}

export async function save(sharp, type, path) {
  return await sharp.toFile(path + "." + type);
}
