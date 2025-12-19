import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Equities from './components/Sections/Equities';
import Energy from './components/Sections/Energy';
import Commodities from './components/Sections/Commodities';

import BackgroundAmbience from './components/UI/BackgroundAmbience';
import Particles from './components/UI/Particles';
import ScrollBlurBackground from './components/UI/ScrollBlurBackground';
import Loader from './components/UI/Loader';

function App() {
  // Nexus OS - Version 3.1
  const [loading, setLoading] = useState(true);

  return (
    <div className={`selection:bg-blue-500/30 selection:text-white noise-overlay min-h-screen bg-obsidian text-white ${loading ? 'overflow-hidden h-screen' : ''}`}>
      {loading && <Loader onLoadComplete={() => setLoading(false)} />}

      <BackgroundAmbience />
      <Particles />
      <ScrollBlurBackground />

      <Navbar show={!loading} />

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero show={!loading} />
        <Energy />
        <Equities />
        <Commodities />

        <Footer />
      </div>
    </div>
  );
}

export default App;
