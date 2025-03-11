import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#e9d5a1] flex justify-between w-full p-4 md:p-5 fixed   top-0 z-50">
      <h1 className="font-semibold cursor-pointer text-2xl text-gray-900">Portfolio</h1>
      <div className="hidden md:flex md:justify-end md:w-full">
        <ul className="flex flex-row justify-end space-x-6">
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</li>
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</li>
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5" onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}>Education</li>
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</li>
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>Experience</li>
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</li>
        </ul>
      </div>
      {/* Hamburger Menu */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-900 bg-transparent"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-900"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[80vh] bg-[#e9d5a1] flex flex-col justify-center items-center z-10 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-900"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <ul className="flex flex-col justify-center items-center w-full">
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5 py-4" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</li>
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5 py-4" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</li>
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5 py-4" onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}>Education</li>
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5 py-4" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</li>
          <li className="text-lg hover-border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5 py-4" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>Experience</li>
          <li className="text-lg hover:border-2 cursor-pointer hover:border-gray-400 hover:rounded-[50px] px-5 py-4" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
