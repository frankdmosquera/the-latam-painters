"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { CopySwatchButton } from "./CopySwatchButton";
import { FilterPill } from "./FilterPill";
import type {
  CuratedPaletteSet,
  SetRole,
} from "@/lib/data/colourInspirationData";

const ANY = "any";

function distinctByRole(sets: CuratedPaletteSet[], role: SetRole) {
  const seen = new Map<string, string>();
  for (const set of sets) {
    const color = set.colors.find((c) => c.role === role);
    if (color && !seen.has(color.name)) seen.set(color.name, color.hex);
  }
  return Array.from(seen, ([name, hex]) => ({ name, hex })).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

function RoleFilter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { name: string; hex: string }[];
}) {
  const selected = options.find((o) => o.name === value);

  return (
    <label className="flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pr-3 pl-1.5 text-sm">
      <span
        aria-hidden
        className="size-5 shrink-0 rounded-full ring-1 ring-foreground/10"
        style={{ backgroundColor: selected?.hex ?? "transparent" }}
      />
      <span className="sr-only">{label} color</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="bg-transparent text-foreground focus:outline-none"
      >
        <option value={ANY}>{label}: Any</option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export function CuratedPaletteSets({ sets }: { sets: CuratedPaletteSet[] }) {
  const brands = useMemo(
    () => Array.from(new Set(sets.map((set) => set.brand))),
    [sets],
  );
  const [activeBrand, setActiveBrand] = useState<string>("all");
  const [wallFilter, setWallFilter] = useState(ANY);
  const [trimFilter, setTrimFilter] = useState(ANY);
  const [accentFilter, setAccentFilter] = useState(ANY);

  function selectBrand(brand: string) {
    setActiveBrand(brand);
    setWallFilter(ANY);
    setTrimFilter(ANY);
    setAccentFilter(ANY);
  }

  const brandFiltered = useMemo(
    () =>
      activeBrand === "all"
        ? sets
        : sets.filter((set) => set.brand === activeBrand),
    [sets, activeBrand],
  );

  const wallOptions = useMemo(
    () => distinctByRole(brandFiltered, "Wall"),
    [brandFiltered],
  );
  const trimOptions = useMemo(
    () => distinctByRole(brandFiltered, "Trim"),
    [brandFiltered],
  );
  const accentOptions = useMemo(
    () => distinctByRole(brandFiltered, "Accent"),
    [brandFiltered],
  );

  const filtered = useMemo(
    () =>
      brandFiltered.filter((set) => {
        const hasRole = (role: SetRole, name: string) =>
          name === ANY || set.colors.some((c) => c.role === role && c.name === name);

        return (
          hasRole("Wall", wallFilter) &&
          hasRole("Trim", trimFilter) &&
          hasRole("Accent", accentFilter)
        );
      }),
    [brandFiltered, wallFilter, trimFilter, accentFilter],
  );

  const hasColorFilter =
    wallFilter !== ANY || trimFilter !== ANY || accentFilter !== ANY;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <FilterPill
          label={`All Brands (${sets.length})`}
          active={activeBrand === "all"}
          onClick={() => selectBrand("all")}
        />
        {brands.map((brand) => (
          <FilterPill
            key={brand}
            label={`${brand} (${sets.filter((s) => s.brand === brand).length})`}
            active={activeBrand === brand}
            onClick={() => selectBrand(brand)}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <RoleFilter
          label="Wall"
          value={wallFilter}
          onChange={setWallFilter}
          options={wallOptions}
        />
        <RoleFilter
          label="Trim"
          value={trimFilter}
          onChange={setTrimFilter}
          options={trimOptions}
        />
        <RoleFilter
          label="Accent"
          value={accentFilter}
          onChange={setAccentFilter}
          options={accentOptions}
        />
        {hasColorFilter && (
          <button
            type="button"
            onClick={() => {
              setWallFilter(ANY);
              setTrimFilter(ANY);
              setAccentFilter(ANY);
            }}
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <X className="size-3.5" /> Clear
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">
          No themes match that combination. Try clearing a filter.
        </p>
      ) : (
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
                          {color.name}
                          {color.code && (
                            <>
                              {" "}
                              <span className="text-muted-foreground">
                                {color.code}
                              </span>
                            </>
                          )}
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
      )}
    </div>
  );
}
