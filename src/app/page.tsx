import NavBar from '@/components/NavBar';
import Featured from '@/pages/Featured/Featured';
import Hero from '@/pages/Hero';
import Services from '@/pages/Services/Services';
import { Divider, NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <NavBar />
      <main>
        <Hero />
        <Featured />
        <Divider className="bg-gray-800" />
        <Services />
        {/* <Quotes /> */}
      </main>
    </NextUIProvider>
  );
}
