import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check for reduced motion preference immediately
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect to ensure it only runs once per session
          if (sectionRef.current) observer.unobserve(sectionRef.current);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Helper to generate dynamic delay styles for the streaming effect
  const streamDelay = (index: number) => ({
    animationDelay: `${index * 80}ms` // 80ms interval for a rapid "streaming" feel
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-12 md:py-16 bg-white scroll-mt-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${isVisible ? 'stream-active' : ''}`}
    >
      <div className="w-full max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="stream-element" style={streamDelay(0)}>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">About Me</h2>
            </div>
            <div className="stream-element" style={streamDelay(1)}>
              <div className="h-1.5 w-12 bg-zinc-800 mb-4"></div>
            </div>
            <div className="stream-element" style={streamDelay(2)}>
              <p className="text-xl md:text-2xl text-zinc-500 uppercase tracking-widest font-bold leading-normal">
                AI Enthusiast <br/>
                Python <br/>
                Petrolhead
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-8 space-y-5 text-base md:text-lg text-zinc-600 font-light leading-relaxed text-justify">
            <p className="stream-element" style={streamDelay(3)}>
              Meet Shang, a magnificent mess of caffeine jitters and a genuinely curious person about all things tech.
            </p>
            <p className="stream-element" style={streamDelay(4)}>
              By day, he is a total AI enthusiast, spending his hours tinkering with neural networks, Large Language Models (LLMs), and Reinforcement Learning—pondering the future of machine learning with the intensity usually reserved for philosophical debate.
            </p>
            <p className="stream-element" style={streamDelay(5)}>
              When he finally unplugs from the matrix, Shang instantly transforms into a raging petrolhead—who totally lacks a driver's license—probably blasting classic rock music so loud you can hear the guitar solo over the roar of the engine.
            </p>
            <p className="stream-element" style={streamDelay(6)}>
              Dude is operating on several different frequencies at once, fueled by an internal rhythm that bounces between computational logic and pure analog horsepower.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4 text-left w-full">
              <div className="p-5 bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow rounded-none w-full stream-element" style={streamDelay(7)}>
                <h3 className="text-primary font-bold font-dotted text-xl mb-3 border-b-2 border-zinc-200 pb-2 tracking-wide">AI THIS - AI THAT</h3>
                <ul className="text-base space-y-1.5 text-zinc-600 font-dotted tracking-wide">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>Machine Learning</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>LLMs</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>FineTuning</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>Reinforcement Learning</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>Agentic Systems</li>
                </ul>
              </div>
              <div className="p-5 bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow rounded-none w-full stream-element" style={streamDelay(8)}>
                <h3 className="text-primary font-bold font-dotted text-xl mb-3 border-b-2 border-zinc-200 pb-2 tracking-wide">OTHERS</h3>
                <ul className="text-base space-y-1.5 text-zinc-600 font-dotted tracking-wide">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></span>Python</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></span>Automotive</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></span>Music</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></span>Food</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;