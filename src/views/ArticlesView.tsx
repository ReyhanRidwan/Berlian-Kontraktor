/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Clock, User, ArrowLeft, Calendar, Share2, BookOpen } from "lucide-react";
import { ARTICLES_DATA } from "../data";
import OptimizedImage from "../components/OptimizedImage";

interface ArticlesViewProps {
  selectedArticle: string | null;
  setSelectedArticle: (id: string | null) => void;
}

export default function ArticlesView({ selectedArticle, setSelectedArticle }: ArticlesViewProps) {
  // Find current article to read if selected
  const activeArticle = ARTICLES_DATA.find((art) => art.id === selectedArticle);

  const handleShareWa = (title: string) => {
    const text = `Saya baru saja membaca artikel menarik ini dari Berlian Kontraktor: "${title}". Sangat direkomendasikan bagi yang ingin mendirikan rumah atau ruko!`;
    window.open(`https://wa.me/6285715910161?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Full Read Mode Layout
  if (activeArticle) {
    return (
      <div className="font-sans text-stone-900 bg-[#FAF8F5] py-12" id="full-article-reader">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-24">
          
          {/* Back button to list */}
          <button
            onClick={() => {
              setSelectedArticle(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-xs font-black uppercase text-orange-600 hover:text-stone-900 transition-colors mb-8 cursor-pointer group"
            id="btn-back-article-archive"
            type="button"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Artikel & Panduan</span>
          </button>

          {/* Heading meta */}
          <div className="space-y-4 mb-8" id="reader-heading-meta">
            <span className="text-xs bg-orange-600/15 text-orange-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-widest block w-fit">
              {activeArticle.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4.5xl font-black uppercase tracking-tight text-stone-900 leading-tight">
              {activeArticle.title}
            </h1>

            {/* Meta values */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-stone-600 pt-2 border-b border-stone-200 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span>Rilis: {activeArticle.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-orange-600" />
                <span>Penulis: {activeArticle.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>Estimasi: {activeArticle.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image wrapper */}
          {activeArticle.image && (
            <div className="mb-10 rounded-2xl overflow-hidden border border-stone-200 shadow-md h-[280px] sm:h-[400px]">
              <OptimizedImage
                src={activeArticle.image}
                alt={activeArticle.title}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Main Full Rich Content Body */}
          <div className="prose max-w-none text-stone-800 text-sm md:text-base leading-relaxed space-y-6" id="reader-articles-html">
            {activeArticle.content.split("\n\n").map((para, pIdx) => {
              if (para.startsWith("1. ") || para.startsWith("2. ") || para.startsWith("3. ") || para.startsWith("4. ") || para.startsWith("5. ")) {
                return (
                  <p key={pIdx} className="pl-4 border-l-4 border-orange-600 bg-[#F4F0E8] p-4 rounded-r-lg font-medium text-stone-900 shadow-sm">
                    {para}
                  </p>
                );
              }
              return <p key={pIdx}>{para}</p>;
            })}
          </div>

          {/* Bottom sharing footer */}
          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <span className="text-stone-500 text-xs block uppercase font-medium">Butuh Konsultasi Terkait Topik Ini?</span>
              <span className="text-stone-900 font-extrabold text-sm block mt-0.5">Tanyakan Langsung pada Penulis Artikel</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleShareWa(activeArticle.title)}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase px-6 py-3 rounded-lg transition-all shadow-md cursor-pointer"
                id="btn-share-readers-wa"
              >
                <Share2 className="w-4 h-4" />
                <span>Bagikan via WA</span>
              </button>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs uppercase px-6 py-3 rounded-lg cursor-pointer"
                id="btn-return-archive"
              >
                Katalog Artikel
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // List / Grid Mode Layout
  return (
    <div className="font-sans text-stone-900 bg-[#FAF8F5]" id="articles-archive-view">
      
      {/* 1. HEADER SECTION */}
      <header className="relative py-24 md:py-32 bg-[#F4F0E8] border-b border-stone-200 overflow-hidden" id="articles-header">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-amber-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
            PANDUAN PEMILIK HUNIAN BOGOR
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-stone-900 uppercase tracking-tight">
            ARTIKEL DAN EDUKASI SIPIL
          </h1>
          <p className="mt-4 text-stone-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-normal">
            Temukan rujukan perhitungan RAB tepercaya, rahasia menahan rembesan bocor dinding Bogor, tata cara SIMBG, hingga pemilihan konsep tropis yang fungsional.
          </p>
        </div>
      </header>

      {/* 2. ARCHIVE CATALOG GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="articles-list-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((art) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                setSelectedArticle(art.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all shadow-sm hover:shadow-md group cursor-pointer flex flex-col justify-between"
              id={`archive-card-${art.id}`}
            >
              <div>
                {art.image && (
                  <OptimizedImage
                    src={art.image}
                    alt={art.title}
                    wrapperClassName="aspect-video h-[180px] md:h-[200px]"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                
                <div className="p-6">
                  <span className="text-[10px] bg-orange-600/10 text-orange-600 font-extrabold px-2.5 py-1 rounded block w-fit uppercase tracking-widest mb-3">
                    {art.category}
                  </span>
                  
                  <h2 className="text-base font-extrabold text-stone-900 uppercase leading-snug mb-3 group-hover:text-orange-600 transition-all line-clamp-2">
                    {art.title}
                  </h2>
                  
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Indicators */}
              <div className="p-6 pt-3 border-t border-stone-200 flex items-center justify-between text-[10px] text-stone-500">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>{art.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>{art.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    </div>
  );
}
