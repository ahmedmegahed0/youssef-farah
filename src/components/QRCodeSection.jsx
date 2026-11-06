import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeCanvas } from 'qrcode.react';
import { weddingData } from '../data/weddingData';
import FloralCorner from './FloralCorner';

const QRCodeSection = ({ onMusicTrigger }) => {
  const [showModal, setShowModal] = useState(false);
  const [qrMode, setQrMode] = useState('url'); // 'url' | 'text'
  const [copied, setCopied] = useState(false);
  const qrCanvasRef = useRef(null);

  // Generate dynamic URL for the invitation
  const [inviteUrl, setInviteUrl] = useState('https://youssef-farah.vercel.app/?invite=vip');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      const pathname = window.location.pathname;
      setInviteUrl(`${origin}${pathname}?invite=vip`);

      // Check if URL contains ?invite=vip or #invite
      const params = new URLSearchParams(window.location.search);
      if (params.get('invite') === 'vip' || window.location.hash === '#invite') {
        setShowModal(true);
      }
    }
  }, []);

  // Text message when scanning
  const directText = `✨ بطاقة دعوة خاصة ✨\n\nأهلاً بك يا غالي!\nيسعدنا ويشرفنا حضورك لمشاركتنا فرحتنا\nبمناسبة زفاف:\n💍 ${weddingData.coupleNames} 💍\n\n📅 ${weddingData.event.dateFormatted}\n🕗 ${weddingData.event.time}\n📍 ${weddingData.event.venue}\n\nلوكيشن القاعة: ${weddingData.event.mapsUrl}\n\nتنورونا وتكملوا فرحتنا ❤️`;

  const qrValue = qrMode === 'url' ? inviteUrl : directText;

  // Download QR Code as PNG
  const handleDownload = () => {
    const canvas = document.getElementById('wedding-qr-canvas');
    if (!canvas) return;

    // Create a larger high-res canvas with decorative frame for printing/sharing
    const exportCanvas = document.createElement('canvas');
    const size = 600;
    exportCanvas.width = size;
    exportCanvas.height = size + 160;
    const ctx = exportCanvas.getContext('2d');

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 0, exportCanvas.height);
    grad.addColorStop(0, '#FAF9F5');
    grad.addColorStop(1, '#F0EBE1');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // Golden frame border
    ctx.strokeStyle = '#BFA267';
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, exportCanvas.width - 40, exportCanvas.height - 40);

    // Inner dashed line
    ctx.setLineDash([8, 6]);
    ctx.strokeStyle = 'rgba(191,162,103,0.4)';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(30, 30, exportCanvas.width - 60, exportCanvas.height - 60);
    ctx.setLineDash([]);

    // Header text
    ctx.textAlign = 'center';
    ctx.fillStyle = '#7A602B';
    ctx.font = 'bold 36px "Amiri", serif';
    ctx.fillText(`دعوة فرح ${weddingData.coupleNames}`, size / 2, 75);

    ctx.font = '20px "Cairo", sans-serif';
    ctx.fillStyle = '#666';
    ctx.fillText('امسح الكود بكاميرا الموبايل', size / 2, 110);

    // Draw QR in center
    const qrSize = 360;
    const qrX = (size - qrSize) / 2;
    const qrY = 140;

    // White rounded card background for QR
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(qrX - 15, qrY - 15, qrSize + 30, qrSize + 30);
    ctx.drawImage(canvas, qrX, qrY, qrSize, qrSize);

    // Footer info
    ctx.font = 'bold 22px "Cairo", sans-serif';
    ctx.fillStyle = '#7A602B';
    ctx.fillText(`${weddingData.event.dateFormatted} — ${weddingData.event.time}`, size / 2, qrY + qrSize + 55);

    ctx.font = '18px "Cairo", sans-serif';
    ctx.fillStyle = '#555';
    ctx.fillText(weddingData.event.venue, size / 2, qrY + qrSize + 85);

    const link = document.createElement('a');
    link.download = `QR-دعوة-${weddingData.groom}-و-${weddingData.bride}.png`;
    link.href = exportCanvas.toDataURL('image/png');
    link.click();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEnterFromModal = () => {
    setShowModal(false);
    if (onMusicTrigger) onMusicTrigger();
  };

  const handleScrollToRSVP = () => {
    setShowModal(false);
    if (onMusicTrigger) onMusicTrigger();
    const rsvp = document.getElementById('rsvp');
    if (rsvp) rsvp.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        id="qrcode"
        className="relative py-24 sm:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F3EFE8 0%, #FAF9F5 50%, #F3EFE8 100%)' }}
      >
        {/* Subtle decorative glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(191,162,103,0.06) 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: '#7A602B', fontWeight: 700 }}>
              ✦ بطاقة الدعوة الرقمية ✦
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Amiri', serif",
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 300,
                background: 'linear-gradient(135deg, #7A602B, #BFA267, #E8D5A3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              امسح الكود (QR Code)
            </h2>
            <div className="section-divider" />
            <p
              className="mt-6 max-w-xl mx-auto leading-relaxed font-medium"
              style={{ fontFamily: "'Amiri', serif", color: '#444444', fontStyle: 'italic', fontSize: 'clamp(1.15rem, 2.8vw, 1.35rem)' }}
            >
              امسح الكود بكاميرا موبايلك عشان يظهرلك كارت الدعوة الخاص بيك مع كل التفاصيل ❤️
            </p>
          </motion.div>

          {/* Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 rounded-3xl relative mx-auto max-w-xl text-center overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.78)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 50px -15px rgba(191,162,103,0.12), 0 0 0 1px rgba(191,162,103,0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Inner dashed frame */}
            <div className="absolute inset-3 rounded-2xl border border-dashed border-[#BFA267]/25 pointer-events-none" />

            {/* Floral Corners */}
            <FloralCorner position="top-right" opacity={0.35} />
            <FloralCorner position="bottom-left" opacity={0.35} />

            <div className="relative z-10 flex flex-col items-center">
              {/* Mode Switcher */}
              <div
                className="inline-flex p-1 rounded-full mb-8"
                style={{ background: 'rgba(191,162,103,0.1)', border: '1px solid rgba(191,162,103,0.25)' }}
              >
                <button
                  type="button"
                  onClick={() => setQrMode('url')}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    qrMode === 'url' ? 'bg-[#BFA267] text-white shadow-md' : 'text-[#7A602B] hover:text-[#BFA267]'
                  }`}
                >
                  كارت الدعوة التفاعلي ✨
                </button>
                <button
                  type="button"
                  onClick={() => setQrMode('text')}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    qrMode === 'text' ? 'bg-[#BFA267] text-white shadow-md' : 'text-[#7A602B] hover:text-[#BFA267]'
                  }`}
                >
                  نص الدعوة المباشر 📝
                </button>
              </div>

              {/* QR Frame */}
              <div
                className="p-5 rounded-2xl mb-6 relative group inline-block"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(191,162,103,0.15)',
                  border: '1.5px solid rgba(191,162,103,0.35)',
                }}
              >
                <QRCodeCanvas
                  id="wedding-qr-canvas"
                  value={qrValue}
                  size={210}
                  level="H"
                  marginSize={1}
                  fgColor="#222222"
                  bgColor="#FFFFFF"
                />
              </div>

              {/* QR instructions */}
              <p className="text-sm sm:text-base font-semibold mb-6" style={{ color: '#7A602B' }}>
                {qrMode === 'url'
                  ? 'وجه كاميرا هاتفك نحو الكود لفتح بطاقة الدعوة الفاخرة'
                  : 'وجه الكاميرا لقراءة نص بطاقة الدعوة فوراً'}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setShowModal(true)}
                  className="btn-gold px-6 py-3 rounded-full text-sm sm:text-base font-bold shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>معاينة كارت الدعوة</span>
                  <span>💌</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleDownload}
                  className="px-6 py-3 rounded-full text-sm sm:text-base font-bold cursor-pointer flex items-center gap-2 transition-all duration-300"
                  style={{
                    background: 'rgba(191,162,103,0.12)',
                    color: '#7A602B',
                    border: '1px solid rgba(191,162,103,0.4)',
                  }}
                >
                  <span>تحميل الـ QR للطباعة</span>
                  <span>📥</span>
                </motion.button>

                {qrMode === 'url' && (
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleCopyLink}
                    className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.85)',
                      color: '#666',
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <span>{copied ? 'تم نسخ الرابط! ✓' : 'نسخ رابط الدعوة 📋'}</span>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIP Welcome Modal (When scanned or previewed) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg rounded-3xl p-8 sm:p-10 my-auto text-center overflow-hidden z-10"
              style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FAF9F5 60%, #F3EFE8 100%)',
                border: '1.5px solid rgba(191,162,103,0.45)',
                boxShadow: '0 25px 70px rgba(0,0,0,0.25), 0 0 40px rgba(191,162,103,0.18)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 left-5 w-9 h-9 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all hover:bg-black/5"
                style={{ color: '#7A602B', border: '1px solid rgba(191,162,103,0.3)' }}
                aria-label="إغلاق"
              >
                ✕
              </button>

              {/* Decorative Frame */}
              <div className="absolute inset-3 rounded-2xl border border-dashed border-[#BFA267]/30 pointer-events-none" />
              <FloralCorner position="top-right" opacity={0.4} />
              <FloralCorner position="bottom-left" opacity={0.4} />

              <div className="relative z-10">
                {/* Crown / Seal */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-inner"
                  style={{
                    background: 'linear-gradient(135deg, rgba(191,162,103,0.18), rgba(232,213,163,0.35))',
                    border: '1px solid rgba(191,162,103,0.4)',
                  }}
                >
                  👑
                </motion.div>

                <p className="text-xs uppercase tracking-[0.35em] mb-2 font-bold" style={{ color: '#7A602B' }}>
                  ✦ بطاقة دعوة خاصة ✦
                </p>

                <h3
                  className="text-2xl sm:text-3xl font-bold mb-3"
                  style={{ fontFamily: "'Amiri', serif", color: '#7A602B' }}
                >
                  أهلاً بك يا غالي في ليلة العمر!
                </h3>

                <p className="text-base sm:text-lg mb-4 text-[#444444] font-medium" style={{ fontFamily: "'Amiri', serif" }}>
                  يسعدنا ويشرفنا دعوتكم لحضور حفل زفاف
                </p>

                {/* Couple Names Banner */}
                <div
                  className="py-3 px-6 rounded-2xl my-4 mx-auto max-w-xs shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(191,162,103,0.15), rgba(232,213,163,0.25))',
                    border: '1px solid rgba(191,162,103,0.35)',
                  }}
                >
                  <h2
                    className="text-3xl sm:text-4xl font-bold"
                    style={{
                      fontFamily: "'Amiri', serif",
                      color: '#7A602B',
                      textShadow: '0 2px 10px rgba(191,162,103,0.2)',
                    }}
                  >
                    {weddingData.coupleNames}
                  </h2>
                </div>

                {/* Details highlights */}
                <div className="space-y-2 my-5 text-sm sm:text-base text-[#333]">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">📅</span>
                    <span className="font-semibold">{weddingData.event.dateFormatted}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">🕗</span>
                    <span className="font-semibold">الساعة {weddingData.event.time}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">📍</span>
                    <span className="font-semibold">{weddingData.event.venue}</span>
                  </div>
                </div>

                <p
                  className="text-base sm:text-lg italic mb-6 font-medium"
                  style={{ fontFamily: "'Amiri', serif", color: '#7A602B' }}
                >
                  "فرحتنا مش هتكمل غير بوجودكم ولمتنا الحلوة ❤️"
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleScrollToRSVP}
                    className="w-full sm:w-auto btn-gold px-6 py-3 rounded-full font-bold text-sm sm:text-base shadow-md cursor-pointer"
                  >
                    تأكيد الحضور (RSVP) ✍️
                  </motion.button>

                  <motion.a
                    href={weddingData.event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-sm sm:text-base cursor-pointer text-[#7A602B] bg-[#BFA267]/15 border border-[#BFA267]/45 hover:bg-[#BFA267]/25 transition-all text-center"
                  >
                    موقع القاعة 📍
                  </motion.a>
                </div>

                <div className="mt-5">
                  <button
                    onClick={handleEnterFromModal}
                    className="text-xs sm:text-sm text-neutral-500 hover:text-[#7A602B] underline underline-offset-4 cursor-pointer transition-colors"
                  >
                    تصفح الدعوة الكاملة 🌟
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QRCodeSection;

