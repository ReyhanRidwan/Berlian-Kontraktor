/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Wrench, Paintbrush, ShieldCheck, Star, Calendar, Clock, User, ArrowRight, Handshake, ChevronLeft, ChevronRight, CheckCircle2, Building2, DraftingCompass, MapPin, FileSignature, HardHat, Award } from "lucide-react";
import { SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA, ARTICLES_DATA, FAQS_DATA, WORKFLOW_STEPS } from "../data";
import { IMAGES } from "../constants/images";
import { CONTACT_INFO } from "../constants/contact";
import OptimizedImage from "../components/OptimizedImage";
import WhatsAppIcon from "../components/WhatsAppIcon";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedArticle: (id: string | null) => void;
}

export default function HomeView({ setActiveTab, setSelectedArticle }: HomeViewProps) {
  // Hero Carousel Slides - Optimized for Google Ads & PageSpeed (LCP & CLS)
  const heroSlides = [
    {
      id: 1,
      title: "Solusi Terpercaya Untuk Konstruksi Bangunan & Renovasi Hunian",
      location: "Jabodetabek",
      // Laptop / Desktop (min-width: 1024px)
      desktop: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_1400,c_limit/v1788859529/72394245-35d3-4c11-9615-f92c9f2e8aba.png",
      // HP / Mobile (default)
      mobile: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_600,c_limit/v1788859529/72394245-35d3-4c11-9615-f92c9f2e8aba.png",
    },
    {
      id: 2,
      title: "Pembangunan Rumah & Desain Arsitektur Modern",
      location: "Jabodetabek",
      desktop: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_1400,c_limit/v1788859555/f73ff313-53cb-451b-aa8b-d784dd37b886.png",
      mobile: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_600,c_limit/v1788859555/f73ff313-53cb-451b-aa8b-d784dd37b886.png",
    },
    {
      id: 3,
      title: "Pekerjaan Struktur & Renovasi Berkualitas Tinggi",
      location: "Jabodetabek",
      desktop: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_1400,c_limit/v1788859568/f7a99f3c-e65e-48d7-a41b-5502ab36e8f4.png",
      mobile: "https://res.cloudinary.com/di6ziqvtp/image/upload/f_auto,q_auto:eco,w_600,c_limit/v1788859568/f7a99f3c-e65e-48d7-a41b-5502ab36e8f4.png",
    }
  ];
  
  const [slideState, setSlideState] = useState<{ current: number; direction: number }>({
    current: 0,
    direction: 1
  });

  const paginate = (newDirection: number) => {
    setSlideState((prev) => {
      const nextIndex = (prev.current + newDirection + heroSlides.length) % heroSlides.length;
      return { current: nextIndex, direction: newDirection };
    });
  };

  const goToSlide = (index: number) => {
    setSlideState((prev) => ({
      current: index,
      direction: index > prev.current ? 1 : -1
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  // Deferred prefetch for slides 2 & 3 ONLY after the page has finished loading
  // to reserve 100% initial bandwidth for Slide 1 (LCP)
  useEffect(() => {
    const deferLoadSecondarySlides = () => {
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
      [heroSlides[1], heroSlides[2]].forEach((slide) => {
        const img = new Image();
        img.src = isDesktop ? slide.desktop : slide.mobile;
        img.loading = "lazy";
      });
    };

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(deferLoadSecondarySlides, { timeout: 3500 });
        } else {
          setTimeout(deferLoadSecondarySlides, 3000);
        }
      } else {
        const onLoad = () => {
          if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(deferLoadSecondarySlides, { timeout: 3500 });
          } else {
            setTimeout(deferLoadSecondarySlides, 3000);
          }
        };
        window.addEventListener("load", onLoad);
        return () => window.removeEventListener("load", onLoad);
      }
    }
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.75 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1,
      transition: {
        x: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.75 },
        opacity: { duration: 0.3 }
      }
    })
  };

  // FAQ Accordion States (limited to first 3 for home page preview)
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Get service icons dynamic mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-6 h-6" />;
      case "DraftingCompass":
        return <DraftingCompass className="w-6 h-6" />;
      case "Wrench":
        return <Wrench className="w-6 h-6" />;
      case "Hammer":
        return <Hammer className="w-6 h-6" />;
      case "Paintbrush":
        return <Paintbrush className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  // Extract top 3 articles for blog preview
  const blogPreview = ARTICLES_DATA.slice(0, 3);

  // Extract first 4 FAQs for neat visual grid
  const faqPreview = FAQS_DATA.slice(0, 4);

  return (
    <div className="font-sans text-stone-900 bg-[#FAF8F5]" id="home-view-container">
      
      {/* 1. HERO SECTION: Ultra-Optimized Responsive Carousel for Google Ads & PageSpeed */}
      <section 
        className="relative w-full h-[85vh] min-h-[580px] max-h-[960px] lg:h-screen flex items-center justify-center overflow-hidden bg-stone-900" 
        id="hero-carousel-section"
        style={{ contain: "paint layout" }}
      >
        {/* Carousel Slides with Left/Right Slide Transition */}
        <div className="absolute inset-0 overflow-hidden" id="carousel-slides-wrapper">
          <AnimatePresence initial={false} custom={slideState.direction}>
            <motion.div
              key={slideState.current}
              custom={slideState.direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <picture className="w-full h-full block">
                {/* 1. Laptop / Desktop Source (min-width: 1024px) */}
                <source
                  media="(min-width: 1024px)"
                  srcSet={heroSlides[slideState.current].desktop}
                />
                {/* 2. Mobile Source (default fallback) with locked dimensions for zero CLS */}
                <img
                  src={heroSlides[slideState.current].mobile}
                  alt={heroSlides[slideState.current].title}
                  width="1400"
                  height="800"
                  loading={slideState.current === 0 ? "eager" : "lazy"}
                  fetchPriority={slideState.current === 0 ? "high" : "low"}
                  decoding={slideState.current === 0 ? "sync" : "async"}
                  className="w-full h-full object-cover object-center select-none pointer-events-none"
                  style={{ aspectRatio: "1400 / 800" }}
                />
              </picture>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lapisan hitam lembut 60% agar gambar latar belakang tetap terlihat dengan efek gelap yang lebih solid */}
        <div className="absolute inset-0 bg-black/60 z-[2] pointer-events-none" id="hero-dark-overlay" />

        {/* Previous & Next Navigation Arrows */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Slide sebelumnya"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-white/90 hover:bg-orange-600 text-stone-800 hover:text-white backdrop-blur-md border border-stone-200/80 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer group"
          id="hero-prev-slide-btn"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Slide berikutnya"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-white/90 hover:bg-orange-600 text-stone-800 hover:text-white backdrop-blur-md border border-stone-200/80 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer group"
          id="hero-next-slide-btn"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Content Box (Centered & Highly Legible) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          {/* Top Badge: Tagline Design - Building - Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-5 px-5 py-2 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 shadow-lg inline-flex items-center gap-2"
            id="hero-badge"
          >
            <span className="text-xs sm:text-sm font-black text-white tracking-[0.2em] uppercase">
              Design - Building - Maintenance
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-3.5xl md:text-4xl lg:text-5xl font-black text-white drop-shadow-md tracking-tight leading-tight uppercase max-w-3xl"
            id="hero-main-title"
          >
            SOLUSI TERPERCAYA UNTUK KONSTRUKSI BANGUNAN & RENOVASI HUNIAN ANDA
          </motion.h1>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-5 text-white drop-shadow-sm text-xs md:text-sm leading-relaxed max-w-2xl font-medium"
            id="hero-subtext"
          >
            Dari pembangunan gedung, rumah tinggal, hingga renovasi total, PT. Berlian Kontraktor siap mewujudkan bangunan yang kokoh, fungsional, dan bernilai tinggi.
          </motion.p>

          {/* Free Perks Pills (Free Survei, Free Konsultasi, Free Design) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
            id="hero-free-perks"
          >
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-stone-200 shadow-sm text-stone-900 font-bold text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Free Survei</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-stone-200 shadow-sm text-stone-900 font-bold text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Free Konsultasi</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-stone-200 shadow-sm text-stone-900 font-bold text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Free Design</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-8"
            id="hero-cta-btn-wrapper"
          >
            <button
              onClick={() => handleLinkClick("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-orange-600 hover:bg-orange-700 text-white text-xs md:text-sm font-black uppercase tracking-widest py-3.5 px-8 transition-all duration-300 group cursor-pointer shadow-xl"
              id="hero-cta-button"
            >
              <span>Mulai Konsultasi Proyek →</span>
            </button>
          </motion.div>
        </div>

        {/* Floating Indicator Dots for Slides */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          <div className="flex gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => goToSlide(i)}
                className={`w-3.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  slideState.current === i ? "bg-orange-600 w-8" : "bg-stone-400/80 hover:bg-stone-600"
                }`}
                id={`hero-dot-${i}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES HIGHLIGHT (4-column grid layout) */}
      <section className="py-24 bg-[#FAF8F5] border-t border-stone-200" id="services-highlight-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
              KUALITAS YANG KAMI TAWARKAN
            </span>
            <h2 className="text-2xl md:text-4.5xl font-black text-stone-900 uppercase tracking-tight" id="services-highlight-title">
              JASA KONSTRUKSI UTAMA
            </h2>
            <div className="w-12 h-1 bg-orange-600 mx-auto mt-3"></div>
            <p className="text-stone-600 text-xs md:text-sm mt-4">
              Kami mengerahkan tukang ahli, pengawas sipil bersertifikat, dan transparansi anggaran total demi kepuasan hunian Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" id="services-grid">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 lg:p-7 border border-stone-200/80 hover:border-orange-500/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="p-3.5 bg-orange-600/10 rounded-lg text-orange-600 w-fit mb-6 group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-lg font-black uppercase text-stone-900 tracking-wide mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-stone-100">
                  <button
                    onClick={() => handleLinkClick("services")}
                    className="text-orange-600 hover:text-stone-900 font-extrabold text-[11px] tracking-wider uppercase flex items-center gap-1 group/btn"
                  >
                    <span>Detail Layanan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS (2 Projects horizontally aligned) */}
      <section className="py-24 bg-[#F4F0E8] border-t border-b border-stone-200" id="featured-projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12" id="featured-projects-header">
            <div>
              <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
                PORTFOLIO PROYEK UNGGULAN
              </span>
              <h2 className="text-2xl md:text-4.5xl font-black text-stone-900 uppercase tracking-tight">
                PROYEK TERBARU KAMI
              </h2>
              <div className="w-12 h-1 bg-orange-600 mt-3 hidden md:block"></div>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => handleLinkClick("projects")}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-lg transition-all shadow-md cursor-pointer group"
                id="btn-see-all-projects-home"
              >
                <span>Lihat Semua Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="featured-projects-grid">
            {/* Project 1: Renovasi Wisma EMS, Cisarua - Bogor */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={IMAGES.wismaEms}
                  alt="Renovasi Wisma EMS, Cisarua - Bogor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-sm">
                  Cisarua, Bogor
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-stone-900 uppercase tracking-wide group-hover:text-orange-600 transition-colors">
                    Renovasi Wisma EMS, Cisarua - Bogor
                  </h3>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed mt-2 font-normal">
                    Pekerjaan peremajaan dan renovasi komprehensif bangunan Wisma EMS di Cisarua, Bogor. Mencakup perbaikan atap, penataan ulang fasad interior-eksterior, serta penguatan struktur bangunan.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500">
                  <span className="text-orange-600 font-extrabold">Renovasi & Remodeling</span>
                  <span>Berlian Kontraktor</span>
                </div>
              </div>
            </div>

            {/* Project 2: Renovasi Kantor - Cakung, Jakarta Timur */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={IMAGES.kantorCakung}
                  alt="Renovasi Kantor - Jl. P. Komarudin Km. 23, Cakung, Jakarta Timur, Indonesia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-sm">
                  Cakung, Jakarta Timur
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-stone-900 uppercase tracking-wide group-hover:text-orange-600 transition-colors">
                    Renovasi Kantor
                  </h3>
                  <div className="flex items-start gap-1.5 text-xs text-orange-600 font-bold mt-1.5 leading-snug">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>Jl. P. Komarudin Km. 23, Cakung, Jakarta Timur, Indonesia.</span>
                  </div>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed mt-2.5 font-normal">
                    Pekerjaan renovasi dan peremajaan gedung kantor di Jl. P. Komarudin Km. 23, Cakung, Jakarta Timur, Indonesia dengan pengerjaan struktural, interior, dan tata ruang modern.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500">
                  <span className="text-orange-600 font-extrabold">Renovasi Kantor & Komersial</span>
                  <span>Berlian Kontraktor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA for Mobile screens */}
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => handleLinkClick("projects")}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md w-full justify-center"
            >
              <span>Lihat Semua Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. TAHAPAN KERJA SECTION */}
      <section className="py-24 bg-white border-b border-stone-200" id="home-tahapan-kerjasama-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-600/10 rounded-full text-orange-600 mb-3 border border-orange-500/20">
              <Handshake className="w-4 h-4" />
              <span className="text-xs font-black tracking-widest uppercase">🤝 TAHAPAN KERJA</span>
            </div>
            <h2 className="text-2xl md:text-4.5xl font-black text-stone-900 uppercase tracking-tight">
              Tahapan Kerja Berlian Kontraktor
            </h2>
            <div className="w-12 h-1 bg-orange-600 mx-auto mt-3"></div>
            <p className="text-stone-600 text-xs md:text-sm mt-4 leading-relaxed font-medium">
              Alur kerja sistematis, transparan, dan terukur mulai dari survei awal hingga serah terima hunian impian Anda.
            </p>
          </div>

          {/* Steps Grid (5 Steps) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="home-tahapan-grid">
            {WORKFLOW_STEPS.map((item) => (
              <div
                key={item.step}
                className={`p-6 rounded-2xl border border-stone-200/90 bg-[#FAF8F5] hover:bg-white hover:border-orange-500/40 hover:shadow-md transition-all flex flex-col justify-between group ${
                  item.step === 5 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-r from-orange-50/70 via-amber-50/40 to-white" : ""
                }`}
                id={`home-step-card-${item.step}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-orange-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                      {item.stepNumber}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-black text-stone-900 uppercase tracking-wide mb-2 group-hover:text-orange-600 transition-colors">
                    Langkah {item.stepNumber}: {item.title}
                  </h3>

                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                  <span>Proses Transparan</span>
                  <span className="text-orange-600 font-extrabold">Langkah {item.stepNumber} / 05</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-[#F4F0E8] border-b border-stone-200" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
              KATA KLIEN KAMI
            </span>
            <h2 className="text-2xl md:text-4.5xl font-black text-stone-900 uppercase tracking-tight">
              TESTIMONI KLIEN BERLIAN KONTRAKTOR
            </h2>
            <div className="w-12 h-1 bg-orange-600 mx-auto mt-3"></div>
            <p className="text-stone-600 text-xs md:text-sm mt-4">
              Komitmen kami adalah kepuasan jangka panjang pemilik hunian. Berikut adalah ulasan jujur dari keluarga yang mempercayakan rumahnya pada kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="testimonials-stack">
            {TESTIMONIALS_DATA.map((testi) => (
              <div
                key={testi.id}
                className="bg-white border border-stone-200/80 rounded-xl p-6 shadow-sm flex flex-col justify-between"
                id={`testimonial-item-${testi.id}`}
              >
                <div>
                  <div className="flex gap-1 text-orange-500 mb-4" id="testimonial-stars">
                    {Array.from({ length: testi.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed italic mb-6">
                    “{testi.content}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-10 h-10 rounded-full object-cover border border-orange-500/30"
                  />
                  <div>
                    <h4 className="text-xs font-black text-stone-900 uppercase mb-0.5">{testi.name}</h4>
                    <span className="text-[10px] text-stone-500 font-medium">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ (Home FAQ Preview Section) */}
      <section className="py-24 bg-[#FAF8F5] border-b border-stone-200" id="faq-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Title column */}
            <div className="lg:col-span-5" id="faq-preview-text-left">
              <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
                PERTANYAAN POPULER
              </span>
              <h2 className="text-2xl md:text-3.5xl font-black text-stone-900 uppercase tracking-tight leading-tight">
                TANYA JAWAB SEPUTAR PEMBANGUNAN
              </h2>
              <div className="w-12 h-1 bg-orange-600 mt-4 mb-6"></div>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-6">
                Kami menyajikan informasi seputar pengerjaan secara jujur dan gamblang. Cari tahu proses IMB, alur garansi, dan kalkulasi pembayaran di sini.
              </p>
              <button
                onClick={() => handleLinkClick("faq")}
                className="inline-flex items-center gap-2 text-orange-600 hover:text-stone-900 font-extrabold text-xs uppercase tracking-widest group"
                id="btn-go-all-faqs"
              >
                <span>Lihat Semua Tanya Jawab</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Accordion column */}
            <div className="lg:col-span-7 space-y-3" id="faq-preview-accordions">
              {faqPreview.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg p-5 border border-stone-200/80 shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-sm font-bold text-stone-900 tracking-wide pr-4">
                        {faq.question}
                      </span>
                      <span className={`text-orange-600 font-black shrink-0 text-lg transition-transform ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-4 text-xs text-stone-600 leading-relaxed border-t border-stone-200 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 7. HIGH CONVERSION CTA PANEL */}
      <section className="py-20 bg-gradient-to-br from-slate-200 via-stone-200 to-zinc-300 border-y border-stone-300/80 relative overflow-hidden" id="convert-cta-section">
        {/* Abstract design elements */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/30 skew-x-12 transform origin-top-right pointer-events-none" />
        <div className="absolute left-10 bottom-0 w-24 h-24 rounded-full bg-slate-400/20 blur-xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <span className="text-stone-900 font-black tracking-widest text-xs uppercase bg-white/90 border border-stone-300 px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
            KONSULTASI GRATIS & SURVEI LOKASI
          </span>
          <h2 className="text-2xl md:text-3.5xl font-black text-stone-900 tracking-tight uppercase max-w-2xl leading-tight">
            INGIN MEMULAI PROYEK HUNIAN DI JAKARTA & JABODETABEK? KAMI SIAP MEMBANTU SEKARANG JUGA!
          </h2>
          <p className="text-stone-700 text-xs md:text-sm mt-4 max-w-xl font-medium leading-relaxed">
            Survei lokasi, pengukuran tanah kasar, dan konsultasi blueprint awal tidak kami pungut biaya sepeser pun. Klik tombol di bawah untuk pesan waktu survei.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT_INFO.consultation.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase px-8 py-4 rounded-full transition-all tracking-wider shadow-xl inline-flex items-center gap-2.5 hover:scale-105 active:scale-95 border-2 border-white/40"
              id="btn-cta-wa"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current text-white" />
              <span>Hubungi via WhatsApp ({CONTACT_INFO.consultation.phone})</span>
            </a>
            <button
              onClick={() => handleLinkClick("contact")}
              className="border border-stone-400 hover:border-stone-900 text-stone-900 hover:bg-white bg-white/70 font-extrabold text-xs uppercase px-8 py-4 rounded-full transition-all shadow-sm"
              id="btn-cta-contact-home"
            >
              Formulir Pertanyaan &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 8. ARTICLES SECTION (Up to 3 previews) */}
      <section className="py-24 bg-[#F4F0E8]" id="articles-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
                REKAYASA ARSITEKTURAL
              </span>
              <h2 className="text-2xl md:text-4.5xl font-black text-stone-900 uppercase tracking-tight">
                ARTIKEL & PANDUAN SIPIL
              </h2>
              <div className="w-12 h-1 bg-orange-600 mt-3 hidden md:block"></div>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => handleLinkClick("articles")}
                className="inline-flex items-center gap-2 text-orange-600 hover:text-stone-900 font-extrabold text-xs uppercase tracking-widest"
                id="btn-home-go-articles"
              >
                <span>Lihat Semua Artikel</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="home-blog-list-row">
            {blogPreview.map((art) => (
              <article
                key={art.id}
                className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all"
                onClick={() => {
                  setSelectedArticle(art.id);
                  setActiveTab("articles");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                id={`article-card-home-${art.id}`}
              >
                <div>
                  <OptimizedImage
                    src={art.image}
                    alt={art.title}
                    wrapperClassName="aspect-video"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[10px] text-stone-500 mb-3" id="art-meta">
                      <span className="text-orange-600 font-extrabold uppercase">{art.category}</span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>

                    <h3 className="text-sm font-extrabold uppercase text-stone-900 tracking-wide leading-snug mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {art.title}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-stone-200 flex justify-between items-center text-[10px] text-stone-500" id="art-footer">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-orange-600" />
                    <span>{art.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    <span>{art.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );

  // Quick page navigator to override tab
  function handleLinkClick(tabId: string) {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
