import { Navbar, NavbarLink } from "flowbite-react";
import { useState } from 'react';

export function Header() {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    // Scroll to the section with the id matching the link
    document.getElementById(link.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center">
      <Navbar fluid rounded className="bg-black text-white max-w-[350px] mx-auto py-3 px-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between w-full">
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active={activeLink === 'Home'} onClick={() => handleLinkClick('Home')}>Home</Navbar.Link>
            <Navbar.Link href="#" active={activeLink === 'About'} onClick={() => handleLinkClick('About')}>About</Navbar.Link>
            <Navbar.Link href="#" active={activeLink === 'Services'} onClick={() => handleLinkClick('Services')}>Services</Navbar.Link>
            <Navbar.Link href="#" active={activeLink === 'Contact'} onClick={() => handleLinkClick('Contact')}>Contact</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}