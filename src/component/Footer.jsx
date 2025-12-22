import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center gap-4">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-widest">
          EMON
        </h2>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
        {new Date().getFullYear()} EMON. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
