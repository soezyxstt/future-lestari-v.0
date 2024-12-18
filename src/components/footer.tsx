import Link from 'next/link';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const navItems = [
    'about',
    'challenge areas',
    'benefits',
    // 'judges',
    'partners',
    'timeline',
    'FAQ',
  ];
  const socialLinks = [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCvKEPJS3t6Er1FsxSl7eJYA',
      Icon: Youtube,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/future.lestari/',
      Icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/future-lestari/?viewAsMember=true',
      Icon: Linkedin,
    },
  ];

  return (
    <footer
      className={`w-full bg-accent-primary text-white md:h-[600px] h-dvh relative`}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      <div className='absolute h-[calc(200dvh)] md:h-[calc(100vh+600px)] -top-[100dvh] w-full'>
        <div className='sticky top-[calc(100dvh-600px)] h-dvh md:h-[600px] w-full'>
          <div className='px-4 md:px-6 py-8 md:py-12 max-w-7xl mx-auto flex flex-col justify-center h-full'>
            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12'>
              {/* Top Navigation */}
              <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8 text-center'>
                <Image
                  src='/logo-putih.png'
                  width={1000}
                  height={1000}
                  alt='FGC'
                  className='md:h-40 w-auto  aspect-[2136/1176]'
                />
              </div>

              {/* Middle Navigation */}
              <div className='flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12 text-center'>
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className='text-white/80 hover:text-white transition-colors uppercase text-sm md:text-base'
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href='http://bit.ly/FGCRegistration'
                  target='_blank'
                  className='text-white/80 hover:text-white transition-colors uppercase text-sm md:text-base'
                >
                  Register Now
                </Link>
              </div>

              {/* Social Links */}
              <div className='flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12'>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className='text-white/80 hover:text-white transition-colors rounded-full border border-white/80 p-2'
                  >
                    <social.Icon
                      size={18}
                      className='md:w-5 md:h-5 w-4 h-4'
                    />
                  </a>
                ))}
              </div>

              {/* Bottom Section */}
              <div className='text-center text-xs md:text-sm text-white/80'>
                <div className='flex flex-col md:flex-row justify-center gap-3 md:gap-6 mb-4'>
                  <Link
                    href='/'
                    className='hover:text-white transition-colors'
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href='/'
                    className='hover:text-white transition-colors'
                  >
                    Privacy Policy
                  </Link>
                </div>
                <p>
                  © {new Date().getFullYear()} FutureGen for Change. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
