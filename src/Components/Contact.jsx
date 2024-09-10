import React from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <div id="Contact" className='w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16'>
      {/* Container */}
      <div className='max-w-5xl mx-auto px-6'>
        
        {/* Title */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 tracking-wide'>Get in Touch</h1>
          <p className='text-lg md:text-xl text-gray-400 tracking-wider'>Feel free to reach out through the following channels.</p>
        </div>

        {/* Contact Information */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          
          {/* Location */}
          <motion.div
            className='relative bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className='text-2xl font-semibold text-center mb-4'> Location</h2>
            <p className='text-gray-300 text-center'>Chandigarh,india</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className='relative bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className='text-2xl font-semibold text-center mb-4'>Phone Number</h2>
            <p className='text-gray-300 text-center'>7807382128</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className='relative bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className='text-2xl font-semibold text-center mb-4'>Email Address</h2>
            <p className='text-gray-300 text-center'>ckshitij258@gmail.com</p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className='relative bg-gray-800 p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className='text-2xl font-semibold text-center mb-4'>Follow me</h2>
            <div className='flex justify-center space-x-6'>
              <a
                href="https://www.linkedin.com/in/kshitij-guleri-14233626b/"
                className='text-blue-600 text-3xl hover:text-blue-800 transition duration-300'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
           
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
