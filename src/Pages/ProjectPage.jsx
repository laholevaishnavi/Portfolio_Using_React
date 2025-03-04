import React from "react";
import Data from "../Data/projects.json";
import ProjectCard from "../Components/ProjectCard";

const ProjectPage = () => {
  return (
    <>
      <h1 className="py-6 text-3xl  pt-16  pb-16 md:text-4xl font-bold text-center text-black mb-4">My Work</h1>
      <div className="flex flex-wrap w-screen justify-center">
        {Data.map((projectInfo) => {
          return <ProjectCard key={projectInfo.id} {...projectInfo} />;
        })}
      </div>
    </>
  );
};

export default ProjectPage;
