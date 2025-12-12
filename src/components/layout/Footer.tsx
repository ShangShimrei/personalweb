import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../../data/constants';
import { Icon } from '../ui/Icon';
import { ArrowRight, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault();
      // Logic would go here
      setEmail('');
      alert("Subscribed!");
  };

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-zinc-100 py-12 px-4 sm:px-6 lg:px-8 mt-auto relative z-20">
      <div className="w-full max-w-8xl mx-auto reveal">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Newsletter Section (Replaces Brand Name) */}
          <div className="max-w-md">
            <h3 className="text-lg font-serif font-bold text-primary mb-2 flex items-center gap-2">
                <Mail size={16} className="text-emerald-600" />
                Subscribe to Newsletter
            </h3>
            <p className="text-zinc-500 text-sm mb-6 font-light">
                Get occasional updates on AI, tech, and my latest experiments. No spam, ever.
            </p>
            <form onSubmit={handleSubscribe} className="relative group">
                <input 
                    type="email" 
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-zinc-300 py-3 pr-12 text-primary focus:outline-none focus:border-zinc-900 transition-colors rounded-none placeholder-zinc-300 font-light"
                    required
                />
                <button 
                    type="submit" 
                    className="absolute right-0 top-0 bottom-0 text-zinc-400 hover:text-zinc-900 transition-colors p-2"
                    aria-label="Subscribe"
                >
                    <ArrowRight size={20} className="group-focus-within:translate-x-1 transition-transform" />
                </button>
            </form>
          </div>

          <div className="flex flex-col md:items-end justify-between h-full gap-6">
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  className="w-10 h-10 flex items-center justify-center border border-zinc-200 text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-900 transition-all duration-300 rounded-none shadow-sm"
                  aria-label={link.platform}
                >
                  <Icon name={link.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
          <p>&copy; {currentYear} Shang Shimrei. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-primary transition-colors">Privacy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms</a>
             <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;