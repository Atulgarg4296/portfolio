import React from 'react'
// import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 p-4 text-white fixed top-0 left-0 w-full z-50">
        <div className='flex-1'>
        <h1 className='py-6 px-5 font-bold text-3xl'>Portfolio</h1>
        </div>
       <nav className='flex space-x-9'>
        <a className='transform hover:scale-110 transition duration-300 cursor-pointer font-semibold'>HOME</a>
        <a className='transform hover:scale-110 transition duration-300 cursor-pointer font-semibold'>SKILLS</a>
        <a className='transform hover:scale-110 transition duration-300 cursor-pointer font-semibold'>PROJECTS</a>
        <a  className='transform hover:scale-110 transition duration-300 cursor-pointer font-semibold'>CONTACT</a>
       </nav>



    </div>
  )
}

export default Navbar