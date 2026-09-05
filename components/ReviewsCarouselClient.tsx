"use client";

import { useEffect, useState, useCallback, type ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function ReviewsCarouselClient({
  featured,
  remaining,
  totalCount,
}: {
  featured: ReactNode[];
  remaining: ReactNode[];
  totalCount: number;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    // Reading the Embla API's current snapshot once it's ready, then
    // subscribing to its own change events — external-system sync, not
    // state derived from props/state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => onSelect(api));
    api.on("reInit", () => onSelect(api));
  }, [api, onSelect]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        className="mt-10 w-full"
      >
        <CarouselContent>
          {featured.map((item, i) => (
            <CarouselItem key={i} className="md:basis-1/2">
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to review slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              current === i ? "w-6 bg-primary" : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>

      {remaining.length > 0 && (
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Hide reviews" : `See all ${totalCount} reviews`}
          </Button>
        </div>
      )}

      {showAll && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {remaining}
        </div>
      )}
    </>
  );
}
