export function Header() {
  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll ke elemen tujuan
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center">
      <div className="bg-transparent text-white max-w-[800px] h-12 mx-auto py-0 px-6 rounded-lg shadow-lg flex space-x-4">
        <a
          href="#"
          onClick={() => handleScroll("home")}
          className="text-sm text-gray-300 my-5 hover:text-blue-400"  // Mengubah text-lg menjadi text-sm
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => handleScroll("about")}
          className="text-sm text-gray-300 my-5 hover:text-blue-400"  // Mengubah text-lg menjadi text-sm
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => handleScroll("skills")}
          className="text-sm text-gray-300 my-5 hover:text-blue-400"  // Mengubah text-lg menjadi text-sm
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={() => handleScroll("contact")}
          className="text-sm text-gray-300 my-5 hover:text-blue-400"  // Mengubah text-lg menjadi text-sm
        >
          Contact
        </a>
      </div>
    </div>
  );
}
