"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageContext";
import { BookingSection } from "@/components/BookingSection";
import { Car, Clock, ShieldCheck, CheckCircle, ExternalLink, AlertCircle, Radio, UserCheck, ShieldAlert, HeartHandshake, HelpCircle } from "lucide-react";

export default function Risk2BilPage() {
  const { dict } = useLanguage();
  const content = dict.risk2bilPage;

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full mb-4 border border-blue-100">
                  <Car className="w-4 h-4 text-blue-800" />
                  <span>{content.categoryBadge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                  {content.title}
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                  {content.intro1}
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {content.intro2}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3.5 py-2 rounded-xl">
                  <Clock className="w-4 h-4 text-blue-700" />
                  <span>{content.durationTag}</span>
                </div>

                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3.5 py-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{content.reportingTag}</span>
                </div>

                <a
                  href={SITE_CONFIG.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm px-6 py-3 rounded-xl shadow-md transition-all ml-auto"
                >
                  <span>{content.bookButton}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Featured Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <Image
                src="https://www.norrahalkbanan.se/wp-content/uploads/2025/11/Delmoment-1-norrahalkbanan.webp"
                alt="Risk 2 Delmoment 1 Norra Halkbanan Piteå"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>

        {/* Section: Hur går Risk 2 till? */}
        <div className="mb-14">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              {content.processTitle}
            </h2>
            <p className="text-slate-600 text-base">
              {content.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Delmoment 1: Teori */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {content.theoryBadge}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{content.theoryLoc}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {content.theoryTitle}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {content.theoryDesc}
                </p>

                <ul className="space-y-3 mb-6 text-sm text-slate-700">
                  {content.theoryItems.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Delmoment 2: Praktisk Övning */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    {content.practicalBadge}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{content.practicalLoc}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {content.practicalTitle}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {content.practicalDesc}
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center space-x-2">
                    <Radio className="w-4 h-4 text-blue-700" />
                    <span>{content.practicalItemsTitle}</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {content.practicalItems.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-blue-700 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 text-amber-950 p-3.5 rounded-xl text-xs font-semibold flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{content.practicalNotice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hosted Image Feature Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-10 mb-14 shadow-lg overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {content.includedTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {content.includedDesc1}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {content.includedDesc2}
              </p>

              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
              >
                <span>{content.bookButton}</span>
                <ExternalLink className="w-4 h-4 text-slate-950" />
              </a>
            </div>

            <div className="lg:col-span-5 relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://www.norrahalkbanan.se/wp-content/uploads/2025/11/Halkigt-pa-halkbanan.webp"
                alt="Halkigt på halkbanan Norra Halkbanan Piteå"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section: Viktig information inför Risk 2 */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xs mb-14">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-amber-700" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {content.importantTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 text-sm text-slate-700">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">🪪 {content.idTitle}</h4>
                <p className="text-xs text-slate-600">{content.idDesc}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">⏰ {content.timeTitle}</h4>
                <p className="text-xs text-slate-600">{content.timeDesc}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">🌬️ {content.alcoholTitle}</h4>
                <p className="text-xs text-slate-600">{content.alcoholDesc}</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">🚗 {content.carsTitle}</h4>
                <p className="text-xs text-slate-600">{content.carsDesc}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">📅 {content.cancelTitle}</h4>
                <p className="text-xs text-slate-600">{content.cancelDesc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Risk 2 FAQ Accordion */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xs mb-14">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {content.faqTitle}
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {content.faqItems.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <BookingSection />
      </div>
    </div>
  );
}
