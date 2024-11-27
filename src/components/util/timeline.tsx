'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  date: string;
  title: string;
  content: React.ReactNode;
}

export const TimelineAceternity = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className='w-full bg-white font-sans md:px-10'
      ref={containerRef}
    >
      <div
        ref={ref}
        className='relative max-w-7xl mx-auto pb-20'
      >
        {data.map((item, index) => (
          <div
            key={index}
            className='flex justify-start pt-10 md:pt-40 md:gap-10'
          >
            <div className='sticky flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full'>
              <div className='md:h-10 h-8 absolute left-4 md:left-3 w-8 md:w-10 rounded-full bg-accent-primary/40 flex items-center justify-center'>
                <div className='h-4 w-4 rounded-full bg-accent-secondary border-2 border-neutral-100 p-2' />
              </div>
              <motion.h3
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className='hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-green-700'
              >
                {item.title}
              </motion.h3>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='relative pl-20 pr-4 md:pl-4 w-full'
            >
              <h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-green-700 '>
                {item.title}
              </h3>
              {item.content}{' '}
            </motion.div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-accent-primary via-lime to-transparent from-[0%] via-[10%] rounded-full'
          />
        </div>
      </div>
    </div>
  );
};
