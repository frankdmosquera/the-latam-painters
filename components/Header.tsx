import Image from "next/image";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import { logo } from "@/lib/data/imagesData";
import { HeaderScrollHider } from "./HeaderScrollHider";

function Header() {
  return (
    <HeaderScrollHider>
      <div className="container flex    items-center justify-between">
        {/* Left: Brand Logo */}
        <div
          className={`flex items-center gap-2 relative w-[calc(logoWidth * logoConstant)]  h-[calc(logoHeight * logoConstant)rem]`}
        >
          {/* <Image src={"/logo.png"} alt="" fill className="object-cover " /> */}
          <Image
            src={logo.url}
            alt={logo.alt}
            width={300}
            height={100}
            className="h-22 w-auto"
          />
        </div>
        {/* Center: Desktop Navigation Links */}
        <>
          <div className=" hidden lg:block">
            <NavBar />
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </>

        {/* Right: Phone Number & Main CTA */}
        <div className="hidden lg:flex items-center gap-4 ">
          <a
            href="tel:1234567890"
            className="hidden sm:flex gap-1 font-semibold  items-center "
          >
            <PhoneIcon className="text-primary-light" fill="var(--primary)" />
            <p className="text-primary-dark"> 123-456-7890</p>
          </a>
          <Button size="default" className="bg-secondary-foreground border ">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </HeaderScrollHider>
  );
}

export default Header;
