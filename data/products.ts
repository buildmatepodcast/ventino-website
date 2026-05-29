export interface ProductSystem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  specs: string[];
  highlights: string[];
}

export const productSystems: ProductSystem[] = [
  {
    id: "sliding",
    number: "One",
    name: "Sliding",
    tagline: "Walls of glass that move sideways.",
    description:
      "System One is our answer to the large opening — the kind of opening that makes a room feel like part of the landscape. Reach 4.2 metres vertical. Span up to 16 feet in a single continuous run. Glazed with 24mm double-glazed units as standard, with options up to acoustic-laminated specification for urban sites.",
    specs: [
      "Maximum vertical: 4,200mm",
      "Maximum run: 16ft (4,877mm)",
      "Glazing: 24mm DGU standard; acoustic-laminated available",
      "Thermal break: full-length polyamide bridge",
      "Weather seals: triple-brush pile + EPDM gasket",
      "Hardware: stainless steel rollers, anti-lift block",
    ],
    highlights: [
      "Floor-to-ceiling glass walls",
      "Smooth single-finger operation",
      "24mm DGU thermal performance",
      "Wind-load rated",
    ],
  },
  {
    id: "casement",
    number: "Two",
    name: "Casement",
    tagline: "Windows that open all the way.",
    description:
      "System Two covers every casement need — from a 5mm single-glazed bathroom light to a 38mm DGU acoustic-laminated master bedroom window. The tilt-and-turn option adds European versatility: tilt for secure ventilation, turn for full access. The slim 70mm frame depth keeps sightlines lean without compromising performance.",
    specs: [
      "Glazing range: 5mm single to 38mm DGU",
      "Frame depth: 70mm",
      "Hardware: multi-point espagnolette locking",
      "Tilt-and-turn option available on all sizes",
      "Friction stays: adjustable, concealed",
      "Threshold: low-profile rebated sill",
    ],
    highlights: [
      "Tilt-and-turn versatility",
      "5mm to 38mm glazing range",
      "Multi-point security locking",
      "Slim 70mm profile",
    ],
  },
  {
    id: "grande-entry",
    number: "Three",
    name: "Grande Entry",
    tagline: "The front door, at the right scale.",
    description:
      "System Three is built for the entrance that commands attention without shouting. A 65mm sash depth and heavy-duty multipoint locking system support single leaves up to 4 metres. The hinge specification tolerates leaf weights above 200kg. Surface finish options span the full Ventino palette — powder coat, anodised, or wood-laminate foil.",
    specs: [
      "Sash depth: 65mm",
      "Maximum single-leaf height: 4,000mm",
      "Maximum leaf weight: 220kg",
      "Locking: 5-point multipoint espagnolette",
      "Hinge: heavy-duty concealed, 3D adjustable",
      "Threshold: rebated low-profile with rain seal",
    ],
    highlights: [
      "Up to 4m single leaf",
      "5-point multipoint locking",
      "220kg leaf weight capacity",
      "10-year structural warranty",
    ],
  },
  {
    id: "slide-fold",
    number: "Four",
    name: "Slide & Fold",
    tagline: "The wall that simply isn't there.",
    description:
      "System Four is for the opening that needs to disappear entirely. Panels fold and stack against one or both jambs, leaving a clear unobstructed span. Available in 5mm to 36mm glazing range, multi-panel configurations up to 12 leaves, and corner configurations using a pivoting steel post. The track depth is 32mm — barely a threshold.",
    specs: [
      "Glazing range: 5mm to 36mm",
      "Multi-panel: up to 12 leaves",
      "Corner configuration: pivot steel post",
      "Track depth: 32mm",
      "Hardware: concealed top-hung rollers",
      "Stacking: left, right, or split",
    ],
    highlights: [
      "Up to 12 panels",
      "Corner configurations",
      "Full clear opening",
      "32mm track depth",
    ],
  },
];

export const performancePromises = [
  {
    id: "acoustic",
    label: "Acoustic",
    value: "Up to 42dB",
    description: "Our 38mm DGU acoustic laminated specification reduces external noise by up to 42dB — from the roar of a main road to the quiet of a library.",
  },
  {
    id: "weather",
    label: "Weather-tight",
    value: "600 Pa",
    description: "Tested to 600 Pascal water pressure. Every frame is sealed with EPDM gaskets and pile seals at all four faces — no water ingress in any Indian monsoon condition.",
  },
  {
    id: "dust",
    label: "Dust Seal",
    value: "Triple seal",
    description: "Triple-brush pile sealing on all sliding frames. Tested in Delhi winter conditions — the fine dust that defeats standard profiles stays outside.",
  },
  {
    id: "wind",
    label: "Wind Load",
    value: "Zc rated",
    description: "All systems are rated to Zone C wind loads as per IS 875 Part 3 — covering the highest-wind coastal and hill-station sites in India.",
  },
  {
    id: "security",
    label: "Security",
    value: "5-point lock",
    description: "Grande Entry and Casement systems come standard with multi-point espagnolette locking. Anti-lift blocks on all sliding systems.",
  },
  {
    id: "longevity",
    label: "Longevity",
    value: "10-year warranty",
    description: "Ten-year structural warranty on all frame profiles. uPVC profiles are UV-stabilised and impact-modified for Indian climate conditions.",
  },
];
