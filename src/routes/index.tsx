import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bell, Clock3, Flame, MapPin, Sparkles } from "lucide-react";
import { CafeCard } from "../components/cafe-card";
import { Onboarding } from "../components/onboarding";
import { Button } from "../components/ui/button";
import { cafes, getCafe, recentVisits, type Cafe } from "../lib/seatify-data";
import { useSeatify } from "../lib/seatify-context";

export const Route = createFileRoute("/")({ head: () => ({ meta: [
  { title: "Seatify — Your Campus Study Companion" }, { name: "description", content: "Personalized cafe recommendations with live seats around Universitas Indonesia." },
  { property: "og:title", content: "Seatify — Your Campus Study Companion" }, { property: "og:description", content: "Find your ideal study cafe with live availability." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Home });

function Home() {
  const { hydrated, onboardingComplete } = useSeatify();
  if (!hydrated) return <div className="min-h-screen bg-background" />;
  if (!onboardingComplete) return <Onboarding />;
  const featured = getCafe("fib-corner-coffee");
  return <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-14">
    <header className="flex items-start justify-between"><div><p className="text-sm text-muted-foreground">Good Morning, Student 👋</p><h1 className="mt-1 font-display text-4xl font-semibold sm:text-5xl">Find your flow today.</h1><p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" />Universitas Indonesia</p></div><Button size="icon" variant="secondary" aria-label="Notifications"><Bell className="size-5" /></Button></header>
    <section className="mt-9"><div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"><Sparkles className="size-4 text-accent-strong" />Perfect spots for you today</div><div className="group relative min-h-[470px] overflow-hidden rounded-xl lg:min-h-[560px]"><img src={featured.image} alt="FIB Corner Coffee interior" width={1200} height={912} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" /><div className="absolute inset-0 bg-[linear-gradient(to_top,var(--primary)_0%,color-mix(in_oklab,var(--primary)_50%,transparent)_48%,transparent_82%)]" /><div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground sm:p-9"><div className="flex items-center gap-2 text-sm font-semibold"><span className="size-2.5 rounded-full bg-success motion-safe:animate-pulse" />Plenty of seats available</div><div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><h2 className="font-display text-4xl font-semibold sm:text-5xl">{featured.name}</h2><p className="mt-2 text-sm opacity-75">28 seats available · {featured.distance} away · ★ {featured.rating}</p><div className="mt-4 flex flex-wrap gap-2">{["Quiet environment", "Many power outlets", "Good for studying"].map((tag) => <span key={tag} className="rounded-full border border-primary-foreground/25 bg-primary/30 px-3 py-1.5 text-xs backdrop-blur">{tag}</span>)}</div></div><Button asChild variant="secondary" size="lg"><Link to="/cafes/$slug" params={{ slug: featured.slug }}>View cafe <ArrowRight className="size-4" /></Link></Button></div></div></div></section>
    <RecommendationRow title="Available Now" subtitle="A seat is waiting" cafes={cafes.slice(1,4)} />
    <RecommendationRow title="Trending Around Campus" subtitle="Popular with UI students" cafes={[getCafe("library-brew"), getCafe("feb-coffee-corner"), getCafe("fib-corner-coffee")]} icon={<Flame className="size-4 text-accent-strong" />} />
    <RecommendationRow title="Hidden Gems" subtitle="Worth walking a little farther" cafes={[getCafe("the-study-club"), getCafe("fib-corner-coffee"), getCafe("library-brew")]} />
    <section className="mt-14 pb-6"><div className="flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Your recent visits</p><h2 className="mt-2 font-display text-3xl font-semibold">Keep your momentum</h2></div></div><div className="mt-5 grid gap-3 sm:grid-cols-2">{recentVisits.map((visit) => <div key={visit.cafe} className="flex items-center gap-4 rounded-lg border border-border bg-card p-3"><img src={visit.image} alt="" width={1200} height={912} loading="lazy" className="size-18 rounded-md object-cover" /><div className="flex-1"><p className="font-display text-lg font-semibold">{visit.cafe}</p><p className="mt-1 text-xs text-muted-foreground">{visit.date}</p></div><span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock3 className="size-3.5" />{visit.duration}</span></div>)}</div></section>
  </div>;
}

function RecommendationRow({ title, subtitle, cafes: items, icon }: { title: string; subtitle: string; cafes: Cafe[]; icon?: React.ReactNode }) {
  return <section className="mt-14"><div className="mb-5 flex items-end justify-between"><div><p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{icon}{subtitle}</p><h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{title}</h2></div><Button asChild variant="ghost" className="hidden sm:inline-flex"><Link to="/explore">See all <ArrowRight className="size-4" /></Link></Button></div><div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-3">{items.map((cafe) => <div key={cafe.id} className="w-[82vw] max-w-sm shrink-0 snap-start sm:w-auto sm:max-w-none"><CafeCard cafe={cafe} /></div>)}</div></section>;
}