/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-zinc-950 font-sans selection:bg-orange-600 selection:text-white" id="main-app-container">
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

      {/* Persistent Flashing Floating WhatsApp Consultation Bubble */}
      <a
        href="https://wa.me/6281389113085?text=Halo%20Berlian%20Kontraktor,%20saya%20ingin%20konsultasi%20layanan%20jasa%20konstruksi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all group hover:scale-105 active:scale-95"
        title="Konsultasi Cepat via WhatsApp"
        id="persistent-floating-wa-bubble"
      >
        {/* Pulsing effect rings */}
        <span className="absolute inset-0 rounded-full bg-orange-600 animate-ping opacity-30 group-hover:opacity-50" />
        <MessageSquare className="w-6 h-6 animate-[pulse_2s_infinite]" />
        
        {/* Text assist helper */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-black uppercase tracking-wider transition-all duration-300">
          WA CHAT
        </span>
      </a>
    </div>
  );
}
