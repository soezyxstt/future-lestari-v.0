'use client';
import { cn } from '@/lib/util';
import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { type HTMLAttributes, useId, useRef } from 'react';

export function WordsList({
  title,
  points,
  isList = false,
  withTitle = false,
  isGreen = false,
}: HTMLAttributes<HTMLDivElement> & {
  title: string;
  points: string[];
  isList?: boolean;
    withTitle?: boolean;
  isGreen?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const wordsL = points.map((words) => words.split(' ').length);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', '0.5 0.4'],
  });
  const l = points.reduce((acc, point) => acc + point.split(' ').length, 0);
  return (
    <div
      className={cn(
        'p-6 md:p-10 md:pl-12 max-w-[90vw] shadow-lg shadow-shadow text-green-800 rounded-lg text-sm md:text-lg lg:text-xl bg-white',
        isList && 'list-decimal',
        isGreen && 'bg-green-500/7.5'
      )}
      ref={ref}
    >
      <p className='flex text-lg md:text-2xl lg:text-3xl '>
        <span className='flex items-center mr-6 text-lg italic font-light md:text-2xl text-lime'>
          FGC
        </span>
        {title}
      </p>
      {points.map((words, index) => (
        <div
          className={cn(
            '',
            isList
              ? withTitle
                ? index % 2 === 0 && 'list-item font-semibold'
                : 'list-item'
              : ''
          )}
          key={words}
        >
          <Words
            words={words}
            l={l}
            scrollYProgress={scrollYProgress}
            start={
              index !== 0
                ? wordsL.slice(0, index).reduce((sum, num) => sum + num, 0) / l
                : 0
            }
          />
        </div>
      ))}
    </div>
  );
}

export function Words({
  words: paragraph,
  l,
  scrollYProgress,
  start: s,
}: {
  words: string;
  l: number;
  scrollYProgress: MotionValue<number>;
  start: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const words = paragraph.split(' ');
  const step = 1 / l;
  return (
    <div
      className='flex flex-wrap text-xs text-justify text-green-800 md:text-lg lg:text-xl'
      ref={ref}
    >
      {words.map((word, index) => {
        const start = s + index * step;
        const end = s + (index + 1) * step;

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
    </div>
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
    <p className='mt-3 mr-2 md:mr-3'>
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
    </p>
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
    <span className='relative'>
      <motion.span
        style={{ opacity: o }}
        transition={{ duration: 0.005, ease: 'linear' }}
        className='absolute z-0 isolate'
      >
        {children}
      </motion.span>
      <motion.span
        style={{ opacity }}
        transition={{ duration: 0.005, ease: 'linear' }}
      >
        {children}
      </motion.span>
    </span>
  );
}
