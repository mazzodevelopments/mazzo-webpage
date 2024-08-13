'use client';
import { motion } from 'framer-motion';
import { Chip } from '@nextui-org/react';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServicesItem({
  title,
  description,
  icon
}: ServiceItemProps) {
  return (
    <motion.div
      className="border shadow-sm max-w-6xl md:max-w-[555px] flex items-start flex-col gap-4 md:gap-8 rounded-2xl bg-slate-900 text-background border-gray-800 p-6"
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col p-0 gap-2">
        <Chip
          avatar={icon}
          radius="sm"
          variant="flat"
          classNames={{
            base: 'bg-emerald-700 text-emerald-100 border border-emerald-500 mb-6',
            content: 'p-0 m-0'
          }}
        />
        <div className="border-l-2 border-gray-800 pl-4">
          <h3 className="tracking-tight text-sm md:text-base font-semibold text-gray-100">
            {title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
