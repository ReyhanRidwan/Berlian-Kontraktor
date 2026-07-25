/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { IMAGES } from "../constants/images";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const address = "Jl. Mekar Jaya Depan bidan No.14, Mekarjaya, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610";

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 font-sans" id="footer-section">
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center gap-3 cursor-pointer group w-fit"
              onClick={() => handleLinkClick("home")}
              id="footer-brand-logo"
            >
              <div className="h-10 w-10 p-1 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:scale-105 group-hover:border-orange-500 transition-all overflow-hidden shrink-0">
                <img
                  src={IMAGES.companyLogo}
                  alt="Berlian Kontraktor Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-lg font-black text-white tracking-wider">
                BERLIAN KONTRAKTOR
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed mt-2">
              Berlian Kontraktor adalah perusahaan jasa konstruksi sipil terkemuka di Bogor yang berfokus pada pembangunan rumah baru, renovasi total, desain arsitektur, dan manajemen proyek. Kami menjamin pengerjaan yang kokoh, presisi, dan dibangun untuk generasi.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6">
              Navigasi Proyek
            </h3>
            <ul className="space-y-3.5 text-xs">
              {[
                { id: "home", label: "Utama (Home)" },
                { id: "projects", label: "Proyek & Portfolio" },
                { id: "services", label: "Daftar Layanan" },
                { id: "about", label: "Tentang Kami (About)" },
                { id: "faq", label: "Tanya Jawab (FAQ)" },
                { id: "contact", label: "Kontak Offline" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="hover:text-orange-500 transition-colors flex items-center gap-1 cursor-pointer group text-left"
                    id={`footer-link-to-${item.id}`}
                  >
                    <ArrowUpRight className="w-3 h-3 text-zinc-650 group-hover:text-orange-500 transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Layanan Kami */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6">
              Layanan Utama
            </h3>
            <ul className="space-y-3.5 text-xs">
              {[
                "Pembangunan Rumah Baru",
                "Renovasi Rumah & Ruko",
                "Desain Arsitektur 3D",
                "Perencanaan DED Lengkap",
                "Supervisi & Estimator Sipil",
                "Waterproofing & Dak Beton"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                  <span className="text-zinc-400 text-xs">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak Informasi */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6">
              Hubungi Berlian Kontraktor
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-zinc-300">
                  {address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href="https://wa.me/6281389113085?text=Halo%20Berlian%20Kontraktor,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20konstruksi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 text-zinc-300"
                >
                  +62 813-8911-3085 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-zinc-300">info@berliankontraktor.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-zinc-950 border-t border-zinc-900/60 py-8 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500">
            &copy; {currentYear} <span className="text-white font-bold">Berlian Kontraktor</span>. Hak Cipta Dilindungi.
          </p>
          <p className="text-zinc-500 text-[10px] tracking-wider uppercase">
            KOKOH, PRESISI, DAN DIBANGUN UNTUK GENERASI
          </p>
        </div>
      </div>
    </footer>
  );
}
