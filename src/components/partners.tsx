// import Header from './util/header';
import Image from 'next/image';
import { cn } from '@/lib/util';

// Define sponsor tiers and their logos
const goldSponsors = [
  { name: 'UK Government', logo: '/partners/uk-gov.png' },
  { name: 'UK International Development', logo: '/partners/uk-inter.png' },
  { name: 'UK Indonesia Tech Hub', logo: '/partners/uk-tech.png' },
];

const localGov = [
  { name: 'Palembang', logo: '/partners/palembang.jpeg' },
  { name: 'Bogor', logo: '/partners/bogor.gif' },
  { name: 'Semarang', logo: '/partners/semarang.png' },
];

// const mediaPartners = [
//   { name: 'Nike', logo: '/partners/nike-3-logo-svgrepo-com.svg' },
//   { name: 'Adidas', logo: '/partners/adidas-4-logo-svgrepo-com.svg' },
//   { name: 'BMW', logo: '/partners/bmw-logo-svgrepo-com.svg' },
//   { name: 'Shell', logo: '/partners/shell-logo-svgrepo-com.svg' },
//   { name: 'McDonald\'s', logo: '/partners/mcdonald-s-15-logo-svgrepo-com.svg' },
//   { name: 'Airbnb', logo: '/partners/airbnb-2-logo-svgrepo-com.svg' },
//   { name: 'Android', logo: '/partners/android-logo-svgrepo-com.svg' },
//   { name: 'Bitcoin', logo: '/partners/bitcoin-logo-svgrepo-com.svg' },
//   { name: 'Snapchat', logo: '/partners/snapchat-logo-svgrepo-com.svg' },
//   { name: 'Star Wars', logo: '/partners/star-wars-logo-svgrepo-com.svg' },
//   { name: 'Tinder', logo: '/partners/tinder-1-logo-svgrepo-com.svg' },
//   { name: 'Grab', logo: '/partners/grab-logo-svgrepo-com.svg' },
//   { name: 'Bitcoin', logo: '/partners/bitcoin-logo-svgrepo-com.svg' },
//   { name: 'Snapchat', logo: '/partners/snapchat-logo-svgrepo-com.svg' },
//   // { name: 'McDonald\'s', logo: '/partners/mcdonald-s-15-logo-svgrepo-com.svg' },
//   { name: 'Airbnb', logo: '/partners/airbnb-2-logo-svgrepo-com.svg' },
//   { name: 'Android', logo: '/partners/android-logo-svgrepo-com.svg' },
//   { name: 'Bitcoin', logo: '/partners/bitcoin-logo-svgrepo-com.svg' },
//   // { name: 'Snapchat', logo: '/partners/snapchat-logo-svgrepo-com.svg' },
// ];

function SponsorCard({
  name,
  logo,
  tier,
  size = 'large',
}: {
  name: string;
  logo: string;
  tier: 'gold' | 'silver';
  size?: 'small' | 'large' | 'xlarge';
}) {
  return (
    <div
      className={cn(
        'relative group rounded-xl transition-all duration-300 border-accent-primary',
        tier == 'gold' && 'backdrop-blur-sm  ',
        size === 'small' && 'h-20 max-w-44',
        size === 'large' && 'w-40 md:w-64 md:h-22',
        size === 'xlarge' && 'h-28'
      )}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      <div className='relative h-full w-full flex items-center justify-center '>
        <Image
          src={logo}
          alt={name}
          width={tier === 'gold' ? 180 : 130}
          height={tier === 'gold' ? 150 : 130}
          className='object-contain transition-transform duration-300 w-full h-full hover:scale-105'
        />
      </div>
    </div>
  );
}

function Partners() {
  return (
    <section
      id='partners'
      className='min-h-screen flex flex-col items-center md:px-20 mx-auto px-8 py-20 md:py-32 md:gap-32 gap-20'
    >
      {/* <div className="text-center z-10 isolate flex flex-col items-center">
        <Header className='mb-4'>Partners</Header>
        <div className="w-24 h-1 bg-emerald-500"></div>
      </div> */}

      <div className='w-full grid place-items-center'>
        <h2 className='md:text-xl font-semibold text-center mb-8 text-green-600'>
          Initiative Program
        </h2>
        <div className='flex flex-wrap justify-between max-w-2xl w-full max-md:flex-col items-center gap-8'>
          <SponsorCard
            name='Pijar Foundation'
            logo='/partners/pijar.png'
            tier='gold'
          />
          <SponsorCard
            name='Future Lestari'
            logo='/partners/lestari.png'
            tier='gold'
          />
        </div>
      </div>

      <div className=''>
        <h2 className='md:text-xl font-semibold text-center mb-8 text-green-600'>
          FutureGen For Change-funded Founders
        </h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {goldSponsors.map((sponsor, i) => (
            <SponsorCard
              key={sponsor.name + i}
              {...sponsor}
              tier='gold'
            />
          ))}
        </div>
      </div>

      <div className=''>
        <h2 className='md:text-xl font-semibold text-center mb-8 text-green-600'>
          Grant Partner
        </h2>
        <div className='flex flex-wrap justify-center gap-8'>
          <SponsorCard
            name='Poli-Poli'
            logo='/partners/poli.png'
            tier='silver'
            size='small'
          />
        </div>
      </div>

      <div className=''>
        <h2 className='md:text-xl font-semibold text-center mb-8 text-green-600'>
          Local Government Partner
        </h2>
        <div className='flex flex-wrap justify-center gap-12 md:gap-24'>
          {localGov.map((sponsor, i) => (
            <SponsorCard
              key={sponsor.name + i}
              {...sponsor}
              tier='silver'
              size='small'
            />
          ))}
        </div>
      </div>

      {/* Media Partners */}
      {/* <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-600">Media Partner</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {mediaPartners.map((partner, index) => (
            <div
              key={partner.name + index}
              className={cn(
                "relative group transition-all duration-300 border border-accent-primary",
                // More subtle size variations
                index % 5 === 0 ? "col-span-2" : "",
                index % 7 === 0 ? "row-span-2" : "",
                "flex items-center justify-center p-4"
              )}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                className="w-auto h-auto max-h-16 object-contain filter transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default Partners;
