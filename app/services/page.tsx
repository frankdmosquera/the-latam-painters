import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServices } from "@/lib/data/servicesData";
import { accentClasses } from "@/lib/data/serviceAccent";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Painting Services in Calgary | The Latam Painters",
  description:
    "Interior, exterior, cabinet, wall, ceiling, and trim painting services for Calgary homeowners — free estimates, no obligation.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          Services
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Painting Services for Every Room
        </h1>
        <p className="mt-3 text-muted-foreground">
          Pick a service below for details, what&apos;s included, and answers
          to common questions — or just request a free estimate and we&apos;ll
          walk you through it.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          const accent = accentClasses[service.accent];

          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div
                className={cn(
                  "flex size-12 items-center justify-center rounded-full",
                  accent.badge,
                )}
              >
                <Icon className="size-6" />
              </div>

              <div>
                <h2 className="font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {service.tagline}
                </p>
              </div>

              <span
                className={cn(
                  "mt-auto inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1",
                  accent.text,
                )}
              >
                Learn more <ArrowRight className="size-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
