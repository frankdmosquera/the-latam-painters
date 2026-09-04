"use client";

import { useMemo, useState } from "react";
import { Plus, Search, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FilterPill } from "./FilterPill";
import type { FaqCategory } from "@/lib/data/resourcesFaqData";

export function FaqExplorer({ categories }: { categories: FaqCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return categories
      .filter(
        (category) =>
          activeCategory === "all" || category.slug === activeCategory,
      )
      .map((category) => {
        const categoryMatches = normalizedQuery
          ? category.title.toLowerCase().includes(normalizedQuery)
          : false;

        return {
          ...category,
          faqs: category.faqs.filter((faq) =>
            normalizedQuery
              ? categoryMatches ||
                faq.question.toLowerCase().includes(normalizedQuery) ||
                faq.answer.toLowerCase().includes(normalizedQuery)
              : true,
          ),
        };
      })
      .filter((category) => category.faqs.length > 0);
  }, [categories, activeCategory, query]);

  const totalResults = filtered.reduce(
    (sum, category) => sum + category.faqs.length,
    0,
  );

  return (
    <div>
      <div className="mx-auto max-w-xl">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-full border border-border bg-card py-2.5 pr-10 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3.5 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <FilterPill
          label="All"
          active={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
        />
        {categories.map((category) => (
          <FilterPill
            key={category.slug}
            label={category.title}
            active={activeCategory === category.slug}
            onClick={() => setActiveCategory(category.slug)}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground">
            No questions match &ldquo;{query}&rdquo;. Try a different search.
          </p>
        )}

        {filtered.map((category) => (
          <div key={category.slug}>
            <h2 className="text-lg font-semibold text-foreground">
              {category.title}
            </h2>
            <Accordion className="mt-4 flex flex-col gap-3">
              {category.faqs.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question}
                  className="rounded-xl border border-border bg-card px-5 data-open:border-primary/50 data-open:bg-primary/5"
                >
                  <AccordionTrigger className="py-5 text-base font-semibold text-foreground **:data-[slot=accordion-trigger-icon]:hidden">
                    {faq.question}
                    <Plus className="ml-auto size-5 shrink-0 text-primary transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45" />
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      {totalResults > 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Showing {totalResults} question{totalResults === 1 ? "" : "s"}
        </p>
      )}
    </div>
  );
}
