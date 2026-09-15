import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, Coffee, MapPin, Sparkles, Users, Wifi } from "lucide-react";

import heroImage from "../assets/seatify-hero.jpg";
import febImage from "../assets/feb-coffee.jpg";
import libraryImage from "../assets/library-brew.jpg";
import studyImage from "../assets/the-study-club.jpg";
import { CafeCard, type Cafe } from "../components/cafe-card";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Seatify — Find Your Perfect Study Spot" },
    { name: "description", content: "Find study-friendly campus cafes with live seat and queue availability." },
    { property: "og:title", content: "Seatify — Find Your Perfect Study Spot" },
    { property: "og:description", content: "Find study-friendly campus cafes with live seat availability." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const cafes: Cafe[] = [
  { name: "FEB Coffee Corner", image: febImage, occupied: 18, capacity: 50, rating: 4.8, distance: "300m", tags: ["WiFi", "Power", "Quiet"], status: "Available now" },
  { name: "Library Brew", image: libraryImage, occupied: 31, capacity: 44, rating: 4.7, distance: "550m", tags: ["WFC friendly", "AC", "Quiet"], status: "13 seats free" },
  { name: "The Study Club", image: studyImage, occupied: 24, capacity: 36, rating: 4.6, distance: "800m", tags: ["Group tables", "WiFi"], status: "12 seats free" },
];

function Index() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-8 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="mb-8 max-w-4xl lg:mb-12">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"><Sparkles className="size-4 text-accent-strong" /> Campus life, made calmer</p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-8xl">Find Your Perfect Study Spot</h1>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base leading-7 text-muted-foreground lg:text-lg">Discover cafes around campus with available seats before you arrive.</p>
            <Button asChild size="lg"><Link to="/explore">Explore nearby <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <img src={heroImage} alt="Students studying in a warm campus cafe" width={1536} height={1024} fetchPriority="high" className="h-[54vh] min-h-[420px] w-full object-cover lg:h-[64vh]" />
          <div className="absolute inset-x-4 bottom-4 rounded-lg bg-background/94 p-5 shadow-xl backdrop-blur-md sm:left-auto sm:w-96 lg:bottom-7 lg:right-7 lg:p-6">
            <div className="flex items-start justify-between gap-3">
              <div><p className="text-xs text-muted-foreground">Closest to you · 3 min walk</p><h2 className="mt-1 font-display text-2xl font-semibold">FEB Coffee Corner</h2></div>
              <span className="mt-1 size-3 rounded-full bg-success motion-safe:animate-pulse" />
            </div>
            <div className="mt-5 flex items-end justify-between border-b border-border pb-4"><div><p className="text-sm font-semibold text-success-foreground">Available now</p><p className="mt-1 text-xs text-muted-foreground">18 / 50 seats occupied</p></div><strong className="font-display text-4xl">32</strong></div>
            <Button asChild variant="ghost" className="mt-3 w-full justify-between px-0"><Link to="/cafes/$slug" params={{ slug: "feb-coffee-corner" }}>View cafe <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/55 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-3 lg:px-8">
          {[{icon: MapPin, title: "Around your campus", text: "Curated spots within an easy walk."},{icon: Users, title: "Live seat updates", text: "Know the atmosphere before you go."},{icon: Wifi, title: "Made for focus", text: "Filter for WiFi, outlets, quiet and groups."}].map(({icon: Icon,title,text}) => <div key={title} className="flex gap-4"><Icon className="mt-1 size-5 shrink-0 text-primary" /><div><h2 className="font-display text-xl font-semibold">{title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="mb-9 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Open right now</p><h2 className="mt-2 font-display text-4xl font-semibold lg:text-5xl">Good places to settle in</h2></div><Button asChild variant="ghost" className="hidden sm:inline-flex"><Link to="/explore">See all <ArrowRight className="size-4" /></Link></Button></div>
        <div className="grid gap-5 md:grid-cols-3">{cafes.map((cafe) => <CafeCard key={cafe.name} cafe={cafe} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="grid overflow-hidden rounded-xl bg-primary text-primary-foreground lg:grid-cols-[1fr_1.1fr]">
          <div className="p-8 lg:p-14"><Coffee className="size-8 opacity-70" /><h2 className="mt-8 font-display text-4xl font-semibold lg:text-5xl">Arrive with confidence.</h2><p className="mt-4 max-w-md leading-7 opacity-75">Seatify blends live community check-ins with cafe updates, so your next study session starts without the guesswork.</p><div className="mt-8 flex items-center gap-3 text-sm"><Clock3 className="size-4" /> Fresh updates throughout the day</div></div>
          <img src={studyImage} alt="Students collaborating at a cafe table" width={1200} height={912} loading="lazy" className="h-full min-h-72 w-full object-cover opacity-90" />
        </div>
      </section>
    </>
  );
}
