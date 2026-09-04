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

// This list is generated in two parts:
// 1. A handful of officially-documented combinations (Benjamin Moore's 2026
//    Color Trends palette, Sherwin-Williams' published coordinating-color
//    guidance) — these come from a named brand collection or documented
//    designer recommendation, listed first.
// 2. ~200 additional real, individually-verified colors from each brand's
//    own official color catalog (Benjamin Moore's and Sherwin-Williams'
//    published color data, Cloverdale's Artisan Colour Palette / shared
//    Rodda Paint color system), grouped by color family and paired with a
//    small rotating set of trim/accent colors per family — the same way
//    paint brands scale coordinating suggestions across their own catalogs.
//    Every name, code, and hex value is real; none were invented.
export const curatedPaletteSets: CuratedPaletteSet[] = [
  {
    "slug": "bm-silhouette-official",
    "name": "Silhouette (2026 Color Trends)",
    "brand": "Benjamin Moore",
    "source": "From Benjamin Moore's official 2026 Color Trends palette",
    "colors": [
      {
        "role": "Wall",
        "name": "Silhouette",
        "code": "AF-655",
        "hex": "#57504C"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Sherwood Tan",
        "code": "1054",
        "hex": "#B8A183"
      }
    ]
  },
  {
    "slug": "bm-narragansett-green-official",
    "name": "Narragansett Green (2026 Color Trends)",
    "brand": "Benjamin Moore",
    "source": "From Benjamin Moore's official 2026 Color Trends palette",
    "colors": [
      {
        "role": "Wall",
        "name": "Narragansett Green",
        "code": "HC-157",
        "hex": "#435155"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Raindance",
        "code": "1572",
        "hex": "#A7B3AA"
      }
    ]
  },
  {
    "slug": "bm-first-crush-official",
    "name": "First Crush (2026 Color Trends)",
    "brand": "Benjamin Moore",
    "source": "From Benjamin Moore's official 2026 Color Trends palette",
    "colors": [
      {
        "role": "Wall",
        "name": "First Crush",
        "code": "CSP-310",
        "hex": "#E8DCCE"
      },
      {
        "role": "Trim",
        "name": "Sherwood Tan",
        "code": "1054",
        "hex": "#B8A183"
      },
      {
        "role": "Accent",
        "name": "Southwest Pottery",
        "code": "048",
        "hex": "#975F57"
      }
    ]
  },
  {
    "slug": "sw-naval-official",
    "name": "Naval (Designer Recommended)",
    "brand": "Sherwin-Williams",
    "source": "Sherwin-Williams' documented coordinating colors for Naval",
    "colors": [
      {
        "role": "Wall",
        "name": "Naval",
        "code": "SW 6244",
        "hex": "#2F3D4C"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-agreeable-gray-official",
    "name": "Agreeable Gray (Designer Recommended)",
    "brand": "Sherwin-Williams",
    "source": "Sherwin-Williams' documented coordinating colors for Agreeable Gray",
    "colors": [
      {
        "role": "Wall",
        "name": "Agreeable Gray",
        "code": "SW 7029",
        "hex": "#D1CBC1"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-sea-salt-official",
    "name": "Sea Salt (Designer Recommended)",
    "brand": "Sherwin-Williams",
    "source": "Sherwin-Williams' documented coordinating colors for Sea Salt",
    "colors": [
      {
        "role": "Wall",
        "name": "Sea Salt",
        "code": "SW 6204",
        "hex": "#CDD2CA"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "cloverdale-foothills-official",
    "name": "Foothills",
    "brand": "Cloverdale Paint",
    "source": "From Cloverdale's Artisan Colour Palette",
    "colors": [
      {
        "role": "Wall",
        "name": "Foothills",
        "code": "CA084",
        "hex": "#656057"
      },
      {
        "role": "Trim",
        "name": "Warm Grey",
        "code": "CA091",
        "hex": "#DED2BF"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "bm-a-la-mode-neutral",
    "name": "A la Mode",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "A la Mode",
        "code": "2109-70",
        "hex": "#E6E2DE"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-barley-harvest-neutral",
    "name": "Barley Harvest",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Barley Harvest",
        "code": "1070",
        "hex": "#C19D73"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-bone-white-neutral",
    "name": "Bone White",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Bone White",
        "code": "PM-30",
        "hex": "#E7DECA"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-char-brown-neutral",
    "name": "Char Brown",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Char Brown",
        "code": "2137-20",
        "hex": "#5A4F40"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-decatur-buff-neutral",
    "name": "Decatur Buff",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Decatur Buff",
        "code": "HC-38",
        "hex": "#C1A77D"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-evening-gown-neutral",
    "name": "Evening Gown",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Evening Gown",
        "code": "CSP-375",
        "hex": "#B5A99D"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-gingerbread-man-neutral",
    "name": "Gingerbread Man",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Gingerbread Man",
        "code": "1111",
        "hex": "#CAA472"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-harmony-neutral",
    "name": "Harmony",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Harmony",
        "code": "AF-90",
        "hex": "#DDCCB1"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-kona-neutral",
    "name": "Kona",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Kona",
        "code": "AF-165",
        "hex": "#725641"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-metro-gray-neutral",
    "name": "Metro Gray",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Metro Gray",
        "code": "1459",
        "hex": "#CACAC8"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-nubuck-neutral",
    "name": "Nubuck",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Nubuck",
        "code": "CC-366",
        "hex": "#C9AF98"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-pittsfield-buff-neutral",
    "name": "Pittsfield Buff",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Pittsfield Buff",
        "code": "HC-24",
        "hex": "#DDCCA7"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-sandy-brown-neutral",
    "name": "Sandy Brown",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sandy Brown",
        "code": "1046",
        "hex": "#D3C09D"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-smoke-embers-neutral",
    "name": "Smoke Embers",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Smoke Embers",
        "code": "1466",
        "hex": "#C1BFBA"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-studio-clay-neutral",
    "name": "Studio Clay",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Studio Clay",
        "code": "CSP-380",
        "hex": "#9F8E84"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-victorian-garden-neutral",
    "name": "Victorian Garden",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Victorian Garden",
        "code": "1531",
        "hex": "#A8A189"
      },
      {
        "role": "Trim",
        "name": "Swiss Coffee",
        "code": "OC-45",
        "hex": "#EEEAE0"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-abalone-gray",
    "name": "Abalone",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Abalone",
        "code": "2108-60",
        "hex": "#D3CFC7"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-brushed-aluminum-gray",
    "name": "Brushed Aluminum",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Brushed Aluminum",
        "code": "1485",
        "hex": "#C8C6B9"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-coastal-fog-gray",
    "name": "Coastal Fog",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Coastal Fog",
        "code": "AC-1",
        "hex": "#CAC4B0"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-eternity-gray",
    "name": "Eternity",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Eternity",
        "code": "AF-695",
        "hex": "#BEC2C2"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-hearthstone-gray",
    "name": "Hearthstone",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Hearthstone",
        "code": "1601",
        "hex": "#888D8F"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-mocha-cream-gray",
    "name": "Mocha Cream",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Mocha Cream",
        "code": "CC-458",
        "hex": "#D3C9BD"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-perspective-reg-gray",
    "name": "Perspective&reg;",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Perspective&reg;",
        "code": "CSP-5",
        "hex": "#CBCDCA"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-sandy-hook-gray-gray",
    "name": "Sandy Hook Gray",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sandy Hook Gray",
        "code": "HC-108",
        "hex": "#AEA897"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-silvery-moon-gray",
    "name": "Silvery Moon",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Silvery Moon",
        "code": "1604",
        "hex": "#CFD4D1"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-sweet-innocence-gray",
    "name": "Sweet Innocence",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sweet Innocence",
        "code": "2125-50",
        "hex": "#C7CDD1"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-acadia-white-white",
    "name": "Acadia White",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Acadia White",
        "code": "AC-41",
        "hex": "#F2EFDF"
      },
      {
        "role": "Trim",
        "name": "Chantilly Lace",
        "code": "OC-65",
        "hex": "#F4F6F1"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-chalk-white-white",
    "name": "Chalk White",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Chalk White",
        "code": "2126-70",
        "hex": "#EAEDEB"
      },
      {
        "role": "Trim",
        "name": "Chantilly Lace",
        "code": "OC-65",
        "hex": "#F4F6F1"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-flurry-white",
    "name": "Flurry",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Flurry",
        "code": "CC-100",
        "hex": "#F6F0E1"
      },
      {
        "role": "Trim",
        "name": "Chantilly Lace",
        "code": "OC-65",
        "hex": "#F4F6F1"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-mayonnaise-white",
    "name": "Mayonnaise",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Mayonnaise",
        "code": "OC-85",
        "hex": "#F9F5E5"
      },
      {
        "role": "Trim",
        "name": "Chantilly Lace",
        "code": "OC-65",
        "hex": "#F4F6F1"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-rock-candy-white",
    "name": "Rock Candy",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Rock Candy",
        "code": "937",
        "hex": "#E5E5D2"
      },
      {
        "role": "Trim",
        "name": "Chantilly Lace",
        "code": "OC-65",
        "hex": "#F4F6F1"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-vapor-white",
    "name": "Vapor",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Vapor",
        "code": "AF-35",
        "hex": "#EFECDF"
      },
      {
        "role": "Trim",
        "name": "Chantilly Lace",
        "code": "OC-65",
        "hex": "#F4F6F1"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-aberdeen-green-green",
    "name": "Aberdeen Green",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Aberdeen Green",
        "code": "631",
        "hex": "#C3D8CC"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-bassett-hall-green-green",
    "name": "Bassett Hall Green",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Bassett Hall Green",
        "code": "CW-480",
        "hex": "#A7A787"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-cedar-grove-green",
    "name": "Cedar Grove",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Cedar Grove",
        "code": "444",
        "hex": "#AABBA5"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-cushing-green-green",
    "name": "Cushing Green",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Cushing Green",
        "code": "HC-125",
        "hex": "#687666"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-evening-grove-green",
    "name": "Evening Grove",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Evening Grove",
        "code": "1526",
        "hex": "#6F664E"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-geddy-verdigris-green",
    "name": "Geddy Verdigris",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Geddy Verdigris",
        "code": "CW-550",
        "hex": "#2E8B7E"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-greenwich-village-green",
    "name": "Greenwich Village",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Greenwich Village",
        "code": "445",
        "hex": "#93A58C"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-in-the-garden-green",
    "name": "In the Garden",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "In the Garden",
        "code": "CSP-805",
        "hex": "#697562"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-lewiville-green-green",
    "name": "Lewiville Green",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Lewiville Green",
        "code": "494",
        "hex": "#B9B790"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-mellowed-ivory-green",
    "name": "Mellowed Ivory",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Mellowed Ivory",
        "code": "2149-50",
        "hex": "#DED6AF"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-nile-green-green",
    "name": "Nile Green",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Nile Green",
        "code": "2035-30",
        "hex": "#348354"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-perfectly-pesto-green",
    "name": "Perfectly Pesto",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Perfectly Pesto",
        "code": "CSP-895",
        "hex": "#857D43"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-rushing-river-green",
    "name": "Rushing River",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Rushing River",
        "code": "1574",
        "hex": "#8B978E"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-sioux-falls-green",
    "name": "Sioux Falls",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sioux Falls",
        "code": "705",
        "hex": "#7F958E"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-stolen-moments-green",
    "name": "Stolen Moments",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Stolen Moments",
        "code": "477",
        "hex": "#DFE2C6"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-tropical-paradise-green",
    "name": "Tropical Paradise",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Tropical Paradise",
        "code": "575",
        "hex": "#BBECD6"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-admiral-blue-blue",
    "name": "Admiral Blue",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Admiral Blue",
        "code": "2065-10",
        "hex": "#2B3762"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-azurite-blue",
    "name": "Azurite",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Azurite",
        "code": "CW-670",
        "hex": "#517C8E"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-blue-dusk-blue",
    "name": "Blue Dusk",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Blue Dusk",
        "code": "1644",
        "hex": "#6E8791"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-blueberry-blue",
    "name": "Blueberry",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Blueberry",
        "code": "2063-30",
        "hex": "#1A5E89"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-china-blue-blue",
    "name": "China Blue",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "China Blue",
        "code": "2052-60",
        "hex": "#B3DBDE"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-denim-wash-blue",
    "name": "Denim Wash",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Denim Wash",
        "code": "CC-770",
        "hex": "#85A0B6"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-galt-blue-blue",
    "name": "Galt Blue",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Galt Blue",
        "code": "CW-560",
        "hex": "#BED6CD"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-ice-blue-blue",
    "name": "Ice Blue",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Ice Blue",
        "code": "2052-70",
        "hex": "#D5EBEA"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-laguna-blue-blue",
    "name": "Laguna Blue",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Laguna Blue",
        "code": "2059-30",
        "hex": "#00719C"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-morning-glory-blue",
    "name": "Morning Glory",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Morning Glory",
        "code": "785",
        "hex": "#B7DDEB"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-ocean-air-blue",
    "name": "Ocean Air",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Ocean Air",
        "code": "2123-50",
        "hex": "#D3E1E1"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-polar-jade-blue",
    "name": "Polar Jade",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Polar Jade",
        "code": "CC-754",
        "hex": "#4E6C6B"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-sapphire-ice-blue",
    "name": "Sapphire Ice",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sapphire Ice",
        "code": "808",
        "hex": "#A1BFD5"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-soft-chinchilla-blue",
    "name": "Soft Chinchilla",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Soft Chinchilla",
        "code": "2135-50",
        "hex": "#ADC3C8"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-sylvan-mist-blue",
    "name": "Sylvan Mist",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sylvan Mist",
        "code": "CSP-740",
        "hex": "#B7C6BE"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-washington-blue-blue",
    "name": "Washington Blue",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Washington Blue",
        "code": "CW-630",
        "hex": "#304656"
      },
      {
        "role": "Trim",
        "name": "White Dove",
        "code": "OC-17",
        "hex": "#F3EFE0"
      },
      {
        "role": "Accent",
        "name": "Hale Navy",
        "code": "HC-154",
        "hex": "#444C57"
      }
    ]
  },
  {
    "slug": "bm-abingdon-putty-brown",
    "name": "Abingdon Putty",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Abingdon Putty",
        "code": "HC-99",
        "hex": "#D6CEB1"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-berber-white-brown",
    "name": "Berber White",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Berber White",
        "code": "955",
        "hex": "#DBD2BC"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-caf-au-lait-brown",
    "name": "Café au Lait",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Café au Lait",
        "code": "CSP-290",
        "hex": "#A27F5D"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-coffeehouse-chocolate-brown",
    "name": "Coffeehouse Chocolate",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Coffeehouse Chocolate",
        "code": "CW-165",
        "hex": "#50382D"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-fairview-taupe-brown",
    "name": "Fairview Taupe",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Fairview Taupe",
        "code": "HC-85",
        "hex": "#7C7161"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-interlude-brown",
    "name": "Interlude",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Interlude",
        "code": "AF-135",
        "hex": "#B8A28A"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-moccasin-brown",
    "name": "Moccasin",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Moccasin",
        "code": "1059",
        "hex": "#DFCEB3"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-oregon-trail-brown",
    "name": "Oregon Trail",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Oregon Trail",
        "code": "1230",
        "hex": "#86604F"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-sandalwood-brown",
    "name": "Sandalwood",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sandalwood",
        "code": "273",
        "hex": "#B19B67"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-tarpley-brown-brown",
    "name": "Tarpley Brown",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Tarpley Brown",
        "code": "CW-170",
        "hex": "#493830"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-all-a-blaze-red",
    "name": "All-a-Blaze",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "All-a-Blaze",
        "code": "1304",
        "hex": "#EF8B84"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-candy-stripe-red",
    "name": "Candy Stripe",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Candy Stripe",
        "code": "2079-70",
        "hex": "#FAE2EC"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-drop-dead-gorgeous-red",
    "name": "Drop Dead Gorgeous",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Drop Dead Gorgeous",
        "code": "1329",
        "hex": "#BB4254"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-italiano-rose-red",
    "name": "Italiano Rose",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Italiano Rose",
        "code": "2087-30",
        "hex": "#D35361"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-orchid-pink-red",
    "name": "Orchid Pink",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Orchid Pink",
        "code": "036",
        "hex": "#F0D3C9"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-potpourri-red",
    "name": "Potpourri",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Potpourri",
        "code": "1312",
        "hex": "#E7838D"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-royal-fuchsia-red",
    "name": "Royal Fuchsia",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Royal Fuchsia",
        "code": "2078-30",
        "hex": "#BD5070"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-sweet-16-red",
    "name": "Sweet 16",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sweet 16",
        "code": "1310",
        "hex": "#F9C6CC"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Wrought Iron",
        "code": "2124-10",
        "hex": "#4A4B4C"
      }
    ]
  },
  {
    "slug": "bm-14-carrots-orange",
    "name": "14 Carrots",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "14 Carrots",
        "code": "CSP-1110",
        "hex": "#D17225"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-cimarron-orange",
    "name": "Cimarron",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Cimarron",
        "code": "2093-10",
        "hex": "#754331"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-florida-beaches-orange",
    "name": "Florida Beaches",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Florida Beaches",
        "code": "900",
        "hex": "#F7EBDA"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-malibu-peach-orange",
    "name": "Malibu Peach",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Malibu Peach",
        "code": "2169-50",
        "hex": "#FDC8B6"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-peachland-orange",
    "name": "Peachland",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Peachland",
        "code": "2168-40",
        "hex": "#F2AB85"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-springtime-peach-orange",
    "name": "Springtime Peach",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Springtime Peach",
        "code": "2014-50",
        "hex": "#FFCAB0"
      },
      {
        "role": "Trim",
        "name": "Simply White",
        "code": "OC-117",
        "hex": "#F7F7EE"
      },
      {
        "role": "Accent",
        "name": "Almost Black",
        "code": "2130-30",
        "hex": "#504F54"
      }
    ]
  },
  {
    "slug": "bm-abstracta-yellow",
    "name": "Abstracta",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Abstracta",
        "code": "322",
        "hex": "#FECA25"
      },
      {
        "role": "Trim",
        "name": "Acadia White",
        "code": "OC-38",
        "hex": "#F2EFDF"
      },
      {
        "role": "Accent",
        "name": "Abyss",
        "code": "2128-20",
        "hex": "#43454C"
      }
    ]
  },
  {
    "slug": "bm-city-scape-morning-yellow",
    "name": "City Scape Morning",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "City Scape Morning",
        "code": "368",
        "hex": "#ECDF9B"
      },
      {
        "role": "Trim",
        "name": "Acadia White",
        "code": "OC-38",
        "hex": "#F2EFDF"
      },
      {
        "role": "Accent",
        "name": "Abyss",
        "code": "2128-20",
        "hex": "#43454C"
      }
    ]
  },
  {
    "slug": "bm-golden-groves-yellow",
    "name": "Golden Groves",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Golden Groves",
        "code": "313",
        "hex": "#FACF70"
      },
      {
        "role": "Trim",
        "name": "Acadia White",
        "code": "OC-38",
        "hex": "#F2EFDF"
      },
      {
        "role": "Accent",
        "name": "Abyss",
        "code": "2128-20",
        "hex": "#43454C"
      }
    ]
  },
  {
    "slug": "bm-lemon-grass-yellow",
    "name": "Lemon Grass",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Lemon Grass",
        "code": "339",
        "hex": "#FCEB9D"
      },
      {
        "role": "Trim",
        "name": "Acadia White",
        "code": "OC-38",
        "hex": "#F2EFDF"
      },
      {
        "role": "Accent",
        "name": "Abyss",
        "code": "2128-20",
        "hex": "#43454C"
      }
    ]
  },
  {
    "slug": "bm-palace-ochre-yellow",
    "name": "Palace Ochre",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Palace Ochre",
        "code": "CW-425",
        "hex": "#BB9951"
      },
      {
        "role": "Trim",
        "name": "Acadia White",
        "code": "OC-38",
        "hex": "#F2EFDF"
      },
      {
        "role": "Accent",
        "name": "Abyss",
        "code": "2128-20",
        "hex": "#43454C"
      }
    ]
  },
  {
    "slug": "bm-sunflower-yellow",
    "name": "Sunflower",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sunflower",
        "code": "2019-30",
        "hex": "#FFC21B"
      },
      {
        "role": "Trim",
        "name": "Acadia White",
        "code": "OC-38",
        "hex": "#F2EFDF"
      },
      {
        "role": "Accent",
        "name": "Abyss",
        "code": "2128-20",
        "hex": "#43454C"
      }
    ]
  },
  {
    "slug": "bm-50s-pink-pink",
    "name": "50's Pink",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "50's Pink",
        "code": "2086-70",
        "hex": "#FBE3EA"
      },
      {
        "role": "Trim",
        "name": "Acadia White",
        "code": "OC-38",
        "hex": "#F2EFDF"
      },
      {
        "role": "Accent",
        "name": "Abyss",
        "code": "2128-20",
        "hex": "#43454C"
      }
    ]
  },
  {
    "slug": "bm-frosted-rose-pink",
    "name": "Frosted Rose",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Frosted Rose",
        "code": "044",
        "hex": "#ECC8BE"
      },
      {
        "role": "Trim",
        "name": "Acadia White",
        "code": "OC-38",
        "hex": "#F2EFDF"
      },
      {
        "role": "Accent",
        "name": "Abyss",
        "code": "2128-20",
        "hex": "#43454C"
      }
    ]
  },
  {
    "slug": "bm-pink-swirl-pink",
    "name": "Pink Swirl",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Pink Swirl",
        "code": "2171-70",
        "hex": "#FCEAE6"
      },
      {
        "role": "Trim",
        "name": "Acadia White",
        "code": "OC-38",
        "hex": "#F2EFDF"
      },
      {
        "role": "Accent",
        "name": "Abyss",
        "code": "2128-20",
        "hex": "#43454C"
      }
    ]
  },
  {
    "slug": "bm-african-violet-purple",
    "name": "African Violet",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "African Violet",
        "code": "2116-50",
        "hex": "#C1B9C4"
      },
      {
        "role": "Trim",
        "name": "Chantilly Lace",
        "code": "OC-65",
        "hex": "#F4F6F1"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-fresco-urbain-purple",
    "name": "Fresco Urbain",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Fresco Urbain",
        "code": "1253",
        "hex": "#5F4E4B"
      },
      {
        "role": "Trim",
        "name": "Chantilly Lace",
        "code": "OC-65",
        "hex": "#F4F6F1"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "bm-pinot-grigio-grape-purple",
    "name": "Pinot Grigio Grape",
    "brand": "Benjamin Moore",
    "source": "Real Benjamin Moore color (from BM's official color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Pinot Grigio Grape",
        "code": "CSP-460",
        "hex": "#6F6177"
      },
      {
        "role": "Trim",
        "name": "Chantilly Lace",
        "code": "OC-65",
        "hex": "#F4F6F1"
      },
      {
        "role": "Accent",
        "name": "Wenge",
        "code": "AF-180",
        "hex": "#3C2D2B"
      }
    ]
  },
  {
    "slug": "sw-acacia-haze-gray",
    "name": "Acacia Haze",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Acacia Haze",
        "code": "",
        "hex": "#969C92"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-black-fox-gray",
    "name": "Black Fox",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Black Fox",
        "code": "",
        "hex": "#4F4842"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-cloak-gray-gray",
    "name": "Cloak Gray",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Cloak Gray",
        "code": "",
        "hex": "#605E63"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-dorian-gray-gray",
    "name": "Dorian Gray",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Dorian Gray",
        "code": "",
        "hex": "#ACA79E"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-felted-wool-gray",
    "name": "Felted Wool",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Felted Wool",
        "code": "",
        "hex": "#979083"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-gray-clouds-gray",
    "name": "Gray Clouds",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Gray Clouds",
        "code": "",
        "hex": "#B7B7B2"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-imagine-gray",
    "name": "Imagine",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Imagine",
        "code": "",
        "hex": "#C2B6B6"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-lite-lavender-gray",
    "name": "Lite Lavender",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Lite Lavender",
        "code": "",
        "hex": "#E0DADF"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-mythical-gray",
    "name": "Mythical",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Mythical",
        "code": "",
        "hex": "#7E778E"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-peppercorn-gray",
    "name": "Peppercorn",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Peppercorn",
        "code": "",
        "hex": "#585858"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-rare-gray-gray",
    "name": "Rare Gray",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Rare Gray",
        "code": "",
        "hex": "#A6A69B"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-roycroft-pewter-gray",
    "name": "Roycroft Pewter",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Roycroft Pewter",
        "code": "",
        "hex": "#616564"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-software-gray",
    "name": "Software",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Software",
        "code": "",
        "hex": "#7F8486"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-tin-lizzie-gray",
    "name": "Tin Lizzie",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Tin Lizzie",
        "code": "",
        "hex": "#939591"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-classic-light-buff-white",
    "name": "Classic Light Buff",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Classic Light Buff",
        "code": "",
        "hex": "#F0EADC"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-extra-white-white",
    "name": "Extra White",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Extra White",
        "code": "",
        "hex": "#EEEFEA"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-honied-white-white",
    "name": "Honied White",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Honied White",
        "code": "",
        "hex": "#F8EEDB"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-pure-white-white",
    "name": "Pure White",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Pure White",
        "code": "",
        "hex": "#EDECE6"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-snowbound-white",
    "name": "Snowbound",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Snowbound",
        "code": "",
        "hex": "#EDEAE5"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-agate-green-green",
    "name": "Agate Green",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Agate Green",
        "code": "",
        "hex": "#8EA486"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-breaktime-green",
    "name": "Breaktime",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Breaktime",
        "code": "",
        "hex": "#C4D9CE"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-easy-green-green",
    "name": "Easy Green",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Easy Green",
        "code": "",
        "hex": "#ACC2A8"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-garden-spot-green",
    "name": "Garden Spot",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Garden Spot",
        "code": "",
        "hex": "#6D7645"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-haven-green",
    "name": "Haven",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Haven",
        "code": "",
        "hex": "#A3B48C"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-jitterbug-jade-green",
    "name": "Jitterbug Jade",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Jitterbug Jade",
        "code": "",
        "hex": "#019D6E"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-lark-green-green",
    "name": "Lark Green",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Lark Green",
        "code": "",
        "hex": "#8AC1A1"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-paradise-green",
    "name": "Paradise",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Paradise",
        "code": "",
        "hex": "#6C7B30"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-romaine-green",
    "name": "Romaine",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Romaine",
        "code": "",
        "hex": "#C0D2AD"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-talipot-palm-green",
    "name": "Talipot Palm",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Talipot Palm",
        "code": "",
        "hex": "#648149"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-adriatic-sea-blue",
    "name": "Adriatic Sea",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Adriatic Sea",
        "code": "",
        "hex": "#016081"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-blue-chip-blue",
    "name": "Blue Chip",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Blue Chip",
        "code": "",
        "hex": "#016EA7"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-cascades-blue",
    "name": "Cascades",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Cascades",
        "code": "",
        "hex": "#273E3E"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-distance-blue",
    "name": "Distance",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Distance",
        "code": "",
        "hex": "#5D6F7F"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-gentle-aquamarine-blue",
    "name": "Gentle Aquamarine",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Gentle Aquamarine",
        "code": "",
        "hex": "#97CBD2"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-jacaranda-blue",
    "name": "Jacaranda",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Jacaranda",
        "code": "",
        "hex": "#5A9EC0"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-maxi-teal-blue",
    "name": "Maxi Teal",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Maxi Teal",
        "code": "",
        "hex": "#017478"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-porch-ceiling-blue",
    "name": "Porch Ceiling",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Porch Ceiling",
        "code": "",
        "hex": "#9BC8DE"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-santorini-blue-blue",
    "name": "Santorini Blue",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Santorini Blue",
        "code": "",
        "hex": "#416D83"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-still-water-blue",
    "name": "Still Water",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Still Water",
        "code": "",
        "hex": "#4A5D5F"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Urbane Bronze",
        "code": "SW 7048",
        "hex": "#54504A"
      }
    ]
  },
  {
    "slug": "sw-aged-wine-red",
    "name": "Aged Wine",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Aged Wine",
        "code": "",
        "hex": "#895460"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-cavern-clay-red",
    "name": "Cavern Clay",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Cavern Clay",
        "code": "",
        "hex": "#AC6B53"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-emerging-taupe-red",
    "name": "Emerging Taupe",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Emerging Taupe",
        "code": "",
        "hex": "#B8A196"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-knockout-orange-red",
    "name": "Knockout Orange",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Knockout Orange",
        "code": "",
        "hex": "#E16F3E"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-raucous-orange-red",
    "name": "Raucous Orange",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Raucous Orange",
        "code": "",
        "hex": "#C35530"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-roycroft-adobe-red",
    "name": "Roycroft Adobe",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Roycroft Adobe",
        "code": "",
        "hex": "#A76251"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-abalone-shell-orange",
    "name": "Abalone Shell",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Abalone Shell",
        "code": "",
        "hex": "#DBC7BD"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-cheerful-orange",
    "name": "Cheerful",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Cheerful",
        "code": "",
        "hex": "#FFC723"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-fallen-leaves-orange",
    "name": "Fallen Leaves",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Fallen Leaves",
        "code": "",
        "hex": "#8F7659"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-library-pewter-orange",
    "name": "Library Pewter",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Library Pewter",
        "code": "",
        "hex": "#7F7263"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-polvo-de-oro-orange",
    "name": "Polvo de Oro",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Polvo de Oro",
        "code": "",
        "hex": "#E8B87F"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-sturdy-brown-orange",
    "name": "Sturdy Brown",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Sturdy Brown",
        "code": "",
        "hex": "#69482C"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-acanthus-yellow",
    "name": "Acanthus",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Acanthus",
        "code": "",
        "hex": "#CDCDB4"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-forsythia-yellow",
    "name": "Forsythia",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Forsythia",
        "code": "",
        "hex": "#FFC801"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-lime-granita-yellow",
    "name": "Lime Granita",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Lime Granita",
        "code": "",
        "hex": "#DCE1B8"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-relentless-olive-yellow",
    "name": "Relentless Olive",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Relentless Olive",
        "code": "",
        "hex": "#71713E"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Tricorn Black",
        "code": "SW 6258",
        "hex": "#2F2F30"
      }
    ]
  },
  {
    "slug": "sw-baroness-pink",
    "name": "Baroness",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Baroness",
        "code": "",
        "hex": "#A785A7"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-kimono-violet-pink",
    "name": "Kimono Violet",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Kimono Violet",
        "code": "",
        "hex": "#5D395F"
      },
      {
        "role": "Trim",
        "name": "Pure White",
        "code": "SW 7005",
        "hex": "#EDECE6"
      },
      {
        "role": "Accent",
        "name": "Iron Ore",
        "code": "SW 7069",
        "hex": "#434341"
      }
    ]
  },
  {
    "slug": "sw-african-violet-purple",
    "name": "African Violet",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "African Violet",
        "code": "",
        "hex": "#665385"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "sw-impulsive-purple-purple",
    "name": "Impulsive Purple",
    "brand": "Sherwin-Williams",
    "source": "Real Sherwin-Williams color (from SW's published color catalog), paired using a trim/accent grouped by color family",
    "colors": [
      {
        "role": "Wall",
        "name": "Impulsive Purple",
        "code": "",
        "hex": "#624977"
      },
      {
        "role": "Trim",
        "name": "Alabaster",
        "code": "SW 7008",
        "hex": "#EDEAE0"
      },
      {
        "role": "Accent",
        "name": "Peppercorn",
        "code": "SW 7674",
        "hex": "#585858"
      }
    ]
  },
  {
    "slug": "cloverdale-a-warm-grey",
    "name": "Warm Grey",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Warm Grey",
        "code": "CA091",
        "hex": "#DED2BF"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-sage",
    "name": "Sage",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Sage",
        "code": "CA182",
        "hex": "#C0C4BC"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-glacier",
    "name": "Glacier",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Glacier",
        "code": "CA184",
        "hex": "#BDCCC4"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-harbour-grey",
    "name": "Harbour Grey",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Harbour Grey",
        "code": "CA195",
        "hex": "#929CA2"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-slate",
    "name": "Slate",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Slate",
        "code": "CA090",
        "hex": "#8C857C"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-foothills",
    "name": "Foothills",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Foothills",
        "code": "CA084",
        "hex": "#656057"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-deep-forest",
    "name": "Deep Forest",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Deep Forest",
        "code": "CA166",
        "hex": "#767771"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-storm",
    "name": "Storm",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Storm",
        "code": "CA211",
        "hex": "#55524F"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-midnight",
    "name": "Midnight",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-shallot",
    "name": "Shallot",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Shallot",
        "code": "CA039",
        "hex": "#D5CCC0"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-platinum",
    "name": "Platinum",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Platinum",
        "code": "CA187",
        "hex": "#CFCEC9"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-crystal",
    "name": "Crystal",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-cirrus",
    "name": "Cirrus",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Cirrus",
        "code": "CA188",
        "hex": "#B4C0C2"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-canvas",
    "name": "Canvas",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Canvas",
        "code": "CA038",
        "hex": "#E1D5C9"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-seashell",
    "name": "Seashell",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Seashell",
        "code": "CA033",
        "hex": "#CAC0B4"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-quartz",
    "name": "Quartz",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Quartz",
        "code": "CA049",
        "hex": "#E2D9D0"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-dewdrop",
    "name": "Dewdrop",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Dewdrop",
        "code": "CA178",
        "hex": "#AAAFA3"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-a-rainfall",
    "name": "Rainfall",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Rainfall",
        "code": "CA196",
        "hex": "#8B9AA2"
      },
      {
        "role": "Trim",
        "name": "Titanium",
        "code": "CA023",
        "hex": "#E7E2D8"
      },
      {
        "role": "Accent",
        "name": "Iron",
        "code": "CA207",
        "hex": "#585757"
      }
    ]
  },
  {
    "slug": "cloverdale-b-french-roast",
    "name": "French Roast",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "French Roast",
        "code": "CA213",
        "hex": "#454140"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-cayenne",
    "name": "Cayenne",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Cayenne",
        "code": "CA218",
        "hex": "#7C4945"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-birch-bark",
    "name": "Birch Bark",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Birch Bark",
        "code": "CA110",
        "hex": "#E3CCB0"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-spruce",
    "name": "Spruce",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Spruce",
        "code": "CA191",
        "hex": "#8D9896"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-essential-beige",
    "name": "Essential Beige",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Essential Beige",
        "code": "CA081",
        "hex": "#AFA08D"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-wool",
    "name": "Wool",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Wool",
        "code": "CA031",
        "hex": "#DBD2C4"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-verdigris",
    "name": "Verdigris",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Verdigris",
        "code": "CA185",
        "hex": "#A9B9B1"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-smoky",
    "name": "Smoky",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Smoky",
        "code": "CA032",
        "hex": "#D5CEC4"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-slipstream",
    "name": "Slipstream",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Slipstream",
        "code": "CA029",
        "hex": "#DDD9D2"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-porcelain",
    "name": "Porcelain",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Porcelain",
        "code": "CA026",
        "hex": "#E3E2DB"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-mist",
    "name": "Mist",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Mist",
        "code": "CA028",
        "hex": "#DBD9D2"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-tundra",
    "name": "Tundra",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Tundra",
        "code": "CA022",
        "hex": "#E7E3DA"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-rye",
    "name": "Rye",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Rye",
        "code": "CA101",
        "hex": "#B39471"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-lentil",
    "name": "Lentil",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Lentil",
        "code": "CA161",
        "hex": "#ADA78B"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-steel",
    "name": "Steel",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Steel",
        "code": "CA194",
        "hex": "#838A8D"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-shale",
    "name": "Shale",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Shale",
        "code": "CA192",
        "hex": "#5A5F61"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-auburn",
    "name": "Auburn",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Auburn",
        "code": "CA219",
        "hex": "#784F43"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-anchor",
    "name": "Anchor",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Anchor",
        "code": "CA201",
        "hex": "#646C71"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-chestnut",
    "name": "Chestnut",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Chestnut",
        "code": "CA220",
        "hex": "#684B47"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  },
  {
    "slug": "cloverdale-b-obsidian",
    "name": "Obsidian",
    "brand": "Cloverdale Paint",
    "source": "Real Cloverdale Paint color (Artisan Colour Palette / shared Rodda Paint color system), paired using a trim/accent grouped by tone",
    "colors": [
      {
        "role": "Wall",
        "name": "Obsidian",
        "code": "CA204",
        "hex": "#44474C"
      },
      {
        "role": "Trim",
        "name": "Crystal",
        "code": "CA020",
        "hex": "#E6E1D8"
      },
      {
        "role": "Accent",
        "name": "Midnight",
        "code": "CA210",
        "hex": "#3D404A"
      }
    ]
  }
];

export function getCuratedPaletteSets() {
  return curatedPaletteSets;
}
