"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "./LanguageContext";
import { Car, Bike, Truck, Check, ExternalLink, Clock, ChevronRight } from "lucide-react";

export function Services() {
  const { dict } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case "risk-2-bil":
        return <Car className="w-6 h-6 text-blue-700" />;
      case "risk-2-mc":
        return <Bike className="w-6 h-6 text-blue-700" />;
      case "ykb":
        return <Truck className="w-6 h-6 text-blue-700" />;
      default:
        return <Car className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="tjanster" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {dict.services.title}
          </h2>
          <p className="text-slate-600 text-lg">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.services.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header icon & category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                    {getIcon(card.id)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {card.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Duration */}
                <div className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-6 bg-slate-100 px-3 py-2 rounded-lg w-max">
                  <Clock className="w-4 h-4 text-slate-600" />
                  <span>{card.duration}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {card.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <a
                  href={SITE_CONFIG.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <span>Riskutbildning 2 bokning</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href={card.href}
                  className="w-full inline-flex items-center justify-center space-x-1 text-xs font-semibold text-slate-600 hover:text-blue-900 py-2 transition-colors"
                >
                  <span>{dict.services.learnMore}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
