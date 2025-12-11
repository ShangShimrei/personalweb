import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Models from './components/sections/Models';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-primary bg-gradient-to-b from-zinc-50 via-white to-zinc-100">
      <Header />
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
  );
};

export default App;