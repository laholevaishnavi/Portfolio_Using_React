import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, githubLink, demoLink }) => {
  return (
    <div className="m-1 w-1/4 border-2 bg-white p-10 border-gray-100 rounded-xl">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to={githubLink}>
          <img className="rounded-t-lg" src={image} alt={title} />
        </Link>
        <div className="p-5">
          <Link to={githubLink}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="text-gray-100 leading-9 my-2">{description}</p>
          <div className="flex gap-2">
            <Link to={githubLink}>
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                Github
              </span>
            </Link>
            <Link to={demoLink}>
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
