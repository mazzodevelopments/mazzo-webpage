import { Chip } from '@nextui-org/react';
import WhoWeAreCard from '@/components/WhoWeAreCard';
import MatteozziPic from '../../public/static/matteozzi.jpg';
import MarzoratiPic from '../../public/static/marzorati.jpg';
import MonzalvoPic from '../../public/static/monzalvo.jpg';

const we = [
  {
    name: 'Matías',
    lastName: 'Marzorati',
    role: 'Backend Developer',
    photoUrl: MarzoratiPic.src,
    githubUrl: 'https://github.com/MatiasMarzorati',
    linkedinUrl: 'https://www.linkedin.com/in/matiasmarzorati',
    experiences: [
      {
        company: 'Instituto Superior de Seguridad Pública',
        role: 'Software Engineer',
        description:
          'Specialized in backend development, building APIs with Flask and NestJS, and optimizing databases. Focused on creating secure server-side applications and seamless front-end integration.',
        duration: '2024 - Now'
      },
      {
        company: 'Sancor Seguros',
        role: 'Intern',
        description:
          'Handled data entry tasks with accuracy, maintaining database integrity. Developed attention to detail and efficiency in managing large data sets.',
        duration: '2023'
      }
    ]
  },
  {
    name: 'Tomás',
    lastName: 'Matteozzi',
    role: 'Frontend Developer',
    photoUrl: MatteozziPic.src,
    githubUrl: 'https://github.com/tmatteozzi',
    linkedinUrl: 'https://www.linkedin.com/in/tmatteozzi',
    portfolioUrl: 'https://portfolio-tomas-projects-6770af86.vercel.app/',
    experiences: [
      {
        company: 'Gecko',
        role: 'Developer and Tester Assistant',
        description:
          'Collaborated on the development and testing of web applications. Assisted in resolving technical issues and implementing new features.',
        duration: '2022 - Now'
      },
      {
        company: 'Instituto Lenguas Vivas Bariloche',
        role: 'Secretary & Appointment Setter',
        description:
          'Performed administrative and customer service tasks. Provided support to teachers and students.',
        duration: '2021'
      },
      {
        company: 'Argentina Mining & Innqube',
        role: 'Event / Tech Support',
        description:
          'Provided technical assistance to event participants. Resolved computer and software related issues.',
        duration: '2020'
      }
    ]
  },
  {
    name: 'Matías',
    lastName: 'Monzalvo',
    role: 'UX/UI',
    photoUrl: MonzalvoPic.src,
    githubUrl: 'https://github.com/matiasmonzalvo',
    linkedinUrl: 'https://www.linkedin.com/in/matias-monzalvo',
    portfolioUrl: 'https://www.matiasmonzalvo.com/',
    experiences: [
      {
        company: 'Freelance',
        role: 'UX/UI Developer & Designer',
        description:
          'Designed and developed custom websites and apps for clients, delivering tailored, high-quality results.',
        duration: '2023 - Now'
      },
      {
        company: 'Physios Agency',
        role: 'Community Manager',
        description:
          "Managed the agency's online presence by creating and curating content, engaging with followers, monitoring social media trends, and analyzing feedback to enhance brand engagement.",
        duration: '2022 - 2023'
      }
    ]
  }
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-slate-950 to-emerald-950 gap-8 md:gap-16 px-4 py-16 md:py-24 xl:px-16 2xl:px-40"
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
            Who We Are
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            We’re a team of innovators committed to developing solutions that
            make a difference. Our collaborative approach ensures that each
            solution is both effective and impactful.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto gap-6 md:gap-8">
        {we.map((member) => {
          return <WhoWeAreCard key={member.lastName} {...member} />;
        })}
      </div>
    </section>
  );
}
