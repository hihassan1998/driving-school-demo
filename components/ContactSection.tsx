"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "./LanguageContext";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Map } from "lucide-react";

export function ContactSection() {
  const { dict } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {dict.contact.title}
          </h2>
          <p className="text-slate-600 text-lg">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8 bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              {dict.contact.infoTitle}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {dict.contact.addressLabel}
                  </h4>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {SITE_CONFIG.name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {dict.contact.phoneLabel}
                  </h4>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="text-sm font-bold text-blue-800 hover:underline mt-1 block"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {dict.contact.emailLabel}
                  </h4>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm font-bold text-blue-800 hover:underline mt-1 block"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {dict.contact.hoursLabel}
                  </h4>
                  <p className="text-sm font-medium text-slate-800 mt-1">
                    {SITE_CONFIG.openingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {dict.contact.formTitle}
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-6 flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base">Tack!</h4>
                  <p className="text-sm mt-1">{dict.contact.successMessage}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    {dict.contact.namePlaceholder} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      {dict.contact.emailPlaceholder} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      {dict.contact.phonePlaceholder}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    {dict.contact.messagePlaceholder} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-3.5 rounded-lg shadow-sm transition-colors text-sm"
                >
                  <span>{dict.contact.submitButton}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Interactive Google Map Embed */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div className="flex items-center space-x-2 mb-4 text-slate-900 font-bold text-lg">
            <Map className="w-5 h-5 text-blue-800" />
            <h3>{dict.contact.mapTitle}</h3>
          </div>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-sm border border-slate-200 relative">
            <iframe
              title="Norra Halkbanan i Piteå AB Google Maps Location"
              src="https://maps.google.com/maps?q=Fordonsv%C3%A4gen%202%2C%20941%2043%20Pite%C3%A5&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
