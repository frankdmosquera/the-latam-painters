"use client";

import { useEffect, useState, useCallback } from "react";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Review = {
  name: string;
  initials: string;
  avatarUrl?: string;
  date: string;
  rating: number;
  service: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Maria Gonzalez",
    initials: "MG",
    date: "2 weeks ago",
    rating: 5,
    service: "Interior painting",
    text: "Great price and even better work. They repainted our whole main floor in two days and left everything spotless. Highly recommend LatamPainters.",
  },
  {
    name: "James Okafor",
    initials: "JO",
    date: "1 month ago",
    rating: 5,
    service: "Trim and doors",
    text: "Fast, professional, and the edges are perfectly clean. Communication was clear from the quote to the final walkthrough.",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    date: "1 month ago",
    rating: 4,
    service: "Ceiling painting",
    text: "Solid work on our ceilings, no drips or streaks anywhere. Took a little longer than expected but the result was worth it.",
  },
  {
    name: "David Chen",
    initials: "DC",
    date: "2 months ago",
    rating: 5,
    service: "Full home interior",
    text: "Booked them for our whole condo. Fair pricing, showed up on time both days, and the colour matching was spot on.",
  },
  {
    name: "Sofia Martinez",
    initials: "SM",
    date: "3 months ago",
    rating: 5,
    service: "Interior painting",
    text: "Best quote we got in Calgary and the fastest turnaround too. Painters were respectful of our home and cleaned up perfectly.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export default function GoogleReviewsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const average =
    Math.round(
      (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10,
    ) / 10;

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => onSelect(api));
    api.on("reInit", () => onSelect(api));
  }, [api, onSelect]);

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center bg-primary">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What our customers say
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <StarRating rating={Math.round(average)} />
            <span className="text-sm text-muted-foreground">
              {average} · {reviews.length}+ Google reviews
            </span>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          className="mt-10 w-full"
        >
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={i} className="md:basis-1/2">
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 shrink-0">
                      {review.avatarUrl && (
                        <AvatarImage src={review.avatarUrl} alt={review.name} />
                      )}
                      <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <StarRating rating={review.rating} />
                  </div>

                  <p className="mt-3 text-sm text-foreground flex-1">
                    {review.text}
                  </p>

                  <Badge variant="secondary" className="mt-4 w-fit">
                    {review.service}
                  </Badge>
                </div>
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
      </div>
    </section>
  );
}
