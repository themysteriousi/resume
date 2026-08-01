import { useState, SVGProps } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { resumeData } from '../../content/data';

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

export function SterlingGateKineticNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fullscreen-menu-container">
      <div className="site-header-wrapper">
        <header className="header">
          <div className="container is--full">
            <nav className="nav-row">
              <a href="#hero" aria-label="home" className="nav-logo-row w-inline-block flex items-center space-x-3 group">
                <div className="flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full group-hover:border-primary/40 transition-all">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-mono text-xs text-primary font-bold tracking-wider">OM CHAUHAN</span>
                </div>
                <span className="hidden md:inline font-mono text-xs text-muted-foreground">| AI & DevOps Portfolio</span>
              </a>

              <div className="nav-row__right">
                <button
                  type="button"
                  className="nav-close-btn"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  aria-label="Toggle menu"
                >
                  <div className="menu-button-text-wrapper">
                    <div className="menu-button-text">
                      <p className="p-large font-mono text-xs font-bold uppercase tracking-widest">Menu</p>
                      <p className="p-large font-mono text-xs font-bold uppercase tracking-widest text-primary">Close</p>
                    </div>
                  </div>
                  <div className="icon-wrap">
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      {isMenuOpen && (
        <div className="nav-overlay-wrapper" data-nav="open" style={{ display: 'block' }}>
          <div className="overlay" onClick={closeMenu}></div>
          <nav className="menu-content">
            <div className="menu-bg">
              <div className="backdrop-layer first"></div>
              <div className="backdrop-layer second"></div>
              <div className="backdrop-layer"></div>
              <div className="ambient-background-shapes" aria-hidden="true">
                <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(99,102,241,0.15)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(139,92,246,0.12)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(236,72,153,0.1)" />
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(99,102,241,0.15)" />
                </svg>

                <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element" d="M0 200 Q100 100, 200 200 T 400 200" stroke="rgba(99,102,241,0.2)" strokeWidth="60" fill="none" />
                  <path className="shape-element" d="M0 280 Q100 180, 200 280 T 400 280" stroke="rgba(139,92,246,0.15)" strokeWidth="40" fill="none" />
                </svg>

                <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(99,102,241,0.3)" />
                  <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(139,92,246,0.3)" />
                  <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(236,72,153,0.3)" />
                  <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(99,102,241,0.3)" />
                  <circle className="shape-element" cx="100" cy="150" r="12" fill="rgba(139,92,246,0.25)" />
                  <circle className="shape-element" cx="200" cy="150" r="12" fill="rgba(236,72,153,0.25)" />
                  <circle className="shape-element" cx="300" cy="150" r="12" fill="rgba(99,102,241,0.25)" />
                  <circle className="shape-element" cx="50" cy="250" r="10" fill="rgba(236,72,153,0.3)" />
                  <circle className="shape-element" cx="150" cy="250" r="10" fill="rgba(99,102,241,0.3)" />
                  <circle className="shape-element" cx="250" cy="250" r="10" fill="rgba(139,92,246,0.3)" />
                  <circle className="shape-element" cx="350" cy="250" r="10" fill="rgba(236,72,153,0.3)" />
                  <circle className="shape-element" cx="100" cy="350" r="6" fill="rgba(99,102,241,0.3)" />
                  <circle className="shape-element" cx="200" cy="350" r="6" fill="rgba(139,92,246,0.3)" />
                  <circle className="shape-element" cx="300" cy="350" r="6" fill="rgba(236,72,153,0.3)" />
                </svg>

                <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element" d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100" fill="rgba(99,102,241,0.12)" />
                  <path className="shape-element" d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200" fill="rgba(236,72,153,0.1)" />
                </svg>

                <svg className="bg-shape bg-shape-5" viewBox="0 0 400 400" fill="none">
                  <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="rgba(99,102,241,0.15)" strokeWidth="30" />
                  <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="rgba(139,92,246,0.12)" strokeWidth="25" />
                  <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="rgba(236,72,153,0.1)" strokeWidth="20" />
                </svg>
              </div>
            </div>

            <div className="menu-content-wrapper">
              <ul className="menu-list">
                <li className="menu-list-item" data-shape="1">
                  <a href="#about" onClick={closeMenu} className="nav-link w-inline-block">
                    <p className="nav-link-text">About</p>
                    <div className="nav-link-hover-bg"></div>
                  </a>
                </li>
                <li className="menu-list-item" data-shape="2">
                  <a href="#timeline" onClick={closeMenu} className="nav-link w-inline-block">
                    <p className="nav-link-text">Experience</p>
                    <div className="nav-link-hover-bg"></div>
                  </a>
                </li>
                <li className="menu-list-item" data-shape="3">
                  <a href="#projects" onClick={closeMenu} className="nav-link w-inline-block">
                    <p className="nav-link-text">Projects</p>
                    <div className="nav-link-hover-bg"></div>
                  </a>
                </li>
                <li className="menu-list-item" data-shape="4">
                  <a href="#skills" onClick={closeMenu} className="nav-link w-inline-block">
                    <p className="nav-link-text">Skills</p>
                    <div className="nav-link-hover-bg"></div>
                  </a>
                </li>
                <li className="menu-list-item" data-shape="5">
                  <a href="#contact" onClick={closeMenu} className="nav-link w-inline-block">
                    <p className="nav-link-text">Contact</p>
                    <div className="nav-link-hover-bg"></div>
                  </a>
                </li>
              </ul>

              <div className="menu-actions" data-menu-fade>
                <a href={resumeData.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="menu-action-link">
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a href={resumeData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="menu-action-link">
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a href={`mailto:${resumeData.email}`} aria-label="Email Contact" className="menu-action-link">
                  <MailIcon className="h-4 w-4" />
                  <span>Email</span>
                </a>
                <a href="Om_Chauhan_Resume.pdf" target="_blank" rel="noreferrer" className="menu-action-link menu-action-link--primary">
                  <FileText size={13} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
