import React from "react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { CalendarCheck, ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Boka Riskutbildning 2 | Norra Halkbanan Piteå",
  description:
    "Boka din Riskutbildning 2 för Bil, MC eller YKB i Piteå via Bokningskoll. Välj ett ledigt datum och få direktbekräftelse.",
};

export default function BokaPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <CalendarCheck className="w-8 h-8 text-blue-800" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Riskutbildning 2 bokning
        </h1>

        <p className="text-slate-600 text-lg max-w-xl mx-auto mb-8">
          Alla våra lediga platser och kurstillfällen hanteras i vår officiella bokningsportal på Bokningskoll.
        </p>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs max-w-2xl mx-auto mb-10 text-left space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
            Så här går bokningen till:
          </h2>
          <ol className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <span>Klicka på knappen nedan för att gå till <strong>bokningskoll.se/norra</strong>.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <span>Välj önskad utbildning (Bil, MC eller YKB) och välj ett tillgängligt datum.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <span>Fyll i dina personuppgifter och slutför bokningen med direkt bekräftelse till din e-post.</span>
            </li>
          </ol>
        </div>

        <a
          href={SITE_CONFIG.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
        >
          <span>Gå till Riskutbildning 2 bokning (bokningskoll.se)</span>
          <ExternalLink className="w-5 h-5" />
        </a>

        <p className="text-xs text-slate-500 mt-4 flex items-center justify-center space-x-1">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Säker kryptering och direktrapportering till Transportstyrelsen</span>
        </p>
      </div>
    </div>
  );
}
