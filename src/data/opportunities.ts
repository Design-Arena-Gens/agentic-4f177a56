export type Opportunity = {
  id: string;
  name: string;
  category: string;
  description: string;
  averagePriceAED: number;
  estimatedMonthlySearches: number;
  competitorCount: number;
  sourcingNotes: string;
  differentiationIdeas: string[];
};

export const opportunities: Opportunity[] = [
  {
    id: "smart-iftar-planner",
    name: "Smart Iftar Planner & Kitchen Timer Set",
    category: "Smart Home & Kitchen",
    description:
      "A bilingual (Arabic/English) countertop assistant that helps families plan Ramadan meals, auto-schedules prayer times, and manages grocery reminders via a companion app.",
    averagePriceAED: 249,
    estimatedMonthlySearches: 5400,
    competitorCount: 3,
    sourcingNotes:
      "Bundle OEM smart timers with custom firmware and localized app content; margin improves with MOQs above 300 units.",
    differentiationIdeas: [
      "Include pre-loaded Emirati recipes and portion planners.",
      "Offer NFC meal prep cards to trigger timers instantly.",
      "Add integration with popular grocery delivery APIs in the UAE.",
    ],
  },
  {
    id: "desert-hiking-kit",
    name: "Ultra-Light Desert Hiking Hydration Kit",
    category: "Outdoor & Sports",
    description:
      "A modular hydration backpack optimized for UAE desert treks, including insulated bladder, cooling towel, and compact electrolyte sachets.",
    averagePriceAED: 329,
    estimatedMonthlySearches: 6100,
    competitorCount: 2,
    sourcingNotes:
      "Source breathable ripstop fabrics and insulated bladders from Shenzhen suppliers; negotiate private labeling for UAE-exclusive branding.",
    differentiationIdeas: [
      "Bundle premium electrolyte sachets tailored to high-heat conditions.",
      "Add reflective panels and glow trims for night desert safaris.",
      "Offer optional GPS beacon pocket insert.",
    ],
  },
  {
    id: "majlis-air-purifier",
    name: "Majlis-Friendly Compact Air Purifier",
    category: "Home Appliances",
    description:
      "A quiet, scent-compatible purifier engineered to neutralize oud and bakhoor smoke without removing desired fragrance undertones.",
    averagePriceAED: 599,
    estimatedMonthlySearches: 4800,
    competitorCount: 2,
    sourcingNotes:
      "Partner with HEPA OEMs willing to embed adjustable carbon filters tuned for incense-heavy environments.",
    differentiationIdeas: [
      "Include fragrance preservation mode with smart sensor automation.",
      "Design aesthetic wood finishes inspired by traditional majlis decor.",
      "Provide optional subscription for replacement filters every 90 days.",
    ],
  },
  {
    id: "kids-arabic-tablet",
    name: "Immersive Arabic Literacy Tablet for Kids",
    category: "Education & Kids",
    description:
      "A rugged tablet preloaded with Ministry-aligned Arabic literacy games, progress dashboards for parents, and adaptive AI tutors.",
    averagePriceAED: 449,
    estimatedMonthlySearches: 7200,
    competitorCount: 3,
    sourcingNotes:
      "Combine mid-range Android hardware with licensed educational content; invest in durable casing to reduce return rates.",
    differentiationIdeas: [
      "Offer dual-language mode to help expatriate families encourage Arabic learning.",
      "Provide parent analytics app with weekly activity insights.",
      "Include NFC achievement badges that unlock bonus stories.",
    ],
  },
  {
    id: "office-wellness-desk",
    name: "Ergonomic Prayer-Friendly Standing Desk Converter",
    category: "Office & Productivity",
    description:
      "A height-adjustable desk converter with integrated prayer mat storage, cable management, and quick-release locking for compact offices.",
    averagePriceAED: 375,
    estimatedMonthlySearches: 3900,
    competitorCount: 1,
    sourcingNotes:
      "Manufacture MDF or bamboo tops paired with aluminum frames; negotiate flat-pack shipping with regional logistics hubs.",
    differentiationIdeas: [
      "Bundle a premium foldable prayer mat with antibacterial coating.",
      "Add USB-C fast charging hub and wireless charging pad.",
      "Provide optional corporate branding kits for bulk B2B orders.",
    ],
  },
];

