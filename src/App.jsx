import React, { useState } from 'react';
import Particles from './components/Particles';
import Hero from './components/Hero';
import Story from './components/Story';
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
      style={{ background: '#FAF9F5', color: '#222222', fontFamily: "'Cairo', sans-serif" }}
    >
      <Particles />

      <main>
        <Hero onEnter={handleEnter} />
        <Story />
        <WeddingDetails />
        <Countdown />
        <Gallery />
        <MemoryFilm />
        <RSVP />
        <QRCodeSection onMusicTrigger={handleEnter} />
      </main>

      <Footer />
      <MusicPlayer musicStarted={musicStarted} />
    </div>
  );
}

export default App;
