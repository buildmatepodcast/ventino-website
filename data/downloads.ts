export interface Download {
  id: string;
  title: string;
  description: string;
  filename: string;
  size?: string;
}

// Add PDFs to /public/downloads/ and add an entry here.
export const downloads: Download[] = [
  {
    id: "brochure-mmxxvi",
    title: "Ventino MMXXVI Brochure",
    description:
      "The complete 2026 product portfolio — all four systems, finishes library, project gallery, and performance specifications.",
    filename: "Ventino_Brochure_MMXXVI_New_Branding.pdf",
    size: "4.6 MB",
  },
  {
    id: "technical-spec",
    title: "Technical Specification Sheet",
    description:
      "Detailed engineering specifications for all four systems — dimensions, glass specs, hardware, and load ratings.",
    filename: "Ventino_Technical_Specifications.pdf",
    size: "2.1 MB",
  },
  {
    id: "interpon-rts-v3",
    title: "Interpon RTS Architectural Colour Card — India (V3)",
    description:
      "Full range of Interpon D1036 and D2525 solid powder coating colours available as ready-to-ship stock in India. The definitive reference for specifying standard finishes.",
    filename: "Interpon-RTS-Color-Card-India-V3.pdf",
    size: "2.8 MB",
  },
  {
    id: "interpon-rts",
    title: "Interpon RTS Colour Card — India",
    description:
      "Compact architectural colour card covering the Interpon RTS solid powder coating palette for the Indian market.",
    filename: "Interpon-RTS-Color-Card-India.pdf",
    size: "0.6 MB",
  },
  {
    id: "interpon-stf",
    title: "Interpon D STF Colour Card",
    description:
      "Wood-effect sublimation transfer finish colour card. All available wood grain textures and patterns for aluminium powder coating.",
    filename: "Interpon-D-STF-Color-Card.pdf",
    size: "9.8 MB",
  },
  {
    id: "wooden-finish-shades",
    title: "Wooden Finish Shades",
    description:
      "Comprehensive shade reference guide for all wood-effect powder coating finishes — grain patterns, tones, and surface texture details.",
    filename: "Wooden-Finish-Shades.pdf",
    size: "10.8 MB",
  },
];
