import React from "react";
import Image from "../assets/pp.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Profile = () => {
    return (
        <div id="home">
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 px-6 py-6 text-center bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-xl xl:px-10">
                <div className="space-y-4 xl:space-y-6">
                    <div>
                        <img
                            src={Image}
                            alt="Profile"
                            className="md:w-96 w-72 rounded-full mx-auto"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                            <h3 className="text-gray-800">Ananda Puttra</h3>
                            <p className="text-gray-500">Junior Developer</p>

                            <div className="mt-4 flex justify-center space-x-4">
                                <a
                                    href="/path/to/your-cv.pdf"
                                    download
                                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 focus:outline-none"
                                >
                                    Download CV
                                </a>
                            </div>
                            <div className="flex justify-center space-x-6 mt-4">
                                <a
                                    href="https://github.com/Nann-Zy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="text-2xl" />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        </div>
    );
};
