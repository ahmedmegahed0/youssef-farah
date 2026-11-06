import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import FloralCorner from './FloralCorner';


const Story = () => {
  return (
    <section
      id="story"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #E8DFCA 0%, #F2ECD9 50%, #E8DFCA 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 sm:mb-28"
        >
          <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: '#8B6914', fontWeight: 700 }}>
            ✦ حكايتنا ✦
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
            {weddingData.story.title}
          </h2>
          <div className="section-divider" />
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-6 font-medium"
            style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 1.4rem)' }}>
            {weddingData.story.subtitle}
          </p>
        </motion.div>

        {/* Couple Photo + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 mb-24 sm:mb-32 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-fit"
          >
            <div
              className="relative rounded-2xl overflow-hidden p-1"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(201,168,76,0.4)',
                boxShadow: '0 20px 50px -10px rgba(201,168,76,0.2), 0 5px 15px rgba(0,0,0,0.06)',
              }}
            >
              <img
                src={weddingData.story.image}
                alt="The Couple"
                className="w-auto h-auto max-h-[440px] sm:max-h-[490px] max-w-[270px] sm:max-w-[310px] object-contain block rounded-2xl"
                loading="lazy"
              />
            </div>
            {/* Corner accents */}
            <div
              className="absolute -top-3 -left-3 w-10 h-10 opacity-80 pointer-events-none"
              style={{ borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C', borderTopLeftRadius: '6px' }}
            />
            <div
              className="absolute -bottom-3 -right-3 w-10 h-10 opacity-80 pointer-events-none"
              style={{ borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C', borderBottomRightRadius: '6px' }}
            />
          </motion.div>

          {/* Text with glass card touch */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
            className="p-8 sm:p-10 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(201, 168, 76, 0.3)',
              boxShadow: '0 15px 35px -10px rgba(201,168,76,0.15)',
            }}
          >
            <div className="text-5xl sm:text-6xl mb-3 leading-none" style={{ fontFamily: "'Amiri', serif", color: 'rgba(201,168,76,0.4)' }}>"</div>
            <p className="text-xl sm:text-2xl leading-loose mb-6 font-medium"
              style={{ fontFamily: "'Amiri', serif", color: '#2C2C2C', fontStyle: 'italic', fontSize: 'clamp(1.25rem, 2.8vw, 1.55rem)' }}>
              {weddingData.story.description}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              <span className="text-xl animate-float" style={{ color: '#C9A84C' }}>♦</span>
            </div>
            <p className="text-2xl sm:text-3xl" style={{ fontFamily: "'Amiri', serif", color: '#8B6914', fontStyle: 'italic', fontWeight: 600 }}>
              — {weddingData.coupleNames}
            </p>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default Story;
