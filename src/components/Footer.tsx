import React, { useEffect, useState } from 'react';

export const Footer = () => {
  const [time, setTime] = useState('— —:—');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Stockholm',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      setTime(`— ${formatter.format(new Date())}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 10000); // 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="footer" data-component="footer" style={{ 
      padding: 'calc(var(--line)*2) var(--char2) 0', 
      textTransform: 'uppercase', 
      fontVariationSettings: "'MONO' 1, 'wght' 500", 
      position: 'relative', 
      bottom: 'calc(var(--line) * -1)', 
      cursor: 'default',
      overflow: 'hidden'
    }}>
      <div className="image logo" style={{ background: 'transparent' }}>
        <img 
          src="https://aino.agency/aino-agency.svg" 
          width="719" 
          height="107" 
          alt="Aino" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
          className="dark:invert dark:opacity-90"
        />
      </div>
      
      <section className="section shortcuts wrap flex flex-wrap md:flex-nowrap" style={{ 
        top: 'calc(var(--line) * -3)', 
        minHeight: 'calc(var(--line) * 2)', 
        position: 'relative', 
        zIndex: 2 
      }}>
        <div className="col loctime hidden md:flex">
          <div className="location">GBG/OSL</div>
          <div className="time" id="footer-clock">{time}</div>
        </div>
        
        <div className="col w4 halfwidth md:w-auto flex-1">
          <h2>New Business</h2>
          <a href="mailto:julie@aino.agency" className="hover:bg-[var(--black)] hover:text-[var(--white)] inline-block w-fit px-1 -mx-1">
            julie@aino.agency
          </a>
        </div>
        
        <div className="col halfwidth flex-1 text-left md:text-right">
          <a href="https://linkedin.com/company/aino" target="_blank" rel="noreferrer" className="hover:bg-[var(--black)] hover:text-[var(--white)] inline-block w-fit px-1 -mx-1 md:ml-auto md:mr-[-4px]">
            Linkedin
          </a>
          <a href="https://instagram.com/aino.agency" target="_blank" rel="noreferrer" className="hover:bg-[var(--black)] hover:text-[var(--white)] inline-block w-fit px-1 -mx-1 md:ml-auto md:mr-[-4px]">
            Instagram
          </a>
        </div>
      </section>
    </footer>
  );
};
