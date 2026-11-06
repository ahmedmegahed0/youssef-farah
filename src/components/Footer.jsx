import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const Footer = () => (
  <footer
    className="relative py-24 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #FAF9F5 0%, #F0EBE1 100%)', borderTop: '1px solid rgba(191,162,103,0.2)' }}
  >
    <div className="absolute inset-0"
      style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(191,162,103,0.04) 0%, transparent 70%)' }} />

    <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
      {/* Ornamental divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center gap-4 mb-12"
      >
        <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(191,162,103,0.35))' }} />
        <span className="text-xl" style={{ color: '#BFA267' }}>✦</span>
        <span className="text-xs uppercase tracking-[0.3em]" style={{ color: '#7A602B' }}>أجمل ليلة في العمر</span>
        <span className="text-xl" style={{ color: '#BFA267' }}>✦</span>
        <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(191,162,103,0.35), transparent)' }} />
      </motion.div>

      {/* Couple names */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mb-5"
        style={{
          fontFamily: "'Amiri', serif",
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 300,
          background: 'linear-gradient(135deg, #7A602B 0%, #BFA267 30%, #E8D5A3 50%, #BFA267 70%, #7A602B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {weddingData.coupleNames}
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mb-10 leading-relaxed font-medium"
        style={{ fontFamily: "'Amiri', serif", color: '#444444', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}
      >
        "حكايتنا بدأت — ونفسنا تبقوا معانا عشان تكمل"
      </motion.p>

      {/* Date */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="inline-flex items-center gap-3 px-6 py-2 rounded-full mb-12 shadow-sm"
        style={{ border: '1px solid rgba(191,162,103,0.25)', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)' }}
      >
        <span className="text-base font-semibold" style={{ color: '#7A602B' }}>{weddingData.event.dateFormatted}</span>
      </motion.div>

      {/* Heart & Ad */}
      <div>
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-4xl mb-12"
          style={{ color: 'rgba(191,162,103,0.45)' }}
        >
          ♥
        </motion.div>
        
        {/* Ad / Contact Card */}
        <div 
          className="mt-8 p-8 sm:p-9 rounded-3xl mx-auto max-w-lg relative group" 
          style={{ 
            background: 'rgba(255, 255, 255, 0.75)', 
            border: '1px solid rgba(255, 255, 255, 0.9)', 
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 15px 35px -10px rgba(191,162,103,0.12)'
          }}
        >
          <div className="absolute inset-0 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(191,162,103,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <h3 className="text-xl sm:text-2xl mb-3 font-bold" style={{ fontFamily: "'Amiri', serif", color: '#7A602B' }}>
            اعمل دعوة فرحك زيهم ✨
          </h3>
          <p className="text-sm mb-4 leading-relaxed" style={{ color: '#444444' }} dir="rtl">
            لو عجبك التصميم وعايز تعمل إنفيتيشن زي دي لخطوبتك، فرحك، أو أي مناسبة، تقدر تكلمنا دلوقتي على:
          </p>
          
          <div className="mb-4">
            <a
              href="https://wa.me/201067688524?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D9%83%D9%86%D8%AA%20%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%B1%20%D8%B9%D9%86%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%AF%D8%B9%D9%88%D8%A9%20%D9%81%D8%B1%D8%AD%20%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9"
              target="_blank"
              rel="noreferrer"
              className="text-2xl sm:text-3xl inline-block font-bold hover:scale-105 transition-transform relative z-10 cursor-pointer" 
              style={{ color: '#7A602B', textDecoration: 'none', textShadow: '0 0 15px rgba(191,162,103,0.2)' }}
            >
              01067688524
            </a>
            <div 
              className="text-lg sm:text-xl font-bold mt-1.5" 
              style={{ fontFamily: "'Amiri', serif", color: '#7A602B' }}
            >
              أحمد مجاهد
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-6 mt-2 pt-6 relative z-10" style={{ borderTop: '1px dashed rgba(191,162,103,0.25)' }}>
            {/* WhatsApp */}
            <a
              href="https://wa.me/201067688524?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D9%83%D9%86%D8%AA%20%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%B1%20%D8%B9%D9%86%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%AF%D8%B9%D9%88%D8%A9%20%D9%81%D8%B1%D8%AD%20%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9"
              target="_blank"
              rel="noreferrer"
              title="واتساب"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-sm"
              style={{
                background: 'rgba(37, 211, 102, 0.1)',
                color: '#25D366',
                border: '1px solid rgba(37, 211, 102, 0.3)',
              }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.51 14.5 13.47 14.34 13.71C14.17 13.95 13.71 14.49 13.57 14.65C13.43 14.81 13.29 14.83 13.04 14.71C12.8 14.59 12.01 14.33 11.08 13.5C10.35 12.85 9.86 12.05 9.72 11.81C9.58 11.57 9.7 11.43 9.83 11.31C9.94 11.2 10.08 11.02 10.2 10.88C10.33 10.74 10.37 10.64 10.45 10.48C10.53 10.32 10.49 10.18 10.43 11.06C10.37 9.94 9.88 8.73 9.68 8.24C9.48 7.77 9.28 7.83 9.13 7.82C8.98 7.81 8.82 7.81 8.66 7.81C8.5 7.81 8.24 7.87 8.02 8.11C7.8 8.35 7.18 8.93 7.18 10.11C7.18 11.29 8.04 12.43 8.16 12.59C8.28 12.75 9.85 15.17 12.26 16.21C12.83 16.46 13.28 16.61 13.62 16.72C14.19 16.9 14.71 16.87 15.12 16.81C15.58 16.74 16.54 16.23 16.74 15.66C16.94 15.09 16.94 14.61 16.88 14.51C16.82 14.41 16.66 14.35 16.41 14.23L16.57 14.39Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/wedcraft_eg/"
              target="_blank"
              rel="noreferrer"
              title="إنستجرام"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-sm"
              style={{
                background: 'rgba(225, 48, 108, 0.1)',
                color: '#E1306C',
                border: '1px solid rgba(225, 48, 108, 0.3)',
              }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@wed.craft?_r=1&_t=ZS-98LpvLW49nJ&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaea5T8myq-IB4Tmw3gZ1APE0k2qRnGJQHviSwYF2FPbdRkWb1km-l7HvR8HwA_aem_hrCxXVIFlXFkuoN5nNN-Rg"
              target="_blank"
              rel="noreferrer"
              title="تيك توك"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-sm"
              style={{
                background: 'rgba(0, 0, 0, 0.06)',
                color: '#111111',
                border: '1px solid rgba(0, 0, 0, 0.15)',
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.82 4.48c.38-.38.71-.81.98-1.28V9.32a8.31 8.31 0 0 0 4.65 1.42V7.3a4.85 4.85 0 0 1-2.92-1.61z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
