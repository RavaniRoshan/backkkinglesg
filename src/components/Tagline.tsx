import React, { useRef, useState } from 'react';
import { CharStaggerText } from './CharStaggerText';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const MagneticButton = ({ children, href, delay }: { children: React.ReactNode, href: string, delay: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // limit max translation to 6px
    x.set((distanceX / rect.width) * 12);
    y.set((distanceY / rect.height) * 12);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className="button fadein"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  );
};

export const Tagline = () => {
  return (
    <section className="section" style={{ marginTop: 'calc(var(--line) * 5)' }}>
      <div className="col w5 w-full">
        <div className="html">
          <p 
            className="mega stagger" 
            style={{ 
              fontSize: 'calc(var(--font-size) * 3)', 
              lineHeight: 'calc(var(--line) * 2.4)', 
              letterSpacing: '-0.03em', 
              maxWidth: '22ch' 
            }}
          >
            <CharStaggerText text="We build premium storefronts where brands grow and consumers fall in love." />
          </p>
          <br/>
          <div style={{ display: 'flex', gap: 'var(--char)', marginBottom: 'var(--line)' }}>
            <MagneticButton href="#work" delay={0.6}>All work</MagneticButton>
            <MagneticButton href="#services" delay={0.7}>Our services</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
