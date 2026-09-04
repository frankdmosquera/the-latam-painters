import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ServiceHeroIcon } from "@/components/services/ServiceHeroIcon";
import { PreparationChecklist } from "@/components/resources/PreparationChecklist";
import { getPreparationChecklist } from "@/lib/data/preparationData";
import { getResourceBySlug, getResources } from "@/lib/data/resourcesData";
import { accentClasses } from "@/lib/data/serviceAccent";
import { cn } from "@/lib/utils";

const resource = getResourceBySlug("preparation")!;

export const metadata: Metadata = {
  title: "Preparation Tips | The Latam Painters",
  description:
    "An interactive checklist covering what to do a week out, the day before, and the morning of your paint job.",
};

export default function PreparationPage() {
  const groups = getPreparationChecklist();
  const Icon = resource.icon;
  const accent = accentClasses[resource.accent];

  return (
    <main>
      <section
        className={cn(
          "relative overflow-hidden bg-linear-to-br px-4 py-20 md:py-28",
          accent.gradient,
        )}
      >
        <div className="pointer-events-none absolute -top-16 -right-16 size-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center justify-center gap-2 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/resources"
              className="transition-colors hover:text-white"
            >
              Resources
            </Link>
            <span>/</span>
            <span className="text-white">Preparation Tips</span>
          </nav>

          <div className="flex justify-center">
            <ServiceHeroIcon
              icon={<Icon className="size-8 text-white" />}
              badgeClassName={accent.badge}
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {resource.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {resource.tagline}
          </p>

          <Link
            href="#booking"
            className={cn(buttonVariants({ size: "lg" }), "mt-8")}
          >
            Request Your Free Estimate
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <PreparationChecklist groups={groups} />
        </div>
      </section>

      <section className="bg-services-bg px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Prefer we handle the prep?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every estimate includes full furniture protection and surface
            prep on our end — this checklist is just for the parts that are
            easier for you to handle ahead of time.
          </p>
          <Link
            href="#booking"
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Request Your Free Estimate
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            More resources
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {getResources()
              .filter((r) => r.slug !== resource.slug)
              .map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {r.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
