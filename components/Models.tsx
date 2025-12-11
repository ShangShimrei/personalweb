import React from 'react';
import { AI_MODELS } from '../constants';

const Models: React.FC = () => {
  return (
    <section id="models" className="py-16 md:py-24 bg-zinc-50 scroll-mt-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="mb-12 reveal">
           <h2 className="text-4xl md:text-5xl font-serif mb-4 text-primary">Models</h2>
           <p className="text-zinc-500 font-light text-xl max-w-2xl">
             Experimental and production-ready models fine-tuned for specific tasks and specialized domains.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_MODELS.map((model, index) => (
            <div 
              key={model.id} 
              className={`bg-white border border-zinc-200 p-6 hover:shadow-xl hover:border-zinc-900 transition-all duration-300 group reveal stagger-${(index % 3) + 1} rounded-none flex flex-col`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-mono font-bold text-primary group-hover:text-zinc-600 transition-colors">
                  {model.name}
                </h3>
                <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 border ${
                  model.status === 'Production' ? 'border-zinc-900 text-zinc-900' : 'border-zinc-400 text-zinc-400'
                }`}>
                  {model.status}
                </span>
              </div>
              
              <p className="text-zinc-600 mb-6 font-light leading-relaxed flex-grow text-justify">
                {model.description}
              </p>

              <div className="pt-5 border-t border-zinc-100 font-mono text-xs text-zinc-500 space-y-2">
                <div className="flex justify-between">
                  <span className="uppercase tracking-wider">Architecture</span>
                  <span className="text-primary font-bold">{model.architecture}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase tracking-wider">Performance</span>
                  <span className="text-primary font-bold">{model.performance}</span>
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