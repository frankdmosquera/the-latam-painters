export type ColourRole = "Walls" | "Trim" | "Ceiling" | "Accent";

export type ColourSwatch = {
  name: string;
  hex: string;
  role: ColourRole;
};

export type ColourMood =
  | "Warm & Cozy"
  | "Cool & Calm"
  | "Bold & Moody"
  | "Fresh & Airy"
  | "Timeless Neutral";

export type ColourPalette = {
  slug: string;
  name: string;
  mood: ColourMood;
  description: string;
  swatches: ColourSwatch[];
};

export const colourMoods: ColourMood[] = [
  "Warm & Cozy",
  "Cool & Calm",
  "Bold & Moody",
  "Fresh & Airy",
  "Timeless Neutral",
];

export const colourPalettes: ColourPalette[] = [
  {
    slug: "prairie-wheat",
    name: "Prairie Wheat",
    mood: "Warm & Cozy",
    description:
      "Sun-warmed neutrals that make a north-facing room feel golden all year round.",
    swatches: [
      { name: "Wheat Field", hex: "#D9C6A5", role: "Walls" },
      { name: "Warm White", hex: "#F5F0E6", role: "Trim" },
      { name: "Cloud Linen", hex: "#FBF8F2", role: "Ceiling" },
      { name: "Saddle Leather", hex: "#8B5E3C", role: "Accent" },
    ],
  },
  {
    slug: "foothills-fog",
    name: "Foothills Fog",
    mood: "Cool & Calm",
    description:
      "Soft, overcast blue-greys inspired by early mornings in the foothills.",
    swatches: [
      { name: "Foothills Grey", hex: "#C7CDD1", role: "Walls" },
      { name: "Morning Mist", hex: "#F4F5F6", role: "Trim" },
      { name: "Pure White", hex: "#FFFFFF", role: "Ceiling" },
      { name: "Slate Blue", hex: "#5B6B73", role: "Accent" },
    ],
  },
  {
    slug: "midnight-study",
    name: "Midnight Study",
    mood: "Bold & Moody",
    description:
      "A confident, library-dark statement for a den or powder room that wants attention.",
    swatches: [
      { name: "Midnight Charcoal", hex: "#2C3339", role: "Walls" },
      { name: "Parchment White", hex: "#EDEAE2", role: "Trim" },
      { name: "Soft Ivory", hex: "#F7F5F0", role: "Ceiling" },
      { name: "Aged Brass", hex: "#A97142", role: "Accent" },
    ],
  },
  {
    slug: "aspen-air",
    name: "Aspen Air",
    mood: "Fresh & Airy",
    description:
      "Light, breathable greens that bring the outdoors in without going full forest.",
    swatches: [
      { name: "Aspen Leaf", hex: "#EAF0EC", role: "Walls" },
      { name: "Bright White", hex: "#FFFFFF", role: "Trim" },
      { name: "Bright White", hex: "#FFFFFF", role: "Ceiling" },
      { name: "Muted Sage", hex: "#7C9885", role: "Accent" },
    ],
  },
  {
    slug: "gallery-neutral",
    name: "Gallery Neutral",
    mood: "Timeless Neutral",
    description:
      "The safest, most resale-friendly palette we recommend — warm enough to still feel lived-in.",
    swatches: [
      { name: "Gallery Greige", hex: "#E4DED2", role: "Walls" },
      { name: "Soft Linen", hex: "#F6F3EC", role: "Trim" },
      { name: "Pure White", hex: "#FFFFFF", role: "Ceiling" },
      { name: "Espresso", hex: "#3F3A34", role: "Accent" },
    ],
  },
  {
    slug: "ember-clay",
    name: "Ember & Clay",
    mood: "Warm & Cozy",
    description:
      "A sunset-toned accent wall paired with warm neutrals for a cozy, grounded feel.",
    swatches: [
      { name: "Ember Terracotta", hex: "#C8785A", role: "Accent" },
      { name: "Warm Sand", hex: "#F5EDE4", role: "Walls" },
      { name: "Soft Cream", hex: "#FBF7F2", role: "Ceiling" },
      { name: "Deep Clay", hex: "#6B4226", role: "Trim" },
    ],
  },
  {
    slug: "harbour-blue",
    name: "Harbour Blue",
    mood: "Cool & Calm",
    description:
      "A confident navy that reads sophisticated in a dining room or entryway.",
    swatches: [
      { name: "Harbour Navy", hex: "#37536B", role: "Walls" },
      { name: "Sailcloth White", hex: "#F2F0EA", role: "Trim" },
      { name: "Pure White", hex: "#FFFFFF", role: "Ceiling" },
      { name: "Seafoam Grey", hex: "#B7C4C2", role: "Accent" },
    ],
  },
  {
    slug: "moss-linen",
    name: "Moss & Linen",
    mood: "Fresh & Airy",
    description:
      "Soft botanical greens layered over warm linen for a calm, grounded bedroom.",
    swatches: [
      { name: "Linen Sage", hex: "#DCE3D5", role: "Walls" },
      { name: "Natural Linen", hex: "#FBFAF6", role: "Trim" },
      { name: "Pure White", hex: "#FFFFFF", role: "Ceiling" },
      { name: "Deep Moss", hex: "#556B4F", role: "Accent" },
    ],
  },
];

export function getColourPalettes() {
  return colourPalettes;
}
