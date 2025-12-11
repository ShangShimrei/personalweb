import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[auto] lg:min-h-[90vh] flex items-start lg:items-center justify-center pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-zinc-100">
      <div className="w-full max-w-8xl bg-zinc-900 shadow-2xl overflow-hidden relative flex flex-col justify-center min-h-[400px] md:min-h-[450px] lg:min-h-[500px] p-6 md:p-10 lg:p-12 text-white reveal active">
        
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-zinc-800 rounded-full blur-[100px] md:blur-[120px] -mr-32 -mt-32 opacity-30 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-zinc-800 rounded-full blur-[80px] md:blur-[100px] -ml-20 -mb-20 opacity-20 pointer-events-none"></div>
        
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
                  className="bg-white text-zinc-950 px-8 py-3 md:px-8 md:py-3.5 font-bold text-sm md:text-base hover:bg-zinc-200 inline-flex items-center gap-2 shadow-lg shadow-white/5 rounded-none group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 active:translate-y-0"
                >
                    Collaborate
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex gap-4">
                    <div className="w-3 h-3 bg-zinc-700 animate-bounce rounded-none" style={{animationDelay: '0ms'}}></div>
                    <div className="w-3 h-3 bg-zinc-500 animate-bounce rounded-none" style={{animationDelay: '150ms'}}></div>
                    <div className="w-3 h-3 bg-zinc-300 animate-bounce rounded-none" style={{animationDelay: '300ms'}}></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;