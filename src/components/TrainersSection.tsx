import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { TRAINERS, TrainerItem } from '../data/gymData';
import { ArrowUpRight, Award, Sparkles } from 'lucide-react';

export const TrainersSection: React.FC = () => {
  const { t } = useLanguage();
  const { navigate, openBookingModal } = useRouter();

  const getTrainerData = (trainer: TrainerItem) => {
    switch (trainer.slug) {
      case 'arjun-mehta':
        return {
          role: t.trainers.arjun.role,
          bio: t.trainers.arjun.bio,
          philosophy: t.trainers.arjun.philosophy
        };
      case 'priya-sharma':
        return {
          role: t.trainers.priya.role,
          bio: t.trainers.priya.bio,
          philosophy: t.trainers.priya.philosophy
        };
      case 'rohan-verma':
      default:
        return {
          role: t.trainers.rohan.role,
          bio: t.trainers.rohan.bio,
          philosophy: t.trainers.rohan.philosophy
        };
    }
  };

  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[#101010] border-t border-[#343434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            {t.trainers.eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F7F7F7] mb-4">
            {t.trainers.heading}
          </h2>
          <p className="text-base text-[#B6B6B6] leading-relaxed mb-3">
            {t.trainers.subtitle}
          </p>
          <p className="text-xs text-[#808080] italic">
            {t.trainers.disclaimerNote}
          </p>
        </div>

        {/* 3 Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => {
            const data = getTrainerData(trainer);
            return (
              <div
                key={trainer.id}
                className="group flex flex-col bg-[#181818] border border-[#343434] hover:border-[#4d4d4d] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                {/* Portrait Photography with Aspect 4/5 */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#202020]">
                  <img
                    src={trainer.image}
                    alt={`${trainer.name} - ${data.role}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent pointer-events-none" />

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 bg-[#101010]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#343434] text-xs font-mono text-[#C8FF00] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{trainer.experienceYears} {t.trainers.yearsExp}</span>
                  </div>
                </div>

                {/* Trainer Information */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#C8FF00] transition-colors mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C8FF00] mb-4">
                      {data.role}
                    </p>

                    <p className="text-sm text-[#B6B6B6] leading-relaxed mb-5">
                      {data.bio}
                    </p>

                    {/* Specialties (Clean unboxed tags) */}
                    <div className="mb-6 pt-3 border-t border-[#262626]">
                      <p className="text-xs font-medium text-[#7a7a7a] uppercase tracking-wider mb-2">
                        {t.trainers.specialties}
                      </p>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#cfcfcf]">
                        {trainer.specialtiesKey.map((spec, i) => (
                          <span key={i} className="flex items-center gap-1.5">
                            <span>{spec}</span>
                            {i < trainer.specialtiesKey.length - 1 && (
                              <span className="text-[#555555]" aria-hidden="true">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => navigate('trainer-detail', trainer.slug)}
                      className="text-xs font-bold uppercase tracking-wider text-[#F7F7F7] hover:text-[#C8FF00] transition-colors flex items-center gap-1 focus:outline-none"
                    >
                      <span>{t.trainers.viewProfile}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => openBookingModal(undefined, `Coach ${trainer.name}`)}
                      className="text-xs text-[#C8FF00] hover:text-white transition-colors uppercase tracking-wider font-semibold focus:outline-none"
                    >
                      Consultation
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
