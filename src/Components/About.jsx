import React from "react";

const About = () => {
  return (
    <div id="about" className="md:h-full lg:h-[85vh] ">

      <h1 className="h-1/4  pt-11 pb-10 text-center text-2xl">ABOUT ME</h1>
      <div className="md:h-screen lg:h-3/4 flex md:px-0 lg:px-0 sm:px-0  md:w-screen flex-col md:flex-row justify-between px-10 items-center">
        <div className="h-full items-center justify-center flex w-full md:w-1/3">
          <img
            src="https://img.freepik.com/premium-photo/3d-flat-icon-student-with-laptop-coding-book-modern-education-concept-with-whimsical-backgro_980716-366269.jpg?ga=GA1.1.1684150274.1739416745&semt=ais_hybrid"
            alt="About_ME_Image"
            className="h-60 rounded-full bg-[#e9d5a1] p-1"
          />
        </div>
        
        <div className="w-full md:w-screen py-14 sm:px-5 md:px-10 lg:px-20 h-full">
        <div className="h-1/6 bg-gray-200 border-2 text-right flex items-center md:p-1 pl-6">
            <span className="text-3xl text-red-500">&#x25CF;</span>
            <span className="text-3xl text-yellow-500">&#x25CF;</span>
            <span className="text-3xl text-green-500">&#x25CF;</span>
          </div>
          <div className="h-5/6 border-2 md:px-1 px-6 py-4 w-full">
            <p className="text-2xl">Hi&nbsp; :&#41;</p>
            <br />
            <p className="leading-10">
              👋I'm Vaishnavi Lahole! A passionate Computer Science and Engineering student specializing in front-end web development, particularly with React.js. My solid foundation in HTML, CSS, and JavaScript, combined with my interest in cybersecurity, drives me to create visually appealing and secure web applications. I'm eager to bridge the gap between user experience and a safer internet for everyone. Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
