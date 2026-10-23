import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS } from '../data/gymData';
import { Quote, AlertCircle, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-[#101010] border-t border-[#343434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            {t.testimonials.eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F7F7F7] mb-4">
            {t.testimonials.heading}
          </h2>

          {/* Explicit Demonstration Label (Mandatory Compliance) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#343434] rounded text-xs text-[#C8FF00] font-mono">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{t.testimonials.demoBadge}</span>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-lg bg-[#181818] border border-[#343434] flex flex-col justify-between hover:border-[#4a4a4a] transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-[#C8FF00] mb-4 opacity-70" />

                <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>

                <div className="text-xs font-semibold text-[#C8FF00] mb-4">
                  {item.highlight}
                </div>
              </div>

              <div className="pt-4 border-t border-[#262626]">
                <h4 className="font-display text-base font-bold uppercase text-white tracking-wide">
                  {item.name}
                </h4>
                <p className="text-xs text-[#8e8e8e]">
                  {item.role}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-[#707070] mt-1">
                  <MapPin className="w-3 h-3 text-[#C8FF00]" />
                  <span>{item.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.program}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#666666] max-w-xl mx-auto">
          {t.testimonials.disclaimer}
        </p>
      </div>
    </section>
  );
};
