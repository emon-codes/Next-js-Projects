import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-red-500 hover:text-red-400 transition">
          EMON
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-[17px] font-medium">
          {["Home", "About Us", "Contact Us", "Blog"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="relative group text-gray-200 hover:text-white transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Button */}
        <button className="px-5 py-2 rounded-full border border-red-500 text-red-500 
        hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md">
          View More
        </button>

      </div>
    </header>
  );
};

export default Header;
