'use client';

import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1 / 1.5], [.7, 0]);
  const background = useMotionTemplate`radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, ${opacity}))`;

  return (
    <section
      ref={ref}
      id='hero'
      className='relative min-h-screen overflow-hidden' 
    >
      <motion.div
        style={{
          scale,
        }}
        transition={{ duration: 0.25, stiffness: 25, damping: 0 }}
        className='h-screen w-full top-0 left-0 z-0' 
      >
        <Image
          src='/hero.png'
          alt='Hero Background'
          width={1920}
          height={1080}
          className='bg-center z-0 isolate object-cover h-full'
        />
      </motion.div>
        <motion.div
          style={{ background }}
          className='inset-0 absolute'
        />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
        style={{ y }}
        className='z-10 absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] tablet:w-[50vw] space-y-4 md:space-y-6'
      >
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center'>
          FutureGen for Change
        </h1>
        <p className='text-sm md:text-base lg:text-lg text-white text-center'>
          A collaborative initiative that develops tech-driven solutions for Indonesia&apos;s most pressing sustainability and societal challenges. 
        </p>
      </motion.div>
    </section>
  );
}
