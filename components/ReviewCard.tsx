import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type Review = {
  name: string;
  initials: string;
  avatarUrl: string;
  date: string;
  rating: number;
  service: string;
  text: string;
};

export function StarRating({ rating }: { rating: number }) {
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

export function ReviewCard({ review }: { review: Review }) {
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
