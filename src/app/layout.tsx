import type { Metadata } from "next";
import "./globals.css";
import { montserrat, pacifico, parisienne, pattaya } from './font';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'
import 'lenis/dist/lenis.css'

export const metadata: Metadata = {
  title: "FGC Future Lestari",
  description: "FGC Future Lestari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${montserrat.className} ${pacifico.variable} ${montserrat.variable} ${pattaya.variable} ${parisienne.variable}`}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
