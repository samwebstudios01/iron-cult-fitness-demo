import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Compass, Flame } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    { text: t.strip.item1, icon: Target },
    { text: t.strip.item2, icon: Compass },
    { text: t.strip.item3, icon: Flame }
  ];

  return (
    <div id="feature-strip" className="border-y border-[#343434] bg-[#141414] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#343434]">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="py-3 md:py-2 px-4 flex items-center justify-center gap-3 text-center"
              >
                <Icon className="w-4 h-4 text-[#C8FF00] shrink-0" />
                <span className="font-display text-base sm:text-lg font-bold tracking-wider uppercase text-[#F7F7F7]">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
