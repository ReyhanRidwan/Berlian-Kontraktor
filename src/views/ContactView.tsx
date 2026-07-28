/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Compass, ExternalLink, Instagram } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";

// TikTok SVG Icon component
function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.89 2.894 2.894 0 0 1-2.892-2.89 2.893 2.893 0 0 1 2.892-2.89c.278 0 .546.046.797.126V9.412a6.326 6.326 0 0 0-.797-.052 6.338 6.338 0 0 0-6.339 6.336 6.338 6.338 0 0 0 6.339 6.337 6.338 6.338 0 0 0 6.338-6.337V8.535a8.214 8.214 0 0 0 4.78 1.523v-3.372a4.816 4.816 0 0 1-1.002-.002z"/>
    </svg>
  );
}

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Bangun Baru",
    message: "",
    size: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMapTooltip, setShowMapTooltip] = useState(true);

  const address = "Jl. Jendral Basuki Rahmat No. 1A, Cipinang Besar Selatan, Jatinegara, Jakarta Timur";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Jl. Jendral Basuki Rahmat No. 1A, Cipinang Besar Selatan, Jatinegara, Jakarta Timur")}`;
  const instagramUrl = "https://www.instagram.com/berlian_kontraktor?igsh=bDYwanJtOWhzcjBr";
  const tiktokUrl = "https://www.tiktok.com/@berlian_kontraktor?is_from_webapp=1&sender_device=pc";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate real database or log submission
    console.log("Contact submission:", formData);
    
    // Pre-populate Whatsapp text based on submit values
    const text = `Halo Berlian Kontraktor, saya telah mengisi formulir kontak di Website:
- Nama: ${formData.name}
- No Hp/WA: ${formData.phone}
- Layanan: ${formData.service}
- Ukuran Proyek: ${formData.size || "-"} m²
- Detail Pesan: ${formData.message}`;

    // Redirect to Whatsapp
    window.open(`https://wa.me/6285715910161?text=${encodeURIComponent(text)}`, "_blank");
    
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", service: "Bangun Baru", message: "", size: "" });
  };

  return (
    <div className="font-sans text-stone-900 bg-[#FAF8F5]" id="contact-view-container">
      
      {/* 1. HEADER SECTION */}
      <header className="relative py-24 md:py-32 bg-[#F4F0E8] border-b border-stone-200 overflow-hidden" id="contact-header">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-amber-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-2">
            HUBUNGI KANTOR OFFLINE
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-stone-900 uppercase tracking-tight">
            KONSULTASI DAN ESTIMASI
          </h1>
          <p className="mt-4 text-stone-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-normal">
            Silakan ajukan jadwal kunjungan proyek, pertanyaan seputar tanah, atau ajakan kemitraan. Tim teknik kami siap merespons Anda secepat kilat.
          </p>
        </div>
      </header>

      {/* 2. TWO COLUMN PANEL */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-form-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column Left: Contact Details Box */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-stone-200 flex flex-col gap-8 shadow-md" id="contact-details-panel">
            <div className="space-y-2">
              <span className="text-[10px] text-orange-600 font-extrabold uppercase tracking-widest block">
                INFO LENGKAP BERLIAN KONTRAKTOR
              </span>
              <h2 className="text-xl md:text-2.5xl font-black uppercase text-stone-900 tracking-wide">
                INFORMASI KANTOR KAMI
              </h2>
              <div className="w-12 h-1 bg-orange-600"></div>
            </div>

            <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-normal">
              Anda dapat menjadwalkan pertemuan tatap muka di kantor kami atau survei langsung ke lokasi Anda di Jakarta & Jabodetabek.
            </p>

            <div className="space-y-6 text-xs text-stone-700">
              {/* WA */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-xl text-orange-600 border border-stone-200 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-500 uppercase block font-bold">WhatsApp Call Hub</span>
                  <a
                    href="https://wa.me/6285715910161?text=Halo%20Berlian%20Kontraktor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-stone-900 text-sm hover:text-orange-600 transition-colors"
                  >
                    +62 857-1591-0161
                  </a>
                  <span className="text-[10px] text-stone-500 block leading-tight">Melayani Chat & Telepon 24/7 Hari Kerja</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-xl text-orange-600 border border-stone-200 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-500 uppercase block font-bold">Email Kantor Resmi</span>
                  <a href="mailto:berliancontractor@gmail.com" className="font-black text-stone-900 text-sm hover:text-orange-600 transition-colors block">
                    berliancontractor@gmail.com
                  </a>
                  <span className="text-[10px] text-stone-500 block leading-tight">Pengajuan berkas rancangan & kerja sama vendor</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-xl text-orange-600 border border-stone-200 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-500 uppercase block font-bold">Alamat Fisik Kantor</span>
                  <span className="font-extrabold text-stone-900 text-xs leading-relaxed block">
                    {address}
                  </span>
                  <span className="text-[10px] text-stone-500 block leading-tight pt-1 italic font-medium">
                    *Cipinang Besar Selatan, Jatinegara, Jakarta Timur
                  </span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-2 border-t border-stone-200">
                <span className="text-[10px] text-stone-500 uppercase block font-extrabold mb-2.5">Media Sosial Resmi</span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#FAF8F5] hover:bg-stone-200/60 rounded-xl border border-stone-200 text-stone-800 transition-all flex items-center gap-2.5 text-xs font-bold group shadow-sm"
                  >
                    <Instagram className="w-4 h-4 text-pink-600 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="truncate">Instagram</span>
                  </a>
                  <a
                    href={tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#FAF8F5] hover:bg-stone-200/60 rounded-xl border border-stone-200 text-stone-800 transition-all flex items-center gap-2.5 text-xs font-bold group shadow-sm"
                  >
                    <TikTokIcon className="w-4 h-4 text-stone-900 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="truncate">TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 text-center">
              <span className="text-[10px] text-stone-500 uppercase tracking-widest block font-bold">
                KORDINAT LOKASI
              </span>
              <span className="text-stone-700 font-mono text-[11px] mt-1 block font-semibold">
                Latitude: -6.2273° S, Longitude: 106.8778° E
              </span>
            </div>
          </div>

          {/* Column Right: Clean Modern Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm" id="contact-form-panel">
            <div className="space-y-2 mb-8">
              <span className="text-[10px] text-orange-600 font-extrabold uppercase tracking-widest block">
                LAYANAN FORMULIR MANDIRI
              </span>
              <h2 className="text-xl md:text-2.5xl font-black uppercase text-stone-900 tracking-wide">
                BUAT PERTANYAAN PROYEK
              </h2>
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                Formulir di bawah akan secara otomatis memformat rangkuman proyek Anda dan meneruskannya langsung ke asisten insinyur kami.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-orange-600/10 border border-orange-500/40 rounded-xl p-8 text-center flex flex-col items-center gap-4"
                id="form-success-alert"
              >
                <div className="p-3 bg-orange-600/20 text-orange-600 rounded-full">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-black uppercase text-stone-900">Formulir Sukses Terkirim!</h3>
                <p className="text-xs text-stone-700 max-w-md leading-relaxed">
                  Terima kasih, data Anda telah berhasil diteruskan ke WhatsApp Berlian Kontraktor. Kami akan segera menghubungi Anda kembali untuk menyusun estimasi detail.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-black text-orange-600 hover:text-stone-900 uppercase tracking-widest cursor-pointer"
                >
                  Kirim Formulir Baru
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="form-contact-data">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-stone-700 font-black uppercase tracking-wider">Nama Lengkap Anda *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap Anda..."
                    className="bg-[#FAF8F5] border border-stone-300 rounded-lg p-3 text-xs md:text-sm text-stone-900 focus:outline-none focus:border-orange-600 focus:bg-white transition-colors"
                  />
                </div>

                {/* Grid phone & size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-stone-700 font-black uppercase tracking-wider">No HP / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contoh: 081389113085"
                      className="bg-[#FAF8F5] border border-stone-300 rounded-lg p-3 text-xs md:text-sm text-stone-900 focus:outline-none focus:border-orange-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-stone-700 font-black uppercase tracking-wider">Ukuran Lahan/Bangunan (m²)</label>
                    <input
                      type="number"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      placeholder="Contoh: 150"
                      className="bg-[#FAF8F5] border border-stone-300 rounded-lg p-3 text-xs md:text-sm text-stone-900 focus:outline-none focus:border-orange-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Service Select Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-stone-700 font-black uppercase tracking-wider">Layanan Konstruksi Yang Diminati</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-[#FAF8F5] border border-stone-300 rounded-lg p-3 text-xs md:text-sm text-stone-900 focus:outline-none focus:border-orange-600 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Bangun Baru">Bangun Rumah Tinggal Dari Nol</option>
                    <option value="Renovasi Total">Renovasi Bangunan Total / Sebagian</option>
                    <option value="Desain Arsitektur">Desain Arsitektur & Paket Gambar Kerja</option>
                    <option value="Supervisi Sipil">Konsultasi Project Management & Pengawas</option>
                  </select>
                </div>

                {/* Message detail */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-stone-700 font-black uppercase tracking-wider">Deskripsikan Rencana Hunian Anda *</label>
                  <textarea
                    rows={4}
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Contoh: Berapa estimasi kasar membangun rumah 2 lantai minimalis di Jakarta Timur..."
                    className="bg-[#FAF8F5] border border-stone-300 rounded-lg p-3 text-xs md:text-sm text-stone-900 focus:outline-none focus:border-orange-600 focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit trigger button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs py-4 px-6 rounded-lg uppercase tracking-wider transition-all cursor-pointer shadow-md"
                    id="btn-submit-contact-form"
                  >
                    <span>Kirim & Hubungkan ke WA</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. BOTTOM SECTION: STATIK MAP PLACEHOLDER WITH INTERACTIVE OVERLAYS */}
      <section className="py-24 bg-[#F4F0E8] border-t border-stone-200 overflow-hidden" id="contact-map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-1">
              PETA STATIS INTERAKTIF
            </span>
            <h3 className="text-xl md:text-2xl font-black uppercase text-stone-900 tracking-widest">
              LOKASI FISIK DESAIN DAN SURVEI
            </h3>
            <p className="text-stone-600 text-xs mt-2 font-normal leading-relaxed">
              Klik pada simbol PIN lokasi di bawah untuk melihat rincian kelayakan survei dan membuka rute navigasi.
            </p>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden border border-stone-200 h-[380px] bg-white shadow-md"
            id="static-map-placeholder-boundary"
          >
            {/* Visual static blueprint matrix as a premium map backdrop */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            {/* Soft decorative radial topography ripples */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-orange-500/20 animate-[ping_10s_infinite_alternate]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-stone-200" />

            {/* Static decorative elements of a blueprint map */}
            <div className="absolute top-8 left-8 text-[10px] text-stone-500 font-mono" id="map-specs">
              <div>PROJECT_AREA: DKI_JAKARTA_ID</div>
              <div>LOC: JAKARTA_TIMUR_JATINEGARA</div>
              <div>EMBED: STAT_01</div>
            </div>

            <div className="absolute bottom-8 right-8 text-[10px] text-stone-500 font-mono text-right" id="map-coords">
              <div>LAT_COORD: -6.22730000</div>
              <div>LONG_COORD: 106.87780000</div>
              <div>DEVIATION_ANGLE: 0.15''</div>
            </div>

            {/* INTERACTIVE GLOWING PIN OVERLAY AT THE EXACT CENTER */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              onClick={() => setShowMapTooltip(!showMapTooltip)}
              id="interactive-map-pin"
            >
              {/* Pulsating animation rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-orange-600/30 animate-ping" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-orange-600/40 animate-pulse" />
              
              {/* Lucide location marker icon */}
              <div className="relative bg-white p-2.5 rounded-full border-2 border-orange-600 text-orange-600 shadow-xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
            </div>

            {/* Floating details banner that triggers on click */}
            {showMapTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                className="absolute top-6 left-1/2 bg-white/95 backdrop-blur-md border border-stone-200 p-5 rounded-xl shadow-xl text-center max-w-sm w-[90%] z-30"
                id="interactive-map-tag"
              >
                <div className="flex justify-center mb-2">
                  <Compass className="w-5 h-5 text-orange-600 animate-spin-slow" />
                </div>
                <h4 className="text-xs font-black uppercase text-stone-900 tracking-widest">KANTOR BERLIAN KONTRAKTOR JAKARTA TIMUR</h4>
                <p className="text-[10px] text-stone-600 mt-1 leading-relaxed">
                  {address}
                </p>
                <div className="mt-4 pt-3 border-t border-stone-200 flex justify-center gap-3">
                  <a
                    href={mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-orange-600 text-white font-black text-[10.5px] uppercase tracking-wider py-1.5 px-4 rounded shadow-sm"
                  >
                    <span>Navigasi</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setShowMapTooltip(false)}
                    className="text-[10.5px] text-stone-500 hover:text-stone-900 cursor-pointer"
                  >
                    Sembunyikan
                  </button>
                </div>
              </motion.div>
            )}

            {/* Label instruction helper */}
            {!showMapTooltip && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-lg border border-stone-200 text-stone-700 text-xs pointer-events-none text-center shadow-sm font-medium">
                Klik PIN lokator di tengah untuk memuat informasi alamat
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
