import React from 'react';
import { motion } from 'framer-motion';

const QuoteBanner = ({ text, subtext, highlight }) => (
  <div className="relative py-12 sm:py-16 overflow-hidden">
    <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
      >
        {/* Subtle ornamental ornament */}
        <div className="flex items-center justify-center gap-3 mb-5 opacity-70">
          <div className="h-px w-12 sm:w-24" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
          <span className="text-sm" style={{ color: '#C9A84C' }}>✦</span>
          <span className="text-sm" style={{ color: '#8B6914' }}>♥</span>
          <span className="text-sm" style={{ color: '#C9A84C' }}>✦</span>
          <div className="h-px w-12 sm:w-24" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
        </div>

        {/* The Quote */}
        <p
          className="leading-relaxed font-medium mx-auto max-w-2xl"
          style={{
            fontFamily: "'Amiri', serif",
            color: '#2C2C2C',
            fontStyle: 'italic',
            fontSize: 'clamp(1.25rem, 3.2vw, 1.85rem)',
            textShadow: '0 2px 20px rgba(201,168,76,0.12)',
          }}
        >
          "{text}"
        </p>

        {subtext && (
          <p
            className="text-xs sm:text-sm mt-3 tracking-widest font-bold uppercase"
            style={{ fontFamily: "'Cairo', sans-serif", color: '#8B6914' }}
          >
            {subtext}
          </p>
        )}
      </motion.div>
    </div>
  </div>
);

export default QuoteBanner;
