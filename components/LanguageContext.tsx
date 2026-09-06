"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, DICTIONARY, DictionaryContent } from "@/lib/dictionary";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  dict: DictionaryContent;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("sv");

  useEffect(() => {
    const saved = localStorage.getItem("norra_lang") as Language;
    if (saved === "sv" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("norra_lang", newLang);
  };

  const dict = DICTIONARY[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
