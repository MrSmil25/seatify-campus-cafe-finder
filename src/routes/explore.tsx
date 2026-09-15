import { createFileRoute, Link } from "@tanstack/react-router";
import { ListFilter, LocateFixed, MapPin, Search } from "lucide-react";
import { useState } from "react";

import { CafeCard } from "../components/cafe-card";
import { Button } from "../components/ui/button";
import { cafes, getCafe } from "../lib/seatify-data";

export const Route = createFileRoute("/explore")({
  head: () => ({ meta: [
    { title: "Jelajahi Cafe Sekitar UI — Seatify" },
    { name: "description", content: "Jelajahi cafe untuk belajar dengan ketersediaan kursi dan fasilitas terkini." },
    { property: "og:title", content: "Jelajahi Cafe Sekitar UI — Seatify" },
    { property: "og:description", content: "Temukan cafe belajar di sekitar kampus dengan kursi tersedia." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ExplorePage,
});

const filters = ["Tersedia Sekarang", "WFC Friendly", "Tenang", "Ada Colokan", "Group Discussion"];
function ExplorePage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["Tersedia Sekarang"]);
  const [query, setQuery] = useState("");
  const visible = cafes.filter((cafe) => cafe.name.toLowerCase().includes(query.toLowerCase()));
  const toggle = (filter: string) => setActiveFilters((current) => current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]);
  return <div className="mx-auto max-w-7xl px-5 py-9 lg:px-8 lg:py-14">
    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="text-xs font-semibold uppercase text-muted-foreground">Sekitar kampus · Selasa pagi</p><h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Jelajahi Cafe Sekitar</h1></div><p className="max-w-md text-sm leading-6 text-muted-foreground">Informasi suasana terkini dari cafe dan komunitas mahasiswa Seatify.</p></div>
    <div className="mt-8 flex h-13 items-center gap-3 rounded-lg border border-border bg-card px-4 shadow-lg"><Search className="size-5 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Cari tempat belajar atau nongkrong..." aria-label="Cari cafe" /><Button size="icon" variant="ghost" aria-label="Gunakan lokasi saat ini"><LocateFixed className="size-5" /></Button></div>
    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">{filters.map((filter) => <Button key={filter} onClick={() => toggle(filter)} variant={activeFilters.includes(filter) ? "primary" : "secondary"} size="sm" className="shrink-0 rounded-full">{filter}</Button>)}</div>

    <div className="mt-8 grid gap-7 lg:grid-cols-[0.95fr_1.25fr]">
      <div className="relative min-h-[400px] overflow-hidden rounded-xl border border-border bg-secondary lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute left-[14%] top-[18%] h-1.5 w-3/4 rotate-12 rounded-full bg-background" /><div className="absolute left-[45%] top-0 h-full w-4 -rotate-12 bg-background" /><div className="absolute left-0 top-[66%] h-4 w-full -rotate-6 bg-background" />
        {[{l:"30%",t:"28%",n:"28",slug:getCafe("fib-corner-coffee").slug},{l:"67%",t:"44%",n:"30",slug:getCafe("feb-coffee-corner").slug},{l:"40%",t:"74%",n:"13",slug:getCafe("library-brew").slug}].map((point) => <div key={point.n} className="absolute" style={{left: point.l, top: point.t}}><Link to="/cafes/$slug" params={{ slug: point.slug }} className="flex items-center gap-1 rounded-full bg-primary px-3 py-2 text-xs font-bold text-primary-foreground shadow-xl"><MapPin className="size-3.5" />{point.n}</Link></div>)}
        <div className="absolute bottom-4 left-4 rounded-md bg-card px-4 py-3 text-xs shadow-lg"><strong className="font-data">{cafes.length} cafe</strong><br /><span className="text-muted-foreground">dalam radius 1 km</span></div>
      </div>
      <div><div className="mb-4 flex items-center justify-between"><span className="font-data text-sm text-muted-foreground">{visible.length} tempat ditemukan</span><Button variant="ghost" size="sm"><ListFilter className="size-4" /> Rekomendasi</Button></div><div className="grid gap-5 sm:grid-cols-2">{visible.map((cafe) => <CafeCard key={cafe.name} cafe={cafe} />)}</div></div>
    </div>
  </div>;
}