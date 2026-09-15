import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { CafeCard } from "../components/cafe-card";
import { Button } from "../components/ui/button";
import { cafes } from "../lib/seatify-data";
import { useSeatify } from "../lib/seatify-context";

export const Route = createFileRoute("/saved")({ head: () => ({ meta: [{ title: "Saved Cafes — Seatify" },{ name: "description", content: "Your saved campus cafes and study spots." },{ property: "og:title", content: "Saved Cafes — Seatify" },{ property: "og:description", content: "Your saved campus study spots." },{ property: "og:type", content: "website" },{ name: "twitter:card", content: "summary_large_image" }] }), component: Saved });

function Saved() {
  const { savedCafeIds } = useSeatify();
  const saved = cafes.filter((cafe) => savedCafeIds.includes(cafe.id));
  if (!saved.length) return <div className="mx-auto grid min-h-[65vh] max-w-md place-items-center px-5 text-center"><div><span className="mx-auto grid size-16 place-items-center rounded-full bg-secondary"><Heart className="size-7 text-primary" /></span><h1 className="mt-6 font-display text-4xl font-semibold">No saved cafes yet</h1><p className="mt-3 text-sm leading-6 text-muted-foreground">Find your favorite study spot and save it here.</p><Button asChild className="mt-7"><Link to="/explore">Explore cafes</Link></Button></div></div>;
  return <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Your collection</p><h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Saved cafes</h1><p className="mt-3 text-sm text-muted-foreground">Live availability from the places you want to return to.</p><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{saved.map((cafe) => <CafeCard key={cafe.id} cafe={cafe} />)}</div></div>;
}