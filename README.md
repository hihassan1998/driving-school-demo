# 🚗 Norra Halkbanan (norrahalkbanan.se) Redesign

A modern, high-performance, mobile-first web application for **Norra Halkbanan i Piteå AB** — official certified training provider for **Riskutbildning 2 (Risktvåan)** for Passenger Cars, Motorcycles, and Professional Driver CPC (YKB) in Norrbotten, Sweden.

Rebuilt from a legacy WordPress site into a modern **Next.js 16 App Router** project featuring a Nordic safety design system, zero-latency bilingual support (Swedish & English), interactive gallery, accredited driving school backlinks, and direct booking conversion via **bokningskoll.se**.

---

## ✨ Key Features

- **🚀 Next.js 16 App Router & React 19:** Ultra-fast static pre-rendering with dynamic metadata and SEO optimization.
- **🌐 Native Bilingual Support (SV / EN):** Instant language switching toggle (Swedish & English) backed by a lightweight content dictionary (`lib/dictionary.ts`).
- **📅 Direct Booking Integration:** Conversion-focused primary and secondary CTAs explicitly targeting **[Riskutbildning 2 bokning (bokningskoll.se/norra)](https://www.bokningskoll.se/norra)**.
- **🖼️ Interactive Photo Gallery:** High-quality gallery showing training track facilities, vehicles, classrooms, rollover simulator, and crash/whiplash sled test equipment with category filtering & lightbox modal.
- **🎓 Partner Driving Schools Directory:** Backlink directory listing accredited regional driving schools (*Roberts, Expansa, 3050, Po's, Vågelinds, MT, AHA, Staans, MK, City, Ranheimers, Centrala, Norra*) and public authorities (*Försvarsmakten, Migrationsverket, Arbetsmiljöverket*).
- **📍 Interactive Location & Contact:** Embedded interactive Google Maps for **Fordonsvägen 2, 941 43 Piteå** alongside NAP details and quick message form.
- **🔍 Technical SEO & Schema:** Built-in `LocalBusiness` JSON-LD structured data, dynamic `/sitemap.xml`, and `/robots.txt`.

---

## 🎨 Tech Stack

| Technology | Role |
| :--- | :--- |
| **[Next.js 16](https://nextjs.org/)** | React Framework with App Router & Static Site Generation |
| **[React 19](https://react.dev/)** | Component & State Management |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety & props definition |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first Nordic safety styling & custom theme variables |
| **[Lucide Icons](https://lucide.dev/)** | Modern vector icon set |

---

## 📁 Repository Structure

```
.
├── app/
│   ├── layout.tsx             # Root layout with Inter font, SV/EN provider, JSON-LD schema
│   ├── page.tsx               # Homepage with Hero, Services, WhyUs, Gallery, Partners, FAQ, Contact
│   ├── risk-2-bil/page.tsx    # Risk 2 Bil dedicated course page
│   ├── risk-2-mc/page.tsx     # Risk 2 MC dedicated course page
│   ├── ykb-utbildning/page.tsx# YKB professional driver training page
│   ├── boka/page.tsx           # Dedicated booking hub (redirects to bokningskoll.se/norra)
│   ├── kontakt/page.tsx        # Contact & location page
│   ├── sitemap.ts             # Dynamic XML sitemap generator
│   └── robots.ts              # SEO robots configuration
├── components/
│   ├── Header.tsx             # Responsive header with official logo & SV/EN toggle
│   ├── Footer.tsx             # Footer with NAP info & Transportstyrelsen accreditation badge
│   ├── Hero.tsx               # High-conversion hero section
│   ├── Services.tsx           # Service cards for Risk 2 Bil, Risk 2 MC, YKB
│   ├── GallerySection.tsx     # Interactive photo gallery with category filter & lightbox
│   ├── PartnersSection.tsx    # Backlink directory for partner driving schools
│   ├── BookingSection.tsx     # Dedicated conversion banner linking to bokningskoll.se/norra
│   ├── FAQSection.tsx         # Accessible bilingual accordion
│   └── ContactSection.tsx     # Contact details & Google Maps embed
├── lib/
│   ├── constants.ts           # Business parameters & booking URL (bokningskoll.se/norra)
│   ├── dictionary.ts          # Bilingual Swedish/English content dictionary
│   └── utils.ts               # Tailwind class merging utility
├── public/                    # Static assets
├── next.config.ts             # Image domain configuration
└── package.json               # Dependencies & scripts
```

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js `^18.17.0` or `^20.0.0` or `^24.0.0`
- npm `^10.0.0`

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/hihassan1998/driving-school-demo.git

# Navigate to project directory
cd driving-school-demo

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
# Build static pages and type check
npm run build

# Start production server
npm start
```

---

## 🚀 Deployment

This project is configured for 1-click zero-config deployment on **[Vercel](https://vercel.com)**.

1. Connect your GitHub repository to Vercel.
2. Select **Next.js** framework preset.
3. Deploy!

---

## 📝 Business Information

- **Company:** Norra Halkbanan i Piteå AB
- **Address:** Fordonsvägen 2, 941 43 Piteå, Sweden
- **Phone:** `0911-100 21`
- **Email:** `info@norrahalkbanan.se`
- **Booking Portal:** [https://www.bokningskoll.se/norra](https://www.bokningskoll.se/norra)
- **Accreditation:** Transportstyrelsen Godkänd Riskutbildare
