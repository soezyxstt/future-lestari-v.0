import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const navItems = ['about', 'timeline', 'benefits', 'judges', 'partners', 'FAQ'];
  const socialLinks = [
    { name: 'Twitter', href: '#', Icon: Twitter },
    { name: 'Instagram', href: '#', Icon: Instagram },
    { name: 'LinkedIn', href: '#', Icon: Linkedin }
  ];

  return (
    <footer className={`w-full bg-accent-primary text-white md:h-[600px] h-dvh relative`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      }}
    >
      <div className="absolute h-[calc(200dvh)] md:h-[calc(100vh+600px)] -top-[100dvh] w-full">
        <div className="sticky top-[calc(100dvh-600px)] h-dvh md:h-[600px] w-full">
          <div className="px-4 md:px-6 py-8 md:py-12 max-w-7xl mx-auto flex flex-col justify-center h-full">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
              <h1 className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8`}>EventName</h1>
              {/* Top Navigation */}
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8 md:mb-12 text-center">
                <Link href="/brands" className="text-white/80 hover:text-white transition-colors">BRANDS</Link>
                <Link href="/media" className="text-white/80 hover:text-white transition-colors">MEDIA</Link>
                <Link href="/pr-agencies" className="text-white/80 hover:text-white transition-colors">PR AGENCIES</Link>
              </div>

              {/* Middle Navigation */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors uppercase text-sm md:text-base"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-white/80 hover:text-white transition-colors rounded-full border border-white/80 p-2"
                  >
                    <social.Icon size={18} className="md:w-5 md:h-5 w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="text-center text-xs md:text-sm text-white/80">
                <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 mb-4">
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </div>
                <p>
                  © {new Date().getFullYear()} Eventname. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}