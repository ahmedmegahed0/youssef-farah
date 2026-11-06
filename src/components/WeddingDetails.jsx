import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import FloralCorner from './FloralCorner';

const DetailCard = ({ icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ scale: 1.02, y: -4 }}
    className="flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl relative group overflow-hidden"
    style={{
      background: 'rgba(255, 255, 255, 0.75)',
      border: '1px solid rgba(255, 255, 255, 0.9)',
      boxShadow: '0 15px 35px -10px rgba(191,162,103,0.12), 0 0 0 1px rgba(191,162,103,0.15)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      minHeight: '260px',
    }}
  >
    {/* Inner decorative frame line */}
    <div className="absolute inset-3 rounded-2xl border border-dashed border-[#BFA267]/25 pointer-events-none transition-all duration-500 group-hover:border-[#BFA267]/50 group-hover:scale-[0.98]" />

    {/* Hover glow */}
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      style={{ background: 'radial-gradient(circle at 50% 0%, rgba(191,162,103,0.12) 0%, transparent 70%)' }} />

    {/* Floral corners */}
    <FloralCorner position="top-right" className="opacity-30 group-hover:opacity-80 transition-opacity duration-700" />
    <FloralCorner position="bottom-left" className="opacity-30 group-hover:opacity-80 transition-opacity duration-700" />

    {/* Content Wrapper */}
    <div className="relative z-10 flex flex-col items-center w-full h-full justify-center mt-2">
        {/* Icon Seal */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl relative flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
          style={{ 
            background: 'linear-gradient(135deg, rgba(191,162,103,0.15), rgba(232,213,163,0.25))', 
            border: '1px solid rgba(191,162,103,0.4)',
            boxShadow: '0 0 20px rgba(191,162,103,0.1), inset 0 0 10px rgba(191,162,103,0.1)'
          }}>
          <div className="absolute inset-1 rounded-full border border-dotted border-[#BFA267]/40 animate-[spin_24s_linear_infinite]" />
          {icon}
        </div>

        <span className="text-sm uppercase tracking-[0.25em] mb-3 block" style={{ color: '#7A602B', fontWeight: '700' }}>{label}</span>
        
        {/* Tiny divider */}
        <div className="w-8 h-px mb-4 bg-gradient-to-r from-transparent via-[#BFA267]/50 to-transparent" />

        <div className="text-xl sm:text-2xl md:text-3xl leading-snug font-medium"
          style={{ fontFamily: "'Amiri', serif", color: '#222222' }}>
          {value}
        </div>
    </div>
  </motion.div>
);

const WeddingDetails = () => {
  const cards = [
    { icon: '📅', label: 'الفرح',     value: weddingData.event.dateFormatted, delay: 0 },
    { icon: '🕗', label: 'الساعة',     value: weddingData.event.time,          delay: 0.12 },
    { icon: '📍', label: 'المكان',    value: weddingData.event.venue,         delay: 0.24 },
    ...(weddingData.hennaEvent ? [{ icon: '🌿', label: 'يوم الحنة', value: `${weddingData.hennaEvent.dateFormatted} — ${weddingData.hennaEvent.venue}`, delay: 0.36 }] : []),
  ];

  return (
    <section
      id="details"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF9F5 0%, #F3EFE8 50%, #FAF9F5 100%)' }}
    >
      {/* Top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(191,162,103,0.35), transparent)' }} />

      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(191,162,103,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 sm:mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: '#7A602B', fontWeight: 700 }}>
            ✦ مستنيينكم تنورونا ✦
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 300,
              background: 'linear-gradient(135deg, #7A602B, #BFA267, #E8D5A3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ليلة العمر
          </h2>
          <div className="section-divider" />
          <p className="mt-6 max-w-xl mx-auto leading-relaxed font-medium"
            style={{ fontFamily: "'Amiri', serif", color: '#444444', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 1.4rem)' }}>
            بكل حب وفرحة، بنعزمكم تشاركونا أجمل ليلة في حياتنا وتكملوا فرحتنا
          </p>
        </motion.div>

        {/* Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${weddingData.hennaEvent ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 sm:gap-8 mb-16`}>
          {cards.map((card, i) => <DetailCard key={i} {...card} />)}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(191,162,103,0.25))' }} />
          <span className="text-xl" style={{ color: 'rgba(191,162,103,0.45)' }}>✦</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(191,162,103,0.25), transparent)' }} />
        </div>

        {/* Quote + map button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-10 max-w-lg mx-auto leading-relaxed font-medium"
            style={{ fontFamily: "'Amiri', serif", color: '#333333', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 1.4rem)' }}>
            "وجودكم معانا هو أحلى هدية ممكن نتمناها في الليلة دي."
          </p>
          <motion.a
            href={weddingData.event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold text-base sm:text-lg px-10 py-4 rounded-full inline-block font-bold tracking-wider"
          >
            افتح اللوكيشن على الخريطة 📍
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(191,162,103,0.35), transparent)' }} />
    </section>
  );
};

export default WeddingDetails;
