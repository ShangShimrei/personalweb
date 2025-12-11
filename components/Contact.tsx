import React, { useState } from 'react';
import { Icon } from './Icon';
import { SOCIAL_LINKS } from '../constants';
import { Loader2, CheckCircle, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', interest: 'General Inquiry', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-zinc-50 scroll-mt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-8xl mx-auto reveal">
        <div className="w-full bg-zinc-900 text-white p-6 md:p-10 lg:p-12 relative overflow-hidden shadow-2xl rounded-none">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zinc-800 rounded-full blur-[100px] -mr-32 -mt-32 opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-none">Let's work <br/>together</h2>
                <p className="text-zinc-400 font-light mb-6 leading-relaxed text-base md:text-lg text-justify">
                  Have a project in mind? I'm always open to discussing new ideas, opportunities, or just having a chat about design.
                </p>
                
                <div className="space-y-3 mb-6">
                  {/* Mail */}
                  <div className="flex items-center gap-4 text-zinc-300 group">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-none shrink-0">
                      <Icon name="mail" className="w-4 h-4" />
                    </div>
                    <a href="mailto:shanghasnomail.shang.com" className="text-base md:text-lg group-hover:text-white transition-colors break-all">shanghasnomail.shang.com</a>
                  </div>

                  {/* Github */}
                  <div className="flex items-center gap-4 text-zinc-300 group">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-none shrink-0">
                      <Icon name="github" className="w-4 h-4" />
                    </div>
                    <a href="https://shang.github.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg group-hover:text-white transition-colors break-all">shang.github.com</a>
                  </div>

                  {/* Mobile */}
                  <div className="flex items-center gap-4 text-zinc-300 group">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-none shrink-0">
                      <Icon name="phone" className="w-4 h-4" />
                    </div>
                    <a href="tel:0123456789" className="text-base md:text-lg group-hover:text-white transition-colors">0123456789</a>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4 text-zinc-300 group">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-none shrink-0">
                       <Icon name="mappin" className="w-4 h-4" />
                    </div>
                    <span className="text-base md:text-lg group-hover:text-white transition-colors">noadress, HP</span>
                  </div>
                </div>
              </div>

              {/* Social Handles */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-3">Social Handles</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a 
                      key={link.platform}
                      href={link.url}
                      className="w-9 h-9 flex items-center justify-center border border-zinc-700 text-zinc-400 hover:bg-white hover:text-zinc-900 transition-all duration-300"
                      aria-label={link.platform}
                    >
                      <Icon name={link.icon} className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              {isSuccess ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 animate-fade-in bg-zinc-900/50 backdrop-blur-sm z-20 border border-white/10">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 text-black shadow-lg shadow-green-500/20">
                    <CheckCircle size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">Message Sent!</h3>
                  <p className="text-zinc-400 text-base max-w-sm">
                    Thanks for reaching out. I'll get back to you regarding your {formData.interest.toLowerCase()} inquiry shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : null}

              <form className={`space-y-4 transition-opacity duration-300 ${isSuccess ? 'opacity-0' : 'opacity-100'}`} onSubmit={handleSubmit}>
                 <div>
                   <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5">Name</label>
                   <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all placeholder-zinc-600 rounded-none text-sm"
                      placeholder="Jane Doe"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5">Email</label>
                   <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all placeholder-zinc-600 rounded-none text-sm"
                      placeholder="jane@example.com"
                   />
                 </div>
                 <div>
                   <label htmlFor="interest" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5">Interested In</label>
                   <div className="relative">
                     <select 
                        id="interest" 
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all rounded-none appearance-none cursor-pointer text-sm"
                     >
                        <option value="General Inquiry" className="bg-zinc-900 text-white">General Inquiry</option>
                        <option value="AI Consultation" className="bg-zinc-900 text-white">AI Consultation</option>
                        <option value="Web Development" className="bg-zinc-900 text-white">Web Development</option>
                        <option value="Model Fine-Tuning" className="bg-zinc-900 text-white">Model Fine-Tuning</option>
                        <option value="Collaboration" className="bg-zinc-900 text-white">Collaboration</option>
                     </select>
                     <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/></svg>
                     </div>
                   </div>
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5">Message</label>
                   <textarea 
                      id="message" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all placeholder-zinc-600 resize-none rounded-none text-sm"
                      placeholder="Tell me about your project..."
                   ></textarea>
                 </div>
                 <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-zinc-950 font-bold py-3 hover:bg-zinc-200 mt-2 shadow-xl rounded-none text-sm md:text-base tracking-wide flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 active:translate-y-0"
                 >
                   {isSubmitting ? (
                     <>
                       <Loader2 className="animate-spin" size={16} />
                       Sending...
                     </>
                   ) : (
                     <>
                       Send Message
                       <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                     </>
                   )}
                 </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;