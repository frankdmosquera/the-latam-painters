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

export type SetRole = "Wall" | "Trim" | "Accent";

export type SetColor = {
  role: SetRole;
  name: string;
  code: string;
  hex: string;
};

export type CuratedPaletteSet = {
  slug: string;
  name: string;
  brand: string;
  source: string;
  colors: SetColor[];
};

export const curatedPaletteSets: CuratedPaletteSet[] = [
  {
    slug: "bm-silhouette",
    name: "Silhouette",
    brand: "Benjamin Moore",
    source: "From Benjamin Moore's official 2026 Color Trends palette",
    colors: [
      { role: "Wall", name: "Silhouette", code: "AF-655", hex: "#57504C" },
      { role: "Trim", name: "Swiss Coffee", code: "OC-45", hex: "#EEEAE0" },
      { role: "Accent", name: "Sherwood Tan", code: "1054", hex: "#B8A183" },
    ],
  },
  {
    slug: "bm-narragansett-green",
    name: "Narragansett Green",
    brand: "Benjamin Moore",
    source: "From Benjamin Moore's official 2026 Color Trends palette",
    colors: [
      {
        role: "Wall",
        name: "Narragansett Green",
        code: "HC-157",
        hex: "#435155",
      },
      { role: "Trim", name: "Swiss Coffee", code: "OC-45", hex: "#EEEAE0" },
      { role: "Accent", name: "Raindance", code: "1572", hex: "#A7B3AA" },
    ],
  },
  {
    slug: "bm-first-crush",
    name: "First Crush",
    brand: "Benjamin Moore",
    source: "From Benjamin Moore's official 2026 Color Trends palette",
    colors: [
      { role: "Wall", name: "First Crush", code: "CSP-310", hex: "#E8DCCE" },
      { role: "Trim", name: "Sherwood Tan", code: "1054", hex: "#B8A183" },
      {
        role: "Accent",
        name: "Southwest Pottery",
        code: "048",
        hex: "#975F57",
      },
    ],
  },
  {
    slug: "sw-naval",
    name: "Naval",
    brand: "Sherwin-Williams",
    source: "Sherwin-Williams' documented coordinating colors for Naval",
    colors: [
      { role: "Wall", name: "Naval", code: "SW 6244", hex: "#2F3D4C" },
      { role: "Trim", name: "Alabaster", code: "SW 7008", hex: "#EDEAE0" },
      {
        role: "Accent",
        name: "Urbane Bronze",
        code: "SW 7048",
        hex: "#54504A",
      },
    ],
  },
  {
    slug: "sw-agreeable-gray",
    name: "Agreeable Gray",
    brand: "Sherwin-Williams",
    source:
      "Sherwin-Williams' documented coordinating colors for Agreeable Gray",
    colors: [
      {
        role: "Wall",
        name: "Agreeable Gray",
        code: "SW 7029",
        hex: "#D1CBC1",
      },
      { role: "Trim", name: "Pure White", code: "SW 7005", hex: "#EDECE6" },
      { role: "Accent", name: "Peppercorn", code: "SW 7674", hex: "#585858" },
    ],
  },
  {
    slug: "sw-sea-salt",
    name: "Sea Salt",
    brand: "Sherwin-Williams",
    source: "Sherwin-Williams' documented coordinating colors for Sea Salt",
    colors: [
      { role: "Wall", name: "Sea Salt", code: "SW 6204", hex: "#CDD2CA" },
      { role: "Trim", name: "Alabaster", code: "SW 7008", hex: "#EDEAE0" },
      { role: "Accent", name: "Iron Ore", code: "SW 7069", hex: "#434341" },
    ],
  },
  {
    slug: "cloverdale-foothills",
    name: "Foothills",
    brand: "Cloverdale Paint",
    source: "From Cloverdale's Artisan Colour Palette",
    colors: [
      { role: "Wall", name: "Foothills", code: "CA084", hex: "#656057" },
      { role: "Trim", name: "Warm Grey", code: "CA091", hex: "#DED2BF" },
      { role: "Accent", name: "Midnight", code: "CA210", hex: "#3D404A" },
    ],
  },
];

export function getCuratedPaletteSets() {
  return curatedPaletteSets;
}
