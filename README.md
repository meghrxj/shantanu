# Shantanu Enterprises — Website

Two decades of single-window industrial supply for Pune's manufacturers.
A clean, editorial Next.js 14 site, mobile-first, ready for Vercel.

---

## What's inside

- **Next.js 14 (App Router)** + TypeScript + Tailwind CSS
- **No errors, no broken links** — every internal link resolves to a real page
- **Mobile-first nav** with a full-screen drawer on small screens, sticky bar on desktop
- **Editorial design** inspired by Third Bridge: warm cream, deep navy, characterful Fraunces serif + Manrope body
- **Logo placeholders** (boxes) — never text-as-logo. Drop your final PNG/SVG into `public/` and update `src/components/Logo.tsx`
- **Contact form** that already submits to `/api/quote` — currently in preview mode. Add a Google Sheets webhook URL later to start collecting leads.

---

## Pages

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/products` | Products overview |
| `/products/packing-materials` | Packing Materials (8 sub-categories) |
| `/products/safety-equipment` | Safety & PPE (8 sub-categories) |
| `/products/finishing-chemicals` | Finishing & Chemicals (8 sub-categories) |
| `/products/housekeeping` | Housekeeping & Cleaning (6 sub-categories) |
| `/industries` | Industries Served |
| `/why-shantanu` | Why Shantanu |
| `/quality` | Quality & Compliance |
| `/clients` | Clients |
| `/contact` | Contact / RFQ form |

Sub-categories live as anchor sections inside each category page — that's deliberate, so there are no broken `/products/.../sub-x` URLs.

---

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

---

## Deploy to Vercel (in five minutes)

### Step 1 — Push to GitHub

```bash
cd shantanu-enterprises
git init
git add .
git commit -m "Initial commit"

# Create a new empty repo on github.com (don't add a README — the project already has one),
# then run the two lines GitHub shows you:
git remote add origin https://github.com/<your-username>/shantanu-enterprises.git
git branch -M main
git push -u origin main
```

### Step 2 — Connect Vercel

1. Go to https://vercel.com/new
2. Pick the `shantanu-enterprises` repo
3. Click **Deploy** — Vercel auto-detects Next.js, no settings needed
4. Wait ~60 seconds; you'll get a `<project>.vercel.app` URL

### Step 3 — Custom domain (optional)

In your Vercel project: **Settings → Domains → Add** → enter `shantanuenterprises.com` (or whatever you own) → follow the DNS instructions Vercel shows.

---

## Wire the contact form to an Excel / Google Sheet later

The form already works end-to-end. In preview mode every submission is logged to your Vercel function logs (Vercel dashboard → Project → Logs). To pipe submissions into a spreadsheet:

1. Open a fresh **Google Sheet** with these columns: `submittedAt`, `name`, `company`, `email`, `phone`, `vertical`, `message`
2. **Extensions → Apps Script** → paste:

   ```js
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     sheet.appendRow([
       data.submittedAt || new Date().toISOString(),
       data.name || "",
       data.company || "",
       data.email || "",
       data.phone || "",
       data.vertical || "",
       data.message || "",
     ]);
     return ContentService.createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **Deploy → New deployment → Web app**, set **Execute as: me**, **Who has access: Anyone**, copy the URL
4. In Vercel: **Settings → Environment Variables → Add** `SHEET_WEBHOOK_URL` = that URL, redeploy
5. In `src/app/api/quote/route.ts`, uncomment the forward block and push

Submissions now flow into your sheet, and the sheet exports to Excel any time you want.

---

## Customising

| Want to change… | Edit |
|---|---|
| Phone, email, address, name, established year | `src/lib/site.ts` |
| Product taxonomy / SKUs | `src/lib/products.ts` |
| Colours | `tailwind.config.ts` (the `colors` object) and `src/app/globals.css` |
| Fonts | `src/app/layout.tsx` (the `Fraunces` and `Manrope` imports) |
| Logo (Shantanu's mark) | `src/components/Logo.tsx` — replace the inline SVG with `<img src="/logo.png" />` once you drop the file in `public/` |
| Client logos | `public/clients/*.png` (drop them in) and replace the placeholder loop in `src/components/ClientStrip.tsx` and `src/app/clients/page.tsx` |

---

## What was removed from the brief

- **Careers page** — removed entirely as requested
- **Specific Pirangut sub-locality names** (Kasar Amboli, Urawade, etc.) — the site now says only "Pirangut, Pune" everywhere
- **Heavy photography** — replaced with a quieter, type-led editorial layout. Less imagery, more whitespace.

---

## Contact info baked into the site

- **Email:** shantanu.ent@gmail.com
- **Phone:** +91 9325848496
- **Address:** Pirangut, Pune

Change these in **one** file: `src/lib/site.ts`. Everything else updates automatically.
