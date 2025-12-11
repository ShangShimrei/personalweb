import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[auto] lg:min-h-screen flex items-start lg:items-center justify-center pt-24 md:pt-32 lg:pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-zinc-100">
      <div className="w-full max-w-[1400px] bg-zinc-900 shadow-2xl overflow-hidden relative flex flex-col justify-center min-h-[450px] md:min-h-[500px] lg:min-h-[600px] p-6 md:p-10 lg:p-16 text-white reveal active">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-zinc-800 rounded-full blur-[100px] md:blur-[120px] -mr-32 -mt-32 opacity-30 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-zinc-800 rounded-full blur-[80px] md:blur-[100px] -ml-20 -mb-20 opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-sans font-bold leading-[0.9] md:leading-[0.85] mb-6 md:mb-8 tracking-tighter text-white reveal stagger-1">
                Shang <br/> Shimrei
            </h1>
            
            <p className="text-zinc-400 text-xl md:text-2xl lg:text-4xl font-light leading-relaxed max-w-3xl mb-8 md:mb-10 border-l-4 border-zinc-700 pl-6 md:pl-8 reveal stagger-2">
                Tech Enthusiast and Coffeecionado.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 reveal stagger-3">
                <a 
                  href="#contact" 
                  className="bg-white text-zinc-950 px-8 py-3 md:px-10 md:py-4 font-bold text-base md:text-lg hover:bg-zinc-200 transition-all inline-flex items-center gap-2 shadow-lg shadow-white/5 rounded-none group"
                >
                    Collaborate
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                {/* Decorative Squares (formerly dots) */}
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