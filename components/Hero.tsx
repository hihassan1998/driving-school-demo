"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "./LanguageContext";
import { ShieldCheck, ExternalLink, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-900/80 border border-blue-700/60 rounded-full px-3.5 py-1.5 mb-6 text-xs sm:text-sm font-medium text-amber-300 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{dict.hero.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            {dict.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {dict.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base px-6 py-4 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>{dict.hero.ctaPrimary}</span>
              <ExternalLink className="w-4 h-4 text-slate-900" />
            </a>

            <a
              href="#tjanster"
              className="inline-flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-base px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <span>{dict.hero.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Trust Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80 pt-8">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {dict.hero.trustStat1}
                </h4>
                <p className="text-xs text-slate-400">
                  {dict.hero.trustStat1Sub}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {dict.hero.trustStat2}
                </h4>
                <p className="text-xs text-slate-400">
                  {dict.hero.trustStat2Sub}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {dict.hero.trustStat3}
                </h4>
                <p className="text-xs text-slate-400">
                  {dict.hero.trustStat3Sub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
