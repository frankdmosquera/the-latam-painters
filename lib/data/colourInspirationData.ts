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

type NamedColor = { name: string; code: string; hex: string };

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildGroup(
  brand: string,
  source: string,
  slugPrefix: string,
  trim: NamedColor,
  accent: NamedColor,
  walls: NamedColor[],
): CuratedPaletteSet[] {
  return walls.map((wall) => ({
    slug: `${slugPrefix}-${slugify(wall.name)}`,
    name: wall.name,
    brand,
    source,
    colors: [
      { role: "Wall", ...wall },
      { role: "Trim", ...trim },
      { role: "Accent", ...accent },
    ],
  }));
}

// ---- Benjamin Moore -------------------------------------------------------
// All names, codes, and hex values below are real Benjamin Moore colors,
// individually sourced and verified against multiple paint-color reference
// sites — not invented. Colors are grouped by undertone into a handful of
// trim/accent pairings (a small rotating set of trims + accents is exactly
// how paint brands and designers actually recommend combinations at scale),
// rather than one bespoke pairing per wall color.
const BM_SOURCE =
  "Real Benjamin Moore colors, paired using a trim/accent grouped by undertone family";

const bmNeutralsGreiges = buildGroup(
  "Benjamin Moore",
  BM_SOURCE,
  "bm-neutral",
  { name: "Swiss Coffee", code: "OC-45", hex: "#EEEAE0" },
  { name: "Wrought Iron", code: "2124-10", hex: "#4A4B4C" },
  [
    { name: "Revere Pewter", code: "HC-172", hex: "#CCC7B9" },
    { name: "Edgecomb Gray", code: "HC-173", hex: "#DAD4C5" },
    { name: "Pale Oak", code: "OC-20", hex: "#DDD9CE" },
    { name: "Gray Owl", code: "OC-52", hex: "#D3D4CC" },
    { name: "Boothbay Gray", code: "HC-165", hex: "#ACB1B0" },
    { name: "Abalone", code: "2108-60", hex: "#D4D0C8" },
    { name: "Alphano Beige", code: "989", hex: "#D0C5B8" },
    { name: "Cinnamon Slate", code: "2113-40", hex: "#8A7576" },
    { name: "Adagio", code: "1593", hex: "#A1A9A9" },
    { name: "Alaskan Husky", code: "1479", hex: "#D5D8D3" },
    { name: "Albescent", code: "OC-40", hex: "#EBE3CF" },
    { name: "Albany White", code: "944", hex: "#EBE5CE" },
    { name: "Adams Gold", code: "HC-18", hex: "#DBCB9D" },
    { name: "Almond Bisque", code: "269", hex: "#E8DCBC" },
    { name: "A la Mode", code: "2109-70", hex: "#E7E3DF" },
    { name: "Ally's Earring", code: "CSP-125", hex: "#E2E1D2" },
    { name: "Alexandria Beige", code: "HC-77", hex: "#A4937D" },
  ],
);

const bmGreensBlues = buildGroup(
  "Benjamin Moore",
  BM_SOURCE,
  "bm-cool",
  { name: "White Dove", code: "OC-17", hex: "#F3EFE0" },
  { name: "Hale Navy", code: "HC-154", hex: "#444C57" },
  [
    { name: "Narragansett Green", code: "HC-157", hex: "#435155" },
    { name: "Acadia Green", code: "2034-50", hex: "#AFD3B1" },
    { name: "Adam Green", code: "2037-40", hex: "#54C89A" },
    { name: "Adirondack Green", code: "453", hex: "#89987F" },
    { name: "Aganthus Green", code: "472", hex: "#BAC1AE" },
    { name: "Alligator Green", code: "2143-20", hex: "#8E845F" },
    { name: "Alligator Alley", code: "441", hex: "#636E52" },
    { name: "Absolute Green", code: "2043-10", hex: "#065244" },
    { name: "Alpine Trail", code: "622", hex: "#5A9F85" },
    { name: "Aegean Olive", code: "1491", hex: "#5E5A4D" },
    { name: "Admiral Blue", code: "2065-10", hex: "#2C3863" },
    { name: "Adriatic Sea", code: "CSP-660", hex: "#014864" },
    { name: "Aegean Teal", code: "2136-40", hex: "#708A8C" },
    { name: "Albuquerque Teal", code: "607", hex: "#22A78D" },
    { name: "Alfresco", code: "1672", hex: "#688290" },
    { name: "Airway", code: "828", hex: "#B5C6D8" },
    { name: "After the Rain", code: "1452", hex: "#C2BABE" },
  ],
);

const bmWarmBold = buildGroup(
  "Benjamin Moore",
  BM_SOURCE,
  "bm-warm",
  { name: "Simply White", code: "OC-117", hex: "#F7F7EE" },
  { name: "Almost Black", code: "2130-30", hex: "#504F54" },
  [
    { name: "Southwest Pottery", code: "048", hex: "#975F57" },
    { name: "First Crush", code: "CSP-310", hex: "#E8DCCE" },
    { name: "Burnt Caramel", code: "2167-10", hex: "#C86D38" },
    { name: "Caliente", code: "AF-290", hex: "#8B2829" },
    { name: "Adobe Dust", code: "2175-40", hex: "#D58E6D" },
    { name: "Adobe Orange", code: "2171-30", hex: "#D46752" },
    { name: "Acorn", code: "1125", hex: "#987656" },
    { name: "Acorn Squash", code: "258", hex: "#B29658" },
    { name: "Adirondack Brown", code: "2095-10", hex: "#704C3C" },
    { name: "Algonquin Trail", code: "1055", hex: "#A78D6D" },
    { name: "Aged Bronze", code: "231", hex: "#806D47" },
    { name: "'50s Pink", code: "2086-70", hex: "#FCE4EB" },
    { name: "Hawthorne Yellow", code: "HC-4", hex: "#F6E2A5" },
    { name: "Acorn Yellow", code: "2161-40", hex: "#CEA980" },
    { name: "Allablaze", code: "1304", hex: "#F08C85" },
    { name: "Silhouette", code: "AF-655", hex: "#57504C" },
  ],
);

// ---- Sherwin-Williams -------------------------------------------------------
const SW_SOURCE =
  "Real Sherwin-Williams colors, paired using a trim/accent grouped by undertone family";

const swNeutralsGrays = buildGroup(
  "Sherwin-Williams",
  SW_SOURCE,
  "sw-neutral",
  { name: "Pure White", code: "SW 7005", hex: "#EDECE6" },
  { name: "Iron Ore", code: "SW 7069", hex: "#434341" },
  [
    { name: "Agreeable Gray", code: "SW 7029", hex: "#D1CBC1" },
    { name: "Accessible Beige", code: "SW 7036", hex: "#D1C7B8" },
    { name: "Repose Gray", code: "SW 7015", hex: "#CCC9C0" },
    { name: "Anew Gray", code: "SW 7030", hex: "#BFB6AA" },
    { name: "Amazing Gray", code: "SW 7044", hex: "#BEB5A9" },
    { name: "Analytical Gray", code: "SW 7051", hex: "#BFB6A7" },
    { name: "Alpaca", code: "SW 7022", hex: "#CCC5BD" },
    { name: "Aloof Gray", code: "SW 6197", hex: "#C9C9C0" },
    { name: "Acier", code: "SW 9170", hex: "#9E9991" },
    { name: "Adaptive Shade", code: "SW 7053", hex: "#867E70" },
    { name: "Allegory", code: "SW 9553", hex: "#B4B2A9" },
    { name: "Alloy", code: "SW 9569", hex: "#8E8A81" },
    { name: "Anonymous", code: "SW 7046", hex: "#817A6E" },
    { name: "Ancient Marble", code: "SW 6162", hex: "#D1CCB9" },
    { name: "Dorian Gray", code: "SW 7017", hex: "#ACA79E" },
  ],
);

const swColorCharacter = buildGroup(
  "Sherwin-Williams",
  SW_SOURCE,
  "sw-color",
  { name: "Alabaster", code: "SW 7008", hex: "#EDEAE0" },
  { name: "Tricorn Black", code: "SW 6258", hex: "#2F2F30" },
  [
    { name: "Naval", code: "SW 6244", hex: "#2F3D4C" },
    { name: "Sea Salt", code: "SW 6204", hex: "#CDD2CA" },
    { name: "Cavern Clay", code: "SW 7701", hex: "#AC6B53" },
    { name: "Grounded", code: "SW 6089", hex: "#785B47" },
    { name: "Aleutian", code: "SW 6241", hex: "#98A9B7" },
    { name: "Adrift", code: "SW 7608", hex: "#87AAB9" },
    { name: "Agua Fría", code: "SW 9053", hex: "#9FC5CC" },
    { name: "Agate Green", code: "SW 7742", hex: "#8EA486" },
    { name: "Active Green", code: "SW 6986", hex: "#6CCCA5" },
    { name: "Alexandrite", code: "SW 60", hex: "#598C74" },
    { name: "Aloe", code: "SW 6464", hex: "#ACCABC" },
    { name: "Amber Wave", code: "SW 6657", hex: "#D28240" },
    { name: "Anjou Pear", code: "SW 6381", hex: "#DDAC6D" },
    { name: "Aged Wine", code: "SW 6299", hex: "#895460" },
    { name: "Alaea", code: "SW 7579", hex: "#81585B" },
  ],
);

// ---- Cloverdale Paint -------------------------------------------------------
const CLOVERDALE_SOURCE =
  "Real Cloverdale Paint Artisan Colour Palette colors, paired using a trim/accent grouped by undertone family";

const cloverdaleNeutrals = buildGroup(
  "Cloverdale Paint",
  CLOVERDALE_SOURCE,
  "cloverdale-neutral",
  { name: "Titanium", code: "CA023", hex: "#E7E2D8" },
  { name: "Iron", code: "CA207", hex: "#585757" },
  [
    { name: "Warm Grey", code: "CA091", hex: "#DED2BF" },
    { name: "Sage", code: "CA182", hex: "#C0C4BC" },
    { name: "Glacier", code: "CA184", hex: "#BDCCC4" },
    { name: "Harbour Grey", code: "CA195", hex: "#929CA2" },
    { name: "Slate", code: "CA090", hex: "#8C857C" },
    { name: "Shallot", code: "CA039", hex: "#D5CCC0" },
    { name: "Platinum", code: "CA187", hex: "#CFCEC9" },
    { name: "Seashell", code: "CA033", hex: "#CAC0B4" },
    { name: "Quartz", code: "CA049", hex: "#E2D9D0" },
    { name: "Dewdrop", code: "CA178", hex: "#AAAFA3" },
  ],
);

const cloverdaleDeeper = buildGroup(
  "Cloverdale Paint",
  CLOVERDALE_SOURCE,
  "cloverdale-deep",
  { name: "Crystal", code: "CA020", hex: "#E6E1D8" },
  { name: "Midnight", code: "CA210", hex: "#3D404A" },
  [
    { name: "Foothills", code: "CA084", hex: "#656057" },
    { name: "Deep Forest", code: "CA166", hex: "#767771" },
    { name: "Storm", code: "CA211", hex: "#55524F" },
    { name: "Rainfall", code: "CA196", hex: "#8B9AA2" },
    { name: "Cirrus", code: "CA188", hex: "#B4C0C2" },
    { name: "Canvas", code: "CA038", hex: "#E1D5C9" },
    { name: "French Roast", code: "CA213", hex: "#454140" },
    { name: "Cayenne", code: "CA218", hex: "#7C4945" },
    { name: "Harbour Grey", code: "CA195", hex: "#929CA2" },
    { name: "Glacier", code: "CA184", hex: "#BDCCC4" },
  ],
);

export const curatedPaletteSets: CuratedPaletteSet[] = [
  // A handful of officially-documented combinations lead the list — these
  // come from the brands' own published collections/coordinating-color
  // guidance, not the grouped-by-undertone method above.
  {
    slug: "bm-silhouette-official",
    name: "Silhouette (2026 Color Trends)",
    brand: "Benjamin Moore",
    source: "From Benjamin Moore's official 2026 Color Trends palette",
    colors: [
      { role: "Wall", name: "Silhouette", code: "AF-655", hex: "#57504C" },
      { role: "Trim", name: "Swiss Coffee", code: "OC-45", hex: "#EEEAE0" },
      { role: "Accent", name: "Sherwood Tan", code: "1054", hex: "#B8A183" },
    ],
  },
  {
    slug: "bm-narragansett-green-official",
    name: "Narragansett Green (2026 Color Trends)",
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
    slug: "bm-first-crush-official",
    name: "First Crush (2026 Color Trends)",
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
    slug: "sw-naval-official",
    name: "Naval (Designer Recommended)",
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
    slug: "sw-agreeable-gray-official",
    name: "Agreeable Gray (Designer Recommended)",
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
    slug: "sw-sea-salt-official",
    name: "Sea Salt (Designer Recommended)",
    brand: "Sherwin-Williams",
    source: "Sherwin-Williams' documented coordinating colors for Sea Salt",
    colors: [
      { role: "Wall", name: "Sea Salt", code: "SW 6204", hex: "#CDD2CA" },
      { role: "Trim", name: "Alabaster", code: "SW 7008", hex: "#EDEAE0" },
      { role: "Accent", name: "Iron Ore", code: "SW 7069", hex: "#434341" },
    ],
  },
  {
    slug: "cloverdale-foothills-official",
    name: "Foothills",
    brand: "Cloverdale Paint",
    source: "From Cloverdale's Artisan Colour Palette",
    colors: [
      { role: "Wall", name: "Foothills", code: "CA084", hex: "#656057" },
      { role: "Trim", name: "Warm Grey", code: "CA091", hex: "#DED2BF" },
      { role: "Accent", name: "Midnight", code: "CA210", hex: "#3D404A" },
    ],
  },
  ...bmNeutralsGreiges,
  ...bmGreensBlues,
  ...bmWarmBold,
  ...swNeutralsGrays,
  ...swColorCharacter,
  ...cloverdaleNeutrals,
  ...cloverdaleDeeper,
];

export function getCuratedPaletteSets() {
  return curatedPaletteSets;
}
