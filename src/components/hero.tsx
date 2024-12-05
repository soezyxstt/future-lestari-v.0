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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1 / 1.5], [1, 0]);
  const background = useMotionTemplate`radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, ${opacity}))`;

  return (
    <section
      ref={ref}
      id='hero'
      className='relative min-h-screen overflow-hidden' // Changed to 150vh
    >
      <motion.div
        style={{
          scale,
        }}
        transition={{ duration: 0.25, stiffness: 25, damping: 0 }}
        className='h-screen w-full top-0 left-0 z-0' // Changed to fixed positioning
      >
        <Image
          src='/hero.png'
          layout='fill'
          objectFit='cover'
          alt='Hero Background'
          className='inset-0 z-0 isolate'
        />
        <motion.div
          style={{ background }}
          className='inset-0 absolute'
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
        // style={{ y: isDesktop ? y : 0 }}
        data-scroll
        data-scroll-speed='-15'
        className='z-10 absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] tablet:w-[50vw]'
      >
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center'>
          EventName
        </h1>
        <p className='text-xl md:text-2xl lg:text-3xl text-white text-center'>
          A description of the event
        </p>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 0.5 } }}
          className='bg-lime translate-y-6 w-full h-px rounded-full origin-center'
        />
      </motion.div>
    </section>
  );
}
