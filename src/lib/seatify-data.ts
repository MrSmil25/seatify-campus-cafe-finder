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
  noise: "Tenang" | "Sedang" | "Ramai";
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
    noise: "Tenang",
    facilities: ["WiFi", "Colokan", "AC"],
    vibes: ["Fokus Belajar", "Produktif"],
    status: "Banyak kursi tersedia",
    recommendation: "Suasana tenang · Banyak colokan · Cocok untuk belajar",
    socialProof: "Favorit sebelum kelas pagi",
  },
  {
    id: "feb-corner",
    slug: "feb-coffee-corner",
    name: "FEB Coffee Corner",
    image: febImage,
    occupied: 18,
    capacity: 50,
    rating: 4.6,
    distance: "300m",
    noise: "Sedang",
    facilities: ["Coffee", "WiFi", "Colokan", "Cocok WFC"],
    vibes: ["Produktif", "Diskusi Kelompok"],
    status: "Tersedia",
    recommendation: "WiFi stabil · Meja luas · Kopi cepat",
    socialProof: "Populer di kalangan mahasiswa UI",
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
    noise: "Tenang",
    facilities: ["WiFi", "AC", "Colokan"],
    vibes: ["Fokus Belajar", "Produktif"],
    status: "13 kursi tersedia",
    recommendation: "Dekat perpustakaan · Cahaya lembut · Mudah fokus",
    socialProof: "Sedang tren dekat Perpustakaan Pusat",
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
    noise: "Ramai",
    facilities: ["WiFi", "Meja kelompok", "Meja besar"],
    vibes: ["Diskusi Kelompok", "Santai"],
    status: "12 kursi tersedia",
    recommendation: "Meja besar · Kursi fleksibel · Suasana sosial",
    socialProof: "Mulai ditemukan mahasiswa dari fakultas lain",
  },
];

export const recentVisits = [
  { cafe: "FEB Coffee Corner", date: "Kemarin", duration: "3 jam", image: febImage },
  { cafe: "Library Brew", date: "Jumat lalu", duration: "2 jam", image: libraryImage },
];

export function getCafe(slug: string): Cafe {
  return cafes.find((cafe) => cafe.slug === slug) ?? cafes[0];
}