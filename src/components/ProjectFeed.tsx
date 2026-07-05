import React from 'react';
import { ProjectCard } from './ProjectCard';

export const ProjectFeed = () => {
  return (
    <>
      <section className="section between" style={{ marginTop: 'calc(var(--line) * 5)' }}>
        <ProjectCard 
          href="#work/nudie-jeans"
          widthClass="w4"
          imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/nudie-EfpCiKCFxlzQvbMmwruoVhZleMYCvp.jpg"
          caption="a001 nudie jeans"
          index={0}
        />
        <ProjectCard 
          href="#work/emmas"
          imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/mob_nav-wTPAfmJewv9zQ73JGv5jvhKKJm2YEU.png"
          caption="a020 emma s"
          index={1}
        />
      </section>

      <section className="section" style={{ marginTop: 'calc(var(--line) * 6)' }}>
        <ProjectCard 
          href="#work/all-blues"
          widthClass="w4"
          imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/Rectangle%20126-2yUuzWmUMJyPjNzKkdXxHJivWYeiZR.png"
          caption="A007 All Blues"
          index={0}
        />
        <ProjectCard 
          href="#work/gulled"
          widthClass="w4"
          imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/gulled-trENkQwmVFMc301YhadcmLt8aGMmhQ.png"
          caption="A010 Gulled"
          index={1}
        />
      </section>

      <section className="section" style={{ marginTop: 'calc(var(--line) * 6)' }}>
        <ProjectCard 
          href="#work/beyond-medals"
          widthClass="w8"
          imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/beyondstart-IrWWwTogRTfj5AdE8McUkezvBt6KJk.png"
          caption="a011 beyond medals"
          index={0}
        />
      </section>

      <section className="section" style={{ marginTop: 'calc(var(--line) * 6)' }}>
        <ProjectCard 
          href="#work/socksss"
          imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/socksss-VDU4pPXZJCDUn852K3u2gPDe1TkNC4.png"
          caption="a014 Socksss"
          index={0}
        />
        <ProjectCard 
          href="#work/tinted"
          imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/tinted-lYQ8201vhIw1dhE4C4mWOklP3MRSIC.png"
          caption="a015 tinted"
          index={1}
        />
        <ProjectCard 
          href="#work/sweet-sktbs"
          imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/sweet-6wcnGH0jVWvqRjvG1vMZCxfXURkaWM.png"
          caption="a021 sweet sktbs"
          index={2}
        />
      </section>

      <section className="section" style={{ marginTop: 'calc(var(--line) * 6)' }}>
        <ProjectCard 
          href="#work/molo"
          widthClass="w8"
          imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/molo_hero-xA3c2EqfWcnF0ZH8QkeA0KiknytXqd.png"
          caption="a005 Molo"
          index={0}
        />
      </section>

      <div className="section space" style={{ padding: 'calc(var(--line)*2) 0' }}></div>
    </>
  );
};
