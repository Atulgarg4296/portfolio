import React from 'react';
import Atul_picture from "../utils/Atul_picture.jpg";

const Home = () => {
  return (
    <div id="home" className="h-screen flex flex-col md:flex-row justify-between items-center p-6 md:p-12">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
  <h1 className="font-bold text-gray-900 text-4xl md:text-5xl mb-4">
    I'm ATUL GARG
  </h1>
  <p className="text-gray-900 mb-6">
    You can download my resume from here!
  </p>
  <a
    href="./Atul_Garg.pdf"
    download="Atul_Resume"
    className="bg-gray-900 text-white py-2 px-6 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
  >
    Download Resume
  </a>
</div>


      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={Atul_picture}
          alt="Atul Garg"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
