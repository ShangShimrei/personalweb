import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollProgress: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setProgress(Number(scroll));
      setIsVisible(totalScroll > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-zinc-900 text-white rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
        shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] 
        border border-emerald-500/30 hover:border-emerald-400
      `}
      aria-label="Scroll to top"
    >
      <div className="relative flex items-center justify-center">
        {/* Progress Ring */}
        <svg className="absolute w-full h-full -rotate-90 pointer-events-none opacity-20" width="100%" height="100%" viewBox="0 0 36 36">
           {/* Optional: Add SVG stroke logic here if needed for progress indication */}
        </svg>
        
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300 text-emerald-50" />
        
        {/* Glow dot - The "Light Source" */}
        <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
      </div>
    </button>
  );
};

export default ScrollProgress;