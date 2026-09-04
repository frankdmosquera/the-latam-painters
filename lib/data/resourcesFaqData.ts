export type Faq = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  slug: string;
  title: string;
  faqs: Faq[];
};

export const resourcesFaqCategories: FaqCategory[] = [
  {
    slug: "estimates-pricing",
    title: "Estimates & Pricing",
    faqs: [
      {
        question: "How much does painting cost in Calgary?",
        answer:
          "Cost depends on square footage, number of colours, surface condition, and paint quality — most single rooms run in the few-hundred to low-thousand dollar range. We give you an exact number after a free walkthrough, not a vague range over the phone.",
      },
      {
        question: "Is the estimate really free?",
        answer:
          "Yes — no cost, no pressure, and no obligation to book. We'll walk your space, ask about your goals, and give you a firm price before any work starts.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "For larger projects we ask for a modest deposit to lock in your schedule date. The balance is due on completion, once you're happy with the work.",
      },
      {
        question: "Will the price change once you start?",
        answer:
          "Only if you add scope mid-project, like deciding to paint an extra room. Anything visible at the estimate is priced up front — no surprise line items afterward.",
      },
    ],
  },
  {
    slug: "the-process",
    title: "The Process",
    faqs: [
      {
        question: "How long does a typical job take?",
        answer:
          "Most single rooms are done in a day. Full interior repaints typically run three to five days, and exteriors depend heavily on weather and house size.",
      },
      {
        question: "Do I need to be home during the work?",
        answer:
          "Not for the whole job — just for a quick walkthrough at the start and end. Many clients give us access and go about their day.",
      },
      {
        question: "What happens to my furniture?",
        answer:
          "We move what we can to the centre of the room and cover it fully in plastic. Anything too large or fragile to move gets carefully shifted and protected in place.",
      },
      {
        question: "How much notice do you need to book?",
        answer:
          "It varies by season — spring and fall book up fastest for exteriors. As a rule of thumb, two to four weeks out gives you the most flexibility on dates.",
      },
    ],
  },
  {
    slug: "materials-paint",
    title: "Materials & Paint",
    faqs: [
      {
        question: "What brand of paint do you use?",
        answer:
          "We work with professional-grade, low-VOC paint lines chosen for durability and finish, matched to the surface and how the room gets used — happy to walk through specific options at your estimate.",
      },
      {
        question: "Can I supply my own paint?",
        answer:
          "Yes, if you have a specific brand or colour you're set on. We'll let you know if anything about the product affects the timeline or warranty.",
      },
      {
        question: "What's the difference between paint finishes?",
        answer:
          "Flat and matte hide imperfections but show wear; eggshell and satin balance durability and looks for living spaces; semi-gloss and gloss are the most washable, best for trim, doors, and kitchens.",
      },
      {
        question: "Are your paints safe for kids and pets?",
        answer:
          "Yes — we use low-VOC and zero-VOC options as standard, which means minimal odour and a much faster return to normal use of the room.",
      },
    ],
  },
  {
    slug: "interior-painting",
    title: "Interior Painting",
    faqs: [
      {
        question: "Do you patch drywall before painting?",
        answer:
          "Yes, patching, sanding, and priming repaired areas is part of every interior job — paint applied over unrepaired damage never looks right for long.",
      },
      {
        question:
          "Can you match an existing colour if I only need one wall touched up?",
        answer:
          "In most cases yes, especially if you have the paint code. Without it, we can colour-match closely from a sample of your existing wall.",
      },
      {
        question: "Do you paint ceilings as part of interior jobs?",
        answer:
          "We can include ceilings in any interior quote, or handle them separately — just let us know what you'd like covered.",
      },
      {
        question: "How soon can I use the room after painting?",
        answer:
          "Light use is fine once the surface is dry to the touch, usually within a few hours. Avoid leaning furniture against walls until the paint has fully cured, typically 24 to 72 hours.",
      },
    ],
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    faqs: [
      {
        question: "What time of year do you paint exteriors?",
        answer:
          "Late spring through early fall, once overnight temperatures reliably stay above freezing so paint can cure properly. Calgary's window is shorter than a lot of places, so we recommend booking early.",
      },
      {
        question: "Do you paint stucco?",
        answer:
          "Yes, along with vinyl and wood siding, brick trim, and most other exterior surfaces common in Calgary homes.",
      },
      {
        question: "How long does exterior paint typically last?",
        answer:
          "A properly prepped and applied exterior job usually holds up seven to ten years before it needs a refresh, depending on sun exposure and weather.",
      },
      {
        question: "What if it rains during the job?",
        answer:
          "We monitor the forecast and schedule around it. If weather interrupts a job in progress, we pause at a clean stopping point and resume once conditions are right.",
      },
    ],
  },
  {
    slug: "cabinet-painting",
    title: "Cabinet Painting",
    faqs: [
      {
        question: "Is cabinet refinishing really cheaper than replacing?",
        answer:
          "Almost always — refinishing typically costs a fraction of full cabinet replacement while giving you a comparable visual upgrade.",
      },
      {
        question: "Do you spray or brush cabinets?",
        answer:
          "We spray cabinet doors and drawers off-site for a smooth, factory-style finish that brushing can't match.",
      },
      {
        question: "How long will my kitchen be out of commission?",
        answer:
          "Doors and drawers are usually removed for a few days while they cure in a controlled space; cabinet boxes stay in place and useable the whole time.",
      },
      {
        question:
          "Can you change my cabinet colour completely, like dark to white?",
        answer:
          "Yes — with the right primer and enough coats, we can take cabinets from dark stained wood to a bright white or any colour in between.",
      },
    ],
  },
];

export function getResourcesFaqCategories() {
  return resourcesFaqCategories;
}
