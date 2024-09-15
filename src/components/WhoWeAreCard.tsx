'use client';
import { useState } from 'react';
import {
  Button,
  Link,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter
} from '@nextui-org/react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

interface Experience {
  company: string;
  role: string;
  description: string;
  duration: string;
}

interface UserCardProps {
  name: string;
  lastName: string;
  role: string;
  photoUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl?: string;
  experiences: Experience[];
}

export default function WhoWeAreCard({
  name,
  lastName,
  role,
  photoUrl,
  githubUrl,
  linkedinUrl,
  portfolioUrl,
  experiences
}: UserCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="w-full sm:w-[20rem] h-[30rem] bg-gradient-to-br from-slate-950 to-emerald-950 border border-gray-800 rounded-3xl overflow-hidden cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative w-full h-4/6 overflow-hidden">
          <Image
            src={photoUrl}
            alt={`${name} ${lastName}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="relative h-auto border-t border-slate-700/50 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center p-6">
          <h2 className="text-2xl font-medium text-gray-100">
            {name} {lastName}
          </h2>
          <p className="text-sm text-gray-400 mt-2 mb-4">{role}</p>
          <Button
            size="sm"
            className="bg-emerald-700 text-sm text-emerald-100 border border-emerald-500 w-full"
            onPress={handleCardClick}
          >
            Check Profile
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        scrollBehavior="inside"
        placement="center"
        size="3xl"
        backdrop="blur"
        classNames={{
          base: 'bg-gradient-to-br from-slate-950 to-emerald-950 border border-gray-800',
          footer: 'border-t-1 border-slate-700/50',
          closeButton:
            'hover:bg-emerald-700/20 active:bg-emerald-700/30 text-emerald-100'
        }}
      >
        <ModalContent>
          <ModalBody className="mt-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-4 text-gray-100">
                <h4 className="font-semibold text-lg">{exp.company}</h4>
                <p className="text-sm text-emerald-500">{exp.role}</p>
                <p className="text-md text-gray-300">{exp.description}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
              </div>
            ))}
          </ModalBody>
          <ModalFooter className="flex flex-row items-center justify-between">
            <div className="flex space-x-4">
              <Button
                size="md"
                className="bg-emerald-700 text-emerald-100 border border-emerald-500"
                isIconOnly
                as={Link}
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                onPress={() =>
                  window.open(linkedinUrl, '_blank', 'noopener,noreferrer')
                }
              >
                <FaLinkedin className="w-6 h-6" />
              </Button>
              <Button
                size="md"
                className="bg-emerald-700 text-emerald-100 border border-emerald-500"
                isIconOnly
                as={Link}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                onPress={() =>
                  window.open(githubUrl, '_blank', 'noopener,noreferrer')
                }
              >
                <FaGithub className="w-6 h-6" />
              </Button>
              {portfolioUrl && (
                <Button
                  size="md"
                  className="bg-emerald-700 text-emerald-100 border border-emerald-500"
                  isIconOnly
                  as={Link}
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  onPress={() =>
                    window.open(portfolioUrl, '_blank', 'noopener,noreferrer')
                  }
                >
                  <FaGlobe className="w-6 h-6" />
                </Button>
              )}
            </div>
            <Button
              size="md"
              className="bg-emerald-700 text-emerald-100 border border-emerald-500"
              onPress={closeModal}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
