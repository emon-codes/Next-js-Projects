
"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-widest cursor-pointer
          transition duration-300
          hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          EMON
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="#"
            className="transition transform duration-300
            hover:scale-125 hover:text-blue-500"
          >
            <FaFacebook />
          </a>

          <a
            href="#"
            className="transition transform duration-300
            hover:scale-125 hover:text-pink-500"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="transition transform duration-300
            hover:scale-125 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="transition transform duration-300
            hover:scale-125 hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 transition hover:text-gray-200">
          {new Date().getFullYear()} EMON. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
