import {
  ClipboardCheck,
  Layers,
  PaintRoller,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import type { ServiceAccent } from "./servicesData";

export type GuideStep = {
  title: string;
  description: string;
};

export type GuidePhase = {
  id: string;
  number: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  accent: ServiceAccent;
  steps: GuideStep[];
  proTip: string;
  commonMistake: string;
};

export const paintingGuidePhases: GuidePhase[] = [
  {
    id: "prep",
    number: "01",
    title: "Prep the Space",
    summary:
      "Every good paint job is decided before a brush ever touches the wall. Rushing prep is the single biggest reason a paint job looks amateur.",
    icon: ClipboardCheck,
    accent: "vivid-2",
    steps: [
      {
        title: "Clear and protect the room",
        description:
          "Move furniture to the center of the room or out entirely, then cover everything — including the floor — with plastic sheeting or drop cloths.",
      },
      {
        title: "Remove hardware and fixtures",
        description:
          "Switch plates, outlet covers, curtain rods, and wall art all come off first. Anything left on gets a sloppy paint line around it.",
      },
      {
        title: "Clean every surface",
        description:
          "Dust, grease, and cobwebs stop paint from bonding properly. Wipe walls down with a mild detergent and let them dry fully before taping.",
      },
      {
        title: "Fill and sand",
        description:
          "Fill nail holes, dents, and cracks with spackle, then sand smooth once dry so the wall reads as one continuous surface under paint.",
      },
    ],
    proTip:
      "Tape off in one continuous motion and press the edge down firmly with a putty knife — it's the single biggest factor in a clean, sharp line.",
    commonMistake:
      "Skipping the cleaning step. Paint adheres to dust and grease just fine at first, then peels within a year.",
  },
  {
    id: "prime",
    number: "02",
    title: "Patch, Sand & Prime",
    summary:
      "Primer isn't optional extra work — it's what makes your topcoat go on even, cover fully, and actually last.",
    icon: Layers,
    accent: "vivid-4",
    steps: [
      {
        title: "Spot-prime repairs",
        description:
          "Any patched or bare drywall gets its own coat of primer first, or it'll flash a slightly different sheen once the topcoat goes on.",
      },
      {
        title: "Prime full walls when needed",
        description:
          "Switching from a dark colour to a light one, painting new drywall, or covering a stain all call for a full coat of primer, not just spot work.",
      },
      {
        title: "Let it cure, not just dry",
        description:
          "Primer can feel dry to the touch in under an hour but needs several hours to fully cure before paint goes on top of it.",
      },
      {
        title: "Do a final sand",
        description:
          "A light pass with fine-grit sandpaper knocks down any raised grain or drips before the first coat of colour goes on.",
      },
    ],
    proTip:
      "Tint your primer toward your final colour — most paint stores will do this for free, and it cuts your topcoats from three down to two.",
    commonMistake:
      "Painting over primer before it's cured. The topcoat can lift or show texture from the primer underneath it.",
  },
  {
    id: "paint",
    number: "03",
    title: "Paint Like a Pro",
    summary:
      "This is the stage everyone pictures, but the technique matters as much as the paint itself.",
    icon: PaintRoller,
    accent: "primary",
    steps: [
      {
        title: "Cut in first",
        description:
          "Use a brush to paint a 2–3 inch border around ceilings, corners, and trim before the roller ever touches the wall.",
      },
      {
        title: "Roll in a W pattern",
        description:
          "Load the roller evenly and lay paint on in a W or M shape, then fill in without lifting the roller, to avoid visible lines.",
      },
      {
        title: "Keep a wet edge",
        description:
          "Always roll into the still-wet section of your last pass. Stopping and restarting on paint that's already dried is what causes streaking.",
      },
      {
        title: "Apply two full coats",
        description:
          "One coat almost never gives even, opaque coverage. Plan for two, with several hours of drying time in between.",
      },
    ],
    proTip:
      "Work in natural light where you can, and step back every few minutes. Overhead lighting hides thin spots that daylight reveals instantly.",
    commonMistake:
      "Overloading the roller. It feels faster, but it causes drips, uneven texture, and paint that dries unevenly.",
  },
  {
    id: "finish",
    number: "04",
    title: "Finish & Clean Up",
    summary:
      "The last few steps are what separate a good paint job from one that stays looking good.",
    icon: CheckCircle2,
    accent: "vivid-5",
    steps: [
      {
        title: "Pull tape at the right time",
        description:
          "Remove painter's tape while the final coat is still slightly tacky. Fully dried paint can peel away along with the tape.",
      },
      {
        title: "Inspect under different light",
        description:
          "Check walls in daylight and lamp light both, then touch up any thin spots with a small brush once the coat has dried.",
      },
      {
        title: "Reinstall hardware and furniture",
        description:
          "Wait until the paint is fully cured — often 24 to 72 hours, check the can — before rehanging anything against the wall.",
      },
      {
        title: "Clean and store your tools",
        description:
          "Rinse brushes and rollers immediately or they're done after one job. Properly cleaned, they'll last for years of use.",
      },
    ],
    proTip:
      "Save a small labelled jar of your leftover paint for each room — it makes future touch-ups an exact match instead of a guessing game.",
    commonMistake:
      "Rehanging shelves or art too early. Paint that looks and feels dry can still dent or peel under pressure for days.",
  },
];

export function getPaintingGuidePhases() {
  return paintingGuidePhases;
}
