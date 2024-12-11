import Header from './util/header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './util/accordion';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

function Faqs() {
  const faqs = [
    {
      id: '01',
      title: 'Do you offer eco-friendly furniture options?',
      content: 'With every project we undertake, we are committed to turning houses into homes, one design at a time.',
    },
    {
      id: '02',
      title: 'How do you incorporate natural light effectively?',
      content: 'We carefully analyze the space and utilize strategic placement of windows, mirrors, and light colors to maximize natural light throughout your home.',
    },
    {
      id: '03',
      title: 'Can you create a minimalist workspace design?',
      content: 'Our minimalist workspace designs focus on functionality, clean lines, and clutter-free environments to enhance productivity and mental clarity.',
    },
    {
      id: '04',
      title: "What's your approach to small space optimization?",
      content: 'We specialize in creative storage solutions and multi-functional furniture to make the most of every square foot in compact spaces.',
    },
    {
      id: '05',
      title: 'Do you specialize in open-concept living areas?',
      content: 'Our expertise in open-concept design creates seamless transitions between spaces while maintaining distinct functional zones.',
    },
  ];

  return (
    <section id='judges' className='min-h-screen flex max-md:flex-col justify-center md:justify-between md:items-center md:px-20 px-8 py-10'>
      <div className="max-md:text-center mb-16 z-10 isolate flex flex-col max-md:items-center md:max-w-1/3">
        <h2 className="text-xl md:text-3xl font-normal text-accent-primary">FAQs</h2>
        <Header className='mb-4'>Still Have Any Questions?</Header>
        <div className="w-24 h-1 bg-emerald-500"></div>
        <Link
          href='#register'
          className='flex items-center gap-2 px-8 py-2 rounded-full text-accent-primary font-medium hover:text-white relative group overflow-hidden border border-accent-primary h-[calc(100%-1.5rem)] w-fit mt-4 md:mt-8 group transition-all'
        >
          <div className='absolute inset-0 bg-green-700 w-0 group-hover:w-full transition-all duration-500 ease-in-out' />
          <span className='relative z-10'>Ask Any Question</span>
          <ArrowUpRightIcon className='w-4 h-4 group-hover:text-white z-10 transition-all group-hover:translate-x-1' />
        </Link>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index + faq.content} {...faq} index={index} />
        ))}
      </Accordion>
    </section>
  );
}

function FaqItem({ title, content, index }: { title: string, content: string, index: number }) {
  return (
    <div className='border rounded-lg md:rounded-xl border-accent-primary p-y1 md:py-2 px-4 flex md:gap-6 gap-4 items-center'>
      <div className="text-xl md:text-2xl font-bold text-accent-primary/70">{`${(index + 1).toString().padStart(2, '0')}`}</div>
      <AccordionItem value={`item-${index}`} className='w-full'>
        <AccordionTrigger className='font-medium w-full'>{title}</AccordionTrigger>
        <AccordionContent>
          {content}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}

export default Faqs;
