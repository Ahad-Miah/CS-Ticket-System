import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="relative border-b-2 border-gray-300 py-3 px-5 md:px-10 flex justify-between items-center bg-white z-50">
      <div>
        <h2 className="text-sm font-bold md:text-md lg:text-xl lg:font-extrabold whitespace-nowrap">
          CS — Ticket System
        </h2>
      </div>
      <div className="flex items-center gap-5">
        <ul className="hidden lg:flex items-center gap-6 font-semibold text-gray-700">
          <li className="cursor-pointer hover:text-indigo-600">Home</li>
          <li className="cursor-pointer hover:text-indigo-600">FAQ</li>
          <li className="cursor-pointer hover:text-indigo-600">Changelog</li>
          <li className="cursor-pointer hover:text-indigo-600">Blog</li>
          <li className="cursor-pointer hover:text-indigo-600">Download</li>
          <li className="cursor-pointer hover:text-indigo-600">Contact</li>
        </ul>
        <button className="btn text-xs md:text-sm text-white px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 font-bold">
          + New Ticket
        </button>
        <div 
          className="lg:hidden cursor-pointer p-1" 
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <RxCross2 className="text-2xl text-indigo-600" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </div>
      </div>
      <div
        className={`absolute top-full right-5 mt-2 w-48 bg-white border border-gray-200 shadow-xl rounded-xl p-4 transition-all duration-200 ${
          showMenu ? "block" : "hidden"
        } lg:hidden z-50`}
      >
        <ul className="flex flex-col gap-4 font-medium text-gray-800">
          <li className="hover:text-indigo-500 cursor-pointer border-b border-gray-50 pb-1">Home</li>
          <li className="hover:text-indigo-500 cursor-pointer border-b border-gray-50 pb-1">FAQ</li>
          <li className="hover:text-indigo-500 cursor-pointer border-b border-gray-50 pb-1">Changelog</li>
          <li className="hover:text-indigo-500 cursor-pointer border-b border-gray-50 pb-1">Blog</li>
          <li className="hover:text-indigo-500 cursor-pointer border-b border-gray-50 pb-1">Download</li>
          <li className="hover:text-indigo-500 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;