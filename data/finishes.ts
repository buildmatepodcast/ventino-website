export interface Finish {
  name: string;
  hex: string;
  range: "powder" | "anodised";
}

// Range I — The Elements (powder coating)
export const powderCoatingFinishes: Finish[] = [
  { name: "Ivory White",       hex: "#F5F2EA", range: "powder" },
  { name: "Hipca White",       hex: "#EEE9DF", range: "powder" },
  { name: "Grey Shadow",       hex: "#8E8E82", range: "powder" },
  { name: "Mid Green",         hex: "#4A6B52", range: "powder" },
  { name: "Light Cream",       hex: "#EDE3CA", range: "powder" },
  { name: "Mid Cream",         hex: "#D9C89E", range: "powder" },
  { name: "Smoke Grey",        hex: "#8C8C87", range: "powder" },
  { name: "Midnight Grey",     hex: "#3A3A38", range: "powder" },
  { name: "Chocolate Brown",   hex: "#4A2E1A", range: "powder" },
  { name: "Warm Grey",         hex: "#A09B90", range: "powder" },
  { name: "Green Grey",        hex: "#7A8C7E", range: "powder" },
  { name: "Slate Grey",        hex: "#5E6360", range: "powder" },
];

// Range II — Urbane (anodising)
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
