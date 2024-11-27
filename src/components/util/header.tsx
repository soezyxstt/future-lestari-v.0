'use client';

import { cn } from '@/lib/util';
import { motion } from 'motion/react';
export default function Header({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn('text-4xl md:text-5xl font-bold text-emerald-800', className)}
    >
      {children}
    </motion.h2>
  );
}