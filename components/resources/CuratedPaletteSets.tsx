"use client";

import { useMemo, useState } from "react";
import { CopySwatchButton } from "./CopySwatchButton";
import { FilterPill } from "./FilterPill";
import type { CuratedPaletteSet } from "@/lib/data/colourInspirationData";

export function CuratedPaletteSets({ sets }: { sets: CuratedPaletteSet[] }) {
  const brands = useMemo(
    () => Array.from(new Set(sets.map((set) => set.brand))),
    [sets],
  );
  const [activeBrand, setActiveBrand] = useState<string>("all");

  const filtered = useMemo(
    () =>
      activeBrand === "all"
        ? sets
        : sets.filter((set) => set.brand === activeBrand),
    [sets, activeBrand],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <FilterPill
          label={`All Brands (${sets.length})`}
          active={activeBrand === "all"}
          onClick={() => setActiveBrand("all")}
        />
        {brands.map((brand) => (
          <FilterPill
            key={brand}
            label={`${brand} (${sets.filter((s) => s.brand === brand).length})`}
            active={activeBrand === brand}
            onClick={() => setActiveBrand(brand)}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((set) => (
          <div
            key={set.slug}
            className="flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10"
          >
            <div className="flex h-24 gap-1">
              {set.colors.map((color) => (
                <div
                  key={color.role}
                  style={{ backgroundColor: color.hex }}
                  className="flex-1"
                />
              ))}
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <div>
                <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                  {set.brand}
                </p>
                <h3 className="mt-0.5 font-semibold text-foreground">
                  {set.name}
                </h3>
              </div>

              <ul className="flex flex-col gap-2.5">
                {set.colors.map((color) => (
                  <li
                    key={color.role}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                        {color.role}
                      </span>
                      <span className="text-sm text-foreground">
                        {color.name}{" "}
                        <span className="text-muted-foreground">
                          {color.code}
                        </span>
                      </span>
                    </div>
                    <CopySwatchButton hex={color.hex} />
                  </li>
                ))}
              </ul>

              <p className="mt-auto text-xs text-muted-foreground">
                {set.source}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
