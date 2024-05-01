import { useState } from 'react'
import './App.css'
import TopBar from './components/nav/TopBar'
import Home from './components/home/Home'

function App() {
  

  return (
    <>

    <TopBar/>
    <div className="container">
    <Home/>

    </div>
    
    </>
  )
}

export default App
