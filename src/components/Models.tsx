import React from 'react';
import { AI_MODELS } from '../constants/constants';

const Models: React.FC = () => {
  return (
    <section id="models" className="py-12 md:py-16 bg-zinc-50 scroll-mt-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-200">
      <div className="w-full max-w-8xl mx-auto">
        <div className="mb-8 reveal">
           <h2 className="text-3xl md:text-4xl font-serif mb-3 text-primary">Models</h2>
           <p className="text-zinc-500 font-light text-lg max-w-2xl">
             Experimental and production-ready models fine-tuned for specific tasks and specialized domains.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_MODELS.map((model, index) => (
            <div 
              key={model.id} 
              className={`bg-white border border-zinc-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group reveal stagger-${(index % 3) + 1} rounded-none flex flex-col`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-mono font-bold text-primary group-hover:text-zinc-600 transition-colors">
                  {model.name}
                </h3>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 ${
                  model.status === 'Production' 
                    ? 'bg-zinc-900 text-white' 
                    : 'bg-zinc-100 text-zinc-500 border border-zinc-200'
                }`}>
                  {model.status}
                </span>
              </div>
              
              <p className="text-zinc-600 mb-6 font-light leading-relaxed flex-grow text-justify text-base md:text-lg">
                {model.description}
              </p>

              <div className="pt-4 border-t border-zinc-100 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Architecture</span>
                  <span className="font-mono text-xs text-zinc-900 font-bold">{model.architecture}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Performance</span>
                  <span className="font-mono text-xs text-zinc-900 font-bold">{model.performance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;