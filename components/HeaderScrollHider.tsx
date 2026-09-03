"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";

export function HeaderScrollHider({ children }: { children: React.ReactNode }) {
  const isVisible = useScrollDirection();

  return (
    <header
      className={`sticky px-3 py-4 flex  justify-center items-center top-0 z-50 w-full border-b bg-background/80 backdrop-blur transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {children}
    </header>
  );
}
