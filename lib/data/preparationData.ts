export type ChecklistItem = {
  id: string;
  label: string;
  detail: string;
};

export type ChecklistGroup = {
  id: string;
  title: string;
  timing: string;
  items: ChecklistItem[];
};

export const preparationChecklist: ChecklistGroup[] = [
  {
    id: "week-before",
    title: "1 Week Before",
    timing: "Week Before",
    items: [
      {
        id: "confirm-colours",
        label: "Confirm your colours and finishes",
        detail:
          "Have your paint colours and sheens picked before we arrive so there's no delay starting day one.",
      },
      {
        id: "clear-path",
        label: "Clear a path to the work area",
        detail:
          "Make sure driveways, walkways, and entry points are accessible for equipment and drop cloths.",
      },
      {
        id: "handle-repairs",
        label: "Handle any repairs first",
        detail:
          "Flooring, drywall, or plumbing work should wrap up before painting starts, not during.",
      },
      {
        id: "arrange-pets",
        label: "Arrange for pets to be elsewhere",
        detail:
          "A quiet, closed-off space, or a friend's house, keeps pets safe and out from underfoot.",
      },
    ],
  },
  {
    id: "day-before",
    title: "The Day Before",
    timing: "Day Before",
    items: [
      {
        id: "clear-walls",
        label: "Clear personal items from walls",
        detail:
          "Take down photos, mirrors, and shelving so we're not working around them.",
      },
      {
        id: "empty-cabinets",
        label: "Empty closets and cabinets if they're being painted",
        detail: "Inside surfaces need to be fully accessible to paint properly.",
      },
      {
        id: "secure-valuables",
        label: "Charge devices and set aside valuables",
        detail:
          "Small, valuable, or irreplaceable items are best moved somewhere secure.",
      },
      {
        id: "note-touch-ups",
        label: "Note any touch-up areas",
        detail:
          "Walk the space and flag scuffs, holes, or trouble spots you want addressed.",
      },
    ],
  },
  {
    id: "day-of",
    title: "The Morning Of",
    timing: "Day Of",
    items: [
      {
        id: "parking",
        label: "Clear a parking spot near the entrance",
        detail:
          "For our crew's vehicle and equipment, ideally close to the front door.",
      },
      {
        id: "walkthrough",
        label: "Make sure someone's available for a walkthrough",
        detail: "A quick chat before we start avoids any surprises later.",
      },
      {
        id: "secure-pets",
        label: "Secure pets in their safe space",
        detail:
          "Even the friendliest pet can get stressed by strangers, drop cloths, and open doors.",
      },
      {
        id: "leave-the-rest",
        label: "Leave the rest to us",
        detail:
          "Furniture moving, surface protection, and setup are part of the job, not yours.",
      },
    ],
  },
];

export function getPreparationChecklist() {
  return preparationChecklist;
}
