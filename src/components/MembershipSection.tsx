import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/gymData';
import { Check, HelpCircle, Sparkles, Shield, ArrowRight } from 'lucide-react';

export const MembershipSection: React.FC = () => {
  const { t } = useLanguage();
  const { openBookingModal } = useRouter();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // 15% discount on annual plan
  const ANNUAL_DISCOUNT = 0.15;

  const calculatePrice = (monthly: number) => {
    if (billingCycle === 'monthly') {
      return {
        displayRate: monthly,
        periodLabel: t.memberships.perMonth,
        billedNote: null
      };
    } else {
      const annualTotal = Math.round(monthly * 12 * (1 - ANNUAL_DISCOUNT));
      const monthlyEquivalent = Math.round(annualTotal / 12);
      return {
        displayRate: monthlyEquivalent,
        periodLabel: `${t.memberships.perMonth} (equiv.)`,
        billedNote: `${t.memberships.billedAnnually}${annualTotal.toLocaleString('en-IN')}`
      };
    }
  };

  const getPlanDesc = (planId: string) => {
    if (planId === 'starter') return t.memberships.starter.desc;
    if (planId === 'transform') return t.memberships.transform.desc;
    return t.memberships.elite.desc;
  };

  const getPlanCta = (planId: string) => {
    if (planId === 'starter') return t.memberships.ctaStarter;
    if (planId === 'transform') return t.memberships.ctaTransform;
    return t.memberships.ctaElite;
  };

  return (
    <section id="membership" className="py-20 lg:py-28 bg-[#141414] border-t border-[#343434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            {t.memberships.eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F7F7F7] mb-4">
            {t.memberships.heading}
          </h2>
          <p className="text-base text-[#B6B6B6] leading-relaxed mb-8">
            {t.memberships.subtitle}
          </p>

          {/* Monthly / Annual Billing Toggle (Interactive Segmented Control) */}
          <div className="inline-flex items-center p-1 bg-[#181818] border border-[#343434] rounded-lg">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap focus:outline-none ${
                billingCycle === 'monthly'
                  ? 'bg-[#C8FF00] text-[#101010] shadow'
                  : 'text-[#B6B6B6] hover:text-white'
              }`}
            >
              {t.memberships.monthlyBilling}
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 focus:outline-none ${
                billingCycle === 'annual'
                  ? 'bg-[#C8FF00] text-[#101010] shadow'
                  : 'text-[#B6B6B6] hover:text-white'
              }`}
            >
              <span>{t.memberships.annualBilling}</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                billingCycle === 'annual' ? 'bg-[#101010] text-[#C8FF00]' : 'bg-[#262626] text-[#C8FF00]'
              }`}>
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {MEMBERSHIP_PLANS.map((plan) => {
            const pricing = calculatePrice(plan.monthlyPrice);
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-xl bg-[#181818] border flex flex-col justify-between transition-all duration-300 p-8 shadow-xl ${
                  isPopular
                    ? 'border-[#C8FF00] ring-1 ring-[#C8FF00]/50 lg:-translate-y-2'
                    : 'border-[#343434] hover:border-[#4a4a4a]'
                }`}
              >
                {/* Popular Pill / Label */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#C8FF00] text-[#101010] px-4 py-0.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                    {t.memberships.popularBadge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B6B6B6] min-h-[40px] leading-relaxed">
                      {getPlanDesc(plan.id)}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-[#888888]">₹</span>
                      <span className="font-display text-4xl sm:text-5xl font-bold text-white tabular-nums">
                        {pricing.displayRate.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-[#888888] font-medium">
                        {pricing.periodLabel}
                      </span>
                    </div>

                    {pricing.billedNote && (
                      <p className="text-[11px] text-[#C8FF00] font-mono mt-1.5 font-medium">
                        {pricing.billedNote} / year
                      </p>
                    )}
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7a7a7a]">
                      What's Included:
                    </p>
                    {plan.inclusionsKey.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D1D1D1]">
                        <Check className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    type="button"
                    onClick={() => openBookingModal(undefined, plan.name)}
                    className={`w-full py-3.5 px-4 rounded text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 focus:outline-none ${
                      isPopular
                        ? 'bg-[#C8FF00] hover:bg-[#d6ff33] text-[#101010] shadow-md shadow-[#C8FF00]/10'
                        : 'bg-[#222222] hover:bg-[#2c2c2c] text-white border border-[#383838]'
                    }`}
                  >
                    <span>{getPlanCta(plan.id)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-[#707070] text-center mt-2">
                    Free 1-day demo trial included
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Pricing Disclaimer */}
        <div className="max-w-2xl mx-auto mb-16 p-3 bg-[#181818] border border-[#343434] rounded text-center text-xs text-[#8a8a8a]">
          <Shield className="w-4 h-4 text-[#C8FF00] inline-block mr-1.5 -mt-0.5" />
          <span>{t.memberships.tableDisclaimer}</span>
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="bg-[#181818] border border-[#343434] rounded-lg overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-[#343434]">
            <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
              {t.memberships.tableHeading}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#343434] bg-[#121212] text-[#B6B6B6]">
                  <th className="p-4 font-semibold uppercase tracking-wider">{t.memberships.colFeature}</th>
                  <th className="p-4 font-semibold uppercase tracking-wider text-center">STARTER</th>
                  <th className="p-4 font-semibold uppercase tracking-wider text-center text-[#C8FF00]">
                    TRANSFORM (POPULAR)
                  </th>
                  <th className="p-4 font-semibold uppercase tracking-wider text-center">ELITE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a2a] text-[#CCCCCC]">
                <tr>
                  <td className="p-4 font-medium text-white">{t.memberships.gymAccessLabel}</td>
                  <td className="p-4 text-center">Standard Hours</td>
                  <td className="p-4 text-center text-white font-medium">Standard + Priority</td>
                  <td className="p-4 text-center text-[#C8FF00] font-medium">All-Hours VIP</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">{t.memberships.equipmentLabel}</td>
                  <td className="p-4 text-center">Free Weights & Machines</td>
                  <td className="p-4 text-center text-white">All Zones + Turf Track</td>
                  <td className="p-4 text-center text-white">All Zones + Recovery Lounge</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">{t.memberships.assessmentLabel}</td>
                  <td className="p-4 text-center text-[#666666]">—</td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-[#C8FF00] mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-[#C8FF00] mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">{t.memberships.groupSessionsLabel}</td>
                  <td className="p-4 text-center text-[#666666]">—</td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-[#C8FF00] mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-[#C8FF00] mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">{t.memberships.ptConsultLabel}</td>
                  <td className="p-4 text-center text-[#666666]">—</td>
                  <td className="p-4 text-center text-[#666666]">—</td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-[#C8FF00] mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">{t.memberships.progressReviewLabel}</td>
                  <td className="p-4 text-center">Quarterly Self-Log</td>
                  <td className="p-4 text-center text-white">Monthly 1-on-1</td>
                  <td className="p-4 text-center text-[#C8FF00] font-medium">Bi-Weekly 1-on-1</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">{t.memberships.lockerLabel}</td>
                  <td className="p-4 text-center">Standard Locker</td>
                  <td className="p-4 text-center">Day Locker Reserved</td>
                  <td className="p-4 text-center text-white">Permanent Assigned</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">{t.memberships.guestPassesLabel}</td>
                  <td className="p-4 text-center text-[#666666]">0</td>
                  <td className="p-4 text-center font-mono">2 / month</td>
                  <td className="p-4 text-center font-mono text-[#C8FF00]">5 / month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
