import { descriptionHomePage, h1Homepage } from "@/lib/data/herosData";
import { homeHeroImg } from "@/lib/data/imagesData";
import Image from "next/image";
import { HeroHomeButtons } from "./HeroHomeButtons";

export function HeroHome() {
  return (
    <>
      {/* herp image  */}
      <div className=" sticky top-0 -z-10   h-140 ">
        <Image
          src={homeHeroImg.url}
          alt={homeHeroImg.alt}
          fill
          // sizes="100vw"
          className="object-cover brightness-[.7] grayscale-50 blur-[.5px]  sepia-20 hue-rotate-[-10deg]"
        />
      </div>
      {/* hero content */}
      <div className="absolute h-140 bg-black/30  text-white top-30  text-center px-4  inset-x-0  flex items-center justify-center flex-col gap-2 w-full">
        {/* headings  & Buttons */}
        <div className="flex flex-col justify-center ">
          {/* headings  */}
          <div className="">
            <h1 className="font-bold text-4xl leading-tight">{h1Homepage}</h1>
            <p className="mb-20 text-lg ">{descriptionHomePage}</p>
          </div>
          {/* buttons */}
          <HeroHomeButtons />
        </div>
        {/* hero form  */}
      </div>
    </>
  );
}
