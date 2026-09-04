import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { StepReveal } from "@/components/home/StepReveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | The Latam Painters",
  description:
    "The Latam Painters is a Calgary-based painting company focused on straightforward pricing, careful prep work, and finishes that hold up.",
};

const values = [
  {
    icon: Handshake,
    title: "Straightforward Pricing",
    description:
      "The quote you get is the price you pay — no surprise line items once the job is underway.",
  },
  {
    icon: ShieldCheck,
    title: "Respect for Your Home",
    description:
      "Floors covered, furniture protected, and everything cleaned up before we call a job done.",
  },
  {
    icon: Sparkles,
    title: "Quality Materials",
    description:
      "We use professional-grade paint built for durability, not whatever's cheapest on the shelf.",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    description:
      "Based in Calgary, showing up when we say we will, on the schedule we agreed to.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-linear-to-br from-neutral-950 via-neutral-900 to-primary-dark/70 px-4 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-16 -left-16 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 size-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-light uppercase">
            About Us
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Painters Who Treat Your Home Like Their Own
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Latam Painters offers premium painting at competitive prices —
            built on careful prep work, honest pricing, and a finish that
            actually lasts.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Our Story
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground">
            We started Latam Painters around a simple idea: painting
            contractors get a bad reputation for missed schedules, messy job
            sites, and quotes that balloon once the work starts — and none of
            that has to be true. We built our process around doing the prep
            work properly the first time, communicating clearly before we
            ever pick up a brush, and leaving every space as clean as we
            found it.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground">
            Whether it&apos;s a single accent wall or a full exterior repaint
            ahead of a Calgary winter, we treat every job — big or small —
            with the same attention to detail.
          </p>
        </div>
      </section>

      <section className="bg-services-bg px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              What We Stand For
            </h2>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <StepReveal
                  key={value.title}
                  index={i}
                  icon={<Icon className="size-6 text-primary-light" />}
                >
                  <div className="md:text-center md:px-2">
                    <h3 className="font-semibold leading-snug text-white">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StepReveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-4 py-16 text-center md:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Ready to talk about your project?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Tell us what you&apos;re working with and we&apos;ll set up a time
          to take a look — no pressure, no obligation.
        </p>
        <Link
          href="#booking"
          className={cn(buttonVariants({ size: "lg" }), "mt-6")}
        >
          Request Your Free Estimate
        </Link>
      </section>
    </main>
  );
}
