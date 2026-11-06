import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const images = weddingData.gallery;

  const openLightbox = (img) => setSelected(img);
  const closeLightbox = () => setSelected(null);

  const goPrev = () => {
    if (!selected) return;
    const idx = images.findIndex((i) => i.id === selected.id);
    setSelected(images[(idx - 1 + images.length) % images.length]);
  };

  const goNext = () => {
    if (!selected) return;
    const idx = images.findIndex((i) => i.id === selected.id);
    setSelected(images[(idx + 1) % images.length]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selected) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected]);

  return (
    <section
      id="gallery"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #E8DFCA 0%, #F2ECD9 50%, #E8DFCA 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: '#8B6914', fontWeight: 700 }}>
            ✦ ألبوم الذكريات ✦
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 300,
              background: 'linear-gradient(135deg, #C9A84C, #F0D98C, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            لحظات من حكايتنا
          </h2>
          <div className="section-divider" />
          <p
            className="mt-6 font-medium max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C', fontStyle: 'italic', fontSize: 'clamp(1.15rem, 3vw, 1.35rem)' }}
          >
            لحظات عشناها سوا وهتفضل محفورة في قلوبنا طول العمر ❤️
          </p>
        </motion.div>

        {/* Gallery Grid - Responsive & Displays EVERY SINGLE PHOTO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {images.map((img, i) => {
            // Give the 1st photo and 7th photo a featured span on large screens for an aesthetic bento look
            const isFeatured = i === 0 || i === 6;

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
                onClick={() => openLightbox(img)}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  isFeatured ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                }`}
                style={{
                  minHeight: isFeatured ? '360px' : '220px',
                  maxHeight: isFeatured ? '500px' : '260px',
                  border: '1px solid rgba(201,168,76,0.4)',
                  boxShadow: '0 8px 25px -8px rgba(0,0,0,0.06)',
                }}
              >
                <img
                  src={img.placeholder}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Golden gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(201,168,76,0.15) 0%, rgba(0,0,0,0.45) 100%)',
                  }}
                />

                {/* Magnifier glass indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300"
                    style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(201,168,76,0.5)' }}
                  >
                    <span className="text-xl">🔍</span>
                  </div>
                </div>

                {/* Photo Tag */}
                <div
                  className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 text-xs sm:text-sm px-3 py-1 rounded-full font-semibold shadow-md pointer-events-none transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    color: '#8B6914',
                    border: '1px solid rgba(201,168,76,0.35)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  {img.alt}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center"
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] flex items-center justify-center"
                style={{ border: '2px solid rgba(201,168,76,0.5)' }}
              >
                <img
                  src={selected.placeholder}
                  alt={selected.alt}
                  className="w-auto h-auto max-h-[80vh] max-w-full object-contain block rounded-2xl"
                />
              </div>

              {/* Top Controls: Close & Counter */}
              <div className="absolute -top-12 left-0 right-0 flex items-center justify-between px-2 text-white">
                <span className="text-sm font-semibold tracking-wide text-neutral-300">
                  {images.findIndex((i) => i.id === selected.id) + 1} / {images.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg cursor-pointer bg-white/20 hover:bg-white/40 text-white transition-colors"
                  aria-label="إغلاق"
                >
                  ✕
                </button>
              </div>

              {/* Nav Arrows */}
              <button
                onClick={goPrev}
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-2xl cursor-pointer bg-white/80 hover:bg-white text-[#8B6914] shadow-xl hover:scale-110 transition-transform"
                aria-label="السابق"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-2xl cursor-pointer bg-white/80 hover:bg-white text-[#8B6914] shadow-xl hover:scale-110 transition-transform"
                aria-label="التالي"
              >
                ›
              </button>

              {/* Bottom Caption */}
              <div
                className="mt-4 text-sm sm:text-base px-6 py-2 rounded-full font-bold shadow-xl"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  color: '#8B6914',
                  border: '1px solid rgba(201,168,76,0.5)',
                }}
              >
                {selected.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
