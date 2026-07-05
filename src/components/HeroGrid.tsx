import React from 'react';
import { ProjectCard } from './ProjectCard';

export const HeroGrid = () => {
  return (
    <section className="section !mt-0 !pt-0">
      <ProjectCard 
        href="#work/sandisk"
        widthClass="w4"
        imgSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/sandisk_disc-NJCqE5wIGx5InoLEnhbck3lGKDmqJq-lz4KYW8qrySBTVgKhAppfeJEi06zmt.jpg"
        caption="A002 SANDISK"
        index={0}
      />
      <ProjectCard 
        href="#work/samsoe-samsoe"
        widthClass="w4"
        videoSrc="https://jptmwnfp3yiatrcf.public.blob.vercel-storage.com/samsoe_desktomob-jTnGxZE32YXB0ZknrflbcoCqHp8ROt%20%281%29-SNIuQiSmr9lcs38iiIixl038JzhgRz.mp4"
        caption="A004 SAMSØE SAMSØE"
        index={1}
      />
    </section>
  );
};
