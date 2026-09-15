import { createFileRoute, Link } from "@tanstack/react-router";
import { ListFilter, LocateFixed, MapPin, Search } from "lucide-react";
import { useState } from "react";

import { CafeCard } from "../components/cafe-card";
import { Button } from "../components/ui/button";
import { cafes } from "../lib/seatify-data";

export const Route = createFileRoute("/explore")({
  head: () => ({ meta: [
    { title: "Explore Campus Cafes — Seatify" },
    { name: "description", content: "Explore nearby study cafes with live availability and practical facilities." },
    { property: "og:title", content: "Explore Campus Cafes — Seatify" },
    { property: "og:description", content: "Explore nearby study cafes with live availability." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ExplorePage,
});

const filters = ["Available Now", "WFC Friendly", "Has WiFi", "Has Power Outlet", "Quiet Place", "Group Friendly"];
function ExplorePage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["Available Now"]);
  const [query, setQuery] = useState("");
  const visible = cafes.filter((cafe) => cafe.name.toLowerCase().includes(query.toLowerCase()));
  const toggle = (filter: string) => setActiveFilters((current) => current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]);
  return <div className="mx-auto max-w-7xl px-5 py-9 lg:px-8 lg:py-14">
    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Your campus · Tuesday morning</p><h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Explore Cafes Near You</h1></div><p className="max-w-md text-sm leading-6 text-muted-foreground">Live atmosphere updates from cafes and the Seatify student community.</p></div>
    <div className="mt-8 flex h-13 items-center gap-3 rounded-lg border border-border bg-card px-4 shadow-lg"><Search className="size-5 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Find cafes, study spots..." aria-label="Find cafes" /><Button size="icon" variant="ghost" aria-label="Use current location"><LocateFixed className="size-5" /></Button></div>
    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">{filters.map((filter) => <button key={filter} onClick={() => toggle(filter)} className={activeFilters.includes(filter) ? "shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground" : "shrink-0 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"}>{filter}</button>)}</div>

    <div className="mt-8 grid gap-7 lg:grid-cols-[0.95fr_1.25fr]">
      <div className="relative min-h-[400px] overflow-hidden rounded-xl border border-border bg-secondary lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute left-[14%] top-[18%] h-1.5 w-3/4 rotate-12 rounded-full bg-background" /><div className="absolute left-[45%] top-0 h-full w-4 -rotate-12 bg-background" /><div className="absolute left-0 top-[66%] h-4 w-full -rotate-6 bg-background" />
        {[{l:"30%",t:"28%",n:"28",slug:cafes[0].slug},{l:"67%",t:"44%",n:"30",slug:cafes[1].slug},{l:"40%",t:"74%",n:"13",slug:cafes[2].slug}].map((point) => <div key={point.n} className="absolute" style={{left: point.l, top: point.t}}><Link to="/cafes/$slug" params={{ slug: point.slug }} className="flex items-center gap-1 rounded-full bg-primary px-3 py-2 text-xs font-bold text-primary-foreground shadow-xl"><MapPin className="size-3.5" />{point.n}</Link></div>)}
        <div className="absolute bottom-4 left-4 rounded-md bg-card px-4 py-3 text-xs shadow-lg"><strong>{cafes.length} cafes</strong><br /><span className="text-muted-foreground">within 1 km</span></div>
      </div>
      <div><div className="mb-4 flex items-center justify-between"><span className="text-sm text-muted-foreground">{visible.length} places match</span><Button variant="ghost" size="sm"><ListFilter className="size-4" /> Recommended</Button></div><div className="grid gap-5 sm:grid-cols-2">{visible.map((cafe) => <CafeCard key={cafe.name} cafe={cafe} />)}</div></div>
    </div>
  </div>;
}