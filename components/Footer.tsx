import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { logo } from "@/lib/data/imagesData";
import { getServices } from "@/lib/data/servicesData";
import { getResources } from "@/lib/data/resourcesData";

const companyLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const services = getServices();
  const resources = getResources();

  const serviceLinks = [
    { title: "All Services", href: "/services" },
    ...services.map((service) => ({
      title: service.title,
      href: `/services/${service.slug}`,
    })),
  ];

  const resourceLinks = [
    { title: "All Resources", href: "/resources" },
    ...resources.map((resource) => ({
      title: resource.title,
      href: `/resources/${resource.slug}`,
    })),
  ];

  return (
    <footer className="bg-secondary-foreground text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col items-start gap-3 sm:col-span-1">
            <div className="rounded-md bg-white px-3 py-1.5">
              <Image
                src={logo.url}
                alt={logo.alt}
                width={140}
                height={46}
                className="h-8 w-auto"
              />
            </div>
            <p className="max-w-xs text-sm text-white/60">
              Premium painting at competitive prices, serving Calgary and
              surrounding communities.
            </p>
            <a
              href="tel:1234567890"
              className="flex items-center gap-2 text-sm font-semibold text-white"
            >
              <PhoneIcon
                className="size-4 text-primary-light"
                fill="var(--primary)"
              />
              123-456-7890
            </a>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © {year} The Latam Painters. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href + link.title}>
            <Link
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
