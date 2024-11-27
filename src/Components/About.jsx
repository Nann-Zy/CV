import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Image from "../assets/pp.jpg";

export const About = () => {
  return (
    <motion.div
      id="about"
      className="sm:flex items-center max-w-screen-xl"
      initial={{ opacity: 1, y: 60 }} // Awal animasi
      animate={{ opacity: 5, y: 0 }} // Akhir animasi
      transition={{ duration: 1.8, ease: "easeInOut" }} // Durasi dan jenis animasi
    >
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img
            src={Image}
            alt="Profile"
            className="md:w-96 w-72 rounded-full mx-auto"
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About me
          </h2> 
          <p className="text-grey">
            Let me introduce myself, I am Ananda Puttra, a passionate Junior
            Developer with foundational experience in web development. I possess
            skills in building websites and the ability to collaborate
            effectively within a team to deliver innovative technological
            solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
