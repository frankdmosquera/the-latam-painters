import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { logo } from "@/lib/data/imagesData";
import { navigationItemsData2 } from "@/lib/data/navigationItemsData";

export function Footer() {
  const year = new Date().getFullYear();
  const links = navigationItemsData2.filter((item) => !item.items?.length);

  return (
    <footer className="bg-secondary-foreground text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-start gap-3">
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
        </div>

        <nav className="flex gap-6 text-sm font-medium text-white/80">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href ?? "/"}
              className="transition-colors hover:text-white"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <a
          href="tel:1234567890"
          className="flex items-center gap-2 text-sm font-semibold text-white"
        >
          <PhoneIcon className="size-4 text-primary-light" fill="var(--primary)" />
          123-456-7890
        </a>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © {year} The Latam Painters. All rights reserved.
      </div>
    </footer>
  );
}
