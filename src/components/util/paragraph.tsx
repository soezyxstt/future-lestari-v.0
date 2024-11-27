'use client';
import { motion, useScroll } from 'motion/react';
import { useRef } from 'react';

export default function Paragraph({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.25'],
  });

  return (
    <motion.p
      className=''
      ref={ref}
      style={{opacity: scrollYProgress}}
    >
      {children}
    </motion.p>
  );
}
