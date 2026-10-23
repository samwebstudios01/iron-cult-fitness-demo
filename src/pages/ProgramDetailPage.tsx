import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { PROGRAMS } from '../data/gymData';
import { ArrowLeft, Clock, Gauge, Target, Calendar, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  slug?: string;
}

export const ProgramDetailPage: React.FC<Props> = ({ slug }) => {
  const { t } = useLanguage();
  const { navigate, openBookingModal } = useRouter();

  const program = PROGRAMS.find(p => p.slug === slug) || PROGRAMS[0];

  return (
    <div className="pt-24 pb-20 bg-[#101010] text-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <button
          type="button"
          onClick={() => navigate('programs')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B6B6B6] hover:text-[#C8FF00] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Programs</span>
        </button>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-mono text-[#C8FF00] mb-3">
              <span className="bg-[#181818] border border-[#343434] px-2.5 py-1 rounded">
                {program.tag}
              </span>
              <span className="flex items-center gap-1 text-[#8e8e8e]">
                <Clock className="w-3.5 h-3.5 text-[#C8FF00]" />
                {program.duration}
              </span>
              <span className="flex items-center gap-1 text-[#8e8e8e]">
                <Gauge className="w-3.5 h-3.5 text-[#C8FF00]" />
                {program.intensity}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              {program.tag}
            </h1>

            <p className="text-base sm:text-lg text-[#B6B6B6] leading-relaxed mb-6">
              A structured curriculum built for measurable physical adaptations. Our certified coaching staff coaches every workout so you maximize performance while safeguarding joint health.
            </p>

            <div className="p-4 rounded-lg bg-[#181818] border border-[#343434] mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-white block mb-1">
                {t.programs.suitableFor}:
              </span>
              <p className="text-xs sm:text-sm text-[#999999]">
                Lifters and newcomers seeking structured progression, form mastery, and disciplined physical habits.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openBookingModal(program.tag)}
              className="px-8 py-3.5 bg-[#C8FF00] hover:bg-[#d6ff33] text-[#101010] text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#C8FF00]/15"
            >
              <span>{t.programs.bookForThis}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-[#343434] bg-[#181818] aspect-[4/3] shadow-2xl">
              <img
                src={program.image}
                alt={program.tag}
                className="w-full h-full object-cover filter brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* What a Session Involves & Weekly Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Session Inclusions */}
          <div className="p-8 rounded-xl bg-[#181818] border border-[#343434]">
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#C8FF00]" />
              <span>{t.programs.whatInvolves}</span>
            </h3>
            <div className="space-y-4">
              {program.sessionFocus.map((focus, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#B6B6B6] leading-relaxed">
                    {focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Schedule Breakdown */}
          <div className="p-8 rounded-xl bg-[#181818] border border-[#343434]">
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#C8FF00]" />
              <span>{t.programs.weeklySchedule}</span>
            </h3>
            <div className="space-y-4">
              {program.weeklyStructure.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded bg-[#121212] border border-[#262626] flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-bold text-[#C8FF00] shrink-0 uppercase">
                    {item.day}
                  </span>
                  <span className="text-xs sm:text-sm text-[#D1D1D1] text-right">
                    {item.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Program Specific FAQs */}
        {program.faqs && program.faqs.length > 0 && (
          <div className="max-w-3xl mx-auto p-8 rounded-xl bg-[#181818] border border-[#343434]">
            <h3 className="font-display text-xl font-bold uppercase text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#C8FF00]" />
              <span>Program FAQ</span>
            </h3>
            <div className="space-y-4 divide-y divide-[#262626]">
              {program.faqs.map((faq, i) => (
                <div key={i} className={i > 0 ? 'pt-4' : ''}>
                  <p className="text-sm font-semibold text-white mb-1">
                    {faq.q}
                  </p>
                  <p className="text-xs sm:text-sm text-[#B6B6B6] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
