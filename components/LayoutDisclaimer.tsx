"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";

export function LayoutDisclaimer() {
  const { dict } = useLanguage();

  return (
    <div className="bg-slate-900 border-t border-slate-800 text-slate-400 text-[11px] py-3 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>
          <strong>Legal Disclaimer:</strong> {dict.disclaimer.layoutNotice}
        </span>
        <span>
          Original site:{" "}
          <a
            href="https://www.norrahalkbanan.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-amber-400 font-semibold hover:text-white transition-colors"
          >
            norrahalkbanan.se
          </a>
        </span>
      </div>
    </div>
  );
}
