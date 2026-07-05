import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

const HoverCharNav = ({ href, children, className = '' }: { href: string; children: string; className?: string }) => {
  return (
    <a href={href} className={`inline-flex items-center group ${className}`}>
      {children.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block relative"
          initial={{ y: 0, opacity: 1 }}
          whileHover={{ y: [-2, 0, 2, 0], opacity: [0.6, 1] }}
          transition={{ duration: 0.16, ease: "easeInOut" }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </a>
  );
};

export const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav id="nav" style={{ 
        position: 'fixed', top: 0, left: 'var(--char2)', right: 'var(--char2)', 
        width: 'calc(100vw - var(--char)*4)', height: 'calc(var(--line)*3)', 
        paddingTop: 'var(--line)', zIndex: 11, 
        textTransform: 'uppercase', fontVariationSettings: "'MONO' 1, 'wght' 500" 
      }} className="grid grid-cols-4 md:grid-cols-4 sm:flex sm:justify-between items-start">
        
        <div className="col-span-1">
          <a href="/" className="home hover:bg-transparent">AINO</a>
        </div>
        
        <div className="col-span-1 hidden md:flex gap-[var(--char2)]">
          <HoverCharNav href="#work" className="work">WORK</HoverCharNav>
          <HoverCharNav href="#services">SERVICES</HoverCharNav>
        </div>
        
        <div className="col-span-1 hidden md:flex gap-[var(--char2)] secondary">
          <HoverCharNav href="#about" className="about">ABOUT</HoverCharNav>
          <HoverCharNav href="#play">PLAY</HoverCharNav>
        </div>
        
        <div className="col-span-1 hidden md:flex justify-end last">
          <HoverCharNav href="#contact">CONTACT</HoverCharNav>
        </div>

        <div className="md:hidden flex gap-[var(--char2)] mobile">
          <button className="ghost mobile-contact">CONTACT</button>
          <button className="ghost" onClick={() => setMobileMenuOpen(true)}>MENU</button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[var(--white)] z-[999] flex flex-col p-[calc(var(--line)*7)] px-[var(--char2)] pb-[var(--line)]">
          <div className="flex justify-between uppercase mb-[var(--line)]">
            <span>AINO</span>
            <button onClick={() => setMobileMenuOpen(false)}>CLOSE</button>
          </div>
          <div className="flex flex-col gap-[var(--line)] text-[calc(var(--font-size)*2)] uppercase">
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>WORK</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>SERVICES</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
            <a href="#play" onClick={() => setMobileMenuOpen(false)}>PLAY</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
          </div>
        </div>
      )}
    </>
  );
};
