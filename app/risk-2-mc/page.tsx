import React from "react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { BookingSection } from "@/components/BookingSection";
import { Bike, Clock, ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Riskutbildning 2 MC Piteå | Norra Halkbanan AB",
  description:
    "Boka obligatorisk Riskutbildning 2 för Motorcykel (A1, A2, A) i Piteå. Bromsteknik, undanmanöver och balansträning på godkänd halkbana.",
};

export default function Risk2MCPage() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs mb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-full mb-4">
            <Bike className="w-4 h-4" />
            <span>Motorcykel (Behörighet A1, A2, A)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Riskutbildning 2 MC — Piteå Halkbana
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
            Riskutbildning 2 MC är den praktiska delutbildningen i riskutbildningspaketet för motorcykel. Här får du i säker miljö pröva gränserna för bromssträckor, lutning, svängteknik samt uppleva hur skiftande underlag påverkar väggreppet.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-blue-700" />
              <span>Tidsåtgång: ca 4 timmar</span>
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
              <span>Se tider & Boka MC</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Kursinnehåll Risk 2 MC
            </h2>
            <ul className="space-y-3">
              {[
                "Effektiv bromsteknik i höga och låga hastigheter",
                "Körning på halt och varierande väglag",
                "Kurvteknik, lutning och undanmanövrer",
                "Skyddsutrustningens betydelse vid olyckssituationer",
                "Erfarna instruktörer med gedigen MC-bakgrund",
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
              Inför kursen
            </h2>
            <ul className="space-y-3">
              {[
                "Ta med giltig legitimation.",
                "Obligatorisk godkänd MC-skyddsutrustning (hjälm, ställ, handskar, stövlar).",
                "Godkända utbildnings-MC finns tillgängliga på banan.",
                "Rapporteras digitalt direkt till Transportstyrelsen efter slutförd kurs.",
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
      </div>
    </div>
  );
}
