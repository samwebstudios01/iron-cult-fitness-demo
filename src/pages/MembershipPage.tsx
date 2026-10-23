import React from 'react';
import { MembershipSection } from '../components/MembershipSection';
import { FAQSection } from '../components/FAQSection';

export const MembershipPage: React.FC = () => {
  return (
    <div className="pt-20">
      <MembershipSection />
      <FAQSection />
    </div>
  );
};
