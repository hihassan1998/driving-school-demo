"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { GraduationCap, ExternalLink, Building2, MapPin } from "lucide-react";

export function PartnersSection() {
  const { dict } = useLanguage();

  const institutionalPartners = [
    { name: "Försvarsmakten", url: "https://www.forsvarsmakten.se/sv/" },
    { name: "Migrationsverket", url: "https://www.migrationsverket.se/" },
    { name: "Arbetsmiljöverket", url: "https://www.av.se/" },
  ];

  return (
    <section id="trafikskolor" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {dict.partners.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {dict.partners.subtitle}
          </p>
        </div>

        {/* Driving Schools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-14">
          {dict.partners.schools.map((school, idx) => (
            <a
              key={idx}
              href={school.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-800 transition-colors">
                    {school.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-colors shrink-0" />
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{school.location}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Institutional Partners Banner */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 mt-1">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {dict.partners.institutionalTitle}
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {dict.partners.institutionalDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                {institutionalPartners.map((partner, idx) => (
                  <a
                    key={idx}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors border border-slate-200"
                  >
                    <span>{partner.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
