import febImage from "../assets/feb-coffee.jpg";
import libraryImage from "../assets/library-brew.jpg";
import studyImage from "../assets/the-study-club.jpg";

export type Cafe = {
  id: string;
  slug: string;
  name: string;
  image: string;
  occupied: number;
  capacity: number;
  rating: number;
  distance: string;
  noise: "Quiet" | "Moderate" | "Lively";
  facilities: string[];
  vibes: string[];
  status: string;
  recommendation: string;
  socialProof: string;
};

export const cafes: [Cafe, ...Cafe[]] = [
  {
    id: "fib-corner",
    slug: "fib-corner-coffee",
    name: "FIB Corner Coffee",
    image: libraryImage,
    occupied: 22,
    capacity: 50,
    rating: 4.8,
    distance: "240m",
    noise: "Quiet",
    facilities: ["WiFi", "Power outlets", "AC"],
    vibes: ["Quiet Study", "WFC Friendly"],
    status: "Plenty of seats",
    recommendation: "Quiet environment · Many power outlets · Good for studying",
    socialProof: "A favorite before morning lectures",
  },
  {
    id: "feb-corner",
    slug: "feb-coffee-corner",
    name: "FEB Coffee Corner",
    image: febImage,
    occupied: 20,
    capacity: 50,
    rating: 4.6,
    distance: "300m",
    noise: "Moderate",
    facilities: ["WiFi", "Power outlets", "Group tables"],
    vibes: ["WFC Friendly", "Group Discussion"],
    status: "30 seats available",
    recommendation: "Reliable WiFi · Spacious tables · Quick coffee",
    socialProof: "Popular among UI students",
  },
  {
    id: "library-brew",
    slug: "library-brew",
    name: "Library Brew",
    image: libraryImage,
    occupied: 31,
    capacity: 44,
    rating: 4.8,
    distance: "550m",
    noise: "Quiet",
    facilities: ["WiFi", "AC", "Power outlets"],
    vibes: ["Quiet Study", "WFC Friendly"],
    status: "13 seats available",
    recommendation: "Library-close · Soft lighting · Focus-friendly",
    socialProof: "Trending near the central library",
  },
  {
    id: "study-club",
    slug: "the-study-club",
    name: "The Study Club",
    image: studyImage,
    occupied: 24,
    capacity: 36,
    rating: 4.7,
    distance: "800m",
    noise: "Lively",
    facilities: ["WiFi", "Group tables", "Large tables"],
    vibes: ["Group Discussion", "Casual Hangout"],
    status: "12 seats available",
    recommendation: "Large tables · Flexible seating · Social energy",
    socialProof: "Students from other faculties are discovering this place",
  },
];

export const recentVisits = [
  { cafe: "FEB Coffee Corner", date: "Yesterday", duration: "3 hours", image: febImage },
  { cafe: "Library Brew", date: "Last Friday", duration: "2 hours", image: libraryImage },
];

export function getCafe(slug: string): Cafe {
  return cafes.find((cafe) => cafe.slug === slug) ?? cafes[0];
}