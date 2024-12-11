'use client';

import About from '@/components/about';
import Hero from '@/components/hero';
import Timeline from '@/components/timeline';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Benefits from '@/components/benefits';
import Judges from '@/components/judges';
import Partners from '@/components/partners';
import Faqs from '@/components/faqs';

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis({
      // duration: 0.5,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.05,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Benefits />
      <Judges />
      <Partners />
      <Faqs />
    </>
  );
}
