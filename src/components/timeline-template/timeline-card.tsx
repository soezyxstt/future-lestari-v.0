'use client';

import { cn } from '@/lib/util';
import { motion } from 'motion/react';
import { HTMLAttributes } from 'react';

interface TimelineCardProps {
  title: string;
  date: string;
  description: string;
  index: number;
}

interface TimelineCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  date: string;
  description: string;
  index: number;
  isDesktop: boolean;
}

function TimelineCard({ title, description, date, index, className, isDesktop }: TimelineCardProps) {

  const isOdd = index % 2 === 0;
  return (
    <motion.div className={cn('relative flex', isOdd ? 'md:flex-row-reverse md:-translate-x-full' : 'md:flex-row')} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className={cn('relative grid place-items-center bg-white rounded-full w-10 h-10 md:w-20 md:h-20', isOdd ? 'md:translate-x-1/2 -translate-x-1/2' : '-translate-x-1/2')} >
        <p className='font-[Helvetica] font-semibold text-xl md:text-3xl text-accent-primary font-stretch-extra-condensed'>{`${index + 1}`.padStart(2, '0')}</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
        // viewport={{ once: true, amount: 0.5 }}
        className={cn('bg-white border flex flex-col justify-center border-accent-primary/75 p-4 md:p-6 rounded-sm h-32 w-72 max-sm:max-w-[calc(100vw-4rem)] md:h-42.5 md:w-100 shadow-timeline-right', isOdd ? 'shadow-timeline-right' : 'md:shadow-timeline-left', className)}>
        <motion.div
          initial={{ opacity: 0, x: isDesktop ? (isOdd ? 30 : -30) : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
          className={cn("flex text-text-muted text-sm font-medium mb-2", isOdd ? 'md:justify-end' : 'md:justify-start')}>
          <h3 className=''>{title}</h3>
          <span className='mx-2'>:</span>
          <p className=''>{date}</p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: isDesktop ? (isOdd ? 30 : -30) : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
          className={cn('md:text-3xl w-full text-xl font-[Arial] text-green-600 font-bold font-stretch-extra-condensed text-wrap', isOdd ? 'md:text-right' : 'md:text-left')}>{description}</motion.p>
      </motion.div>
    </motion.div>
  )
}

export default TimelineCard;