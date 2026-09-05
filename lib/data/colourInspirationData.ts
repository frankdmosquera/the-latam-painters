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
