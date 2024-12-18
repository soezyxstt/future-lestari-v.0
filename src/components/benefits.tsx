import { Lightbulb, Users, GraduationCap, Cog } from 'lucide-react';
import Header from './util/header';
// import { motion } from 'motion/react';
import Image from 'next/image';

function Benefits() {
  const benefitsData = [
    {
      title: 'Implementation Grant',
      description:
        'Receive funding support to implement your innovative solutions and bring your ideas to life.',
      icon: Cog,
      image: '/b1.png',
    },
    {
      title: 'Opportunity Pilot Solutions',
      description:
        'Get the chance to pilot and test your solutions in real-world scenarios with industry partners.',
      icon: Lightbulb,
      image: '/b2.png',
    },
    {
      title: 'Mentorship',
      description:
        'Gain valuable guidance from experienced industry professionals who will help shape your project.',
      icon: GraduationCap,
      image: '/b3.png',
    },
    {
      title: 'Network & Funding Access',
      description:
        'Connect with Indonesia Technology Ecosystem and unlock opportunities for additional funding to accelerate your project.',
      icon: Users,
      image: '/b4.png',
    },
  ];

  return (
    <section
      id='benefits'
      className='min-h-screen flex flex-col bg-green-500/5 justify-center md:px-20 px-8 py-10'
    >
      {/* <h2 className='text-xl md:text-3xl font-normal text-accent-primary text-center'>
        Benefits
      </h2> */}
      <div className='text-center mb-16 z-10 isolate w-full'>
        <Header className='mb-4'>
          What you&apos;ll gain from participating
        </Header>
        <div className='w-24 h-1 bg-emerald-500 mx-auto'></div>
      </div>
      <div
        id='benefits-wrapper'
        className='grid grid-cols-1 max-w-6xl md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto md:mt-10 content-center'
      >
        {benefitsData.map((benefit, index) => (
          <BenefitCard
            key={index + benefit.title + benefit.description}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            index={index}
            image={benefit.image}
          />
        ))}
      </div>
    </section>
  );
}

function BenefitCard({
  title,
  // description,
  // icon: Icon,
  // index,
  image,
}: {
  title: string;
  description: string;
  icon?: React.ElementType;
    index: number;
  image?: string;
}) {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 20 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5, delay: 0.2 * index }}
    //   viewport={{ amount: 0.5 }}
    //   className='grid grid-rows-subgrid row-span-2'
    // >
    //   <div className='bg-white relative p-1 rounded-2xl shadow-lg transition-all duration-300 grid-rows-subgrid row-span-2 hover:bg-green-600 cursor-pointer group hover:scale-105 grid'>
    //     <p className='text-base md:text-lg text-slate-700 p-4 rounded-2xl flex items-center bg-white relative transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 cursor-pointer h-full hover:shadow-lg'>
    //       {description}
    //     </p>
    //     <div className='flex items-center gap-2 px-4 justify-between'>
    //       <h3 className='text-lg font-medium md:text-xl cursor-pointer text-accent-primary flex items-center py-2 md:py-4 group-hover:text-white w-fit'>
    //         {title}
    //       </h3>
    //       <Icon
    //         className='w-6 h-6 mr-3 flex-shrink-0 text-green-500 group-hover:text-white'
    //         strokeWidth={1.5}
    //       />
    //     </div>
    //   </div>
    // </motion.div>
    <div className='flex flex-col items-center'>
      <Image src={image!} alt={title} width={200} height={200} className='' />
      <h3 className='text-lg font-medium md:text-xl text-accent-primary flex text-center items-center py-2 md:py-4'>
        {title}
      </h3>
    </div>
  );
}

export default Benefits;
