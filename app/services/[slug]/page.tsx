import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { OurProcess } from "@/components/home/OurProcessHome";
import { ServiceHeroIcon } from "@/components/services/ServiceHeroIcon";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { getServices, getServiceBySlug } from "@/lib/data/servicesData";
import { accentClasses } from "@/lib/data/serviceAccent";
import { cn } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  const title = `${service.title} in Calgary | The Latam Painters`;

  return {
    title,
    description: service.description,
    openGraph: { title, description: service.description },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const accent = accentClasses[service.accent];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
    areaServed: "Calgary, AB",
    provider: {
      "@type": "LocalBusiness",
      name: "The Latam Painters",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        className={cn(
          "relative overflow-hidden bg-linear-to-br px-4 py-20 md:py-28",
          accent.gradient,
        )}
      >
        <div className="pointer-events-none absolute -top-16 -right-16 size-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-white/5 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, white 0px, white 2px, transparent 2px, transparent 18px)",
          }}
        />

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
              href="/services"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="flex justify-center">
            <ServiceHeroIcon
              icon={<Icon className="size-8 text-white" />}
              badgeClassName={accent.badge}
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {service.tagline}
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
          <p className="text-lg leading-relaxed text-foreground">
            {service.description}
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What&apos;s included
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className={cn("mt-1 size-5 shrink-0", accent.text)}
                />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-services-bg px-4 py-16 md:py-24">
        <ServiceFaq service={service} />
      </section>

      <OurProcess />

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Explore our other services
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {getServices()
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {s.title}
                </Link>
              ))}
          </div>
          <Link
            href="/projects"
            className="mt-8 inline-block text-sm font-medium text-primary hover:underline"
          >
            See our completed projects →
          </Link>
        </div>
      </section>
    </main>
  );
}
