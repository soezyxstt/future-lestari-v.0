'use client';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  useSpring,
  useMotionTemplate,
  useTransform,
} from 'motion/react';
import { useState } from 'react';
import { Mail, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useWindowSize } from 'usehooks-ts';

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const { height } = useWindowSize();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [hidden, setHidden] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > scrollY.getPrevious()! && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const blurT = useTransform(scrollY, [0, height * 0.9, height], [0, 0, 15]);
  const blur = useMotionTemplate`blur(${blurT}px)`;

  const navItems = [
    'about',
    'timeline',
    'benefits',
    'judges',
    'partners',
    'FAQ',
  ];
  const socialLinks = [
    { name: 'Twitter', href: '#', Icon: Twitter },
    { name: 'Instagram', href: '#', Icon: Instagram },
    { name: 'LinkedIn', href: '#', Icon: Linkedin },
  ];

  return (
    <>
      <button
        className='md:hidden fixed top-6 right-6 w-8 h-8 flex flex-col justify-center items-center z-[60]'
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <motion.span
          className='w-8 h-0.5 bg-accent-primary block absolute'
          animate={{
            rotate: isMobileMenuOpen ? 45 : 0,
            y: isMobileMenuOpen ? 0 : -8,
            width: isMobileMenuOpen ? 24 : 24,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className='w-6 h-0.5 bg-accent-primary block absolute'
          animate={{
            opacity: isMobileMenuOpen ? 0 : 1,
            x: isMobileMenuOpen ? 20 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className='w-4 h-0.5 bg-accent-primary block absolute'
          animate={{
            rotate: isMobileMenuOpen ? -45 : 0,
            y: isMobileMenuOpen ? 0 : 8,
            width: isMobileMenuOpen ? 24 : 16,
          }}
          transition={{ duration: 0.3 }}
        />
      </button>

      <motion.nav
        className='fixed top-0 left-0 w-full flex items-center justify-between h-20 px-6 z-30 transition-all duration-300'
        animate={{ y: hidden ? '-100%' : '0%' }}
        style={{ backdropFilter: blur }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className='absolute -bottom-0.5 left-0 right-0 h-px bg-lime/50 origin-left z-50'
          style={{ scaleX }}
        />
        <Link
          href='#hero'
          className='text-lg font-semibold text-lime hover:text-text-hover transition-colors'
        >
          Eventname
        </Link>

        <div
          className='hidden md:flex gap-6 relative group'
          id='nav-links'
        >
          <motion.div
            className='absolute h-full w-[calc(100%/6-1.25rem)] bg-transparent rounded-lg group-hover:bg-accent-primary/10 '
            initial={false}
            animate={{
              x: `calc(${activeTab * 100}% + ${activeTab * 1.5}rem)`,
            }}
            exit={{ y: -100 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          {navItems.map((item, index) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className='relative py-2 flex justify-center w-24 text-lime hover:text-green-light font-semibold transition-colors z-10 capitalize'
              onMouseEnter={() => setActiveTab(index)}
            >
              {item}
            </Link>
          ))}
        </div>

        <Link
          href='#register'
          className='hidden md:block px-4 py-2 rounded-lg text-lime font-medium hover:text-white transition-colors relative group overflow-hidden border border-accent-primary'
        >
          <div className='absolute inset-0 bg-green-700 w-0 group-hover:w-full transition-all duration-500 ease-in-out' />
          <span className='relative z-10'>Register</span>
        </Link>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className='fixed inset-0 bg-black/20 backdrop-blur-sm z-40'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className='fixed right-0 top-0 h-dvh w-72 bg-white z-50 shadow-lg'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              <div className='inset-0 bg-accent-primary/15 absolute z-0 isolate'></div>
              <div className='flex flex-col h-full relative z-10'>
                {/* Navigation Links */}
                <div className='flex flex-col gap-2.5 p-8 mt-24'>
                  <h2 className='text-sm font-light mb-2 text-accent-primary/80 italic'>
                    Menu
                  </h2>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        href={`#${item}`}
                        className='text-lg text-accent-primary font-medium hover:text-accent-secondary transition-colors'
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Register Link */}
                <motion.div
                  className='px-8'
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    href='#register'
                    className='text-lg text-accent-primary font-bold italic hover:text-accent-secondary transition-colors'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  className='mt-auto p-6 border-t border-black/80'
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className='text-sm font-light text-black/70 italic mb-2'>
                    Contact Us
                  </h3>
                  <a
                    href='mailto:contact@event.com'
                    className='text-sm text-black/60 font-light italic hover:text-black/90 flex items-center gap-2'
                  >
                    <Mail size={16} />
                    contact@event.com
                  </a>

                  {/* Social Media Links */}
                  <div className='flex gap-4 mt-4'>
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        className='text-black/70 hover:text-black/70'
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        title={social.name}
                      >
                        <social.Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
