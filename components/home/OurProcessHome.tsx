// components/OurProcess.tsx
import {
  CalendarCheck,
  ClipboardCheck,
  PaintRoller,
  CheckCircle2,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const steps = [
  {
    icon: CalendarCheck,
    title: "Request Your Free Estimate",
    description:
      "Tell us about your project and we'll set up a time to take a look — no pressure, no obligation.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspect & Prep Surfaces",
    description:
      "We assess the space and prep it properly — patching, sanding, taping — so the finish actually lasts.",
  },
  {
    icon: PaintRoller,
    title: "Paint & Clean Up",
    description:
      "Professional application from start to finish, with your space left as tidy as we found it.",
  },
  {
    icon: CheckCircle2,
    title: "Final Walkthrough",
    description:
      "We walk the job with you to make sure every detail meets your expectations before we call it done.",
  },
] as const;

export function OurProcess() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="mx-auto max-w-6xl px-4">
        <div className="font-medium  mx-auto max-w-2xl text-center mb-14 md:mb-20">
          <p className="text-xl mb-2 ">Our Process</p>
          <div className="">&</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How It Works, Start to Finish
          </h2>
        </div>

        <ol className="relative flex flex-col md:flex-row md:items-start gap-10 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <li
                key={step.title}
                className="bg-vivid-1 relative flex md:flex-1 flex-col items-start md:items-center gap-4 bg-card-solid p-2 pt-4 rounded  shadow-md shadow-black/20"
              >
                {/* ... */}
                <span className="text-xs font-semibold text-white/80 md:hidden">
                  Step {i + 1}
                </span>

                <div className="md:text-center md:px-2">
                  <h3 className="font-semibold leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <Link
          href="#booking"
          className={cn(buttonVariants({ size: "lg" }), "mt-14 md:mt-16")}
        >
          Request Your Free Estimate
        </Link>
      </div>
    </section>
  );
}
