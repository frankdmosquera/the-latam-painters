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
    </div>
  );
}
