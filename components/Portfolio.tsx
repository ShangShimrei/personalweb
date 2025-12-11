import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-zinc-50 scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-primary">Portfolio</h2>
            <p className="text-zinc-500 font-light text-xl">A collection of projects that define my style and approach to digital problem solving.</p>
          </div>
          <a 
            href="#" 
            className="hidden md:inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all duration-300 rounded-none shadow-md group"
          >
            View all projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`group cursor-pointer reveal stagger-${(index % 2) + 1}`}>
              <div className="aspect-[4/3] overflow-hidden bg-zinc-200 mb-6 shadow-sm relative rounded-none">
                <div className="absolute inset-0 bg-zinc-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex justify-between items-start border-t border-zinc-300 pt-5">
                <div>
                  <h3 className="text-3xl font-medium text-primary mb-2 group-hover:text-zinc-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-bold text-white bg-zinc-900 px-4 py-2 uppercase tracking-wider rounded-none">
                    {project.category}
                  </span>
                </div>
                <div className="w-14 h-14 border border-zinc-300 flex items-center justify-center bg-white group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 rounded-none">
                   <span className="text-2xl">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden reveal">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all duration-300 rounded-none shadow-md group"
            >
              View all projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;