# Ventino Windows — Brand Website

**ventino.in** — premium uPVC and aluminium doors and windows, India.

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in every value before running forms locally or deploying.

| Variable | What it is |
|---|---|
| `RESEND_API_KEY` | From [resend.com/api-keys](https://resend.com/api-keys) |
| `NOTIFY_EMAIL` | Email address that receives all enquiry + service notifications |
| `WHATSAPP_TOKEN` | Meta WhatsApp Cloud API bearer token |
| `WHATSAPP_PHONE_NUMBER_ID` | The Phone Number ID from Meta developer console |
| `NOTIFY_WHATSAPP_NUMBER` | The WhatsApp number to send notifications TO (country code, no +) |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob store read/write token |

### Getting each credential

**Resend (email)**
1. Sign up at [resend.com](https://resend.com)
2. Verify a sending domain (or use the sandbox address during development)
3. API Keys → Create → copy the key

**WhatsApp Cloud API**
1. [developers.facebook.com](https://developers.facebook.com) → My Apps → Create App → Business
2. Add the WhatsApp product
3. WhatsApp → API Setup → copy the temporary access token and Phone Number ID
4. Add your notify number as a test recipient
5. For production: apply for a permanent token and get the number verified

**Vercel Blob**
1. [vercel.com](https://vercel.com) → your project → Storage tab → Create → Blob
2. Copy the `BLOB_READ_WRITE_TOKEN`

---

## Adding projects

1. Drop photos into `/public/images/projects/<project-id>/` — name them `cover.jpg`, `01.jpg`, `02.jpg`, ...
2. Open [`data/projects.ts`](data/projects.ts)
3. Add an entry to `portfolioProjects` (or `heroProjects`) following the existing pattern
4. Use `imgs("project-id", count, "Project Name, City")` to generate the image list

**Image mapping note:** The 13 WhatsApp folders were mapped to project slugs visually. If any assignment is wrong, update the `id` field in `data/projects.ts` and rename the folder in `/public/images/projects/` to match.

---

## Adding downloads

1. Drop the PDF into `/public/downloads/`
2. Open [`data/downloads.ts`](data/downloads.ts) and add an entry:
   ```ts
   { id: "my-doc", title: "My Document", description: "...", filename: "MyDocument.pdf", size: "1.2 MB" }
   ```

---

## Deploying to Vercel

1. Push the repo to GitHub
2. [vercel.com](https://vercel.com) → New Project → import the repo
3. Framework: **Next.js** (auto-detected)
4. Add all `.env.example` variables in **Project Settings → Environment Variables**
5. Deploy — every `git push` redeploys automatically

### Pointing ventino.in at Vercel

1. Vercel project → **Domains** → add `ventino.in` and `www.ventino.in`
2. At your DNS registrar, add the A/CNAME records Vercel shows
3. Vercel handles SSL automatically

---

## Site structure

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | The full brand story |
| `/products` | Four engineered systems + finishes |
| `/projects` | Portfolio — 4 hero + 9 portfolio projects |
| `/enquiry` | New project enquiry form |
| `/service` | Existing customer service request |
| `/downloads` | Brochure + spec sheet downloads |
| `/contact` | Contact info + 7-step process |
| `/api/enquiry` | Route handler: upload → email + WhatsApp |
| `/api/service` | Route handler: upload → email + WhatsApp |

---

## Content files (non-code updates)

| File | Controls |
|---|---|
| [`data/projects.ts`](data/projects.ts) | All project copy, images, narratives, quotes |
| [`data/products.ts`](data/products.ts) | Product system specs + performance promises |
| [`data/finishes.ts`](data/finishes.ts) | Powder coating + anodising colour swatches |
| [`data/downloads.ts`](data/downloads.ts) | Downloadable PDF library |

---

## Tech stack

- **Next.js 15** (App Router, TypeScript, React Server Components)
- **Tailwind CSS v4** with Ventino brand tokens
- **Resend** for email notifications
- **Meta WhatsApp Cloud API** for WhatsApp notifications (swappable via `lib/whatsapp.ts`)
- **Vercel Blob** for file uploads from forms
- **Vercel** for deployment

---

## Stubbing WhatsApp for day-one launch

If you want to go live without WhatsApp configured, just omit the three `WHATSAPP_*` variables. The helper in `lib/whatsapp.ts` logs a warning and skips the send — email still works.
