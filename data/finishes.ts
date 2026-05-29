export interface Finish {
  name: string;
  hex: string;
  ral?: string;    // present on solid colours; absent on wood-effect shades
  image?: string;  // path relative to /public — used for wood-effect swatches
  range: "powder-solid" | "powder-wood" | "anodised";
}

// ─── Powder Coating — Solid Colours ─────────────────────────────────────────
// Source: Interpon Architectural RTS Color Card India
// D1036 (Standard durability) + D2525 (Super durability) combined
export const powderSolidFinishes: Finish[] = [
  // Whites
  { name: "Signal White",     hex: "#F4F4F4", ral: "RAL 9003", range: "powder-solid" },
  { name: "Pure White",       hex: "#F8F6EF", ral: "RAL 9010", range: "powder-solid" },
  { name: "Traffic White",    hex: "#F1F0EB", ral: "RAL 9016", range: "powder-solid" },

  // Greys
  { name: "Moss Grey",        hex: "#8B8C7A", ral: "RAL 7003", range: "powder-solid" },
  { name: "Pebble Grey",      hex: "#B9B0A2", ral: "RAL 7032", range: "powder-solid" },
  { name: "Light Grey",       hex: "#D7D7D7", ral: "RAL 7035", range: "powder-solid" },
  { name: "Dusty Grey",       hex: "#7D7F7D", ral: "RAL 7037", range: "powder-solid" },
  { name: "Quartz Grey",      hex: "#6C6960", ral: "RAL 7039", range: "powder-solid" },
  { name: "Traffic Grey B",   hex: "#4E5452", ral: "RAL 7043", range: "powder-solid" },
  { name: "Telegrey 1",       hex: "#909090", ral: "RAL 7045", range: "powder-solid" },
  { name: "Umbra Grey",       hex: "#3E3A36", ral: "RAL 7022", range: "powder-solid" },

  // Dark
  { name: "Jet Black",        hex: "#0E0E10", ral: "RAL 9005", range: "powder-solid" },

  // Metallic & Special
  { name: "White Aluminium",  hex: "#A5A5A5", ral: "RAL 9006", range: "powder-solid" },
  { name: "Grey Aluminium",   hex: "#8A8A80", ral: "RAL 9007", range: "powder-solid" },
  { name: "Steel Bronze 1",   hex: "#8B6C52", range: "powder-solid" },
  { name: "Bronze III",       hex: "#7B5C3E", range: "powder-solid" },
  { name: "Splendor",         hex: "#C4A35A", range: "powder-solid" },
];

// ─── Powder Coating — Wood Effect ────────────────────────────────────────────
// Source: Interpon D STF Color Card (Sublimation Transfer Finish)
// Names are exactly as printed under each shade card sample in the brochure
export const woodFinishes: Finish[] = [
  { name: "Western Red Cedar",  hex: "#8B3A2A", range: "powder-wood" },
  { name: "Antique Cherry",     hex: "#7B2D2D", image: "/finishes/wood/antique-cherry.png",      range: "powder-wood" },
  { name: "Australian Cedar",   hex: "#9B5030", image: "/finishes/wood/australian-cedar.png",    range: "powder-wood" },
  { name: "Warm Cherry",        hex: "#8C3030", image: "/finishes/wood/warm-cherry.png",         range: "powder-wood" },
  { name: "Tiger Wood",         hex: "#C07840", image: "/finishes/wood/tiger-wood.png",          range: "powder-wood" },
  { name: "Dark Beige",         hex: "#C8A870", range: "powder-wood" },
  { name: "Cinnamon Walnut",    hex: "#7B4828", image: "/finishes/wood/cinnamon-walnut.png",     range: "powder-wood" },
  { name: "Antique Oak",        hex: "#A07848", image: "/finishes/wood/antique-oak.png",         range: "powder-wood" },
  { name: "Chestnut",           hex: "#8B4513", image: "/finishes/wood/chestnut.png",            range: "powder-wood" },
  { name: "Walnut",             hex: "#5C3D1E", image: "/finishes/wood/walnut.png",              range: "powder-wood" },
  { name: "Snow Drift",         hex: "#E8E0D0", range: "powder-wood" },
  { name: "Pecan",              hex: "#C8904C", image: "/finishes/wood/pecan.png",               range: "powder-wood" },
  { name: "Pine",               hex: "#C8A878", image: "/finishes/wood/pine.png",                range: "powder-wood" },
  { name: "Mahogany Brown",     hex: "#6B2D1E", image: "/finishes/wood/mahogany-brown.png",      range: "powder-wood" },
  { name: "Modern Oak",         hex: "#9B7848", image: "/finishes/wood/modern-oak.png",          range: "powder-wood" },
  { name: "Grey V2",            hex: "#8C8880", range: "powder-wood" },
  { name: "Classic Grey",       hex: "#7A7870", image: "/finishes/wood/classic-grey.png",        range: "powder-wood" },
  { name: "Merbau",             hex: "#5C3018", image: "/finishes/wood/merbau.png",              range: "powder-wood" },
  { name: "Birch Grey",         hex: "#A8A098", image: "/finishes/wood/birch-grey.png",          range: "powder-wood" },
  { name: "Natural Brown",      hex: "#8C6040", image: "/finishes/wood/natural-brown.png",       range: "powder-wood" },
];

// ─── Anodising ───────────────────────────────────────────────────────────────
export const anodisedFinishes: Finish[] = [
  { name: "Anthracite Grey",   hex: "#3D3D3D", range: "anodised" },
  { name: "Ocean Blue",        hex: "#2B4A6A", range: "anodised" },
  { name: "Iron Grey",         hex: "#4A4A4A", range: "anodised" },
  { name: "Anodic Black",      hex: "#1A1A1A", range: "anodised" },
  { name: "Soft Champagne",    hex: "#D4BF99", range: "anodised" },
  { name: "Soft Silver",       hex: "#C0BDB6", range: "anodised" },
  { name: "Anodic Ice",        hex: "#DDE3E8", range: "anodised" },
  { name: "Driftwood",         hex: "#8C7B62", range: "anodised" },
  { name: "Steel Blue Grey",   hex: "#6A7A88", range: "anodised" },
  { name: "Golden Beach",      hex: "#C9A45A", range: "anodised" },
  { name: "Gold Pearl",        hex: "#C4923A", range: "anodised" },
  { name: "Gold Splendour",    hex: "#B8860B", range: "anodised" },
  { name: "Steel Bronze",      hex: "#7B5C3E", range: "anodised" },
  { name: "Steel Platinum",    hex: "#A8A8A4", range: "anodised" },
  { name: "Blue Grey 713",     hex: "#7A8898", range: "anodised" },
  { name: "Steel Bronze II",   hex: "#6B4F38", range: "anodised" },
  { name: "Anodic Bronze",     hex: "#A9712F", range: "anodised" },
  { name: "Dark Brown",        hex: "#3C2415", range: "anodised" },
];

// legacy export kept for any existing imports
export const powderCoatingFinishes = powderSolidFinishes;
