/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, MapPin, Wrench, ImageIcon, Maximize2, X, ArrowRight, FolderCheck } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";

interface ProjectsViewProps {
  setActiveTab: (tab: string) => void;
}

export default function ProjectsView({ setActiveTab }: ProjectsViewProps) {
  // Lightbox state for enlarged image view
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; location: string } | null>(null);

  // Completed projects data specified by client
  const completedProjects = [
    {
      id: "rotary-bintaro",
      title: "Proyek Renovasi Rotary, Bintaro",
      location: "Bintaro, Tangerang Selatan",
      category: "Renovasi Total",
      shapeLabel: "Persegi (1:1)",
      heightClass: "h-52 sm:h-56 md:h-60",
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785150130/image_riu4qi.webp",
      description: "Pengerjaan renovasi total dan peremajaan struktur bangunan komersial / hunian di area Bintaro dengan spesifikasi material berkualitas tinggi dan perapihan tata ruang."
    },
    {
      id: "alun-indah-cakung",
      title: "Proyek Renovasi Alun Indah - Cakung",
      location: "Cakung, Jakarta Timur",
      category: "Renovasi Bangunan",
      shapeLabel: "Persegi Panjang",
      heightClass: "h-52 sm:h-56 md:h-60",
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785151712/Proyek_renovasi_Alun_Indah_-_cakung_gs1ovh.webp",
      description: "Restorasi dan rekonstruksi vertikal hunian Alun Indah Cakung, mengoptimalkan pencahayaan alami dan efisiensi ruang tingkat bertingkat."
    },
    {
      id: "renovasi-gudang-halarag",
      title: "Renovasi Gudang PT. Halarag - Cileungsi",
      location: "Cileungsi, Bogor",
      category: "Renovasi Industri",
      shapeLabel: "Landscape",
      heightClass: "h-52 sm:h-56 md:h-60",
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785151950/Renovasi_Gudang_Pt._Halarag_-_Cileungsi_snxukh.webp",
      description: "Pekerjaan perbaikan, perkuatan struktur, serta renovasi fasilitas gudang komersial PT. Halarag di wilayah Cileungsi."
    },
    {
      id: "pembangunan-rumah-anton-bsd",
      title: "Proses Pembangunan Rumah Tinggal 3 Lantai Bpk Anton - BSD",
      location: "BSD, Tangerang Selatan",
      category: "Konstruksi Rumah 3 Lantai",
      shapeLabel: "Landscape",
      heightClass: "h-52 sm:h-56 md:h-60",
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785152059/Proses_pembangunan_rumat_tinggal_3_lantai_Bpk_Anton_-_BSD_kooqlj.webp",
      description: "Tahapan pengerjaan struktur dan konstruksi utama bangunan hunian 3 lantai Bpk Anton di kawasan BSD secara presisi."
    },
    {
      id: "gudang-pupuk-albayu-sukabumi",
      title: "Pembangunan Gudang Pupuk Albayu Farm - Sukabumi",
      location: "Sukabumi, Jawa Barat",
      category: "Konstruksi Gudang",
      shapeLabel: "Landscape",
      heightClass: "h-52 sm:h-56 md:h-60",
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785152145/Pembangunan_Gudang_Pupuk_Albayu_Farm_-_Sukabumi_zdjcvm.webp",
      description: "Pembangunan fasilitas gudang penyimpanan pupuk Albayu Farm dengan struktur baja tahan cuaca dan ventilasi optimal."
    },
    {
      id: "renovasi-villa-teguh-puncak",
      title: "Renovasi Villa Bpk Teguh, Puncak - Bogor",
      location: "Puncak, Bogor",
      category: "Renovasi Villa",
      shapeLabel: "Vertikal",
      heightClass: "h-52 sm:h-56 md:h-60",
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785152572/Renovasi_Villa_Bpk_Teguh_Puncak_-_Bogor_bt5btu.webp",
      description: "Peremajaan dan pengerjaan renovasi lanskap serta interior Villa Bpk Teguh di dataran tinggi Puncak Bogor."
    },
    {
      id: "renovasi-wisma-ems-cisarua",
      title: "Renovasi Wisma EMS, Cisarua - Bogor",
      location: "Cisarua, Bogor",
      category: "Renovasi Wisma",
      shapeLabel: "Landscape",
      heightClass: "h-52 sm:h-56 md:h-60",
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785152665/Renovasi_Wisma_EMS_Cisarua_-_Bogor_iqaytg.webp",
      description: "Pekerjaan peremajaan dan renovasi total bangunan Wisma EMS di kawasan Cisarua Bogor dengan standar kualitas terbaik."
    }
  ];

  // Maintenance Documentation Photos Data
  const maintenanceProjects = [
    {
      id: "maint-1",
      title: "Pemeliharaan & Pengecekan Atap Bangunan 01",
      location: "Area Jabodetabek",
      category: "Maintenance Atap",
      shapeLabel: "Standar",
      isWide: false,
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785152789/maintenance_1_uihyod.webp",
      description: "Inspeksi kerapatan pelapis kedap air (waterproofing) dan perbaikan struktur atap secara berkala."
    },
    {
      id: "maint-2",
      title: "Perawatan & Inspeksi Struktur Bangunan 02",
      location: "Area Jabodetabek",
      category: "Maintenance Struktur",
      shapeLabel: "Standar",
      isWide: false,
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785152874/image_4_sqfeqo.webp",
      description: "Pengecekan kondisi fisik retak rambut, pondasi, serta perkuatan komponen struktural utama."
    },
    {
      id: "maint-3",
      title: "Pemeliharaan Sistem Dinding & Cat 03",
      location: "Area Jabodetabek",
      category: "Maintenance Finishing",
      shapeLabel: "Standar",
      isWide: false,
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785153019/image_6_g83xxl.webp",
      description: "Perawatan permukaan dinding eksterior dan pengecatan ulang pelindung cuaca."
    },
    {
      id: "maint-4",
      title: "Inspeksi Sanitasi & Drainase Proyek 04",
      location: "Area Jabodetabek",
      category: "Maintenance Sanitasi",
      shapeLabel: "Standar",
      isWide: false,
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785153078/image_7_eswjut.webp",
      description: "Pemeriksaan saluran pembuangan air hujan dan pembersihan instalasi perpipaan pasca serah terima."
    },
    {
      id: "maint-5",
      title: "Perawatan & Perbaikan Fasilitas Gedung 05",
      location: "Area Jabodetabek",
      category: "Maintenance Bangunan",
      shapeLabel: "Standar",
      isWide: false,
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785153164/image_9_mvh3t7.webp",
      description: "Servis rutin ornamen eksterior, fasad, serta perapihan interior pendukung."
    },
    {
      id: "maint-6",
      title: "Pemeriksaan Kelistrikan & Utilitas 06",
      location: "Area Jabodetabek",
      category: "Maintenance Utilitas",
      shapeLabel: "Standar",
      isWide: false,
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785153269/image_10_d9i1tv.webp",
      description: "Pengujian instalasi kelistrikan, panel utama, serta jaringan pencahayaan secara berkala."
    },
    {
      id: "maint-7",
      title: "Dokumentasi Pemeliharaan Fasad & Area Luar",
      location: "Area Jabodetabek",
      category: "Maintenance Fasad",
      shapeLabel: "Persegi Panjang",
      isWide: true,
      image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1785153132/image_8_zdory3.webp",
      description: "Survei menyeluruh dan perawatan lanskap luar serta fasad melintang gedung komersial."
    }
  ];

  return (
    <div className="font-sans text-stone-900 bg-[#FAF8F5]" id="portfolio-page-wrapper">
      
      {/* 1. HEADER SECTION */}
      <header className="relative py-20 md:py-28 bg-orange-600 overflow-hidden" id="portfolio-header">
        {/* Glow decorative background elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full filter blur-3xl -translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/15 rounded-full filter blur-3xl translate-x-10 translate-y-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3.5 py-1.5 bg-white/15 backdrop-blur-md rounded border border-white/20 mb-4"
          >
            <span className="text-[10px] md:text-xs font-black tracking-widest text-white uppercase block">
              BERLIAN KONTRAKTOR
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
            id="portfolio-title"
          >
            PORTFOLIO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-orange-100 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-normal"
          >
            Rekam jejak pengerjaan fisik, renovasi bangunan, serta galeri dokumentasi pemeliharaan proyek kami.
          </motion.p>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
        
        {/* =================================================== */}
        {/* 2. PROYEK SELESAI SECTION */}
        {/* =================================================== */}
        <section id="proyek-selesai-section" className="space-y-12">
          
          {/* Section Heading */}
          <div className="border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-orange-600 font-extrabold text-xs tracking-widest uppercase mb-1">
                <FolderCheck className="w-4 h-4" />
                <span>KATEGORI 01</span>
              </div>
              <h2 className="text-2xl md:text-3.5xl font-black uppercase text-stone-900 tracking-tight" id="proyek-selesai-heading">
                Proyek Selesai
              </h2>
            </div>
            <p className="text-stone-600 text-xs md:text-sm max-w-md">
              Dokumentasi hasil pengerjaan renovasi dan konstruksi yang telah selesai diserahterimakan kepada pemilik bangunan.
            </p>
          </div>

          {/* Grid of Completed Projects - Full Overlay Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch" id="completed-projects-grid">
            {completedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 bg-stone-950 border border-stone-800 cursor-pointer h-[420px] sm:h-[450px] md:h-[480px] w-full flex flex-col justify-end"
                id={`project-card-${project.id}`}
                onClick={() => setSelectedImage({ src: project.image, title: project.title, location: project.location })}
              >
                {/* 1. Full Bleed Background Image with Smooth Hover Zoom */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* 2. Dark Gradient Overlay for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/20 group-hover:via-stone-950/70 transition-colors duration-500" />

                {/* 3. Top Badges (Category & Zoom Hint) */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  {/* Category Badge - Glassmorphism */}
                  <span className="backdrop-blur-md bg-black/50 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20 shadow-md">
                    {project.category}
                  </span>

                  {/* Zoom Hint */}
                  <span className="backdrop-blur-md bg-black/50 text-stone-200 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5 shadow-md group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Perbesar</span>
                  </span>
                </div>

                {/* 4. Bottom Content Overlay (Title, Location, Description, Footer) */}
                <div className="relative z-10 p-6 md:p-7 space-y-3.5 text-white">
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-orange-400 text-xs font-bold tracking-wide">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-wide group-hover:text-orange-400 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description - Line clamp 2 */}
                  <p className="text-stone-300 text-xs leading-relaxed font-normal line-clamp-2">
                    {project.description}
                  </p>

                  {/* Footer Row */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs mt-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-300 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                      Bentuk: {project.shapeLabel}
                    </span>
                    <span className="text-orange-400 group-hover:text-white font-black text-xs uppercase tracking-wider flex items-center gap-1 transition-colors">
                      <span>Lihat Detail</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </section>

        {/* =================================================== */}
        {/* 3. DOKUMENTASI MAINTENANCE (GALLERY PLACEHOLDER) */}
        {/* =================================================== */}
        <section id="dokumentasi-maintenance-section" className="space-y-10 pt-6">
          
          {/* Section Heading */}
          <div className="border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-orange-600 font-extrabold text-xs tracking-widest uppercase mb-1">
                <Wrench className="w-4 h-4" />
                <span>KATEGORI 02</span>
              </div>
              <h2 className="text-2xl md:text-3.5xl font-black uppercase text-stone-900 tracking-tight" id="maintenance-heading">
                Dokumentasi Maintenance
              </h2>
            </div>
            <p className="text-stone-600 text-xs md:text-sm max-w-md">
              Arsip galeri inspeksi rutin, servis pemeliharaan, serta perawatan pasca-konstruksi proyek Berlian Kontraktor.
            </p>
          </div>

          {/* Maintenance Projects Grid - Overlay Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch" id="maintenance-projects-grid">
            {maintenanceProjects.map((maint, idx) => (
              <motion.div
                key={maint.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 bg-stone-950 border border-stone-800 cursor-pointer w-full flex flex-col justify-end ${
                  maint.isWide
                    ? "md:col-span-2 lg:col-span-3 h-[320px] sm:h-[360px] md:h-[400px]"
                    : "h-[400px] sm:h-[430px] md:h-[460px]"
                }`}
                id={`maintenance-card-${maint.id}`}
                onClick={() => setSelectedImage({ src: maint.image, title: maint.title, location: maint.location })}
              >
                {/* 1. Full Bleed Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <OptimizedImage
                    src={maint.image}
                    alt={maint.title}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* 2. Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/20 group-hover:via-stone-950/70 transition-colors duration-500" />

                {/* 3. Top Badges */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <span className="backdrop-blur-md bg-amber-500/90 text-stone-950 font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-amber-300 shadow-md">
                    {maint.category}
                  </span>

                  <span className="backdrop-blur-md bg-black/50 text-stone-200 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5 shadow-md group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Perbesar</span>
                  </span>
                </div>

                {/* 4. Bottom Content */}
                <div className="relative z-10 p-6 md:p-7 space-y-3.5 text-white">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold tracking-wide">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{maint.location}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-wide group-hover:text-amber-400 transition-colors duration-300 leading-snug">
                    {maint.title}
                  </h3>

                  <p className="text-stone-300 text-xs leading-relaxed font-normal line-clamp-2">
                    {maint.description}
                  </p>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs mt-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-300 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                      Format: {maint.shapeLabel}
                    </span>
                    <span className="text-amber-400 group-hover:text-white font-black text-xs uppercase tracking-wider flex items-center gap-1 transition-colors">
                      <span>Lihat Detail</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </section>

      </div>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 bg-stone-800/80 hover:bg-orange-600 text-white p-2 rounded-full backdrop-blur transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="p-4 bg-stone-950 flex items-center justify-center overflow-auto max-h-[75vh]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Caption */}
              <div className="p-5 bg-stone-900 border-t border-stone-800 flex items-center justify-between text-white">
                <div>
                  <h4 className="font-extrabold uppercase text-sm">{selectedImage.title}</h4>
                  <p className="text-xs text-stone-400 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    <span>{selectedImage.location}</span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xs font-bold text-orange-500 hover:text-white uppercase tracking-wider"
                >
                  Tutup [ESC]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. BOTTOM CTA SECTION */}
      <section className="py-20 bg-[#F4F0E8] border-t border-stone-200 text-center" id="portfolio-bottom-cta">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <span className="text-orange-600 font-extrabold text-xs tracking-widest uppercase block mb-2">
            KONSULTASI HARI INI
          </span>
          <h2 className="text-xl md:text-3xl font-black uppercase text-stone-900 tracking-tight leading-tight">
            INGIN MENGINSPEKSI ATAU RENOVASI BANGUNAN ANDA?
          </h2>
          <p className="text-stone-600 text-xs md:text-sm mt-3 max-w-xl font-normal">
            Tim Berlian Kontraktor siap memberikan perkiraan estimasi serta jadwal survei langsung ke lokasi Anda.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/6285715910161?text=Halo%20Berlian%20Kontraktor,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20renovasi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white font-black text-xs py-3.5 px-8 rounded-full uppercase tracking-wider transition-all shadow-md"
              id="cta-portfolio-wa-btn"
            >
              Konsultasi via WhatsApp
            </a>
            <button
              onClick={() => {
                setActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="border border-stone-300 hover:border-stone-800 text-stone-800 hover:bg-white font-bold text-xs py-3.5 px-8 rounded-full transition-all cursor-pointer"
              id="cta-portfolio-form-btn"
            >
              Gunakan Formulir Kontak
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

