import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_ITEMS, GalleryItem } from '../data/gymData';
import { X, ChevronLeft, ChevronRight, Maximize2, Filter } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'strength' | 'functional' | 'facility' | 'coaching'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [selectedImageIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleCloseLightbox, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#141414] border-t border-[#343434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
              {t.gallery.eyebrow}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F7F7F7] mb-3">
              {t.gallery.heading}
            </h2>
            <p className="text-base text-[#B6B6B6]">
              {t.gallery.subtitle}
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#181818] border border-[#343434] rounded-lg self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#C8FF00] text-[#101010]'
                  : 'text-[#B6B6B6] hover:text-white'
              }`}
            >
              {t.gallery.all}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('strength')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeCategory === 'strength'
                  ? 'bg-[#C8FF00] text-[#101010]'
                  : 'text-[#B6B6B6] hover:text-white'
              }`}
            >
              {t.gallery.strength}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('functional')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeCategory === 'functional'
                  ? 'bg-[#C8FF00] text-[#101010]'
                  : 'text-[#B6B6B6] hover:text-white'
              }`}
            >
              {t.gallery.functional}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('coaching')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeCategory === 'coaching'
                  ? 'bg-[#C8FF00] text-[#101010]'
                  : 'text-[#B6B6B6] hover:text-white'
              }`}
            >
              {t.gallery.coaching}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('facility')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeCategory === 'facility'
                  ? 'bg-[#C8FF00] text-[#101010]'
                  : 'text-[#B6B6B6] hover:text-white'
              }`}
            >
              {t.gallery.facility}
            </button>
          </div>
        </div>

        {/* Gallery Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-lg overflow-hidden bg-[#181818] border border-[#343434] hover:border-[#C8FF00] cursor-pointer transition-all duration-300 aspect-[4/3] shadow-md"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpenLightbox(idx);
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <p className="font-display text-sm font-bold uppercase text-white tracking-wide">
                  {item.title}
                </p>
                <p className="text-[11px] text-[#C8FF00] uppercase font-mono mt-0.5">
                  Click to Expand
                </p>
              </div>

              <div className="absolute top-2 right-2 p-1.5 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={handleCloseLightbox}
        >
          {/* Top Bar with counter & close */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
            <span className="font-mono text-xs sm:text-sm text-[#C8FF00]">
              {selectedImageIndex + 1} / {filteredItems.length}
            </span>
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="p-2 rounded-full bg-[#1e1e1e] hover:bg-[#2e2e2e] text-[#F7F7F7] hover:text-[#C8FF00] transition-colors focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-[#181818]/80 hover:bg-[#282828] text-white hover:text-[#C8FF00] border border-[#343434] transition-all z-10 focus:outline-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-[#181818]/80 hover:bg-[#282828] text-white hover:text-[#C8FF00] border border-[#343434] transition-all z-10 focus:outline-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Central Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[72vh] max-w-full object-contain rounded border border-[#343434] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <h4 className="font-display text-lg font-bold uppercase text-white tracking-wider">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#B6B6B6] max-w-xl mx-auto mt-1">
                {filteredItems[selectedImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
