import React from 'react';
import Typical from 'react-typical'; // Import Typical
import developer from "../Images/person.jpg";
import { LiaFileDownloadSolid } from "react-icons/lia"
const Main = () => {
  return (
    <div className='relative w-full h-[100vh] text-white'>
      {/* Background Image */}
      <img
        className='w-full h-full object-cover'
        src={developer}
        alt="Web Developer Background"
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-600 opacity-70'></div>

      {/* Content */}
      <div className='absolute top-[30%] left-1/2 transform -translate-x-1/2 text-center'>
        {/* Profile Heading with Typewriter Effect */}
        <h1 className='text-5xl md:text-7xl font-bold mb-4'>Kshitij Guleri</h1>
        <Typical
          steps={['Full-Stack Web Developer', 1500]}
          wrapper="p"
          className='text-xl md:text-3xl text-gray-300 mb-4'
        />

        {/* Skills Section */}
        <div className='mt-8'>
          <h2 className='text-2xl md:text-4xl font-semibold mb-2'>Skills</h2>
          <p className='text-gray-300 mb-4'>
            JavaScript | React | Node.js | Express | Sql | Tailwind CSS
          </p>
        </div>

        {/* Buttons */}
        <div className='flex justify-center space-x-4'>
        <a
            href="/KshitijCv.pdf" // Path to your PDF file
            download="Kshitij_Guleri_Resume.pdf" // Optional: specify a name for the downloaded file
            className='flex items-center border bg-blue-500 text-white py-2 px-5 hover:bg-blue-700 transition'
          >
            <LiaFileDownloadSolid className='mr-2' /> {/* Add icon with margin */}
            Download Resume
          </a>
          <a href="#Contact" className='border text-white border-gray-300 py-2 px-5 hover:border-blue-500'>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
