import React from 'react'
import Netflix_logo from "../utils/Netflix_logo.jpg"
import White_Netflix from "../utils/white_netflix.png"

const ProjectsCard = () => {
  return (
    <div className=' bg-gray-900 h-74 w-52 rounded text-wrap transition-transform duration-300 hover:scale-110'>
        <img src={White_Netflix} alt='Netflix_logo' className='h-28 w-40 mx-6 my-6 rounded-2xl'></img>
        <h1 className='text-center text-white font-semibold my-2 text-xl'>Netflix-Clone</h1>
        <p className='text-center text-white '>Description</p>
        <button className='bg-white rounded p-1 text-center mx-14 my-6 text-gray-900 '>Open Now</button>



    </div>
  )
}

export default ProjectsCard