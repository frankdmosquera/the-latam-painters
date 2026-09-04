"use client";

import { useMemo, useState } from "react";
import { CopySwatchButton } from "./CopySwatchButton";
import { FilterPill } from "./FilterPill";
import type { PaintBrand } from "@/lib/data/colourInspirationData";

export function PaletteExplorer({ brands }: { brands: PaintBrand[] }) {
  const [activeBrand, setActiveBrand] = useState<string>("all");

  const filtered = useMemo(
    () =>
      activeBrand === "all"
        ? brands
        : brands.filter((brand) => brand.slug === activeBrand),
    [brands, activeBrand],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <FilterPill
          label="All Brands"
          active={activeBrand === "all"}
          onClick={() => setActiveBrand("all")}
        />
        {brands.map((brand) => (
          <FilterPill
            key={brand.slug}
            label={brand.name}
            active={activeBrand === brand.slug}
            onClick={() => setActiveBrand(brand.slug)}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-14">
        {filtered.map((brand) => (
          <div key={brand.slug}>
            <div className="text-center">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {brand.name}
              </h3>
              <p className="mx-auto mt-1 max-w-lg text-sm text-muted-foreground">
                {brand.description}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {brand.colors.map((color) => (
                <div
                  key={color.code}
                  className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10"
                >
                  <div
                    style={{ backgroundColor: color.hex }}
                    className="h-20 w-full"
                  />
                  <div className="flex flex-col gap-1 p-3">
                    <p className="text-sm font-semibold text-foreground">
                      {color.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {color.code}
                    </p>
                    <CopySwatchButton hex={color.hex} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
