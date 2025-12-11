import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Icon } from './Icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-zinc-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-8xl mx-auto reveal">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-sans font-bold tracking-tighter text-primary mb-1">Shang Shimrei</h3>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  className="text-zinc-400 hover:text-primary transition-colors p-1.5 hover:scale-110 transform duration-200"
                  aria-label={link.platform}
                >
                  <Icon name={link.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-zinc-400">
          <p>&copy; {currentYear} Shang Shimrei. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;