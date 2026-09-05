import { PaintRoller, Paintbrush, Droplet, Palette } from "lucide-react";
import { ProjectGalleryGrid } from "@/components/projects/project-gallery-grid";

import { getProjects } from "@/lib/projects";
import GoogleReviewsCarousel2 from "@/components/GoogleReviewCarousel2";
import { HeroHome } from "@/components/home/HeroHome";
import { OurProcess } from "@/components/home/OurProcessHome";
import { FaqSection } from "@/components/home/FaqHome";
import ServiceSectionZoomIn from "@/components/home/ServiceSectionZoomIn";
import WhyUs from "@/components/home/WhyUsHome";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SectionAccents } from "@/components/SectionAccents";

export default function Home() {
  return (
    <div className="">
      <HeroHome />
      {/* rest of contentent  */}
      <WhyUs />
      <section className="relative bg-services-bg py-16 md:py-24">
        <SectionAccents
          icons={[
            { icon: <PaintRoller className="h-full w-full" strokeWidth={1.25} />, position: "top-10 left-6 xl:left-16", size: "size-14", rotate: -12, duration: 7 },
            { icon: <Droplet className="h-full w-full" strokeWidth={1.25} />, position: "bottom-16 left-16 xl:left-28", size: "size-8", rotate: 8, duration: 5, delay: 0.5 },
            { icon: <Paintbrush className="h-full w-full" strokeWidth={1.25} />, position: "top-16 right-6 xl:right-16", size: "size-14", rotate: 15, duration: 6.5, delay: 0.2 },
            { icon: <Palette className="h-full w-full" strokeWidth={1.25} />, position: "bottom-12 right-14 xl:right-24", size: "size-10", rotate: -8, duration: 5.5, delay: 0.8 },
          ]}
        />
        <div className="relative mx-auto max-w-4xl px-4">
          <BeforeAfterSlider
            beforeImage="/images/home-hero-img.jpg"
            afterImage="/images/home-hero-img-after2.png"
            beforeLabel="Before"
            afterLabel="After"
            aspectClassName="aspect-[16/10]"
          />
        </div>
      </section>
      <ServiceSectionZoomIn />
      <GoogleReviewsCarousel2 />
      <OurProcess />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <ProjectGalleryGrid projects={getProjects()} />
        </div>
      </section>
      <FaqSection />
    </div>
  );
}
