import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Star, Users } from "lucide-react";
import { useState } from "react";

import { Button } from "./ui/button";

export type Cafe = {
  name: string;
  image: string;
  occupied: number;
  capacity: number;
  rating: number;
  distance: string;
  tags: string[];
  status: string;
};

export function CafeCard({ cafe }: { cafe: Cafe }) {
  const [saved, setSaved] = useState(false);
  const seats = cafe.capacity - cafe.occupied;

  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={cafe.image} alt={`${cafe.name} interior`} width={1200} height={912} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <Button variant="secondary" size="icon" aria-label={saved ? "Remove from saved" : "Save cafe"} onClick={() => setSaved((value) => !value)} className="absolute right-3 top-3 bg-background/90">
          <Heart className={saved ? "size-4 fill-primary text-primary" : "size-4"} />
        </Button>
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-background/92 px-3 py-1.5 text-xs font-semibold shadow-sm">
          <span className="size-2 rounded-full bg-success motion-safe:animate-pulse" />
          {cafe.status}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-semibold">{cafe.name}</h2>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3.5" />{cafe.distance} from campus</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold"><Star className="size-4 fill-accent-strong text-accent-strong" />{cafe.rating}</span>
        </div>
        <div className="mt-5 flex items-center justify-between border-y border-border py-3">
          <span className="flex items-center gap-2 text-sm"><Users className="size-4 text-primary" />{cafe.occupied}/{cafe.capacity} occupied</span>
          <span className="text-sm font-semibold text-success-foreground">{seats} seats free</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {cafe.tags.map((tag) => <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{tag}</span>)}
        </div>
        <Button asChild className="mt-5 w-full"><Link to="/cafes/$slug" params={{ slug: "feb-coffee-corner" }}>See details</Link></Button>
      </div>
    </article>
  );
}