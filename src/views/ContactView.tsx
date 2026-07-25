/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Compass, ExternalLink } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";

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

  const address = "Jl. Mekar Jaya Depan bidan No.14, Mekarjaya, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610, Indonesia";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Jl. Mekar Jaya No.14, Mekarjaya, Ciomas, Bogor, Jawa Barat")}`;

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
    window.open(`https://wa.me/6281389113085?text=${encodeURIComponent(text)}`, "_blank");
    
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", service: "Bangun Baru", message: "", size: "" });
  };

  return (
    <div className="font-sans text-white bg-zinc-950" id="contact-view-container">
      
      {/* 1. HEADER SECTION */}
      <header className="relative py-24 md:py-32 bg-zinc-900 border-b border-zinc-800 overflow-hidden" id="contact-header">
        <div className="absolute inset-0 bg-radial-gradient from-orange-600/10 via-zinc-950 to-zinc-950 opacity-80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase block mb-2">
            HUBUNGI KANTOR OFFLINE
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            KONSULTASI DAN ESTIMASI
          </h1>
          <p className="mt-4 text-zinc-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Silakan ajukan jadwal kunjungan proyek, pertanyaan seputar tanah, atau ajakan kemitraan. Tim teknik kami siap merespons Anda secepat kilat.
          </p>
        </div>
      </header>

      {/* 2. TWO COLUMN PANEL */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-form-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column Left: Contact Details Box inside Elegant Zinc-900 container */}
          <div className="lg:col-span-5 bg-zinc-900 p-8 rounded-2xl border border-zinc-850 flex flex-col gap-8 shadow-xl" id="contact-details-panel">
            <div className="space-y-2">
              <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest block">
                INFO LENGKAP BERLIAN KONTRAKTOR
              </span>
              <h2 className="text-xl md:text-2.5xl font-black uppercase text-white tracking-wide">
                INFORMASI KANTOR KAMI
              </h2>
              <div className="w-12 h-1 bg-orange-600"></div>
            </div>

            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
              Anda juga dapat menjadwalkan pertemuan tatap muka di lokasi kantor kami secara offline di Kabupaten Bogor. Silakan hubungi kontak di bawah.
            </p>

            <div className="space-y-6 text-xs text-zinc-300">
              {/* WA */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 rounded-xl text-orange-500 border border-zinc-800 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase block font-medium">WhatsApp Call Hub</span>
                  <a
                    href="https://wa.me/6281389113085?text=Halo%20Berlian%20Kontraktor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-white text-sm hover:text-orange-500 transition-colors"
                  >
                    +62 813-8911-3085
                  </a>
                  <span className="text-[10px] text-zinc-500 block leading-tight">Melayani Chat & Telepon 24/7 Hari Kerja</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 rounded-xl text-orange-500 border border-zinc-800 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase block font-medium">Email Kantor Resmi</span>
                  <span className="font-extrabold text-white text-sm block">info@berliankontraktor.com</span>
                  <span className="text-[10px] text-zinc-500 block leading-tight">Pengajuan berkas rancangan & kerja sama vendor</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 rounded-xl text-orange-500 border border-zinc-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase block font-medium">Alamat Fisik Kantor</span>
                  <span className="font-extrabold text-white text-xs sm:text-xs leading-relaxed block">
                    {address}
                  </span>
                  <span className="text-[10px] text-zinc-400 block leading-tight pt-1 italic">
                    *Depan praktik Bidan No.14, Ciomas, Bogor
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-850 text-center">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">
                KORDINAT LOKASI
              </span>
              <span className="text-zinc-300 font-mono text-[11px] mt-1 block">
                Latitude: 6.6111° S, Longitude: 106.7533° E
              </span>
            </div>
          </div>

          {/* Column Right: Clean Modern Contact Form */}
          <div className="lg:col-span-7 bg-zinc-900/40 p-8 rounded-2xl border border-zinc-850" id="contact-form-panel">
            <div className="space-y-2 mb-8">
              <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest block">
                LAYANAN FORMULIR MANDIRI
              </span>
              <h2 className="text-xl md:text-2.5xl font-black uppercase text-white tracking-wide">
                BUAT PERTANYAAN PROYEK
              </h2>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Formulir di bawah akan secara otomatis memformat rangkuman proyek Anda dan meneruskannya langsung ke asisten insinyur kami.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-orange-600/10 border border-orange-500 rounded-xl p-8 text-center flex flex-col items-center gap-4"
                id="form-success-alert"
              >
                <div className="p-3 bg-orange-600/20 text-orange-500 rounded-full">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-black uppercase">Formulir Sukses Terkirim!</h3>
                <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
                  Terima kasih, data Anda telah berhasil diteruskan ke WhatsApp Berlian Kontraktor. Kami akan segera menghubungi Anda kembali untuk menyusun estimasi detail.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-black text-orange-500 hover:text-white uppercase tracking-widest"
                >
                  Kirim Formulir Baru
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="form-contact-data">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">Nama Lengkap Anda *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap Anda..."
                    className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                {/* Grid phone & sized */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">No HP / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contoh: 081389113085"
                      className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">Ukuran Lahan/Bangunan (m²)</label>
                    <input
                      type="number"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      placeholder="Contoh: 150"
                      className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Select Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">Layanan Konstruksi Yang Diminati</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                  >
                    <option value="Bangun Baru">Bangun Rumah Tinggal Dari Nol</option>
                    <option value="Renovasi Total">Renovasi Bangunan Total / Sebagian</option>
                    <option value="Desain Arsitektur">Desain Arsitektur & Paket Gambar Kerja</option>
                    <option value="Supervisi Sipil">Konsultasi Project Management & Pengawas</option>
                  </select>
                </div>

                {/* Message detail */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">Deskripsikan Rencana Hunian Anda *</label>
                  <textarea
                    rows={4}
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Contoh: Berapa estimasi kasar membangun rumah 2 lantai minimalis di Semplak Bogor..."
                    className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
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
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden" id="contact-map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="text-orange-500 font-black tracking-widest text-xs uppercase block mb-1">
              PETA STATIS INTERAKTIF
            </span>
            <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-widest">
              LOKASI FISIK DESAIN DAN SURVEI
            </h3>
            <p className="text-zinc-500 text-xs mt-2 font-light leading-relaxed">
              Klik pada simbol PIN lokasi di bawah untuk melihat rincian kelayakan survei dan membuka rute navigasi.
            </p>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden border border-zinc-850 h-[380px] bg-zinc-900 shadow-2xl"
            id="static-map-placeholder-boundary"
          >
            {/* Visual static blueprint matrix as a premium map backdrop */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            {/* Soft decorative radial topography ripples */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-orange-500/10 animate-[ping_10s_infinite_alternate]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-zinc-800/20" />

            {/* Static decorative elements of a blueprint map */}
            <div className="absolute top-8 left-8 text-[10px] text-zinc-500 font-mono" id="map-specs">
              <div>PROJECT_AREA: WEST_JAVA_ID</div>
              <div>LOC: BOGOR_CIOMAS_CIOMAS_MEKARJAYA</div>
              <div>EMBED: STAT_01</div>
            </div>

            <div className="absolute bottom-8 right-8 text-[10px] text-zinc-500 font-mono text-right" id="map-coords">
              <div>LAT_COORD: -6.61113009</div>
              <div>LONG_COORD: 106.75338002</div>
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
              <div className="relative bg-zinc-950 p-2.5 rounded-full border-2 border-orange-500 text-orange-500 shadow-xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
            </div>

            {/* Floating details banner that triggers on click */}
            {showMapTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                className="absolute top-6 left-1/2 bg-zinc-950/95 backdrop-blur-md border border-zinc-800 p-5 rounded-xl shadow-2xl text-center max-w-sm w-[90%] z-30"
                id="interactive-map-tag"
              >
                <div className="flex justify-center mb-2">
                  <Compass className="w-5 h-5 text-orange-500 animate-spin-slow" />
                </div>
                <h4 className="text-xs font-black uppercase text-white tracking-widest">KANTOR BERLIAN KONTRAKTOR BOGOR</h4>
                <p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">
                  Jl. Mekar Jaya Depan bidan No.14, Mekarjaya, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610
                </p>
                <div className="mt-4 pt-3 border-t border-zinc-900 flex justify-center gap-3">
                  <a
                    href={mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-orange-600 text-white font-black text-[10.5px] uppercase tracking-wider py-1.5 px-4 rounded"
                  >
                    <span>Navigasi</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setShowMapTooltip(false)}
                    className="text-[10.5px] text-zinc-500 hover:text-white"
                  >
                    Sembunyikan
                  </button>
                </div>
              </motion.div>
            )}

            {/* Label instruction helper */}
            {!showMapTooltip && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-zinc-900/80 px-4 py-2 rounded-lg border border-zinc-805 text-zinc-400 text-xs pointer-events-none text-center">
                Klik PIN lokator di tengah untuk memuat informasi alamat
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
