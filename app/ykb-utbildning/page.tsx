import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { FAQSection } from "@/components/FAQSection";
import { Truck, Clock, ShieldCheck, CheckCircle, ExternalLink, Award, CreditCard, AlertCircle, CalendarCheck, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "YKB Utbildning Piteå | Pris & Bokning | Norra Halkbanan AB",
  description:
    "YKB fortbildning och delkurser 1-5 i Piteå. 1 280 kr exkl moms per delkurs (totalt 6 400 kr exkl moms). Boka direkt via Bokningskoll YKB.",
};

export default function YkbPage() {
  const ykbImages = [
    {
      src: "https://www.norrahalkbanan.se/wp-content/uploads/2026/02/YKB-Lastbil.webp",
      title: "YKB Godstransport (C / CE)",
      desc: "Fortbildning och delkurser anpassade för yrkesförare på tung lastbil.",
    },
    {
      src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/Buss-pa-vag.webp",
      title: "YKB Persontransport (D / DE)",
      desc: "Kompetensutbildning för förare inom persontransport och busstrafik.",
    },
    {
      src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/Lasbil-pa-distans.webp",
      title: "Flexibel Utbildning & Distans",
      desc: "Fortbildning fördelad på 5 delmoment som kan spridas ut under 5 år.",
    },
  ];

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Header */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full mb-4 border border-blue-100">
                  <Truck className="w-4 h-4 text-blue-800" />
                  <span>Yrkesförare (Tung trafik C, CE, D, DE)</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                  YKB Utbildning i Piteå
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                  Vi erbjuder Yrkeskompetensutbildning (YKB) för tung trafik. Fortbildningen består av fem delkurser som behandlar bland annat trafiksäkerhet, miljökörning, lagar och regler samt service och kundbemötande.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3.5 py-2 rounded-xl">
                  <Clock className="w-4 h-4 text-blue-700" />
                  <span>35 timmar totalt (5 dagar × 7 timmar)</span>
                </div>

                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3.5 py-2 rounded-xl">
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                  <span>1 280 kr exkl moms / delkurs</span>
                </div>

                <a
                  href={SITE_CONFIG.ykbBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm px-6 py-3 rounded-xl shadow-md transition-all ml-auto"
                >
                  <span>YKB bokning (Bokningskoll)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Featured Image */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
              <Image
                src="https://www.norrahalkbanan.se/wp-content/uploads/2026/02/YKB-Lastbil.webp"
                alt="YKB Lastbil Norra Halkbanan Piteå"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>

        {/* Pricing & Key Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Pricing */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 border border-emerald-100">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Vad kostar YKB Utbildning?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Priset för varje delkurs är <strong>1 280 kr exkl. moms</strong>.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kurserna har fem delmoment, så totalt kostar en hel utbildning <strong>6 400 kr exkl. moms</strong>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-2 rounded-lg text-center">
              1 280 kr / delkurs (6 400 kr totalt ex moms)
            </div>
          </div>

          {/* Card 2: Duration */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-4 border border-blue-100">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Hur lång är utbildningen?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Totalt är vår fortbildningskurs <strong>35 timmar</strong>.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Varje dag innehåller 7 timmars utbildning, så det blir <strong>5 dagar totalt</strong> som kan spridas ut enligt önskemål, upp till ett 5-årsspann.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-900 bg-blue-50 px-3 py-2 rounded-lg text-center">
              5 dagar à 7 timmar (upp till 5 års spann)
            </div>
          </div>

          {/* Card 3: Requirements */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center mb-4 border border-amber-100">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Vilka krav finns för YKB?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Du behöver ha ett giltigt körkort med rätt behörighet för det fordon du kör (t.ex. <strong>C, CE, D eller DE</strong>).
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Utbildningen riktar sig till yrkesförare som vill uppfylla lagkravet på fortbildning enligt YKB-lagen.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-amber-900 bg-amber-50 px-3 py-2 rounded-lg text-center">
              Kräver giltigt körkort (C, CE, D, DE)
            </div>
          </div>
        </div>

        {/* Image Showcase Grid */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 text-center">
            Utbildningskategorier inom Tung Trafik
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Oavsett om du kör godstransport med tung lastbil eller persontransport med buss ger vi dig rätt kompetens och certifiering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ykbImages.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <a
                    href={SITE_CONFIG.ykbBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-800 hover:text-blue-950"
                  >
                    <span>YKB bokning (Lastbil & Buss)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Syllabus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Vad innehåller YKB-fortbildningen?
                </h2>
                <p className="text-xs text-slate-500">
                  Fem delkurser för ökad säkerhet och professionalism
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                { title: "Delkurs 1: Sparsam körning & Miljö", text: "Optimering av drivlina, bränslebesparing och miljöanpassad körning." },
                { title: "Delkurs 2: Godstransporter / Persontransporter", text: "Godssäkring, surrning samt specifik persontransportsäkerhet." },
                { title: "Delkurs 3: Lagar och regler", text: "Kör- och vilotider, färdskrivare och transportbestämmelser." },
                { title: "Delkurs 4: Ergonomi, Hälsa & Kundbemötande", text: "Arbetsmiljö, hälsa, trafiksäkerhet och service inriktad mot kund." },
                { title: "Delkurs 5: Trafiksäkerhet & Nödsituationer", text: "Riskmedvetenhet, första hjälpen och agerande vid olyckssituationer." },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate & Booking Banner */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center mb-4 font-bold">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                Boka din YKB-utbildning online
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Välj ledigt datum för lastbil och buss i vår officiella bokningsportal.
              </p>
              <a
                href={SITE_CONFIG.ykbBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base py-3.5 px-4 rounded-xl shadow-lg transition-all"
              >
                <span>YKB bokning</span>
                <ExternalLink className="w-4 h-4 text-slate-950" />
              </a>
              <div className="flex items-center justify-center space-x-1.5 text-xs text-blue-200 mt-3">
                <Lock className="w-3.5 h-3.5" />
                <span>Direkt till bokningskoll.se/norra/ykb</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                För åkerier & företag
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Vi anordnar även företagsanpassade YKB-utbildningar för grupper och åkerier.
              </p>
              <p className="text-xs font-semibold text-slate-800">
                Kontakta oss på tel <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="underline text-blue-800">{SITE_CONFIG.phone}</a> eller e-post <a href={`mailto:${SITE_CONFIG.email}`} className="underline text-blue-800">{SITE_CONFIG.email}</a>.
              </p>
            </div>
          </div>
        </div>

        <FAQSection />
      </div>
    </div>
  );
}
