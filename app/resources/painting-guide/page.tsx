import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ServiceHeroIcon } from "@/components/services/ServiceHeroIcon";
import { GuideProgressBar } from "@/components/resources/GuideProgressBar";
import { GuideTableOfContents } from "@/components/resources/GuideTableOfContents";
import { GuidePhaseSection } from "@/components/resources/GuidePhaseSection";
import { getPaintingGuidePhases } from "@/lib/data/paintingGuideData";
import { getResourceBySlug, getResources } from "@/lib/data/resourcesData";
import { accentClasses } from "@/lib/data/serviceAccent";
import { cn } from "@/lib/utils";

const resource = getResourceBySlug("painting-guide")!;

export const metadata: Metadata = {
  title: "The Complete Painting Guide | The Latam Painters",
  description:
    "A room-by-room walkthrough of prep, priming, painting, and cleanup, with the pro tips and common mistakes we see most often on the job.",
};

export default function PaintingGuidePage() {
  const phases = getPaintingGuidePhases();
  const Icon = resource.icon;
  const accent = accentClasses[resource.accent];
  const tocItems = phases.map((phase) => ({
    id: phase.id,
    number: phase.number,
    title: phase.title,
  }));

  return (
    <main>
      <GuideProgressBar />

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
            <span className="text-white">Painting Guide</span>
          </nav>

          <div className="flex justify-center">
            <ServiceHeroIcon
              icon={<Icon className="size-8 text-white" />}
              badgeClassName={accent.badge}
              animation={accent.animation}
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {resource.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {resource.tagline}
          </p>
          <p className="mt-3 text-sm font-medium text-white/50">
            {phases.length} phases · about a 6 minute read
          </p>

          <Link
            href="#booking"
            className={cn(buttonVariants({ size: "lg" }), "mt-8")}
          >
            Skip the DIY — Get a Free Estimate
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <GuideTableOfContents items={tocItems} />
          </aside>

          <div>
            {phases.map((phase) => (
              <GuidePhaseSection key={phase.id} phase={phase} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-services-bg px-4 py-16 md:py-24">
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
