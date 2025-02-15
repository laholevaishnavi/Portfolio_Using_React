import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className=" ">
      <h1 className="text-black text-center text-2xl pt-16 pb-16">Projects</h1>
      <div className="flex flex-wrap w-screen justify-center  ">
       
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        
      </div>
    </div>
  );
};

export default Projects;
