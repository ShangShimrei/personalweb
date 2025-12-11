import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-12 md:py-16 bg-zinc-50 scroll-mt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 reveal">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-3 text-primary">Portfolio</h2>
            <p className="text-zinc-500 font-light text-lg">A collection of projects that define my style and approach to digital problem solving.</p>
          </div>
          <a 
            href="#" 
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white font-medium hover:bg-zinc-800 rounded-none shadow-md group text-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 active:translate-y-0"
          >
            View all projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`group cursor-pointer reveal stagger-${(index % 2) + 1}`}>
              <div className="aspect-[4/3] overflow-hidden bg-zinc-200 mb-4 shadow-sm relative rounded-none">
                <div className="absolute inset-0 bg-zinc-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex justify-between items-start border-t border-zinc-300 pt-4">
                <div>
                  <h3 className="text-2xl font-medium text-primary mb-1 group-hover:text-zinc-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-bold text-white bg-zinc-900 px-3 py-1.5 uppercase tracking-wider rounded-none">
                    {project.category}
                  </span>
                </div>
                <div className="w-10 h-10 border border-zinc-300 flex items-center justify-center bg-white group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 rounded-none">
                   <span className="text-lg">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden reveal">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white font-medium hover:bg-zinc-800 rounded-none shadow-md group text-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 active:translate-y-0"
            >
              View all projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;