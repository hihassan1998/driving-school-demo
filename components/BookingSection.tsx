"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "./LanguageContext";
import { CalendarCheck, ExternalLink, Lock } from "lucide-react";

export function BookingSection() {
  const { dict } = useLanguage();

  return (
    <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-16 h-16 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CalendarCheck className="w-8 h-8" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 max-w-2xl mx-auto tracking-tight">
          {dict.bookingCta.title}
        </h2>

        <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          {dict.bookingCta.subtitle}
        </p>

        <div className="flex flex-col items-center gap-3">
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>{dict.bookingCta.buttonText}</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          <div className="flex items-center space-x-1.5 text-xs text-blue-200 mt-2">
            <Lock className="w-3.5 h-3.5" />
            <span>{dict.bookingCta.notice}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
