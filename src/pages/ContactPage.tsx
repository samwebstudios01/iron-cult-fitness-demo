import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { FAQSection } from '../components/FAQSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <ContactSection />
      <FAQSection />
    </div>
  );
};
