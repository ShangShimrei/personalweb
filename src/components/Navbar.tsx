import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else if (href === '#') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const paddingClass = isScrolled ? 'py-2' : 'py-4';
  
  const headerClass = mobileMenuOpen 
    ? `bg-white ${paddingClass}` 
    : isScrolled 
      ? `bg-white border-b border-zinc-200 shadow-sm ${paddingClass}` 
      : `bg-transparent ${paddingClass}`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 ${headerClass}`}
    >
      <div className="w-full max-w-8xl mx-auto flex justify-between items-center relative">
        <a 
          href="#" 
          className="text-3xl md:text-4xl font-display text-primary z-50 relative tracking-wide" 
          onClick={(e) => handleNavClick(e, '#')}
        >
          Shang Shimrei
        </a>

        <nav className="hidden xl:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-base font-medium text-zinc-600 hover:text-primary transition-colors duration-200"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-700 rounded-none shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get in touch
          </a>
        </nav>

        <button 
          className="xl:hidden z-50 relative text-primary p-2 -mr-2 hover:bg-zinc-100 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div 
          className={`fixed inset-0 bg-white z-40 overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="min-h-screen w-full flex flex-col items-center justify-center py-20">
            <div className="flex flex-col items-center gap-6">
              {NAV_ITEMS.map((item, idx) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-3xl md:text-5xl font-serif font-medium text-primary hover:text-zinc-500 transition-colors relative group"
                  style={{ transitionDelay: mobileMenuOpen ? `${idx * 100}ms` : '0ms' }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <div style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}>
                <a 
                  href="#contact" 
                  className="mt-8 px-10 py-4 text-xl font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition-colors rounded-none shadow-xl inline-block"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;