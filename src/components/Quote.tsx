import { Chip, User } from '@nextui-org/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface QuoteProps {
  chipText: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  githubLink: string;
  linkedinLink: string;
}

export default function Quote({
  chipText,
  quote,
  name,
  role,
  image,
  githubLink,
  linkedinLink
}: QuoteProps) {
  return (
    <div className="p-6 rounded-3xl shadow-lg bg-slate-900 text-gray-100 border border-gray-800">
      <Chip
        radius="sm"
        variant="flat"
        classNames={{
          base: 'bg-emerald-700 text-emerald-100 border border-emerald-500 mb-3'
        }}
      >
        {chipText}
      </Chip>
      <h2 className="text-xl font-medium mb-3">{`"${quote}"`}</h2>
      <div className="flex items-center space-x-8">
        <User
          className="text-gray-100"
          name={name}
          description={role}
          avatarProps={{
            src: image
          }}
        />
        <div className="flex space-x-4 ml-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-400 hover:text-white transition-colors duration-150" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-400 hover:text-white transition-colors duration-150" />
          </a>
        </div>
      </div>
    </div>
  );
}
