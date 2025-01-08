import React from 'react'
import Atul_picture from "../utils/Atul_picture.jpg"
// import Picture from "../utils/picture.jpg";

const Home = () => {
  return (
    <div id='home' className='h-[100vh] flex justify-between items-center'>
        <div className=' w-1/2'>
            <h1 className=' font-bold text-gray-900 text-5xl mx-40'>I'm ATUL GARG</h1>
            <p className='px-9 py-3 text-gray-900 mx-40'>You can download my resume from here!</p>
            <a href='./Atul_Garg.pdf' download="Atul_Resume" className='bg-gray-900 cursor-pointer rounded border-collapse mx-64 p-2 text-white hover:scale-110 transition duration-500 '>Download Resume</a>
        </div>
        <div className='w-1/2 '>
            <img src={Atul_picture} alt='AtulGarg' className='rounded-full w-64 h-64 mx-52'></img>
        </div>

    </div>
  )
}

export default Home

