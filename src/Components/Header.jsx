import { Navbar } from "flowbite-react";
import { useState } from "react";

export function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    // Scroll to the section with the id matching the link
    document
      .getElementById(link.toLowerCase())
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center">
      <Navbar
        fluid
        rounded
        className="bg-gray text-white max-w-[400px] mx-auto py-3 px-4 rounded-lg shadow-lg"
      >
        <div className="flex items-center justify-between w-full">
          <Navbar.Toggle />
          <Navbar.Collapse>
            {["Home", "About", "Skill", "Project", "Contact"].map((link) => (
              <Navbar.Link
                key={link}
                href="#"
                onClick={() => handleLinkClick(link)}
                className={`${
                  activeLink === link
                    ? "text-indigo-500 font-bold" // Warna dan gaya untuk link aktif
                    : "text-gray-300 hover:text-gray-500" // Warna default
                }`}
              >
                {link}
              </Navbar.Link>
            ))}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
