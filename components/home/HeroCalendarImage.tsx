"use client";

import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function HeroCalendarImage() {
  const handleOpenCalendly = () => {
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/primo-painting/30min",
    });
  };

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <button
        onClick={handleOpenCalendly}
        className="mx-auto w-38 flex flex-col items-center animate-book-pulse will-change-transform [backface-visibility:hidden]"
      >
        <div>
          <Image
            src={"/svgs/calendar-img-flat-bottom.svg"}
            width={150}
            height={150}
            alt=""
            unoptimized
            className="h-auto w-full"
          />
        </div>
        <div
          className={cn(
            buttonVariants(),
            "mt-0 pt-0 relative pb-1 text-white rounded-t-none text-2xl -translate-y-0.5 translate-x-0",
          )}
        >
          Book Now
        </div>
      </button>
    </>
  );
}

// "use client";

// // import { buttonVariants } from "../ui/button";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Script from "next/script";
// import { buttonVariants } from "../ui/button";
// // import { buttonVariants } from "./ui/button";

// declare global {
//   interface Window {
//     Calendly?: {
//       initPopupWidget: (options: { url: string }) => void;
//     };
//   }
// }

// export function HeroCalendarImage() {
//   const handleOpenCalendly = () => {
//     window.Calendly?.initPopupWidget({
//       url: "https://calendly.com/primo-painting",
//     });
//   };

//   return (
//     <>
//       <link
//         href="https://assets.calendly.com/assets/external/widget.css"
//         rel="stylesheet"
//       />
//       <Script
//         src="https://assets.calendly.com/assets/external/widget.js"
//         strategy="lazyOnload"
//       />

//       <button
//         onClick={handleOpenCalendly}
//         className="mx-auto w-38 flex flex-col items-center animate-book-pulse will-change-transform [backface-visibility:hidden]"
//       >
//         <div>
//           <Image
//             src={"/svgs/calendar-img-flat-bottom.svg"}
//             width={150}
//             height={150}
//             alt=""
//             unoptimized
//             className="h-auto w-full"
//           />
//         </div>
//         <div
//           className={cn(
//             buttonVariants(),
//             "mt-0 pt-0 relative pb-1 text-white rounded-t-none text-2xl -translate-y-0.5 translate-x-0",
//           )}
//         >
//           Book Now
//         </div>
//       </button>
//     </>
//   );
// }

// // import { buttonVariants } from "../ui/button";
// // import { cn } from "@/lib/utils";
// // import Image from "next/image";
// // import { CalendlyButton } from "../CalendlyButton";

// // export function HeroCalendarImage() {
// //   return (
// //     <div className="mx-auto w-38 flex flex-col items-center animate-book-pulse will-change-transform [backface-visibility:hidden]">
// //       <div>
// //         <Image
// //           src={"/svgs/calendar-img-flat-bottom.svg"}
// //           width={150}
// //           height={150}
// //           alt=""
// //           unoptimized
// //           className="h-auto w-full"
// //         />
// //       </div>
// //       <div
// //         className={cn(
// //           buttonVariants(),
// //           "mt-0 pt-0 relative pb-1 text-white rounded-t-none text-2xl -translate-y-0.5 translate-x-0",
// //         )}
// //       >
// //         Book Now
// //       </div>
// //       <CalendlyButton />
// //     </div>
// //   );
// // }
