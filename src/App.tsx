/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT_INFO } from "./constants/contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";

// Direct Critical Import for Initial Page (Home View)
import HomeView from "./views/HomeView";

// Code-Split / Lazy-Loaded Secondary Views for Optimal Performance & Splitting
const ProjectsView = lazy(() => import("./views/ProjectsView"));
const ServicesView = lazy(() => import("./views/ServicesView"));
const AboutView = lazy(() => import("./views/AboutView"));
const FaqView = lazy(() => import("./views/FaqView"));
const ContactView = lazy(() => import("./views/ContactView"));
const ArticlesView = lazy(() => import("./views/ArticlesView"));

// Code-Split Map Component which is below-the-fold
const InteractiveMap = lazy(() => import("./components/InteractiveMap"));

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  // Helper page renderer with Suspense for split views
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
        return (
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-stone-400 text-xs font-bold uppercase tracking-widest">Memuat Proyek...</div>}>
            <ProjectsView setActiveTab={setActiveTab} />
          </Suspense>
        );
      case "services":
        return (
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-stone-400 text-xs font-bold uppercase tracking-widest">Memuat Layanan...</div>}>
            <ServicesView />
          </Suspense>
        );
      case "about":
        return (
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-stone-400 text-xs font-bold uppercase tracking-widest">Memuat Profil...</div>}>
            <AboutView />
          </Suspense>
        );
      case "faq":
        return (
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-stone-400 text-xs font-bold uppercase tracking-widest">Memuat Tanya Jawab...</div>}>
            <FaqView />
          </Suspense>
        );
      case "contact":
        return (
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-stone-400 text-xs font-bold uppercase tracking-widest">Memuat Kontak...</div>}>
            <ContactView />
          </Suspense>
        );
      case "articles":
        return (
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-stone-400 text-xs font-bold uppercase tracking-widest">Memuat Artikel...</div>}>
            <ArticlesView
              selectedArticle={selectedArticle}
              setSelectedArticle={setSelectedArticle}
            />
          </Suspense>
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
      <Suspense fallback={<div className="h-[450px] w-full flex items-center justify-center bg-[#FAF8F5] text-stone-400 text-xs font-bold uppercase tracking-widest border-t border-stone-200">Memuat Peta...</div>}>
        <InteractiveMap />
      </Suspense>

      {/* Modern footer with navigation links and WA handles */}
      <Footer setActiveTab={setActiveTab} />

      {/* Persistent Floating WhatsApp Admin Button (Direct Connection) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center" id="persistent-floating-wa-wrapper">
        <a
          href={CONTACT_INFO.floatingButton.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-3.5 pr-5 py-3 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_40px_rgba(37,211,102,0.65)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40 cursor-pointer"
          id="btn-floating-whatsapp-admin"
          title={`Chat WhatsApp Admin (${CONTACT_INFO.floatingButton.phone})`}
          aria-label={`Hubungi WhatsApp Admin ${CONTACT_INFO.floatingButton.phone}`}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute -inset-1 rounded-full bg-white/40 animate-ping opacity-75 pointer-events-none" />
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#25D366] shadow-sm relative z-10">
              <WhatsAppIcon className="w-6 h-6 fill-current" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-emerald-100 font-bold uppercase tracking-wider leading-none">
              Konsultasi Cepat
            </span>
            <span className="text-xs sm:text-sm font-black tracking-wide leading-tight text-white mt-0.5">
              WhatsApp Admin
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
