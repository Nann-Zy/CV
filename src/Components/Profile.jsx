import { Card } from "flowbite-react";
import Image from "../assets/pp.jpg";

export const Profile = () => {
    return (
        <div className="bg-gradient-to-br from-gray-800 to-blue-800 min-h-screen p-6 flex justify-center">
            <Card className="w-full max-w-4xl p-6 shadow-lg bg-gray-900">
                <div className="bg-gray-800 text-white p-6 rounded-t-lg flex flex-col items-center">
                    <img
                        alt="Photo Profile"
                        src={Image}
                        className="rounded-full w-24 h-24 mb-4 border-4 border-white"
                    />
                    <h1 className="text-3xl font-bold text-gray-100">Ananda Puttra</h1>
                    <span className="text-lg text-gray-200">Software Enginner</span>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-8 p-6">
                    {/* Left Side - Contact, Portfolio, Skills */}
                    <div className="w-full md:w-1/3">
                        {/* Contact */}
                        <h2 className="text-lg font-semibold text-gray-100">Contact</h2>
                        <ul className="text-gray-200 mt-2 space-y-1">
                            <li>Phone   : <a href="https://wa.me/6281220995629" target="_blank" className="text-blue-600">+62 812-2099-5629</a></li>
                            <li>Email   : <a href="https://anandaputtra270608@gmail.com" target="_blank" className="text-blue-600">anandaputtra270608@gmail.com</a></li>
                            <li>GitHub  : <a href="https://github.com/Nann-Zy" target="_blank" className="text-blue-600">https://github.com/Nann-Zy</a></li>
                        </ul>


                        {/* Portfolio */}
                        <h2 className="text-lg font-semibold text-gray-100 mt-6">Sertifikat</h2>
                        <p className="text-gray-200 mt-2">-</p>

                        {/* Skills */}
                        <h2 className="text-lg font-semibold text-gray-100 mt-6">Skills</h2>
                        <ul className="text-gray-200 mt-2 space-y-1">
                            <li>PHP</li>
                            <li>JavaScirpt</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>Design Web</li>
                        </ul>
                    </div>

                    {/* Right Side - Summary, Education, Work Experience */}
                    <div className="w-full md:w-2/3">
                        {/* Summary */}
                        <h2 className="text-lg font-semibold text-gray-100">Pengenalan</h2>
                        <p className="text-gray-200 mt-2">
                            -
                        </p>

                        {/* Education */}
                        <h2 className="text-lg font-semibold text-gray-100 mt-6">Education</h2>
                        <p className="text-gray-200 mt-2">
                            <strong>SMK Prakarya Internasional</strong><br />
                            2023 - 2026, Pengembangan Perangkat Lunak Dan Gim
                        </p>

                        {/* Work Experience */}
                        <h2 className="text-lg font-semibold text-gray-100 mt-6">Pengalaman Kerja</h2>
                        <div className="text-gray-200 mt-2 space-y-4">
                            <div>
                                <strong>Nama Industri/PT</strong><br/>
                                Tanggal
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    <li>Penagalaman di industri nanti</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};