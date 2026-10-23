import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeatureStrip } from '../components/FeatureStrip';
import { AboutSection } from '../components/AboutSection';
import { ProgramsSection } from '../components/ProgramsSection';
import { TrainersSection } from '../components/TrainersSection';
import { MembershipSection } from '../components/MembershipSection';
import { ResultsProgressSection } from '../components/ResultsProgressSection';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeatureStrip />
      <AboutSection />
      <ProgramsSection />
      <TrainersSection />
      <MembershipSection />
      <ResultsProgressSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};
