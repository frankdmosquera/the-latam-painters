"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type AccentPlacement = {
  /** A rendered icon element, e.g. <PaintRoller className="h-full w-full" /> */
  icon: ReactNode;
  /** Tailwind position classes, e.g. "top-10 left-6 lg:left-10" */
  position: string;
  size?: string;
  rotate?: number;
  duration?: number;
  delay?: number;
};

/**
 * Subtle, low-opacity themed icons dropped into a section's side gutters for
 * visual texture. Hidden below `lg` since there's no gutter space to place
 * them in without overlapping content on narrower viewports.
 */
export function SectionAccents({
  icons,
  className,
}: {
  icons: AccentPlacement[];
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 hidden lg:block",
        className,
      )}
    >
      {icons.map(
        (
          { icon, position, size = "size-16", rotate = 0, duration = 6, delay = 0 },
          i,
        ) => (
          <motion.div
            key={i}
            className={cn("absolute text-primary/10", position, size)}
            initial={{ rotate, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        ),
      )}
    </div>
  );
}
