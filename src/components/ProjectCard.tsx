import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AsciiHoverCanvas } from './AsciiHoverCanvas';

interface ProjectCardProps {
  href: string;
  imgSrc?: string;
  videoSrc?: string;
  caption: string;
  className?: string;
  widthClass?: string; // e.g. "w4", "w8"
  index?: number;
}

export const ProjectCard = ({ 
  href, 
  imgSrc, 
  videoSrc, 
  caption, 
  className = '', 
  widthClass = '',
  index = 0
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.a
      href={href}
      className={`col ${widthClass} burn ${className} block cursor-pointer`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsRevealed(true)}
      viewport={{ once: true, margin: "-10%", amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <motion.div
          animate={{ scale: isHovered ? 1.002 : 1 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full relative"
        >
          {imgSrc && (
            <div className="image relative w-full h-full">
              <img 
                src={imgSrc} 
                alt={caption} 
                className="w-full h-auto block object-cover" 
                style={{ mixBlendMode: 'multiply' }}
                loading={index < 2 ? "eager" : "lazy"}
              />
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                style={{ mixBlendMode: 'color-dodge' }}
                initial={{ backgroundColor: 'var(--white)' }}
                animate={{ backgroundColor: isRevealed ? 'var(--black)' : 'var(--white)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <AsciiHoverCanvas src={imgSrc} isHovered={isHovered} />
            </div>
          )}
          {videoSrc && (
            <div className="video relative w-full h-full" style={{ aspectRatio: '1498/1874' }}>
              <video 
                src={videoSrc} 
                autoPlay 
                playsInline 
                loop 
                muted 
                preload={index < 2 ? "auto" : "none"}
                className="w-full h-full object-cover" 
                crossOrigin="anonymous" 
              />
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                style={{ mixBlendMode: 'color-dodge' }}
                initial={{ backgroundColor: 'var(--white)' }}
                animate={{ backgroundColor: isRevealed ? 'var(--black)' : 'var(--white)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </div>
          )}
        </motion.div>
      </div>

      <motion.div 
        className="html mt-[var(--line)]"
        animate={{ opacity: isHovered ? 1 : 0.8 }}
      >
        <h3 className="uppercase" style={{ fontVariationSettings: "'MONO' 0.4, 'wght' 500" }}>
          {caption}
        </h3>
      </motion.div>
    </motion.a>
  );
};
