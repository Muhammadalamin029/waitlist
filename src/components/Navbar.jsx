import React, { useState } from "react";
import logo from "/waitlist.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-16 nav z-20 w-full py-3 px-3 sticky top-0 left-0 bg-white shadow-md">
      <div className="mx-auto max-w-[800px] h-full flex justify-between items-center">
        {/* Logo Section */}
        <div className="font-bold text-2xl basis-1/5">
          <img src={logo} alt="Logo" className="h-full w-full" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <ol
          className={`absolute md:static top-16 left-0 md:flex items-center space-y-4 md:space-y-0 md:space-x-12 w-full md:w-auto md:bg-transparent bg-white shadow-lg md:shadow-none py-4 md:py-0 px-6 md:px-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">About</li>
          <li className="hover:text-green-600 cursor-pointer">Our Services</li>
          <li className="hover:text-green-600 cursor-pointer">Blog</li>
          <button className="bg-[#009933] px-7 py-2 rounded-lg text-white hover:bg-green-700 transition">
            Join Waitlist
          </button>
        </ol>

        {/* Button */}
      </div>
    </nav>
  );
}

export default Navbar;
