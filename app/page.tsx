import { ProjectGalleryGrid } from "@/components/gallery/project-gallery-grid";

import { getProjects } from "@/lib/projects";

import GoogleReviewsCarousel from "@/components/GoogleReviewCarousel";
import GoogleReviewsCarousel2 from "@/components/GoogleReviewCarousel2";
import { HeroHome } from "@/components/home/HeroHome";
import { OurProcess } from "@/components/home/OurProcessHome";
import ServiceSectionZoomIn from "@/components/home/ServiceSectionZoomIn";
import ServiceSectionHome from "@/components/home/ServiceSectionZoomIn";
import WhyUs from "@/components/home/WhyUsHome";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export default function Home() {
  return (
    <div className="">
      <HeroHome />
      {/* rest of contentent  */}
      <WhyUs />
      <BeforeAfterSlider
        beforeImage="/images/home-hero-img.jpg"
        afterImage="/images/home-hero-img-after2.png"
        beforeLabel="Before"
        afterLabel="After"
        aspectClassName="aspect-[16/10]"
      />
      <ServiceSectionZoomIn />
      <GoogleReviewsCarousel2 />
      <OurProcess />
      <ProjectGalleryGrid projects={getProjects()} />
      <div className="h-40 bg-black"></div>

      <div className="relative h-[2000px] w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      </div>
    </div>
  );
}
