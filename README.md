# SPARK Maklerservice – Website

Modern Next.js 14 website for SPARK Maklerservice GmbH.

## Tech Stack

- **Next.js 14** (App Router) · **Tailwind CSS v3** · **Framer Motion** · **TypeScript**
- **Vercel Blob** for dynamically published blog articles
- **gray-matter** for MDX frontmatter parsing

---

## Local Development

```bash
npm install
cp .env.example .env.local   # edit PUBLISH_TOKEN
npm run dev                  # http://localhost:3000
```

---

## Blog Content

### Local (development)

Add `.mdx` files to `content/blog/` with frontmatter:

```mdx
---
title: "Artikel-Titel"
date: "15. April 2025"
category: "Einsteiger"
excerpt: "Kurze Beschreibung"
coverImage: "https://example.com/bild.jpg"
metaTitle: "SEO Titel"
metaDescription: "SEO Beschreibung"
---

Inhalt in Markdown...
```

### Production (n8n integration via Vercel Blob)

Articles published via the API are stored in Vercel Blob and visible without a redeploy.

**Endpoint:** `POST /api/publish-article`

```
Authorization: Bearer YOUR_PUBLISH_TOKEN
Content-Type: application/json
```

```json
{
  "title": "Artikel-Titel",
  "slug": "artikel-slug",
  "content": "# Inhalt\n\nText...",
  "category": "Steuern",
  "excerpt": "Kurze Beschreibung",
  "coverImage": "https://example.com/bild.jpg",
  "metaTitle": "SEO-Titel",
  "metaDescription": "SEO-Beschreibung"
}
```

---

## Vercel Deployment

```bash
# 1. Link to Vercel
npx vercel link

# 2. Add Blob storage (auto-sets BLOB_READ_WRITE_TOKEN)
#    Vercel Dashboard → Storage → Create → Blob

# 3. Set environment variables in Vercel dashboard:
#    PUBLISH_TOKEN  →  your-secret-token
#    SITE_URL       →  https://spark-maklerservice.com

# 4. Deploy
npx vercel --prod
```

### Required env vars

| Variable | Description |
|---|---|
| `PUBLISH_TOKEN` | Secret for `/api/publish-article` (n8n) |
| `BLOB_READ_WRITE_TOKEN` | Auto-set by Vercel Blob integration |
| `SITE_URL` | Used by next-sitemap for sitemap generation |

---

## Project Structure

```
app/
  layout.tsx              Root layout (fonts, metadata, navbar, footer)
  page.tsx                Homepage (all sections)
  about/page.tsx          About + team
  blog/page.tsx           Blog listing
  blog/[slug]/page.tsx    Blog post
  kontakt/page.tsx        Contact + Calendly embed
  api/publish-article/    n8n webhook endpoint
components/
  Navbar, Footer, Hero, SocialProof, WhyRealEstate
  Process, Renditerechner, Testimonials, Team
  BlogPreview, CTASection
lib/blog.ts               Blog reader (filesystem + Blob)
content/blog/             Local MDX files
```
