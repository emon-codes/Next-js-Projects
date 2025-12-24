"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-zinc-900 via-gray-900 to-zinc-900 text-white">
      
      {/* Glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <h2
          className="text-2xl font-extrabold tracking-widest cursor-pointer
          text-white transition-all duration-300
          hover:text-red-500 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]"
        >
          EMON
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="#"
            aria-label="Facebook"
            className="p-3 rounded-full bg-white/5 backdrop-blur
            transition-all duration-300
            hover:scale-110 hover:bg-blue-500 hover:text-white
            hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          >
            <FaFacebook />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="p-3 rounded-full bg-white/5 backdrop-blur
            transition-all duration-300
            hover:scale-110 hover:bg-pink-500 hover:text-white
            hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-white/5 backdrop-blur
            transition-all duration-300
            hover:scale-110 hover:bg-sky-500 hover:text-white
            hover:shadow-[0_0_20px_rgba(14,165,233,0.6)]"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            aria-label="GitHub"
            className="p-3 rounded-full bg-white/5 backdrop-blur
            transition-all duration-300
            hover:scale-110 hover:bg-gray-800 hover:text-white
            hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-200">EMON</span>. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
