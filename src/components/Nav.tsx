import { useState, SVGProps } from 'react';
import { FileText, Menu, X } from 'lucide-react';
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

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const NAV_LINKS = [
  { href: '#hero', label: '#hero' },
  { href: '#about', label: '#about' },
  { href: '#projects', label: '#projects' },
  { href: '#architecture', label: '#architecture' },
  { href: '#timeline', label: '#timeline' },
  { href: '#skills', label: '#skills' },
  { href: '#contact', label: '#contact' },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border/80 bg-background/80 backdrop-blur-xl sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full group-hover:border-primary/40 transition-all">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs text-primary font-bold tracking-wider">
              OM CHAUHAN
            </span>
          </div>
          <span className="hidden md:inline font-mono text-xs text-muted-foreground">| AI &amp; DevOps Portfolio</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-secondary-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center space-x-3">
          <a href={resumeData.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-card">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={resumeData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-card">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${resumeData.email}`} aria-label="Email Contact" className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-card">
            <MailIcon className="h-4 w-4" />
          </a>
          <a 
            href="Om_Chauhan_Resume.pdf" 
            target="_blank" 
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 text-xs font-mono border border-primary/30 transition-all shadow-sm"
          >
            <FileText size={13} />
            <span>RESUME.PDF</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 py-4 space-y-3 font-mono text-xs">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-secondary-foreground hover:text-primary">
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3 border-t border-border">
            <a href="Om_Chauhan_Resume.pdf" target="_blank" className="text-primary flex items-center gap-1">
              <FileText size={14} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
