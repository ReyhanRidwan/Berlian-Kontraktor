/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Wrench, Paintbrush, ShieldCheck, Calculator, Star, Calendar, Clock, User, ArrowRight, Check } from "lucide-react";
import { SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA, ARTICLES_DATA, FAQS_DATA } from "../data";
import { IMAGES } from "../constants/images";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import OptimizedImage from "../components/OptimizedImage";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedArticle: (id: string | null) => void;
}

export default function HomeView({ setActiveTab, setSelectedArticle }: HomeViewProps) {
  // Hero Auto-Fade Carousel States
  const heroSlides = [IMAGES.hero1, IMAGES.hero2];
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // RAB Cost Calculator States
  const [bgArea, setBgArea] = useState<number>(100);
  const [floors, setFloors] = useState<number>(1);
  const [materialClass, setMaterialClass] = useState<"standar" | "medium" | "premium">("medium");

  // FAQ Accordion States (limited to first 3 for home page preview)
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // RAB Estimator Calculation
  const getPricePerMeter = () => {
    switch (materialClass) {
      case "standar":
        return 4500000;
      case "medium":
        return 5800000;
      case "premium":
        return 7200000;
    }
  };

  const getFloorMultiplier = () => {
    if (floors === 1) return 1.0;
    if (floors === 2) return 1.05; // 5% extra cost for scaffolding & structural reinforcement per m2
    return 1.10; // 10% extra
  };

  const calculateTotalRAB = () => {
    const basePrice = getPricePerMeter();
    const multiplier = getFloorMultiplier();
    return Math.round(bgArea * basePrice * multiplier * floors);
  };

  const getMaterialSpecs = () => {
    switch (materialClass) {
      case "standar":
        return [
          "Fondasi: Batu Kali & Sloof Beton Bertulang",
          "Dinding: Batako Plester Aci + Cat Standard",
          "Kusen: Kayu Borneo / Alumunium Standar 3 Inch",
          "Atap: Baja Ringan C-75 & Reng Zincalume, Genteng Metal",
          "Lantai: Keramik Milan / Setara 40x40 cm",
          "Sanitari: Kloset Jongkok & Shower Standard"
        ];
      case "medium":
        return [
          "Fondasi: Cakar Ayam Bertulang (Footing) + Batu Kali",
          "Dinding: Bata Merah Ekspos/Plester Aci tebal, Cat Waterproofing",
          "Kusen: Alumunium Alexindo / Alki 4 Inch Premium",
          "Atap: Baja Ringan Bersertifikat SNI, Genteng Beton Flat",
          "Lantai: Granit Tile Cina/Lokal 60x60 cm",
          "Sanitari: Kloset Duduk TOTO / Setara, Jet Shower, Kran Brass"
        ];
      case "premium":
        return [
          "Fondasi: Bored Pile sedalam 6m + Pile Cap & Struktur K-300",
          "Dinding: Bata Merah Double Wall, Plester Semen Premium, Cat Dulux WeatherShield",
          "Kusen: Alumunium YKK AP Windor Premium / Kayu Jati Oven",
          "Atap: Konstruksi Baja WF + Truss SNI, Genteng Keramik Berglasur Kanmuri",
          "Lantai: Granit Tile Impor Premium / Marmer Alam Lokal 80x80 cm",
          "Sanitari: Kloset Duduk Smart TOTO, Bathtub Acrylic, Wastafel Marmer"
        ];
    }
  };

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(num);
  };

  const handleSendRabToWa = () => {
    const total = calculateTotalRAB();
    const text = `Halo Berlian Kontraktor, saya telah menghitung rencana anggaran menggunakan Kalkulator Biaya RAB di Website Anda:
- Luas Bangunan: ${bgArea} m²
- Jumlah Lantai: ${floors} Lantai
- Kualitas Material: ${materialClass.toUpperCase()} (sekitar ${formatRupiah(getPricePerMeter())}/m²)
- Estimasi Kasar Total RAB: ${formatRupiah(total)}

Saya tertarik untuk menindaklanjuti rencana pembangunan ini dengan survei lokasi gratis. Mohon info waktu koordinasinya.`;
    
    window.open(`https://wa.me/6281389113085?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Get service icons dynamic mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Hammer":
        return <Hammer className="w-6 h-6" />;
      case "Wrench":
        return <Wrench className="w-6 h-6" />;
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
    <div className="font-sans text-white bg-zinc-950" id="home-view-container">
      
      {/* 1. HERO SECTION: AUTOPLAY Carousel (Fade Effects) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950" id="hero-carousel-section">
        <div className="absolute inset-0" id="carousel-slides-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={heroSlides[currentHeroSlide]}
                alt={`Slide ${currentHeroSlide + 1}`}
                className="w-full h-full object-cover scale-105 filter brightness-90 animate-[zoom_15s_infinite_alternate]"
              />
            </motion.div>
          </AnimatePresence>
          {/* Strict Deep Black Overlay */}
          <div className="absolute inset-0 bg-zinc-950/70" />
        </div>

        {/* Content Box (Centered & Highly Legible) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          {/* Top Badge Small Text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 px-4 py-1.5 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 inline-block"
            id="hero-badge"
          >
            <span className="text-[10px] md:text-xs font-black text-white tracking-widest uppercase block">
              KOKOH, PRESISI, DAN DIBANGUN UNTUK GENERASI.
            </span>
          </motion.div>

          {/* Main Title (Medium Size, strictly textual limits) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-3.5xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase max-w-3xl"
            id="hero-main-title"
          >
            “Wujudkan Rumah Impian Anda dari Nol Hingga Sempurna.”
          </motion.h1>

          {/* Sub-description Italic */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-zinc-400 text-xs md:text-sm italic leading-relaxed max-w-2xl font-light"
            id="hero-subtext"
          >
            Kami percaya struktur yang kuat berawal dari perencanaan yang matang. Dari bangun baru hingga renovasi total, kami hadir memastikan setiap sudut hunian Anda kokoh, fungsional, dan bernilai tinggi.
          </motion.p>

          {/* CTA Capsule Button (Oval shape, thin border, change border color on hover) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10"
            id="hero-cta-btn-wrapper"
          >
            <button
              onClick={() => handleLinkClick("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white hover:border-orange-500 bg-transparent hover:bg-orange-600/10 text-white text-xs md:text-sm font-black uppercase tracking-widest py-3.5 px-8 transition-all duration-500 group cursor-pointer shadow-md"
              id="hero-cta-button"
            >
              <span>Mulai Konsultasi Proyek →</span>
            </button>
          </motion.div>
        </div>

        {/* Floating Indicator Dots for Slides */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHeroSlide(i)}
              className={`w-3.5 h-1.5 rounded-full transition-all ${
                currentHeroSlide === i ? "bg-orange-500 w-8" : "bg-zinc-600"
              }`}
              id={`hero-dot-${i}`}
            ></button>
          ))}
        </div>
      </section>

      {/* 2. SERVICES HIGHLIGHT (4-column grid layout) */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900" id="services-highlight-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block mb-2">
              KUALITAS YANG KAMI TAWARKAN
            </span>
            <h2 className="text-2xl md:text-4.5xl font-black text-white uppercase tracking-tight" id="services-highlight-title">
              JASA KONSTRUKSI UTAMA
            </h2>
            <div className="w-12 h-1 bg-orange-600 mx-auto mt-3"></div>
            <p className="text-zinc-400 text-xs md:text-sm mt-4">
              Kami mengerahkan tukang ahli, pengawas sipil bersertifikat, dan transparansi anggaran total demi kepuasan hunian Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-800 hover:border-orange-600/50 transition-all flex flex-col justify-between group"
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="p-3.5 bg-orange-600/10 rounded-lg text-orange-500 w-fit mb-6 group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-lg font-black uppercase text-white tracking-wide mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {service.description.substring(0, 110)}...
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button
                    onClick={() => handleLinkClick("services")}
                    className="text-orange-500 hover:text-white font-extrabold text-[10px] tracking-wider uppercase flex items-center gap-1 group/btn"
                  >
                    <span>Detail Layanan</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT SHORTCUT & BEFORE-AFTER SLIDER */}
      <section className="py-24 bg-zinc-900/40 border-t border-b border-zinc-900" id="project-shortcut-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12" id="project-shortcut-header">
            <div>
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block mb-2">
                RESTORASI NYATA
              </span>
              <h2 className="text-2xl md:text-4.5xl font-black text-white uppercase tracking-tight">
                PORTFOLIO SEBELUM & SESUDAH
              </h2>
              <div className="w-12 h-1 bg-orange-600 mt-3 hidden md:block"></div>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => handleLinkClick("projects")}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-lg transition-all shadow-md shadow-orange-600/10 cursor-pointer"
                id="btn-see-all-projects-home"
              >
                <span>Lihat Semua Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="portfolio-shortcut-grid">
            {/* Info Project Left side */}
            <div className="lg:col-span-5 flex flex-col gap-6" id="portfolio-text-left">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest bg-orange-600/10 px-3 py-1 rounded w-fit">
                Renovasi Total Ciomas
              </span>
              <h3 className="text-xl md:text-2.5xl font-black uppercase tracking-wide text-white">
                Transformasi Lahan Terbiar Menjadi Villa Klasik Modern
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed italic">
                “Tantangan terletak pada struktur tanah lembap di rintisan air Bogor. Struktur penahan semen bertingkat tinggi dengan pemancangan bor pile membalikkan lahan becek terbengkalai menjadi pondasi rumah klasikal megah.”
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-6 mt-2">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block tracking-wider">LOKASI PROYEK</span>
                  <span className="text-xs font-extrabold text-white">Mekarjaya, Bogor</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block tracking-wider">TEKNOLOGI STRUKTUR</span>
                  <span className="text-xs font-extrabold text-white">Waterproof Membrane</span>
                </div>
              </div>
            </div>

            {/* Slider Right side */}
            <div className="lg:col-span-7" id="portfolio-slider-right">
              <BeforeAfterSlider
                beforeImage={IMAGES.portfolioBefore}
                afterImage={IMAGES.portfolioAfter}
                heightClass="h-[320px] md:h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. KALKULATOR BIAYA BANGUN RUMAH (RAB KASAR) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900" id="rab-calculator-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block mb-2">
              ESTIMATOR DIGITAL INSTAN
            </span>
            <h2 className="text-2xl md:text-4.5xl font-black text-white uppercase tracking-tight">
              KALKULATOR RAB RUMAH
            </h2>
            <div className="w-12 h-1 bg-orange-600 mx-auto mt-3"></div>
            <p className="text-zinc-400 text-xs md:text-sm mt-4">
              Hitung kasar estimasi biaya pembangunan rumah Anda secara transparan. Sesuaikan kebutuhan material dan ukuran fisik tanah Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-zinc-900/60 rounded-2xl p-6 md:p-10 border border-zinc-800" id="rab-calculator-interface">
            
            {/* Left Box - User Control Inputs */}
            <div className="lg:col-span-7 flex flex-col gap-6" id="rab-input-panel">
              <h3 className="text-lg font-black uppercase text-white tracking-wide border-b border-zinc-800 pb-3 flex items-center gap-2">
                <Calculator className="text-orange-500 w-5 h-5" />
                <span>Input Spesifikasi Proyek</span>
              </h3>

              {/* Input-1: Luas Bangunan */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs text-zinc-300">
                  <label className="font-extrabold uppercase tracking-wide">Luas Bangunan (m²)</label>
                  <span className="bg-orange-600 text-white font-black px-3 py-1 rounded">
                    {bgArea} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="500"
                  step="5"
                  value={bgArea}
                  onChange={(e) => setBgArea(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
                  id="range-input-luas"
                />
                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span>30 m² (Tipe Kecil)</span>
                  <span>500 m² (Luxury Mansion)</span>
                </div>
              </div>

              {/* Input-2: Jumlah Lantai */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-extrabold uppercase text-zinc-300 tracking-wide block">
                  Jumlah Lantai Rumah
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFloors(num)}
                      className={`py-3 rounded-lg text-xs font-bold uppercase transition-all tracking-wider ${
                        floors === num
                          ? "bg-orange-600 text-white border-orange-600 shadow-md"
                          : "bg-zinc-800 text-zinc-400 border border-zinc-700/60 hover:bg-zinc-750"
                      }`}
                      id={`btn-floors-${num}`}
                    >
                      {num} Lantai
                    </button>
                  ))}
                </div>
              </div>

              {/* Input-3: Kualitas Material */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-extrabold uppercase text-zinc-300 tracking-wide block">
                  Kualitas Spek Material
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(["standar", "medium", "premium"] as const).map((spec) => (
                    <button
                      key={spec}
                      type="button"
                      onClick={() => setMaterialClass(spec)}
                      className={`p-4 rounded-lg flex flex-col items-center justify-center text-center transition-all border ${
                        materialClass === spec
                          ? "bg-orange-600/10 border-orange-500 text-white shadow-sm"
                          : "bg-zinc-800 border-zinc-700/50 text-zinc-400 hover:bg-zinc-750"
                      }`}
                      id={`btn-spec-${spec}`}
                    >
                      <span className="text-xs font-black uppercase tracking-wider block">
                        {spec}
                      </span>
                      <span className="text-[10px] text-zinc-500 mt-1 block">
                        {spec === "standar" ? "~Rp 4.5 Jt/m²" : spec === "medium" ? "~Rp 5.8 Jt/m²" : "~Rp 7.2 Jt/m²"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Box - Output Breakdown */}
            <div className="lg:col-span-5 bg-zinc-950 p-6 rounded-xl border border-zinc-800 flex flex-col justify-between" id="rab-output-panel">
              <div>
                <span className="text-[10px] bg-orange-600/15 text-orange-500 font-bold px-3 py-1 rounded uppercase tracking-wider block w-fit mb-4">
                  ESTIMASI TOTAL BIAYA (KASAR)
                </span>
                
                <div className="py-2 mb-6" id="total-rab-price-wrapper">
                  <span className="text-3xl md:text-4xl font-black text-orange-500 tracking-tight block">
                    {formatRupiah(calculateTotalRAB())}
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-1.5 block">
                    *Mencakup seluruh biaya jasa tukang, logistik, pengawasan arsitek, dan material struktur utama.
                  </span>
                </div>

                {/* Material list bullet points */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold uppercase text-white tracking-widest">
                    Spesifikasi Terlingkup ({materialClass.toUpperCase()}):
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-400" id="rab-materials-list">
                    {getMaterialSpecs().map((spec, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900">
                <button
                  type="button"
                  onClick={handleSendRabToWa}
                  className="w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-black text-xs py-4 px-6 rounded-lg uppercase tracking-wider transition-all block cursor-pointer"
                  id="btn-submit-rab-wa"
                >
                  Ajukan Survei & Detail RAB Ke WA
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS (Stacked vertically on mobile, grid on desktop) */}
      <section className="py-24 bg-zinc-900/10 border-b border-zinc-900" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block mb-2">
              KATA KLIEN KAMI
            </span>
            <h2 className="text-2xl md:text-4.5xl font-black text-white uppercase tracking-tight">
              TESTIMONI KLIEN BERLIAN KONTRAKTOR
            </h2>
            <div className="w-12 h-1 bg-orange-600 mx-auto mt-3"></div>
            <p className="text-zinc-400 text-xs md:text-sm mt-4">
              Komitmen kami adalah kepuasan jangka panjang pemilik hunian. Berikut adalah ulasan jujur dari keluarga yang mempercayakan rumahnya pada kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="testimonials-stack">
            {TESTIMONIALS_DATA.map((testi) => (
              <div
                key={testi.id}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between"
                id={`testimonial-item-${testi.id}`}
              >
                <div>
                  <div className="flex gap-1 text-orange-500 mb-4" id="testimonial-stars">
                    {Array.from({ length: testi.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed italic mb-6">
                    “{testi.content}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-10 h-10 rounded-full object-cover border border-orange-500/30"
                  />
                  <div>
                    <h4 className="text-xs font-black text-white uppercase mb-0.5">{testi.name}</h4>
                    <span className="text-[10px] text-zinc-500">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ (Home FAQ Preview Section) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900" id="faq-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Title column */}
            <div className="lg:col-span-5" id="faq-preview-text-left">
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block mb-2">
                PERTANYAAN POPULER
              </span>
              <h2 className="text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight leading-tight">
                TANYA JAWAB SEPUTAR PEMBANGUNAN
              </h2>
              <div className="w-12 h-1 bg-orange-600 mt-4 mb-6"></div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                Kami menyajikan informasi seputar pengerjaan secara jujur dan gamblang. Cari tahu proses IMB, alur garansi, dan kalkulasi pembayaran di sini.
              </p>
              <button
                onClick={() => handleLinkClick("faq")}
                className="inline-flex items-center gap-2 text-orange-500 hover:text-white font-extrabold text-xs uppercase tracking-widest group"
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
                    className="bg-zinc-900/40 rounded-lg p-5 border border-zinc-800/80 transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-sm font-bold text-white tracking-wide pr-4">
                        {faq.question}
                      </span>
                      <span className={`text-orange-500 font-black shrink-0 text-lg transition-transform ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
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
      <section className="py-20 bg-orange-600/90 relative overflow-hidden" id="convert-cta-section">
        {/* Abstract design elements */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 transform origin-top-right pointer-events-none" />
        <div className="absolute left-10 bottom-0 w-24 h-24 rounded-full bg-black/10 blur-xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <span className="text-zinc-950 font-black tracking-widest text-xs uppercase bg-white px-3 py-1.5 rounded-full mb-4">
            KONSULTASI GRATIS & SURVEI LOKASI
          </span>
          <h2 className="text-2xl md:text-3.5xl font-black text-white tracking-tight uppercase max-w-2xl leading-tight">
            INGIN MEMULAI PROYEK HUNIAN DI BOGOR? KAMI SIAP MEMBANTU SEKARANG JUGA!
          </h2>
          <p className="text-orange-100 text-xs md:text-sm mt-4 max-w-xl">
            Survei lokasi, pengukuran tanah kasar, dan konsultasi blueprint awal tidak kami pungut biaya sepeser pun. Klik tombol di bawah untuk pesan waktu survei.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6281389113085?text=Halo%20Berlian%20Kontraktor,%20saya%20tertarik%20untuk%20pesan%20jadwal%20survei%20lokasi%20pembangunan%20rumah"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 text-white font-black text-xs uppercase px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all tracking-wider shadow-xl"
              id="btn-cta-wa"
            >
              Hubungi via WhatsApp
            </a>
            <button
              onClick={() => handleLinkClick("contact")}
              className="border border-white/65 hover:border-black text-white hover:text-zinc-950 font-bold text-xs uppercase px-8 py-4 rounded-full transition-all"
              id="btn-cta-contact-home"
            >
              Formulir Pertanyaan &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 8. ARTICLES SECTION (Up to 3 previews) */}
      <section className="py-24 bg-zinc-950" id="articles-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block mb-2">
                REKAYASA ARSITEKTURAL
              </span>
              <h2 className="text-2xl md:text-4.5xl font-black text-white uppercase tracking-tight">
                ARTIKEL & PANDUAN SIPIL
              </h2>
              <div className="w-12 h-1 bg-orange-600 mt-3 hidden md:block"></div>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => handleLinkClick("articles")}
                className="inline-flex items-center gap-2 text-orange-500 hover:text-white font-extrabold text-xs uppercase tracking-widest"
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
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-md flex flex-col justify-between group cursor-pointer hover:border-zinc-700 transition-colors"
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
                    <div className="flex items-center gap-3 text-[10px] text-zinc-500 mb-3" id="art-meta">
                      <span className="text-orange-500 font-bold uppercase">{art.category}</span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>

                    <h3 className="text-sm font-extrabold uppercase text-white tracking-wide leading-snug mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {art.title}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-zinc-850/50 flex justify-between items-center text-[10px] text-zinc-500" id="art-footer">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-orange-500" />
                    <span>{art.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
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
