"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { Camera, X, Maximize2 } from "lucide-react";

export function GallerySection() {
  const { dict } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Alla");

  const categories = ["Alla", ...Array.from(new Set(dict.gallery.images.map((img) => img.category)))];

  const filteredImages =
    activeCategory === "Alla"
      ? dict.gallery.images
      : dict.gallery.images.filter((img) => img.category === activeCategory);

  return (
    <section id="galleri" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-900/80 text-amber-400 border border-blue-700/50 flex items-center justify-center mx-auto mb-4">
            <Camera className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {dict.gallery.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {dict.gallery.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img.src)}
              className="group relative h-64 bg-slate-800 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/60 shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full mb-1.5 inline-block">
                    {img.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {img.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-slate-800/80 text-white hover:bg-slate-700 rounded-full transition-colors"
            aria-label="Stäng bild"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Galleri bild Norra Halkbanan"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
