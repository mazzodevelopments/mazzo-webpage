import { Chip, User } from '@nextui-org/react';

interface QuoteProps {
  chipText: string;
  quote: string;
  name: string;
  role: string;
  image: string;
}

export default function Quote({
  chipText,
  quote,
  name,
  role,
  image
}: QuoteProps) {
  return (
    <div className=" p-6 rounded-3xl shadow-lg bg-slate-900 text-gray-100 border border-gray-800">
      <Chip
        radius="sm"
        variant="flat"
        classNames={{
          base: 'bg-emerald-700 text-emerald-100 border border-emerald-500 mb-3'
        }}
      >
        {chipText}
      </Chip>
      <h2 className="text-2xl font-medium mb-3">{`"${quote}"`}</h2>
      <User
        className="text-gray-100"
        name={name}
        description={role}
        avatarProps={{
          src: image
        }}
      />
    </div>
  );
}
