import {
  Home,
  Building2,
  PaintBucket,
  Layers,
  PanelTop,
  DoorOpen,
  type LucideIcon,
} from "lucide-react";

export type ServiceAccent =
  | "primary"
  | "vivid-1"
  | "vivid-2"
  | "vivid-3"
  | "vivid-4"
  | "vivid-5";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: ServiceAccent;
  included: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    tagline: "A full refresh for the rooms you live in every day.",
    description:
      "From a single accent wall to a whole-home repaint, we prep, protect, and paint your interior with the kind of care you'd want in your own home — clean lines, even coverage, and a finish that holds up to daily life.",
    icon: Home,
    accent: "primary",
    included: [
      "Furniture moved and fully covered before we start",
      "Walls patched, sanded, and primed where needed",
      "Sharp, clean cut-lines along trim, ceilings, and corners",
      "Two coats minimum for even, lasting colour",
      "Full cleanup — floors and surfaces left spotless",
    ],
    faqs: [
      {
        question: "How long does an average room take?",
        answer:
          "Most single rooms are done in a day. Full-home interiors typically run three to five days depending on size and how many colours are involved.",
      },
      {
        question: "Do I need to pick the paint myself?",
        answer:
          "Not if you don't want to — we're happy to bring swatches and walk you through options that suit your space and lighting.",
      },
      {
        question: "Can you work around furniture we can't move?",
        answer:
          "Yes. Anything too large or awkward to move gets carefully shifted to the centre of the room and fully covered in place.",
      },
    ],
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    tagline: "Weather-ready protection that holds up to a Calgary winter.",
    description:
      "Calgary's freeze-thaw cycles and UV exposure are hard on exterior surfaces. We use exterior-grade coatings built for the swing, with proper prep on siding, stucco, and trim so the finish doesn't just look good — it lasts.",
    icon: Building2,
    accent: "vivid-1",
    included: [
      "Power washing and surface prep before any paint goes on",
      "Scraping, sanding, and spot-priming bare or peeling areas",
      "Caulking gaps around trim and siding to block moisture",
      "Exterior-grade paint rated for freeze-thaw conditions",
      "Careful coverage of landscaping, walkways, and windows",
    ],
    faqs: [
      {
        question: "What time of year is best for exterior painting?",
        answer:
          "Late spring through early fall, once overnight temperatures reliably stay above freezing — that's when paint cures properly.",
      },
      {
        question: "Do you paint stucco and siding both?",
        answer:
          "Yes, we work with stucco, vinyl and wood siding, brick trim, and most common Calgary exterior surfaces.",
      },
    ],
  },
  {
    slug: "cabinet-painting",
    title: "Cabinet Painting",
    tagline: "Refresh your kitchen or bathroom without a full renovation.",
    description:
      "New cabinets are expensive — a professional refinish often isn't. We remove doors and hardware, spray a smooth factory-style finish, and reinstall everything cleanly, giving your kitchen or bathroom a real upgrade at a fraction of the cost.",
    icon: PaintBucket,
    accent: "vivid-4",
    included: [
      "Doors, drawers, and hardware removed and labelled",
      "Degreasing and sanding for proper paint adhesion",
      "Sprayed (not brushed) finish for a smooth, factory-like result",
      "Durable, wipeable coating built for kitchens and bathrooms",
      "Careful reinstall with hardware realigned",
    ],
    faqs: [
      {
        question: "Is this cheaper than replacing my cabinets?",
        answer:
          "Almost always — refinishing typically costs a fraction of full cabinet replacement while giving you a comparable visual upgrade.",
      },
      {
        question: "How long until I can use my kitchen again?",
        answer:
          "Doors and drawers are usually out of the house for a few days while they cure in a controlled space, then reinstalled once fully hardened.",
      },
    ],
  },
  {
    slug: "wall-painting",
    title: "Wall Painting",
    tagline: "Precise, surgical work for accent walls, patches, and repairs.",
    description:
      "Not every job is a full room. Whether it's one accent wall, a section damaged by a leak, or drywall that needs patching and texture-matching before paint goes on, we handle the detail work that a whole-room repaint doesn't require.",
    icon: Layers,
    accent: "vivid-2",
    included: [
      "Drywall patching and texture-matching before painting",
      "Colour-matching to existing paint when only part of a wall is affected",
      "Clean, precise edges where new paint meets existing walls",
      "Accent wall design guidance if you're unsure on colour",
      "Minimal disruption — we only work the area that needs it",
    ],
    faqs: [
      {
        question: "Can you match my existing wall colour exactly?",
        answer:
          "In most cases, yes — bring us the paint code if you have it, or we can colour-match from a sample of the existing wall.",
      },
      {
        question: "What if the wall has water damage or holes?",
        answer:
          "We patch and texture-match the surface first, then paint — the repair and the paintwork are both part of the same job.",
      },
    ],
  },
  {
    slug: "ceiling-painting",
    title: "Ceiling Painting",
    tagline: "Clean, even finishes for the surface everyone forgets to look at — until it's bad.",
    description:
      "Ceilings show every roller mark, drip, and uneven patch under the right light. We use techniques suited to ceiling work specifically — different from walls — including popcorn-texture handling and stain-blocking for water marks.",
    icon: PanelTop,
    accent: "vivid-5",
    included: [
      "Stain-blocking primer for water marks so they don't bleed through",
      "Even, streak-free coverage suited to overhead lighting",
      "Popcorn-texture ceilings handled without damaging the texture",
      "Smooth-ceiling conversions available on request",
      "Full protection of floors and furniture below",
    ],
    faqs: [
      {
        question: "Can you cover a water stain permanently?",
        answer:
          "Yes — as long as the source of the leak has been fixed, a proper stain-blocking primer keeps it from showing through the new paint.",
      },
      {
        question: "Do you remove popcorn texture?",
        answer:
          "We can either paint around it carefully or remove it and smooth the ceiling first, depending on what you'd prefer.",
      },
    ],
  },
  {
    slug: "trim-and-doors",
    title: "Trim & Doors",
    tagline: "The detail work that makes a paint job look genuinely finished.",
    description:
      "Baseboards, casings, and doors take the most visible wear in a home, and sloppy trim work is what makes an otherwise good paint job look amateur. We use a durable semi-gloss or satin finish and cut razor-clean lines against walls and flooring.",
    icon: DoorOpen,
    accent: "vivid-3",
    included: [
      "Sanding and filling nicks, dents, and old nail holes",
      "Durable semi-gloss or satin finish built for daily wear",
      "Clean, sharp lines where trim meets walls and floors",
      "Doors painted on both sides, including edges and frames",
      "Hardware removed and reinstalled cleanly",
    ],
    faqs: [
      {
        question: "Do you paint interior doors, or just trim?",
        answer:
          "Both — doors, frames, baseboards, and window casings are all part of this service.",
      },
      {
        question: "Can you match new trim to existing paint elsewhere in the house?",
        answer:
          "Yes, we'll colour-match to whatever trim colour is already used throughout your home for a consistent look.",
      },
    ],
  },
];

export function getServices() {
  return services;
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
