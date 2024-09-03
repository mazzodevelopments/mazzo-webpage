'use client';
import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

import { MazzoLogo } from './MazzoLogo';

interface FooterProps {
  links: { text: string; route: string }[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className="bg-slate-950 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="opacity-75">
            <MazzoLogo />
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            {links.map((link, index) => (
              <ScrollLink
                key={index}
                smooth={true}
                duration={500}
                offset={-64}
                to={link.route}
                className="text-sm hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {link.text}
              </ScrollLink>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/mazzodevelopments"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/mazzodevelopments"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:hello@mazzodevelopments.com"
              className="hover:text-emerald-300 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="text-xs mt-8 text-center text-gray-500">
          &copy; 2024 Mazzo Developments. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
