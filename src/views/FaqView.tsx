/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { HelpCircle, ChevronDown, CheckSquare, Sparkles } from "lucide-react";
import { FAQS_DATA } from "../data";

export default function FaqView() {
  const [activeCategory, setActiveCategory] = useState<"Semua" | "Layanan" | "Biaya" | "Waktu">("Semua");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const categories = ["Semua", "Layanan", "Biaya", "Waktu"] as const;

  const filteredFaqs = FAQS_DATA.filter(
    (faq) => activeCategory === "Semua" || faq.category === activeCategory
  );

  return (
    <div className="font-sans text-stone-900 bg-[#FAF8F5]" id="faqs-view-container">
      
      {/* 1. HEADER SECTION */}
      <header className="relative py-24 md:py-32 bg-[#F4F0E8] border-b border-stone-200 overflow-hidden" id="faqs-header">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-amber-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
            PANDUAN INFORMASI MANDIRI
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-stone-900 uppercase tracking-tight" id="faqs-page-title">
            TANYA JAWAB DAN EDUKASI
          </h1>
          <p className="mt-4 text-stone-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-normal">
            Kami menghormati literasi keuangan dan teknis keluarga klien kami. Berikut rangkuman lengkap jawaban administratif serta kontrak kerja konstruksi bersama Berlian Kontraktor.
          </p>
        </div>
      </header>

      {/* 2. FREQUENTLY ASKED QUESTIONS CONTAINER */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="faq-accordions-container">
        
        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="faq-pill-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenFaq(null); // Close active when category changes
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border cursor-pointer ${
                activeCategory === cat
                  ? "bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-600/15"
                  : "bg-white border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900 shadow-sm"
              }`}
              id={`faq-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Minimal Accordion Stack */}
        <div className="space-y-4" id="faq-cards-stack">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-stone-300 transition-all shadow-sm"
                id={`faq-card-item-${faq.id}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between text-left p-6 focus:outline-none cursor-pointer"
                  id={`faq-question-btn-${faq.id}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="p-1 px-2.5 bg-amber-50 border border-stone-200 rounded text-orange-600 font-extrabold text-[10px] uppercase shrink-0 mt-0.5">
                      {faq.category}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base font-extrabold text-stone-900 tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Plus/Minus Rotating Sign Accent */}
                  <div className="p-1.5 bg-stone-100 border border-stone-200 rounded-lg text-orange-600 shrink-0 ml-4">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {/* Animated disclosure body */}
                {isOpen && (
                  <div
                    className="p-6 pt-0 border-t border-stone-100 bg-[#FAF8F5] text-xs md:text-sm leading-relaxed text-stone-700 font-normal"
                    id={`faq-answer-panel-${faq.id}`}
                  >
                    <div className="py-4 space-y-4">
                      <p>{faq.answer}</p>
                      
                      {/* Interactive prompt assist */}
                      <div className="flex flex-wrap items-center gap-2 text-[10.5px] text-stone-500 font-medium">
                        <CheckSquare className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>Tertarik menanyakan rincian lebih detail? Hubungi CS kami untuk penjelasan tatap muka langsung.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Fallback if Empty */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-stone-500 border border-dashed border-stone-300 rounded-xl">
            Tidak ada kecocokan tanya jawab untuk kategori ini.
          </div>
        )}

      </section>

      {/* 3. COST & QUALITY POLICY STAGE */}
      <section className="py-20 bg-[#F4F0E8] border-t border-stone-200" id="faqs-policy-stage">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HelpCircle className="w-10 h-10 text-orange-600 mx-auto mb-4 animate-bounce" />
          <h3 className="text-base font-black uppercase text-stone-900 tracking-wider">
            MEMILIKI PERTANYAAN KHUSUS UNTUK LAHAN ANDA?
          </h3>
          <p className="text-stone-600 text-xs mt-2 max-w-lg mx-auto leading-relaxed">
            Setiap tanah memiliki spesifikasi kemiringan, ketersediaan jalan lebar, dan resiko gempa tanah yang berbeda. Kirimkan foto denah Google Maps tanah Anda ke kami untuk konsultasi konstruksi gratis.
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/6285715910161?text=Halo%20Berlian%20Kontraktor,%20saya%20ingin%20bertanya%20mengenai%20kelayakan%20tanah%20dan%20konstruksi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all"
              id="faq-whatsapp-redirection"
            >
              Tanya Kontraktor via WA
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
