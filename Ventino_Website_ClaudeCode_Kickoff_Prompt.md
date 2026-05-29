# Claude Code — Kickoff Prompt
## Ventino Windows Pvt. Ltd. — Brand Website (ventino.in)

---

### HOW TO USE THIS

1. Install Claude Code if you haven't: `npm install -g @anthropic-ai/claude-code`
2. Create a new empty folder, e.g. `ventino-website`, and open your terminal inside it.
3. Drop your **brand asset files** into a subfolder called `/brand-assets` inside that folder before starting. Specifically:
   - `ventino_primary_dark_3000x2280.png` (logo for light backgrounds)
   - `ventino_primary_reversed_3000x2280.png` (logo for dark backgrounds)
   - `ventino_primary_dark.eps` and `.pdf` (vector masters — keep for reference)
   - `Ventino_Brochure_MMXXVI_New_Branding.pdf` (the project portfolio — also the downloadable brochure)
   - `Ventino_Brand_Guidelines.pdf`
   - `Ventino_The_Story.pdf`
   - `social_post_campaign.png`, `social_post_quote.png`, `signage_plaque_brass.png`, `stationery_card_front.png`, `utility_seal.png`
   - Any **project photos** you have for the gallery (name them clearly, e.g. `pavilion-house-1.jpg`)
4. Type `claude` to start a session.
5. Paste the entire prompt below (everything inside the box) exactly as written.
6. Let it scaffold, then run `npm run dev` to preview locally. Iterate by chatting.

---

## THE PROMPT — PASTE THIS INTO CLAUDE CODE

```
I want you to build the complete brand website for Ventino Windows Pvt. Ltd. — a premium uPVC and aluminium doors-and-windows manufacturer in India. The site lives at ventino.in. This is a high-end showcase website with working enquiry and service-request forms.

Read this entire brief before writing any code. There is a /brand-assets folder in this project containing the logo files, the brand guidelines PDF, the story PDF, the brochure PDF, and several brand images. OPEN AND READ Ventino_Brand_Guidelines.pdf, Ventino_The_Story.pdf, and Ventino_Brochure_MMXXVI_New_Branding.pdf first — they define the visual identity, the voice, and all the real content. Use the actual content from these files. Do not invent placeholder copy where real copy exists in these documents.

═══════════════════════════════════════════
TECH STACK (non-negotiable)
═══════════════════════════════════════════
- Next.js (App Router, latest stable) with TypeScript
- Tailwind CSS for styling, with the Ventino design tokens configured in tailwind.config (see palette below)
- React Server Components by default; client components only where interactivity is needed (forms, gallery lightbox, mobile nav)
- Form handling via Next.js Route Handlers (app/api/.../route.ts) — serverless functions
- Email notifications via Resend (https://resend.com) — use the Resend Node SDK. Read RESEND_API_KEY and a NOTIFY_EMAIL from environment variables.
- WhatsApp notifications via the Meta WhatsApp Cloud API (Graph API). Read WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID, and NOTIFY_WHATSAPP_NUMBER from environment variables. Wrap this in a helper so it can be swapped for another provider (e.g. Twilio) later.
- File/photo/video uploads on the forms: accept them client-side, upload to Vercel Blob storage (@vercel/blob), and include the resulting URLs in the notification email + a record. Read BLOB_READ_WRITE_TOKEN from env.
- Deployment target: Vercel. Include a vercel.json if needed, and write the project so `vercel` / `git push` deploys cleanly.
- Provide a complete .env.example listing every environment variable with a one-line comment each.
- All secrets via environment variables only — never hard-code keys.

═══════════════════════════════════════════
BRAND IDENTITY — apply rigorously
═══════════════════════════════════════════
The brand idea: "A window is a threshold, not a hole in a wall." The whole identity is restrained, editorial, calm, and confident. It SHOWS, it does not SHOUT. Luxury through restraint and negative space. Think architectural monograph, not a typical windows-company website.

COLOUR PALETTE (set these as CSS variables / Tailwind tokens):
- Forest    #1F3D2E  — primary; frames, headlines, dark grounds
- Deep Canopy #2D6A4F — secondary green; supporting surfaces
- Leaf      #40916C  — accent green; rules, descriptors, detail
- Sage      #7FB89B  — soft green; text on dark, quiet fields
- Heartwood #6B4226  — warm neutral; earth, timber, depth
- Brass     #A9712F  — THE GLINT. Use as a tiny accent ONLY — never more than ~5% of any view. Never as a background field.
- Glass     #F6F5F0  — primary near-white background. Never use pure white.
- Field     #EBE9DF  — inner field; panels, soft blocks

TYPOGRAPHY:
- Display / headings / wordmark: "Cormorant Garamond" (Google Fonts) — high-contrast serif, generous letter-spacing on the wordmark.
- Body / captions / specs / UI: a clean neutral sans. Use "Helvetica Neue", Arial as the stack; load via system stack or a close Google substitute if needed. The sans NEVER competes with the serif — it is the quiet hardware.
- Lots of generous spacing, large editorial headlines, refined small-caps-style section labels (letter-spaced uppercase, small, in Leaf or Sage).

LOGO USAGE:
- Use ventino_primary_dark (the dark-on-light version) on light/Glass backgrounds.
- Use ventino_primary_reversed on Forest/dark backgrounds.
- Maintain generous clear space around the logo. Use the mark-only version for the favicon.
- Generate a favicon from the logo mark.

DESIGN PRINCIPLES (from the brand guidelines — honour these):
- Frame the void: let negative space do the work.
- Imply the light: no sunbursts or glows; light is a shift of proportion, a brighter field.
- Restraint is the finish: the luxury is in what is left out.
- Every page should feel measured against the line: "A threshold held with poise — an opening that protects, a frame around the light, calm enough to stay closed and confident enough to open."

Aim for a genuinely distinctive, award-quality editorial aesthetic — NOT a generic template. Subtle, tasteful scroll-reveal animations (fade/rise on enter) are welcome but must stay understated. Mobile-first and fully responsive. Accessible (semantic HTML, alt text, keyboard-navigable, good contrast).

═══════════════════════════════════════════
SITE STRUCTURE — pages to build
═══════════════════════════════════════════

1. HOME (/)
   - Hero with the threshold idea — a large editorial headline (e.g. "A frame around the light"), the logo, calm imagery, and a single brass glint accent. Primary CTAs: "Start an Enquiry" and "Explore Our Work".
   - A short brand statement section ("We don't sell windows. We help build homes.") pulled from the brochure foreword.
   - The four product families teaser (Sliding, Casement, Grande Entry, Slide & Fold) — link to Products.
   - A "Houses we helped build" teaser strip — 3–4 featured projects linking to the Projects page.
   - The six promises / performance highlights (acoustic, weather-tight, dust seal, wind load, security, longevity).
   - Closing band: "Every door opens a story. Every window frames a dream." with CTA to enquiry.

2. ABOUT (/about) — THE FULL STORY
   - Tell the complete brand story from Ventino_The_Story.pdf: the prologue (the brief that refused to draw a window), the paradox in the wall, what a window gives and keeps, the feeling Ventino owns, how the idea became the mark, and the name/colour story. Lay it out as a long-form editorial piece with chapter-style sections, pull-quotes, and generous whitespace.
   - Include Mission / Vision / Promise / Personality / Voice from the brand guidelines Foundation page.
   - End on the defining sentence about the threshold.

3. PRODUCTS (/products)
   - The four engineered families, each as a substantial section (use the real copy from the brochure "What we make" page):
     • System One — Sliding ("Walls of glass that move sideways") — reach 4.2m vertical, 16ft openings, 24mm DGU
     • System Two — Casement ("Windows that open all the way") — 5mm single to 38mm DGU, tilt-and-turn
     • System Three — Grande Entry ("The front door, at the right scale") — 65mm sash, up to 4m single leaf, multipoint locking
     • System Four — Slide & Fold ("The wall that simply isn't there") — 5–36mm glazing, multi-panel, corner configs
   - A "How to choose well" guide section (the four questions: how wide, how tall, what it faces, who opens it daily).
   - The six performance promises in detail.
   - The colour/finish library: render the finish names from the brochure as two ranges — Powder Coating (The Elements) and Anodising (Urbane) — as elegant swatch grids. Use representative colours; label each with its name.
   - CTA to enquiry.

4. PROJECTS (/projects) — "Houses we helped build"
   - A gallery showcasing completed sites. Feature the four hero projects with their real write-ups from the brochure:
     • The Pavilion House — Ahmedabad, 2025
     • The Courtyard House — Surat, 2024
     • The Garden Villa — Hyderabad, 2025
     • The White House — Bengaluru, 2026
     Each with its narrative, the systems used, the specification, and the owner quote.
   - Plus a "wider portfolio" grid of the additional projects listed in the brochure (Mumbai – The Louvre House, Ahmedabad – The Stack, Surat – Element House, Vadodara – The Library, Pune – The Concrete Pavilion, Goa – Garden Bungalow, Hyderabad – The Bedroom, Bengaluru – Sitting Room, Chennai – The Townhouse).
   - Build the gallery to read project images from a structured data file (e.g. /data/projects.ts) so I can add/replace photos easily. I will provide photos; use clearly-named placeholders where a photo is missing, and make swapping them a one-line change in the data file. Include a lightbox/enlarge interaction.

5. ENQUIRY (/enquiry) — new-project enquiry form
   This is the primary lead form. Welcome people warmly to share their project. Fields:
   - Name (required)
   - Contact number (required)
   - Email (required)
   - Site address (required)
   - Product type / system interest (multi-select: Sliding, Casement, Grande Entry, Slide & Fold, Not sure yet)
   - Preferred glass type (select: Single glazed, Double glazed (DGU), Acoustic laminated, Solar-control, Not sure)
   - Project stage (select: Planning, Under construction, Renovation, Other)
   - File uploads (allow multiple): Door & Window Schedule, Floor plans with windows marked, and any other reference docs. Accept PDF, images, common doc/spreadsheet formats.
   - A free-text "Tell us about your project" box.
   On submit: upload files to Vercel Blob, then send BOTH an email (to NOTIFY_EMAIL) and a WhatsApp message (to NOTIFY_WHATSAPP_NUMBER) summarising the enquiry with the uploaded file links. Show a graceful thank-you state. Validate inputs and handle errors cleanly.

6. SERVICE REQUEST (/service) — existing-customer support form
   Fields:
   - Name (required)
   - Contact number (required)
   - Email (required)
   - Installation address (required)
   - Product type installed (select: Sliding, Casement, Grande Entry, Slide & Fold, Mixed / Not sure)
   - Tentative installation date (date picker, optional)
   - Description of the problem (free text, required)
   - Photo and video uploads (allow multiple) explaining the problem — accept images and video files.
   On submit: same flow — upload to Blob, then notify BOTH email and WhatsApp, with a clearly-labelled "SERVICE REQUEST" subject so it's distinguishable from new enquiries. Thank-you state on success.

7. DOWNLOADS (/downloads)
   - A tab/section where visitors can download brochures and related PDFs. Serve at minimum the Ventino MMXXVI brochure (Ventino_Brochure_MMXXVI_New_Branding.pdf). Structure it so I can add more PDFs by dropping files into a /public/downloads folder and adding an entry to a data file. Show each as an elegant card with title, short description, and a download button.

8. CONTACT (/contact)
   Use the real company info from the brochure's back page:
   - Service (toll-free): 1800 309 0280 — for existing customers, service requests, warranty
   - Sales & new projects: +91 96506 70009, +91 98101 62315
   - Email: ventinowindows@gmail.com, rish.ventino@gmail.com
   - Studio / online: ventino.in
   - Registered address: Ventino Windows Pvt. Ltd., Village Sunped, Sahupura, Faridabad — Ballabgarh, Haryana
   - GSTIN: 06AAECV7297D1Z2
   - Include the "How we work" 7-step process (site visit → specification → samples → shop drawings → fabrication → installation → aftercare) and the 10-year structural warranty note.
   - Optional: embed a Google Map of the Faridabad location.

═══════════════════════════════════════════
GLOBAL / SHARED
═══════════════════════════════════════════
- A refined sticky header: the logo (left), nav links (Home, About, Products, Projects, Downloads, Contact), and a brass-accented "Enquiry" button (right). Transparent over the hero, solidifying to Forest or Glass on scroll. Mobile: elegant hamburger drawer.
- A footer in Forest green with the reversed logo, the threshold tagline, quick links, contact essentials, and a small link to the OMS portal at https://oms.ventino.in labelled discreetly (e.g. "Team Login" or "Order Portal").
- Consistent section labels (letter-spaced uppercase, small).
- SEO: per-page metadata, Open Graph tags (use a brand image), a sitemap, robots.txt, and sensible titles/descriptions. Add JSON-LD LocalBusiness structured data using the real company details.
- Favicon and app icons from the logo mark.
- A /data folder holding editable content (projects, finishes, downloads, product systems) so non-code content updates are easy.

═══════════════════════════════════════════
BUILD ORDER
═══════════════════════════════════════════
1. Scaffold the Next.js + TypeScript + Tailwind project. Configure the colour tokens and fonts. Set up the logo, favicon, and global layout (header + footer).
2. Build the design system primitives (typography, buttons, section label, container, swatch) so every page is consistent.
3. Build Home, then About, Products, Projects, Downloads, Contact.
4. Build the Enquiry and Service forms with full client-side validation and the API route handlers (Blob upload + Resend email + WhatsApp notify), wrapped in clean, swappable helper modules.
5. Add SEO, structured data, sitemap, OG tags.
6. Write a clear README.md covering: local setup, every environment variable, how to add projects/downloads/photos, how to get the Resend and WhatsApp Cloud API credentials, and step-by-step Vercel deployment + pointing the ventino.in domain at it.
7. Provide .env.example.

Work in clear, reviewable steps. After scaffolding, pause and show me the home page so I can run `npm run dev` and react. Then continue page by page. Keep the code clean, typed, and commented where non-obvious. Prioritise getting a beautiful, working site I can deploy quickly.

Start now: read the three PDFs in /brand-assets, confirm the palette and fonts you'll use, then scaffold the project.
```

---

## AFTER THE BUILD — QUICK DEPLOY CHECKLIST

1. **Run locally:** `npm run dev` → open http://localhost:3000 and review.
2. **Get credentials** (the README will explain each):
   - **Resend:** sign up at resend.com, verify a sending domain (or use their onboarding address to start), grab the API key.
   - **WhatsApp Cloud API:** create a Meta developer app → add WhatsApp → get the temporary/permanent token, the phone number ID, and register your notify number.
   - **Vercel Blob:** create a Blob store in the Vercel dashboard → copy the read/write token.
3. **Push to GitHub**, then import the repo into **Vercel** (vercel.com → New Project).
4. **Add the environment variables** from `.env.example` into Vercel's project settings.
5. **Point the domain:** in Vercel → Project → Domains, add `ventino.in` and `www.ventino.in`, then update the DNS records at your registrar as Vercel instructs.
6. **Done** — every `git push` now redeploys automatically.

---

## NOTES & SUGGESTIONS

- **WhatsApp Cloud API templates:** Meta requires pre-approved message templates for business-initiated messages outside a 24-hour window. For notifications *to you* (the business) this is usually fine, but if delivery is ever blocked, the fallback is the email notification — which is why the prompt wires up both. You can also swap WhatsApp for Twilio later via the helper module.
- **Photos:** the gallery reads from `/data/projects.ts`, so you can keep launching with placeholders and drop real site photos in as they come, one line per image.
- **OMS link:** kept discreet in the footer so the public site and your internal portal stay cleanly separated.
- If you'd rather not deal with WhatsApp API setup on day one, tell Claude Code to "stub the WhatsApp helper to log instead of send, and ship email-only first" — then enable WhatsApp later. The site will still go live fast.
