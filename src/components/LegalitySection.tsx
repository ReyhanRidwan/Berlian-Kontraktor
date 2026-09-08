/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  CheckCircle2,
  ZoomIn,
  Upload,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  FileCheck,
  Building2,
  Scale,
  Award,
  RefreshCw,
  QrCode
} from "lucide-react";

interface LegalityDoc {
  id: string;
  number: number;
  title: string;
  issuer: string;
  identifier: string;
  type: string;
  category: string;
  defaultImage: string;
  accentColor: string;
  description: string;
}

const DEFAULT_DOCUMENTS: LegalityDoc[] = [
  {
    id: "akta-notaris",
    number: 1,
    title: "Akta Pendirian Notaris",
    issuer: "Lukman Andi Andri, S.H., M.Kn.",
    identifier: "Notaris di Kota Bogor & Wilayah Kerja Jawa Barat",
    type: "Akta Notarial Resmi",
    category: "Hukum & Korporasi",
    defaultImage: "",
    accentColor: "from-amber-600 to-orange-700",
    description: "Dokumen autentik pendirian badan hukum perseroan terbatas di hadapan Notaris yang berwenang."
  },
  {
    id: "sk-kemenkumham",
    number: 2,
    title: "Surat Keputusan Menteri Hukum dan HAM",
    issuer: "Kementerian Hukum dan Hak Asasi Manusia RI",
    identifier: "AHU-0007383.AH.01.01.TAHUN 2022",
    type: "Pengesahan Badan Hukum RI",
    category: "SK Menteri Kemenkumham",
    defaultImage: "",
    accentColor: "from-blue-700 to-indigo-800",
    description: "Pengesahan resmi legalitas badan usaha PT Berlian oleh Pemerintah Republik Indonesia."
  },
  {
    id: "nib-oss",
    number: 3,
    title: "Perizinan Berusaha Berbasis Risiko",
    issuer: "Lembaga OSS - Kementerian Investasi / BKPM RI",
    identifier: "NIB: 3101220044183",
    type: "Nomor Induk Berusaha (NIB)",
    category: "Izin Konstruksi & Usaha",
    defaultImage: "",
    accentColor: "from-emerald-700 to-teal-800",
    description: "Izin operasional konstruksi dan aktivitas pembangunan legal bersertifikasi sistem OSS nasional."
  },
  {
    id: "npwp-badan",
    number: 4,
    title: "Kartu NPWP Badan Hukum",
    issuer: "Direktorat Jenderal Pajak - Kemenkeu RI",
    identifier: "63.161.910.3-404.000",
    type: "Nomor Pokok Wajib Pajak",
    category: "Kepatuhan Pajak Negara",
    defaultImage: "",
    accentColor: "from-amber-700 to-yellow-800",
    description: "Identitas kepatuhan perpajakan badan hukum yang terdaftar aktif dan taat administrasi fiskal."
  }
];

export default function LegalitySection() {
  const [userImages, setUserImages] = useState<Record<string, string>>({});
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Load persisted user uploads from localStorage if available
  useEffect(() => {
    try {
      const saved: Record<string, string> = {};
      DEFAULT_DOCUMENTS.forEach((doc) => {
        const stored = localStorage.getItem(`berlian_legalitas_${doc.id}`);
        if (stored) {
          saved[doc.id] = stored;
        }
      });
      if (Object.keys(saved).length > 0) {
        setUserImages(saved);
      }
    } catch {
      // ignore storage access restrictions
    }
  }, []);

  // Handle image upload from user's file system
  const handleFileUpload = (docId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setUserImages((prev) => {
            const updated = { ...prev, [docId]: result };
            try {
              localStorage.setItem(`berlian_legalitas_${docId}`, result);
            } catch {
              // quota limits
            }
            return updated;
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset uploaded image to official vector template
  const handleResetImage = (docId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUserImages((prev) => {
      const copy = { ...prev };
      delete copy[docId];
      try {
        localStorage.removeItem(`berlian_legalitas_${docId}`);
      } catch {
        // ignore
      }
      return copy;
    });
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % DEFAULT_DOCUMENTS.length : null));
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + DEFAULT_DOCUMENTS.length) % DEFAULT_DOCUMENTS.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex]);

  const activeDoc = activeLightboxIndex !== null ? DEFAULT_DOCUMENTS[activeLightboxIndex] : null;

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-stone-200" id="legalitas-perusahaan-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-600/10 rounded-full text-orange-600 mb-3 border border-orange-500/20 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-black tracking-widest uppercase">
              DOKUMEN HUKUM RESMI
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-black text-stone-900 uppercase tracking-tight" id="legalitas-title">
            Legalitas & Komitmen Perusahaan
          </h2>
          <div className="w-14 h-1 bg-orange-600 mx-auto mt-3 rounded-full"></div>
          
          <p className="text-stone-600 text-xs md:text-sm mt-4 leading-relaxed font-normal max-w-2xl mx-auto" id="legalitas-description">
            Dokumen resmi legalitas usaha sebagai jaminan keamanan dana, transparansi, serta profesionalisme kerja hukum di bawah naungan korporat.
          </p>
        </div>

        {/* 4-BOX BENTO GRID / MODERN COLLAGE */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 items-stretch"
          id="legalitas-bento-grid"
        >
          {DEFAULT_DOCUMENTS.map((doc, idx) => {
            const hasCustomImage = !!userImages[doc.id];
            const currentImage = userImages[doc.id];

            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative cursor-pointer"
                onClick={() => setActiveLightboxIndex(idx)}
                id={`legalitas-card-${doc.id}`}
              >
                {/* CARD TOP PREVIEW / DOCUMENT CANVAS */}
                <div className="relative p-5 pb-3 bg-gradient-to-b from-[#FAF8F5] to-white border-b border-stone-100 flex flex-col items-center">
                  
                  {/* Top Badges */}
                  <div className="w-full flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200/70 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                      Kotak 0{doc.number}
                    </span>

                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shadow-2xs">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Terverifikasi
                    </span>
                  </div>

                  {/* DOCUMENT DISPLAY AREA */}
                  <div className="w-full h-52 sm:h-56 rounded-xl bg-stone-50 border border-stone-200/80 shadow-2xs relative overflow-hidden flex items-center justify-center group-hover:border-orange-400 transition-colors">
                    
                    {hasCustomImage ? (
                      <img
                        src={currentImage}
                        alt={doc.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      /* Stylized Official Document Preview Canvas */
                      <div className="w-full h-full p-4 bg-white flex flex-col justify-between select-none relative overflow-hidden">
                        {/* Subtle background seal */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
                          <Scale className="w-40 h-40 text-stone-900" />
                        </div>

                        {/* Document Top Bar */}
                        <div className="border-b-2 border-stone-800 pb-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-stone-900 text-white flex items-center justify-center font-serif font-black text-[10px]">
                              {doc.number === 1 && "§"}
                              {doc.number === 2 && "RI"}
                              {doc.number === 3 && "OSS"}
                              {doc.number === 4 && "NPWP"}
                            </div>
                            <div className="leading-tight">
                              <p className="text-[9px] font-black uppercase text-stone-900 tracking-wider">
                                REPUBLIK INDONESIA
                              </p>
                              <p className="text-[8px] font-bold text-stone-500 uppercase tracking-tighter truncate max-w-[140px]">
                                {doc.category}
                              </p>
                            </div>
                          </div>
                          <div className="p-1 rounded bg-orange-600/10 text-orange-600">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Document Content Simulation */}
                        <div className="my-auto py-2 space-y-1.5 text-center">
                          <p className="text-[11px] font-black uppercase text-stone-900 tracking-tight leading-tight line-clamp-2">
                            {doc.title}
                          </p>
                          <div className="inline-block px-2 py-0.5 bg-stone-100 rounded border border-stone-200 text-[9.5px] font-mono font-bold text-orange-700 tracking-tight">
                            {doc.identifier}
                          </div>
                          <p className="text-[9px] font-medium text-stone-500 leading-snug line-clamp-2 px-1">
                            {doc.issuer}
                          </p>
                        </div>

                        {/* Document Bottom Seal & Barcode simulation */}
                        <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between text-[8px] text-stone-400">
                          <div className="flex items-center gap-1 font-mono">
                            <QrCode className="w-3.5 h-3.5 text-stone-600" />
                            <span>AUTENTIK & SAH</span>
                          </div>
                          <span className="font-extrabold text-orange-600 uppercase">BERLIAN KONTRAKTOR</span>
                        </div>
                      </div>
                    )}

                    {/* HOVER OVERLAY WITH LIGHTBOX ACTION */}
                    <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                      <span className="px-3 py-1.5 rounded-lg bg-white/95 text-stone-900 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                        <ZoomIn className="w-3.5 h-3.5 text-orange-600" />
                        Perbesar
                      </span>
                    </div>

                    {/* Reset Button (only shown if user uploaded custom image) */}
                    {hasCustomImage && (
                      <button
                        onClick={(e) => handleResetImage(doc.id, e)}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-stone-900/70 hover:bg-stone-900 text-white transition-colors z-10"
                        title="Kembalikan ke Tampilan Dokumen Standar"
                      >
                        <RefreshCw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* CARD BODY: TEXT DESCRIPTIONS & UPLOAD TRIGGER */}
                <div className="p-5 pt-4 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    {/* 1. Title */}
                    <h3 className="text-sm md:text-base font-black uppercase text-stone-900 tracking-wide group-hover:text-orange-600 transition-colors leading-snug mb-1.5">
                      {doc.title}
                    </h3>

                    {/* 2. Issuer / Subtext specific */}
                    <div className="p-2.5 bg-[#FAF8F5] rounded-xl border border-stone-200/80 mb-3">
                      <p className="text-xs font-bold text-stone-800 leading-relaxed">
                        {doc.number === 1 && (
                          <>
                            <span className="text-stone-500 font-normal block text-[10px] uppercase tracking-wider">Pejabat Notaris:</span>
                            Lukman Andi Andri, S.H., M.Kn.
                          </>
                        )}
                        {doc.number === 2 && (
                          <>
                            <span className="text-stone-500 font-normal block text-[10px] uppercase tracking-wider">Nomor SK Menkumham:</span>
                            AHU-0007383.AH.01.01.TAHUN 2022
                          </>
                        )}
                        {doc.number === 3 && (
                          <>
                            <span className="text-stone-500 font-normal block text-[10px] uppercase tracking-wider">Identitas Usaha:</span>
                            NIB: 3101220044183
                          </>
                        )}
                        {doc.number === 4 && (
                          <>
                            <span className="text-stone-500 font-normal block text-[10px] uppercase tracking-wider">Nomor Wajib Pajak:</span>
                            63.161.910.3-404.000
                          </>
                        )}
                      </p>
                    </div>

                    <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
                      {doc.description}
                    </p>
                  </div>

                  {/* BOTTOM ACTION: UPLOAD / GANTI GAMBAR & LIGHTBOX TRIGGER */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    
                    {/* Hidden input for file upload */}
                    <input
                      type="file"
                      ref={(el) => (fileInputRefs.current[doc.id] = el)}
                      onChange={(e) => handleFileUpload(doc.id, e)}
                      accept="image/*"
                      className="hidden"
                    />

                    {/* Upload button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRefs.current[doc.id]?.click();
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 border border-stone-200/70 transition-colors"
                      title="Unggah scan dokumen fisik asli"
                    >
                      <Upload className="w-3 h-3 text-orange-600" />
                      <span>{hasCustomImage ? "Ganti Foto" : "Unggah Scan"}</span>
                    </button>

                    {/* Click to expand action */}
                    <button
                      type="button"
                      onClick={() => setActiveLightboxIndex(idx)}
                      className="inline-flex items-center gap-1 text-[11px] font-black text-orange-600 hover:text-orange-700 uppercase tracking-wider group/btn"
                    >
                      <span>Lihat</span>
                      <ZoomIn className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TRUST COMMITMENT NOTICE BANNER */}
        <div className="mt-10 p-5 md:p-6 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-orange-600/10 rounded-xl text-orange-600 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wide text-stone-900">
                Jaminan Kepastian Hukum & Keamanan Investasi Anda
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                Setiap perjanjian konstruksi dan renovasi di Berlian Kontraktor diikat secara hukum melalui Surat Perjanjian Kerja (SPK) resmi bermaterai.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <span className="text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 border border-stone-200">
              Kemenkumham Terdaftar
            </span>
          </div>
        </div>

      </div>

      {/* LIGHTBOX / POP-UP MODAL */}
      <AnimatePresence>
        {activeDoc && activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/85 backdrop-blur-sm"
            onClick={() => setActiveLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="bg-white rounded-2xl border border-stone-700 shadow-2xl max-w-2xl w-full overflow-hidden relative flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* MODAL HEADER */}
              <div className="p-4 sm:p-5 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-600 rounded-lg text-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 block">
                      DOKUMEN RESMI 0{activeDoc.number} / 04
                    </span>
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      {activeDoc.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveLightboxIndex(null)}
                    className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                    aria-label="Tutup Pop-up"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* MODAL BODY (IMAGE / CANVAS PREVIEW) */}
              <div className="p-4 sm:p-6 bg-stone-100 flex-1 overflow-y-auto flex items-center justify-center relative min-h-[300px] sm:min-h-[380px]">
                {userImages[activeDoc.id] ? (
                  <img
                    src={userImages[activeDoc.id]}
                    alt={activeDoc.title}
                    className="max-h-[60vh] w-auto max-w-full rounded-lg shadow-lg border border-stone-300 object-contain mx-auto"
                  />
                ) : (
                  /* Expanded Official Document Graphic */
                  <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-stone-300 text-center relative overflow-hidden">
                    <div className="border-b-2 border-stone-900 pb-4 mb-4 flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[10px] font-black tracking-widest text-orange-600 uppercase">
                          REPUBLIK INDONESIA
                        </span>
                        <h4 className="text-sm font-black text-stone-900 uppercase">
                          {activeDoc.issuer}
                        </h4>
                      </div>
                      <div className="p-2 bg-orange-600/10 text-orange-600 rounded-lg">
                        <FileCheck className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="py-6 space-y-3">
                      <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                        {activeDoc.type}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-900 uppercase tracking-tight">
                        {activeDoc.title}
                      </h3>
                      
                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 inline-block font-mono font-bold text-stone-900 text-sm sm:text-base">
                        {activeDoc.identifier}
                      </div>

                      <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto pt-2">
                        {activeDoc.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Sah Secara Hukum</span>
                      </div>
                      <span className="font-bold text-stone-700">PT Berlian Kontraktor</span>
                    </div>
                  </div>
                )}

                {/* LIGHTBOX PREV & NEXT CONTROLS */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + DEFAULT_DOCUMENTS.length) % DEFAULT_DOCUMENTS.length : null));
                  }}
                  className="absolute left-2 sm:left-4 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white transition-all shadow-md hover:scale-105"
                  aria-label="Dokumen Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % DEFAULT_DOCUMENTS.length : null));
                  }}
                  className="absolute right-2 sm:right-4 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white transition-all shadow-md hover:scale-105"
                  aria-label="Dokumen Berikutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* MODAL FOOTER */}
              <div className="p-4 sm:p-5 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-stone-600 text-center sm:text-left">
                  <strong className="text-stone-900 block font-bold">{activeDoc.title}</strong>
                  <span>{activeDoc.identifier}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRefs.current[activeDoc.id]?.click()}
                    className="px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5 text-orange-600" />
                    <span>Unggah Scan Baru</span>
                  </button>

                  <button
                    onClick={() => setActiveLightboxIndex(null)}
                    className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
