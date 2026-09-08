/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { IMAGES } from "../constants/images";
import { CONTACT_INFO } from "../constants/contact";

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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3"
          : "bg-white py-4 border-b border-stone-200/60"
      }`}
      id="main-navigation-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Berlian Kontraktor & Arsitektur */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick("home")}
            id="navbar-brand-logo"
          >
            <div className="h-10 sm:h-12 md:h-14 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] flex items-center bg-transparent border-0 shadow-none transition-transform duration-200 group-hover:scale-105">
              <img
                src={IMAGES.companyLogo}
                alt="Berlian Kontraktor & Arsitektur"
                className="h-full w-auto object-contain max-h-12 sm:max-h-14"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-stone-100/90 p-1.5 rounded-full border border-stone-200/80" id="desktop-links-container">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/20 font-extrabold"
                    : "text-stone-600 hover:text-stone-900"
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
              href={CONTACT_INFO.consultation.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-widest py-2.5 px-5 rounded-full border border-stone-800 hover:border-orange-600 transition-all shadow-md group"
              id="cta-wa-nav"
            >
              <Phone className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
              <span>{CONTACT_INFO.consultation.phone}</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200 focus:outline-none"
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
            className="md:hidden bg-white border-b border-stone-200 shadow-xl"
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
                      : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                  id={`navitem-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-stone-200">
                <a
                  href={CONTACT_INFO.consultation.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs py-3 rounded-xl uppercase tracking-wider transition-all"
                  id="cta-wa-nav-mobile"
                >
                  <Phone className="w-4 h-4" />
                  <span>KONSULTASI WHATSAPP ({CONTACT_INFO.consultation.phone})</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
