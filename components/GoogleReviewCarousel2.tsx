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
import { Button } from "@/components/ui/button";

type Review = {
  name: string;
  initials: string;
  avatarUrl: string;
  date: string;
  rating: number;
  service: string;
  text: string;
};

// Fake dataset — swap for real Google Reviews API data later.
// Photos come from pravatar.cc (free placeholder headshots, no API key).
const names = [
  "Maria Gonzalez",
  "James Okafor",
  "Priya Sharma",
  "David Chen",
  "Sofia Martinez",
  "Liam Turner",
  "Ana Rodriguez",
  "Noah Bennett",
  "Camila Reyes",
  "Ethan Wallace",
  "Valentina Cruz",
  "Mason Brooks",
  "Isabella Torres",
  "Lucas Ferreira",
  "Emma Diaz",
  "Oliver Grant",
  "Lucia Fernandez",
  "Benjamin Ross",
  "Daniela Vargas",
  "Henry Coleman",
];
const services = [
  "Interior painting",
  "Trim and doors",
  "Ceiling painting",
  "Full home interior",
];
const texts = [
  "Great price and even better work. They repainted our whole main floor in two days and left everything spotless.",
  "Fast, professional, and the edges are perfectly clean. Communication was clear from quote to final walkthrough.",
  "Solid work on our ceilings, no drips or streaks anywhere. Took a bit longer than expected but worth it.",
  "Booked them for our whole condo. Fair pricing, showed up on time both days, and the colour matching was spot on.",
  "Best quote we got in Calgary and the fastest turnaround too. Very respectful of our home.",
  "Would hire again without thinking twice. Left the place cleaner than when they arrived.",
];

const reviews: Review[] = Array.from({ length: 20 }).map((_, i) => {
  const name = names[i % names.length];
  return {
    name,
    initials: name
      .split(" ")
      .map((n) => n[0])
      .join(""),
    avatarUrl: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
    date: `${(i % 6) + 1} ${i % 2 === 0 ? "weeks" : "months"} ago`,
    rating: i % 7 === 0 ? 4 : 5,
    service: services[i % services.length],
    text: texts[i % texts.length],
  };
});

const FEATURED_COUNT = 6;
const LOAD_BATCH = 6;

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

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="h-full rounded-2xl border border-border bg-card/90 backdrop-blur-sm p-6 shadow-sm flex flex-col">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarImage src={review.avatarUrl} alt={review.name} />
          <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
            {review.initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.date}</p>
        </div>
      </div>

      <div className="mt-3">
        <StarRating rating={review.rating} />
      </div>

      <p className="mt-3 text-sm text-foreground flex-1">{review.text}</p>

      <Badge variant="secondary" className="mt-4 w-fit">
        {review.service}
      </Badge>
    </div>
  );
}

export default function GoogleReviewsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [visibleCount, setVisibleCount] = useState(LOAD_BATCH);
  const [showAll, setShowAll] = useState(false);

  const featured = reviews.slice(0, FEATURED_COUNT);
  const remaining = reviews.slice(FEATURED_COUNT);

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
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* soft decorative shapes for depth — kept low and to the sides, clear of the header text */}
      <div className="pointer-events-none absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="relative z-10 text-center">
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
            {featured.map((review, i) => (
              <CarouselItem key={i} className="md:basis-1/2">
                <ReviewCard review={review} />
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
              {showAll ? "Hide reviews" : `See all ${reviews.length} reviews`}
            </Button>
          </div>
        )}

        {showAll && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {remaining.slice(0, visibleCount).map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        )}

        {showAll && visibleCount < remaining.length && (
          <div className="mt-8 text-center">
            <Button
              variant="secondary"
              onClick={() => setVisibleCount((v) => v + LOAD_BATCH)}
            >
              Load more reviews
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
