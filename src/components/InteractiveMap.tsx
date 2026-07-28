/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, ExternalLink, Compass, Navigation } from "lucide-react";

export default function InteractiveMap() {
  const [showDirections, setShowDirections] = useState(false);
  
  const address = "Jl. Jendral Basuki Rahmat No. 1A, Cipinang Besar Selatan, Jatinegara, Jakarta Timur";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Jl. Jendral Basuki Rahmat No. 1A, Cipinang Besar Selatan, Jatinegara, Jakarta Timur")}`;
  
  // Embedded Google Map Iframe using query coordinates for Jatinegara, Jakarta Timur
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent("Jl. Jendral Basuki Rahmat No. 1A, Cipinang Besar Selatan, Jatinegara, Jakarta Timur")}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const serviceAreas = [
    {
      wilayah: "Jakarta",
      cakupan: "Jakarta Pusat, Utara, Selatan, Barat, Timur"
    },
    {
      wilayah: "Tangerang",
      cakupan: "Kota Tangerang, Tangerang Selatan, Kabupaten Tangerang"
    },
    {
      wilayah: "Depok",
      cakupan: "Seluruh wilayah Kota Depok"
    },
    {
      wilayah: "Bogor",
      cakupan: "Kota Bogor, Kabupaten Bogor (termasuk Cisarua, Cigombong)"
    },
    {
      wilayah: "Bekasi",
      cakupan: "Kota Bekasi, Kabupaten Bekasi"
    }
  ];

  return (
    <section className="relative w-full py-16 bg-[#FAF8F5] border-t border-stone-200" id="interactive-map-section">
      
      {/* 1. AREA LAYANAN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-600/10 rounded-full text-orange-600 mb-3 border border-orange-500/20">
            <Navigation className="w-4 h-4" />
            <span className="text-xs font-black tracking-widest uppercase">📍 AREA LAYANAN</span>
          </div>
          <h2 className="text-2xl md:text-3.5xl font-black text-stone-900 tracking-tight uppercase" id="area-layanan-heading">
            Cakupan Jangkauan Proyek
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mt-3"></div>
          <p className="text-stone-600 text-xs md:text-sm mt-3 font-medium">
            Kami melayani proyek di seluruh wilayah <strong className="text-stone-900 font-extrabold">Jabodetabek</strong>:
          </p>
        </div>

        {/* Clean Responsive Table for Desktop & Structured Cards for Mobile */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden max-w-4xl mx-auto">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F4F0E8] border-b border-stone-200">
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-stone-900 w-1/3">
                    📍 Wilayah
                  </th>
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-stone-900">
                    Cakupan Layanan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs text-stone-700">
                {serviceAreas.map((area, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="py-4 px-6 font-extrabold text-stone-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                      <span>{area.wilayah}</span>
                    </td>
                    <td className="py-4 px-6 font-medium text-stone-700 leading-relaxed">
                      {area.cakupan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card List View */}
          <div className="md:hidden divide-y divide-stone-100">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="p-4 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span className="text-xs font-black uppercase text-stone-900">{area.wilayah}</span>
                </div>
                <p className="text-xs text-stone-600 font-medium pl-4 leading-relaxed">
                  {area.cakupan}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAP & LOCATION SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase block mb-1">
            KUNJUNGI KANTOR KAMI
          </span>
          <h3 className="text-xl md:text-2.5xl font-black text-stone-900 tracking-tight uppercase" id="map-heading">
            LOKASI OPERASIONAL BERLIAN KONTRAKTOR
          </h3>
          <div className="w-12 h-1 bg-orange-600 mx-auto mt-2"></div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-stone-300 bg-white shadow-lg h-[450px]" id="map-container-box">
          {/* Main Interactive Google Map */}
          <iframe
            src={embedMapUrl}
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi Berlian Kontraktor Jakarta Timur"
            id="gmaps-iframe"
          ></iframe>

          {/* Interactive Absolute Card Overlay */}
          <div className="absolute top-4 left-4 right-4 md:right-auto md:max-w-md bg-[#FAF8F5]/95 backdrop-blur-xl border border-stone-200 p-6 rounded-xl shadow-xl text-left" id="map-overlay-card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-600/10 rounded-lg text-orange-600 shrink-0">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 tracking-wide uppercase">KANTOR UTAMA</h3>
                <p className="text-stone-600 text-xs mt-1 leading-relaxed">{address}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs text-stone-700">
                <Phone className="w-4 h-4 text-orange-600" />
                <a href="https://wa.me/6285715910161" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 font-extrabold text-stone-900">
                  +62 857-1591-0161 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-700">
                <Compass className="w-4 h-4 text-orange-600" />
                <span className="font-medium">Kec. Jatinegara, Jakarta Timur</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg tracking-wide transition-all uppercase shadow-sm"
                id="btn-open-gmaps"
              >
                <span>Buka Rute</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setShowDirections(!showDirections)}
                className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold py-2.5 px-4 rounded-lg border border-stone-300 transition-all cursor-pointer"
                id="btn-toggle-directions"
              >
                {showDirections ? "Sembunyikan Info" : "Sistem Navigasi"}
              </button>
            </div>

            {showDirections && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 leading-relaxed shadow-sm"
                id="directions-detail-panel"
              >
                <strong className="text-stone-900">Panduan Rute:</strong> Berada di Jl. Jendral Basuki Rahmat No. 1A, Cipinang Besar Selatan, Kec. Jatinegara, Jakarta Timur. Hubungi nomor WhatsApp kami untuk janjian konsultasi atau survei lokasi gratis.
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
