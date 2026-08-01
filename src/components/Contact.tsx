import { useState, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../content/data';

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <motion.section
      id="contact"
      className="border border-border bg-background/80 rounded-2xl p-6 sm:p-10 space-y-8 backdrop-blur-md"
      initial="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 font-mono">
          <MessageSquare size={20} className="text-primary" /> GET IN TOUCH WITH OM
        </h2>
        <p className="text-xs text-muted-foreground mt-1">Open for AI Engineering, DevOps/SRE, and Software Engineering opportunities</p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Details (5 cols) */}
        <div className="lg:col-span-5 space-y-4 font-mono text-xs">
          <div className="p-4 rounded-xl bg-card/60 border border-border space-y-1">
            <span className="text-muted-foreground text-[10px] uppercase">Direct Email</span>
            <a href={`mailto:${resumeData.email}`} className="text-primary font-semibold text-sm hover:underline block">
              {resumeData.email}
            </a>
          </div>

          <div className="p-4 rounded-xl bg-card/60 border border-border space-y-1">
            <span className="text-muted-foreground text-[10px] uppercase">Phone &amp; Location</span>
            <p className="text-foreground text-xs">{resumeData.phone} • {resumeData.location}</p>
          </div>

          <div className="p-4 rounded-xl bg-card/60 border border-border space-y-3">
            <span className="text-muted-foreground text-[10px] uppercase block">Social Channels</span>
            <div className="flex gap-3">
              <a 
                href={resumeData.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-2 px-3 rounded-lg bg-background hover:bg-muted border border-border text-foreground flex items-center justify-center gap-2 transition-all"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a 
                href={resumeData.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-2 px-3 rounded-lg bg-background hover:bg-muted border border-border text-foreground flex items-center justify-center gap-2 transition-all"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7 border border-border bg-background p-6 rounded-xl relative">
          {formSubmitted ? (
            <motion.div
              className="py-12 flex flex-col items-center justify-center space-y-3 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease }}
            >
              <CheckCircle2 size={42} className="text-primary animate-bounce" />
              <h3 className="text-base font-bold text-foreground font-mono">Message Sent Successfully!</h3>
              <p className="text-xs text-muted-foreground max-w-sm">Thank you for reaching out. Om will get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-muted-foreground uppercase mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-card/80 border border-border text-xs font-mono text-foreground focus:outline-none focus:border-primary/60"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-muted-foreground uppercase mb-1">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-card/80 border border-border text-xs font-mono text-foreground focus:outline-none focus:border-primary/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-muted-foreground uppercase mb-1">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Hi Om, I'd like to discuss a project..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-card/80 border border-border text-xs font-mono text-foreground focus:outline-none focus:border-primary/60 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-mono text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer"
              >
                <Send size={14} />
                <span>Send Direct Message</span>
              </button>
            </form>
          )}
        </div>

      </motion.div>
    </motion.section>
  );
}
