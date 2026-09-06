"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "./LanguageContext";
import { ShieldCheck, ExternalLink, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  const { dict } = useLanguage();

  const heroImages = [
    {
      src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-4-scaled.jpg",
      alt: "Halkbana träning Piteå",
    },
    {
      src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/IMG_1021-scaled-1.jpg",
      alt: "Norra Halkbanan anläggning",
    },
    {
      src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-5-scaled.jpg",
      alt: "Utbildningsbilar på banan",
    },
    {
      src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-korsningen.jpg",
      alt: "Övningskorsning halkbana",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Background Image Carousel - Crisp Sharp Photos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center brightness-75"
            />
          </div>
        ))}

        {/* Professional Balanced Gradient Overlay for Sharp Photo Visibility & Clear Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-900/80 border border-blue-700/60 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm font-medium text-amber-300 backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{dict.hero.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-md">
            {dict.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-sm">
            {dict.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base px-7 py-4 rounded-xl shadow-xl hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>{dict.hero.ctaPrimary}</span>
              <ExternalLink className="w-4 h-4 text-slate-900" />
            </a>

            <a
              href="#tjanster"
              className="inline-flex items-center justify-center space-x-2 bg-slate-900/80 hover:bg-slate-800/90 text-white font-semibold text-base px-6 py-4 rounded-xl border border-slate-700/80 backdrop-blur-md hover:border-slate-500 transition-colors"
            >
              <span>{dict.hero.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </a>
          </div>

          {/* Trust Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div className="flex items-start space-x-3 bg-slate-950/60 p-3 rounded-xl border border-white/10 backdrop-blur-md">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {dict.hero.trustStat1}
                </h4>
                <p className="text-xs text-slate-300">
                  {dict.hero.trustStat1Sub}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-slate-950/60 p-3 rounded-xl border border-white/10 backdrop-blur-md">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {dict.hero.trustStat2}
                </h4>
                <p className="text-xs text-slate-300">
                  {dict.hero.trustStat2Sub}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-slate-950/60 p-3 rounded-xl border border-white/10 backdrop-blur-md">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {dict.hero.trustStat3}
                </h4>
                <p className="text-xs text-slate-300">
                  {dict.hero.trustStat3Sub}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation Indicators */}
        <div className="absolute bottom-6 right-8 flex items-center space-x-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "w-8 bg-amber-400"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Gå till bild ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
