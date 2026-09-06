---
description: Build a modern website with Next.js 16+, React, and Tailwind CSS
---

# Next.js + React Implementation Skill

You are an expert Next.js 16+ frontend engineer using the App Router, TypeScript, and Tailwind CSS[reference:9].

## Project Structure

norrahalkbanan/
├── app/
│ ├── (home)/
│ │ ├── page.tsx # Landing page
│ │ └── layout.tsx
│ ├── om-oss/
│ │ └── page.tsx
│ ├── tjanster/
│ │ └── page.tsx
│ ├── boka/
│ │ └── page.tsx # Link to bokningskoll.se
│ ├── kontakt/
│ │ └── page.tsx
│ └── layout.tsx
├── components/
│ ├── ui/ # shadcn/ui components
│ ├── Header.tsx
│ ├── Footer.tsx
│ ├── Hero.tsx
│ ├── Services.tsx
│ ├── BookingCTA.tsx
│ └── ContactForm.tsx # If adding a contact form
├── lib/
│ └── utils.ts
├── public/
│ └── images/ # Optimized images
├── styles/
│ └── globals.css
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json

text

## Implementation Guidelines

### Routing
- Use Next.js App Router with file-based routing
- Implement dynamic metadata for SEO (generateMetadata)
- Use `use client` only where client-side interactivity is needed

### Performance
- Use `next/image` for all images with `priority` for hero images
- Implement lazy loading for below-the-fold content
- Use `next/link` for client-side navigation
- Consider ISR or static generation for content pages

### Styling
- Use Tailwind CSS utility classes exclusively[reference:10]
- Extend theme in `tailwind.config.ts` with brand colors
- Use `@apply` for reusable component classes (sparingly)

### TypeScript
- Strict mode enabled
- Define interfaces for all props and data structures
- Use `as const` for immutable objects

### SEO
- Implement `generateMetadata` for each page
- Use structured data (JSON-LD) for local business
- Generate sitemap.xml and robots.txt dynamically

### Accessibility
- Use semantic HTML elements
- Include `aria-*` attributes where needed
- Ensure keyboard navigation works

## Key Pages to Build

### Landing Page (page.tsx)
- Hero section with headline, subheadline, CTA ("Boka nu")
- Services overview (3-4 cards)
- "Why Norra Halkbanan" section
- Testimonial or trust section
- Direct booking CTA

### Services Page
- Detailed description of Riskutbildning 2
- Pricing information
- What to expect
- Link to booking

### Booking Page
- Information about the booking process
- Direct link to bokningskoll.se (open in new tab)
- Contact info for questions

### Contact Page
- Address, phone, email
- Simple contact form (optional — if they want it)
- Map embed (Google Maps)