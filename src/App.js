import React from 'react'
import Navbar from './components/Navbar'
import Topcontainer from './components/DockContainer/Topcontainer'
import Skills from './components/Skills/Skills'
import Projectcontainer from './components/projectcontainer/Projectcontainer'
import Contactcontainer from './components/Contact/Contactcontainer'
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Topcontainer/>
      <Skills/>
      <Projectcontainer/>
      <Contactcontainer/>
    </div>
  )
}

export default App