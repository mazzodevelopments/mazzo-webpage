import { Chip } from '@nextui-org/react';

import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-slate-950 to-emerald-950 px-4 py-16 md:py-24 xl:px-16 2xl:px-40"
    >
      <div className="flex flex-col gap-3 md:gap-6 max-w-6xl">
        <Chip
          radius="sm"
          variant="flat"
          classNames={{
            base: 'bg-emerald-700 text-emerald-100 border border-emerald-500'
          }}
        >
          Get in Touch
        </Chip>
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="leading-none font-bold text-gray-100 md:leading-none text-3xl xs:text-4xl md:text-5xl">
            Contact Us
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            Whether you’re looking to start a new project or need support for an
            existing one, we’re here to assist. Contact us today to get a
            personalized quote or to discuss your software development needs.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:gap-16 w-full max-w-6xl mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
