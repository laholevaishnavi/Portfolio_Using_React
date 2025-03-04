import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#e9d5a1] flex justify-between w-full p-10  ">
      <h1 className="font-semibold  cursor-pointer text-2xl text-gray-900">Portfolio</h1>
      <ul className="flex flex-row justify-evenly">
        <li className="mx-6 text-lg hover:border-2 cursor-pointer hover: border-gray-400 hover:rounded-[50px] px-5">About</li>
        <li className="mx-6 text-lg hover:border-2 cursor-pointer hover: border-gray-400 hover:rounded-[50px] px-5">Skills</li>
        <li className="mx-6 text-lg hover:border-2 cursor-pointer hover: border-gray-400 hover:rounded-[50px] px-5">Education</li>
        <li className="mx-6 text-lg hover:border-2 cursor-pointer hover: border-gray-400 hover:rounded-[50px] px-5">Projects</li>
        <li className="mx-6 text-lg hover:border-2 cursor-pointer hover: border-gray-400 hover:rounded-[50px] px-5">Experience</li>
        <li className="mx-6 text-lg hover:border-2 cursor-pointer hover: border-gray-400 hover:rounded-[50px] px-5">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
