'use client';

import About from '@/components/about';
import Hero from '@/components/hero';
import Timeline from '@/components/timeline';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      multiplier: 0.75,
      lerp: 0.075,
    });

    // Cleanup
    return () => scroll.destroy();
  }, []);

  return (
    <main ref={ref}>
      <Hero />
      <About />
      <Timeline />
    </main>
  );
}
