"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChecklistGroup } from "@/lib/data/preparationData";

const STORAGE_KEY = "latam-painters:prep-checklist";

export function PreparationChecklist({
  groups,
}: {
  groups: ChecklistGroup[];
}) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // Deliberately deferred to an effect: localStorage is a browser-only
      // external store, so reading it during render would mismatch the
      // server-rendered (empty) markup during hydration.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored) setChecked(new Set(JSON.parse(stored)));
    } catch {
      // localStorage unavailable — checklist still works, just won't persist.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch {
      // localStorage unavailable — nothing to do, state still works this session.
    }
  }, [checked, hydrated]);

  const totalItems = groups.reduce((sum, group) => sum + group.items.length, 0);
  const completedItems = checked.size;
  const progress =
    totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div>
      <div className="mx-auto max-w-xl">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            {completedItems} of {totalItems} done
          </span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {completedItems > 0 && (
          <button
            type="button"
            onClick={() => setChecked(new Set())}
            className="mt-2 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Reset checklist
          </button>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-8">
        {groups.map((group) => (
          <div key={group.id}>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                {group.title}
              </h2>
              <span className="h-px flex-1 bg-border" />
            </div>

            <ul className="flex flex-col gap-2">
              {group.items.map((item) => {
                const isChecked = checked.has(item.id);

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-pressed={isChecked}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors",
                        isChecked
                          ? "border-primary/30 bg-primary/5"
                          : "border-border bg-card hover:bg-muted/50",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                          isChecked
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground/30",
                        )}
                      >
                        {isChecked && <Check className="size-3.5" />}
                      </span>
                      <span>
                        <span
                          className={cn(
                            "block font-medium text-foreground transition-colors",
                            isChecked && "text-muted-foreground line-through",
                          )}
                        >
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">
                          {item.detail}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
