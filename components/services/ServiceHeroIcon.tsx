"use client";

import { motion } from "motion/react";

export function ServiceHeroIcon({
  icon,
  badgeClassName,
}: {
  icon: React.ReactNode;
  badgeClassName: string;
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
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.15 }}
        className={`flex size-16 items-center justify-center rounded-full ${badgeClassName}`}
      >
        {icon}
      </motion.div>
    </div>
  );
}
