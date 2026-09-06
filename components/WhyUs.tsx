"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Award, ShieldAlert, MapPin, Zap } from "lucide-react";

export function WhyUs() {
  const { dict } = useLanguage();

  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-6 h-6 text-amber-500" />;
      case 1:
        return <ShieldAlert className="w-6 h-6 text-blue-600" />;
      case 2:
        return <MapPin className="w-6 h-6 text-emerald-600" />;
      case 3:
        return <Zap className="w-6 h-6 text-indigo-600" />;
      default:
        return <Award className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {dict.whyUs.title}
          </h2>
          <p className="text-slate-600 text-lg">
            {dict.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.whyUs.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-xs mb-5">
                {getFeatureIcon(idx)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
