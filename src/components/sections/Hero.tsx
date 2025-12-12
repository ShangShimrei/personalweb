import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import TextReveal from '../ui/TextReveal';
import { CinematicClock, CinematicDate } from '../ui/CinematicClock';

const Hero: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const animTimer = setTimeout(() => setIsActive(true), 100);
    return () => clearTimeout(animTimer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <section className="min-h-[auto] lg:min-h-[90vh] flex items-start lg:items-center justify-center pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      
      {/* Background Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.2]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
           <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="transparent" />
             <stop offset="50%" stopColor="#18181b" />
             <stop offset="100%" stopColor="transparent" />
           </linearGradient>
        </defs>
        <path d="M -100 450 C 200 450, 400 200, 720 200 C 1040 200, 1200 600, 1600 600" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" className={`${isActive ? 'animate-draw-path' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }} />
        <path d="M -100 800 C 300 800, 500 500, 800 500 C 1100 500, 1300 100, 1600 100" fill="none" stroke="url(#line-gradient)" strokeWidth="1" className={`${isActive ? 'animate-draw-path' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }} />
      </svg>

      {/* Main Hero Card with Spotlight Effect */}
      <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full max-w-8xl bg-zinc-900 shadow-2xl overflow-hidden relative flex flex-col justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[550px] p-6 md:p-10 lg:p-14 text-white reveal ${isActive ? 'active' : ''} z-10 rounded-sm border border-zinc-800`}
      >
        {/* Spotlight Overlay */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />

        {/* Cinematic Date/Time Widget - HIGH Z-INDEX */}
        <div className="absolute top-6 right-6 md:top-10 md:right-12 z-50 flex flex-col items-end gap-3 select-none">
           <div className="flex items-center gap-2 mb-1 px-3 py-1.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-lg">
             <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-[pulse_3s_ease-in-out_infinite]"></div>
             <span className="font-mono text-[9px] text-zinc-300 tracking-[0.25em] uppercase font-bold">System Live</span>
           </div>
           
           <div className="flex items-center gap-4 bg-black/40 backdrop-blur-xl p-3 rounded-lg border border-white/10 shadow-xl transition-all hover:bg-black/60 hover:border-white/20">
             <CinematicDate />
             <span className="w-px h-4 bg-zinc-700"></span>
             <CinematicClock />
           </div>
        </div>

        {/* Ambient Gradients inside card */}
        <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-br from-zinc-800/40 via-zinc-800/20 to-transparent rounded-full blur-[100px] md:blur-[130px] -mr-32 -mt-32 pointer-events-none animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tr from-zinc-800/30 via-zinc-900/10 to-transparent rounded-full blur-[90px] md:blur-[120px] -ml-20 -mb-20 pointer-events-none animate-float-reverse"></div>
        
        <div className="relative z-10 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display leading-none mb-6 text-white tracking-wide uppercase mix-blend-overlay opacity-90">
                {isActive && (
                  <>
                    <div className="block"><TextReveal delay={200}>Shang</TextReveal></div>
                    <div className="block"><TextReveal delay={600}>Shimrei</TextReveal></div>
                  </>
                )}
            </h1>
            
            <div className="reveal stagger-2">
              <p className="text-zinc-400 text-lg md:text-xl lg:text-3xl font-light leading-relaxed max-w-2xl mb-8 border-l-4 border-zinc-700 pl-6">
                  Tech Enthusiast and Coffeecionado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 reveal stagger-3">
                <a 
                  href="#contact" 
                  className="bg-white text-zinc-950 px-8 py-3 md:px-8 md:py-3.5 font-bold text-sm md:text-base hover:bg-zinc-200 inline-flex items-center gap-2 shadow-lg shadow-white/5 rounded-none group transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 active:translate-y-0"
                >
                    Collaborate
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
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