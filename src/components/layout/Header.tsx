import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../data/constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
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

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      target.scrollIntoView({ behavior: 'auto' });
      return;
    }

    const headerOffset = 80; 
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - (targetId === '#' ? 0 : headerOffset);
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;

    if (Math.abs(distance) < 5) return;

    // Adjusted duration for a premium feel: responsive but with a luxurious settling time
    const duration = Math.min(1500, 600 + Math.abs(distance) * 0.3);
    let startTime: number | null = null;

    // EaseOutQuint: Starts fast, decelerates very smoothly. 
    // This feels "lighter" and more expensive than easeInOut.
    const easeOutQuint = (t: number) => {
      return 1 - Math.pow(1 - t, 5);
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeOutQuint(progress);

      window.scrollTo(0, startPosition + (distance * ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const wasMobile = mobileMenuOpen;
    setMobileMenuOpen(false);
    
    // Minimal delay on mobile to ensure menu closing animation is perceived
    const delay = wasMobile ? 400 : 0;

    setTimeout(() => {
      smoothScrollTo(href);
    }, delay);
  };

  const paddingClass = isScrolled ? 'py-3' : 'py-5';
  
  const headerClass = mobileMenuOpen 
    ? `bg-white ${paddingClass}` 
    : isScrolled 
      ? `bg-white/90 backdrop-blur-md border-b border-zinc-200/50 shadow-sm ${paddingClass}` 
      : `bg-transparent ${paddingClass}`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 sm:px-6 lg:px-8 ${headerClass}`}
    >
      <div className="w-full max-w-8xl mx-auto flex justify-between items-center relative">
        <a 
          href="#" 
          className="text-3xl md:text-4xl font-display text-primary z-50 relative tracking-wide select-none cursor-pointer" 
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
              className="text-sm uppercase tracking-widest font-bold text-zinc-500 hover:text-primary transition-colors duration-300 relative group py-2"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-900 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest bg-zinc-900 text-white hover:bg-zinc-800 rounded-none shadow-md transform transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
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
                  className="text-4xl md:text-6xl font-serif font-medium text-primary hover:text-zinc-500 transition-colors relative group"
                  style={{ transitionDelay: mobileMenuOpen ? `${100 + (idx * 50)}ms` : '0ms' }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-zinc-900 transition-all duration-500 ease-out group-hover:w-full"></span>
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

export default Header;