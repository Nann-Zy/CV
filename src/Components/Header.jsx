import { Navbar } from "flowbite-react";
import { useState } from "react";

export function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  // Fungsi untuk menangani klik pada link
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set link aktif
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll ke bagian yang dipilih
    } else if (link === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas jika Home
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center">
      <Navbar fluid rounded className="bg-transparent text-white max-w-[400px] mx-auto py-3 px-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between w-full">
          <Navbar.Toggle />
          <Navbar.Collapse>
            {["Home", "About", "Skills", "Project", "Contact"].map((link) => (
              <Navbar.Link
                key={link}
                href="#"
                onClick={() => handleLinkClick(link)} // Fungsi klik link
                className={`${
                  activeLink === link
                    ? "text-indigo-500 font-bold" // Link aktif
                    : "text-gray-300 hover:text-gray-500" // Link tidak aktif
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
