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
  /** Link to the brand's own official page for this exact color, when verified real. */
  officialUrl?: string;
};

export type CuratedPaletteSet = {
  slug: string;
  name: string;
  brand: string;
  source: string;
  colors: SetColor[];
};

// ---------------------------------------------------------------------------
// Every color below is real, sourced from each brand's own "most popular" /
// bestseller pages and (for Benjamin Moore) its official published color
// catalog — not sampled evenly across the full catalog, which is what made
// the previous version feel unfamiliar. 20 hand-designed themes per brand,
// plus 7 officially-documented combinations (named brand collections or
// published designer coordinating guidance) featured first.
// ---------------------------------------------------------------------------

const bmColor = (
  name: string,
  code: string,
  hex: string,
  officialUrl?: string,
): Omit<SetColor, "role"> =>
  officialUrl ? { name, code, hex, officialUrl } : { name, code, hex };

const BM_URL = (path: string) => `https://www.benjaminmoore.com/en-us/paint-colors/color/${path}`;

// Benjamin Moore trims/accents reused across themes below (all real, all linked)
const bmTrim = {
  simplyWhite: bmColor("Simply White", "OC-117", "#F6F6ED", BM_URL("oc-117/simply-white")),
  chantillyLace: bmColor("Chantilly Lace", "OC-65", "#F4F6F1", BM_URL("oc-65/chantilly-lace")),
  whiteDove: bmColor("White Dove", "OC-17", "#EFEEE5", BM_URL("oc-17/white-dove")),
  whiteHeron: bmColor("White Heron", "OC-57", "#F0F1EA", BM_URL("oc-57/white-heron")),
};

const bmAccent = {
  wroughtIron: bmColor("Wrought Iron", "2124-10", "#494A4B", BM_URL("2124-10/wrought-iron")),
  haleNavy: bmColor("Hale Navy", "HC-154", "#434B56", BM_URL("hc-154/hale-navy")),
  witchingHour: bmColor("Witching Hour", "2120-30", "#46494F", BM_URL("2120-30/witching-hour")),
  hunterGreen: bmColor("Hunter Green", "2041-10", "#2A453D", BM_URL("2041-10/hunter-green")),
  vanDeusenBlue: bmColor("Van Deusen Blue", "HC-156", "#485B6E", BM_URL("hc-156/van-deusen-blue")),
  gentlemansGray: bmColor("Gentleman's Gray", "2062-20", "#304656", BM_URL("2062-20/gentlemans-gray")),
  wenge: bmColor("Wenge", "AF-180", "#3C2D2B", BM_URL("af-180/wenge")),
  vintageVogue: bmColor("Vintage Vogue", "462", "#565D4F", BM_URL("462/vintage-vogue")),
  caliente: bmColor("Caliente", "AF-290", "#8A2728", BM_URL("af-290/caliente")),
  terraMauve: bmColor("Terra Mauve", "105", "#9C6040", BM_URL("105/terra-mauve")),
};

function bmTheme(
  slug: string,
  name: string,
  wall: Omit<SetColor, "role">,
  trim: Omit<SetColor, "role">,
  accent: Omit<SetColor, "role">,
): CuratedPaletteSet {
  return {
    slug: `bm-${slug}`,
    name,
    brand: "Benjamin Moore",
    source: "Real Benjamin Moore color, from BM's own most-popular colors",
    colors: [
      { role: "Wall", ...wall },
      { role: "Trim", ...trim },
      { role: "Accent", ...accent },
    ],
  };
}

const bmSets: CuratedPaletteSet[] = [
  bmTheme("warm-greige-classic", "Warm Greige Classic", bmColor("Revere Pewter", "HC-172", "#CBC6B8", BM_URL("hc-172/revere-pewter")), bmTrim.whiteDove, bmAccent.wroughtIron),
  bmTheme("soft-neutral-retreat", "Soft Neutral Retreat", bmColor("Edgecomb Gray", "HC-173", "#D9D3C4", BM_URL("hc-173/edgecomb-gray")), bmTrim.chantillyLace, bmAccent.haleNavy),
  bmTheme("cloud-grey-study", "Cloud Grey Study", bmColor("Gray Owl", "2137-60", "#D3D4CC", BM_URL("2137-60/gray-owl")), bmTrim.simplyWhite, bmAccent.witchingHour),
  bmTheme("quiet-pale-oak", "Quiet Pale Oak", bmColor("Pale Oak", "OC-20", "#DDD9CE", BM_URL("oc-20/pale-oak")), bmTrim.chantillyLace, bmAccent.wroughtIron),
  bmTheme("weathered-sage-pewter", "Weathered Sage Pewter", bmColor("Antique Pewter", "1560", "#8B8A7B", BM_URL("1560/antique-pewter")), bmTrim.whiteHeron, bmAccent.hunterGreen),
  bmTheme("espresso-statement", "Espresso Statement", bmColor("Silhouette", "AF-655", "#57504C", BM_URL("af-655/silhouette")), bmTrim.simplyWhite, bmAccent.terraMauve),
  bmTheme("confident-navy-study", "Confident Navy Study", bmColor("Hale Navy", "HC-154", "#434B56", BM_URL("hc-154/hale-navy")), bmTrim.whiteDove, bmAccent.wroughtIron),
  bmTheme("foggy-boothbay-coast", "Foggy Boothbay Coast", bmColor("Boothbay Gray", "HC-165", "#AAB2B0", BM_URL("hc-165/boothbay-gray")), bmTrim.whiteHeron, bmAccent.haleNavy),
  bmTheme("airy-ocean-bath", "Airy Ocean Bath", bmColor("Ocean Air", "2123-50", "#D3E1E1", BM_URL("2123-50/ocean-air")), bmTrim.chantillyLace, bmAccent.vanDeusenBlue),
  bmTheme("palladian-blue-sunroom", "Palladian Blue Sunroom", bmColor("Palladian Blue", "HC-144", "#C1D1C9", BM_URL("hc-144/palladian-blue")), bmTrim.simplyWhite, bmAccent.gentlemansGray),
  bmTheme("deep-teal-library", "Deep Teal Library", bmColor("Aegean Teal", "2136-40", "#6F898B", BM_URL("2136-40/aegean-teal")), bmTrim.whiteDove, bmAccent.vanDeusenBlue),
  bmTheme("moody-gentlemans-study", "Moody Gentleman's Study", bmColor("Gentleman's Gray", "2062-20", "#304656", BM_URL("2062-20/gentlemans-gray")), bmTrim.whiteHeron, bmAccent.wenge),
  bmTheme("saybrook-sage-kitchen", "Saybrook Sage Kitchen", bmColor("Saybrook Sage", "HC-114", "#B1B7A2", BM_URL("hc-114/saybrook-sage")), bmTrim.chantillyLace, bmAccent.hunterGreen),
  bmTheme("october-mist-bedroom", "October Mist Bedroom", bmColor("October Mist", "CC-550", "#B6B8A5", BM_URL("cc-550/october-mist")), bmTrim.whiteHeron, bmAccent.vintageVogue),
  bmTheme("hunter-green-library", "Hunter Green Library", bmColor("Hunter Green", "2041-10", "#2A453D", BM_URL("2041-10/hunter-green")), bmTrim.whiteDove, bmAccent.wenge),
  bmTheme("leather-saddle-study", "Leather Saddle Study", bmColor("Leather Saddle Brown", "2100-20", "#754E3F", BM_URL("2100-20/leather-saddle-brown")), bmTrim.whiteHeron, bmAccent.wenge),
  bmTheme("head-over-heels-nursery", "Head Over Heels Nursery", bmColor("Head Over Heels", "AF-250", "#EFDED2", BM_URL("af-250/head-over-heels")), bmTrim.simplyWhite, bmAccent.caliente),
  bmTheme("windham-cream-farmhouse", "Windham Cream Farmhouse", bmColor("Windham Cream", "HC-6", "#F5E9C7", BM_URL("hc-6/windham-cream")), bmTrim.simplyWhite, bmAccent.hunterGreen),
  bmTheme("caliente-bold-dining", "Caliente Bold Dining", bmColor("Caliente", "AF-290", "#8A2728", BM_URL("af-290/caliente")), bmTrim.simplyWhite, bmAccent.wroughtIron),
  bmTheme("terra-mauve-southwest", "Terra Mauve Southwest", bmColor("Terra Mauve", "105", "#9C6040", BM_URL("105/terra-mauve")), bmTrim.whiteHeron, bmAccent.wroughtIron),
];

// ---- Sherwin-Williams --------------------------------------------------
function swTheme(
  slug: string,
  name: string,
  wall: Omit<SetColor, "role">,
  trim: Omit<SetColor, "role">,
  accent: Omit<SetColor, "role">,
): CuratedPaletteSet {
  return {
    slug: `sw-${slug}`,
    name,
    brand: "Sherwin-Williams",
    source: "Real Sherwin-Williams color, from SW's own Top 50 / most-popular colors",
    colors: [
      { role: "Wall", ...wall },
      { role: "Trim", ...trim },
      { role: "Accent", ...accent },
    ],
  };
}

const SW_URL = (path: string) => `https://www.sherwin-williams.com/en-us/color/color-family/${path}`;

const swTrim = {
  pureWhite: { name: "Pure White", code: "SW 7005", hex: "#EDECE6" },
  alabaster: { name: "Alabaster", code: "SW 7008", hex: "#EDEAE0" },
  shojiWhite: { name: "Shoji White", code: "SW 7042", hex: "#E6DFD3" },
  naturalLinen: { name: "Natural Linen", code: "SW 9109", hex: "#DFD3C3" },
};

const swAccent = {
  tricornBlack: { name: "Tricorn Black", code: "SW 6258", hex: "#2F2F30" },
  urbaneBronze: {
    name: "Urbane Bronze",
    code: "SW 7048",
    hex: "#54504A",
    officialUrl: SW_URL("neutral-paint-colors/sw7048-urbane-bronze"),
  },
  ironOre: { name: "Iron Ore", code: "SW 7069", hex: "#434341" },
  peppercorn: {
    name: "Peppercorn",
    code: "SW 7674",
    hex: "#585858",
    officialUrl: SW_URL("neutral-paint-colors/sw7674-peppercorn"),
  },
  blackFox: { name: "Black Fox", code: "SW 7020", hex: "#4F4842" },
};

const swSets: CuratedPaletteSet[] = [
  swTheme("agreeable-gray-everyday", "Agreeable Gray Everyday", { name: "Agreeable Gray", code: "SW 7029", hex: "#D1CBC1" }, swTrim.pureWhite, swAccent.ironOre),
  swTheme("accessible-beige-warmth", "Accessible Beige Warmth", { name: "Accessible Beige", code: "SW 7036", hex: "#D1C7B8" }, swTrim.alabaster, swAccent.urbaneBronze),
  swTheme("balanced-beige-retreat", "Balanced Beige Retreat", { name: "Balanced Beige", code: "SW 7037", hex: "#C0B2A2" }, swTrim.pureWhite, swAccent.peppercorn),
  swTheme("tony-taupe-study", "Tony Taupe Study", { name: "Tony Taupe", code: "SW 7038", hex: "#B1A290" }, swTrim.shojiWhite, swAccent.tricornBlack),
  swTheme("on-the-rocks-neutral", "On the Rocks Neutral", { name: "On the Rocks", code: "SW 7671", hex: "#D0CEC8" }, swTrim.alabaster, swAccent.ironOre),
  swTheme("sea-salt-coastal-calm", "Sea Salt Coastal Calm", { name: "Sea Salt", code: "SW 6204", hex: "#CDD2CA" }, swTrim.alabaster, { name: "Naval", code: "SW 6244", hex: "#2F3D4C", officialUrl: SW_URL("blue-paint-colors/sw6244-naval") }),
  swTheme("repose-gray-living-room", "Repose Gray Living Room", { name: "Repose Gray", code: "SW 7015", hex: "#CCC9C0" }, swTrim.pureWhite, swAccent.peppercorn),
  swTheme("network-gray-blue-grey", "Network Gray Blue-Grey", { name: "Network Gray", code: "SW 7073", hex: "#A0A5A7" }, swTrim.naturalLinen, swAccent.tricornBlack),
  swTheme("dorian-gray-versatile", "Dorian Gray Versatile", { name: "Dorian Gray", code: "SW 7017", hex: "#ACA79E", officialUrl: SW_URL("neutral-paint-colors/sw7017-dorian-gray") }, swTrim.alabaster, swAccent.urbaneBronze),
  swTheme("universal-khaki-2026", "Universal Khaki (2026 Color of the Year)", { name: "Universal Khaki", code: "SW 6150", hex: "#B8A992", officialUrl: SW_URL("neutral-paint-colors/sw6150-universal-khaki") }, swTrim.pureWhite, swAccent.ironOre),
  swTheme("evergreen-fog-green", "Evergreen Fog Green", { name: "Evergreen Fog", code: "SW 9130", hex: "#95978A" }, swTrim.alabaster, swAccent.blackFox),
  swTheme("blustery-sky-blue-grey", "Blustery Sky Blue-Grey", { name: "Blustery Sky", code: "SW 9140", hex: "#6F848C" }, swTrim.pureWhite, { name: "Naval", code: "SW 6244", hex: "#2F3D4C", officialUrl: SW_URL("blue-paint-colors/sw6244-naval") }),
  swTheme("cavern-clay-southwest", "Cavern Clay Southwest", { name: "Cavern Clay", code: "SW 7701", hex: "#AC6B53" }, swTrim.alabaster, swAccent.urbaneBronze),
  swTheme("redend-point-blush-clay", "Redend Point Blush Clay", { name: "Redend Point", code: "SW 9081", hex: "#AE8E7E" }, swTrim.shojiWhite, swAccent.peppercorn),
  swTheme("naval-statement-wall", "Naval Statement Wall", { name: "Naval", code: "SW 6244", hex: "#2F3D4C", officialUrl: SW_URL("blue-paint-colors/sw6244-naval") }, swTrim.pureWhite, swAccent.urbaneBronze),
  swTheme("roycroft-bottle-green-library", "Roycroft Bottle Green Library", { name: "Roycroft Bottle Green", code: "SW 2847", hex: "#324038", officialUrl: SW_URL("green-paint-colors/sw2847-roycroft-bottle-green") }, swTrim.alabaster, swAccent.blackFox),
  swTheme("drift-of-mist-serene", "Drift of Mist Serene", { name: "Drift of Mist", code: "SW 9166", hex: "#DCD8D0" }, swTrim.pureWhite, swAccent.ironOre),
  swTheme("iron-ore-modern-kitchen", "Iron Ore Modern Kitchen", { name: "Iron Ore", code: "SW 7069", hex: "#434341" }, swTrim.alabaster, swAccent.peppercorn),
  swTheme("tricorn-black-drama", "Tricorn Black Drama", { name: "Tricorn Black", code: "SW 6258", hex: "#2F2F30" }, swTrim.pureWhite, swAccent.urbaneBronze),
  swTheme("urbane-bronze-cozy-den", "Urbane Bronze Cozy Den", { name: "Urbane Bronze", code: "SW 7048", hex: "#54504A", officialUrl: SW_URL("neutral-paint-colors/sw7048-urbane-bronze") }, swTrim.naturalLinen, swAccent.tricornBlack),
];

// ---- Cloverdale Paint ---------------------------------------------------
function cloverdaleTheme(
  slug: string,
  name: string,
  wall: Omit<SetColor, "role">,
  trim: Omit<SetColor, "role">,
  accent: Omit<SetColor, "role">,
): CuratedPaletteSet {
  return {
    slug: `cloverdale-${slug}`,
    name,
    brand: "Cloverdale Paint",
    source: "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system)",
    colors: [
      { role: "Wall", ...wall },
      { role: "Trim", ...trim },
      { role: "Accent", ...accent },
    ],
  };
}

const cloverdaleTrim = {
  crystal: { name: "Crystal", code: "CA020", hex: "#E6E1D8" },
  titanium: { name: "Titanium", code: "CA023", hex: "#E7E2D8" },
  porcelain: { name: "Porcelain", code: "CA026", hex: "#E3E2DB" },
  canvas: { name: "Canvas", code: "CA038", hex: "#E1D5C9" },
  wool: { name: "Wool", code: "CA031", hex: "#DBD2C4" },
  birchBark: { name: "Birch Bark", code: "CA110", hex: "#E3CCB0" },
};

const cloverdaleAccent = {
  deepForest: { name: "Deep Forest", code: "CA166", hex: "#767771" },
  iron: { name: "Iron", code: "CA207", hex: "#585757" },
  storm: { name: "Storm", code: "CA211", hex: "#55524F" },
  midnight: { name: "Midnight", code: "CA210", hex: "#3D404A" },
  frenchRoast: { name: "French Roast", code: "CA213", hex: "#454140" },
  auburn: { name: "Auburn", code: "CA219", hex: "#784F43" },
  chestnut: { name: "Chestnut", code: "CA220", hex: "#684B47" },
  obsidian: { name: "Obsidian", code: "CA204", hex: "#44474C" },
};

const cloverdaleSets: CuratedPaletteSet[] = [
  cloverdaleTheme("warm-grey-everyday", "Warm Grey Everyday", { name: "Warm Grey", code: "CA091", hex: "#DED2BF" }, cloverdaleTrim.titanium, cloverdaleAccent.iron),
  cloverdaleTheme("sage-calm-kitchen", "Sage Calm Kitchen", { name: "Sage", code: "CA182", hex: "#C0C4BC" }, cloverdaleTrim.crystal, cloverdaleAccent.deepForest),
  cloverdaleTheme("glacier-fresh-bath", "Glacier Fresh Bath", { name: "Glacier", code: "CA184", hex: "#BDCCC4" }, cloverdaleTrim.porcelain, cloverdaleAccent.storm),
  cloverdaleTheme("harbour-grey-coastal", "Harbour Grey Coastal", { name: "Harbour Grey", code: "CA195", hex: "#929CA2" }, cloverdaleTrim.crystal, cloverdaleAccent.midnight),
  cloverdaleTheme("slate-modern-study", "Slate Modern Study", { name: "Slate", code: "CA090", hex: "#8C857C" }, cloverdaleTrim.titanium, cloverdaleAccent.obsidian),
  cloverdaleTheme("foothills-grounded-den", "Foothills Grounded Den", { name: "Foothills", code: "CA084", hex: "#656057" }, cloverdaleTrim.canvas, cloverdaleAccent.midnight),
  cloverdaleTheme("shallot-soft-neutral", "Shallot Soft Neutral", { name: "Shallot", code: "CA039", hex: "#D5CCC0" }, cloverdaleTrim.crystal, cloverdaleAccent.iron),
  cloverdaleTheme("seashell-warm-retreat", "Seashell Warm Retreat", { name: "Seashell", code: "CA033", hex: "#CAC0B4" }, cloverdaleTrim.wool, cloverdaleAccent.auburn),
  cloverdaleTheme("dewdrop-quiet-bedroom", "Dewdrop Quiet Bedroom", { name: "Dewdrop", code: "CA178", hex: "#AAAFA3" }, cloverdaleTrim.titanium, cloverdaleAccent.storm),
  cloverdaleTheme("rainfall-blue-grey", "Rainfall Blue-Grey", { name: "Rainfall", code: "CA196", hex: "#8B9AA2" }, cloverdaleTrim.crystal, cloverdaleAccent.midnight),
  cloverdaleTheme("spruce-muted-green", "Spruce Muted Green", { name: "Spruce", code: "CA191", hex: "#8D9896" }, cloverdaleTrim.porcelain, cloverdaleAccent.deepForest),
  cloverdaleTheme("essential-beige-warmth", "Essential Beige Warmth", { name: "Essential Beige", code: "CA081", hex: "#AFA08D" }, cloverdaleTrim.wool, cloverdaleAccent.chestnut),
  cloverdaleTheme("verdigris-soft-sage", "Verdigris Soft Sage", { name: "Verdigris", code: "CA185", hex: "#A9B9B1" }, cloverdaleTrim.crystal, cloverdaleAccent.deepForest),
  cloverdaleTheme("rye-golden-neutral", "Rye Golden Neutral", { name: "Rye", code: "CA101", hex: "#B39471" }, cloverdaleTrim.birchBark, cloverdaleAccent.chestnut),
  cloverdaleTheme("lentil-earthy-kitchen", "Lentil Earthy Kitchen", { name: "Lentil", code: "CA161", hex: "#ADA78B" }, cloverdaleTrim.canvas, cloverdaleAccent.auburn),
  cloverdaleTheme("steel-industrial-loft", "Steel Industrial Loft", { name: "Steel", code: "CA194", hex: "#838A8D" }, cloverdaleTrim.titanium, cloverdaleAccent.obsidian),
  cloverdaleTheme("anchor-deep-blue-grey", "Anchor Deep Blue-Grey", { name: "Anchor", code: "CA201", hex: "#646C71" }, cloverdaleTrim.crystal, cloverdaleAccent.midnight),
  cloverdaleTheme("deep-forest-statement", "Deep Forest Statement", { name: "Deep Forest", code: "CA166", hex: "#767771" }, cloverdaleTrim.wool, cloverdaleAccent.frenchRoast),
  cloverdaleTheme("cayenne-bold-accent-wall", "Cayenne Bold Accent Wall", { name: "Cayenne", code: "CA218", hex: "#7C4945" }, cloverdaleTrim.birchBark, cloverdaleAccent.frenchRoast),
  cloverdaleTheme("french-roast-modern-charcoal", "French Roast Modern Charcoal", { name: "French Roast", code: "CA213", hex: "#454140" }, cloverdaleTrim.porcelain, cloverdaleAccent.obsidian),
];

// A handful of officially-documented combinations — these come from a named
// brand collection or a brand's own published designer coordinating
// guidance, rather than the popularity-researched pairing above.
const officialSets: CuratedPaletteSet[] = [
  {
    slug: "bm-silhouette-official",
    name: "Silhouette (2026 Color Trends)",
    brand: "Benjamin Moore",
    source: "From Benjamin Moore's official 2026 Color Trends palette",
    colors: [
      { role: "Wall", name: "Silhouette", code: "AF-655", hex: "#57504C", officialUrl: BM_URL("af-655/silhouette") },
      { role: "Trim", ...bmTrim.simplyWhite },
      { role: "Accent", name: "Sherwood Tan", code: "1054", hex: "#B8A183", officialUrl: BM_URL("1054/sherwood-tan") },
    ],
  },
  {
    slug: "bm-narragansett-green-official",
    name: "Narragansett Green (2026 Color Trends)",
    brand: "Benjamin Moore",
    source: "From Benjamin Moore's official 2026 Color Trends palette",
    colors: [
      { role: "Wall", name: "Narragansett Green", code: "HC-157", hex: "#435155", officialUrl: BM_URL("hc-157/narragansett-green") },
      { role: "Trim", ...bmTrim.simplyWhite },
      { role: "Accent", name: "Raindance", code: "CC-680", hex: "#A7B3AA", officialUrl: BM_URL("cc-680/raindance") },
    ],
  },
  {
    slug: "bm-first-crush-official",
    name: "First Crush (2026 Color Trends)",
    brand: "Benjamin Moore",
    source: "From Benjamin Moore's official 2026 Color Trends palette",
    colors: [
      { role: "Wall", name: "First Crush", code: "CSP-310", hex: "#E8DECF", officialUrl: BM_URL("csp-310/first-crush") },
      { role: "Trim", name: "Sherwood Tan", code: "1054", hex: "#B8A183", officialUrl: BM_URL("1054/sherwood-tan") },
      { role: "Accent", name: "Southwest Pottery", code: "048", hex: "#975F57", officialUrl: BM_URL("048/southwest-pottery") },
    ],
  },
  {
    slug: "sw-naval-official",
    name: "Naval (Designer Recommended)",
    brand: "Sherwin-Williams",
    source: "Sherwin-Williams' documented coordinating colors for Naval",
    colors: [
      { role: "Wall", name: "Naval", code: "SW 6244", hex: "#2F3D4C", officialUrl: SW_URL("blue-paint-colors/sw6244-naval") },
      { role: "Trim", ...swTrim.alabaster },
      { role: "Accent", ...swAccent.urbaneBronze },
    ],
  },
  {
    slug: "sw-agreeable-gray-official",
    name: "Agreeable Gray (Designer Recommended)",
    brand: "Sherwin-Williams",
    source: "Sherwin-Williams' documented coordinating colors for Agreeable Gray",
    colors: [
      { role: "Wall", name: "Agreeable Gray", code: "SW 7029", hex: "#D1CBC1" },
      { role: "Trim", ...swTrim.pureWhite },
      { role: "Accent", name: "Peppercorn", code: "SW 7674", hex: "#585858", officialUrl: SW_URL("neutral-paint-colors/sw7674-peppercorn") },
    ],
  },
  {
    slug: "sw-sea-salt-official",
    name: "Sea Salt (Designer Recommended)",
    brand: "Sherwin-Williams",
    source: "Sherwin-Williams' documented coordinating colors for Sea Salt",
    colors: [
      { role: "Wall", name: "Sea Salt", code: "SW 6204", hex: "#CDD2CA" },
      { role: "Trim", ...swTrim.alabaster },
      { role: "Accent", ...swAccent.ironOre },
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
];

export const curatedPaletteSets: CuratedPaletteSet[] = [
  ...officialSets,
  ...bmSets,
  ...swSets,
  ...cloverdaleSets,
];

export function getCuratedPaletteSets() {
  return curatedPaletteSets;
}
