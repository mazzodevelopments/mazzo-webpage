// components/AISection.tsx
import { Chip } from '@nextui-org/react';

interface ItemProps {
  chipText: string;
  title: string;
  description: string;
  videoSrc: string;
  reversed?: boolean;
}

export default function Item({
  chipText,
  title,
  description,
  videoSrc,
  reversed = false
}: ItemProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reversed ? 'lg:flex-row-reverse' : ''
      } justify-between max-w-6xl w-full items-center gap-6 `}
    >
      <div className="flex flex-col gap-3 md:gap-6 basis-1/2 lg:basis-1/2">
        <Chip
          radius="sm"
          variant="flat"
          classNames={{
            base: 'bg-emerald-700 text-emerald-100 border border-emerald-500'
          }}
        >
          {chipText}
        </Chip>
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="leading-none font-bold text-gray-100 md:leading-none text-3xl xs:text-4xl md:text-5xl">
            {title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base">{description}</p>
        </div>
      </div>
      <div
        className={`rounded-xl gap-8 md:gap-16 lg:w-[550px] h-full flex flex-col justify-center items-center ${
          reversed ? 'lg:items-start' : 'lg:items-end'
        }`}
      >
        <video
          autoPlay
          muted
          loop
          width="85%"
          height="auto"
          className="rounded-3xl opacity-95"
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    </div>
  );
}
