import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Reservation = {
  cafeId: string;
  cafeName: string;
  date: string;
  duration: number;
  people: string;
  code: string;
};

type SeatifyState = {
  hydrated: boolean;
  onboardingComplete: boolean;
  savedCafeIds: string[];
  reservation: Reservation | null;
  completeOnboarding: () => void;
  replayOnboarding: () => void;
  toggleSaved: (cafeId: string) => void;
  reserve: (reservation: Reservation) => void;
  cancelReservation: () => void;
};

const SeatifyContext = createContext<SeatifyState | undefined>(undefined);

export function SeatifyProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [savedCafeIds, setSavedCafeIds] = useState<string[]>([]);
  const [reservation, setReservation] = useState<Reservation | null>(null);

  useEffect(() => {
    setOnboardingComplete(window.localStorage.getItem("seatify-onboarded") === "true");
    try {
      setSavedCafeIds(JSON.parse(window.localStorage.getItem("seatify-saved") ?? "[]"));
      setReservation(JSON.parse(window.localStorage.getItem("seatify-reservation") ?? "null"));
    } catch {
      setSavedCafeIds([]);
      setReservation(null);
    }
    setHydrated(true);
  }, []);

  const value = useMemo<SeatifyState>(() => ({
    hydrated,
    onboardingComplete,
    savedCafeIds,
    reservation,
    completeOnboarding: () => {
      setOnboardingComplete(true);
      window.localStorage.setItem("seatify-onboarded", "true");
    },
    replayOnboarding: () => {
      setOnboardingComplete(false);
      window.localStorage.removeItem("seatify-onboarded");
    },
    toggleSaved: (cafeId) => setSavedCafeIds((current) => {
      const next = current.includes(cafeId) ? current.filter((id) => id !== cafeId) : [...current, cafeId];
      window.localStorage.setItem("seatify-saved", JSON.stringify(next));
      return next;
    }),
    reserve: (nextReservation) => {
      setReservation(nextReservation);
      window.localStorage.setItem("seatify-reservation", JSON.stringify(nextReservation));
    },
    cancelReservation: () => {
      setReservation(null);
      window.localStorage.removeItem("seatify-reservation");
    },
  }), [hydrated, onboardingComplete, reservation, savedCafeIds]);

  return <SeatifyContext.Provider value={value}>{children}</SeatifyContext.Provider>;
}

export function useSeatify() {
  const context = useContext(SeatifyContext);
  if (!context) throw new Error("useSeatify must be used within SeatifyProvider");
  return context;
}