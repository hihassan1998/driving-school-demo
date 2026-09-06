"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Video, Film, PlayCircle } from "lucide-react";

export function VideoSection() {
  const { dict } = useLanguage();

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-900/80 border border-blue-700/60 rounded-full px-3.5 py-1.5 mb-4 text-xs font-semibold text-amber-300">
            <Film className="w-4 h-4 text-amber-400" />
            <span>{dict.video.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {dict.video.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {dict.video.subtitle}
          </p>
        </div>

        {/* Video Player Card */}
        <div className="bg-slate-950 rounded-3xl p-3 sm:p-4 border border-slate-800 shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video group">
            <video
              controls
              preload="metadata"
              poster="https://www.norrahalkbanan.se/wp-content/uploads/2025/12/IMG_1021-scaled-1.jpg"
              className="w-full h-full object-cover rounded-2xl"
            >
              <source
                src="https://www.norrahalkbanan.se/wp-content/uploads/2023/08/sveriges_trafikovningsplatser_2023-1.mp4"
                type="video/mp4"
              />
              Din webbläsare stöder inte videouppspelning.
            </video>
          </div>

          <div className="p-4 sm:p-6 flex items-center justify-between text-xs text-slate-400 border-t border-slate-900 mt-2">
            <div className="flex items-center space-x-2">
              <Video className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-slate-200">Filmpresentation Sveriges Trafikövningsplatser 2023</span>
            </div>
            <span className="hidden sm:inline-block bg-slate-900 px-3 py-1 rounded-full text-slate-400 font-mono">
              MP4 1080p
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
