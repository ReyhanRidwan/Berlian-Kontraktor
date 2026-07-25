/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { IMAGES } from "../constants/images";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md shadow-lg border-b border-zinc-900 py-3"
          : "bg-transparent py-5"
      }`}
      id="main-navigation-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Berlian Kontraktor */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
            id="navbar-brand-logo"
          >
            <div className="h-10 w-10 p-1 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:scale-105 group-hover:border-orange-500 transition-all overflow-hidden shrink-0">
              <img
                src={IMAGES.companyLogo}
                alt="Berlian Kontraktor Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black text-white tracking-wider leading-none">
                BERLIAN
              </span>
              <span className="text-[10px] font-extrabold text-orange-500 tracking-widest uppercase mt-0.5">
                KONTRAKTOR
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-950/40 p-1.5 rounded-full border border-zinc-900" id="desktop-links-container">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/30 font-extrabold"
                    : "text-zinc-400 hover:text-white"
                }`}
                id={`navitem-btn-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Call-to-Action WhatsApp Hub Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/6281389113085?text=Halo%20Berlian%20Kontraktor,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20konstruksi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-orange-600 text-white hover:text-white text-xs font-black uppercase tracking-widest py-2.5 px-5 rounded-full border border-zinc-800 hover:border-orange-600 transition-all shadow-md group"
              id="cta-wa-nav"
            >
              <Phone className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
              <span>+62 813-8911-3085</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-nav-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-900"
            id="mobile-links-panel"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all ${
                    activeTab === item.id
                      ? "bg-orange-600 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                  id={`navitem-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-900">
                <a
                  href="https://wa.me/6281389113085?text=Halo%20Berlian%20Kontraktor,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20konstruksi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs py-3 rounded-xl uppercase tracking-wider transition-all"
                  id="cta-wa-nav-mobile"
                >
                  <Phone className="w-4 h-4" />
                  <span>KONSULTASI WHATSAPP</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
