import React, { useState, useEffect } from 'react';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { GYM_CONFIG } from '../data/gymData';
import { Dumbbell, Menu, X, Globe, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { route, navigate, openBookingModal } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: t.nav.home, target: 'home' as const },
    { id: 'about', label: t.nav.about, target: 'about' as const },
    { id: 'programs', label: t.nav.programs, target: 'programs' as const },
    { id: 'trainers', label: t.nav.trainers, target: 'trainers' as const },
    { id: 'membership', label: t.nav.membership, target: 'membership' as const },
    { id: 'gallery', label: t.nav.gallery, target: 'gallery' as const },
    { id: 'contact', label: t.nav.contact, target: 'contact' as const }
  ];

  const handleNavClick = (target: typeof navLinks[0]['target']) => {
    navigate(target);
    setIsMobileMenuOpen(false);
  };

  const currentLangObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#101010]/95 backdrop-blur-md border-b border-[#343434]/80 py-3 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark with barbell symbol */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF00] rounded-sm whitespace-nowrap shrink-0"
              aria-label="IRON CULT FITNESS Home"
            >
              <div className="w-8 h-8 rounded bg-[#181818] border border-[#343434] flex items-center justify-center text-[#C8FF00] group-hover:border-[#C8FF00] transition-colors">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#C8FF00] transition-colors">
                IRON CULT <span className="text-[#C8FF00]">FITNESS</span>
              </span>
            </button>

            {/* Zone 2: 4-7 Clean single-line text links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#B6B6B6]">
              {navLinks.map((item) => {
                const isActive = route.path === item.target;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.target)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00] ${
                      isActive ? 'text-white font-semibold' : ''
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8FF00]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Language Selector + Primary Action */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsLangDropdownOpen(false), 200)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-[#B6B6B6] hover:text-white bg-[#181818] hover:bg-[#202020] border border-[#343434] rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF00]"
                  aria-expanded={isLangDropdownOpen}
                  aria-label="Select Language"
                >
                  <Globe className="w-3.5 h-3.5 text-[#C8FF00]" />
                  <span>{currentLangObj.nativeName}</span>
                  <ChevronDown className="w-3 h-3 text-[#B6B6B6]" />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-36 bg-[#181818] border border-[#343434] rounded shadow-2xl py-1 z-50">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between transition-colors ${
                          language === lang.code
                            ? 'bg-[#202020] text-[#C8FF00] font-semibold'
                            : 'text-[#B6B6B6] hover:bg-[#202020] hover:text-white'
                        }`}
                      >
                        <span>{lang.nativeName}</span>
                        <span className="text-[10px] text-[#707070] uppercase">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="px-5 py-2 text-xs font-bold tracking-wider uppercase text-[#101010] bg-[#C8FF00] hover:bg-[#d6ff33] active:bg-[#b0e600] rounded transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 shadow-md shadow-[#C8FF00]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C8FF00]"
              >
                {t.nav.bookTrial}
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#101010] bg-[#C8FF00] rounded whitespace-nowrap focus:outline-none"
              >
                Free Trial
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#F7F7F7] bg-[#181818] border border-[#343434] rounded hover:border-[#C8FF00] focus:outline-none focus:ring-2 focus:ring-[#C8FF00]"
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Drawer */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#141414] border-l border-[#343434] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#343434]">
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-[#C8FF00]" />
                  <span className="font-display text-lg font-bold text-white tracking-wide">
                    IRON CULT
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#B6B6B6] hover:text-white rounded border border-[#343434]"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((item) => {
                  const isActive = route.path === item.target;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.target)}
                      className={`text-left px-3 py-2.5 rounded text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#202020] text-[#C8FF00] font-semibold border-l-2 border-[#C8FF00]'
                          : 'text-[#B6B6B6] hover:bg-[#1c1c1c] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Language Selector in Mobile Drawer */}
              <div className="mt-6 pt-6 border-t border-[#343434]">
                <p className="text-xs uppercase tracking-wider text-[#707070] font-semibold mb-2">
                  Language / भाषा
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => setLanguage(lang.code)}
                      className={`px-2 py-2 text-xs font-semibold rounded text-center transition-colors border ${
                        language === lang.code
                          ? 'bg-[#C8FF00] text-[#101010] border-[#C8FF00]'
                          : 'bg-[#1a1a1a] text-[#B6B6B6] border-[#343434] hover:text-white'
                      }`}
                    >
                      {lang.nativeName}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA in drawer */}
            <div className="pt-6 border-t border-[#343434] mt-6">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full py-3 text-center text-xs font-bold tracking-wider uppercase text-[#101010] bg-[#C8FF00] hover:bg-[#d6ff33] rounded transition-colors"
              >
                {t.nav.bookTrial}
              </button>
              <p className="mt-3 text-center text-[11px] text-[#707070]">
                {GYM_CONFIG.location.address}, {GYM_CONFIG.location.city}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
