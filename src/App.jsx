import React from 'react';
import About from './Components/About';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Education/>
      <hr />
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App