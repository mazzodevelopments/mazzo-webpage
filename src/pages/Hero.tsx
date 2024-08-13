'use client';
import { Button, Chip } from '@nextui-org/react';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen justify-center items-center mx-auto bg-gradient-to-r from-slate-950 to-slate-950"
      style={{
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 76%, transparent 77%, transparent)`,
          backgroundSize: '55px 55px',
          opacity: 0.3,
          zIndex: 1
        }}
      />
      <div className="text-center z-10">
        <Chip
          radius="sm"
          variant="flat"
          classNames={{
            base: 'bg-emerald-700 text-emerald-100 border border-emerald-500 mb-6'
          }}
        >
          Software Solutions
        </Chip>
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 mb-3">
          Power your StartUp
          <br />
          with AI
        </h1>
        <p className="text-base font-normal text-gray-300 mb-9">
          <strong>Mazzo</strong> provides global software solutions, bringing
          <br /> AI into your projects, no matter where you are.
        </p>
        <Button
          as={ScrollLink}
          smooth={true}
          duration={500}
          offset={-64}
          size="lg"
          variant="flat"
          to="contact"
          className="bg-emerald-700 text-emerald-100 border border-emerald-500"
        >
          Contact
        </Button>
      </div>
    </section>
  );
}
