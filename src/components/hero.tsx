'use client';

import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1 / 1.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.75], [0, 350]);
  const background = useMotionTemplate`radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, ${opacity}))`;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -40 * t)),
      lerp: 0.05,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
        transition={{ duration: 0.5, stiffness: 100, damping: 30 }}
        className='h-screen w-full sticky top-0 left-0 z-0' // Changed to fixed positioning
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
        animate={{ opacity: 1, y: 0 }}
        style={{ y }}
        transition={{ duration: 0.75, delay: 0.5 }}
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
          animate={{ scale: 1, opacity: 1, transition: { delay: 1 } }}
          className='bg-lime translate-y-6 w-full h-px rounded-full origin-center'
        />
      </motion.div>
    </section>
  );
}
