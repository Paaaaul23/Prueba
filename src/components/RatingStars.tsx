import { Star, StarHalf } from "lucide-react";

export default function RatingStars({
  rating,
  reviewCount,
  size = 14,
}: {
  rating: number;
  reviewCount?: number;
  size?: number;
}) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5 text-copper-bright">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < full) return <Star key={i} size={size} fill="currentColor" />;
          if (i === full && half)
            return <StarHalf key={i} size={size} fill="currentColor" />;
          return <Star key={i} size={size} className="text-line-strong" />;
        })}
      </div>
      <span className="font-mono text-xs text-text-muted">
        {rating.toFixed(1)}
        {reviewCount ? ` · ${reviewCount.toLocaleString("es-ES")} opiniones` : ""}
      </span>
    </div>
  );
}
