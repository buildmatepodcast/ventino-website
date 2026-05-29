export interface ProjectImage {
  src: string;
  alt: string;
}

// Generate numbered image list for a project
function imgs(id: string, count: number, nameHint: string): ProjectImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/projects/${id}/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `${nameHint} — ${i + 1}`,
  }));
}

export interface Project {
  id: string;
  name: string;
  location: string;
  year: string;
  hero: boolean;
  coverImage: string;
  images: ProjectImage[];
  systems: string[];
  narrative?: string;
  ownerQuote?: string;
  ownerName?: string;
  specification?: string;
}

// ─── Hero Projects ─────────────────────────────────────────────────────────────
// NOTE: Image folder assignments are our best visual match.
// Verify and correct the folder paths in /public/images/projects/ as needed.

export const heroProjects: Project[] = [
  {
    id: "pavilion-house",
    name: "The Pavilion House",
    location: "Ahmedabad",
    year: "2025",
    hero: true,
    coverImage: "/images/projects/pavilion-house/cover.jpg",
    images: imgs("pavilion-house", 11, "The Pavilion House, Ahmedabad"),
    systems: ["System One — Sliding", "System Three — Grande Entry", "System Two — Casement"],
    narrative:
      "The brief asked for a family home that disappeared into its garden. The architect's answer was a great cantilevered roof over a base of handmade brick — and between them, the largest single run of glazing the project would accept. Three-track sliders carry double-glazed units across the entire south face. A glass-walled water cube — fully framed in Ventino aluminium — punctures the plan, drawing a line of light from the front door to the dining table. There are no visible mullions where they were not wanted, and reassuring weight where they were. On a summer evening it frames a garden; on a monsoon afternoon, it holds one back.",
    specification: "Ventino 40 Pro Slider · Ventino Grande 65 Entrance · Ventino 50 Casement. 24mm DGU throughout, acoustic interlayer, bronze-anodised frame.",
    ownerQuote: "We asked them for an invisible frame. They delivered something better — a frame you stop noticing.",
    ownerName: "Owner, Project One",
  },
  {
    id: "courtyard-house",
    name: "The Courtyard House",
    location: "Surat",
    year: "2024",
    hero: true,
    coverImage: "/images/projects/courtyard-house/cover.jpg",
    images: imgs("courtyard-house", 6, "The Courtyard House, Surat"),
    systems: ["System One — Sliding", "System Two — Casement", "Fixed glazing"],
    narrative:
      "The owner described what they wanted as 'a Japanese tea room in a Gujarati city.' The architect translated that into a double-height living room facing a long, narrow koi pond — itself enclosed by a screen of vertical teak fins. The framing problem was the obvious one: how to hold seven metres of glass against the southwest monsoon wind, without making the frames look heavy. We used our slim sliding system across the lower band, with a fixed clerestory of casement units above. The structural mullion at the spring-line is a single 60mm box — concealed inside the slab. From inside, the screen reads as one continuous wall.",
    specification: "Ventino 35 Pro Slider · Ventino 40 Casement · Fixed glazing units. 24mm DGU, anthracite powder-coat, 7.2m glazed wall.",
    ownerQuote: "I had not realised how much a frame could shape the mood of a room.",
    ownerName: "Owner, Project Two",
  },
  {
    id: "garden-villa",
    name: "The Garden Villa",
    location: "Hyderabad",
    year: "2025",
    hero: true,
    coverImage: "/images/projects/garden-villa/cover.jpg",
    images: imgs("garden-villa", 10, "The Garden Villa, Hyderabad"),
    systems: ["System One — Sliding", "System Two — Casement", "System Three — Grande Entry"],
    narrative:
      "The plot was generous, the brief restrained: three children, two grandparents, one large family, and a wish to see something green from every room. The architect's answer was a modernist box, lifted on a covered terrace, with the longest possible run of glass on three sides. Forty-two metres of sliding doors carry the ground floor. The casement windows on the upper level — flanked by deep wooden reveals — give cross-ventilation in every bedroom. The double-leaf Grande entry, set into a wall of rusted Corten, weighs 240 kilograms but closes on a single finger. The bronze-anodised finish carries the same tone from the front door to the kitchen vent.",
    specification: "Ventino 40 Pro Slider · Ventino 50 Casement · Ventino Grande Entry. 30mm DGU, bronze anodise, 42m of sliding opening.",
    ownerQuote: "The doors are the third thing a guest notices. That is exactly the right number.",
    ownerName: "Owner, Project Three",
  },
  {
    id: "white-house",
    name: "The White House",
    location: "Bengaluru",
    year: "2026",
    hero: true,
    coverImage: "/images/projects/white-house/cover.jpg",
    images: imgs("white-house", 14, "The White House, Bengaluru"),
    systems: ["System One — Sliding", "System Two — Casement", "Fixed glazing"],
    narrative:
      "The architect described the brief as 'a tropical Scandinavian villa, in Bengaluru.' The house turns a white rendered face to the street and opens entirely to the south, toward a mature rain tree. Ventino 35 Pro slim sliders carry the ground-floor garden wall — three panels, each 900mm wide, that stack fully into the pocket at the corner. The double-height dining room is held by fixed glazing in a black powder-coat: six metres of glass, zero visible fixings. Upstairs, the bedrooms open through casement units that tilt-and-turn for ventilation without surrendering privacy. The white-on-white palette makes the green outside the only colour in the house.",
    specification: "Ventino 35 Pro Slider · Ventino 40 Casement · Fixed glazing units. Acoustic-laminated DGU, anthracite black powder-coat, tilt-and-turn hardware.",
    ownerQuote: "It is a house that takes a long time to notice. That is, I think, the highest compliment.",
    ownerName: "Owner, Project Four",
  },
];

// ─── Portfolio Projects ─────────────────────────────────────────────────────────
export const portfolioProjects: Project[] = [
  {
    id: "louvre-house",
    name: "The Louvre House",
    location: "Mumbai",
    year: "2024",
    hero: false,
    coverImage: "/images/projects/louvre-house/cover.jpg",
    images: imgs("louvre-house", 9, "The Louvre House, Mumbai"),
    systems: ["System Two — Casement", "System One — Sliding"],
    narrative: "A high-rise apartment renovation in South Mumbai. The Louvre House required millimetre-precise fitting across four bathroom suites and two living-room elevations. Brass hardware throughout.",
  },
  {
    id: "the-stack",
    name: "The Stack",
    location: "Ahmedabad",
    year: "2025",
    hero: false,
    coverImage: "/images/projects/the-stack/cover.jpg",
    images: imgs("the-stack", 10, "The Stack, Ahmedabad"),
    systems: ["System Two — Casement", "System Three — Grande Entry"],
    narrative: "A stacked sectional house in the new residential belt of Ahmedabad. The brick envelope demanded frames that held their own weight visually without competing. Deep forest-powder casements throughout.",
  },
  {
    id: "element-house",
    name: "Element House",
    location: "Surat",
    year: "2024",
    hero: false,
    coverImage: "/images/projects/element-house/cover.jpg",
    images: imgs("element-house", 11, "Element House, Surat"),
    systems: ["System One — Sliding", "System Four — Slide & Fold"],
    narrative: "Element House plays with the tension between the solid timber facade and the full-height sliding glass behind it. The frames disappear; the wood and light remain.",
  },
  {
    id: "the-library",
    name: "The Library",
    location: "Vadodara",
    year: "2025",
    hero: false,
    coverImage: "/images/projects/the-library/cover.jpg",
    images: imgs("the-library", 13, "The Library, Vadodara"),
    systems: ["System Two — Casement"],
    narrative: "A family home in Vadodara's heritage precinct. The client insisted on keeping a 60-year-old carved teak door. We built the rest of the fenestration around it — slim-profile System Two casements that defer gracefully to the original.",
  },
  {
    id: "concrete-pavilion",
    name: "The Concrete Pavilion",
    location: "Pune",
    year: "2025",
    hero: false,
    coverImage: "/images/projects/concrete-pavilion/cover.jpg",
    images: imgs("concrete-pavilion", 20, "The Concrete Pavilion, Pune"),
    systems: ["System One — Sliding", "System Two — Casement"],
    narrative: "Concrete, glass, and a canal of water that runs the length of the house. The sliding panels in the corridor link the volumes; the louvre pergola controls the light. Minimalism in its most considered form.",
  },
  {
    id: "garden-bungalow",
    name: "Garden Bungalow",
    location: "Goa",
    year: "2026",
    hero: false,
    coverImage: "/images/projects/garden-bungalow/cover.jpg",
    images: imgs("garden-bungalow", 6, "Garden Bungalow, Goa"),
    systems: ["System Four — Slide & Fold", "System Two — Casement"],
    narrative: "A retrofit in one of Panjim's old residential neighbourhoods. Salt-air tested, flood-sealed, and designed to let the monsoon wind through without letting the rain in. System Four panels on the verandah fold back entirely in the dry season.",
  },
  {
    id: "the-bedroom",
    name: "The Bedroom",
    location: "Hyderabad",
    year: "2025",
    hero: false,
    coverImage: "/images/projects/the-bedroom/cover.jpg",
    images: imgs("the-bedroom", 12, "The Bedroom, Hyderabad"),
    systems: ["System Two — Casement"],
    narrative: "A single-room brief: get the window right. The System Two casement on the east wall frames the tree canopy precisely at eye level from the bed. The acoustic specification means the city stays outside. The birds do not.",
  },
  {
    id: "sitting-room",
    name: "Sitting Room",
    location: "Bengaluru",
    year: "2026",
    hero: false,
    coverImage: "/images/projects/sitting-room/cover.jpg",
    images: imgs("sitting-room", 22, "Sitting Room, Bengaluru"),
    systems: ["System Two — Casement", "System One — Sliding"],
    narrative: "One room, made right. The sitting room addition to a 1970s bungalow used terracotta brick and slim casement frames to stitch old to new. The brief: sit here and forget where the house ends.",
  },
  {
    id: "townhouse",
    name: "The Townhouse",
    location: "Chennai",
    year: "2024",
    hero: false,
    coverImage: "/images/projects/townhouse/cover.jpg",
    images: imgs("townhouse", 15, "The Townhouse, Chennai"),
    systems: ["System Two — Casement", "System Three — Grande Entry"],
    narrative: "Chennai's heat demands windows that manage solar gain without killing the view. The white-brick townhouse uses solar-control 24mm DGU throughout — the interior stays at a constant 4°C below ambient even in May.",
  },
];

export const allProjects = [...heroProjects, ...portfolioProjects];
