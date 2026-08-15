/**
 * Single source of truth for Blackout Gaming Cafe content.
 * The owner can edit everything here without touching components.
 */

export const site = {
  name: "Blackout Gaming Cafe",
  shortName: "BLACKOUT",
  tagline: "PLAY • FOCUS • DOMINATE",
  city: "Kochi",
  address: "Lisie Hospital Road, near Kuluki Cafe, Kochi, Kerala",
  shortAddress: "Lisie Hospital Road, Kochi",
  hours: "Every day — 11:00 AM to 2:00 AM",
  hoursShort: "OPEN DAILY • 11 AM — 2 AM",
  phone: "9995536333",
  whatsappNumber: "919995536333", // country code + number
  instagramHandle: "@blackoutgamingcafe",
  instagramUrl: "https://www.instagram.com/blackoutgamingcafe/",
  // Replace with the exact verified Google Maps place URL once confirmed.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Blackout+Gaming+Cafe+Lisie+Hospital+Road+Kochi",
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export type PricingPlan = {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  unit: string;
  label: string;
  note?: string;
  featured?: boolean;
  players: number;
};

/** Opening-month promotional rates — update these values when pricing changes. */
export const pricingPlans: PricingPlan[] = [
  {
    id: "single",
    title: "SINGLE PLAYER",
    price: 99,
    originalPrice: 120,
    unit: "/ hour",
    label: "OPENING MONTH OFFER",
    featured: true,
    players: 1,
  },
  {
    id: "duo",
    title: "2 PLAYERS",
    price: 160,
    originalPrice: 180,
    unit: "/ hour",
    label: "SHARE & PLAY",
    players: 2,
  },
  {
    id: "squad",
    title: "4 PLAYERS",
    price: 340,
    originalPrice: 350,
    unit: "/ hour",
    label: "GROUP PLAY",
    note: "₹85 per person",
    players: 4,
  },
];

export const pricingFootnote = "Minimum session: 1 hour";

export const events = [
  {
    title: "Gaming Nights",
    description: "Late-night sessions with the regulars. Details announced on Instagram.",
  },
  {
    title: "Tournaments",
    description: "Bracket-style competitions. Dates to be announced.",
  },
  {
    title: "Multiplayer Events",
    description: "Squad-vs-squad game nights for groups and college crews.",
  },
  {
    title: "Special Offers",
    description: "Seasonal offers and happy-hour rates. Follow for updates.",
  },
];
