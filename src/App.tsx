import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Models from './components/Models';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-primary bg-gradient-to-b from-zinc-50 via-white to-zinc-100">
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
  );
};

export default App;