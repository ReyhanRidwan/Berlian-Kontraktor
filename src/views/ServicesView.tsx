/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Hammer, Wrench, Paintbrush, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "../data";
import OptimizedImage from "../components/OptimizedImage";

export default function ServicesView() {
  // Returns appropriate lucide React icon based on id
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Hammer":
        return <Hammer className="w-8 h-8 text-orange-500 animate-pulse" />;
      case "Wrench":
        return <Wrench className="w-8 h-8 text-orange-500" />;
      case "Paintbrush":
        return <Paintbrush className="w-8 h-8 text-orange-500" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-orange-500" />;
    }
  };

  return (
    <div className="font-sans text-white bg-zinc-950" id="services-view-container">
      
      {/* 1. HEADER SECTION */}
      <header className="relative py-24 md:py-32 bg-zinc-900 border-b border-zinc-800 overflow-hidden" id="services-header">
        <div className="absolute inset-0 bg-radial-gradient from-orange-600/10 via-zinc-950 to-zinc-950 opacity-80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-3 py-1 bg-zinc-800 rounded border border-zinc-705 mb-4Unique">
            <span className="text-[10px] md:text-xs font-black tracking-widest text-orange-500 uppercase block">
              LAYANAN PROFESIONAL BERLIAN KONTRAKTOR
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight" id="services-page-title">
            SOLUSI KONSTRUKSI SIPIL RADIAL
          </h1>
          <p className="mt-4 text-zinc-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Dari perencanaan tanah mentah hingga pemasangan kunci pintu, struktur bangunan kami dirancang dengan standardisasi SNI ketat dan pengawasan intensif arsitektur.
          </p>
        </div>
      </header>

      {/* 2. SERVICES LIST: 2-Column Grid with Large Shadow Hover Effects */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-elements-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 leading-relaxed">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-850 hover:border-orange-600/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-600/5 group"
              id={`service-box-${service.id}`}
            >
              {/* Supporting Image with fixed aspectRatio to prevent shifts */}
              <OptimizedImage
                src={service.image}
                alt={service.title}
                wrapperClassName="aspect-video h-[200px] md:h-[240px]"
                className="group-hover:scale-[1.03] transition-transform duration-700"
              />

              {/* Content Card Body */}
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 shrink-0">
                    {getIconComponent(service.icon)}
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-black uppercase text-white tracking-wide" id={`service-title-el-${service.id}`}>
                      {service.title}
                    </h2>
                    <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">
                      KATEGORI SIPIL BERLIAN KONTRAKTOR
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed" id={`service-desc-${service.id}`}>
                  {service.description}
                </p>

                {/* Features Bullet List (exactly 5 bullets per list) */}
                <div className="pt-4 border-t border-zinc-850">
                  <h3 className="text-xs font-black uppercase text-white tracking-widest mb-4">
                    Keunggulan & Cakupan Pekerjaan:
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 text-xs text-zinc-350" id={`service-features-${service.id}`}>
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ADDITIONAL SERVICE QUALITY VALUES */}
      <section className="py-20 bg-zinc-900/30 border-t border-zinc-900" id="services-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
              STANDARISASI FISIK & LOGISTIK
            </h2>
            <p className="text-zinc-400 text-xs mt-2">
              Setiap proses pengawasan di lapangan tunduk pada kriteria mutu internasional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-850" id="standard-1">
              <span className="text-orange-500 text-3xl font-black block mb-2">100%</span>
              <h4 className="text-xs font-black uppercase text-white mb-2">Sertifikasi SNI</h4>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Kami mewajibkan seluruh semen, besi tulangan ulir, pipa plumbing, dan beton ready-mix memiliki label SNI.
              </p>
            </div>
            
            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-850" id="standard-2">
              <span className="text-orange-500 text-3xl font-black block mb-2">0%</span>
              <h4 className="text-xs font-black uppercase text-white mb-2">Biaya Siluman</h4>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Pengerjaan konstruksi mengacu murni pada SPK yang ditandatangani. Segala resalat material dilaporkan transparan.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-850" id="standard-3">
              <span className="text-orange-500 text-3xl font-black block mb-2">180+</span>
              <h4 className="text-xs font-black uppercase text-white mb-2">Hari Masa Garansi</h4>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Kami menanggung perbaikan jika ditemukan masalah rembes, pipa mampet, atau retak cat denda 6 bulan pasca serah terima kunci.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
