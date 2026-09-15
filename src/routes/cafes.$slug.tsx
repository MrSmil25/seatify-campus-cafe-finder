import { createFileRoute, Link } from "@tanstack/react-router";
import { AirVent, ArrowLeft, Clock3, Coffee, ExternalLink, Heart, MapPin, Navigation, PlugZap, Star, Users, Wifi } from "lucide-react";
import { useState } from "react";

import febImage from "../assets/feb-coffee.jpg";
import heroImage from "../assets/seatify-hero.jpg";
import studyImage from "../assets/the-study-club.jpg";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/cafes/$slug")({
  head: () => ({ meta: [
    { title: "FEB Coffee Corner — Live Seats | Seatify" },
    { name: "description", content: "View live occupancy, facilities, queue, and study conditions at FEB Coffee Corner." },
    { property: "og:title", content: "FEB Coffee Corner — Seatify" },
    { property: "og:description", content: "25 seats available now, with WiFi and power outlets." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: CafeDetail,
});

function CafeDetail() {
  const [reserved, setReserved] = useState(false);
  return <div className="pb-24">
    <div className="mx-auto max-w-7xl px-5 pb-5 pt-6 lg:px-8"><Button asChild variant="ghost" className="px-0"><Link to="/explore"><ArrowLeft className="size-4" /> Back to explore</Link></Button></div>
    <div className="mx-auto grid max-w-7xl gap-2 px-5 lg:grid-cols-[1.45fr_0.7fr] lg:px-8"><img src={febImage} alt="FEB Coffee Corner interior" width={1200} height={912} className="h-[46vh] min-h-96 w-full rounded-lg object-cover" /><div className="hidden gap-2 lg:grid"><img src={heroImage} alt="Study seating at the cafe" width={1536} height={1024} className="h-full min-h-0 w-full rounded-lg object-cover" /><img src={studyImage} alt="Group seating area" width={1200} height={912} className="h-full min-h-0 w-full rounded-lg object-cover" /></div></div>
    <div className="mx-auto mt-9 grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_380px] lg:px-8">
      <div><div className="flex items-start justify-between"><div><p className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="size-4" /> Faculty of Economics · 300m</p><h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">FEB Coffee Corner</h1><p className="mt-3 flex items-center gap-2 text-sm"><Star className="size-4 fill-accent-strong text-accent-strong" /><strong>4.6</strong><span className="text-muted-foreground">· 128 student reviews</span></p></div><Button variant="secondary" size="icon" aria-label="Save cafe"><Heart className="size-5" /></Button></div>
        <div className="mt-10 border-y border-border py-8"><div className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-success motion-safe:animate-pulse" /><span className="text-sm font-semibold text-success-foreground">Comfortable for studying</span></div><div className="mt-5 grid grid-cols-2 gap-5"><div><p className="text-sm text-muted-foreground">Current occupancy</p><p className="mt-1 font-display text-3xl font-semibold">25 / 50</p><p className="text-xs text-muted-foreground">seats occupied</p></div><div><p className="text-sm text-muted-foreground">Available now</p><p className="mt-1 font-display text-3xl font-semibold">25 seats</p><p className="text-xs text-muted-foreground">Plenty of room</p></div></div><div className="mt-6 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full w-1/2 rounded-full bg-success" /></div></div>
        <section className="mt-10"><h2 className="font-display text-3xl font-semibold">Everything you need</h2><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">{[{i:Coffee,t:"Specialty coffee"},{i:Wifi,t:"Fast WiFi"},{i:PlugZap,t:"Power outlets"},{i:AirVent,t:"Air conditioned"},{i:Users,t:"Group tables"}].map(({i:Icon,t}) => <div key={t} className="flex items-center gap-3 rounded-md border border-border bg-card p-4 text-sm"><Icon className="size-5 text-primary" />{t}</div>)}</div></section>
      </div>
      <aside className="h-fit rounded-lg border border-border bg-card p-6 shadow-lg lg:sticky lg:top-24"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Live queue</p><div className="mt-4 flex items-end justify-between"><div><p className="font-display text-4xl font-semibold">3 people</p><p className="mt-1 text-sm text-muted-foreground">currently waiting</p></div><Users className="size-7 text-primary" /></div><div className="my-6 flex items-center gap-3 border-y border-border py-4 text-sm"><Clock3 className="size-5 text-accent-strong" /><span><strong>~15 minutes</strong><br /><span className="text-xs text-muted-foreground">estimated wait</span></span></div><Button className="w-full" size="lg" onClick={() => setReserved(true)}>{reserved ? "Seat reserved" : "Reserve seat"}</Button><Button asChild className="mt-3 w-full" variant="secondary"><Link to="/check-in"><Navigation className="size-4" /> Navigate</Link></Button><p className="mt-4 text-center text-xs text-muted-foreground">Reservations are held for 15 minutes</p></aside>
    </div>
  </div>;
}