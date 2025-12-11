import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-white scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-primary">Latest Thoughts</h2>
          <p className="text-zinc-500 font-light max-w-xl text-xl">
            Insights on design, technology, and the creative process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article key={post.id} className={`flex flex-col bg-zinc-50 p-8 transition-all duration-300 border border-zinc-200 hover:border-zinc-400 hover:bg-white reveal stagger-${index + 1} rounded-none`}>
               <div className="text-xs text-zinc-400 mb-4 flex items-center gap-3 uppercase tracking-wide font-bold">
                 <span>{post.date}</span>
                 <span className="w-1.5 h-1.5 bg-zinc-300 rounded-none"></span>
                 <span>{post.readTime}</span>
               </div>
               <h3 className="text-2xl font-serif text-primary mb-4 leading-snug">
                 <a href="#" className="hover:text-zinc-600 transition-colors">{post.title}</a>
               </h3>
               <p className="text-zinc-600 text-base leading-relaxed mb-6 flex-grow line-clamp-3 text-justify">
                 {post.excerpt}
               </p>
               <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:text-zinc-600 transition-colors mt-auto group uppercase tracking-widest">
                 Read Article 
                 <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
               </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;