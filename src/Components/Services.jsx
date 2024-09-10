import React from 'react';
import { AiOutlineCode } from 'react-icons/ai'; // Web Development icon
import { MdOutlinePhoneIphone } from 'react-icons/md'; // Mobile App Development icon
import { BiBrush } from 'react-icons/bi'; // UI/UX Design icon
import { RiServerLine } from 'react-icons/ri'; // Backend Development icon
import { FaShoppingCart, FaTools } from 'react-icons/fa'; // E-Commerce Solutions and Maintenance & Support icons
import { motion } from 'framer-motion';

const AboutMe = () => {
  const services = [
    { 
      name: 'Web Development', 
      icon: <AiOutlineCode className='text-5xl' />, 
      color: 'text-blue-500', 
      description: 'I specialize in creating modern, responsive websites using technologies like React and Node.js. My focus is on building fast, scalable, and secure applications that meet client needs.' 
    },
    { 
      name: 'Mobile App Development', 
      icon: <MdOutlinePhoneIphone className='text-5xl' />, 
      color: 'text-green-500', 
      description: 'I develop cross-platform mobile applications that run seamlessly on Android. My goal is to deliver apps that provide a smooth user experience and robust performance.' 
    },
    { 
      name: 'UI/UX Design', 
      icon: <BiBrush className='text-5xl' />, 
      color: 'text-pink-500', 
      description: 'Designing beautiful and intuitive interfaces is my passion. I strive to create engaging user experiences that are not only visually appealing but also functional and user-friendly.' 
    },
    { 
      name: 'Backend Development', 
      icon: <RiServerLine className='text-5xl' />, 
      color: 'text-yellow-500', 
      description: 'With expertise in backend development, I ensure that web and mobile applications are scalable, secure, and perform efficiently. I focus on robust server-side solutions.' 
    },
    { 
      name: 'E-Commerce Solutions', 
      icon: <FaShoppingCart className='text-5xl' />, 
      color: 'text-red-500', 
      description: 'I build powerful e-commerce platforms designed for seamless shopping experiences. From custom features to secure transactions, I offer comprehensive solutions.' 
    },
    { 
      name: 'Maintenance & Support', 
      icon: <FaTools className='text-5xl' />, 
      color: 'text-purple-500', 
      description: 'I provide ongoing maintenance and support to keep your applications running smoothly. Whether it’s updates, bug fixes, or performance improvements, I’m here to help.' 
    },
  ];

  return (
    <div id="Services" className='w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16'>
      {/* Container */}
      <div className='max-w-7xl mx-auto px-6'>
        
        {/* Title */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 tracking-wide'>About Me</h1>
          <p className='text-lg md:text-xl text-gray-400 tracking-wider'>I’m a passionate developer who loves turning ideas into reality through code.</p>
        </div>
        
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className='relative bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-transparent to-blue-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              <div className='flex justify-center mb-6'>
                <div className={`${service.color} text-6xl z-10`}>
                  {service.icon}
                </div>
              </div>
              <h2 className='text-2xl font-semibold text-center mb-4 z-10 relative'>{service.name}</h2>
              <p className='text-gray-300 text-center leading-relaxed z-10 relative'>
                {service.description}
              </p>
              <div className="absolute inset-0 rounded-lg border-2 border-transparent transition duration-300 ease-in-out hover:border-blue-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
