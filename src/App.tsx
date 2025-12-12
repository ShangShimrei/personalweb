import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Models from './components/sections/Models';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-primary bg-slate-50 relative overflow-x-hidden selection:bg-emerald-500/30">
      {/* Primary Atmospheric Gradient - Greyish/Bluish/Greenish - Increased opacity for visibility */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-cyan-100/20 to-emerald-100/30 pointer-events-none"></div>
      
      {/* Secondary Ambient Glow for depth */}
      <div className="fixed top-0 right-0 w-[80vw] h-[80vh] bg-gradient-to-b from-blue-50/30 to-transparent blur-[120px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Portfolio />
          <Models />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
      
      <ScrollProgress />
    </div>
  );
};

export default App;