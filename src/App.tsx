import { useEffect } from 'react';
import Lenis from 'lenis';
import { useGridSystem } from './utils/grid';
import { Nav } from './components/Nav';
import { HeroGrid } from './components/HeroGrid';
import { Tagline } from './components/Tagline';
import { ProjectFeed } from './components/ProjectFeed';
import { Footer } from './components/Footer';
import { AsciiField } from './components/AsciiField';

export default function App() {
  useGridSystem();

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'q' || e.key === 'Q') {
        document.documentElement.classList.toggle('textmode');
      }
      if (e.key === 'p' || e.key === 'P') {
        document.documentElement.classList.toggle('pixelmode');
      }
      if (e.key === 'g' || e.key === 'G') {
        document.documentElement.classList.toggle('grid');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Auto Dark Mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      lenis.destroy();
      window.removeEventListener('keydown', handleKeyDown);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <>
      <AsciiField />
      <Nav />
      <main id="app" style={{ padding: 'calc(var(--line)*3) calc(var(--char)*2)' }} className="md:pb-[calc(var(--line)*4)] pb-0 relative z-10">
        <HeroGrid />
        <Tagline />
        <ProjectFeed />
      </main>
      <Footer />
    </>
  );
}
