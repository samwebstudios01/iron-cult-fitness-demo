import React from 'react';
import { useRouter } from '../context/RouterContext';
import { GYM_CONFIG } from '../data/gymData';
import { ArrowLeft, FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-24 pb-20 bg-[#101010] text-[#F7F7F7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B6B6B6] hover:text-[#C8FF00] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="p-4 rounded bg-[#181818] border border-[#343434] mb-8 text-xs text-[#C8FF00] font-mono">
          <FileText className="w-4 h-4 inline-block mr-2 -mt-0.5" />
          DEMONSTRATION TERMS & CONDITIONS TEMPLATE — FOR GYM OPERATOR REVIEW.
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white mb-4">
          TERMS AND CONDITIONS
        </h1>
        <p className="text-xs text-[#707070] mb-8">
          Last Updated: October 2026 · IRON CULT FITNESS (Vaishali Nagar, Jaipur)
        </p>

        <div className="space-y-6 text-sm text-[#B6B6B6] leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              1. Demo Website Acceptance
            </h2>
            <p>
              By accessing this website, you acknowledge that this is a technical and visual concept demonstration designed for fitness club operators. Information presented regarding equipment, pricing tiers, coach assignments, and schedules is illustrative and subject to final formal agreement with the gym management.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              2. Free Trial Session Guidelines
            </h2>
            <p>
              Prospective members booking a complimentary demonstration trial session must adhere to standard facility safety guidelines:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
              <li>Clean, closed-toe athletic training footwear is mandatory across all free-weight and turf areas.</li>
              <li>A personal sweat towel must be used on benches and equipment cushions.</li>
              <li>Lifters must re-rack dumbbells, plates, and barbells upon completion of their sets.</li>
              <li>First-time visitors must complete a brief physical readiness orientation before lifting heavy loads.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              3. Illustrative Pricing & Inclusions
            </h2>
            <p>
              Demonstration fees displayed (Starter ₹999/month, Transform ₹1,799/month, Elite ₹2,999/month, with optional 15% annual discount) represent sample market rates for the Jaipur fitness sector. Actual membership packages, payment terms, and cancellation policies must be verified directly with the gym administration prior to transaction.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              4. Health and Safety Disclaimer
            </h2>
            <p>
              Strength and conditioning exercise involves inherent physical exertion. Visitors and members are advised to consult a qualified medical professional prior to commencing high-intensity resistance training. IRON CULT FITNESS coaches provide exercise guidance but do not provide medical diagnosis or physiotherapy treatment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              5. Governing Law
            </h2>
            <p>
              Any disputes or inquiries arising from facility operations shall be subject to the jurisdiction of the courts of Jaipur, Rajasthan, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
