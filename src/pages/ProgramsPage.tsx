import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { PROGRAMS } from '../data/gymData';
import { ArrowUpRight, Clock, Gauge, ArrowRight } from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const { t } = useLanguage();
  const { navigate, openBookingModal } = useRouter();

  return (
    <div className="pt-24 pb-20 bg-[#101010] text-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            ALL DISCIPLINES & SYLLABUS
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            SCIENCE-BACKED <span className="text-[#C8FF00]">TRAINING</span> DISCIPLINES.
          </h1>
          <p className="text-lg text-[#B6B6B6] leading-relaxed">
            Every fitness journey demands a different vehicle. From fundamental barbell strength and athletic hypertrophy to metabolic conditioning and functional longevity, explore our six core training pathways.
          </p>
        </div>
      </div>

      {/* Grid of Programs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="group flex flex-col bg-[#181818] border border-[#343434] hover:border-[#4d4d4d] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#202020]">
                <img
                  src={prog.image}
                  alt={prog.tag}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 text-[11px] font-mono tracking-wider font-semibold text-[#101010] bg-[#C8FF00] px-2.5 py-0.5 rounded-sm">
                  {prog.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
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

                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#C8FF00] transition-colors mb-3">
                    {prog.tag}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {prog.sessionFocus.slice(0, 2).map((item, i) => (
                      <div key={i} className="text-xs text-[#B6B6B6] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => navigate('program-detail', prog.slug)}
                    className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#C8FF00] flex items-center gap-1 transition-colors"
                  >
                    <span>View Syllabus</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openBookingModal(prog.tag)}
                    className="text-xs font-bold uppercase tracking-wider text-[#C8FF00] hover:text-white transition-colors"
                  >
                    Book Trial
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
