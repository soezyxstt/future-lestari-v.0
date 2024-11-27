import Header from './util/header';
import Word from './util/word';

export default function About() {
  const words = "Unique in every way. More than a skybox, more than a top restaurant, more than an exclusive event venue. Located in the special ambiance of the Philips Stadium, the Legends Lounge offers a sensational experience. "
  
  return (
    <section
      id='about'
      className='min-h-screen flex items-center bg-green-900/5 py-16 md:py-24'
    >
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-3 gap-8 items-center'>
          <div className='space-y-6 col-span-2'>
            <div className='relative md:hidden ml-4'>
              <Header className='mb-4'>Get To Know</Header>
              <div className='w-20 h-1 bg-green-500'></div>
            </div>
            <div className='relative backdrop-blur-sm p-6 rounded-lg'>
              <div className='absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-green-500'></div>
              <div className='absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-green-500'></div>
              <Word words={words} />
            </div>
          </div>
          <div className='relative hidden md:block'>
            <div className='aspect-square bg-green-800/50 rounded-full absolute -top-4 -left-4 animate-pulse'></div>
            <div className='aspect-square bg-green-700/50 rounded-full absolute -bottom-4 -right-4 animate-pulse delay-300'></div>
            <div className='relative z-10 rounded-lg p-4'>
              <div className='relative group'>
                <Header className='mb-4'>Get To Know</Header>
                <div className='w-20 transition-all group-hover:w-44 h-1 bg-green-500'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}