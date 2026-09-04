export type BrandColor = {
  name: string;
  code: string;
  hex: string;
};

export type PaintBrand = {
  slug: string;
  name: string;
  description: string;
  colors: BrandColor[];
};

export const paintBrands: PaintBrand[] = [
  {
    slug: "benjamin-moore",
    name: "Benjamin Moore",
    description:
      "Ten of Benjamin Moore's most consistently popular colors, from crisp whites to a confident navy.",
    colors: [
      { name: "Simply White", code: "OC-117", hex: "#F7F7EE" },
      { name: "White Dove", code: "OC-17", hex: "#F3EFE0" },
      { name: "Chantilly Lace", code: "OC-65", hex: "#F4F6F1" },
      { name: "Pale Oak", code: "OC-20", hex: "#DDD9CE" },
      { name: "Edgecomb Gray", code: "HC-173", hex: "#DAD4C5" },
      { name: "Gray Owl", code: "OC-52", hex: "#D3D4CC" },
      { name: "Revere Pewter", code: "HC-172", hex: "#CCC7B9" },
      { name: "Boothbay Gray", code: "HC-165", hex: "#ACB1B0" },
      { name: "Hale Navy", code: "HC-154", hex: "#444C57" },
      { name: "Wenge", code: "AF-180", hex: "#3C2D2B" },
    ],
  },
  {
    slug: "sherwin-williams",
    name: "Sherwin-Williams",
    description:
      "The bestsellers — Agreeable Gray has been the top-selling color in the US for five years running.",
    colors: [
      { name: "Pure White", code: "SW 7005", hex: "#EDECE6" },
      { name: "Alabaster", code: "SW 7008", hex: "#EDEAE0" },
      { name: "Sea Salt", code: "SW 6204", hex: "#CDD2CA" },
      { name: "Repose Gray", code: "SW 7015", hex: "#CCC9C0" },
      { name: "Agreeable Gray", code: "SW 7029", hex: "#D1CBC1" },
      { name: "Accessible Beige", code: "SW 7036", hex: "#D1C7B8" },
      { name: "Dorian Gray", code: "SW 7017", hex: "#ACA79E" },
      { name: "Naval", code: "SW 6244", hex: "#2F3D4C" },
      { name: "Peppercorn", code: "SW 7674", hex: "#585858" },
      { name: "Iron Ore", code: "SW 7069", hex: "#434341" },
    ],
  },
  {
    slug: "cloverdale-paint",
    name: "Cloverdale Paint",
    description:
      "From the Artisan Colour Palette — the collection most specified by professional painters and designers across Canada.",
    colors: [
      { name: "Warm Grey", code: "CA091", hex: "#DED2BF" },
      { name: "Sage", code: "CA182", hex: "#C0C4BC" },
      { name: "Glacier", code: "CA184", hex: "#BDCCC4" },
      { name: "Harbour Grey", code: "CA195", hex: "#929CA2" },
      { name: "Slate", code: "CA090", hex: "#8C857C" },
      { name: "Foothills", code: "CA084", hex: "#656057" },
      { name: "Deep Forest", code: "CA166", hex: "#767771" },
      { name: "Iron", code: "CA207", hex: "#585757" },
      { name: "Storm", code: "CA211", hex: "#55524F" },
      { name: "Midnight", code: "CA210", hex: "#3D404A" },
    ],
  },
];

export function getPaintBrands() {
  return paintBrands;
}
