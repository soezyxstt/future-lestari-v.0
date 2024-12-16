import { useState } from 'react';
import JudgeCard from './judge/card';
import Header from './util/header';
import { cn } from '@/lib/util';
import { useScroll } from 'motion/react';

function Judges() {
  const judges = [
    { name: 'To Be Announced', title: 'Judge', image: '/judge.png', profession: 'Pemerintah Kota Bogor' },
    { name: 'To Be Announced', title: 'Judge', image: '/judge.png', profession: 'Pemerintah Kota Semarang' },
    { name: 'To Be Announced', title: 'Judge', image: '/judge.png', profession: 'Pemerintah Kota Palembang' },
    { name: 'To Be Announced', title: 'Judge', image: '/judge.png', profession: 'UK Indoneisa Tech Hub' },
  ];
  const [activeJudge, setActiveJudge] = useState<boolean>()
  const { scrollY } = useScroll();
  return (
    <>
      <section id='judges' className='min-h-screen flex max-md:flex-col justify-center md:justify-between md:items-center md:px-20 max-w-7xl mx-auto px-8 py-10'>
        <div className="text-center mb-16 z-10 isolate flex flex-col items-center">
          <Header className='mb-4'>Judges</Header>
          <div className="w-24 h-1 bg-emerald-500"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-36 max-md:place-items-center md:mt-30 max-md:mt-20 md:gap-y-30 md:gap-x-16">
          {judges.map((judge) => (
            <JudgeCard key={judge.name + judge.title} {...judge} instagram='https://www.instagram.com' linkedin='https://www.linkedin.com' twitter='https://www.twitter.com' setActiveJudge={setActiveJudge} />
          ))}
        </div>
      </section>
        <div className={cn('fixed inset-0 bg-black/10 backdrop-blur-[2px] z-30 pointer-events-none transition-all duration-300', (activeJudge && scrollY.getVelocity() === 0) ? " opacity-100" : "opacity-0")} />
    </>
  );
}

export default Judges;