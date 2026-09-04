"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TocItem = { id: string; number: string; title: string };

export function GuideTableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Guide sections" className="w-full">
      <ul className="hidden flex-col gap-1 lg:flex">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                activeId === item.id
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <span className="font-mono text-xs">{item.number}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
        {items.map((item) => (
          <li key={item.id} className="shrink-0">
            <a
              href={`#${item.id}`}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors",
                activeId === item.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground",
              )}
            >
              <span className="font-mono">{item.number}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
