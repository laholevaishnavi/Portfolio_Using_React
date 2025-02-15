// src/components/Skills.jsx

import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline"; // Importing outline icons

const skills = [
  { name: "HTML", icon: <CodeBracketIcon className="h-6 w-6 text-orange-500" /> },
  { name: "CSS", icon: <CodeBracketIcon className="h-6 w-6 text-blue-500" /> },
  { name: "JavaScript", icon: <CodeBracketIcon className="h-6 w-6 text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <CodeBracketIcon className="h-6 w-6 text-teal-500" /> },
  { name: "React JS", icon: <CodeBracketIcon className="h-6 w-6 text-cyan-500" /> },
  { name: "Mongo DB", icon: <CodeBracketIcon className="h-6 w-6 text-red-500" /> },
  { name: "Node JS", icon: <CodeBracketIcon className="h-6 w-6 text-pink-500" /> },
  { name: "Git", icon: <CodeBracketIcon className="h-6 w-6 text-green-500" /> },
  { name: "Python(Novice)", icon: <CodeBracketIcon className="h-6 w-6 text-blue-300" /> },
  { name: "Cybersecurity Foundational knowledge", icon: <CodeBracketIcon className="h-6 w-6 text-cyan-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills & Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some of the technologies I work with:
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 md:w-1/4 sm:w-full">
              <div className="flex border border-gray-800 p-6 rounded-lg flex-col">
                {skill.icon}
                <h2 className="text-lg font-medium title-font mt-4 text-white">
                  {skill.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
