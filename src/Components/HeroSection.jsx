import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import mypic from '../assets/mypic.jpg';

const HeroSection = () => {
  // State to track if dark theme is active
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle theme
  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`flex flex-col items-center justify-center h-screen w-full ${isDarkTheme ? 'bg-black text-white' : 'bg-[#e9d5a1] text-black'}`}>
      
      {/* Profile Picture */}
      <img src={mypic} alt="Profile_Picture" className='md:h-64 h-40 rounded-full' />

      {/* Name */}
      <h1 className={`md:text-5xl sm:text-4xl   text-6xl  p-5 font-bold text-center ${isDarkTheme ? 'bg-black text-white' : 'bg-[#e9d5a1] text-[#353239]'}`}  >Vaishnavi Lahole</h1>

      {/* Typing Animation */}
      <TypeAnimation
        sequence={[
          'Frontend Developer',
          2000, // Wait 2 seconds after typing
          'Cybersecurity Enthusiast',
          2000,
        ]}
        speed={50} // Typing speed
        repeat={Infinity} // Repeat the animation
        className="text-5xl md:text-4xl sm:text-3xl  text-center" // Add Tailwind classes for styling
      />

      {/* Toggle Button For Theme */}
      <label className="flex m-5 items-center">
        <Switch
          onChange={handleToggle}
          checked={isDarkTheme}
          offColor="#e9d5a1"
          onColor="#4a5568" // Dark color for the switch
          handleDiameter={30} // Diameter of the switch handle
          uncheckedIcon={
            <div className="flex items-center justify-center w-full h-full">
              <FaSun className="text-orange-600 " />
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
    </div>
  );
};

export default HeroSection;
