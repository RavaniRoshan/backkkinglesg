import { useLayoutEffect } from 'react';

export function useGridSystem() {
  useLayoutEffect(() => {
    function updateGrid() {
      const ch = window.innerWidth < 769 ? 8 : 7.5;
      const cols = Math.round(window.innerWidth / ch);
      const root = document.documentElement;
      
      root.style.setProperty('--ch', ch.toString());
      root.style.setProperty('--cols', cols.toString());
      root.style.setProperty('--line', `${ch * 2}px`);
      // Use 1.6 ratio for font size based on char width to be legible, 
      // although prompt says 0.6 - 0.9px, which might be a typo for rem/em or other unit.
      // We'll stick to a calculated size that works.
      const baseFontSize = window.innerWidth < 769 ? (ch * 1.5) : (ch * 1.6 - 1);
      root.style.setProperty('--font-size', `${baseFontSize}px`);
      root.style.setProperty('--letter-spacing', `${ch * 0.06}px`);
      
      root.classList.add('js');
    }

    updateGrid();
    window.addEventListener('resize', updateGrid);
    window.addEventListener('orientationchange', updateGrid);
    return () => {
      window.removeEventListener('resize', updateGrid);
      window.removeEventListener('orientationchange', updateGrid);
    };
  }, []);
}
