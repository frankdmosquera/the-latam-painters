import { descriptionHomePage, h1Homepage } from "@/lib/data/herosData";
import { homeHeroImg } from "@/lib/data/imagesData";
import Image from "next/image";
import { HeroHomeButtons } from "./HeroHomeButtons";

export function HeroHome() {
  return (
    <>
      {/* Image + overlay are nested together so they can never drift apart —
          both pinned via the same sticky box. */}
      <div className="sticky top-0 -z-10 h-160">
        <Image
          src={homeHeroImg.url}
          alt={homeHeroImg.alt}
          fill
          className="object-cover brightness-[.7] grayscale-50 blur-[.5px] sepia-20 hue-rotate-[-10deg]"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content is a separate, non-sticky sibling pulled up to overlap the
          hero box (-mt-160 matches the box's own h-160, so they can't drift
          either) — it scrolls away normally while the image behind it stays
          pinned. */}
      <div className="-mt-160 flex h-160 flex-col items-center justify-center px-4 text-center text-white">
        <div className="flex flex-col justify-center gap-8">
          <div className="">
            <h1 className="font-bold text-4xl leading-tight mb-2">
              {h1Homepage}
            </h1>
            <p className=" text-lg ">{descriptionHomePage}</p>
          </div>
          <HeroHomeButtons />
        </div>
      </div>
    </>
  );
}
