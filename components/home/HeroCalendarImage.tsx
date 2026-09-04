"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroCalendarImage() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // PopupModal reads `document.body` as its rootElement, which doesn't
    // exist during SSR — deferred to an effect so it only renders client-side.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mx-auto relative w-36  flex flex-col items-center animate-book-pulse "
      >
        <Image
          src={"/svgs/calendar-rounded-oklch-final.svg"}
          width={100}
          height={100}
          alt=""
          unoptimized
          className="h-auto w-full"
        />
        <div className={cn(" absolute bottom-2   text-white text-lg bg-none")}>
          Book Now
        </div>
      </button>

      {mounted && (
        <PopupModal
          url="https://calendly.com/primo-painting/30min"
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
          rootElement={document.body}
        />
      )}
    </>
  );
}
