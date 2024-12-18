import { cn } from '@/lib/util';
import Header from './util/header';
import { WordsList } from './util/word';
import Image from 'next/image';

export default function About() {
  const objectives = [
    'To stimulate and harness innovative solutions for pressing sustainability and society challenges in Southeast Asia.',
    'To generate actionable insights that can inform and shape environmental and social policy and governance in the region.',
    'To develop and refine solutions that are not only effective but also scalable across different contexts within Southeast Asia.',
  ];
  const outcomes = [
    'Portfolio of Impact',
    'A diverse portfolio of innovative projects tackling key sustainability and social issues across Southeast Asia.',
    'Proven Solutions',
    'Tangible results from pilot projects, demonstrating the effectiveness and scalability of developed solutions.',
    'Policy Recommendations',
    'Evidence-based strategies and recommendations for policymakers to foster sustainable societal development.',
    'Engaged Community',
    'A vibrant FutureGen network, connected through collaborative platforms and events, driving shared impact.',
  ];
  const stunting = [
    'With a stunting rate of 21%, Indonesia faces a significant challenge with long-term irreversible impacts on affected children, including poor cognitive development, low educational performance, reduced adult wages, and lost productivity. To combat this, we are exploring innovative technology solutions, including personalized nutrition and monitoring via mobile apps or wearables to track maternal health indicators and provide tailored dietary recommendations. Fortified food solutions, designed using biotechnology to create affordable, nutrient-rich, and culturally appropriate products, aim to meet the needs of pregnant women and can be locally produced. Additionally, community-based health tracking platforms, such as smartphone apps or SMS-based tools, empower health workers to ensure timely checkups and leverage AI for real-time risk assessment, paving the way for sustainable and scalable impact.',
  ];
  const urbanFarming = [
    'Rapid urban growth often results in inefficiencies, fragmented communities, and missed economic opportunities. Technology offers a chance to transform urban living by fostering stronger community engagement, optimizing resource management, and creating scalable, user-friendly solutions tailored to underserved populations. Innovative tools such as event hubs, local participation platforms, and digital marketplaces empower micro-enterprises and promote equitable economies. Smart resource-sharing systems for energy, water, and mobility, along with gamified recycling apps, encourage sustainable practices. By aligning with the diverse needs of urban populations, these solutions can drive lasting impact and economic growth.',
  ];
  const tidalFloods = [
    'As tidal floods worsen, technology-driven solutions are crucial to mitigate their impact and adapt to changing conditions. AI-powered early warning systems and IoT-enabled monitoring devices provide real-time flood predictions and track vulnerable areas, supported by remote sensing technologies to map high-risk zones. Flood mitigation tools such as water diversion systems, dynamic smart drainage, and deployable barriers offer rapid response during emergencies. Adaptation infrastructure includes modular and scalable seawalls, floating or amphibious urban infrastructure, and nature-based solutions like mangrove planting and wetland restoration. These innovations ensure resilience, sustainability, and adaptability for affected communities.',
  ];

  const gtks = [
    {
      title: 'Objectives',
      arr: objectives,
      highlight: 'Here are our objectives for holding this event',
    },
    {
      title: 'Outcomes',
      arr: outcomes,
      highlight:
        'A platform driving evidence-based mid-to-long-term policies and serving as a testbed for scalable technologies, with tangible outcomes',
    },
    {
      title: 'Stunting Prevention Solutions',
      arr: stunting,
      highlight: 'Addressing Stunting in Indonesia',
    },
    {
      title: 'Urban Farming Solutions',
      arr: urbanFarming,
      highlight: 'Urban Farming Solutions for Thriving Communities',
    },
    {
      title: 'Tidal Floods Solutions',
      arr: tidalFloods,
      highlight:
        'Adaptation and Mitigation Solutions for Worsening Tidal Floods',
    },
  ];

  return (
    <>
      <section
        id='about'
        className='min-h-screen px-6 md:px-24 bg-green-500/5 py-16 md:py-24'
      >
        <div className='container mx-auto md:px-4'>
          {gtks.slice(0, 2).map((obj, index) => (
            <GTK
              key={obj.highlight}
              index={index}
              withIcon={index === 0}
              {...obj}
            />
          ))}
        </div>
      </section>
      <section
        id='challenge-areas'
        className='min-h-screen px-6 md:px-24 py-16 md:py-24'
      >
        <div className='container mx-auto md:px-4'>
          {gtks.slice(2, 5).map((obj, index) => (
            <GTK
              key={obj.highlight}
              index={index + 2}
              isGreen={true}
              {...obj}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function GTK({
  highlight,
  arr,
  index,
  title,
  withIcon = false,
  isGreen = false,
}: {
  highlight: string;
  arr: string[];
  index: number;
  title: string;
  withIcon?: boolean;
  isGreen?: boolean;
}) {
  const isOdd = index % 2 === 0;
  return (
    <>
      {index === 2 && (
        <div className=''>
          <Header className='mb-4 md:mb-8'>Challenge Area</Header>
          <div className='w-20 h-1 bg-green-500'></div>
        </div>
      )}
      <div
        className={cn(
          'grid md:grid-cols-3 gap-8 items-center min-h-screen py-8 md:py-12',
          isOdd
            ? "md:[grid-template:'main_main_rest'_auto_/_1fr_1fr_1fr] [grid-template:'main_main_main']"
            : "md:[grid-template:'rest_main_main'_auto_/_1fr_1fr_1fr] [grid-template:'main_main_main']"
        )}
      >
        <div className='space-y-6 md:grid-cols-2 [grid-area:main] md:col-span-2'>
          <div className='relative backdrop-blur-sm md:p-6 rounded-lg'>
            <div className='absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-green-500'></div>
            <div className='absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-green-500'></div>
            <WordsList
              title={title}
              points={arr}
              isList={index === 0 || index === 1}
              withTitle={index === 1}
              isGreen={isGreen}
            />
          </div>
        </div>
        <div className='relative hidden md:flex items-center [grid-area:rest] h-full justify-end'>
          {/* <div className='aspect-square bg-green-800/50 rounded-full absolute -top-4 -left-4 animate-pulse'></div>
          <div className='aspect-square bg-green-700/50 rounded-full absolute -bottom-4 -right-4 animate-pulse delay-300'></div> */}
          {index === 0 && (
            <div className='absolute place-self-end top-0 right-0 text-nowrap'>
              <Header className='mb-4'>Get To Know</Header>
              <div className='w-20 h-1 bg-green-500'></div>
            </div>
          )}
          {withIcon ? (
            <Image
              src='/objectives.png'
              width={400}
              height={400}
              alt='objectives'
              className='h-72 w-72'
            />
          ) : (
            <div className='relative z-10 rounded-lg p-4'>
              <div className='relative group'>
                <Header className='mb-4 md:text-2xl font-medium'>
                  {highlight}
                </Header>
                <div className='w-20 transition-all group-hover:w-44 h-1 bg-green-500'></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
