import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { GYM_CONFIG } from '../data/gymData';
import { ShieldCheck, Dumbbell, Users, Target, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const { navigate, openBookingModal } = useRouter();

  const standards = [
    {
      title: "Biomechanics First",
      desc: "Every exercise is taught with proper spinal mechanics, bar paths, and joint angles to keep you progressing safely."
    },
    {
      title: "Commercial-Grade Steel",
      desc: "Competition power racks, calibrated plates, and precision bars built for heavy, uninterrupted performance."
    },
    {
      title: "Supportive Culture",
      desc: "A zero-ego room where newcomers and experienced athletes lift alongside each other with mutual respect."
    },
    {
      title: "Coaching That Cares",
      desc: "Trainers who learn your name, monitor your form, and hold you accountable to your personal milestones."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#101010] text-[#F7F7F7]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            ABOUT IRON CULT FITNESS
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            BUILT ON DISCIPLINE, <span className="text-[#C8FF00]">PURPOSE</span> & HARD STEEL.
          </h1>
          <p className="text-lg text-[#B6B6B6] leading-relaxed">
            Founded in Vaishali Nagar, Jaipur, IRON CULT FITNESS was conceived as an antidote to crowded, impersonal commercial gym chains. We set out to build a genuine training sanctuary where hard work, proper technique, and community pride come first.
          </p>
        </div>
      </div>

      {/* Hero Image Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="rounded-xl overflow-hidden border border-[#343434] relative aspect-[21/9] bg-[#181818] shadow-2xl">
          <img
            src={GYM_CONFIG.images.gymFloor}
            alt="Iron Cult gym interior floor"
            className="w-full h-full object-cover filter brightness-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
            <span className="text-xs font-mono text-[#C8FF00] tracking-wider uppercase">
              21 Fitness Avenue, Vaishali Nagar, Jaipur (302021)
            </span>
          </div>
        </div>
      </div>

      {/* Two Column Narrative: The Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-[#C8FF00] uppercase tracking-wider block mb-2">
              OUR FOUNDING PHILOSOPHY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white mb-6">
              STRENGTH IS FOR EVERYONE WHO COMMITS.
            </h2>
            <div className="space-y-4 text-base text-[#B6B6B6] leading-relaxed">
              <p>
                Too many fitness centers prioritize flash over fundamentals. At Iron Cult, we stripped away the distractions and focused entirely on what produces real, measurable progress: barbell fundamentals, structured progression, functional mobility, and qualified coaches who guide you every step.
              </p>
              <p>
                Whether you have never held a barbell in your life or you are preparing for your next strength competition, our facility is engineered to give you the space, equipment, and encouragement to push your limits safely.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="px-6 py-3 bg-[#C8FF00] hover:bg-[#d6ff33] text-[#101010] text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Experience It In Person
              </button>
              <button
                type="button"
                onClick={() => navigate('programs')}
                className="px-6 py-3 bg-[#181818] hover:bg-[#222222] border border-[#343434] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                View Training Disciplines
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#181818] border border-[#343434] hover:border-[#4a4a4a] transition-colors"
              >
                <div className="w-8 h-8 rounded bg-[#202020] text-[#C8FF00] flex items-center justify-center font-display font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#999999] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facility Highlights Strip */}
      <div className="bg-[#141414] border-y border-[#343434] py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
              EQUIPPED FOR SERIOUS PERFORMANCE
            </h3>
            <p className="text-xs sm:text-sm text-[#888888]">
              High-standard training zones built for durability and athlete safety.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded bg-[#181818] border border-[#2e2e2e]">
              <span className="font-display text-3xl font-bold text-[#C8FF00] block mb-1">6</span>
              <span className="text-xs uppercase tracking-wider text-[#B6B6B6]">Power Cages & Platforms</span>
            </div>
            <div className="p-5 rounded bg-[#181818] border border-[#2e2e2e]">
              <span className="font-display text-3xl font-bold text-[#C8FF00] block mb-1">25m</span>
              <span className="text-xs uppercase tracking-wider text-[#B6B6B6]">Sprint & Sled Turf Track</span>
            </div>
            <div className="p-5 rounded bg-[#181818] border border-[#2e2e2e]">
              <span className="font-display text-3xl font-bold text-[#C8FF00] block mb-1">50kg</span>
              <span className="text-xs uppercase tracking-wider text-[#B6B6B6]">Max Dumbbell Racks</span>
            </div>
            <div className="p-5 rounded bg-[#181818] border border-[#2e2e2e]">
              <span className="font-display text-3xl font-bold text-[#C8FF00] block mb-1">100%</span>
              <span className="text-xs uppercase tracking-wider text-[#B6B6B6]">Clean Air & Pure Filtered Water</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 rounded-xl bg-gradient-to-b from-[#181818] to-[#121212] border border-[#343434] shadow-2xl">
          <span className="text-xs font-mono text-[#C8FF00] uppercase tracking-wider block mb-2">
            STEP ONTO THE PLATFORM
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white mb-4">
            START YOUR JOURNEY WITH A COMPLIMENTARY TRIAL.
          </h3>
          <p className="text-sm text-[#B6B6B6] max-w-xl mx-auto mb-8">
            Experience the gym floor, tour our facilities, and speak with our coaches in Vaishali Nagar, Jaipur.
          </p>
          <button
            type="button"
            onClick={() => openBookingModal()}
            className="px-8 py-3.5 bg-[#C8FF00] hover:bg-[#d6ff33] text-[#101010] text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#C8FF00]/15"
          >
            <span>Book Free Trial Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
