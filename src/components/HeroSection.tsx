import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { GYM_CONFIG } from '../data/gymData';
import { ChevronDown, ArrowRight, ShieldCheck, Dumbbell, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const { openBookingModal, navigate } = useRouter();

  const handleScrollToNext = () => {
    const el = document.getElementById('feature-strip') || document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Photography with Measured Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_CONFIG.images.hero}
          alt="Athlete training with barbell at Iron Cult Fitness"
          className="w-full h-full object-cover object-center filter brightness-90"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Dark cinematic graded overlay: from-black/90 via-black/75 to-[#101010] */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/75 to-black/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-[#101010]/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase">
            <span className="w-2 h-0.5 bg-[#C8FF00]" aria-hidden="true" />
            <span>{t.hero.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#F7F7F7] leading-[1.05] text-balance mb-6">
            <span>{t.hero.headlinePrefix} </span>
            <span className="text-[#C8FF00]">{t.hero.headlineAccent} </span>
            <span>{t.hero.headlineSuffix}</span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg lg:text-xl text-[#B6B6B6] max-w-2xl leading-relaxed mb-8">
            {t.hero.description}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="px-8 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-[#101010] bg-[#C8FF00] hover:bg-[#d6ff33] active:bg-[#b0e600] rounded transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C8FF00]/15 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF00]"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => navigate('membership')}
              className="px-6 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#F7F7F7] hover:text-white bg-[#181818]/90 hover:bg-[#222222] border border-[#343434] hover:border-[#4a4a4a] rounded transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{t.hero.secondaryCta}</span>
            </button>
          </div>

          {/* Tasteful Membership Promotion Label (Zero-Pill Discipline) */}
          <div className="text-xs sm:text-sm text-[#B6B6B6] flex items-center gap-2 mb-10 border-l border-[#C8FF00] pl-3 py-0.5">
            <span className="text-[#F7F7F7] font-medium">{t.hero.promoBadge}</span>
          </div>

          {/* Trust Indicators (Quiet unboxed text with subtle typographic separators) */}
          <div className="pt-6 border-t border-[#343434]/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#B6B6B6]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C8FF00] shrink-0" />
              <span>{t.hero.trust1}</span>
            </div>
            <span className="hidden sm:inline text-[#4a4a4a]" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-[#C8FF00] shrink-0" />
              <span>{t.hero.trust2}</span>
            </div>
            <span className="hidden sm:inline text-[#4a4a4a]" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C8FF00] shrink-0" />
              <span>{t.hero.trust3}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        type="button"
        onClick={handleScrollToNext}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[#B6B6B6] hover:text-[#C8FF00] transition-colors focus:outline-none"
        aria-label={t.hero.scrollHint}
      >
        <span>{t.hero.scrollHint}</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C8FF00]" />
      </button>
    </section>
  );
};
