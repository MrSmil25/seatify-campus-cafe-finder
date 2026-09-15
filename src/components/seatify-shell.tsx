import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarDays, Compass, Heart, House, Menu, UserRound } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "./ui/button";

const navItems = [
  { label: "Home", to: "/", icon: House },
  { label: "Explore", to: "/explore", icon: Compass },
  { label: "Saved", to: "/saved", icon: Heart },
  { label: "Bookings", to: "/bookings", icon: CalendarDays },
  { label: "Profile", to: "/profile", icon: UserRound },
] as const;

export function SeatifyShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-2" aria-label="Seatify home">
            <span className="grid size-9 place-items-center rounded-md bg-primary font-display text-xl text-primary-foreground">S</span>
            <span className="font-display text-2xl font-semibold">Seatify</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            <Link to="/explore" className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-semibold text-foreground" }}>Explore</Link>
            <Link to="/saved" className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-semibold text-foreground" }}>Saved</Link>
            <Link to="/bookings" className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-semibold text-foreground" }}>Bookings</Link>
            <Link to="/partner" className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-semibold text-foreground" }}>For Cafe Partners</Link>
            <Button asChild size="sm"><Link to="/explore">Find a seat</Link></Button>
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon" aria-label="Open menu" onClick={() => setMenuOpen((open) => !open)}>
            <Menu className="size-5" />
          </Button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-4 md:hidden">
            <Link to="/partner" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium">For Cafe Partners</Link>
            <Link to="/check-in" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium">QR Check-in</Link>
          </div>
        )}
      </header>

      <main className="pb-24 md:pb-0">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
        <div className="mx-auto grid max-w-lg grid-cols-5">
          {navItems.map(({ label, to, icon: Icon }) => {
            const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
            return (
              <Link key={to} to={to} className={active ? "flex h-13 flex-col items-center justify-center gap-1 text-primary" : "flex h-13 flex-col items-center justify-center gap-1 text-muted-foreground"}>
                <Icon className="size-5" strokeWidth={active ? 2.3 : 1.7} />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}