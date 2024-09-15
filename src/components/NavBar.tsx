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

import { MazzoLogo } from './MazzoLogo';

interface NavBarProps {
  links: {
    text: string;
    route: string;
  }[];
}

export default function NavBar({ links }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      maxWidth="xl"
      isBordered
      height="64px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 left-0 right-0 z-50 bg-opacity-10 bg-black"
      classNames={{ brand: 'lg:ml-10', item: ' lg:mr-10' }}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-gray-100"
        />
        <NavbarBrand className="text-gray-100 cursor-pointer gap-x-2">
          <div className="opacity-90">
            <MazzoLogo />
          </div>
          <ScrollLink to="hero" smooth={true} duration={500} offset={-64}>
            <p className="font-semibold">Mazzo Developments</p>
          </ScrollLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((item, index) => {
          const { text, route } = item;
          return (
            <div key={index}>
              <ScrollLink
                to={route}
                smooth={true}
                duration={500}
                offset={-64}
                className="text-sm text-gray-100 hover:text-emerald-500 cursor-pointer"
              >
                {text}
              </ScrollLink>
            </div>
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
            onClick={handleMenuItemClick}
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
              onClick={handleMenuItemClick}
            >
              {item.text}
            </ScrollLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
