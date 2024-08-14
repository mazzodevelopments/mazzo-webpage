import { Chip } from '@nextui-org/react';
import { GoTools, GoRocket, GoAlert, GoThumbsup } from 'react-icons/go';

const content = [
  {
    icon: <GoTools />,
    title: 'Step 1: Discovery',
    description:
      'We start with a discovery phase to understand your needs and goals. We analyze project requirements and define the scope to ensure a solution that meets your expectations.'
  },
  {
    icon: <GoRocket />,
    title: 'Step 2: Design',
    description:
      'In this phase, we create prototypes and mockups to visualize the solution. We work on the architecture and user interface design, ensuring that the solution is intuitive and functional.'
  },
  {
    icon: <GoAlert />,
    title: 'Step 3: Development',
    description:
      'We develop the solution following best coding practices. We implement features and perform continuous testing to ensure the quality and performance of the software.'
  },
  {
    icon: <GoThumbsup />,
    title: 'Step 4: Implementation and Support',
    description:
      'We deploy the solution and implement it in the production environment. We provide ongoing support to address any issues and make adjustments as needed to ensure project success.'
  }
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="flex flex-col items-center justify-center h-full w-full bg-slate-950 gap-20 md:gap-36 px-4 py-16 md:py-24 xl:px-16 2xl:px-40 max-h-screen/2"
    >
      <div className="flex flex-col lg:flex-row justify-between max-w-6xl w-full items-start gap-6">
        <div className="flex flex-col gap-3 md:gap-6 basis-1/2 lg:basis-1/2 lg:sticky lg:top-24 lg:pt-3">
          <Chip
            radius="sm"
            variant="flat"
            classNames={{
              base: 'bg-emerald-700 text-emerald-100 border border-emerald-500'
            }}
          >
            Our Approach
          </Chip>
          <div className="flex flex-col gap-1 md:gap-2">
            <h3 className="leading-none font-bold text-gray-100 md:leading-none text-3xl xs:text-4xl md:text-5xl">
              How we work
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Discover the streamlined approach we use to ensure every project
              is executed efficiently and effectively. Our process combines
              expert insights, advanced technology, and a collaborative approach
              to deliver exceptional results tailored to your needs.
            </p>
          </div>
        </div>
        <div className="rounded-xl gap-6 md:gap-9 max-w-6xl lg:w-[550px] h-full flex flex-col justify-center items-center lg:p-6">
          {content.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-1 md:gap-3 bg-slate-900 border border-gray-800 rounded-3xl p-6"
            >
              <div className="text-emerald-500 font-bold text-lg">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg md:text-xl font-semibold text-gray-100">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
