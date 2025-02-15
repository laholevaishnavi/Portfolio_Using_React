import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa'; 

const HeroSection = () => {
  // State to track if dark theme is active
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle theme
  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`flex flex-col items-center justify-center h-screen w-full ${isDarkTheme ? 'bg-black text-white' : 'bg-[#e9d5a1] text-black'}`}>
      <h1 className="text-5xl text-[#353239] p-5 font-bold">Vaishnavi Lahole</h1>
      <TypeAnimation
        sequence={[
          'Frontend Developer',
          2000, // Wait 2 seconds after typing
          'Cybersecurity Enthusiast',
          2000,
        ]}
        speed={50} // Typing speed
        repeat={Infinity} // Repeat the animation
        className="text-4xl text-gray-700 " // Add Tailwind classes for styling
      />
       <label className="flex m-5 items-center">
        <Switch
          onChange={handleToggle}
          checked={isDarkTheme}
          offColor="#e9d5a1"
          onColor="#4a5568" // Dark color for the switch
          handleDiameter={30} // Diameter of the switch handle
          uncheckedIcon={
            <div className="flex items-center justify-center w-full h-full">
              <FaSun className="text-yellow-500 " />
            </div>
          }
          checkedIcon={
            <div className="flex items-center justify-center w-full h-full">
              <FaMoon className="text-white" />
            </div>
          }
          height={30} // Height of the switch
          width={60} // Width of the switch
        />
      </label>
      {/* <span className="ml-4 text-lg ">{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</span> */}
    </div>
  );
};

export default HeroSection;
