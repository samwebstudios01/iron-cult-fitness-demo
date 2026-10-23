import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { GYM_CONFIG } from '../data/gymData';
import { MessageSquare, ArrowUp, Phone, Calendar } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const { t } = useLanguage();
  const { openBookingModal } = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi IRON CULT FITNESS! I'm interested in your membership plans and would like to know more.`
    );
    return `https://wa.me/${GYM_CONFIG.contact.whatsappRaw}?text=${text}`;
  };

  return (
    <>
      {/* Scroll Progress Bar at very top of viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#C8FF00] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Cluster in Lower Right */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 flex flex-col items-center gap-3">
        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#181818]/90 hover:bg-[#252525] border border-[#343434] text-white hover:text-[#C8FF00] shadow-lg flex items-center justify-center transition-all transform hover:-translate-y-0.5 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#101010] shadow-xl shadow-[#25D366]/25 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#101010]"
          aria-label="Chat with IRON CULT FITNESS on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-[#101010]" />
        </a>
      </div>

      {/* Sticky Mobile Bottom Quick Action Bar (Under 15% mobile viewport cap) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#121212]/95 backdrop-blur-md border-t border-[#343434] px-4 py-2.5 flex items-center gap-3 shadow-2xl">
        <a
          href={`tel:${GYM_CONFIG.contact.phoneRaw}`}
          className="flex-1 py-2.5 px-3 bg-[#1e1e1e] hover:bg-[#282828] text-white text-xs font-bold uppercase tracking-wider rounded border border-[#343434] flex items-center justify-center gap-2 focus:outline-none"
        >
          <Phone className="w-3.5 h-3.5 text-[#C8FF00]" />
          <span>CALL NOW</span>
        </a>

        <button
          type="button"
          onClick={() => openBookingModal()}
          className="flex-1 py-2.5 px-3 bg-[#C8FF00] hover:bg-[#d6ff33] text-[#101010] text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-1.5 focus:outline-none shadow-md shadow-[#C8FF00]/15"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>FREE TRIAL</span>
        </button>
      </div>
    </>
  );
};
