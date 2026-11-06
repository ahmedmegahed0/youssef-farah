import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const MusicPlayer = ({ musicStarted }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = 0.4;
    
    const tryPlay = () => {
      audio.play().then(() => {
        setPlaying(true);
        setError(false);
        ['click', 'touchstart', 'scroll', 'keydown'].forEach(event => 
          document.removeEventListener(event, tryPlay)
        );
      }).catch(() => {
        // Browser prevented autoplay without interaction, wait for next interaction
      });
    };

    // Attempt to play immediately on mount
    tryPlay();

    // Attach listeners to start playing on the first user interaction
    ['click', 'touchstart', 'scroll', 'keydown'].forEach(event => 
      document.addEventListener(event, tryPlay, { once: true })
    );

    return () => {
      ['click', 'touchstart', 'scroll', 'keydown'].forEach(event => 
        document.removeEventListener(event, tryPlay)
      );
    };
  }, []);

  // Fallback for explicit enter button
  useEffect(() => {
    if (musicStarted && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setError(true));
    }
  }, [musicStarted]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().then(() => setPlaying(true)).catch(() => setError(true)); }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <audio ref={audioRef} src={weddingData.music.src} loop onError={() => setError(true)} />

      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={playing ? 'وقف الموسيقى' : 'شغل الموسيقى'}
        className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #BFA267, #E8D5A3)',
          boxShadow: playing ? '0 0 25px rgba(191,162,103,0.5), 0 0 50px rgba(191,162,103,0.2)' : '0 4px 20px rgba(191,162,103,0.25)',
        }}
      >
        <motion.div
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={playing ? { duration: 3, repeat: Infinity, ease: 'linear' } : {}}
          className="absolute inset-1 rounded-full"
          style={{ background: 'conic-gradient(#7A602B 0deg, #BFA267 60deg, #7A602B 120deg, #BFA267 180deg, #7A602B 240deg, #BFA267 300deg, #7A602B 360deg)', opacity: 0.25 }}
        />
        <span className="relative z-10 text-xl">{error ? '🔇' : playing ? '⏸' : '▶'}</span>

        <AnimatePresence>
          {playing && !error && [1, 2, 3].map(i => (
            <motion.div key={i}
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: 'rgba(191,162,103,0.4)' }}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 1 + i * 0.4, opacity: 0 }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}
        </AnimatePresence>
      </motion.button>

      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs px-2.5 py-1 rounded-full pointer-events-none shadow-md"
        style={{ background: 'rgba(34,34,34,0.85)', backdropFilter: 'blur(8px)', color: '#FAF9F5', border: '1px solid rgba(191,162,103,0.25)' }}>
        {playing ? 'وقف ⏸' : 'شغل ▶'}
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
