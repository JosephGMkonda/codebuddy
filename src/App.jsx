import { useState } from 'react'
import './App.css'
import TopBar from './components/nav/TopBar'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'

function App() {
  

  return (
    <>

    <TopBar/>
    <div className="container-bar">
    <Home/>
    <Skills/>
  

    </div>
  
    
    </>
  )
}

export default App
