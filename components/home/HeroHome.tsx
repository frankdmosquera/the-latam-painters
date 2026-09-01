import { descriptionHomePage, h1Homepage } from "@/lib/data/herosData";
import { homeHeroImg } from "@/lib/data/imagesData";
import Image from "next/image";
import { HeroHomeButtons } from "./HeroHomeButtons";

export function HeroHome() {
  return (
    <>
      {/* we cant place this , the emty ones on the top as a div, cuz....the image issupose to be absolute close to header. if div, then image will be ansolute to the new div, or we could just take it out...but this way is easier for maintanabce cuz we can control the heighgt....unless we place height in contrans */}
      <div className=" sticky h-160 top-0 -z-10  ">
        <Image
          src={homeHeroImg.url}
          alt={homeHeroImg.alt}
          fill
          // sizes="100vw"
          className="object-cover brightness-[.7] grayscale-50 blur-[.5px]  sepia-20 hue-rotate-[-10deg]"
        />
      </div>
      {/* hero content  */}
      {/* hero content  */}
      <div
        className="absolute h-160 bg-black/30  text-white top-30 
         text-center    px-4  inset-x-0  flex  items-center justify-center 
         flex-col  w-full"
      >
        {/* left (mobile content) */}
        <div className="flex flex-col justify-center gap-8">
          {/* headings  */}
          <div className="">
            <h1 className="font-bold text-4xl leading-tight mb-2">
              {h1Homepage}
            </h1>
            <p className=" text-lg ">{descriptionHomePage}</p>
          </div>
          {/* buttons */}
          <HeroHomeButtons />
        </div>
        {/*right - video-maybe */}
        {/* right -video-maybe */}
        <div className="hidden"></div>
      </div>
    </>
  );
}
