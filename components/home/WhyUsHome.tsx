import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Interior specialists who know how to work around your schedule",
  "Fast turnarounds without sacrificing a clean finish",
  "Affordable rates that don't cut corners on quality",
  "Careful prep and protection of your floors and furniture",
  "Straightforward quotes, no surprise costs",
];

export default function WhyUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Why Calgary Homeowners Choose LatamPainters
        </h2>

        <ul className="mt-8 space-y-4 text-left inline-block">
          {reasons.map((reason, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p className="text-foreground">{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
