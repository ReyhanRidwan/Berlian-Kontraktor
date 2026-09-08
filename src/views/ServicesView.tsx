/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Hammer, Wrench, Paintbrush, ShieldCheck, CheckCircle2, Handshake, MapPin, MessageSquare, Layout, Calculator, FileSignature, HardHat, Award, Building2, DraftingCompass } from "lucide-react";
import { SERVICES_DATA, WORKFLOW_STEPS } from "../data";
import OptimizedImage from "../components/OptimizedImage";

export default function ServicesView() {
  // Returns appropriate lucide React icon based on id
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-8 h-8 text-orange-500" />;
      case "DraftingCompass":
        return <DraftingCompass className="w-8 h-8 text-orange-500" />;
      case "Wrench":
        return <Wrench className="w-8 h-8 text-orange-500" />;
      case "Hammer":
        return <Hammer className="w-8 h-8 text-orange-500 animate-pulse" />;
      case "Paintbrush":
        return <Paintbrush className="w-8 h-8 text-orange-500" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-orange-500" />;
    }
  };

  const getWorkflowIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-5 h-5 text-orange-600" />;
      case "DraftingCompass":
        return <DraftingCompass className="w-5 h-5 text-orange-600" />;
      case "FileSignature":
        return <FileSignature className="w-5 h-5 text-orange-600" />;
      case "HardHat":
        return <HardHat className="w-5 h-5 text-orange-600" />;
      case "Award":
        return <Award className="w-5 h-5 text-orange-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-orange-600" />;
    }
  };

  const getBadgeColor = (step: number) => {
    switch (step) {
      case 1:
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case 2:
        return "bg-blue-50 text-blue-700 border-blue-200";
      case 3:
        return "bg-purple-50 text-purple-700 border-purple-200";
      case 4:
        return "bg-amber-50 text-amber-700 border-amber-200";
      case 5:
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-stone-100 text-stone-700 border-stone-200";
    }
  };

  return (
    <div className="font-sans text-stone-900 bg-[#FAF8F5]" id="services-view-container">
      
      {/* 1. HEADER SECTION */}
      <header className="relative py-24 md:py-32 bg-[#F4F0E8] border-b border-stone-200 overflow-hidden" id="services-header">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-amber-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-3 py-1 bg-white rounded border border-stone-200 mb-4 shadow-sm">
            <span className="text-[10px] md:text-xs font-black tracking-widest text-orange-600 uppercase block">
              LAYANAN PROFESIONAL BERLIAN KONTRAKTOR
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-stone-900 uppercase tracking-tight" id="services-page-title">
            SOLUSI KONSTRUKSI SIPIL RADIAL
          </h1>
          <p className="mt-4 text-stone-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-normal">
            Dari perencanaan tanah mentah hingga pemasangan kunci pintu, struktur bangunan kami dirancang dengan standardisasi SNI ketat dan pengawasan intensif arsitektur.
          </p>
        </div>
      </header>

      {/* 2. SERVICES LIST: 3-Column Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-elements-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 leading-relaxed">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl shadow-sm group"
              id={`service-box-${service.id}`}
            >
              {/* Supporting Image - Full width aspect-ratio */}
              <OptimizedImage
                src={service.image}
                alt={service.title}
                wrapperClassName="w-full aspect-[16/9] rounded-t-2xl"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />

              {/* Content Card Body */}
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-50 rounded-xl border border-stone-200 shrink-0">
                    {getIconComponent(service.icon)}
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-black uppercase text-stone-900 tracking-wide" id={`service-title-el-${service.id}`}>
                      {service.title}
                    </h2>
                    <span className="text-[10px] text-orange-600 font-extrabold uppercase tracking-widest">
                      KATEGORI SIPIL BERLIAN KONTRAKTOR
                    </span>
                  </div>
                </div>

                <p className="text-stone-600 text-xs md:text-sm leading-relaxed" id={`service-desc-${service.id}`}>
                  {service.description}
                </p>

                {/* Features Bullet List (exactly 5 bullets per list) */}
                <div className="pt-4 border-t border-stone-200">
                  <h3 className="text-xs font-black uppercase text-stone-900 tracking-widest mb-4">
                    Keunggulan & Cakupan Pekerjaan:
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 text-xs text-stone-700" id={`service-features-${service.id}`}>
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
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

      {/* 3. TAHAPAN KERJA SECTION */}
      <section className="py-20 bg-white border-t border-stone-200" id="tahapan-kerjasama-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-600/10 rounded-full text-orange-600 mb-3 border border-orange-500/20">
              <Handshake className="w-4 h-4" />
              <span className="text-xs font-black tracking-widest uppercase">🤝 TAHAPAN KERJA</span>
            </div>
            <h2 className="text-2xl md:text-3.5xl font-black text-stone-900 uppercase tracking-tight" id="tahapan-heading">
              Tahapan Kerja Berlian Kontraktor
            </h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto mt-3"></div>
            <p className="text-stone-600 text-xs md:text-sm mt-3 font-medium">
              Alur kerja sistematis, transparan, dan terukur mulai dari survei awal hingga serah terima hunian impian Anda.
            </p>
          </div>

          {/* Stepper Grid (5 Steps) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch" id="tahapan-steps-grid">
            {WORKFLOW_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative bg-[#FAF8F5] border-stone-200 hover:border-orange-500/50 hover:shadow-md group ${
                  item.step === 5 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-r from-orange-50/70 via-amber-50/40 to-white" : ""
                }`}
                id={`tahapan-card-step-${item.step}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-orange-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                        {item.stepNumber}
                      </span>
                      <div className="p-2 bg-white rounded-lg border border-stone-200 shrink-0">
                        {getWorkflowIcon(item.iconName)}
                      </div>
                    </div>

                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${getBadgeColor(item.step)}`}>
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

                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[10.5px] font-bold text-stone-500">
                  <span>Proses Transparan Berlian</span>
                  <span className="text-orange-600 font-extrabold">Langkah {item.stepNumber} / 05</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tabular summary table for detailed reading */}
          <div className="mt-14 bg-[#FAF8F5] p-6 md:p-8 rounded-2xl border border-stone-200">
            <h4 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-4 flex items-center gap-2">
              <Handshake className="w-4 h-4 text-orange-600" />
              <span>Ringkasan Tabel Tahapan Proyek</span>
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-white border-b border-stone-200 text-stone-900">
                    <th className="py-3 px-4 font-black uppercase text-[11px] w-24">Tahap</th>
                    <th className="py-3 px-4 font-black uppercase text-[11px] w-1/4">Kegiatan</th>
                    <th className="py-3 px-4 font-black uppercase text-[11px]">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200/80 text-stone-700">
                  {WORKFLOW_STEPS.map((ws) => (
                    <tr key={ws.step} className="hover:bg-white/60 transition-colors">
                      <td className="py-3.5 px-4 font-black text-orange-600">Langkah {ws.stepNumber}</td>
                      <td className="py-3.5 px-4 font-extrabold text-stone-900">{ws.title}</td>
                      <td className="py-3.5 px-4 font-medium text-stone-600 leading-relaxed">{ws.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ADDITIONAL SERVICE QUALITY VALUES */}
      <section className="py-20 bg-[#F4F0E8] border-t border-stone-200" id="services-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xl md:text-2xl font-black uppercase text-stone-900 tracking-wide">
              STANDARISASI PEKERJAAN
            </h2>
            <p className="text-stone-600 text-xs mt-2 font-medium">
              Setiap proses pengawasan di lapangan tunduk pada kriteria mutu dan kualitas yang sudah disepakati.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl border border-stone-200/80 shadow-sm" id="standard-1">
              <span className="text-orange-600 text-3xl font-black block mb-2">100%</span>
              <h4 className="text-xs font-black uppercase text-stone-900 mb-2">Sertifikasi SNI</h4>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Kami mewajibkan seluruh semen, besi tulangan ulir, pipa plumbing, dan beton ready-mix memiliki label SNI.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-stone-200/80 shadow-sm" id="standard-2">
              <span className="text-orange-600 text-3xl font-black block mb-2">0%</span>
              <h4 className="text-xs font-black uppercase text-stone-900 mb-2">Biaya Siluman</h4>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Pengerjaan konstruksi mengacu murni pada SPK yang ditandatangani. Segala resalat material dilaporkan transparan.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-stone-200/80 shadow-sm" id="standard-3">
              <span className="text-orange-600 text-3xl font-black block mb-2">180+</span>
              <h4 className="text-xs font-black uppercase text-stone-900 mb-2">Hari Masa Garansi</h4>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Kami menanggung perbaikan jika ditemukan masalah rembes, pipa mampet, atau retak cat denda 6 bulan pasca serah terima kunci.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
