import React, { useState } from 'react';
import Particles from './components/Particles';
import Hero from './components/Hero';
import Story from './components/Story';
import QuoteBanner from './components/QuoteBanner';
import WeddingDetails from './components/WeddingDetails';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import MemoryFilm from './components/MemoryFilm';
import RSVP from './components/RSVP';
import QRCodeSection from './components/QRCodeSection';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  const [musicStarted, setMusicStarted] = useState(false);

  const handleEnter = () => {
    setMusicStarted(true);
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: '#F2ECD9', color: '#2C2C2C', fontFamily: "'Cairo', sans-serif" }}
    >
      <Particles />

      <main>
        <Hero onEnter={handleEnter} />
        <Story />

        <QuoteBanner
          text="في ناس بنقابلهم صدفة، وبيتحولوا فجأة لكل اللي كنا بنتمناه من الدنيا.. ومن يوم ما التقينا عرفنا إن العوض جميل."
        />

        <WeddingDetails />
        <Countdown />

        <QuoteBanner
          text="كل خطوة مشيناها كانت بتاخدنا لبعض — والنهارده بنبدأ سوا رحلة عمر مابتخلصش."
        />

        <Gallery />
        <MemoryFilm />

        <QuoteBanner
          text="أجمل ما في الفرحة إنك تعيشها مع الناس اللي بتحبهم.. مستنيين ضحكتكم تنور ليلتنا."
        />

        <RSVP />
        <QRCodeSection onMusicTrigger={handleEnter} />
      </main>

      <Footer />
      <MusicPlayer musicStarted={musicStarted} />
    </div>
  );
}

export default App;
