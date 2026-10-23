import React, { createContext, useContext, useState, useEffect } from 'react';

export type RoutePath =
  | 'home'
  | 'about'
  | 'programs'
  | 'program-detail'
  | 'trainers'
  | 'trainer-detail'
  | 'membership'
  | 'gallery'
  | 'contact'
  | 'privacy'
  | 'terms'
  | '404';

interface RouteState {
  path: RoutePath;
  param?: string; // e.g. program slug or trainer slug
}

interface RouterContextType {
  route: RouteState;
  navigate: (path: RoutePath, param?: string, hashSection?: string) => void;
  openBookingModal: (initialProgram?: string, initialPlan?: string) => void;
  closeBookingModal: () => void;
  isBookingOpen: boolean;
  bookingInitialProgram?: string;
  bookingInitialPlan?: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parseHash(hash: string): RouteState {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (!clean || clean === '') {
    return { path: 'home' };
  }

  const parts = clean.split('/');
  const base = parts[0].toLowerCase();
  const param = parts[1];

  switch (base) {
    case '':
    case 'home':
      return { path: 'home' };
    case 'about':
      return { path: 'about' };
    case 'programs':
      if (param) {
        return { path: 'program-detail', param };
      }
      return { path: 'programs' };
    case 'trainers':
      if (param) {
        return { path: 'trainer-detail', param };
      }
      return { path: 'trainers' };
    case 'membership':
    case 'memberships':
    case 'pricing':
      return { path: 'membership' };
    case 'gallery':
      return { path: 'gallery' };
    case 'contact':
      return { path: 'contact' };
    case 'privacy':
    case 'privacy-policy':
      return { path: 'privacy' };
    case 'terms':
    case 'terms-conditions':
      return { path: 'terms' };
    default:
      return { path: '404' };
  }
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<RouteState>(() => parseHash(window.location.hash));
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialProgram, setBookingInitialProgram] = useState<string | undefined>();
  const [bookingInitialPlan, setBookingInitialPlan] = useState<string | undefined>();

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: RoutePath, param?: string, hashSection?: string) => {
    let newHash = '';
    if (path === 'home') {
      newHash = hashSection ? `#${hashSection}` : '#/';
    } else if (path === 'program-detail' && param) {
      newHash = `#/programs/${param}`;
    } else if (path === 'trainer-detail' && param) {
      newHash = `#/trainers/${param}`;
    } else if (path === 'programs') {
      newHash = '#/programs';
    } else if (path === 'trainers') {
      newHash = '#/trainers';
    } else {
      newHash = `#/${path}`;
    }

    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    } else {
      // If same hash, re-set state and scroll
      setRoute({ path, param });
      if (hashSection) {
        const el = document.getElementById(hashSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openBookingModal = (initialProgram?: string, initialPlan?: string) => {
    setBookingInitialProgram(initialProgram);
    setBookingInitialPlan(initialPlan);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setBookingInitialProgram(undefined);
    setBookingInitialPlan(undefined);
  };

  return (
    <RouterContext.Provider
      value={{
        route,
        navigate,
        openBookingModal,
        closeBookingModal,
        isBookingOpen,
        bookingInitialProgram,
        bookingInitialPlan
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
