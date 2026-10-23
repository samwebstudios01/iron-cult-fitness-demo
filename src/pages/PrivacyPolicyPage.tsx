import React from 'react';
import { useRouter } from '../context/RouterContext';
import { GYM_CONFIG } from '../data/gymData';
import { ArrowLeft, Shield } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
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
          <Shield className="w-4 h-4 inline-block mr-2 -mt-0.5" />
          DEMONSTRATION PRIVACY POLICY TEMPLATE — TO BE CUSTOMIZED PRIOR TO COMMERCIAL LAUNCH.
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white mb-4">
          PRIVACY POLICY
        </h1>
        <p className="text-xs text-[#707070] mb-8">
          Last Updated: October 2026 · IRON CULT FITNESS (Vaishali Nagar, Jaipur)
        </p>

        <div className="space-y-6 text-sm text-[#B6B6B6] leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              1. Demonstration Overview
            </h2>
            <p>
              This website serves as an interactive demonstration template for {GYM_CONFIG.name}. In this demonstration preview, any trial session bookings or enquiry messages submitted through our frontend forms are handled client-side or logged in memory for illustrative purposes. No sensitive payment records or permanent customer dossiers are retained on external servers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              2. Information Collected
            </h2>
            <p>
              In a commercial implementation, {GYM_CONFIG.name} may collect the following information when you interact with our website or physical facility:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
              <li>Contact details: Name, phone number, email address.</li>
              <li>Booking preferences: Preferred trial dates, time slots, training goals.</li>
              <li>Fitness baseline: General exercise history and physical considerations provided voluntarily.</li>
              <li>Local preferences: Preferred language of communication (English, Hindi, or Hinglish).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              3. Purpose of Processing
            </h2>
            <p>
              Any prospective member information is utilized strictly to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
              <li>Coordinate and confirm complimentary workout trials and facility orientations.</li>
              <li>Provide membership pricing explanations and answer facility questions via WhatsApp or phone call.</li>
              <li>Maintain safe coach-to-member ratios on the gym floor.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              4. Cookies and Local Storage
            </h2>
            <p>
              This website uses standard browser <code className="text-[#C8FF00]">localStorage</code> exclusively to persist your language preference (English, Hindi, or Hinglish) across sessions. We do not deploy invasive third-party ad retargeting trackers or cross-site tracking scripts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
              5. Contact Information
            </h2>
            <p>
              For privacy enquiries or to update your contact preferences, you may reach the management at:
            </p>
            <div className="mt-2 p-4 rounded bg-[#181818] border border-[#2b2b2b] text-xs space-y-1 font-mono">
              <p>Email: {GYM_CONFIG.contact.email}</p>
              <p>Phone: {GYM_CONFIG.contact.phone}</p>
              <p>Address: {GYM_CONFIG.location.fullAddress}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
