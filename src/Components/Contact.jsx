import React from "react";

import {
  BiEnvelope,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
} from "react-icons/bi";

const ContactCard = () => {
  return (
    <div
      className="bg-gray-700 dark:bg-gray-900 text-white p-6 rounded-lg flex flex-col items-center md:items-start md:flex-row justify-center md:justify-evenly"
      id="contact"
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h5 className="mb-6 text-3xl md:text-[50px] lg:text-[70px] font-bold">
          Get My Contact
        </h5>
        <p className="mb-4 text-base md:text-lg">
          If u need me , call me here or send a message !😉
        </p>
        <div className="flex mt-5 gap-4">
          <a
            href="anandaputtra270608@gmail.com"
            className="text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50"
            aria-label="Email"
          >
            <BiEnvelope />
          </a>
          <a
            href=""
            className="text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50"
            aria-label="Whatsapp"
          >
            <BiLogoWhatsapp />
          </a>
          <a
            href="https://github.com/Nann-Zy"
            className="text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50"
            aria-label="Github"
          >
            <BiLogoGithub />
          </a>
          <a
            href="https://www.instagram.com/sinzpr/"
            className="text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50"
            aria-label="Instagram"
          >
            <BiLogoInstagram />
          </a>
          <a
            href="#"
            className="text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50"
            aria-label="Linkedin"
          >
            <BiLogoLinkedinSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;