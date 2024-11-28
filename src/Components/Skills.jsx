import React from "react";
import { FaHtml5, FaCss3Alt, FaLaravel, FaPhp, FaFigma } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
export const Skills = () => {
  return (
      <div className="max-w-screen-xl mx-auto p-10" id="skills">
      <h2 className="text-4xl font-bold text-center mb-8">My Skill</h2>
      <div className="flex justify-center space-x-10">


        <div className="flex flex-col items-center">
          <div className="bg-white shadow-lg p-5 rounded-full">
            <FaHtml5 className="text-red-600 text-6xl" />
          </div>
          <p className="mt-2 text-lg">HTML</p>
        </div>


        <div className="flex flex-col items-center">
          <div className="bg-white shadow-lg p-5 rounded-full">
            <FaCss3Alt className="text-blue-600 text-6xl" />
          </div>
          <p className="mt-2 text-lg">CSS</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white shadow-lg p-5 rounded-full">
            <TbBrandJavascript className="text-orange-600 text-6xl" />
          </div>
          <p className="mt-2 text-lg">JavaScript</p>
        </div>


        <div className="flex flex-col items-center">
          <div className="bg-white shadow-lg p-5 rounded-full">
            <FaLaravel className="text-red-600 text-6xl" /> 
          </div>
          <p className="mt-2 text-lg">Laravel</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white shadow-lg p-5 rounded-full">
            <FaPhp className="text-blue-600 text-6xl" /> 
          </div>
          <p className="mt-2 text-lg">Php</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white shadow-lg p-5 rounded-full">
            <FaFigma className="text-blue-600 text-6xl" /> 
          </div>
          <p className="mt-2 text-lg">Figma</p>
        </div>

        </div>
      </div>
  );
};