"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
      <Globe className="w-4 h-4 text-slate-500 ml-1.5" aria-hidden="true" />
      <button
        onClick={() => setLang("sv")}
        className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${
          lang === "sv"
            ? "bg-white text-slate-900 shadow-xs"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label="Byt till Svenska"
      >
        SV
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${
          lang === "en"
            ? "bg-white text-slate-900 shadow-xs"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
