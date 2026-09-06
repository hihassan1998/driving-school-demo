---
description: Set up MongoDB Atlas for optional data persistence
---

# MongoDB Integration Skill

You are a backend expert setting up MongoDB Atlas for the Norra Halkbanan website.

## When to Use MongoDB

Only implement a database if the website requires:
- A contact form that stores submissions
- A simple CMS for updating content (services, prices, dates)
- User accounts or booking history
- Analytics or lead tracking

If the site is purely informational with a link to bokningskoll.se, a database may not be needed.

## Setup (If Needed)

### 1. Create MongoDB Atlas Cluster
- Sign up at mongodb.com/atlas
- Create a free tier cluster (M0)
- Set up database user and network access

### 2. Environment Variables
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DB=norrahalkbanan
```

### 3. Database Schema
```bash
typescript
// lib/models/contact.ts
export interface ContactSubmission {
  name: string
  email: string
  phone?: string
  message: string
  createdAt: Date
  status: 'new' | 'read' | 'replied'
}

// lib/models/booking-enquiry.ts
export interface BookingEnquiry {
  name: string
  email: string
  phone: string
  preferredDate?: string
  participants?: number
  message?: string
  createdAt: Date
  status: 'new' | 'contacted' | 'booked'
}
```

### 4. API Routes (Next.js App Router)
```bash
typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json()
  // Validate, save to MongoDB, send email notification
  return Response.json({ success: true })
}
```

###  5. Email Notification
Use Resend, Nodemailer, or SendGrid

Send email to info@norrahalkbanan.se when new submission arrives

Include all form data in a readable format

Security Considerations
Validate all input (zod or similar)

Sanitize HTML to prevent XSS

Rate-limit API endpoints

Never expose MONGODB_URI in client-side code

text

---

### Skill 6: SEO Optimization (`seo-optimization/SKILL.md`)

```markdown

---
description: Optimize the website for search engines and local visibility
---

# SEO Optimization Skill

You are an SEO specialist optimizing the Norra Halkbanan website.

## Local SEO (Priority)

### Google Business Profile
- Ensure the business is listed on Google Maps
- Verify NAP consistency (Name, Address, Phone) across all platforms
- Encourage customer reviews

### Local Keywords
Target keywords with local intent:
- "Riskutbildning 2 Piteå"
- "Halkbanan Norrbotten"
- "Körkort riskutbildning Piteå"
- "Riskutbildning billigt Piteå"
- "Norra Halkbanan omdöme"

### Structured Data (JSON-LD)
Implement these schema types:
- LocalBusiness
- Product (for the training course)
- Review (if they have reviews)
- FAQPage (for common questions)

## On-Page SEO

### Meta Tags
Each page should have unique:
- Title (50-60 characters)
- Description (150-160 characters)
- Open Graph tags (for social sharing)

### Heading Structure
- H1: Main page title (only one per page)
- H2: Section headings
- H3: Sub-section headings

### Content Optimization
- Include target keywords naturally in content
- Write for humans first, search engines second
- Aim for 300+ words per page (except landing page)
- Use internal links between pages

## Technical SEO

### Site Structure
- Clean URL structure: `/tjanster`, `/boka`, `/kontakt`
- No duplicate content
- XML sitemap generated dynamically
- robots.txt properly configured

### Performance (Core Web Vitals)
- LCP < 2.5s (use next/image, CDN)
- FID < 100ms (minimize JavaScript)
- CLS < 0.1 (avoid layout shifts)
- Use next/font for self-hosting fonts

### Mobile SEO
- Mobile-first indexing (Google prioritizes mobile version)
- Tap targets ≥ 44px
- Readable text without zooming

## Analytics & Tracking
- Google Analytics 4 (or Plausible for privacy)
- Google Search Console (submit sitemap)
- Monitor: Impressions, CTR, average position, top queries

## Content Ideas
- FAQ page: "Vad ingår i Riskutbildning 2?" "Hur lång tid tar utbildningen?"
- Blog post: "Varför är Riskutbildning 2 viktig?" (optional)
- About page: History, instructors, facility details