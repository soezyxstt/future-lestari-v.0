import { Lightbulb, Users, GraduationCap, BadgeDollarSign, Cog } from 'lucide-react';
import Header from './util/header';
import { motion } from 'motion/react';

function Benefits() {
  const benefitsData = [
    {
      title: 'Implementation Grant',
      description: 'Receive funding support to implement your innovative solutions and bring your ideas to life.',
      icon: Cog
    },
    {
      title: 'Opportunity Pilot Solutions',
      description: 'Get the chance to pilot and test your solutions in real-world scenarios with industry partners.',
      icon: Lightbulb
    },
    {
      title: 'Mentorship',
      description: 'Gain valuable guidance from experienced industry professionals who will help shape your project.',
      icon: GraduationCap
    },
    {
      title: 'Networking',
      description: 'Connect with like-minded innovators, industry experts, and potential collaborators.',
      icon: Users
    },
    {
      title: 'Access Funding',
      description: 'Unlock opportunities to secure additional funding and resources for your project development.',
      icon: BadgeDollarSign
    }
  ];

  return (
    <section id='benefits' className='min-h-screen bg-green-500/5 flex flex-col justify-center md:px-20 px-8 py-10'>
      <h2 className="text-xl md:text-3xl font-normal text-accent-primary text-center">Benefits</h2>
      <div className="text-center mb-16 z-10 isolate w-full">
        <Header className='mb-4 font-medium text-3xl'>What you&apos;ll gain from participating</Header>
        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
      </div>
      <div id='benefits-wrapper' className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto md:mt-10 content-center">
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
        className="bg-white relative p-1 rounded-2xl shadow-lg transition-all duration-300 grid-rows-subgrid row-span-2 hover:bg-green-600 cursor-pointer group hover:scale-105 grid">
        <p className="text-base md:text-lg text-slate-700 p-4 rounded-2xl flex items-center bg-white relative transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 cursor-pointer h-full hover:shadow-lg">
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
