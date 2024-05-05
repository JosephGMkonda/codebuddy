import { useState } from 'react'
import './App.css'
import TopBar from './components/nav/TopBar'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import WorkExperience  from './components/workexperience/WorkExperience'
import ContactMe from './components/contactme/ContactMe'
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';


function App() {
  

  return (
    
    <Router>
      <div>
        <TopBar />
        <div className="container-bar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  
  
    
  )
}

export default App
