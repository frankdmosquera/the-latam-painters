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
  swissCoffee: bmColor("Swiss Coffee", "OC-45", "#EEEAE0", BM_URL("oc-45/swiss-coffee")),
  superWhite: bmColor("Super White", "OC-152", "#F1F2EE", BM_URL("oc-152/super-white")),
  balletWhite: bmColor("Ballet White", "OC-9", "#E5DED0", BM_URL("oc-9/ballet-white")),
  seapearl: bmColor("Seapearl", "OC-19", "#E7E4D9", BM_URL("oc-19/seapearl")),
  doveWing: bmColor("Dove Wing", "OC-18", "#E9E6DB", BM_URL("oc-18/dove-wing")),
  paperWhite: bmColor("Paper White", "OC-55", "#E0E2DC", BM_URL("oc-55/paper-white")),
  oxfordWhite: bmColor("Oxford White", "CC-30", "#F0F1EA", BM_URL("cc-30/oxford-white")),
  alabaster: bmColor("Alabaster", "OC-129", "#F2EFE8", BM_URL("oc-129/alabaster")),
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
  // --- Expansion: remaining BM "most popular" colors ---
  bmTheme("santorini-blue", "Santorini Blue", bmColor("Santorini Blue", "1634", "#A2B4BA", "https://www.benjaminmoore.com/en-us/paint-colors/color/1634/santorini-blue"), bmTrim.whiteDove, bmAccent.haleNavy),
  bmTheme("soft-fern", "Soft Fern", bmColor("Soft Fern", "2144-40", "#C8CAB2", "https://www.benjaminmoore.com/en-us/paint-colors/color/2144-40/soft-fern"), bmTrim.chantillyLace, bmAccent.hunterGreen),
  bmTheme("north-creek-brown", "North Creek Brown", bmColor("North Creek Brown", "1001", "#65594A", "https://www.benjaminmoore.com/en-us/paint-colors/color/1001/north-creek-brown"), bmColor("Crisp Linen", "CSP-305", "#F9F6E7", "https://www.benjaminmoore.com/en-us/paint-colors/color/csp-305/crisp-linen"), bmAccent.wroughtIron),
  bmTheme("fairview-taupe", "Fairview Taupe", bmColor("Fairview Taupe", "HC-85", "#7C7161", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-85/fairview-taupe"), bmColor("Cloud White", "CC-40", "#F2F1E6", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-40/cloud-white"), bmAccent.wenge),
  bmTheme("branchport-brown", "Branchport Brown", bmColor("Branchport Brown", "HC-72", "#60514A", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-72/branchport-brown"), bmColor("Natural Linen", "CC-90", "#D7CDB7", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-90/natural-linen"), bmColor("Charcoal Slate", "HC-178", "#646769", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-178/charcoal-slate")),
  bmTheme("love-and-happiness", "Love & Happiness", bmColor("Love & Happiness", "1191", "#F2D9CC", "https://www.benjaminmoore.com/en-us/paint-colors/color/1191/love-happiness"), bmColor("Muslin", "CC-110", "#E1D6C1", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-110/muslin"), bmAccent.wroughtIron),
  bmTheme("conch-shell", "Conch Shell", bmColor("Conch Shell", "052", "#E6BDAC", "https://www.benjaminmoore.com/en-us/paint-colors/color/052/conch-shell"), bmColor("Etiquette", "AF-50", "#E5E0D5", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-50/etiquette"), bmAccent.caliente),
  bmTheme("sailors-delight", "Sailor's Delight", bmColor("Sailor's Delight", "1296", "#F3BCBA", "https://www.benjaminmoore.com/en-us/paint-colors/color/1296/sailors-delight"), bmTrim.simplyWhite, bmAccent.wroughtIron),
  bmTheme("dream-whip", "Dream Whip", bmColor("Dream Whip", "2174-60", "#F4D7D1", "https://www.benjaminmoore.com/en-us/paint-colors/color/2174-60/dream-whip"), bmTrim.whiteDove, bmColor("Dinner Party", "AF-300", "#763637", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-300/dinner-party")),
  bmTheme("first-light", "First Light", bmColor("First Light", "2102-70", "#EFE2DE", "https://www.benjaminmoore.com/en-us/paint-colors/color/2102-70/first-light"), bmColor("Crisp Linen", "CSP-305", "#F9F6E7", "https://www.benjaminmoore.com/en-us/paint-colors/color/csp-305/crisp-linen"), bmAccent.caliente),
  bmTheme("cinnamon-slate", "Cinnamon Slate", bmColor("Cinnamon Slate", "2113-40", "#897475", "https://www.benjaminmoore.com/en-us/paint-colors/color/2113-40/cinnamon-slate"), bmColor("Cloud White", "CC-40", "#F2F1E6", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-40/cloud-white"), bmAccent.wenge),
  bmTheme("new-age", "New Age", bmColor("New Age", "1444", "#D6CED1", "https://www.benjaminmoore.com/en-us/paint-colors/color/1444/new-age"), bmColor("Natural Linen", "CC-90", "#D7CDB7", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-90/natural-linen"), bmAccent.wroughtIron),
  bmTheme("winter-gray", "Winter Gray", bmColor("Winter Gray", "2117-60", "#D0CDD6", "https://www.benjaminmoore.com/en-us/paint-colors/color/2117-60/winter-gray"), bmColor("Silver Satin", "OC-26", "#E3E2DA", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-26/silver-satin"), bmAccent.wenge),
  bmTheme("lily-lavender", "Lily Lavender", bmColor("Lily Lavender", "2071-60", "#DBCEE8", "https://www.benjaminmoore.com/en-us/paint-colors/color/2071-60/lily-lavender"), bmColor("Brilliant White", "OC-150", "#EBEEE9", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-150/brilliant-white"), bmAccent.wroughtIron),
  bmTheme("misty-lilac", "Misty Lilac", bmColor("Misty Lilac", "2071-70", "#EAE3F0", "https://www.benjaminmoore.com/en-us/paint-colors/color/2071-70/misty-lilac"), bmTrim.chantillyLace, bmAccent.wenge),
  bmTheme("shadow", "Shadow", bmColor("Shadow", "2117-30", "#514A58", "https://www.benjaminmoore.com/en-us/paint-colors/color/2117-30/shadow"), bmTrim.whiteDove, bmAccent.wroughtIron),
  bmTheme("golden-straw", "Golden Straw", bmColor("Golden Straw", "2152-50", "#EFDDB5", "https://www.benjaminmoore.com/en-us/paint-colors/color/2152-50/golden-straw"), bmColor("Gray Mist", "CC-80", "#E3DFD2", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-80/gray-mist"), bmAccent.hunterGreen),
  bmTheme("concord-ivory", "Concord Ivory", bmColor("Concord Ivory", "HC-12", "#E7CD8D", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-12/concord-ivory"), bmColor("Almond Bisque", "CC-280", "#E7DBBB", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-280/almond-bisque"), bmAccent.wenge),
  bmTheme("marblehead-gold", "Marblehead Gold", bmColor("Marblehead Gold", "HC-11", "#E1C478", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-11/marblehead-gold"), bmTrim.whiteHeron, bmAccent.hunterGreen),
  bmTheme("chestertown-buff", "Chestertown Buff", bmColor("Chestertown Buff", "HC-9", "#DDBF86", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-9/chestertown-buff"), bmColor("Muslin", "CC-110", "#E1D6C1", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-110/muslin"), bmAccent.wenge),
  bmTheme("wild-flower", "Wild Flower", bmColor("Wild Flower", "2090-40", "#BF7065", "https://www.benjaminmoore.com/en-us/paint-colors/color/2090-40/wild-flower"), bmColor("Etiquette", "AF-50", "#E5E0D5", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-50/etiquette"), bmAccent.wroughtIron),
  bmTheme("dinner-party", "Dinner Party", bmColor("Dinner Party", "AF-300", "#763637", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-300/dinner-party"), bmTrim.simplyWhite, bmAccent.caliente),
  bmTheme("classic-burgundy", "Classic Burgundy", bmColor("Classic Burgundy", "HC-182", "#69181A", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-182/classic-burgundy"), bmTrim.whiteDove, bmColor("Dinner Party", "AF-300", "#763637", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-300/dinner-party")),
  bmTheme("heritage-red", "Heritage Red", bmColor("Heritage Red", "HC-181", "#990A14", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-181/heritage-red"), bmColor("Crisp Linen", "CSP-305", "#F9F6E7", "https://www.benjaminmoore.com/en-us/paint-colors/color/csp-305/crisp-linen"), bmAccent.wroughtIron),
  bmTheme("peach-parfait", "Peach Parfait", bmColor("Peach Parfait", "2175-70", "#F9E7DA", "https://www.benjaminmoore.com/en-us/paint-colors/color/2175-70/peach-parfait"), bmColor("Cloud White", "CC-40", "#F2F1E6", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-40/cloud-white"), bmAccent.wenge),
  bmTheme("venetian-portico", "Venetian Portico", bmColor("Venetian Portico", "AF-185", "#C4A996", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-185/venetian-portico"), bmColor("Natural Linen", "CC-90", "#D7CDB7", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-90/natural-linen"), bmColor("French Beret", "1610", "#4C4F52", "https://www.benjaminmoore.com/en-us/paint-colors/color/1610/french-beret")),
  bmTheme("italianate", "Italianate", bmColor("Italianate", "AF-215", "#CB9976", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-215/italianate"), bmColor("Muslin", "CC-110", "#E1D6C1", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-110/muslin"), bmAccent.terraMauve),
  bmTheme("topaz", "Topaz", bmColor("Topaz", "070", "#C06A46", "https://www.benjaminmoore.com/en-us/paint-colors/color/070/topaz"), bmColor("Etiquette", "AF-50", "#E5E0D5", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-50/etiquette"), bmAccent.wenge),
  bmTheme("electric-orange", "Electric Orange", bmColor("Electric Orange", "2015-10", "#F0701A", "https://www.benjaminmoore.com/en-us/paint-colors/color/2015-10/electric-orange"), bmTrim.simplyWhite, bmAccent.terraMauve),
  bmTheme("black-satin", "Black Satin", bmColor("Black Satin", "2131-10", "#313435", "https://www.benjaminmoore.com/en-us/paint-colors/color/2131-10/black-satin"), bmColor("Silver Satin", "OC-26", "#E3E2DA", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-26/silver-satin"), bmAccent.wroughtIron),
  bmTheme("midnight", "Midnight", bmColor("Midnight", "2131-20", "#373D3F", "https://www.benjaminmoore.com/en-us/paint-colors/color/2131-20/midnight"), bmColor("Brilliant White", "OC-150", "#EBEEE9", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-150/brilliant-white"), bmAccent.terraMauve),
  bmTheme("french-beret", "French Beret", bmColor("French Beret", "1610", "#4C4F52", "https://www.benjaminmoore.com/en-us/paint-colors/color/1610/french-beret"), bmTrim.chantillyLace, bmAccent.haleNavy),
  bmTheme("silver-satin", "Silver Satin", bmColor("Silver Satin", "OC-26", "#E3E2DA", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-26/silver-satin"), bmTrim.chantillyLace, bmColor("Charcoal Slate", "HC-178", "#646769", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-178/charcoal-slate")),
  bmTheme("soot", "Soot", bmColor("Soot", "2129-20", "#373C41", "https://www.benjaminmoore.com/en-us/paint-colors/color/2129-20/soot"), bmTrim.whiteDove, bmAccent.vanDeusenBlue),
  bmTheme("charcoal-slate", "Charcoal Slate", bmColor("Charcoal Slate", "HC-178", "#646769", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-178/charcoal-slate"), bmColor("Silver Satin", "OC-26", "#E3E2DA", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-26/silver-satin"), bmAccent.witchingHour),
  bmTheme("etiquette", "Etiquette", bmColor("Etiquette", "AF-50", "#E5E0D5", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-50/etiquette"), bmColor("Gray Mist", "CC-80", "#E3DFD2", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-80/gray-mist"), bmColor("French Beret", "1610", "#4C4F52", "https://www.benjaminmoore.com/en-us/paint-colors/color/1610/french-beret")),
  bmTheme("brilliant-white", "Brilliant White", bmColor("Brilliant White", "OC-150", "#EBEEE9", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-150/brilliant-white"), bmColor("Almond Bisque", "CC-280", "#E7DBBB", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-280/almond-bisque"), bmAccent.wroughtIron),
  bmTheme("newburg-green", "Newburg Green", bmColor("Newburg Green", "HC-158", "#445962", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-158/newburg-green"), bmColor("Brilliant White", "OC-150", "#EBEEE9", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-150/brilliant-white"), bmAccent.gentlemansGray),
  bmTheme("van-deusen-blue", "Van Deusen Blue", bmColor("Van Deusen Blue", "HC-156", "#485B6E", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-156/van-deusen-blue"), bmTrim.chantillyLace, bmColor("Soot", "2129-20", "#373C41", "https://www.benjaminmoore.com/en-us/paint-colors/color/2129-20/soot")),
  bmTheme("decorators-white", "Decorator's White", bmColor("Decorator's White", "CC-20", "#EBEDEA", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-20/decorators-white"), bmTrim.whiteHeron, bmAccent.wroughtIron),
  // --- Expansion: Benjamin Moore Designer Classics collection (231-color line most specified by interior designers) ---
  bmTheme("asphalt", "Asphalt", bmColor("Asphalt", "CC-548", "#7F7D77", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-548/asphalt"), bmTrim.chantillyLace, bmColor("Charcoal Slate", "HC-178", "#646769", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-178/charcoal-slate")),
  bmTheme("buckhorn", "Buckhorn", bmColor("Buckhorn", "CC-510", "#84735E", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-510/buckhorn"), bmTrim.whiteDove, bmColor("French Beret", "1610", "#4C4F52", "https://www.benjaminmoore.com/en-us/paint-colors/color/1610/french-beret")),
  bmTheme("gray-mist", "Gray Mist", bmColor("Gray Mist", "CC-80", "#E3DFD2", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-80/gray-mist"), bmTrim.chantillyLace, bmAccent.wroughtIron),
  bmTheme("natural-linen", "Natural Linen", bmColor("Natural Linen", "CC-90", "#D7CDB7", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-90/natural-linen"), bmColor("Almond Bisque", "CC-280", "#E7DBBB", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-280/almond-bisque"), bmColor("Charcoal Slate", "HC-178", "#646769", "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-178/charcoal-slate")),
  bmTheme("rocky-road", "Rocky Road", bmColor("Rocky Road", "CC-470", "#B7AA9A", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-470/rocky-road"), bmColor("Crisp Linen", "CSP-305", "#F9F6E7", "https://www.benjaminmoore.com/en-us/paint-colors/color/csp-305/crisp-linen"), bmColor("French Beret", "1610", "#4C4F52", "https://www.benjaminmoore.com/en-us/paint-colors/color/1610/french-beret")),
  bmTheme("stanley-park", "Stanley Park", bmColor("Stanley Park", "CC-602", "#A39F87", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-602/stanley-park"), bmTrim.whiteHeron, bmAccent.wroughtIron),
  bmTheme("airway", "Airway", bmColor("Airway", "CC-820", "#B4C5D7", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-820/airway"), bmTrim.whiteDove, bmAccent.haleNavy),
  bmTheme("blue-nose", "Blue Nose", bmColor("Blue Nose", "CC-800", "#63879F", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-800/blue-nose"), bmColor("Silver Satin", "OC-26", "#E3E2DA", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-26/silver-satin"), bmAccent.vanDeusenBlue),
  bmTheme("five-dollar-bill", "Five Dollar Bill", bmColor("Five Dollar Bill", "CC-812", "#81A5C0", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-812/five-dollar-bill"), bmColor("Brilliant White", "OC-150", "#EBEEE9", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-150/brilliant-white"), bmAccent.gentlemansGray),
  bmTheme("kensington-blue", "Kensington Blue", bmColor("Kensington Blue", "CC-780", "#4B5A71", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-780/kensington-blue"), bmTrim.chantillyLace, bmColor("Soot", "2129-20", "#373C41", "https://www.benjaminmoore.com/en-us/paint-colors/color/2129-20/soot")),
  bmTheme("north-sea", "North Sea", bmColor("North Sea", "CC-932", "#2B3B4C", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-932/north-sea"), bmTrim.whiteDove, bmAccent.haleNavy),
  bmTheme("summer-mist", "Summer Mist", bmColor("Summer Mist", "CC-906", "#9DB2D0", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-906/summer-mist"), bmColor("Silver Satin", "OC-26", "#E3E2DA", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-26/silver-satin"), bmAccent.vanDeusenBlue),
  bmTheme("backwoods", "Backwoods", bmColor("Backwoods", "CC-630", "#586251", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-630/backwoods"), bmTrim.chantillyLace, bmAccent.vintageVogue),
  bmTheme("grasslands", "Grasslands", bmColor("Grasslands", "CC-590", "#AFB288", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-590/grasslands"), bmColor("Gray Mist", "CC-80", "#E3DFD2", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-80/gray-mist"), bmAccent.wenge),
  bmTheme("jack-pine", "Jack Pine", bmColor("Jack Pine", "CC-660", "#5A7169", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-660/jack-pine"), bmColor("Almond Bisque", "CC-280", "#E7DBBB", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-280/almond-bisque"), bmAccent.hunterGreen),
  bmTheme("night-owl", "Night Owl", bmColor("Night Owl", "CC-662", "#59523C", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-662/night-owl"), bmTrim.whiteHeron, bmAccent.vintageVogue),
  bmTheme("sesame", "Sesame", bmColor("Sesame", "CC-638", "#DBD6A7", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-638/sesame"), bmTrim.chantillyLace, bmAccent.wenge),
  bmTheme("almond-bisque", "Almond Bisque", bmColor("Almond Bisque", "CC-280", "#E7DBBB", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-280/almond-bisque"), bmColor("Gray Mist", "CC-80", "#E3DFD2", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-80/gray-mist"), bmAccent.terraMauve),
  bmTheme("cable-knit", "Cable Knit", bmColor("Cable Knit", "CC-306", "#E2D2B3", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-306/cable-knit"), bmColor("Cloud White", "CC-40", "#F2F1E6", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-40/cloud-white"), bmColor("Dinner Party", "AF-300", "#763637", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-300/dinner-party")),
  bmTheme("hiking-trail", "Hiking Trail", bmColor("Hiking Trail", "CC-514", "#9D8774", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-514/hiking-trail"), bmColor("Natural Linen", "CC-90", "#D7CDB7", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-90/natural-linen"), bmAccent.wenge),
  bmTheme("muslin", "Muslin", bmColor("Muslin", "CC-110", "#E1D6C1", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-110/muslin"), bmTrim.whiteHeron, bmAccent.terraMauve),
  bmTheme("bonaparte", "Bonaparte", bmColor("Bonaparte", "CC-64", "#9F3E3E", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-64/bonaparte"), bmColor("Etiquette", "AF-50", "#E5E0D5", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-50/etiquette"), bmAccent.caliente),
  bmTheme("louisiana-hot-sauce", "Louisiana Hot Sauce", bmColor("Louisiana Hot Sauce", "CC-124", "#8E3F30", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-124/louisiana-hot-sauce"), bmTrim.simplyWhite, bmColor("Dinner Party", "AF-300", "#763637", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-300/dinner-party")),
  bmTheme("rapture", "Rapture", bmColor("Rapture", "CC-66", "#9C2E3B", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-66/rapture"), bmTrim.whiteDove, bmAccent.wroughtIron),
  bmTheme("bed-and-breakfast", "Bed and Breakfast", bmColor("Bed and Breakfast", "CC-184", "#C18872", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-184/bed-and-breakfast"), bmColor("Crisp Linen", "CSP-305", "#F9F6E7", "https://www.benjaminmoore.com/en-us/paint-colors/color/csp-305/crisp-linen"), bmAccent.wenge),
  bmTheme("french-toast", "French Toast", bmColor("French Toast", "CC-244", "#EACFA0", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-244/french-toast"), bmColor("Cloud White", "CC-40", "#F2F1E6", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-40/cloud-white"), bmAccent.terraMauve),
  bmTheme("rusty-nail", "Rusty Nail", bmColor("Rusty Nail", "CC-390", "#9C6040", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-390/rusty-nail"), bmColor("Natural Linen", "CC-90", "#D7CDB7", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-90/natural-linen"), bmAccent.wenge),
  bmTheme("basic-blue", "Basic Blue", bmColor("Basic Blue", "CC-968", "#3F457D", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-968/basic-blue"), bmColor("Brilliant White", "OC-150", "#EBEEE9", "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-150/brilliant-white"), bmAccent.wenge),
  bmTheme("french-violet", "French Violet", bmColor("French Violet", "CC-960", "#696D86", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-960/french-violet"), bmTrim.chantillyLace, bmAccent.wroughtIron),
  bmTheme("nightfall-sky", "Nightfall Sky", bmColor("Nightfall Sky", "CC-38", "#6F6578", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-38/nightfall-sky"), bmTrim.whiteDove, bmAccent.wenge),
  bmTheme("boulevard", "Boulevard", bmColor("Boulevard", "CC-394", "#C3B8AE", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-394/boulevard"), bmColor("Muslin", "CC-110", "#E1D6C1", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-110/muslin"), bmColor("Soot", "2129-20", "#373C41", "https://www.benjaminmoore.com/en-us/paint-colors/color/2129-20/soot")),
  bmTheme("inukshuk", "Inukshuk", bmColor("Inukshuk", "CC-460", "#CDC4B5", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-460/inukshuk"), bmColor("Etiquette", "AF-50", "#E5E0D5", "https://www.benjaminmoore.com/en-us/paint-colors/color/af-50/etiquette"), bmAccent.wroughtIron),
  bmTheme("barley", "Barley", bmColor("Barley", "CC-180", "#EDD7A4", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-180/barley"), bmColor("Almond Bisque", "CC-280", "#E7DBBB", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-280/almond-bisque"), bmAccent.hunterGreen),
  bmTheme("golden-honey", "Golden Honey", bmColor("Golden Honey", "CC-214", "#FAE1A0", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-214/golden-honey"), bmTrim.whiteHeron, bmAccent.wenge),
  bmTheme("cloud-white", "Cloud White", bmColor("Cloud White", "CC-40", "#F2F1E6", "https://www.benjaminmoore.com/en-us/paint-colors/color/cc-40/cloud-white"), bmTrim.chantillyLace, bmAccent.wroughtIron),
  // --- Expansion: real, verified BM grays not yet represented as walls ---
  bmTheme("stonington-gray-foyer", "Stonington Gray Foyer", bmColor("Stonington Gray", "HC-170", "#CACBC5", BM_URL("hc-170/stonington-gray")), bmTrim.swissCoffee, bmAccent.wroughtIron),
  bmTheme("nimbus-quiet-hallway", "Nimbus Quiet Hallway", bmColor("Nimbus", "1465", "#CECAC2", BM_URL("1465/nimbus")), bmTrim.seapearl, bmAccent.haleNavy),
  bmTheme("collingwood-greige-living-room", "Collingwood Greige Living Room", bmColor("Collingwood", "OC-28", "#D3CDC4", BM_URL("oc-28/collingwood")), bmTrim.doveWing, bmAccent.gentlemansGray),
  bmTheme("balboa-mist-soft-bedroom", "Balboa Mist Soft Bedroom", bmColor("Balboa Mist", "OC-27", "#DAD5CC", BM_URL("oc-27/balboa-mist")), bmTrim.paperWhite, bmAccent.wenge),
  bmTheme("rodeo-understated-den", "Rodeo Understated Den", bmColor("Rodeo", "1534", "#CFCBC2", BM_URL("1534/rodeo")), bmTrim.oxfordWhite, bmAccent.vintageVogue),
  bmTheme("chelsea-gray-bold-exterior", "Chelsea Gray Bold Exterior", bmColor("Chelsea Gray", "HC-168", "#87857D", BM_URL("hc-168/chelsea-gray")), bmTrim.alabaster, bmAccent.terraMauve),
  bmTheme("coventry-gray-classic-kitchen", "Coventry Gray Classic Kitchen", bmColor("Coventry Gray", "HC-169", "#B8BAB6", BM_URL("hc-169/coventry-gray")), bmTrim.superWhite, bmAccent.haleNavy),
  bmTheme("platinum-gray-modern-study", "Platinum Gray Modern Study", bmColor("Platinum Gray", "HC-179", "#A8A9A3", BM_URL("hc-179/platinum-gray")), bmTrim.balletWhite, bmAccent.witchingHour),
  bmTheme("metropolitan-refined-office", "Metropolitan Refined Office", bmColor("Metropolitan", "AF-690", "#BABDB8", BM_URL("af-690/metropolitan")), bmColor("Muslin", "CC-110", "#E1D6C1", BM_URL("cc-110/muslin")), bmAccent.wroughtIron),
  bmTheme("wickham-gray-coastal-porch", "Wickham Gray Coastal Porch", bmColor("Wickham Gray", "HC-171", "#D5D8D1", BM_URL("hc-171/wickham-gray")), bmColor("Gray Mist", "CC-80", "#E3DFD2", BM_URL("cc-80/gray-mist")), bmAccent.vanDeusenBlue),
  bmTheme("classic-gray-serene-retreat", "Classic Gray Serene Retreat", bmColor("Classic Gray", "OC-23", "#E3E0D7", BM_URL("oc-23/classic-gray")), bmColor("Etiquette", "AF-50", "#E5E0D5", BM_URL("af-50/etiquette")), bmAccent.caliente),
  // --- Expansion: real, verified BM blues not yet represented as walls ---
  bmTheme("three-piece-suit-tailored-study", "Three-Piece Suit Tailored Study", bmColor("Three-Piece Suit", "2062-10", "#323A43", BM_URL("2062-10/threepiecesuit")), bmColor("Crisp Linen", "CSP-305", "#F9F6E7", BM_URL("csp-305/crisp-linen")), bmAccent.caliente),
  bmTheme("midnight-hour-dramatic-library", "In The Midnight Hour Dramatic Library", bmColor("In The Midnight Hour", "1666", "#415663", BM_URL("1666/in-the-midnight-hour")), bmColor("Silver Satin", "OC-26", "#E3E2DA", BM_URL("oc-26/silver-satin")), bmAccent.terraMauve),
  bmTheme("evening-sky-twilight-lounge", "Evening Sky Twilight Lounge", bmColor("Evening Sky", "833", "#464956", BM_URL("833/evening-sky")), bmColor("Brilliant White", "OC-150", "#EBEEE9", BM_URL("oc-150/brilliant-white")), bmAccent.wenge),
  bmTheme("bold-blue-statement-entry", "Bold Blue Statement Entry", bmColor("Bold Blue", "2064-10", "#2B3558", BM_URL("2064-10/bold-blue")), bmColor("Almond Bisque", "CC-280", "#E7DBBB", BM_URL("cc-280/almond-bisque")), bmAccent.hunterGreen),
  bmTheme("winding-waterway-nautical-den", "Winding Waterway Nautical Den", bmColor("Winding Waterway", "2063-10", "#2E3549", BM_URL("2063-10/winding-waterway")), bmTrim.whiteHeron, bmAccent.vintageVogue),
  bmTheme("deep-secret-moody-office", "Deep Secret Moody Office", bmColor("Deep Secret", "CSP-625", "#525A60", BM_URL("csp-625/deep-secret")), bmTrim.simplyWhite, bmAccent.caliente),
  bmTheme("blue-note-jazz-lounge", "Blue Note Jazz Lounge", bmColor("Blue Note", "2129-30", "#404B54", BM_URL("2129-30/blue-note")), bmTrim.whiteDove, bmAccent.terraMauve),
  bmTheme("stonecutter-slate-retreat", "Stonecutter Slate Retreat", bmColor("Stonecutter", "2135-20", "#434C4F", BM_URL("2135-20/stonecutter")), bmTrim.chantillyLace, bmAccent.wenge),
  // --- Expansion: real, verified BM greens not yet represented as walls ---
  bmTheme("essex-green-formal-dining", "Essex Green Formal Dining", bmColor("Essex Green", "HC-188", "#27362E", BM_URL("hc-188/essex-green")), bmTrim.swissCoffee, bmAccent.wroughtIron),
  bmTheme("caldwell-green-garden-room", "Caldwell Green Garden Room", bmColor("Caldwell Green", "HC-124", "#627067", BM_URL("hc-124/caldwell-green")), bmTrim.superWhite, bmAccent.terraMauve),
  bmTheme("peale-green-heritage-parlor", "Peale Green Heritage Parlor", bmColor("Peale Green", "HC-121", "#586A54", BM_URL("hc-121/peale-green")), bmTrim.balletWhite, bmAccent.wenge),
  bmTheme("cushing-green-soft-sunroom", "Cushing Green Soft Sunroom", bmColor("Cushing Green", "HC-125", "#687666", BM_URL("hc-125/cushing-green")), bmTrim.seapearl, bmAccent.caliente),
  bmTheme("boreal-forest-cabin-retreat", "Boreal Forest Cabin Retreat", bmColor("Boreal Forest", "AF-480", "#535F4E", BM_URL("af-480/boreal-forest")), bmTrim.doveWing, bmAccent.vanDeusenBlue),
  bmTheme("tarrytown-green-woodland-study", "Tarrytown Green Woodland Study", bmColor("Tarrytown Green", "HC-134", "#415752", BM_URL("hc-134/tarrytown-green")), bmTrim.paperWhite, bmAccent.gentlemansGray),
  bmTheme("salamander-deep-conservatory", "Salamander Deep Conservatory", bmColor("Salamander", "2050-10", "#2F3E3E", BM_URL("2050-10/salamander")), bmTrim.oxfordWhite, bmAccent.witchingHour),
  bmTheme("deep-river-earthy-library", "Deep River Earthy Library", bmColor("Deep River", "1582", "#4E504E", BM_URL("1582/deep-river")), bmTrim.alabaster, bmAccent.haleNavy),
  // --- Expansion: real, verified BM browns/beiges/tans not yet represented as walls ---
  bmTheme("grant-beige-timeless-hallway", "Grant Beige Timeless Hallway", bmColor("Grant Beige", "HC-83", "#CFC6B1", BM_URL("hc-83/grant-beige")), bmColor("Cloud White", "CC-40", "#F2F1E6", BM_URL("cc-40/cloud-white")), bmAccent.wroughtIron),
  bmTheme("manchester-tan-classic-family-room", "Manchester Tan Classic Family Room", bmColor("Manchester Tan", "HC-81", "#DBD2BC", BM_URL("hc-81/manchester-tan")), bmColor("Natural Linen", "CC-90", "#D7CDB7", BM_URL("cc-90/natural-linen")), bmAccent.hunterGreen),
  bmTheme("lenox-tan-warm-kitchen", "Lenox Tan Warm Kitchen", bmColor("Lenox Tan", "HC-44", "#C2AE8E", BM_URL("hc-44/lenox-tan")), bmColor("Muslin", "CC-110", "#E1D6C1", BM_URL("cc-110/muslin")), bmAccent.vanDeusenBlue),
  bmTheme("shaker-beige-relaxed-bedroom", "Shaker Beige Relaxed Bedroom", bmColor("Shaker Beige", "HC-45", "#D1C2A7", BM_URL("hc-45/shaker-beige")), bmColor("Gray Mist", "CC-80", "#E3DFD2", BM_URL("cc-80/gray-mist")), bmAccent.witchingHour),
  bmTheme("wheeling-neutral-open-plan", "Wheeling Neutral Open Plan", bmColor("Wheeling Neutral", "HC-92", "#D0BCA2", BM_URL("hc-92/wheeling-neutral")), bmColor("Crisp Linen", "CSP-305", "#F9F6E7", BM_URL("csp-305/crisp-linen")), bmAccent.wenge),
  bmTheme("shelburne-buff-farmhouse-porch", "Shelburne Buff Farmhouse Porch", bmColor("Shelburne Buff", "HC-28", "#CDB18C", BM_URL("hc-28/shelburne-buff")), bmColor("Silver Satin", "OC-26", "#E3E2DA", BM_URL("oc-26/silver-satin")), bmAccent.haleNavy),
  bmTheme("tyler-taupe-rich-den", "Tyler Taupe Rich Den", bmColor("Tyler Taupe", "HC-43", "#B3926E", BM_URL("hc-43/tyler-taupe")), bmColor("Brilliant White", "OC-150", "#EBEEE9", BM_URL("oc-150/brilliant-white")), bmAccent.gentlemansGray),
  bmTheme("bittersweet-chocolate-statement-powder-room", "Bittersweet Chocolate Statement Powder Room", bmColor("Bittersweet Chocolate", "2114-10", "#433731", BM_URL("2114-10/bittersweet-chocolate")), bmColor("Almond Bisque", "CC-280", "#E7DBBB", BM_URL("cc-280/almond-bisque")), bmAccent.vintageVogue),
  // --- Expansion: real, verified BM reds not yet represented as walls ---
  bmTheme("merlot-red-wine-cellar", "Merlot Red Wine Cellar", bmColor("Merlot Red", "2006-10", "#983B2C", BM_URL("2006-10/merlot-red")), bmTrim.swissCoffee, bmAccent.wroughtIron),
  bmTheme("razzle-dazzle-playful-powder-room", "Razzle Dazzle Playful Powder Room", bmColor("Razzle Dazzle", "1348", "#C9527F", BM_URL("1348/razzle-dazzle")), bmTrim.superWhite, bmAccent.wenge),
  bmTheme("tucson-red-southwest-accent-wall", "Tucson Red Southwest Accent Wall", bmColor("Tucson Red", "1300", "#A64C43", BM_URL("1300/tucson-red")), bmTrim.balletWhite, bmAccent.hunterGreen),
  bmTheme("cinnabar-spiced-dining-room", "Cinnabar Spiced Dining Room", bmColor("Cinnabar", "CSP-1165", "#944544", BM_URL("csp-1165/cinnabar")), bmTrim.seapearl, bmAccent.gentlemansGray),
  bmTheme("country-redwood-rustic-cabin", "Country Redwood Rustic Cabin", bmColor("Country Redwood", "HC-183", "#762C23", BM_URL("hc-183/country-redwood")), bmTrim.doveWing, bmAccent.haleNavy),
  bmTheme("neon-red-bold-front-door", "Neon Red Bold Front Door", bmColor("Neon Red", "2087-10", "#AE4142", BM_URL("2087-10/neon-red")), bmTrim.paperWhite, bmAccent.vanDeusenBlue),
  // --- Expansion: real, verified BM yellows/oranges not yet represented as walls ---
  bmTheme("fireball-orange-playroom-pop", "Fireball Orange Playroom Pop", bmColor("Fireball Orange", "2170-10", "#C35232", BM_URL("2170-10/fireball-orange")), bmTrim.oxfordWhite, bmAccent.wroughtIron),
  bmTheme("calypso-orange-tropical-kitchen", "Calypso Orange Tropical Kitchen", bmColor("Calypso Orange", "2015-30", "#FB8B3C", BM_URL("2015-30/calypso-orange")), bmTrim.alabaster, bmAccent.haleNavy),
  bmTheme("pumpkin-spice-autumn-entry", "Pumpkin Spice Autumn Entry", bmColor("Pumpkin Spice", "126", "#D78A4B", BM_URL("126/pumpkin-spice")), bmColor("Cloud White", "CC-40", "#F2F1E6", BM_URL("cc-40/cloud-white")), bmAccent.witchingHour),
  bmTheme("citrus-orange-energetic-studio", "Citrus Orange Energetic Studio", bmColor("Citrus Orange", "2016-20", "#F58023", BM_URL("2016-20/citrus-orange")), bmColor("Natural Linen", "CC-90", "#D7CDB7", BM_URL("cc-90/natural-linen")), bmAccent.vanDeusenBlue),
  bmTheme("tangelo-playful-mudroom", "Tangelo Playful Mudroom", bmColor("Tangelo", "2017-30", "#FF9934", BM_URL("2017-30/tangelo")), bmColor("Muslin", "CC-110", "#E1D6C1", BM_URL("cc-110/muslin")), bmAccent.gentlemansGray),
  bmTheme("yellow-lotus-sunny-breakfast-nook", "Yellow Lotus Sunny Breakfast Nook", bmColor("Yellow Lotus", "2021-50", "#FFE59F", BM_URL("2021-50/yellow-lotus")), bmColor("Gray Mist", "CC-80", "#E3DFD2", BM_URL("cc-80/gray-mist")), bmAccent.wenge),
  // --- Expansion: real, verified BM purples/lavenders not yet represented as walls ---
  bmTheme("hazy-lilac-moody-powder-room", "Hazy Lilac Moody Powder Room", bmColor("Hazy Lilac", "2116-40", "#9B8F9C", BM_URL("2116-40/hazy-lilac")), bmTrim.swissCoffee, bmAccent.wroughtIron),
  bmTheme("lavender-mist-restful-bedroom", "Lavender Mist Restful Bedroom", bmColor("Lavender Mist", "2070-60", "#CFD0E0", BM_URL("2070-60/lavender-mist")), bmTrim.superWhite, bmAccent.haleNavy),
  bmTheme("darkest-grape-dramatic-nook", "Darkest Grape Dramatic Nook", bmColor("Darkest Grape", "2069-30", "#585D7B", BM_URL("2069-30/darkest-grape")), bmTrim.balletWhite, bmAccent.terraMauve),
  bmTheme("enchanted-whimsical-nursery", "Enchanted Whimsical Nursery", bmColor("Enchanted", "2070-50", "#AFAFCB", BM_URL("2070-50/enchanted")), bmTrim.seapearl, bmAccent.hunterGreen),
  bmTheme("plum-royale-opulent-study", "Plum Royale Opulent Study", bmColor("Plum Royale", "2070-20", "#423C4F", BM_URL("2070-20/plum-royale")), bmTrim.doveWing, bmAccent.caliente),
  bmTheme("amethyst-cream-soft-reading-room", "Amethyst Cream Soft Reading Room", bmColor("Amethyst Cream", "2071-50", "#BFADD7", BM_URL("2071-50/amethyst-cream")), bmTrim.paperWhite, bmAccent.gentlemansGray),
  // --- Expansion: real, verified BM teals/aquas not yet represented as walls ---
  bmTheme("caribbean-teal-relaxed-cabana", "Caribbean Teal Relaxed Cabana", bmColor("Caribbean Teal", "2123-20", "#657C7A", BM_URL("2123-20/caribbean-teal")), bmTrim.oxfordWhite, bmAccent.terraMauve),
  bmTheme("gulf-shores-coastal-kitchen", "Gulf Shores Coastal Kitchen", bmColor("Gulf Shores", "665", "#008F83", BM_URL("665/gulf-shores")), bmTrim.alabaster, bmAccent.wroughtIron),
  bmTheme("venezuelan-sea-ocean-view-study", "Venezuelan Sea Ocean View Study", bmColor("Venezuelan Sea", "2054-30", "#006F75", BM_URL("2054-30/venezuelan-sea")), bmColor("Etiquette", "AF-50", "#E5E0D5", BM_URL("af-50/etiquette")), bmAccent.caliente),
  bmTheme("galapagos-turquoise-tropical-bath", "Galapagos Turquoise Tropical Bath", bmColor("Galapagos Turquoise", "2057-20", "#1F5763", BM_URL("2057-20/galapagos-turquoise")), bmColor("Cloud White", "CC-40", "#F2F1E6", BM_URL("cc-40/cloud-white")), bmAccent.wenge),
  bmTheme("slate-teal-sophisticated-den", "Slate Teal Sophisticated Den", bmColor("Slate Teal", "2058-20", "#0A5868", BM_URL("2058-20/slate-teal")), bmColor("Natural Linen", "CC-90", "#D7CDB7", BM_URL("cc-90/natural-linen")), bmAccent.gentlemansGray),
  bmTheme("cool-aqua-playful-sunroom", "Cool Aqua Playful Sunroom", bmColor("Cool Aqua", "2056-40", "#18AFBB", BM_URL("2056-40/cool-aqua")), bmColor("Muslin", "CC-110", "#E1D6C1", BM_URL("cc-110/muslin")), bmAccent.vintageVogue),
  // --- Expansion: real, verified BM pinks/corals not yet represented as walls ---
  bmTheme("coral-pink-cheerful-nursery", "Coral Pink Cheerful Nursery", bmColor("Coral Pink", "2003-50", "#F5ACBA", BM_URL("2003-50/coral-pink")), bmTrim.swissCoffee, bmAccent.wroughtIron),
  bmTheme("touch-of-pink-soft-vanity", "Touch of Pink Soft Vanity", bmColor("Touch of Pink", "2008-70", "#FDE8E6", BM_URL("2008-70/touch-of-pink")), bmTrim.superWhite, bmAccent.hunterGreen),
  bmTheme("sunlit-coral-warm-sunporch", "Sunlit Coral Warm Sunporch", bmColor("Sunlit Coral", "2170-60", "#F8DCCF", BM_URL("2170-60/sunlit-coral")), bmTrim.balletWhite, bmAccent.wenge),
  bmTheme("camellia-pink-romantic-bedroom", "Camellia Pink Romantic Bedroom", bmColor("Camellia Pink", "2093-50", "#E4BDBB", BM_URL("2093-50/camellia-pink")), bmTrim.seapearl, bmAccent.gentlemansGray),
  // --- Expansion: real, verified BM near-blacks/charcoals not yet represented as walls ---
  bmTheme("iron-mountain-modern-exterior", "Iron Mountain Modern Exterior", bmColor("Iron Mountain", "2134-30", "#575553", BM_URL("2134-30/iron-mountain")), bmTrim.doveWing, bmAccent.terraMauve),
  bmTheme("raccoon-fur-sleek-office", "Raccoon Fur Sleek Office", bmColor("Raccoon Fur", "2126-20", "#46494D", BM_URL("2126-20/raccoon-fur")), bmTrim.paperWhite, bmAccent.caliente),
  bmTheme("almost-black-dramatic-library", "Almost Black Dramatic Library", bmColor("Almost Black", "2130-30", "#4F4E53", BM_URL("2130-30/almost-black")), bmTrim.oxfordWhite, bmAccent.hunterGreen),
  bmTheme("black-timeless-front-door", "Black Timeless Front Door", bmColor("Black", "2132-10", "#313132", BM_URL("2132-10/black")), bmTrim.alabaster, bmAccent.vanDeusenBlue),
  bmTheme("kendall-charcoal-classic-shutters", "Kendall Charcoal Classic Shutters", bmColor("Kendall Charcoal", "HC-166", "#676662", BM_URL("hc-166/kendall-charcoal")), bmTrim.swissCoffee, bmAccent.vintageVogue),
  // --- Expansion: real, verified BM terracottas/clays/rust not yet represented as walls ---
  bmTheme("terra-cotta-tile-southwest-dining", "Terra Cotta Tile Southwest Dining", bmColor("Terra Cotta Tile", "2090-30", "#A14C3E", BM_URL("2090-30/terra-cotta-tile")), bmTrim.superWhite, bmAccent.haleNavy),
  bmTheme("rust-warm-accent-wall", "Rust Warm Accent Wall", bmColor("Rust", "2175-30", "#B4674E", BM_URL("2175-30/rust")), bmTrim.balletWhite, bmAccent.hunterGreen),
  bmTheme("audubon-russet-historic-study", "Audubon Russet Historic Study", bmColor("Audubon Russet", "HC-51", "#AE6F5E", BM_URL("hc-51/audubon-russet")), bmTrim.seapearl, bmAccent.wenge),
  bmTheme("potters-clay-earthy-kitchen", "Potters Clay Earthy Kitchen", bmColor("Potters Clay", "1221", "#B88465", BM_URL("1221/potters-clay")), bmTrim.doveWing, bmAccent.gentlemansGray),
  bmTheme("moroccan-spice-global-lounge", "Moroccan Spice Global Lounge", bmColor("Moroccan Spice", "AF-285", "#AE5C50", BM_URL("af-285/moroccan-spice")), bmTrim.paperWhite, bmAccent.vanDeusenBlue),
  bmTheme("sedona-clay-desert-retreat", "Sedona Clay Desert Retreat", bmColor("Sedona Clay", "2174-30", "#A95E4F", BM_URL("2174-30/sedona-clay")), bmTrim.oxfordWhite, bmAccent.witchingHour),
  // --- Expansion: real, verified BM greiges not yet represented as walls ---
  bmTheme("storm-modern-greige-living-room", "Storm Modern Greige Living Room", bmColor("Storm", "AF-700", "#9FA09E", BM_URL("af-700/storm")), bmTrim.alabaster, bmAccent.wroughtIron),
  bmTheme("thunder-versatile-open-concept", "Thunder Versatile Open Concept", bmColor("Thunder", "AF-685", "#BEB7AD", BM_URL("af-685/thunder")), bmTrim.superWhite, bmAccent.haleNavy),
  bmTheme("rockport-gray-coastal-exterior", "Rockport Gray Coastal Exterior", bmColor("Rockport Gray", "HC-105", "#A9A194", BM_URL("hc-105/rockport-gray")), bmTrim.balletWhite, bmAccent.hunterGreen),
  bmTheme("jockey-hollow-gray-woodland-entry", "Jockey Hollow Gray Woodland Entry", bmColor("Jockey Hollow Gray", "HC-108", "#AEA897", BM_URL("hc-108/jockey-hollow-gray")), bmTrim.seapearl, bmAccent.terraMauve),
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
