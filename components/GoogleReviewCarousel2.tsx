import { ReviewCard, StarRating, type Review } from "@/components/ReviewCard";
import { ReviewsCarouselClient } from "@/components/ReviewsCarouselClient";

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

export default function GoogleReviewsCarousel() {
  const featured = reviews.slice(0, FEATURED_COUNT);
  const remaining = reviews.slice(FEATURED_COUNT);

  const average =
    Math.round(
      (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10,
    ) / 10;

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

        <ReviewsCarouselClient
          featured={featured.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
          remaining={remaining.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
          totalCount={reviews.length}
        />
      </div>
    </section>
  );
}
