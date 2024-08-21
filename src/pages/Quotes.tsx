import Quote from '@/components/Quote';

import MatteozziPic from '../../public/static/matteozzi.jpg';
import MarzoratiPic from '../../public/static/marzorati.jpg';
import MonzalvoPic from '../../public/static/monzalvo.jpg';
import { Chip } from '@nextui-org/react';

const quotes = [
  {
    chipText: 'Backend',
    quote:
      'At Mazzo, we believe that technology is the key to unlocking the full potential of businesses. Through innovative software solutions and advanced AI, we empower companies to not only meet the challenges of today but to thrive in the opportunities of tomorrow.',
    name: 'Matías Marzorati',
    role: 'Co-Founder',
    image: MarzoratiPic.src,
    githubLink: 'https://github.com/MatiasMarzorati',
    linkedinLink: 'https://www.linkedin.com/in/matiasmarzorati'
  },
  {
    chipText: 'Frontend',
    quote:
      'In a rapidly evolving digital world, we are your partner in innovation. We transform complex ideas into intuitive software solutions, helping businesses leverage the full power of AI to stay ahead of the curve and drive sustainable growth.',
    name: 'Tomás Matteozzi',
    role: 'Co-Founder',
    image: MatteozziPic.src,
    githubLink: 'https://github.com/tmatteozzi',
    linkedinLink: 'https://www.linkedin.com/in/tmatteozzi'
  },
  {
    chipText: 'UX/UI',
    quote:
      'We turn clicks into experiences, blending functionality with creativity to build digital platforms that connect and inspire. Trust us to craft your brand’s unique digital identity.',
    name: 'Matías Monzalvo',
    role: 'Co-Founder',
    image: MonzalvoPic.src,
    githubLink: 'https://github.com/matiasmonzalvo',
    linkedinLink: 'https://www.linkedin.com/in/matias-monzalvo'
  }
];

export default function Quotes() {
  return (
    <section
      id="quotes"
      className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-slate-950 to-emerald-950 gap-8 px-4 py-16 md:py-24 xl:px-16 2xl:px-40"
    >
      <div className="max-w-2xl text-center flex flex-col items-center gap-3 md:gap-6">
        <Chip
          radius="sm"
          variant="flat"
          classNames={{
            base: 'bg-emerald-700 text-emerald-100 border border-emerald-500'
          }}
        >
          Meet Us
        </Chip>
        <div>
          <h3 className="leading-none font-bold text-gray-100 md:leading-none text-3xl xs:text-4xl md:text-5xl mb-3">
            Our Team
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {quotes.map(
          (
            { chipText, quote, name, role, image, githubLink, linkedinLink },
            index
          ) => (
            <Quote
              key={index}
              chipText={chipText}
              quote={quote}
              name={name}
              role={role}
              image={image}
              githubLink={githubLink}
              linkedinLink={linkedinLink}
            />
          )
        )}
      </div>
    </section>
  );
}
