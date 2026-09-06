import React from "react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { BookingSection } from "@/components/BookingSection";
import { FAQSection } from "@/components/FAQSection";
import { Car, Clock, ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Riskutbildning 2 Bil (Risktvåan) Piteå",
  description:
    "Boka obligatorisk Riskutbildning 2 Bil (halkbana) i Piteå. Praktisk körning på modern halkbana. Godkänd av Transportstyrelsen.",
};

export default function Risk2BilPage() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Title Header */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs mb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-full mb-4">
            <Car className="w-4 h-4" />
            <span>Personbil (Körkort B)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Riskutbildning 2 Bil — Halkbana i Piteå
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
            Riskutbildning 2 för personbil (även känd som Risktvåan eller Halkbanan) är en obligatorisk del av körkortsutbildningen för B-körkort. Utbildningen syftar till att ge dig förståelse för hur fordonet bete sig vid svåra väglag samt vikten av rätt hastighet och säkerhetsavstånd.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-blue-700" />
              <span>Tidsåtgång: ca 3,5 timmar</span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-2 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Godkänd av Transportstyrelsen</span>
            </div>

            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm ml-auto"
            >
              <span>Riskutbildning 2 bokning</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Details & Syllabus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Vad ingår i utbildningen?
            </h2>
            <ul className="space-y-3">
              {[
                "Körning under särskilda förhållanden (halka, blöta vägbanor)",
                "Bromsprov i olika hastigheter och jämförelse av bromssträckor",
                "Undanmanöver och sladdhantering",
                "Säkerhetsutrustning i bilen (ABS, antisladd, krockkudde)",
                "Diskussion och reflektion kring mänskliga begränsningar och risker",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Viktigt inför din utbildning
            </h2>
            <ul className="space-y-3">
              {[
                "Du måste kunna legitimera dig med en giltig fysisk ID-handling (pass, nationellt ID-kort eller godkänt leg).",
                "Du bør behärska grundläggande bilkörning (start, stopp, växling och manövrering).",
                "Klä dig efter rådande väderlag — delar av utbildningen sker utomhus på halkbanan.",
                "Efter genomförd utbildning rapporterar vi resultatet direkt digitalt till Transportstyrelsen.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <BookingSection />
        <FAQSection />
      </div>
    </div>
  );
}
