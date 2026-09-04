// components/OurProcess.tsx
import {
  CalendarCheck,
  ClipboardCheck,
  PaintRoller,
  CheckCircle2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { StepReveal } from "./StepReveal";

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
    <section className="py-24 md:py-32 ">
      <div className="mx-auto max-w-6xl px-4">
        <div className="font-medium gap-2 flex flex-col  items-center mb-14 md:mb-20">
          <p className="inline-block text-xl  bg-white p-1.5 rounded-br-lg">
            Our Process
          </p>
          <div className="inline-block bg-white  p-1.5 rounded-es-3xl">&</div>
          <h2 className="inline-block bg-white p-1.5 text-3xl md:text-4xl font-bold tracking-tight rounded-sm">
            How It Works, Start to Finish
          </h2>
        </div>

        <ol className="relative flex flex-col md:flex-row md:items-start gap-10 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <StepReveal
                key={step.title}
                index={i}
                icon={<Icon className="size-6 text-primary-light" />}
              >
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
              </StepReveal>
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
