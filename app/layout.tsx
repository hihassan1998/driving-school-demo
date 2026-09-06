import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { LanguageProvider } from "@/components/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Halkbana och Riskutbildning 2 Piteå | Norra Halkbanan AB",
    template: "%s | Norra Halkbanan i Piteå AB",
  },
  description:
    "Boka Riskutbildning 2 (Risktvåan) för Personbil, MC och YKB i Piteå. Godkänd av Transportstyrelsen. Boka dina tider enkelt via bokningskoll.se/norra.",
  icons: {
    icon: "https://www.norrahalkbanan.se/wp-content/uploads/2017/10/logga.png",
    shortcut: "https://www.norrahalkbanan.se/wp-content/uploads/2017/10/logga.png",
    apple: "https://www.norrahalkbanan.se/wp-content/uploads/2017/10/logga.png",
  },
  keywords: [
    "Riskutbildning 2 Piteå",
    "Risktvåan Piteå",
    "Halkbana Piteå",
    "Halkbana Norrbotten",
    "Risk 2 MC Piteå",
    "YKB utbildning Piteå",
    "Körkort riskutbildning Piteå",
    "Norra Halkbanan",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_CONFIG.url,
    title: "Halkbana & Riskutbildning 2 Piteå | Norra Halkbanan AB",
    description:
      "Boka Riskutbildning 2 (Risktvåan) för Bil, MC och YKB i Piteå. Godkänd av Transportstyrelsen.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "https://www.norrahalkbanan.se/wp-content/uploads/2017/10/logga.png",
        width: 638,
        height: 181,
        alt: "Norra Halkbanan Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    image: "https://www.norrahalkbanan.se/wp-content/uploads/2017/10/logga.png",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "65.318",
      longitude: "21.480",
    },
    openingHours: "Mo-Fr 08:00-16:30",
    priceRange: "$$",
    description: SITE_CONFIG.description,
  };

  return (
    <html lang="sv" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-slate-950">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />

          {/* Lower level layout disclaimer banner below the footer */}
          <div className="bg-slate-900 border-t border-slate-800 text-slate-400 text-[11px] py-3 px-4 text-center">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>
                <strong>Legal Disclaimer:</strong> Unofficial Redesign Demo created for presentation & evaluation only.
              </span>
              <span>
                Original site: <a href="https://www.norrahalkbanan.se/" target="_blank" rel="noopener noreferrer" className="underline text-amber-400 font-semibold">norrahalkbanan.se</a>
              </span>
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
