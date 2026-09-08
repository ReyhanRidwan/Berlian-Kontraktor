/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Headphones } from "lucide-react";
import { IMAGES } from "../constants/images";
import { CONTACT_INFO } from "../constants/contact";

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

  const address = CONTACT_INFO.office.address;
  const instagramUrl = CONTACT_INFO.socials.instagram;
  const tiktokUrl = CONTACT_INFO.socials.tiktok;

  return (
    <footer className="bg-[#F4F0E8] border-t border-stone-200 text-stone-700 font-sans" id="footer-section">
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center cursor-pointer group w-fit"
              onClick={() => handleLinkClick("home")}
              id="footer-brand-logo"
            >
              <div className="h-10 sm:h-12 w-auto max-w-[220px] flex items-center bg-transparent border-0 shadow-none transition-transform duration-200 group-hover:scale-105">
                <img
                  src={IMAGES.companyLogo}
                  alt="Berlian Kontraktor & Arsitektur"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed mt-1">
              Sebagai perusahaan yang berfokus pada inovasi dan keunggulan di bidang konstruksi, Berlian Kontraktor hadir untuk mewujudkan visi Anda dalam membangun masa depan dengan kualitas, ketepatan waktu, dan kepuasan pelanggan.
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
                "Construction Building",
                "Design Building",
                "Home Maintenance"
              ].map((service, i) => (
                <li
                  key={i}
                  onClick={() => handleLinkClick("services")}
                  className="flex items-center gap-2 cursor-pointer group w-fit"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:scale-125 transition-transform" />
                  <span className="text-stone-700 text-xs group-hover:text-orange-600 transition-colors font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak Informasi */}
          <div>
            <h3 className="text-stone-900 text-xs font-black uppercase tracking-widest mb-6">
              Hubungi Berlian Kontraktor
            </h3>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-stone-700 font-medium text-[11.5px]">
                  {address}
                </span>
              </div>
              
              {/* Konsultasi Proyek */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-stone-500 font-extrabold uppercase block tracking-wider">
                    Konsultasi & Estimasi:
                  </span>
                  <a
                    href={CONTACT_INFO.consultation.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-600 text-stone-900 font-black text-xs transition-colors"
                  >
                    {CONTACT_INFO.consultation.phone}
                  </a>
                </div>
              </div>

              {/* CS */}
              <div className="flex items-start gap-3">
                <Headphones className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-stone-500 font-extrabold uppercase block tracking-wider">
                    Layanan Pelanggan (CS):
                  </span>
                  <a
                    href={CONTACT_INFO.customerService.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-600 text-stone-900 font-black text-xs transition-colors"
                  >
                    {CONTACT_INFO.customerService.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-stone-500 font-extrabold uppercase block tracking-wider">
                    Email Resmi:
                  </span>
                  <a
                    href={CONTACT_INFO.email.mailtoUrl}
                    className="text-stone-900 hover:text-orange-600 font-bold transition-colors block text-[11.5px]"
                  >
                    {CONTACT_INFO.email.address}
                  </a>
                </div>
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
