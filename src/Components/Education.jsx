import React from "react";

const Education = () => {
  return (
    <div id="education" className="md:h-auto lg:h-[90vh] flex flex-col ">

      <h1 className="h-1/6 pt-16 text-center text-2xl">EDUCATION</h1>
      <div className=" lg:flex h-5/6">
        <div className="md:w-full flex  lg:w-1/2 lg:justify-end px-10 py-10 border-r-2 border-gray-200">
          <div className="md:w-full lg:w-4/6 h-3/6 border-2  bg-gray-200 rounded-sm leading-9 pt-5 pl-5">
            <h3 className="text-lg font-medium">
              Bachelor of Engineering (2022-26)
            </h3>
            <p>Computer Science & Engineering.
            <br />- 8.5 CGPA(till 5th sem)</p>
            <p>Shri Sant Gajanan Maharaj College Of Engineering, Shegaon .</p>
          </div>
        </div>
        <div className="lg:w-1/2  md:w-full flex lg:items-end px-10 py-10 border-l-2 border-gray-200">
          <div className="lg:w-4/6  md:w-full h-3/6 rounded-sm leading-9 pl-5 pt-5 border-2 bg-gray-200">
            <h3 className="text-lg font-medium">HSC (2021-22) - 80.83%</h3>
            <p>Guru Ganesh Mishri Jain Arts and Science Jr. College.</p>
            <br />
            <h3 className="text-lg font-medium"> SSC (2019-20) - 95.20%</h3>
            <p className=" ">Shri Jageshwar English Highschool, Wadegaon.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
