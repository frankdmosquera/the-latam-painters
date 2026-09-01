import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Interior wall painting",
    tagline: "Clean lines, smooth walls, fast turnaround.",
    bullets: [
      "Living rooms, bedrooms and hallways",
      "Careful prep and edge work",
      "Most rooms done in a single day",
    ],
  },
  {
    title: "Ceiling painting",
    tagline: "Even coverage, no streaks, no mess.",
    bullets: [
      "Popcorn and smooth ceilings",
      "Stain-blocking primer where needed",
      "Furniture and floor protection included",
    ],
  },
  {
    title: "Trim and doors",
    tagline: "Crisp detail work that makes a room pop.",
    bullets: [
      "Baseboards, casings and doors",
      "Durable, wipeable finishes",
      "Precise, tape-free edges",
    ],
  },
  {
    title: "Full home interior",
    tagline: "Every room refreshed, on one simple quote.",
    bullets: [
      "Whole-home colour consistency",
      "Scheduled to fit your timeline",
      "One flat, upfront price",
    ],
  },
];

export default function ServiceSectionZoomIn() {
  return (
    <section className="w-full py-16 md:py-24  bg-services-bg">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
          Our interior painting services
        </h2>

        <div className="mt-12 flex flex-col gap-8 max-w-2xl mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={i}>
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-muted-foreground">{service.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {service.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
