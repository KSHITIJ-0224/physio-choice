import t1 from "@/assets/therapist-1.jpg";
import t2 from "@/assets/therapist-2.jpg";
import t3 from "@/assets/therapist-3.jpg";
import t4 from "@/assets/therapist-4.jpg";
import t5 from "@/assets/therapist-5.jpg";
import tHero from "@/assets/therapist-hero.jpg";

export type TherapistCategory =
  | "Sports Rehab"
  | "Post-Op"
  | "Chronic Pain"
  | "Neuro"
  | "Geriatric"
  | "Pediatric";

export type Therapist = {
  slug: string;
  name: string;
  image: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  price: number;
  tags: string[];
  next: string;
  category: TherapistCategory;
  badge?: "Available Today" | "Elite Specialist" | "New";
  bio: string;
  location: string;
  languages: string[];
  credentials: string[];
  // 0=Sun..6=Sat — days the therapist works
  workingDays: number[];
  // Hour slots offered (24h)
  workingHours: number[];
};

const STANDARD_HOURS = [9, 10, 11, 14, 15, 16, 17, 18];

export const therapists: Therapist[] = [
  {
    slug: "julian-mercer",
    name: "Dr. Julian Mercer",
    image: t1,
    specialty: "Neuro-Rehabilitation",
    experience: 12,
    rating: 4.9,
    reviews: 248,
    price: 120,
    tags: ["Stroke Recovery", "Mobility", "Vestibular"],
    next: "Today, 4:30 PM",
    category: "Neuro",
    badge: "Available Today",
    location: "Brooklyn · Manhattan",
    languages: ["English", "Spanish"],
    credentials: ["DPT, Columbia University", "Neurologic Clinical Specialist (NCS)", "Bobath-certified"],
    bio: "Julian rebuilds movement after the brain forgets how. Twelve years in neuro-rehab — stroke recovery, vestibular disorders, post-concussion. His sessions are quiet, methodical, and almost always end with a measurable win.",
    workingDays: [1, 2, 3, 4, 5, 6],
    workingHours: STANDARD_HOURS,
  },
  {
    slug: "elena-vance",
    name: "Dr. Elena Vance",
    image: t2,
    specialty: "Spinal Health",
    experience: 8,
    rating: 5.0,
    reviews: 167,
    price: 145,
    tags: ["Yoga-Integrated", "Lumbar Care", "Disc Health"],
    next: "Today, 6:00 PM",
    category: "Chronic Pain",
    badge: "Available Today",
    location: "Manhattan · Queens",
    languages: ["English", "Mandarin"],
    credentials: ["DPT, NYU", "RYT-500 Yoga Instructor", "McKenzie Method Certified"],
    bio: "Elena treats the spine as a system, not a symptom. She blends movement screening with breath-led yoga therapy — the result is patients who stop fearing their backs and start trusting them again.",
    workingDays: [0, 1, 2, 3, 5, 6],
    workingHours: STANDARD_HOURS,
  },
  {
    slug: "marcus-grey",
    name: "Dr. Marcus Grey",
    image: t3,
    specialty: "Geriatric & Pediatric",
    experience: 15,
    rating: 4.8,
    reviews: 392,
    price: 180,
    tags: ["Fall Prevention", "Posture", "Developmental"],
    next: "Tomorrow, 9:00 AM",
    category: "Geriatric",
    badge: "Elite Specialist",
    location: "Manhattan · Westchester",
    languages: ["English", "French"],
    credentials: ["PhD Rehab Science, NYU", "Board-Certified Geriatric Specialist", "Pediatric NDT"],
    bio: "Fifteen years bridging the two ends of life — toddlers learning to walk and grandparents learning to walk again. Marcus is the clinician families request by name.",
    workingDays: [1, 2, 3, 4, 5],
    workingHours: [9, 10, 11, 13, 14, 15, 16],
  },
  {
    slug: "sasha-reid",
    name: "Dr. Sasha Reid",
    image: t4,
    specialty: "Sports Rehabilitation",
    experience: 10,
    rating: 4.9,
    reviews: 211,
    price: 135,
    tags: ["ACL Recovery", "Dry Needling", "Athletic Return"],
    next: "Today, 7:15 PM",
    category: "Sports Rehab",
    badge: "Available Today",
    location: "Brooklyn · Manhattan",
    languages: ["English"],
    credentials: ["DPT, USC", "Certified Strength & Conditioning Specialist", "Dry Needling Cert."],
    bio: "Former D1 athlete turned sports-PT. Sasha builds return-to-play programs that don't compromise. If you want to get back on the field — not just out of pain — book her.",
    workingDays: [0, 1, 2, 3, 4, 5, 6],
    workingHours: [10, 11, 12, 15, 16, 17, 18, 19],
  },
  {
    slug: "noah-kessler",
    name: "Dr. Noah Kessler",
    image: t5,
    specialty: "Post-Operative Recovery",
    experience: 9,
    rating: 4.9,
    reviews: 184,
    price: 130,
    tags: ["Joint Replacement", "Soft Tissue", "Manual Therapy"],
    next: "Tomorrow, 11:00 AM",
    category: "Post-Op",
    location: "Manhattan · Brooklyn",
    languages: ["English", "German"],
    credentials: ["DPT, Hunter College", "Orthopedic Clinical Specialist (OCS)", "Mulligan Concept Cert."],
    bio: "Post-op windows are unforgiving — Noah's calm, surgical-grade precision is why orthopedic surgeons keep referring patients to him.",
    workingDays: [1, 2, 3, 4, 5],
    workingHours: STANDARD_HOURS,
  },
  {
    slug: "aris-thorne",
    name: "Dr. Aris Thorne",
    image: tHero,
    specialty: "Sports Medicine",
    experience: 14,
    rating: 5.0,
    reviews: 421,
    price: 160,
    tags: ["Performance", "Manual Therapy", "Movement Screen"],
    next: "Today, 5:00 PM",
    category: "Sports Rehab",
    badge: "Elite Specialist",
    location: "Manhattan",
    languages: ["English", "Greek"],
    credentials: ["DPT, Stanford", "FRC Mobility Specialist", "USA Track & Field Consultant"],
    bio: "Aris consults for pro teams during the season and patients during the rest of the year. Whether you're rehabbing a hamstring or chasing a marathon PR, the system is the same: assess, prescribe, progress.",
    workingDays: [1, 2, 3, 4, 5, 6],
    workingHours: [8, 9, 10, 11, 14, 15, 16, 17, 18],
  },
];

export function getTherapist(slug: string) {
  return therapists.find((t) => t.slug === slug);
}

/** Returns the next 14 days, each with available time slots (or empty) for a therapist. */
export function getAvailability(therapist: Therapist) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days: { date: Date; slots: { hour: number; label: string }[] }[] = [];

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dow = date.getDay();

    if (!therapist.workingDays.includes(dow)) {
      days.push({ date, slots: [] });
      continue;
    }

    // Deterministic pseudo-randomness so each therapist's calendar feels real
    const seed = (date.getDate() + therapist.slug.length * 7 + dow) % 5;

    const slots = therapist.workingHours
      .filter((h, idx) => (idx + seed) % 3 !== 0) // ~2/3 of slots open
      .filter((h) => {
        // Same-day: only show slots after current hour + 2
        if (i === 0) return h > new Date().getHours() + 1;
        return true;
      })
      .map((h) => ({
        hour: h,
        label: formatHour(h),
      }));

    days.push({ date, slots });
  }

  return days;
}

export function formatHour(h: number) {
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:00 ${period}`;
}

export function formatDay(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}
