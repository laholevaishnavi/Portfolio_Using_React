import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Project from "./Pages/ProjectPage";
import ProjectPage from "./Pages/ProjectPage";


const App = () => {
  const resumeData = {
    basic_info: {
      section_name: { experience: "My Experience" },
    },
    experience: [
      {
        title: "IBM SKILLSBUILD CYBER SECURITY INTERNSHIP",
        company: "Edunet Foundation",
        years: " 15th Jan 2025 - 26th  Feb 2025",
        mainTech: [],
        technologies: ["Steganography", "Parrot OS", "Nmap", "Burpsuite"],
      },
      {
        title: "Cybersecurity Team Member",
        company: "GDSC",
        years: "Aug 2023 -Aug 2024",
        mainTech: [],
        technologies: ["Team_Work", "Event Coordination", "Networking"],
      },
      {
        title: "Member of Advertising team",
        company: "CSESA_SSGMCE",
        years: "Sep 2023 - Aug 2024 ",
        mainTech: [],
        technologies: ["Event_Planning", "Collaboration", "Networking"],
      },
    ],
  };

const PageLayout = ()=>{
  return (
    <>
    <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Education />
      <Contact />
      <Footer />
    
    </>
  )
}

const router = createBrowserRouter([
  {
    path : "/Projects",
    element : <ProjectPage/>
  },
  {
    path : "/",
    element : <PageLayout/>
  },
  {
    path : "/Project/:id",
    element : <Project/>
  },

])

  return (
    <div>

      <RouterProvider router={router} />
    </div>
      
  );
};

export default App;
