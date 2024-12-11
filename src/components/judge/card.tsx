'use client';

import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useState } from 'react';

interface JudgeCardProps {
  name: string;
  title: string;
  image: string;
  profession: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  setActiveJudge: (judge: boolean) => void;

}

function JudgeCard({ name, title, image, instagram, linkedin, twitter, setActiveJudge }: JudgeCardProps) {
  const [isOn, setIsOn] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1, y: 0, transition: {
          duration: 0.5
        }
      }}
      viewport={{ amount: 0.25 }}
      onHoverStart={() => {
        setActiveJudge(true)
        setIsOn(true)
      }}
      onHoverEnd={() => {
        setActiveJudge(false)
        setIsOn(false)
      }}
      className="aspect-square relative rounded-xl w-full max-w-72 bg-green-500/10 shadow-md shadow-accent-primary/30 p-4 md:p-6 cursor-pointer hover:z-40 hover:isolate hover:translate-x-2 hover:-translate-y-3 transition-transform duration-500 ease-in-out group">
      <Image src={image} width={500} height={500} alt={name} className="object-cover rounded-xl aspect-square w-7/10 h-7/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/5 group-hover:h-9/10 transition-all duration-500 ease-in-out group-hover:-translate-y-2/3 " />
      <motion.div layout className="relative w-full flex flex-col items-center top-[calc(90%)] md:top-[calc(100%)] -translate-y-full h-fit gap-2">
        <motion.h3 className="text-lg uppercase mb-2" >{name}</motion.h3>
        <motion.p className="text-sm text-slate-500" >{title}</motion.p>
        <motion.div layout className="grid w-full" style={{ gridTemplateRows: isOn ? 'minmax(0, 1fr)' : '0', opacity: isOn ? 1 : 0 }}>
          <motion.div layout className="text-accent-secondary min-h-0 w-full flex flex-col gap-1">
            <motion.a layout href={instagram} className='flex gap-2' style={{ width: isOn ? '100%' : 0 }} transition={{ delay: 0.4 }}
              target='_blank' ><InstagramIcon strokeWidth={1.25} size={20} />Instagram</motion.a>
            <motion.a layout style={{ width: isOn ? '100%' : 0 }} transition={{ delay: 0.3 }}
              href={linkedin} className='flex gap-2' target='_blank'><LinkedinIcon strokeWidth={1.25} size={20} />LinkedIn</motion.a>
            <motion.a layout style={{ width: isOn ? '100%' : 0 }} transition={{ delay: 0.2 }} href={twitter} className='flex gap-2' target='_blank'><TwitterIcon strokeWidth={1.25} size={20} />Twitter</motion.a>
          </motion.div>
        </motion.div>
        <motion.div layout style={{ width: isOn ? 0 : '50%', opacity: isOn ? 0 : 1, height: isOn ? 0 : 'auto', position: isOn ? "absolute" : "static" }} className="flex justify-between text-accent-secondary bottom-0">
          <a href={instagram} target='_blank' ><InstagramIcon strokeWidth={1.25} size={20} className='hover:rotate-12 transition-all duration-300' /></a>
          <a href={linkedin} target='_blank'><LinkedinIcon strokeWidth={1.25} size={20} className='hover:rotate-12 transition-all duration-300' /></a>
          <a href={twitter} target='_blank'><TwitterIcon strokeWidth={1.25} size={20} className='hover:rotate-12 transition-all duration-300' /></a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default JudgeCard;
