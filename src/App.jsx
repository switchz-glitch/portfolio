import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-bg-dark text-text-dim min-h-screen selection:bg-accent/30 transition-colors duration-300">
      <CustomCursor />
      <Sidebar />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <div className="md:pl-20">
        <Footer />
      </div>
    </div>
  );
}

export default App;
