import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Check, ChevronLeft, QrCode, ScanLine } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/check-in")({ head: () => ({ meta: [
  { title: "Cafe Check-in — Seatify" }, { name: "description", content: "Check in at your cafe to help keep live seat availability accurate." },
  { property: "og:title", content: "Cafe Check-in — Seatify" }, { property: "og:description", content: "Help the campus community with a quick Seatify check-in." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: CheckInPage });

function CheckInPage() {
  const [checkedIn, setCheckedIn] = useState(false);
  return <div className="mx-auto min-h-[calc(100vh-4.5rem)] max-w-lg px-5 py-8 sm:py-14"><Button asChild variant="ghost" className="px-0"><Link to="/cafes/$slug" params={{ slug: "feb-coffee-corner" }}><ChevronLeft className="size-4" /> Cafe details</Link></Button><div className="mt-7 text-center"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">FEB Coffee Corner</p><h1 className="mt-3 font-display text-4xl font-semibold">Welcome to your spot</h1><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">Your visit helps students know current availability.</p></div>
    <div className="relative mx-auto mt-9 aspect-square max-w-sm overflow-hidden rounded-xl bg-primary p-7 shadow-xl"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--secondary)_0,transparent_66%)] opacity-15" /><div className="relative grid h-full place-items-center rounded-lg border border-primary-foreground/25"><span className="absolute left-4 top-4 size-12 border-l-2 border-t-2 border-primary-foreground" /><span className="absolute right-4 top-4 size-12 border-r-2 border-t-2 border-primary-foreground" /><span className="absolute bottom-4 left-4 size-12 border-b-2 border-l-2 border-primary-foreground" /><span className="absolute bottom-4 right-4 size-12 border-b-2 border-r-2 border-primary-foreground" />{checkedIn ? <div className="text-center text-primary-foreground"><span className="mx-auto grid size-20 place-items-center rounded-full bg-success"><Check className="size-10" /></span><p className="mt-5 font-display text-2xl font-semibold">You're checked in</p></div> : <><QrCode className="size-28 text-primary-foreground/80" /><span className="absolute left-7 right-7 top-1/2 h-px bg-primary-foreground shadow-[0_0_16px_var(--primary-foreground)] motion-safe:animate-pulse" /></>}</div></div>
    <div className="mt-7 space-y-3"><Button size="lg" className="w-full" onClick={() => setCheckedIn(true)}><ScanLine className="size-5" />{checkedIn ? "Checked in successfully" : "Scan QR code"}</Button><Button variant="secondary" className="w-full"><Camera className="size-4" /> Open camera</Button></div><p className="mt-6 text-center text-xs leading-5 text-muted-foreground">Check out when you leave so others can find a seat.</p>
  </div>;
}