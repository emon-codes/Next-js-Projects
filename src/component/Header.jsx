import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-xl mx-auto container">
        <div className="font-semibold text-2xl text-red-800">EMON</div>

        <div className="flex flex-row gap-4 font-Roboto">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>

          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <button className="btn border">View more</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
