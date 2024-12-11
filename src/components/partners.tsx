import Header from './util/header';
import Image from 'next/image';
import { cn } from '@/lib/util';

// Define sponsor tiers and their logos
const goldSponsors = [
  { name: 'Google', logo: '/partners/google-icon-logo-svgrepo-com.svg' },
  { name: 'Apple', logo: '/partners/apple-black-logo-svgrepo-com.svg' },
  { name: 'Microsoft', logo: '/partners/microsoft-windows-22-logo-svgrepo-com.svg' },
];

const silverSponsors = [
  { name: 'Amazon', logo: '/partners/amazon-2-logo-svgrepo-com.svg' },
  { name: 'PayPal', logo: '/partners/paypal-logo-svgrepo-com.svg' },
];

const mediaPartners = [
  { name: 'Nike', logo: '/partners/nike-3-logo-svgrepo-com.svg' },
  { name: 'Adidas', logo: '/partners/adidas-4-logo-svgrepo-com.svg' },
  { name: 'BMW', logo: '/partners/bmw-logo-svgrepo-com.svg' },
  { name: 'Shell', logo: '/partners/shell-logo-svgrepo-com.svg' },
  { name: 'McDonald\'s', logo: '/partners/mcdonald-s-15-logo-svgrepo-com.svg' },
  { name: 'Airbnb', logo: '/partners/airbnb-2-logo-svgrepo-com.svg' },
  { name: 'Android', logo: '/partners/android-logo-svgrepo-com.svg' },
  { name: 'Bitcoin', logo: '/partners/bitcoin-logo-svgrepo-com.svg' },
  { name: 'Snapchat', logo: '/partners/snapchat-logo-svgrepo-com.svg' },
  { name: 'Star Wars', logo: '/partners/star-wars-logo-svgrepo-com.svg' },
  { name: 'Tinder', logo: '/partners/tinder-1-logo-svgrepo-com.svg' },
  { name: 'Grab', logo: '/partners/grab-logo-svgrepo-com.svg' },
  { name: 'Bitcoin', logo: '/partners/bitcoin-logo-svgrepo-com.svg' },
  { name: 'Snapchat', logo: '/partners/snapchat-logo-svgrepo-com.svg' },
  // { name: 'McDonald\'s', logo: '/partners/mcdonald-s-15-logo-svgrepo-com.svg' },
  { name: 'Airbnb', logo: '/partners/airbnb-2-logo-svgrepo-com.svg' },
  { name: 'Android', logo: '/partners/android-logo-svgrepo-com.svg' },
  { name: 'Bitcoin', logo: '/partners/bitcoin-logo-svgrepo-com.svg' },
  // { name: 'Snapchat', logo: '/partners/snapchat-logo-svgrepo-com.svg' },
];

function SponsorCard({ name, logo, tier }: { name: string; logo: string; tier: 'gold' | 'silver' }) {
  return (
    <div className={cn(
      "relative group  rounded-xl p-8 hover:scale-110 transition-all duration-300 border border-accent-primary",
      tier == "gold" && "backdrop-blur-sm  bg-accent-primary/5 hover:bg-accent-primary/10",
      tier === 'gold' ? 'w-[300px] h-[200px]' : 'w-[250px] h-[150px]'
    )}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative h-full w-full flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={tier === 'gold' ? 180 : 130}
          height={tier === 'gold' ? 150 : 130}
          className="object-contain transition-transform duration-300 w-full h-full"
        />
      </div>
    </div>
  );
}

function Partners() {
  return (
    <section id='partners' className='min-h-screen flex flex-col items-center md:px-20 mx-auto px-8 py-10 md:py-20 bg-green-500/5'>
      <div className="text-center mb-16 z-10 isolate flex flex-col items-center">
        <Header className='mb-4'>Partners</Header>
        <div className="w-24 h-1 bg-emerald-500"></div>
      </div>

      {/* Gold Sponsors */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-600">Gold Sponsors</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {goldSponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} tier="gold" />
          ))}
        </div>
      </div>

      {/* Silver Sponsors */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-600">Silver Sponsors</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {silverSponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} tier="silver" />
          ))}
        </div>
      </div>

      {/* Media Partners */}
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-600">Media Partners</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {mediaPartners.map((partner, index) => (
            <div
              key={partner.name}
              className={cn(
                "relative group hover:scale-110 transition-all duration-300 border border-accent-primary",
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
                className="w-auto h-auto max-h-16 object-contain filter transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Partners;
