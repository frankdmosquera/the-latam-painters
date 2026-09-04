import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getResources } from "@/lib/data/resourcesData";
import { accentClasses } from "@/lib/data/serviceAccent";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Painting Resources | The Latam Painters",
  description:
    "Guides, colour inspiration, prep checklists, and answers to common questions for Calgary homeowners planning a paint job.",
};

export default function ResourcesPage() {
  const resources = getResources();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          Resources
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Everything You Need to Plan Your Paint Job
        </h1>
        <p className="mt-3 text-muted-foreground">
          Free guides and tools built from years of Calgary paint jobs — no
          signup, no fluff, just what actually helps.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {resources.map((resource) => {
          const Icon = resource.icon;
          const accent = accentClasses[resource.accent];

          return (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg md:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full bg-primary/5 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
              />

              <div
                className={cn(
                  "relative flex size-12 items-center justify-center rounded-full",
                  accent.badge,
                )}
              >
                <Icon className="size-6" />
              </div>

              <div className="relative">
                <h2 className="text-lg font-semibold text-foreground">
                  {resource.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {resource.tagline}
                </p>
              </div>

              <span
                className={cn(
                  "relative mt-auto inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1",
                  accent.text,
                )}
              >
                Explore <ArrowRight className="size-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
