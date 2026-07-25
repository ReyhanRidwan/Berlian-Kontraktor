/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, Eye, Flame, Award, BookOpen, Clock, Heart } from "lucide-react";
import { IMAGES } from "../constants/images";
import OptimizedImage from "../components/OptimizedImage";

export default function AboutView() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const missions = [
    {
      title: "Material Berstandar SNI",
      desc: "Menjamin kekuatan struktural jangka panjang dengan mewajibkan bahan bangunan berlabel SNI resmi.",
      icon: <Shield className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Desain Berkelanjutan",
      desc: "Merekayasa tata ruang arsitektur yang mengutamakan ventilasi silang, pencahayaan alami, dan efisiensi energi.",
      icon: <Flame className="w-5 h-5 text-orange-500" />
    },
    {
      title: "RAB Mengikat & Transparan",
      desc: "Mencegah pembengkakan anggaran klien lewat kontrak kerja tertulis yang mengikat tanpa ada biaya tersembunyi.",
      icon: <Award className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Pemberdayaan Tukang Lokal",
      desc: "Melatih serta mensertifikasi tukang bangunan lokal agar menguasai metode kerja modern dan disiplin keselamatan K3.",
      icon: <Heart className="w-5 h-5 text-orange-500" />
    }
  ];

  return (
    <div className="font-sans text-white bg-zinc-950" id="about-us-view-container">
      
      {/* 1. HEADER SECTION */}
      <header className="relative py-24 md:py-32 bg-zinc-900 border-b border-zinc-800 overflow-hidden" id="about-header">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase block mb-2">
            PROFIL BERLIAN KONTRAKTOR
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            KOKOH, PRESISI & TERPERCAYA
          </h1>
          <p className="mt-4 text-zinc-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Didirikan atas semangat mengedepankan kualitas sipil sejati di Bogor Barat. Kami memandu Anda memvisualisasikan rancangan impian hingga direalisasikan di lapangan.
          </p>
        </div>
      </header>

      {/* 2. FOUNDER SECTION (Only 1 person - Ir. Hendra Wijaya) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about-founder-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Artistic Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative group"
            id="founder-photo-wrapper"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-700 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <OptimizedImage
                src={IMAGES.founder}
                alt="Ir. Hendra Wijaya - CEO & Founder Berlian Kontraktor"
                wrapperClassName="aspect-square h-[300px] sm:h-[450px] lg:h-[500px]"
                className="scale-100 group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Float sign tag overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/95 backdrop-blur-md border border-zinc-800/80 p-5 rounded-xl shadow-xl flex items-center justify-between">
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-wide">
                  Ir. Hendra Wijaya
                </h4>
                <p className="text-[10px] text-orange-500 font-extrabold uppercase mt-0.5">
                  CEO & Founder Berlian Kontraktor
                </p>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono">
                REG NO. 32-019-IPM
              </div>
            </div>
          </motion.div>

          {/* Inspirational Biography & Quote */}
          <div className="lg:col-span-6 space-y-6" id="founder-biography-text">
            <span className="text-xs bg-orange-600/10 text-orange-500 font-extrabold px-3 py-1 rounded tracking-widest uppercase block w-fit">
              PEMIMPIN & INSINYUR SIPIL
            </span>
            
            <h2 className="text-2xl md:text-3.5xl font-black uppercase text-white tracking-tight leading-tight">
              DIBANGUN DI ATAS DEDIKASI NYATA
            </h2>
            
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              Selamat datang di Berlian Kontraktor. Saya memulai karir sebagai asisten pengawas lapangan di proyek-proyek perumahan Bogor sejak puluhan tahun silam. Dari sana, saya mendapati banyak ketimpangan praktik di mana kekuatan konstruksi sering dikorbankan demi efisiensi biaya yang tidak jujur.
            </p>

            <blockquote className="relative p-6 bg-zinc-900 rounded-xl border-l-4 border-orange-600 text-xs md:text-sm font-light italic leading-relaxed text-zinc-200">
              “Kami tidak sekadar menumpuk batu bata dan mengecor beton; kami membangun ruang bagi mimpi-mimpi keluarga bertumbuh dengan aman. Pondasi yang kuat adalah janji yang kami pegang teguh.”
            </blockquote>

            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              Atas dasar idealisme itulah Berlian Kontraktor dilahirkan. Setiap mandor terikat oleh lembar pengawasan mutu, asisten arsitek wajib menghitung presisi pembesian beton bertulang, dan estimator menyajikan transparansi nominal rupiah. Komitmen ini membuat kami terus tumbuh dari rekomendasi mulut ke mulut keluarga Bogor.
            </p>
          </div>

        </div>
      </section>

      {/* 3. VISI & MISI (Staggered Icon Animations appearing sequentially) */}
      <section className="py-24 bg-zinc-900/40 border-t border-b border-zinc-900" id="visi-misi-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Vision Container */}
            <div className="lg:col-span-5 space-y-6" id="vision-box bg-zinc-950">
              <span className="text-orange-500 font-bold tracking-widest text-xs uppercase block mb-2">
                HALUAN BESAR KAMI
              </span>
              <h2 className="text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight">
                VISI BERLIAN KONTRAKTOR
              </h2>
              <div className="w-12 h-1 bg-orange-600"></div>
              
              <div className="p-8 bg-zinc-900 border border-zinc-850 rounded-2xl flex flex-col gap-5 mt-6 shadow-xl relative overflow-hidden">
                <div className="absolute right-3 top-3 text-orange-600/10">
                  <Eye className="w-24 h-24" />
                </div>
                <div className="p-3 bg-orange-600/10 rounded-lg text-orange-500 w-fit">
                  <Eye className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  Menjadi Pelopor Konstruksi Premium yang Terpercaya
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Menjadi mitra konstruksi terpercaya nomor satu di Jawa Barat yang menyelaraskan nilai keindahan desain ruko & hunian modern dengan kepatuhan perhitungan teknik sipil yang kokoh, transparan, serta berkelanjutan.
                </p>
              </div>
            </div>

            {/* Mission Container with Staggered Transition Trigger */}
            <div className="lg:col-span-7 space-y-6" id="mission-box">
              <span className="text-orange-500 font-bold tracking-widest text-xs uppercase block mb-2">
                LANGKAH STRATEGIS NYATA
              </span>
              <h2 className="text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight">
                MISI KERJA KAMI
              </h2>
              <div className="w-12 h-1 bg-orange-600 mb-6"></div>

              {/* Sequential Motion Parent container */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-2"
                id="staggered-missions-list"
              >
                {missions.map((mission, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-5 bg-zinc-900 border border-zinc-850 rounded-xl flex items-start gap-4 hover:border-orange-600/30 transition-all"
                  >
                    <div className="p-2 bg-orange-600/10 rounded-lg text-orange-500 shrink-0 mt-0.5">
                      {mission.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black text-white uppercase tracking-wide">
                        {mission.title}
                      </h4>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        {mission.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
