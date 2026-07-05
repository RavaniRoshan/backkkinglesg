import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DENSITY = " ·:;!+/>?%#@";

export const AsciiHoverCanvas = ({ 
  src, 
  isHovered 
}: { 
  src: string;
  isHovered: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ascii, setAscii] = useState<string>('');

  useEffect(() => {
    if (!isHovered) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const W = 96;
      const H = 120;
      canvas.width = W;
      canvas.height = H;
      
      ctx.drawImage(img, 0, 0, W, H);
      const imgData = ctx.getImageData(0, 0, W, H);
      const pixels = imgData.data;

      let asciiStr = '';
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const idx = (y * W + x) * 4;
          const r = pixels[idx];
          const g = pixels[idx + 1];
          const b = pixels[idx + 2];
          
          // simple luminance
          const lum = (r * 0.299 + g * 0.587 + b * 0.114);
          const charIdx = Math.floor((lum / 255) * (DENSITY.length - 1));
          asciiStr += DENSITY[charIdx];
        }
        asciiStr += '\n';
      }
      setAscii(asciiStr);
    };
  }, [src, isHovered]);

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="absolute inset-0 z-10 hidden md:block" // Hidden on mobile, as hover is mostly desktop
          style={{ pointerEvents: 'none', background: 'var(--white)' }}
        >
          <canvas ref={canvasRef} className="hidden" />
          <div className="ascii font-mono leading-none tracking-tight text-[6px] whitespace-pre flex items-center justify-center h-full w-full overflow-hidden text-[var(--black)]">
            {ascii}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
