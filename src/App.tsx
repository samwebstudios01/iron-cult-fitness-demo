import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWidgets } from './components/FloatingWidgets';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { TrainersPage } from './pages/TrainersPage';
import { TrainerDetailPage } from './pages/TrainerDetailPage';
import { MembershipPage } from './pages/MembershipPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { route } = useRouter();

  const renderCurrentPage = () => {
    switch (route.path) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'program-detail':
        return <ProgramDetailPage slug={route.param} />;
      case 'trainers':
        return <TrainersPage />;
      case 'trainer-detail':
        return <TrainerDetailPage slug={route.param} />;
      case 'membership':
        return <MembershipPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case '404':
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-[#F7F7F7] selection:bg-[#C8FF00] selection:text-[#101010]">
      <Header />
      <div className="flex-1">
        {renderCurrentPage()}
      </div>
      <Footer />
      <BookingModal />
      <FloatingWidgets />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </LanguageProvider>
  );
}
