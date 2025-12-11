import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white scroll-mt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4 reveal">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">About Me</h2>
            <div className="h-2 w-16 bg-zinc-800 mb-6"></div>
            <p className="text-2xl md:text-3xl text-zinc-500 uppercase tracking-widest font-bold leading-normal">
              AI Enthusiast <br/>
              Python <br/>
              Petrolhead
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-6 text-lg md:text-xl text-zinc-600 font-light leading-relaxed reveal stagger-1 text-justify">
            <p>
              Meet Shang, a magnificent mess of caffeine jitters and a genuinely curious person about all things tech.
            </p>
            <p>
              By day, he is a total AI enthusiast, spending his hours tinkering with neural networks, Large Language Models (LLMs), and Reinforcement Learning—pondering the future of machine learning with the intensity usually reserved for philosophical debate.
            </p>
            <p>
              When he finally unplugs from the matrix, Shang instantly transforms into a raging petrolhead—who totally lacks a driver's license—probably blasting classic rock music so loud you can hear the guitar solo over the roar of the engine.
            </p>
            <p>
              Dude is operating on several different frequencies at once, fueled by an internal rhythm that bounces between computational logic and pure analog horsepower.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-6 reveal stagger-2 text-left w-full">
              <div className="p-6 bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow rounded-none w-full">
                <h3 className="text-primary font-bold font-dotted text-2xl mb-4 border-b-2 border-zinc-200 pb-3 tracking-wide">AI THIS - AI THAT</h3>
                <ul className="text-lg space-y-2 text-zinc-600 font-dotted tracking-wide">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>Machine Learning</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>LLMs</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>FineTuning</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>Reinforcement Learning</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full shrink-0"></span>Agentic Systems</li>
                </ul>
              </div>
              <div className="p-6 bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow rounded-none w-full">
                <h3 className="text-primary font-bold font-dotted text-2xl mb-4 border-b-2 border-zinc-200 pb-3 tracking-wide">OTHERS</h3>
                <ul className="text-lg space-y-2 text-zinc-600 font-dotted tracking-wide">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></span>Python</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></span>Automotive</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></span>Music</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></span>Food</li>
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