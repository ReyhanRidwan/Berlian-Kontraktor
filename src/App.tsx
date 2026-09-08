/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT_INFO } from "./constants/contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import InteractiveMap from "./components/InteractiveMap";
import WhatsAppIcon from "./components/WhatsAppIcon";

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

      {/* Persistent Floating WhatsApp Admin Button (Direct Connection) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center" id="persistent-floating-wa-wrapper">
        <a
          href={CONTACT_INFO.consultation.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-3.5 pr-5 py-3 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_40px_rgba(37,211,102,0.65)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40 cursor-pointer"
          id="btn-floating-whatsapp-admin"
          title={`Chat WhatsApp Admin (${CONTACT_INFO.consultation.phone})`}
          aria-label="Hubungi WhatsApp Admin"
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
