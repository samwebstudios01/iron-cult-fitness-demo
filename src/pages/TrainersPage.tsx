import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { TRAINERS } from '../data/gymData';
import { Award, ArrowUpRight, ArrowRight } from 'lucide-react';

export const TrainersPage: React.FC = () => {
  const { t } = useLanguage();
  const { navigate, openBookingModal } = useRouter();

  return (
    <div className="pt-24 pb-20 bg-[#101010] text-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            COACHING STAFF ROSTER
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            DEDICATED TO YOUR <span className="text-[#C8FF00]">TECHNIQUE</span> & PROGRESS.
          </h1>
          <p className="text-lg text-[#B6B6B6] leading-relaxed mb-3">
            Our coaching team combines formal biomechanics expertise with years of hands-on floor coaching. No drill sergeants or ego-driven advice — just clear, actionable guidance tailored to your body.
          </p>
          <p className="text-xs text-[#707070] italic">
            * Demonstration profile roster for prospective gym client presentation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group flex flex-col bg-[#181818] border border-[#343434] hover:border-[#4d4d4d] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#202020]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-[#101010]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#343434] text-xs font-mono text-[#C8FF00] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{trainer.experienceYears} Years Exp.</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#C8FF00] transition-colors mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C8FF00] mb-4">
                    {trainer.slug === 'arjun-mehta'
                      ? 'Strength & Conditioning Coach'
                      : trainer.slug === 'priya-sharma'
                      ? 'Personal Fitness Coach'
                      : 'Functional Training Coach'}
                  </p>

                  <p className="text-sm text-[#B6B6B6] leading-relaxed mb-4">
                    "{trainer.quote}"
                  </p>

                  <div className="pt-3 border-t border-[#262626] mb-5">
                    <p className="text-xs font-medium text-[#7a7a7a] uppercase tracking-wider mb-2">
                      Core Disciplines:
                    </p>
                    <div className="flex flex-wrap gap-1.5 text-xs text-[#cfcfcf]">
                      {trainer.specialtiesKey.map((spec, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-[#101010] border border-[#2b2b2b]">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => navigate('trainer-detail', trainer.slug)}
                    className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#C8FF00] flex items-center gap-1 transition-colors"
                  >
                    <span>Full Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openBookingModal(undefined, `Coach ${trainer.name}`)}
                    className="text-xs font-bold uppercase tracking-wider text-[#C8FF00] hover:text-white transition-colors"
                  >
                    Consultation
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
