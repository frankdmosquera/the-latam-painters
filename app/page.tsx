import { ProjectGalleryGrid } from "@/components/projects/project-gallery-grid";

import { getProjects } from "@/lib/projects";
import GoogleReviewsCarousel2 from "@/components/GoogleReviewCarousel2";
import { HeroHome } from "@/components/home/HeroHome";
import { OurProcess } from "@/components/home/OurProcessHome";
import { FaqSection } from "@/components/home/FaqHome";
import ServiceSectionZoomIn from "@/components/home/ServiceSectionZoomIn";
import WhyUs from "@/components/home/WhyUsHome";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export default function Home() {
  return (
    <div className="">
      <HeroHome />
      {/* rest of contentent  */}
      <WhyUs />
      <section className="bg-services-bg py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
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
