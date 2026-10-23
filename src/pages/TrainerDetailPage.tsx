import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { TRAINERS } from '../data/gymData';
import { ArrowLeft, Award, CheckCircle2, Clock, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

interface Props {
  slug?: string;
}

export const TrainerDetailPage: React.FC<Props> = ({ slug }) => {
  const { t } = useLanguage();
  const { navigate, openBookingModal } = useRouter();

  const trainer = TRAINERS.find(tr => tr.slug === slug) || TRAINERS[0];

  return (
    <div className="pt-24 pb-20 bg-[#101010] text-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          type="button"
          onClick={() => navigate('trainers')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B6B6B6] hover:text-[#C8FF00] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Coaches</span>
        </button>

        {/* Profile Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-[#343434] bg-[#181818] aspect-[4/5] shadow-2xl relative">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover object-top filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#101010]/90 backdrop-blur-md rounded border border-[#343434] flex items-center justify-between text-xs">
                <span className="font-mono text-[#C8FF00] font-semibold">
                  {trainer.experienceYears} Years Certified Experience
                </span>
                <span className="text-[#888888]">Vaishali Nagar, Jaipur</span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 bg-[#181818] border border-[#343434] text-[#C8FF00] text-xs font-mono rounded mb-3">
              DEMONSTRATION COACH PROFILE
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-2">
              {trainer.name}
            </h1>

            <p className="text-base font-semibold uppercase tracking-wider text-[#C8FF00] mb-6">
              {trainer.slug === 'arjun-mehta'
                ? 'Strength & Conditioning Coach'
                : trainer.slug === 'priya-sharma'
                ? 'Personal Fitness Coach'
                : 'Functional Training Coach'}
            </p>

            <blockquote className="border-l-2 border-[#C8FF00] pl-4 py-1 text-lg text-white italic mb-8">
              "{trainer.quote}"
            </blockquote>

            <div className="space-y-6 mb-8 text-sm sm:text-base text-[#B6B6B6] leading-relaxed">
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                  Coaching Philosophy & Approach
                </h3>
                <p>
                  At Iron Cult, training is never about mindless exhaustion. Coach {trainer.name} emphasizes proper mechanical leverage, movement efficiency, and measurable adaptations over random fatigue. Every athlete receives individual form assessments and structured progression markers.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                  Primary Specializations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {trainer.specialtiesKey.map((spec, i) => (
                    <div key={i} className="p-3 rounded bg-[#181818] border border-[#2b2b2b] flex items-center gap-2.5 text-xs font-medium text-white">
                      <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                  Session Availability (Demonstration Schedule)
                </h3>
                <div className="p-4 rounded-lg bg-[#181818] border border-[#343434] text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#888888]">Morning Coaching Slots:</span>
                    <span className="text-white font-mono">6:00 AM – 10:00 AM (Mon – Sat)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#888888]">Evening Coaching Slots:</span>
                    <span className="text-white font-mono">5:00 PM – 9:00 PM (Mon – Sat)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openBookingModal(undefined, `Coach ${trainer.name}`)}
                className="px-8 py-3.5 bg-[#C8FF00] hover:bg-[#d6ff33] text-[#101010] text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#C8FF00]/15"
              >
                <span>Book Consultation with Coach</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('contact')}
                className="px-6 py-3.5 bg-[#181818] hover:bg-[#222222] border border-[#343434] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-colors"
              >
                Enquire via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
