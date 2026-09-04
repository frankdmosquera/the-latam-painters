"use client";

import { useMemo, useState } from "react";
import { CopySwatchButton } from "./CopySwatchButton";
import { FilterPill } from "./FilterPill";
import type {
  ColourMood,
  ColourPalette,
} from "@/lib/data/colourInspirationData";

export function PaletteExplorer({
  palettes,
  moods,
}: {
  palettes: ColourPalette[];
  moods: ColourMood[];
}) {
  const [activeMood, setActiveMood] = useState<ColourMood | "All">("All");

  const filtered = useMemo(
    () =>
      activeMood === "All"
        ? palettes
        : palettes.filter((palette) => palette.mood === activeMood),
    [palettes, activeMood],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <FilterPill
          label="All Palettes"
          active={activeMood === "All"}
          onClick={() => setActiveMood("All")}
        />
        {moods.map((mood) => (
          <FilterPill
            key={mood}
            label={mood}
            active={activeMood === mood}
            onClick={() => setActiveMood(mood)}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((palette) => (
          <PaletteCard key={palette.slug} palette={palette} />
        ))}
      </div>
    </div>
  );
}

function PaletteCard({ palette }: { palette: ColourPalette }) {
  return (
    <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 transition-shadow hover:shadow-lg md:p-6">
      <div className="flex h-28 gap-1 overflow-hidden rounded-xl md:h-36">
        {palette.swatches.map((swatch) => (
          <div
            key={swatch.role}
            style={{ backgroundColor: swatch.hex }}
            className="flex-1"
          />
        ))}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-foreground">{palette.name}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {palette.description}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
          {palette.mood}
        </span>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
        {palette.swatches.map((swatch) => (
          <li key={swatch.role} className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              {swatch.role}
            </span>
            <CopySwatchButton hex={swatch.hex} />
          </li>
        ))}
      </ul>
    </div>
  );
}
