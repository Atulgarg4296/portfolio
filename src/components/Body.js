import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Body = () => {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <Home/>
        <Skills/>
        <Projects/>
        <Contact/>
       
    </div>
  )
}

export default Body