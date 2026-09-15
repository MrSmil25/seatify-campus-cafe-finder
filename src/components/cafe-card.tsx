import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Star, Volume2 } from "lucide-react";

import { Button } from "./ui/button";
import { useSeatify } from "../lib/seatify-context";
import type { Cafe } from "../lib/seatify-data";

export type { Cafe } from "../lib/seatify-data";

export function CafeCard({ cafe }: { cafe: Cafe }) {
  const { savedCafeIds, toggleSaved } = useSeatify();
  const saved = savedCafeIds.includes(cafe.id);
  const seats = cafe.capacity - cafe.occupied;
  const percentage = Math.round((cafe.occupied / cafe.capacity) * 100);

  return (
    <article className="group animate-fade-in overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={cafe.image} alt={`${cafe.name} interior`} width={1200} height={912} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <Button variant="secondary" size="icon" aria-label={saved ? "Hapus dari tersimpan" : "Simpan cafe"} onClick={() => toggleSaved(cafe.id)} className="absolute right-3 top-3 bg-background/90 active:scale-90">
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
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3.5" />{cafe.distance} dari kampus</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold"><Star className="size-4 fill-accent-strong text-accent-strong" />{cafe.rating}</span>
        </div>
        <div className="mt-5 border-y border-border py-3">
          <div className="flex items-center justify-between text-xs"><span className="font-data">{percentage}% terisi</span><span className="font-data font-semibold text-success-foreground">{seats} kursi tersedia</span></div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-success transition-all duration-700" style={{ width: `${percentage}%` }} /></div>
          <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground"><Volume2 className="size-3.5" />Suasana {cafe.noise.toLowerCase()}</div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {(cafe.facilities ?? []).slice(0, 4).map((tag) => <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{tag === "Coffee" ? "☕ Coffee" : tag === "WiFi" ? "📶 WiFi" : tag === "Colokan" ? "🔌 Colokan" : tag === "Cocok WFC" ? "📚 Cocok WFC" : tag}</span>)}
        </div>
        <Button asChild className="mt-5 w-full"><Link to="/cafes/$slug" params={{ slug: cafe.slug }}>Lihat Detail</Link></Button>
      </div>
    </article>
  );
}