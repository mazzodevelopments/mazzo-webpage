'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from '@nextui-org/react';
import { Link as ScrollLink } from 'react-scroll';
import { AcmeLogo } from './MazzoLogo';

interface NavBarProps {
  links: {
    text: string;
    route: string;
  }[];
}

export default function NavBar({ links }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      height="64px"
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 left-0 right-0 z-50 bg-opacity-10 bg-black"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-gray-100"
        />
        <NavbarBrand className="text-gray-100 cursor-pointer">
          <AcmeLogo />
          <ScrollLink to="hero" smooth={true} duration={500} offset={-64}>
            <p className="font-bold">Mazzo Developments</p>
          </ScrollLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((item, index) => {
          const { text, route } = item;
          return (
            <NavbarItem key={index}>
              <ScrollLink
                to={route}
                smooth={true}
                duration={500}
                offset={-64}
                className="text-sm text-gray-100 cursor-pointer"
              >
                {text}
              </ScrollLink>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={ScrollLink}
            smooth={true}
            duration={500}
            offset={-64}
            to="contact"
            size="md"
            variant="flat"
            className="bg-emerald-700 text-emerald-100 border border-emerald-500"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-opacity-10 bg-black">
        {links.map((item, index) => (
          <NavbarMenuItem key={`${item.text}-${index}`}>
            <ScrollLink
              to={item.route}
              smooth={true}
              duration={500}
              offset={-64}
              className="w-full text-gray-100 cursor-pointer"
            >
              {item.text}
            </ScrollLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
