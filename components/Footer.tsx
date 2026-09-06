"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "./LanguageContext";
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, AlertTriangle } from "lucide-react";

export function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      {/* Demo Disclaimer Topbar */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 text-amber-300 text-xs py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2 text-center">
          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
          <span>
            <strong>Demowebbplats:</strong> Denna webbplats är enbart skapad för marknadsförings- och utvärderingssyften och gör inga anspråk på att ersätta originalwebbplatsen <a href="https://www.norrahalkbanan.se/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white">norrahalkbanan.se</a>.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-blue-900 flex items-center justify-center text-amber-400 font-bold text-lg">
                NH
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {dict.footer.tagline}
            </p>
            <div className="inline-flex items-center space-x-1.5 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Transportstyrelsen Certifierad</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/risk-2-bil" className="hover:text-white transition-colors">
                  {dict.nav.risk2bil}
                </Link>
              </li>
              <li>
                <Link href="/risk-2-mc" className="hover:text-white transition-colors">
                  {dict.nav.risk2mc}
                </Link>
              </li>
              <li>
                <Link href="/ykb-utbildning" className="hover:text-white transition-colors">
                  {dict.nav.ykb}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Booking Link */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Bokning (bokningskoll.se)
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Alla lediga tider för Risktvåan bil, MC och YKB bokas direkt via vår officiella bokningssida.
            </p>
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors"
            >
              <span>Riskutbildning 2 bokning</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {dict.contact.infoTitle}
            </h4>
            <div className="flex items-center space-x-2 text-xs">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Fordonsvägen 2, 941 43 Piteå</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <Phone className="w-4 h-4 text-slate-500 shrink-0" />
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-white">
                {SITE_CONFIG.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <Mail className="w-4 h-4 text-slate-500 shrink-0" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>{dict.footer.copyright}</p>
          <p>{dict.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
