"use client";

import { motion, type TargetAndTransition } from "motion/react";

export type ServiceIconAnimation = "pop" | "spin" | "bounce" | "slide";

const badgeVariants: Record<
  ServiceIconAnimation,
  { initial: TargetAndTransition; animate: TargetAndTransition }
> = {
  pop: {
    initial: { opacity: 0, scale: 0, rotate: -180 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
  },
  spin: {
    initial: { opacity: 0, scale: 0.5, rotate: 90 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
  },
  bounce: {
    initial: { opacity: 0, y: -24 },
    animate: { opacity: 1, y: 0 },
  },
  slide: {
    initial: { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0 },
  },
};

const badgeTransitions: Record<
  ServiceIconAnimation,
  { type: "spring"; stiffness: number; damping: number; delay: number }
> = {
  pop: { type: "spring", stiffness: 220, damping: 16, delay: 0.15 },
  spin: { type: "spring", stiffness: 140, damping: 12, delay: 0.15 },
  bounce: { type: "spring", stiffness: 300, damping: 10, delay: 0.15 },
  slide: { type: "spring", stiffness: 260, damping: 20, delay: 0.15 },
};

export function ServiceHeroIcon({
  icon,
  badgeClassName,
  animation = "pop",
}: {
  icon: React.ReactNode;
  badgeClassName: string;
  animation?: ServiceIconAnimation;
}) {
  return (
    <div className="relative flex size-16 items-center justify-center">
      <motion.span
        aria-hidden
        initial={{ opacity: 0.6, scale: 0.4 }}
        animate={{ opacity: 0, scale: 2 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 rounded-full bg-white/40"
      />
      <motion.div
        initial={badgeVariants[animation].initial}
        animate={badgeVariants[animation].animate}
        transition={badgeTransitions[animation]}
        className={`flex size-16 items-center justify-center rounded-full ${badgeClassName}`}
      >
        {icon}
      </motion.div>
    </div>
  );
}
