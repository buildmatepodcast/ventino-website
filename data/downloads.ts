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
];
