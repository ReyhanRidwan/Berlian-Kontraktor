/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, ExternalLink, Compass } from "lucide-react";

export default function InteractiveMap() {
  const [showDirections, setShowDirections] = useState(false);
  
  const address = "Jl. Mekar Jaya Depan bidan No.14, Mekarjaya, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Jl. Mekar Jaya No.14, Mekarjaya, Ciomas, Bogor, Jawa Barat")}`;
  
  // Embedded Google Map Iframe using precise coordinates for Ciomas, Bogor
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.62194689874!2d106.75338002621008!3d-6.611130097723467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cf2ff37c897f%3A0x6b14ec0fc0e61d8a!2sMekarjaya%2C%20Ciomas%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1718879684346!5m2!1sen!2sid";

  return (
    <section className="relative w-full py-12 bg-zinc-950 border-t border-zinc-900" id="interactive-map-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block mb-2">
          KUNJUNGI KANTOR KAMI
        </span >
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase" id="map-heading">
          LOKASI OPERASIONAL BERLIAN KONTRAKTOR
        </h2>
        <div className="w-16 h-1 bg-orange-600 mx-auto mt-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl h-[450px]" id="map-container-box">
          {/* Main Interactive Google Map */}
          <iframe
            src={embedMapUrl}
            className="w-full h-full border-0 grayscale invert-[0.9] contrast-[1.2]"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi Berlian Kontraktor Bogor"
            id="gmaps-iframe"
          ></iframe>

          {/* Interactive Absolute Card Overlay */}
          <div className="absolute top-4 left-4 right-4 md:right-auto md:max-w-md bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 p-6 rounded-xl shadow-2xl text-left" id="map-overlay-card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-600/10 rounded-lg text-orange-500 shrink-0">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide uppercase">KANTOR UTAMA</h3>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{address}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+62 813-8911-3085 (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <Compass className="w-4 h-4 text-orange-500" />
                <span>Kecamatan Ciomas, Kabupaten Bogor</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg tracking-wide transition-all uppercase"
                id="btn-open-gmaps"
              >
                <span>Buka Rute</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setShowDirections(!showDirections)}
                className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-all"
                id="btn-toggle-directions"
              >
                {showDirections ? "Sembunyikan Info" : "Sistem Navigasi"}
              </button>
            </div>

            {showDirections && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-zinc-950 rounded-lg border border-zinc-800 text-xs text-zinc-400 leading-relaxed"
                id="directions-detail-panel"
              >
                <strong className="text-zinc-200">Panduan Rute:</strong> Berada di depan Bidan No.14, Mekarjaya, Kec. Ciomas. Dapat diakses dari pertigaan Ciomas - Gunung Batu Bogor dalam waktu 15 menit berkendara. Hubungi nomor WA kami untuk penjemputan atau survei lokasi gratis.
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
