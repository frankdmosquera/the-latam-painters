import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ServiceHeroIcon } from "@/components/services/ServiceHeroIcon";
import { PaletteExplorer } from "@/components/resources/PaletteExplorer";
import { colourMoods, getColourPalettes } from "@/lib/data/colourInspirationData";
import { getResourceBySlug, getResources } from "@/lib/data/resourcesData";
import { accentClasses } from "@/lib/data/serviceAccent";
import { cn } from "@/lib/utils";

const resource = getResourceBySlug("colour-inspiration")!;

export const metadata: Metadata = {
  title: "Colour Inspiration | The Latam Painters",
  description:
    "Curated colour palettes for walls, trim, and ceilings, organized by mood — copy the exact hex codes to bring to your estimate.",
};

export default function ColourInspirationPage() {
  const palettes = getColourPalettes();
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
            <span className="text-white">Colour Inspiration</span>
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
            Bring a Palette to Your Estimate
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Browse by mood
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every palette pairs a wall colour with trim, ceiling, and an
              accent that already work together — tap a hex code to copy it.
            </p>
          </div>

          <div className="mt-10">
            <PaletteExplorer palettes={palettes} moods={colourMoods} />
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
