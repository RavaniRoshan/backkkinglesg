import React, { useEffect, useRef } from 'react';

export const AsciiField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = 140;
    canvas.height = 48;
    
    const chars = "AINO•◦+/#".split('');
    let mouse = { x: 70, y: 24 };
    let targetMouse = { x: 70, y: 24 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = Math.floor((e.clientX / width) * 140);
      targetMouse.y = Math.floor((e.clientY / height) * 48);
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      // Lerp mouse
      mouse.x += (targetMouse.x - mouse.x) * 0.1;
      mouse.y += (targetMouse.y - mouse.y) * 0.1;

      ctx.fillStyle = 'white'; // Use white as base so it becomes transparent in multiply mode
      ctx.fillRect(0, 0, 140, 48);
      
      ctx.font = '2px monospace';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let y = 0; y < 48; y++) {
        for (let x = 0; x < 140; x++) {
          const dx = x - mouse.x;
          const dy = (y - mouse.y) * 2.5; // aspect ratio correction
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 15) {
            const charIdx = Math.floor((dist / 15) * chars.length + (Date.now() / 200)) % chars.length;
            ctx.fillText(chars[charIdx], x, y);
          } else {
            // scatter some noise
            if (Math.random() < 0.01) {
               ctx.fillText('·', x, y);
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 mix-blend-multiply opacity-[0.06] w-full h-full"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};
