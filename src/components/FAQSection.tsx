import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQS } from '../data/gymData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  const getFaqData = (id: string) => {
    switch (id) {
      case 'faq-1': return { q: t.faqs.q1, a: t.faqs.a1 };
      case 'faq-2': return { q: t.faqs.q2, a: t.faqs.a2 };
      case 'faq-3': return { q: t.faqs.q3, a: t.faqs.a3 };
      case 'faq-4': return { q: t.faqs.q4, a: t.faqs.a4 };
      case 'faq-5': return { q: t.faqs.q5, a: t.faqs.a5 };
      case 'faq-6': return { q: t.faqs.q6, a: t.faqs.a6 };
      case 'faq-7': return { q: t.faqs.q7, a: t.faqs.a7 };
      case 'faq-8':
      default: return { q: t.faqs.q8, a: t.faqs.a8 };
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#141414] border-t border-[#343434]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            {t.faqs.eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F7F7F7] mb-4">
            {t.faqs.heading}
          </h2>
          <p className="text-base text-[#B6B6B6]">
            {t.faqs.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const data = getFaqData(item.id);
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className="rounded-lg bg-[#181818] border border-[#343434] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF00]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-display text-base sm:text-lg font-bold uppercase tracking-wide text-white">
                    {data.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded bg-[#202020] flex items-center justify-center text-[#C8FF00] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C8FF00] text-[#101010]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 pb-5 pt-1 text-sm text-[#B6B6B6] leading-relaxed border-t border-[#252525]"
                  >
                    {data.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
