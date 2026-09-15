import { ArrowLeft, ArrowRight, Coffee, MapPinned } from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/seatify-hero.jpg";
import libraryImage from "../assets/library-brew.jpg";
import studyImage from "../assets/the-study-club.jpg";
import { useSeatify } from "../lib/seatify-context";
import { Button } from "./ui/button";

const slides = [
  { image: heroImage, eyebrow: "Welcome to Seatify", title: "Never Waste Time Finding a Seat Again", text: "Discover study-friendly cafes around your campus with real-time seat availability.", icon: MapPinned },
  { image: libraryImage, eyebrow: "Plan with confidence", title: "Know Before You Go", text: "See available seats, queue times, and cafe atmosphere before arriving.", icon: Coffee },
  { image: studyImage, eyebrow: "Explore beyond the usual", title: "Support Hidden Gem Cafes", text: "Discover underrated cafes around campus while helping local businesses grow.", icon: Coffee },
];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const { completeOnboarding } = useSeatify();
  const slide = slides[step] ?? slides[0];
  const Icon = slide.icon;
  return <div className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground">
    <img key={slide.image} src={slide.image} alt="Students enjoying a campus cafe" width={1536} height={1024} className="absolute inset-0 h-full w-full animate-fade-in object-cover" />
    <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--primary)_0%,color-mix(in_oklab,var(--primary)_72%,transparent)_42%,color-mix(in_oklab,var(--primary)_12%,transparent)_100%)]" />
    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-7 lg:px-10 lg:py-10">
      <div className="flex items-center justify-between"><span className="font-display text-2xl font-semibold">Seatify</span><button onClick={completeOnboarding} className="text-sm opacity-75 transition-opacity hover:opacity-100">Skip</button></div>
      <div className="max-w-2xl pb-4 sm:pb-10">
        <div key={step} className="animate-fade-in"><span className="grid size-11 place-items-center rounded-full border border-primary-foreground/30 bg-primary/30 backdrop-blur"><Icon className="size-5" /></span><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] opacity-70">{slide.eyebrow}</p><h1 className="mt-3 font-display text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">{slide.title}</h1><p className="mt-5 max-w-xl text-base leading-7 opacity-80 sm:text-lg">{slide.text}</p></div>
        <div className="mt-9 flex items-center justify-between"><div className="flex gap-2">{slides.map((item, index) => <span key={item.title} className={index === step ? "h-1.5 w-8 rounded-full bg-primary-foreground" : "size-1.5 rounded-full bg-primary-foreground/35"} />)}</div><div className="flex gap-2">{step > 0 && <Button variant="secondary" size="icon" onClick={() => setStep((value) => value - 1)} aria-label="Previous onboarding screen"><ArrowLeft className="size-4" /></Button>}<Button size="lg" variant="secondary" onClick={() => step === slides.length - 1 ? completeOnboarding() : setStep((value) => value + 1)}>{step === 0 ? "Get Started" : step === slides.length - 1 ? "Start Exploring" : "Next"}<ArrowRight className="size-4" /></Button></div></div>
      </div>
    </div>
  </div>;
}