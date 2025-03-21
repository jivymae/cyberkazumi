import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import BackgroundElements from './components/BackgroundElements';
import MouseEffect from './components/MouseEffect';
export function App() {
  return <div className="relative w-full min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <MouseEffect />
      <BackgroundElements />
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </div>;
}