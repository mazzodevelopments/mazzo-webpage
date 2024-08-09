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
  Link,
  Button
} from '@nextui-org/react';
import { AcmeLogo } from './MazzoLogo';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { text: 'Profile', route: 'profile' },
    { text: 'Dashboard', route: 'dashboard' },
    { text: 'Activity', route: 'activity' },
    { text: 'Analytics', route: 'analytics' }
  ];

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
        <NavbarBrand className=" text-gray-100">
          <AcmeLogo />
          <p className="font-bold">Mazzo Developments</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => {
          const { text, route } = item;
          return (
            <NavbarItem key={index}>
              <Link className="text-sm text-gray-100" href={`#${route}`}>
                {text}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            size="md"
            variant="flat"
            href="#contact"
            className="bg-emerald-700 text-emerald-100 border border-emerald-500"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-opacity-10 bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.text}-${index}`}>
            <Link
              className="w-full text-gray-100"
              href={`#${item.route}`}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
