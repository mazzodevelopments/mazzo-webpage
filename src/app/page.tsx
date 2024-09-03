import { Divider, NextUIProvider } from '@nextui-org/react';
import NavBar from '@/components/NavBar';

import Hero from '@/pages/Hero';
import Featured from '@/pages/Featured';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import HowWeWork from '@/pages/HowWeWork';
import Quotes from '@/pages/Quotes';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  const links = [
    { text: 'Featured', route: 'featured' },
    { text: 'Services', route: 'services' },
    { text: 'How We Work', route: 'how-we-work' }
  ];
  return (
    <NextUIProvider>
      <NavBar links={links} />
      <main>
        <Hero />
        <Divider className="bg-gray-800" />
        <Featured />
        <Divider className="bg-gray-800" />
        <Services />
        <Divider className="bg-gray-800" />
        <Quotes />
        <Divider className="bg-gray-800" />
        <HowWeWork />
        <Divider className="bg-gray-800" />
        <Contact />
        <Divider className="bg-gray-800" />
        <Footer links={links} />
      </main>
    </NextUIProvider>
  );
}
