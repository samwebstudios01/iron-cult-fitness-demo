import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { PROGRAMS, ProgramItem } from '../data/gymData';
import { ArrowUpRight, Clock, Gauge } from 'lucide-react';

export const ProgramsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { navigate, openBookingModal } = useRouter();

  const getProgramData = (prog: ProgramItem) => {
    switch (prog.slug) {
      case 'strength-training':
        return {
          title: t.programs.strength.title,
          desc: t.programs.strength.desc,
          audience: t.programs.strength.audience
        };
      case 'muscle-building':
        return {
          title: t.programs.hypertrophy.title,
          desc: t.programs.hypertrophy.desc,
          audience: t.programs.hypertrophy.audience
        };
      case 'fat-loss-training':
        return {
          title: t.programs.fatloss.title,
          desc: t.programs.fatloss.desc,
          audience: t.programs.fatloss.audience
        };
      case 'personal-training':
        return {
          title: t.programs.pt.title,
          desc: t.programs.pt.desc,
          audience: t.programs.pt.audience
        };
      case 'functional-fitness':
        return {
          title: t.programs.functional.title,
          desc: t.programs.functional.desc,
          audience: t.programs.functional.audience
        };
      case 'beginner-fitness':
      default:
        return {
          title: t.programs.beginner.title,
          desc: t.programs.beginner.desc,
          audience: t.programs.beginner.audience
        };
    }
  };

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#141414] border-t border-[#343434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            {t.programs.eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F7F7F7] mb-4">
            {t.programs.heading}
          </h2>
          <p className="text-base text-[#B6B6B6] leading-relaxed">
            {t.programs.subtitle}
          </p>
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS.map((prog) => {
            const data = getProgramData(prog);
            return (
              <div
                key={prog.id}
                className="group flex flex-col bg-[#181818] border border-[#343434] hover:border-[#4d4d4d] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#202020]">
                  <img
                    src={prog.image}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed tag in corner */}
                  <div className="absolute top-3 left-3 text-[11px] font-mono tracking-wider font-semibold text-[#101010] bg-[#C8FF00] px-2.5 py-0.5 rounded-sm">
                    {prog.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs text-[#8e8e8e] mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C8FF00]" />
                        <span>{prog.duration}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Gauge className="w-3.5 h-3.5 text-[#C8FF00]" />
                        <span>{prog.intensity}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#C8FF00] transition-colors mb-2">
                      {data.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#B6B6B6] leading-relaxed mb-4">
                      {data.desc}
                    </p>

                    {/* Suitable Audience (Unboxed, clean) */}
                    <div className="pt-3 border-t border-[#262626] mb-5">
                      <p className="text-xs text-[#8e8e8e]">
                        <strong className="text-white font-medium">{t.programs.suitableFor}: </strong>
                        {data.audience}
                      </p>
                    </div>
                  </div>

                  {/* Actions: Learn More + Book Trial */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#262626] text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => navigate('program-detail', prog.slug)}
                      className="text-[#F7F7F7] hover:text-[#C8FF00] flex items-center gap-1 uppercase tracking-wider transition-colors py-1 focus:outline-none"
                    >
                      <span>{t.programs.learnMore}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => openBookingModal(data.title)}
                      className="text-xs text-[#C8FF00] hover:text-white transition-colors uppercase tracking-wider font-bold py-1 focus:outline-none"
                    >
                      Book Trial
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
