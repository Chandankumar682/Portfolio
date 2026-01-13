import React from 'react'
import Navbar from './component/Navbar/Navbar.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Education from './component/Education/Education.jsx'
import Project from './component/Project/Project.jsx'
import Contact from './component/Contact/Contact.jsx'
import Skill from './component/Skill/Skill.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Education />
      <Contact />
    </div>
  )
}

export default App