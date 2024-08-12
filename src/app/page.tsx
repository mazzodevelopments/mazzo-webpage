import { Divider, NextUIProvider } from '@nextui-org/react';
import NavBar from '@/components/NavBar';

import Hero from '@/pages/Hero';
import Featured from '@/pages/Featured/Featured';
import Services from '@/pages/Services/Services';
import Contact from '@/pages/Contact/Contact';
import HowWeWork from '@/pages/HowWeWork/HowWeWork';

export default function Home() {
  return (
    <NextUIProvider>
      <NavBar />
      <main>
        <Hero />
        <Divider className="bg-gray-800" />
        <Featured />
        <Divider className="bg-gray-800" />
        <Services />
        <Divider className="bg-gray-800" />
        <HowWeWork />
        <Divider className="bg-gray-800" />
        <Contact />
      </main>
    </NextUIProvider>
  );
}
