import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const animTimer = setTimeout(() => setIsActive(true), 100);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
      clearTimeout(animTimer);
    }
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).toUpperCase();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <section className="min-h-[auto] lg:min-h-[90vh] flex items-start lg:items-center justify-center pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-zinc-100 overflow-hidden">
      <div className={`w-full max-w-8xl bg-zinc-900 shadow-2xl overflow-hidden relative flex flex-col justify-center min-h-[400px] md:min-h-[450px] lg:min-h-[500px] p-6 md:p-10 lg:p-12 text-white reveal ${isActive ? 'active' : ''}`}>
        
        {/* Live Date/Time Widget */}
        <div className="absolute top-6 right-6 md:top-10 md:right-12 z-30 flex flex-col items-end gap-1.5 pointer-events-none">
           <div className="flex items-center gap-2 mb-1">
             <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-[pulse_3s_ease-in-out_infinite]"></div>
             <span className="font-mono text-[10px] text-zinc-400 tracking-[0.25em] uppercase font-bold">System Live</span>
           </div>
           <div className="font-mono text-xs md:text-sm text-zinc-100 tracking-widest tabular-nums border-b border-zinc-700/50 pb-2">
             <span className="text-zinc-400">{formatDate(time)}</span>
             <span className="text-zinc-600 mx-2">/</span>
             <span className="text-white font-medium">{formatTime(time)}</span>
           </div>
        </div>

        {/* Slow, Elegant Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-zinc-800/50 rounded-full blur-[100px] md:blur-[130px] -mr-32 -mt-32 pointer-events-none animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-zinc-800/40 rounded-full blur-[90px] md:blur-[120px] -ml-20 -mb-20 pointer-events-none animate-float-reverse"></div>
        
        <div className="relative z-10 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display leading-none mb-6 text-white reveal stagger-1 tracking-wide uppercase">
                Shang <br/> Shimrei
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl lg:text-3xl font-light leading-relaxed max-w-2xl mb-8 border-l-4 border-zinc-700 pl-6 reveal stagger-2">
                Tech Enthusiast and Coffeecionado.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 reveal stagger-3">
                <a 
                  href="#contact" 
                  className="bg-white text-zinc-950 px-8 py-3 md:px-8 md:py-3.5 font-bold text-sm md:text-base hover:bg-zinc-200 inline-flex items-center gap-2 shadow-lg shadow-white/5 rounded-none group transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 active:translate-y-0"
                >
                    Collaborate
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                {/* Decorative Squares */}
                <div className="flex gap-4">
                    <div className="w-3 h-3 bg-zinc-700 animate-bounce rounded-none" style={{animationDuration: '2.5s', animationDelay: '0ms'}}></div>
                    <div className="w-3 h-3 bg-zinc-500 animate-bounce rounded-none" style={{animationDuration: '2.5s', animationDelay: '250ms'}}></div>
                    <div className="w-3 h-3 bg-zinc-300 animate-bounce rounded-none" style={{animationDuration: '2.5s', animationDelay: '500ms'}}></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;