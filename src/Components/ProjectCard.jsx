import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, githubLink, demoLink }) => {
  return (
    <div className="m-1 w-full md:w-1/3 lg:w-1/4  bg-[#efe1bd] p-10  rounded-xl">

      <div className="max-w-sm bg-white border shadow-lg shadow-black rounded-lg   dark:bg-gray-100 ">
        <Link to={githubLink}>
          <img className=" rounded-lg  shadow-lg" src={image} alt={title} />
        </Link>
        <div className="p-5">
          <Link to={githubLink}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray">
              {title}
            </h5>
          </Link>
          <p className="text-gray leading-9 my-2">{description}</p>
          <div className="flex gap-2">
            <Link to={githubLink}>
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#696969] dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                Github
              </span>
            </Link>
            <Link to={demoLink}>
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#696969] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Demo
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
