import React from 'react';
import { BLOG_POSTS } from '../blog/posts';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-12 md:py-16 bg-white scroll-mt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-8xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8 reveal">
          <h2 className="text-3xl md:text-4xl font-serif mb-3 text-primary">Latest Thoughts</h2>
          <p className="text-zinc-500 font-light max-w-xl text-lg">
            Insights on design, technology, and the creative process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <article key={post.id} className={`flex flex-col bg-zinc-50 p-6 transition-all duration-300 border border-zinc-200 hover:border-zinc-400 hover:bg-white reveal stagger-${index + 1} rounded-none`}>
               <div className="text-[10px] text-zinc-400 mb-3 flex items-center gap-2 uppercase tracking-wide font-bold">
                 <span>{post.date}</span>
                 <span className="w-1 h-1 bg-zinc-300 rounded-none"></span>
                 <span>{post.readTime}</span>
               </div>
               <h3 className="text-xl font-serif text-primary mb-3 leading-snug">
                 <a href="#" className="hover:text-zinc-600 transition-colors">{post.title}</a>
               </h3>
               <p className="text-zinc-600 font-light leading-relaxed mb-4 flex-grow line-clamp-3 text-justify text-base md:text-lg">
                 {post.excerpt}
               </p>
               <a href="#" className="inline-flex items-center text-xs font-bold text-primary hover:text-zinc-600 transition-colors mt-auto group uppercase tracking-widest">
                 Read Article 
                 <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
               </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;