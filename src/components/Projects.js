import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div id='projects' className='flex justify-between items-center px-20 flex-wrap h-screen'>
        <ProjectsCard/>
        <ProjectsCard/>
        <ProjectsCard/>
    
    </div>
  )
}

export default Projects