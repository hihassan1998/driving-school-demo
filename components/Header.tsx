"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "./LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { Phone, Mail, Menu, X, ExternalLink, ShieldCheck, AlertTriangle } from "lucide-react";

export function Header() {
  const { dict } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Demo Disclaimer Alert Bar */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center space-x-2 mx-auto sm:mx-0">
            <AlertTriangle className="w-4 h-4 shrink-0 text-slate-950" />
            <span>
              <strong>DEMO-WEBBPLATS:</strong> Byggd enbart för marknadsföring och utvärdering.
            </span>
          </div>
          <a
            href="#disclaimer"
            className="hidden md:inline-flex items-center space-x-1 underline hover:text-slate-800 transition-colors font-extrabold text-[11px] uppercase tracking-wider"
          >
            <span>Läs Ansvarsfriskrivning</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Secondary Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{dict.hero.badge}</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:inline-block text-slate-400">
              Fordonsvägen 2, Piteå
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="hidden sm:flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with official brand image */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-12 w-48 sm:w-56">
              <Image
                src="https://www.norrahalkbanan.se/wp-content/uploads/2017/10/logga.png"
                alt="Norra Halkbanan i Piteå AB"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-5">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors"
            >
              {dict.nav.home}
            </Link>
            <Link
              href="/risk-2-bil"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors"
            >
              {dict.nav.risk2bil}
            </Link>
            <Link
              href="/risk-2-mc"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors"
            >
              {dict.nav.risk2mc}
            </Link>
            <Link
              href="/ykb-utbildning"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors"
            >
              {dict.nav.ykb}
            </Link>
            <a
              href="#galleri"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors"
            >
              {dict.nav.gallery}
            </a>
            <a
              href="#trafikskolor"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors"
            >
              {dict.nav.partners}
            </a>
            <Link
              href="/kontakt"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors"
            >
              {dict.nav.contact}
            </Link>
          </nav>

          {/* Language Switcher & Booking CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageToggle />
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <span>{dict.nav.bookNow}</span>
              <ExternalLink className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {dict.nav.home}
          </Link>
          <Link
            href="/risk-2-bil"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {dict.nav.risk2bil}
          </Link>
          <Link
            href="/risk-2-mc"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {dict.nav.risk2mc}
          </Link>
          <Link
            href="/ykb-utbildning"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {dict.nav.ykb}
          </Link>
          <a
            href="#galleri"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {dict.nav.gallery}
          </a>
          <a
            href="#trafikskolor"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {dict.nav.partners}
          </a>
          <Link
            href="/kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {dict.nav.contact}
          </Link>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-sm"
            >
              <span>{dict.nav.bookNow} (bokningskoll.se)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
