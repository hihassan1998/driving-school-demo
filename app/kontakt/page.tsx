import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt & Hitta hit | Norra Halkbanan Piteå",
  description:
    "Kontakta Norra Halkbanan i Piteå AB. Adress: Fordonsvägen 2, 941 43 Piteå. Telefon: 0911-100 21. E-post: info@norrahalkbanan.se.",
};

export default function KontaktPage() {
  return (
    <div className="bg-slate-50 py-6">
      <ContactSection />
    </div>
  );
}
