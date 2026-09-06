"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageContext";
import { BookingSection } from "@/components/BookingSection";
import { Bike, Clock, ShieldCheck, CheckCircle, ExternalLink, Video, Phone, Mail, HelpCircle, UserCheck, ShieldAlert, Award } from "lucide-react";

export default function Risk2MCPage() {
  const { dict } = useLanguage();
  const content = dict.risk2mcPage;

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Header */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full mb-4 border border-blue-100">
                  <Bike className="w-4 h-4 text-blue-800" />
                  <span>{content.categoryBadge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                  {content.title}
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
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
                  <span>{content.mcTag}</span>
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
                src="https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-5-scaled.jpg"
                alt="Norra Halkbanan MC utbildningsfordon"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>

        {/* Section: Vad är Risktvåan MC? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              {content.whatIsTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {content.whatIsDesc1}
            </p>

            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 mb-6">
              <h3 className="font-bold text-blue-900 text-base mb-3 flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-800" />
                <span>{content.focusTitle}</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {content.focusItems.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {content.whatIsDesc2}
            </p>
          </div>

          {/* Krav & Förutsättningar */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4 text-amber-900 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-100 w-max">
                <ShieldAlert className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-bold uppercase tracking-wider">{content.reqBadge}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {content.reqTitle}
              </h3>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-6">
                {content.reqItems.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
              <span>{content.cancelNotice}</span>
            </div>
          </div>
        </div>

        {/* Video Presentation Section */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 lg:p-10 mb-14 shadow-xl overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-900/80 border border-blue-700/60 rounded-full px-3.5 py-1.5 mb-3 text-xs font-semibold text-amber-300">
              <Video className="w-4 h-4 text-amber-400" />
              <span>{content.videoBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {content.videoTitle}
            </h2>
            <p className="text-slate-300 text-sm">
              {content.videoSubtitle}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video max-w-4xl mx-auto border border-slate-800">
            <video
              controls
              preload="metadata"
              poster="https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-5-scaled.jpg"
              className="w-full h-full object-cover rounded-2xl"
            >
              <source
                src="https://www.norrahalkbanan.se/wp-content/uploads/2025/07/Norra-Halbanan-Haraholmen-1920x1080-1.mp4"
                type="video/mp4"
              />
              Din webbläsare stöder inte videouppspelning.
            </video>
          </div>
        </div>

        {/* Samarbetande Trafikskolor for MC */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xs mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {content.partnerTitle}
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            {content.partnerSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Centrala Trafikskolan
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Webbplats: <a href="https://centralainorr.se/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-800">centralainorr.se</a>
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <p className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-blue-700" />
                  <a href="mailto:info@centralainorr.se" className="hover:underline">info@centralainorr.se</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-blue-700" />
                  <a href="tel:0705551513" className="hover:underline font-semibold">070 – 555 15 13</a>
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                MK / Håkans Trafikskola
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Webbplats: <a href="https://www.mk-trafikskola.se/hakans-trafikskola/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-800">mk-trafikskola.se</a>
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <p className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-blue-700" />
                  <a href="mailto:info@mk-trafikskola.se" className="hover:underline">info@mk-trafikskola.se</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-blue-700" />
                  <a href="tel:0910211018" className="hover:underline font-semibold">0910 – 21 10 18</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk 2 MC FAQ Section */}
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
