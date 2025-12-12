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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const smoothScrollTo = (targetId: string) => {
    const target = targetId === '#' ? document.body : document.querySelector(targetId);
    if (!target) return;

    const headerOffset = 80; 
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - (targetId === '#' ? 0 : headerOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      smoothScrollTo(href);
    }, mobileMenuOpen ? 300 : 0);
  };

  // Styling based on state
  const paddingClass = isScrolled ? 'py-3' : 'py-5';
  const bgClass = mobileMenuOpen 
    ? 'bg-white' 
    : isScrolled 
      ? 'bg-white/70 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm supports-[backdrop-filter]:bg-white/60' 
      : 'bg-transparent';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-6 lg:px-8 ${bgClass} ${paddingClass}`}
    >
      <div className="w-full max-w-8xl mx-auto flex justify-between items-center relative">
        <a 
          href="#" 
          className="text-2xl md:text-3xl font-display text-primary z-50 relative tracking-wide cursor-pointer mix-blend-difference text-zinc-900" 
          onClick={(e) => handleNavClick(e, '#')}
        >
          Shang Shimrei
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-primary transition-colors duration-300 relative group py-2"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-900 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] bg-zinc-900 text-white hover:bg-zinc-800 rounded-none shadow-md transform transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden z-50 relative text-primary p-2 -mr-2 hover:bg-zinc-100 rounded-full transition-colors duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 overflow-y-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="min-h-screen w-full flex flex-col items-center justify-center py-20">
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, idx) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-4xl md:text-5xl font-serif text-primary hover:text-zinc-500 transition-colors relative group"
                  style={{ transitionDelay: mobileMenuOpen ? `${100 + (idx * 50)}ms` : '0ms' }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <div style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}>
                <a 
                  href="#contact" 
                  className="mt-8 px-8 py-3 text-lg font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition-colors rounded-none shadow-xl inline-block"
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