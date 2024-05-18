import { useState } from 'react'
import './App.css'
import TopBar from './components/nav/TopBar'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import WorkExperience  from './components/workexperience/WorkExperience'
import ContactMe from './components/contactme/ContactMe'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'


function App() {
  

  return (
    
  
      <>
        <TopBar />
        <div className="container-bar">
          
            <Home />
            <Skills />
            <WorkExperience />
            <Projects/>
            <ContactMe />
            
        
        </div>

        <Footer/>
      </>
    
  
  
    
  )
}

export default App
