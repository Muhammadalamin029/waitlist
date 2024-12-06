import React from "react";
import logo from "/waitlist.png";

function Navbar() {
  return (
    <nav className="h-16 nav z-20 w-full py-3 sticky top-0 left-0">
      <div className="mx-auto max-w-[800px] h-full flex justify-between items-center">
        <div className="font-bold text-2xl basis-1/5">
          <img src={logo} className="h-full w-full" />
        </div>
        <ol className="md:flex space-x-12">
          <li>Home</li>
          <li>About</li>
          <li className="">Our Services</li>
          <li>Blog</li>
        </ol>
        <button className="bg-[#009933] px-7 py-2 rounded-lg text-white">
          Join Waitlist
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
