/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Eye, Award, Clock, DollarSign, FileText, ShieldCheck, Users, Target, CheckCircle2, Building2 } from "lucide-react";

export default function AboutView() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const whyChooseUs = [
    {
      title: "Berpengalaman",
      desc: "Telah menangani berbagai proyek renovasi & pembangunan di Jabodetabek",
      icon: <Award className="w-5 h-5 text-orange-600" />
    },
    {
      title: "Tim Profesional",
      desc: "Didukung tenaga kerja terampil dan berpengalaman di bidangnya",
      icon: <Users className="w-5 h-5 text-orange-600" />
    },
    {
      title: "Harga Transparan",
      desc: "RAB detail dan jelas, tanpa biaya tersembunyi",
      icon: <DollarSign className="w-5 h-5 text-orange-600" />
    },
    {
      title: "Tepat Waktu",
      desc: "Komitmen penyelesaian proyek sesuai jadwal yang disepakati",
      icon: <Clock className="w-5 h-5 text-orange-600" />
    },
    {
      title: "Laporan Berkala",
      desc: "Update progres proyek secara mingguan kepada klien",
      icon: <FileText className="w-5 h-5 text-orange-600" />
    },
    {
      title: "Garansi Pekerjaan",
      desc: "Jaminan kualitas hasil kerja untuk kepuasan klien",
      icon: <ShieldCheck className="w-5 h-5 text-orange-600" />
    }
  ];

  const missions = [
    "Memberikan layanan konstruksi dan renovasi dengan standar kualitas tinggi.",
    "Menjalin hubungan kerja yang profesional dan saling menguntungkan dengan klien.",
    "Mengembangkan kompetensi tim secara berkelanjutan.",
    "Menyelesaikan setiap proyek tepat waktu dan sesuai anggaran.",
    "Mengutamakan keselamatan kerja dan kelestarian lingkungan."
  ];

  return (
    <div className="font-sans text-stone-900 bg-[#FAF8F5]" id="about-us-view-container">
      
      {/* 1. HEADER SECTION */}
      <header className="relative py-24 md:py-32 bg-[#F4F0E8] border-b border-stone-200 overflow-hidden" id="about-header">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-amber-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
            PROFIL BERLIAN KONTRAKTOR
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-stone-900 uppercase tracking-tight">
            KOKOH, PRESISI & TERPERCAYA
          </h1>
          <p className="mt-4 text-stone-600 text-xs md:text-sm max-w-3xl mx-auto leading-relaxed font-normal">
            PT. Berlian adalah perusahaan kontraktor yang bergerak di bidang konstruksi, renovasi, dan pembangunan. Kami melayani wilayah Jabodetabek dengan komitmen hasil kerja berkualitas tinggi, tepat waktu, dan sesuai anggaran.
          </p>
        </div>
      </header>

      {/* 2. TENTANG KAMI SECTION */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="about-company-section">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-sm space-y-6" id="company-profile-box">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-orange-600/10 rounded-lg text-orange-600">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="text-xs text-orange-600 font-extrabold tracking-widest uppercase">
              🏢 TENTANG KAMI
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3.5xl font-black uppercase text-stone-900 tracking-tight leading-tight">
            PT. BERLIAN KONTRAKTOR
          </h2>
          
          <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
            PT. Berlian adalah perusahaan kontraktor yang bergerak di bidang konstruksi, renovasi, dan pembangunan. Kami melayani berbagai kebutuhan proyek mulai dari renovasi kantor, pembangunan rumah tinggal, renovasi gedung, hingga pembangunan gudang industri.
          </p>

          <blockquote className="relative p-6 bg-[#FAF8F5] rounded-xl border-l-4 border-orange-600 text-xs md:text-sm font-medium italic leading-relaxed text-stone-800 shadow-sm">
            “Dengan pengalaman menangani berbagai proyek di wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi (Jabodetabek), kami berkomitmen untuk memberikan hasil kerja berkualitas tinggi, tepat waktu, dan sesuai anggaran.”
          </blockquote>

          <div className="space-y-4 pt-4 border-t border-stone-100">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-wider text-stone-900 flex items-center gap-2">
              <span>🔧 Layanan Kami</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-stone-700 font-medium">
              <div className="flex items-start gap-3 bg-[#FAF8F5] p-4 rounded-xl border border-stone-200/80">
                <span className="text-orange-600 font-black text-base leading-none">●</span>
                <div>
                  <strong className="text-stone-900 block mb-0.5">Konstruksi & Pembangunan</strong>
                  <span className="text-stone-600 text-xs leading-relaxed">Pembangunan rumah tinggal, gedung komersial, gudang industri, dan fasilitas umum dari nol hingga selesai.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FAF8F5] p-4 rounded-xl border border-stone-200/80">
                <span className="text-orange-600 font-black text-base leading-none">●</span>
                <div>
                  <strong className="text-stone-900 block mb-0.5">Renovasi & Remodeling</strong>
                  <span className="text-stone-600 text-xs leading-relaxed">Renovasi kantor, villa, gedung, dan hunian dengan hasil modern dan fungsional.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FAF8F5] p-4 rounded-xl border border-stone-200/80">
                <span className="text-orange-600 font-black text-base leading-none">●</span>
                <div>
                  <strong className="text-stone-900 block mb-0.5">Interior & Plafon</strong>
                  <span className="text-stone-600 text-xs leading-relaxed">Pemasangan plafon gypsum & PVC, partisi gypsum, dan pekerjaan interior lainnya.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FAF8F5] p-4 rounded-xl border border-stone-200/80">
                <span className="text-orange-600 font-black text-base leading-none">●</span>
                <div>
                  <strong className="text-stone-900 block mb-0.5">Perbaikan & Maintenance</strong>
                  <span className="text-stone-600 text-xs leading-relaxed">Perbaikan plafon bocor/jebol, perawatan bangunan, dan pekerjaan sipil ringan.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISI & MISI SECTION */}
      <section className="py-20 bg-[#F4F0E8] border-t border-b border-stone-200" id="visi-misi-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
              🎯 VISI & MISI
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-stone-900 uppercase tracking-tight">
              Arah & Komitmen Perusahaan
            </h2>
            <div className="w-12 h-1 bg-orange-600 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Vision Container */}
            <div className="lg:col-span-5 flex flex-col" id="vision-box">
              <div className="p-8 bg-white border border-stone-200/80 rounded-2xl flex-1 flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute right-3 top-3 text-orange-600/10 pointer-events-none">
                  <Target className="w-32 h-32" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-600/10 rounded-xl text-orange-600">
                      <Target className="w-6 h-6 animate-pulse" />
                    </div>
                    <span className="text-orange-600 font-extrabold text-xs uppercase tracking-widest">
                      Visi Utama
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-stone-900 uppercase tracking-wide leading-snug mb-4">
                    PT. Berlian
                  </h3>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium bg-[#FAF8F5] p-5 rounded-xl border border-stone-200/60">
                    “Menjadi perusahaan kontraktor terpercaya dan terdepan di Indonesia yang mengutamakan kualitas, inovasi, dan kepuasan pelanggan.”
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-bold">
                  <span>Standard Industri SNI</span>
                  <span className="text-orange-600 font-extrabold">Terpercaya & Terdepan</span>
                </div>
              </div>
            </div>

            {/* Mission Container */}
            <div className="lg:col-span-7 flex flex-col" id="mission-box">
              <div className="p-8 bg-white border border-stone-200/80 rounded-2xl flex-1 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-600/10 rounded-xl text-orange-600">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-orange-600 font-extrabold text-xs uppercase tracking-widest">
                      Misi Perusahaan (5 Pilar Utama)
                    </span>
                  </div>

                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-3"
                    id="staggered-missions-list"
                  >
                    {missions.map((mission, idx) => (
                      <motion.li
                        key={idx}
                        variants={itemVariants}
                        className="p-3.5 bg-[#FAF8F5] border border-stone-200/70 rounded-xl flex items-start gap-3.5 hover:border-orange-500/50 transition-all shadow-2xs"
                      >
                        <span className="w-6 h-6 rounded-full bg-orange-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-xs md:text-sm text-stone-800 font-medium leading-relaxed">
                          {mission}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MENGAPA MEMILIH KAMI SECTION */}
      <section className="py-20 bg-[#FAF8F5]" id="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
              ⭐ MENGAPA MEMILIH KAMI?
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-stone-900 uppercase tracking-tight">
              Keunggulan Berlian Kontraktor
            </h2>
            <div className="w-12 h-1 bg-orange-600 mx-auto mt-3"></div>
            <p className="text-stone-600 text-xs md:text-sm mt-4">
              Komitmen kami adalah memberikan nilai tambah terbaik di setiap pengerjaan konstruksi dan renovasi Anda.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="why-choose-us-grid"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-orange-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-orange-600/10 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-stone-900 uppercase tracking-wide mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[10px] font-extrabold text-orange-600 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Jaminan Kualitas Berlian</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}
