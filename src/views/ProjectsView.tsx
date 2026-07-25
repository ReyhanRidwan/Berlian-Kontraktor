/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, User, HardHat, CheckCircle2 } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import OptimizedImage from "../components/OptimizedImage";

interface ProjectCarouselProps {
  gallery: string[];
}

function ProjectCarousel({ gallery }: ProjectCarouselProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-slide every 3 seconds. By adding activeIdx to deps, a button click resets the timer!
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % gallery.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeIdx, gallery.length]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="flex flex-col gap-3" id={`carousel-gallery-${gallery[0].substring(gallery[0].length - 6)}`}>
      {/* Active Carousel Photo */}
      <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video/width md:h-[260px] w-full">
        <OptimizedImage
          src={gallery[activeIdx]}
          alt={`Detail Galeri Proyek ${activeIdx + 1}`}
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur px-2.5 py-1 rounded text-[10px] font-black tracking-widest uppercase">
          {activeIdx + 1} / {gallery.length} FOTO
        </div>
      </div>

      {/* Control Buttons & Progress Dots (Permanently below the image, no hover required) */}
      <div className="flex items-center justify-between bg-zinc-950 p-2.5 rounded-lg border border-zinc-850">
        <button
          onClick={handlePrev}
          className="p-2 bg-zinc-900 hover:bg-orange-600 text-white rounded transition-colors"
          title="Foto Sebelumnya"
          type="button"
          id="btn-prev-carousel"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Small indicators dots */}
        <div className="flex gap-1.5">
          {gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIdx === i ? "bg-orange-600 w-4" : "bg-zinc-700"
              }`}
              id={`carousel-dot-${i}`}
            ></button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 bg-zinc-900 hover:bg-orange-600 text-white rounded transition-colors"
          title="Foto Selanjutnya"
          type="button"
          id="btn-next-carousel"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function ProjectsView({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="font-sans text-white bg-zinc-950" id="projects-view-container">
      
      {/* 1. HEADER SECTION: Full Orange Layout with Blur Elements */}
      <header className="relative py-24 md:py-32 bg-orange-600 overflow-hidden" id="projects-header">
        {/* Glow decorative blur orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl -translate-x-12 -translate-y-12" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-zinc-950/15 rounded-full filter blur-3xl translate-x-12 translate-y-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md rounded border border-white/20 mb-4"
          >
            <span className="text-[10px] md:text-xs font-black tracking-widest text-white uppercase block">
              PORTFOLIO UTAMA BERLIAN KONTRAKTOR
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            PROYEK & MASTRIPKAS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-orange-100 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-light"
          >
            Rekam jejak komitmen konstruksi sipil kami di wilayah Bogor. Bukti pengerjaan presisi mulai dari pematokan tiang pondasi hingga polesan akhir interior mewah.
          </motion.p>
        </div>
      </header>

      {/* 2. DAFTAR PROYEK (Info Left, Visual Right for desktop) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28" id="projects-list-section">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start border-b border-zinc-900 pb-16 last:border-0"
            id={`project-block-${project.id}`}
          >
            
            {/* Info Proyek (Kiri di Desktop) */}
            <div className="lg:col-span-5 space-y-6" id={`project-info-${project.id}`}>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-orange-600 font-extrabold text-white px-3 py-1 rounded uppercase tracking-wider">
                  SPESIFIKASI PROYEK 0{idx + 1}
                </span>
              </div>
              
              <h2 className="text-xl md:text-2.5xl font-black uppercase text-white tracking-wide" id={`project-title-${project.id}`}>
                {project.title}
              </h2>

              <div className="grid grid-cols-2 gap-4 border-y border-zinc-900 py-4 text-xs">
                <div className="flex items-center gap-2.5 text-zinc-400">
                  <User className="w-4 h-4 text-orange-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-medium">Pemilik Utama</span>
                    <span className="font-bold text-white">{project.client}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-medium">Lokasi</span>
                    <span className="font-bold text-white">{project.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400">
                  <Calendar className="w-4 h-4 text-orange-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-medium">Tahun Selesai</span>
                    <span className="font-bold text-white">{project.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400">
                  <HardHat className="w-4 h-4 text-orange-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-medium">Dimensi Area</span>
                    <span className="font-bold text-white">{project.area}</span>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution (Italic description explaining challenges/solutions) */}
              <div className="space-y-4 bg-zinc-900/60 p-5 rounded-lg border border-zinc-850">
                <div className="space-y-1">
                  <h4 className="text-[10px] text-orange-500 font-black tracking-widest uppercase mb-1">
                    Tantangan Struktur:
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed italic">
                    “{project.challenge}”
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-zinc-850/60">
                  <h4 className="text-[10px] text-zinc-300 font-black tracking-widest uppercase mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                    <span>Solusi Engineering Berlian Kontraktor:</span>
                  </h4>
                  <p className="text-xs text-zinc-350 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

            </div>

            {/* Visual Proyek (Kanan di Desktop, BeforeAfter & Auto-Slide Carousel stacked) */}
            <div className="lg:col-span-7 space-y-6" id={`project-visuals-${project.id}`}>
              {/* Before-After Slider Container */}
              <div>
                <span className="text-[10px] text-zinc-500 tracking-wider font-extrabold uppercase block mb-2.5">
                  Pembanding Sebelum vs. Sesudah Konstruksi
                </span>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  heightClass="h-[280px] md:h-[380px]"
                />
              </div>

              {/* Detail Auto-Slide Gallery */}
              <div>
                <span className="text-[10px] text-zinc-500 tracking-wider font-extrabold uppercase block mb-2.5">
                  Detail Galeri Pengerjaan (Auto-Slide Carousel 3s)
                </span>
                <ProjectCarousel gallery={project.gallery} />
              </div>
            </div>

          </motion.div>
        ))}
      </section>

      {/* 3. BOTTOM CTA SECTION */}
      <section className="py-20 bg-zinc-900/50 border-t border-zinc-900 text-center" id="projects-bottom-cta">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <span className="text-orange-500 font-extrabold text-xs tracking-widest uppercase block mb-2">
            WAKTU TERBAIK UNTUK MEMULAI
          </span>
          <h2 className="text-xl md:text-3xl font-black uppercase text-white tracking-tight leading-tight">
            MEMILIKI RENCANA TANAH ATAU BANGUNAN YANG INGIN KAMI SURVEI?
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-3 max-w-xl">
            Insinyur sipil dan arsitek berlisensi kami siap menjadwalkan kunjungan tapak gratis langsung ke lahan Anda. Kami hitungkan estimasi RAB secara transparan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/6281389113085?text=Halo%20Berlian%20Kontraktor,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20konstruksi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white font-black text-xs py-3.5 px-8 rounded-full uppercase tracking-wider transition-all"
              id="cta-projects-wa-btn"
            >
              Konsultasi WhatsApp Sekarang
            </a>
            <button
              onClick={() => {
                setActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="border border-zinc-700 hover:border-orange-500 text-white font-bold text-xs py-3.5 px-8 rounded-full transition-all"
              id="cta-projects-form-btn"
            >
              Gunakan Formulir Kontak
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
