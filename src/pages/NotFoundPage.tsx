import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-24 pb-20 bg-[#101010] text-[#F7F7F7] px-4">
      <div className="max-w-md w-full text-center p-8 rounded-xl bg-[#181818] border border-[#343434] shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#202020] text-[#C8FF00] border border-[#343434] flex items-center justify-center mx-auto mb-6">
          <Dumbbell className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs text-[#C8FF00] uppercase tracking-wider block mb-2">
          PAGE NOT FOUND · ERROR 404
        </span>

        <h1 className="font-display text-4xl font-bold uppercase text-white mb-3">
          WRONG PLATFORM.
        </h1>

        <p className="text-sm text-[#B6B6B6] leading-relaxed mb-8">
          The workout page or route you are looking for does not exist or has been moved to another section.
        </p>

        <button
          type="button"
          onClick={() => navigate('home')}
          className="w-full py-3.5 px-4 bg-[#C8FF00] hover:bg-[#d6ff33] text-[#101010] text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
