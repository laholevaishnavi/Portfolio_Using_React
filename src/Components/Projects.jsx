import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import Data from "../Data/projects.json";
const Projects = () => {

  const [projectData , setProjectData] = useState([]);

  useEffect(()=>{
    setProjectData(Data.slice(0,3));
  },[]);

  return (
    <div id="projects" className="  bg-[#efe1bd] pb-16">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-4 pt-16 pb-16">Projects</h1>
      <div className="flex flex-wrap w-screen justify-center">
      {
        projectData.map((project) => {
          return (

          <ProjectCard key={project.id} {...project} />
          )
        })}

        
      </div>
      <div className="text-center">
        <Link to="/Projects"><button className="inline-flex items-center px-3 py-2 mt-4 text-lg font-medium text-center text-white bg-[#696969] rounded-xl hover:bg-blue-800 ">More Projects »</button> </Link>
      </div>
    </div>
  );
}

export default Projects;
