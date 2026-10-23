import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { GYM_CONFIG } from '../data/gymData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const { navigate } = useRouter();

  const features = [
    {
      num: "01",
      title: t.about.feat1Title,
      desc: t.about.feat1Desc
    },
    {
      num: "02",
      title: t.about.feat2Title,
      desc: t.about.feat2Desc
    },
    {
      num: "03",
      title: t.about.feat3Title,
      desc: t.about.feat3Desc
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#101010] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Cinematic Imagery with subtle frame */}
          <div className="relative group">
            <div className="relative rounded-lg overflow-hidden border border-[#343434] bg-[#181818] aspect-[4/3] lg:aspect-[5/4] shadow-2xl">
              <img
                src={GYM_CONFIG.images.strengthRack}
                alt="Strength racks and Olympic barbells at Iron Cult"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Minimal overlay indicator */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#101010]/90 backdrop-blur-md rounded border border-[#343434] flex items-center justify-between text-xs">
                <span className="font-display font-semibold uppercase tracking-wider text-white">
                  VAISHALI NAGAR TRAINING FLOOR
                </span>
                <span className="text-[#C8FF00] font-mono">5:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Feature Blocks */}
          <div className="flex flex-col">
            <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
              {t.about.eyebrow}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F7F7F7] mb-6">
              {t.about.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#B6B6B6] leading-relaxed mb-4">
              {t.about.p1}
            </p>

            <p className="text-sm sm:text-base text-[#999999] leading-relaxed mb-8">
              {t.about.p2}
            </p>

            {/* 3 Feature Blocks */}
            <div className="space-y-4 mb-8">
              {features.map((feat) => (
                <div
                  key={feat.num}
                  className="p-4 rounded-md bg-[#181818] border border-[#343434] hover:border-[#444444] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-display text-[#C8FF00] font-bold text-lg shrink-0">
                      {feat.num}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-white mb-1">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#B6B6B6] leading-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Discover Button */}
            <div>
              <button
                type="button"
                onClick={() => navigate('about')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#101010] bg-[#C8FF00] hover:bg-[#d6ff33] px-6 py-3 rounded transition-colors"
              >
                <span>{t.about.discoverBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
