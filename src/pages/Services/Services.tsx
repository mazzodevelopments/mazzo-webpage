import { Chip } from '@nextui-org/react';
import ServicesItem from './ServicesItem';
import {
  GoBrowser,
  GoDeviceMobile,
  GoMegaphone,
  GoCloud
} from 'react-icons/go';

const services = [
  {
    title: 'Web Development',
    description:
      'Creating responsive, high-performance websites tailored to your business needs.',
    icon: <GoBrowser /> // Ícono relacionado con desarrollo web
  },
  {
    title: 'Mobile App Development',
    description:
      'Designing and developing mobile applications that deliver a seamless user experience.',
    icon: <GoDeviceMobile /> // Ícono relacionado con desarrollo de aplicaciones móviles
  },
  {
    title: 'Digital Marketing',
    description:
      'Boosting your online presence with effective marketing strategies and campaigns.',
    icon: <GoMegaphone /> // Ícono relacionado con marketing digital
  },
  {
    title: 'Cloud Solutions',
    description:
      'Implementing scalable cloud solutions to enhance your business operations.',
    icon: <GoCloud /> // Ícono relacionado con soluciones en la nube
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 px-4 xl:px-16 py-16 md:py-24 text-background flex flex-col gap-8 md:gap-16 justify-center items-center"
    >
      <div className="max-w-2xl text-center flex flex-col items-center gap-3 md:gap-6">
        <Chip
          radius="sm"
          variant="flat"
          classNames={{
            base: 'bg-emerald-700 text-emerald-100 border border-emerald-500'
          }}
        >
          Explore
        </Chip>
        <div>
          <h3 className="leading-none font-bold text-gray-100 md:leading-none text-3xl xs:text-4xl md:text-5xl mb-3">
            Services
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            We offer a wide range of professional services designed to meet your
            needs and exceed your expectations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl text-left">
        {services.map((service, index) => (
          <ServicesItem
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
