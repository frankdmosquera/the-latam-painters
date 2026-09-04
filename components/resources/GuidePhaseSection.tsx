import { Lightbulb, TriangleAlert } from "lucide-react";
import { accentClasses } from "@/lib/data/serviceAccent";
import { cn } from "@/lib/utils";
import type { GuidePhase } from "@/lib/data/paintingGuideData";

export function GuidePhaseSection({ phase }: { phase: GuidePhase }) {
  const Icon = phase.icon;
  const accent = accentClasses[phase.accent];

  return (
    <section
      id={phase.id}
      className="relative scroll-mt-28 border-t border-border py-14 first:border-t-0 first:pt-0 md:py-20"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 right-0 text-[7rem] leading-none font-black tracking-tighter text-foreground opacity-[0.05] select-none md:text-[10rem]"
      >
        {phase.number}
      </span>

      <div className="relative flex items-start gap-4">
        <div
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-full",
            accent.badge,
          )}
        >
          <Icon className="size-6" />
        </div>
        <div>
          <p
            className={cn(
              "text-sm font-semibold tracking-widest uppercase",
              accent.text,
            )}
          >
            Phase {phase.number}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {phase.title}
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            {phase.summary}
          </p>
        </div>
      </div>

      <ol className="relative mt-8 flex flex-col gap-5 md:ml-16">
        {phase.steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                accent.badge,
              )}
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="relative mt-8 grid gap-4 md:ml-16 md:grid-cols-2">
        <div
          className={cn(
            "flex gap-3 rounded-xl bg-card p-4 ring-1",
            accent.ring,
          )}
        >
          <Lightbulb className={cn("mt-0.5 size-5 shrink-0", accent.text)} />
          <div>
            <p className="text-sm font-semibold text-foreground">Pro tip</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {phase.proTip}
            </p>
          </div>
        </div>

        <div className="flex gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4">
          <TriangleAlert className="mt-0.5 size-5 shrink-0 text-destructive" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              Common mistake
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {phase.commonMistake}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
