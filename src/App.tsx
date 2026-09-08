/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Phone, Headphones, Mail, X, ChevronUp } from "lucide-react";
import { CONTACT_INFO } from "./constants/contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import InteractiveMap from "./components/InteractiveMap";

// Views
import HomeView from "./views/HomeView";
import ProjectsView from "./views/ProjectsView";
import ServicesView from "./views/ServicesView";
import AboutView from "./views/AboutView";
import FaqView from "./views/FaqView";
import ContactView from "./views/ContactView";
import ArticlesView from "./views/ArticlesView";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [isContactBubbleOpen, setIsContactBubbleOpen] = useState<boolean>(false);

  // Helper page renderer
  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomeView
            setActiveTab={setActiveTab}
            setSelectedArticle={setSelectedArticle}
          />
        );
      case "projects":
        return <ProjectsView setActiveTab={setActiveTab} />;
      case "services":
        return <ServicesView />;
      case "about":
        return <AboutView />;
      case "faq":
        return <FaqView />;
      case "contact":
        return <ContactView />;
      case "articles":
        return (
          <ArticlesView
            selectedArticle={selectedArticle}
            setSelectedArticle={setSelectedArticle}
          />
        );
      default:
        return (
          <HomeView
            setActiveTab={setActiveTab}
            setSelectedArticle={setSelectedArticle}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] font-sans selection:bg-orange-600 selection:text-white" id="main-app-container">
      {/* Scroll restore trigger on active view transition */}
      <ScrollToTop currentTab={activeTab} />

      {/* Sticky Main Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Animated Content Area */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            id={`tab-wrapper-${activeTab}`}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Interactive Google Map of Berlian Kontraktor (displayed at the bottom of EVERY section as requested) */}
      <InteractiveMap />

      {/* Modern footer with navigation links and WA handles */}
      <Footer setActiveTab={setActiveTab} />

      {/* Persistent Floating Contact Menu */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="persistent-floating-contact-container">
        <AnimatePresence>
          {isContactBubbleOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-left"
              id="floating-contact-popup"
            >
              {/* Header */}
              <div className="bg-[#1C1917] p-4 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-orange-400 font-extrabold uppercase tracking-widest block">
                    Hubungi Kami
                  </span>
                  <h4 className="text-sm font-black text-white uppercase tracking-wide">
                    Berlian Kontraktor
                  </h4>
                </div>
                <button
                  onClick={() => setIsContactBubbleOpen(false)}
                  className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Channels List */}
              <div className="p-3.5 space-y-2.5 bg-[#FAF8F5]">
                {/* 1. Konsultasi Proyek & Estimasi Biaya */}
                <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-xs hover:border-orange-500 transition-colors">
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-extrabold text-orange-600 uppercase tracking-wider block">
                        Konsultasi Proyek & Estimasi Biaya
                      </span>
                      <a
                        href={CONTACT_INFO.consultation.waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-black text-stone-900 hover:text-orange-600 transition-colors block"
                      >
                        {CONTACT_INFO.consultation.phone}
                      </a>
                      <p className="text-[10px] text-stone-500 leading-tight mt-0.5">
                        RAB gratis, survei tanah, rancang bangun hunian
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <a
                          href={CONTACT_INFO.consultation.waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold text-white bg-orange-600 hover:bg-orange-700 px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1 shadow-2xs"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Chat WA</span>
                        </a>
                        <a
                          href={CONTACT_INFO.consultation.telUrl}
                          className="text-[10px] font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-md transition-colors border border-stone-200 inline-flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3 text-stone-600" />
                          <span>Telepon</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Layanan Pelanggan (CS) */}
                <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-xs hover:border-blue-500 transition-colors">
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shrink-0 mt-0.5">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
                        Layanan Pelanggan (CS)
                      </span>
                      <a
                        href={CONTACT_INFO.customerService.waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-black text-stone-900 hover:text-orange-600 transition-colors block"
                      >
                        {CONTACT_INFO.customerService.phone}
                      </a>
                      <p className="text-[10px] text-stone-500 leading-tight mt-0.5">
                        Layanan bantuan umum & administrasi klien
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <a
                          href={CONTACT_INFO.customerService.waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold text-white bg-stone-900 hover:bg-orange-600 px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1 shadow-2xs"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Chat CS</span>
                        </a>
                        <a
                          href={CONTACT_INFO.customerService.telUrl}
                          className="text-[10px] font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-md transition-colors border border-stone-200 inline-flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3 text-stone-600" />
                          <span>Telepon</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Email */}
                <div className="px-3 py-2 bg-white rounded-xl border border-stone-200 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <a
                      href={CONTACT_INFO.email.mailtoUrl}
                      className="text-stone-700 hover:text-orange-600 font-bold truncate transition-colors"
                    >
                      {CONTACT_INFO.email.address}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bubble Trigger Button */}
        <div className="flex items-center gap-2">
          {/* Direct Quick WA Button */}
          <a
            href={CONTACT_INFO.consultation.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-stone-900/90 backdrop-blur-md hover:bg-orange-600 text-white text-[11px] font-extrabold uppercase px-3.5 py-2.5 rounded-full shadow-lg border border-stone-700 hover:border-orange-500 transition-all tracking-wider"
            title="Chat Langsung Konsultasi Proyek"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span>WA {CONTACT_INFO.consultation.phone}</span>
          </a>

          {/* Main Floating Bubble */}
          <button
            onClick={() => setIsContactBubbleOpen(!isContactBubbleOpen)}
            className="p-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all group hover:scale-105 active:scale-95 relative cursor-pointer"
            title="Pusat Kontak Berlian Kontraktor"
            id="persistent-floating-wa-bubble"
            aria-label="Buka Opsi Kontak"
          >
            {/* Pulsing effect rings */}
            <span className="absolute inset-0 rounded-full bg-orange-600 animate-ping opacity-30 group-hover:opacity-50" />
            {isContactBubbleOpen ? (
              <X className="w-6 h-6 relative z-10" />
            ) : (
              <MessageSquare className="w-6 h-6 animate-[pulse_2s_infinite] relative z-10" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
