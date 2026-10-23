import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GYM_CONFIG } from '../data/gymData';
import { Target, CalendarCheck, TrendingUp } from 'lucide-react';

export const ResultsProgressSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      icon: Target,
      title: t.progress.step1.title,
      desc: t.progress.step1.desc
    },
    {
      num: "02",
      icon: CalendarCheck,
      title: t.progress.step2.title,
      desc: t.progress.step2.desc
    },
    {
      num: "03",
      icon: TrendingUp,
      title: t.progress.step3.title,
      desc: t.progress.step3.desc
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#101010] border-t border-[#343434] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            {t.progress.eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F7F7F7] mb-4">
            {t.progress.heading}
          </h2>
          <p className="text-base text-[#B6B6B6] leading-relaxed">
            {t.progress.subtitle}
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-8 rounded-lg bg-[#181818] border border-[#343434] flex flex-col justify-between hover:border-[#4a4a4a] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-bold text-[#C8FF00]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-md bg-[#202020] border border-[#343434] flex items-center justify-center text-[#C8FF00]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#B6B6B6] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#2a2a2a] flex items-center gap-2 text-xs text-[#707070]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                  <span>Science-based progression</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Atmospheric Image Banner */}
        <div className="rounded-xl overflow-hidden border border-[#343434] relative aspect-[21/9] max-h-72 bg-[#181818]">
          <img
            src={GYM_CONFIG.images.gymFloor}
            alt="Iron Cult gym floor architecture"
            className="w-full h-full object-cover filter brightness-75"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-8 sm:p-12">
            <div className="max-w-md">
              <span className="text-xs font-mono text-[#C8FF00] uppercase tracking-wider block mb-2">
                IRON CULT STANDARDS
              </span>
              <p className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-2">
                NO GIMMICKS. NO CRASH DIETS. JUST SYSTEMATIC DISCIPLINE.
              </p>
              <p className="text-xs sm:text-sm text-[#B6B6B6]">
                Every rep counts toward long-term joint health and sustainable power.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
