import NavBar from '@/components/NavBar';
import Hero from '@/pages/Hero';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <NavBar />
      <main>
        <Hero />
      </main>
    </NextUIProvider>
  );
}
