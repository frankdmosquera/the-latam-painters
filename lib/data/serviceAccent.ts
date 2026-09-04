import type { ServiceAccent } from "./servicesData";

export const accentClasses: Record<
  ServiceAccent,
  { gradient: string; badge: string; text: string; ring: string }
> = {
  primary: {
    gradient: "from-neutral-950 via-neutral-900 to-primary-dark/70",
    badge: "bg-primary/15 text-primary-light",
    text: "text-primary",
    ring: "ring-primary/30",
  },
  "vivid-1": {
    gradient: "from-neutral-950 via-neutral-900 to-vivid-1/60",
    badge: "bg-vivid-1/15 text-vivid-1",
    text: "text-vivid-1",
    ring: "ring-vivid-1/30",
  },
  "vivid-2": {
    gradient: "from-neutral-950 via-neutral-900 to-vivid-2/60",
    badge: "bg-vivid-2/15 text-vivid-2",
    text: "text-vivid-2",
    ring: "ring-vivid-2/30",
  },
  "vivid-3": {
    gradient: "from-neutral-950 via-neutral-900 to-vivid-3/60",
    badge: "bg-vivid-3/15 text-vivid-3",
    text: "text-vivid-3",
    ring: "ring-vivid-3/30",
  },
  "vivid-4": {
    gradient: "from-neutral-950 via-neutral-900 to-vivid-4/60",
    badge: "bg-vivid-4/15 text-vivid-4",
    text: "text-vivid-4",
    ring: "ring-vivid-4/30",
  },
  "vivid-5": {
    gradient: "from-neutral-950 via-neutral-900 to-vivid-5/60",
    badge: "bg-vivid-5/15 text-vivid-5",
    text: "text-vivid-5",
    ring: "ring-vivid-5/30",
  },
};
