import { cn } from '@/lib/util';
import Header from './util/header';
import { WordsList } from './util/word';

export default function About() {
  const objectives = [
    '1. To stimulate and harness innovative solutions for pressing sustainability and society challenges in Southeast Asia.',
    '2. To generate actionable insights that can inform and shape environmental and social policy and governance in the region.',
    '3. To develop and refine solutions that are not only effective but also scalable across different contexts within Southeast Asia.',
  ];
  const outcomes = [
    '1. A portfolio of innovative projects addressing key sustainability and social issues in Southeast Asia.',
    '2. Tangible results from pilot projects, showcasing the efficacy and potential scalability of the developed solutions.',
    '3. Result-driven policy recommendations and strategies that can be adopted by policymakers to support sustainable society development.',
    '4. A vibrant and active community of the FutureGen interconnected through collaborative platforms and events.',
  ];
  const stunting = [
    '1. Personalized Nutrition and Monitoring: Develop mobile apps or portable wearables to monitor maternal health indicators (nutrition, weight, anemia levels, etc.) and provide tailored dietary recommendations. By using AI to analyze biomarkers and predict nutritional deficiencies early.',
    '2. Fortified Food Solutions: Innovate affordable, culturally acceptable fortified foods or supplements specifically designed for pregnant women. By leverage biotechnology to create nutrient-rich solutions (e.g., protein or micronutrient powders) that can be locally produced',
    "3. Community-Based Health Tracking: Deploy platform (like smartphone apps or SMS-based) for community health workers to track pregnant women's health and ensure timely checkups. By using AI or machine learning for real-time risk assessment.",
  ];
  const urbanFarming = [
    '1. Community Optimization: Tools to foster stronger community engagement and collaboration (e.g., event hubs, local participation platforms). Solutions for public services (waste management, safety, health) that reduce inefficiency and increase accessibility.',
    '2. Local Economic Empowerment: Digital marketplaces for hyper-local products and services to thrive. Platforms enabling micro-enterprises to scale within urban communities and equitable sharing economies. B2B tools for urban-focused enterprises to scale their impact.',
    '3. Urban Resource Optimization: Smart resource-sharing systems (energy, water, mobility) for urban residents. Scalable urban sustainability tools that incentivize better practices (e.g., gamified recycling apps)',
  ];
  const tidalFloods = [
    '1. Prediction and Monitoring: AI-powered early warning systems for real-time tidal flood predictions. IoT-enabled flood monitoring devices for vulnerable areas. Remote sensing technologies for mapping high-risk flood zones.',
    '2. Flood Mitigation Tools: Water diversion and storage systems for excessive tidal influxes. Smart drainage systems that adjust dynamically to tidal surges. Deployable flood barriers that can be rapidly activated during emergencies.',
    '3. Adaptation Infrastructure: Modular and scalable seawalls or tidal barriers using advanced materials. Floating or amphibious urban infrastructure (homes, schools, roads). Nature-based solutions like smart mangrove planting or urban wetlands restoration',
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
        'Outcome of this initiative is to influence mid-to-long-term policy, and to promote successful pilots scaling to national/regional levels.',
    },
    {
      title: 'Stunting Prevention Solutions',
      arr: stunting,
      highlight: 'Innovative solutions to prevent stunting',
    },
    {
      title: 'Urban Farming Solutions',
      arr: urbanFarming,
      highlight:
        'Optimization of Community Urban Farming Practices and Commercialization',
    },
    {
      title: 'Tidal Floods Solutions',
      arr: tidalFloods,
      highlight:
        'Development of Adaptation / Mitigation Solutions Towards Worsened Tidal Floods Problem',
    },
  ];

  return (
    <section
      id='about'
      className='min-h-screen flex items-center bg-green-900/5 py-16 md:py-24'
    >
      <div className='container mx-auto px-4'>
        {gtks.map((obj, index) => (
          <GTK
            key={obj.highlight}
            index={index}
            {...obj}
          />
        ))}
      </div>
    </section>
  );
}

function GTK({
  highlight,
  arr,
  index,
  title,
}: {
  highlight: string;
  arr: string[];
  index: number;
  title: string;
}) {
  const isOdd = index % 2 === 0;
  return (
    <>
      {index === 2 && <Header className='mb-8'>Priority Areas</Header>}
      <div
        className={cn(
          'grid md:grid-cols-3 gap-8 items-center min-h-screen py-8 md:py-12',
          isOdd
            ? "[grid-template:'main_main_rest']"
            : "[grid-template:'rest_main_main']"
        )}
      >
        <div className='space-y-6 col-span-2 [grid-area:main]'>
          {index === 0 && (
            <div className='relative md:hidden ml-4'>
              <Header className='mb-4'>Get To Know</Header>
              <div className='w-20 h-1 bg-green-500'></div>
            </div>
          )}
          <div className='relative backdrop-blur-sm p-6 rounded-lg'>
            <div className='absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-green-500'></div>
            <div className='absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-green-500'></div>
            <WordsList
              title={title}
              points={arr}
            />
          </div>
        </div>
        <div className='relative hidden md:block [grid-area:rest]'>
          <div className='aspect-square bg-green-800/50 rounded-full absolute -top-4 -left-4 animate-pulse'></div>
          <div className='aspect-square bg-green-700/50 rounded-full absolute -bottom-4 -right-4 animate-pulse delay-300'></div>
          <div className='relative z-10 rounded-lg p-4'>
            <div className='relative group'>
              <Header className='mb-4 md:text-2xl font-medium'>
                {highlight}
              </Header>
              <div className='w-20 transition-all group-hover:w-44 h-1 bg-green-500'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
