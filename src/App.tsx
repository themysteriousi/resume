import { useEffect } from 'react';
import Lenis from 'lenis';
import { Agentation } from 'agentation';
import { SterlingGateKineticNavigation } from './components/ui/sterling-gate-kinetic-navigation';
import CosmosHero from './components/CosmosHero';
import About from './components/About';
import Experience from './components/Experience';
import ProjectGrid from './components/Projects/ProjectGrid';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary relative">
      <SterlingGateKineticNavigation />

      <main className="mx-auto max-w-7xl px-4 py-5 space-y-14 sm:px-6 sm:py-8 sm:space-y-16 lg:px-8 lg:py-9 lg:space-y-16">
        {/* Render Agentation for annotation features in development */}
        {/* Using import.meta.env.DEV since this is a Vite project */}
        {import.meta.env?.DEV && <Agentation />}
        <CosmosHero />
        <Experience />
        <About />
        <ProjectGrid />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
