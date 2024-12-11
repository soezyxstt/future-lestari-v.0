import { Gift, GraduationCap, Users } from 'lucide-react';
import Header from './util/header';
import { motion } from 'motion/react';

function Benefits() {
  const benefitsData = [
    {
      title: 'Special Prizes',
      description: 'Get a chance to win special prizes from our sponsors around the world by emerging as the top performers in the competition.',
      icon: Gift
    },
    {
      title: 'Mentorship',
      description: 'Get mentorship from our team of experts to help you improve your skills and achieve your goals.',
      icon: GraduationCap
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with other participants and industry experts to expand your network and explore potential collaborations.',
      icon: Users
    },
  ];

  return (
    <section id='benefits' className='min-h-screen bg-green-500/5 flex flex-col justify-center md:px-20 px-8 py-10'>
      <h2 className="text-xl md:text-3xl font-normal text-accent-primary text-center">Benefits</h2>
      <div className="text-center mb-16 z-10 isolate w-full">
        <Header className='mb-4 font-medium text-3xl'>What you&apos;ll gain from participating</Header>
        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
      </div>
      <div id='benefits-wrapper' className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-6 md:gap-y-0 md:max-w-5xl mx-auto md:mt-10">
        {benefitsData.map((benefit, index) => (
          <BenefitCard key={index + benefit.title + benefit.description} title={benefit.title} description={benefit.description} icon={benefit.icon} index={index} />
        ))}
      </div>
    </section>
  );
}

function BenefitCard({ title, description, icon: Icon, index }: { title: string, description: string, icon: React.ElementType, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      viewport={{ amount: 0.5 }}
      className="grid grid-rows-subgrid row-span-2">
      <div
        className="bg-white relative p-1 rounded-2xl shadow-lg transition-all duration-300 grid grid-rows-subgrid row-span-2 hover:bg-accent-primary cursor-pointer group hover:scale-105">
        <p className="text-base md:text-lg text-slate-700 p-4 rounded-2xl flex items-center bg-white relative transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 aspect-[4/3] cursor-pointer">
          {description}
        </p>
        <div className="flex items-center gap-2 px-4 justify-between">
          <h3 className="text-lg font-medium md:text-xl cursor-pointer text-accent-primary flex items-center py-2 md:py-4 group-hover:text-white w-fit">{title}
          </h3>
          <Icon className="w-6 h-6 mr-3 flex-shrink-0 text-green-500 group-hover:text-white" strokeWidth={1.5} />
        </div>
      </div>
    </motion.div>
  );
}

export default Benefits;
