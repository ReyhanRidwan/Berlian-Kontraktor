/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, ArrowUpRight, Instagram } from "lucide-react";
import { IMAGES } from "../constants/images";

// TikTok SVG Icon component
function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.89 2.894 2.894 0 0 1-2.892-2.89 2.893 2.893 0 0 1 2.892-2.89c.278 0 .546.046.797.126V9.412a6.326 6.326 0 0 0-.797-.052 6.338 6.338 0 0 0-6.339 6.336 6.338 6.338 0 0 0 6.339 6.337 6.338 6.338 0 0 0 6.338-6.337V8.535a8.214 8.214 0 0 0 4.78 1.523v-3.372a4.816 4.816 0 0 1-1.002-.002z"/>
    </svg>
  );
}

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const address = "Jl. Jendral Basuki Rahmat No. 1A, Cipinang Besar Selatan, Jatinegara, Jakarta Timur";
  const instagramUrl = "https://www.instagram.com/berlian_kontraktor?igsh=bDYwanJtOWhzcjBr";
  const tiktokUrl = "https://www.tiktok.com/@berlian_kontraktor?is_from_webapp=1&sender_device=pc";

  return (
    <footer className="bg-[#F4F0E8] border-t border-stone-200 text-stone-700 font-sans" id="footer-section">
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
              <div className="h-10 w-10 p-1 bg-white border border-stone-200 shadow-sm rounded-lg flex items-center justify-center group-hover:scale-105 group-hover:border-orange-500 transition-all overflow-hidden shrink-0">
                <img
                  src={IMAGES.companyLogo}
                  alt="Berlian Kontraktor Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-lg font-black text-stone-900 tracking-wider">
                BERLIAN KONTRAKTOR
              </span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed mt-1">
              PT. Berlian adalah perusahaan kontraktor yang bergerak di bidang konstruksi, renovasi, dan pembangunan di wilayah Jabodetabek. Kami melayani berbagai kebutuhan proyek mulai dari renovasi kantor, pembangunan rumah tinggal, renovasi gedung, hingga pembangunan gudang industri.
            </p>

            {/* Social Media Badges */}
            <div className="pt-2 flex flex-col gap-2">
              <span className="text-[10px] font-black tracking-widest text-stone-500 uppercase">Ikuti Media Sosial Kami:</span>
              <div className="flex items-center gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white hover:bg-gradient-to-tr hover:from-amber-600 hover:via-rose-600 hover:to-purple-600 text-stone-800 hover:text-white rounded-lg border border-stone-200 shadow-sm transition-all flex items-center gap-2 text-xs font-bold group"
                  title="Instagram @berlian_kontraktor"
                >
                  <Instagram className="w-4 h-4 text-pink-600 group-hover:text-white transition-colors" />
                  <span className="text-[11px]">Instagram</span>
                </a>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white hover:bg-stone-900 text-stone-800 hover:text-white rounded-lg border border-stone-200 shadow-sm transition-all flex items-center gap-2 text-xs font-bold group"
                  title="TikTok @berlian_kontraktor"
                >
                  <TikTokIcon className="w-4 h-4 text-cyan-600 group-hover:text-white transition-colors" />
                  <span className="text-[11px]">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-stone-900 text-xs font-black uppercase tracking-widest mb-6">
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
                    className="hover:text-orange-600 transition-colors flex items-center gap-1 cursor-pointer group text-left text-stone-700"
                    id={`footer-link-to-${item.id}`}
                  >
                    <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-orange-600 transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Layanan Kami */}
          <div>
            <h3 className="text-stone-900 text-xs font-black uppercase tracking-widest mb-6">
              Layanan Utama
            </h3>
            <ul className="space-y-3.5 text-xs">
              {[
                "Konstruksi & Pembangunan",
                "Renovasi & Remodeling",
                "Interior & Plafon",
                "Perbaikan & Maintenance"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                  <span className="text-stone-700 text-xs">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak Informasi */}
          <div>
            <h3 className="text-stone-900 text-xs font-black uppercase tracking-widest mb-6">
              Hubungi Berlian Kontraktor
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-stone-700 font-medium">
                  {address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <a
                  href="https://wa.me/6285715910161?text=Halo%20Berlian%20Kontraktor,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20konstruksi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 text-stone-900 font-extrabold"
                >
                  +62 857-1591-0161 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="text-stone-700 font-medium">berliancontractor@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-[#EBE6DB] border-t border-stone-300/60 py-8 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600">
            &copy; {currentYear} <span className="text-stone-900 font-black">Berlian Kontraktor</span>. Hak Cipta Dilindungi.
          </p>
          <p className="text-stone-600 text-[10px] font-bold tracking-wider uppercase">
            KOKOH, PRESISI, DAN DIBANGUN UNTUK GENERASI
          </p>
        </div>
      </div>
    </footer>
  );
}
