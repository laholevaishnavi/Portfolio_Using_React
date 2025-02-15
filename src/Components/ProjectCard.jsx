import React from "react";
import portfolio from "../Thumbnails/portfolio.png";

const ProjectCard = () => {
  return (
    <div className="m-2  w-1/6 border-2 border-gray-400 rounded-xl"  >
      <div>
          <img src={portfolio} alt="project-1-thumbnail" />
      </div>
      <div className="nd ">
        <h2 className="text-center text-2xl py-2">My Portfolio</h2>
        <div className="flex justify-between ">
          <a href="https://github.com/laholevaishnavi/My-Portfolio">
            <button className="p-2 border-2 rounded-3xl m-1 ">Github</button>
          </a>
          <a href="https://laholevaishnavi.github.io/My-Portfolio/">
            <button className="p-2 border-2 rounded-3xl m-1">Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
