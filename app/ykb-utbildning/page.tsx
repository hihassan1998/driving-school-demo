import React from "react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { BookingSection } from "@/components/BookingSection";
import { Truck, Clock, ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "YKB Utbildning Piteå | Yrkesförarkompetens | Norra Halkbanan AB",
  description:
    "YKB fortbildning och delkurser 1-5 för godstransport och persontransport i Piteå. Transportstyrelsen-godkänd utbildare för tung trafik.",
};

export default function YkbPage() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs mb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-full mb-4">
            <Truck className="w-4 h-4" />
            <span>Yrkesförare (Tung trafik C & D)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            YKB Utbildning — Yrkesförarkompetens i Piteå
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
            Vi erbjuder fortbildning och kurser för Yrkeskompetensbevis (YKB) för godstransporter och persontransporter. Våra utbildningar uppfyller samtliga krav från Transportstyrelsen och är anpassade för både enskilda yrkesförare och åkerier.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-blue-700" />
              <span>Delkurser 1-5 (35 timmar totalt)</span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-2 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Transportstyrelsen Certifierad</span>
            </div>

            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm ml-auto"
            >
              <span>Boka YKB på Bokningskoll</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              YKB Delkurser (1-5)
            </h2>
            <ul className="space-y-3">
              {[
                "Delkurs 1: Sparsam körning & optimering av drivlina",
                "Delkurs 2: Godstransporter / Persontransporter",
                "Delkurs 3: Lagar, regler, kör- och vilotider",
                "Delkurs 4: Ergonomi, hälsa, trafiksäkerhet & kundbemötande",
                "Delkurs 5: Trafiksäkerhet & agerande vid nödsituationer",
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
              För åkerier & företag
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Behöver ditt företag utbilda flera förare samtidigt? Vi skräddarsyr YKB-utbildningar direkt anpassade efter ert åkeris scheman och behov.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs text-blue-900 font-medium">
              Kontakta oss på tel <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="underline font-bold">{SITE_CONFIG.phone}</a> eller e-post <a href={`mailto:${SITE_CONFIG.email}`} className="underline font-bold">{SITE_CONFIG.email}</a> för offert på gruppbokning.
            </div>
          </div>
        </div>

        <BookingSection />
      </div>
    </div>
  );
}
