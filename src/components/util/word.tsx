'use client';
import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { useId, useRef } from 'react';

export default function Word({ words: paragraph }: { words: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.25'],
  });

  const words = paragraph.split(' ');

  return (
    <p
      className='text-lg md:text-3xl lg:text-4xl p-6 md:p-10 flex flex-wrap max-w-[90vw] shadow-lg shadow-shadow text-green-800 bg-white rounded-lg text-justify'
      ref={ref}
    ><span className='italic font-light text-lg md:text-2xl mr-6 flex items-center text-lime'>Event Name</span>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;

        return (
          <W
            key={id + word + index}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {word}
          </W>
        );
      })}
    </p>
  );
}

function W({
  children,
  range: [start, end],
  progress,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const chars = children!.toString().split('');
  const amount = end - start;
  const step = amount / chars.length;

  return (
    <span className='mr-2 md:mr-3 mt-3'>
      {chars.map((char, index) => {
        const charStart = start + index * step;
        const charEnd = start + (index + 1) * step;

        return (
          <C
            key={char + index}
            range={[charStart, charEnd]}
            progress={progress}
          >
            {char}
          </C>
        );
      })}
    </span>
  );
}

function C({
  children,
  range: [start, end],
  progress,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const o = useTransform(progress, [start, end], [0.25, 0]);
  return (
    <span className='relative '>
      <motion.span style={{ opacity: o}} className='absolute z-0 isolate'>{children}</motion.span>
      <motion.span
        style={{ opacity }}
        >
        {children}
      </motion.span>
    </span>
  );
}
