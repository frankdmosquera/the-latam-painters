import {
  BookOpenCheck,
  Palette,
  ClipboardCheck,
  MessageCircleQuestion,
  type LucideIcon,
} from "lucide-react";
import type { ServiceAccent } from "./servicesData";

export type Resource = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: ServiceAccent;
};

export const resources: Resource[] = [
  {
    slug: "painting-guide",
    title: "The Complete Painting Guide",
    tagline: "Every stage of a paint job, explained the way we'd do it ourselves.",
    description:
      "A room-by-room walkthrough of prep, priming, painting, and cleanup — with the pro tips and common mistakes we see most often.",
    icon: BookOpenCheck,
    accent: "vivid-1",
  },
  {
    slug: "colour-inspiration",
    title: "Colour Inspiration",
    tagline: "Curated palettes for walls, trim, and ceilings that actually work together.",
    description:
      "Browse palettes by mood — warm, cool, bold, or neutral — and copy the exact hex codes to bring to your estimate.",
    icon: Palette,
    accent: "vivid-5",
  },
  {
    slug: "preparation",
    title: "Preparation Tips",
    tagline: "An interactive checklist so your space is ready before we arrive.",
    description:
      "What to do a week out, the day before, and the morning of your paint job — check items off as you go.",
    icon: ClipboardCheck,
    accent: "vivid-2",
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    tagline: "Searchable answers on pricing, process, materials, and more.",
    description:
      "The questions Calgary homeowners ask us most, organized by category so you can find yours fast.",
    icon: MessageCircleQuestion,
    accent: "vivid-3",
  },
];

export function getResources() {
  return resources;
}

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
