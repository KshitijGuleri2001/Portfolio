import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt,  } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMysql,SiAdobephotoshop } from 'react-icons/si';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  ];
  const timeline = [
    { year: '2023', title: 'React JS & Tailwind', description: 'Started working with React JS and Tailwind CSS for front-end development.' },
    { year: '2024', title: 'Node.js', description: 'Dived into backend development using Node.js to create robust server-side applications.' },
    { year: '2024', title: 'SQL', description: 'Integrated SQL databases to manage and query data efficiently in full-stack applications.' },
  ];

  return (
    <div   id="About" className='w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16'>
      {/* Container */}
      <div className='max-w-7xl mx-auto px-6'>
        
        {/* Profile Section */}
        <div   className='mb-16'>
          <h2 className='text-4xl font-bold text-center mb-12'>Profile</h2>
          <p className='text-lg text-center text-gray-300 leading-relaxed'>
            I'm a full-stack developer passionate about creating dynamic, user-friendly web applications.
            I have experience in both front-end and back-end technologies, with a strong focus on React, Node.js, and SQL.
          </p>
        </div>

        {/* Skills Section */}
        <div className='mb-12'>
<h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>Skills & Technologies</h2>
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
  {skills.map(skill => (
    <motion.div 
      key={skill.name} 
      className='bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className='text-4xl mb-4'>{skill.icon}</div>
      <p className='text-xl font-semibold'>{skill.name}</p>
    </motion.div>
  ))}
</div>
</div>

        {/* Work Experience Section */}
        <div className='mb-16'>
  <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>Work Experience</h2>
  <div className='space-y-12'>
    <div className='relative bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300'>
      <h3 className='text-2xl font-semibold'>Junior Web Developer</h3>
      <p className='text-gray-400'>Visiontrek Communication | 2024 - Present</p>
      <p className='text-lg text-gray-300 mt-4 leading-relaxed'>
        Leading the development team to build robust applications with modern technologies like React and Node.js.
        Collaborating closely with designers and project managers to deliver optimized, performant solutions.
      </p>
      <div className='absolute top-4 right-4 text-blue-500'>
        <i className='fas fa-laptop-code text-3xl' aria-label='Coding Icon'></i>
      </div>
    </div>
    <div className='relative bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300'>
      <h3 className='text-2xl font-semibold'>Frontend Developer</h3>
      <p className='text-gray-400'>Netmax Technologies | 2023</p>
      <p className='text-lg text-gray-300 mt-4 leading-relaxed'>
        Developed visually engaging, user-friendly interfaces using React and CSS frameworks. Delivered responsive
        and pixel-perfect designs for clients across various industries.
      </p>
      <div className='absolute top-4 right-4 text-blue-500'>
        <i className='fas fa-code text-3xl' aria-label='Code Icon'></i>
      </div>
    </div>
  </div>
</div>

{/* Education Section */}
<div className='mb-16'>
  <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>Education</h2>
  <div className='space-y-12'>
    <div className='relative bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300'>
      <h3 className='text-2xl font-semibold'>Bachelor of Science in Computer Science</h3>
      <p className='text-gray-400'>Govt Degree College Nagrota Surian (HPTU) Hamirpur | 2020 - 2022</p>
      <p className='text-lg text-gray-300 mt-4 leading-relaxed'>
        Graduated with honors, focusing on software engineering, algorithms, and web development.
        Completed multiple full-stack projects and participated in coding challenges.
      </p>
      <div className='absolute top-4 right-4 text-blue-500'>
        <i className='fas fa-graduation-cap text-3xl' aria-label='Graduation Cap Icon'></i>
      </div>
    </div>
  </div>
</div>


        {/* Timeline Section */}
        <div className='mt-16'>
          <h2 className='text-4xl font-semibold text-center mb-12'>My Journey</h2>
          <div className='relative'>
            <div className='border-l-4 border-gray-700 absolute h-full top-0 left-1/2 transform -translate-x-1/2'></div>
            <div className='space-y-16'>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center w-full`}
                >
                  <div className={`w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg relative ${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                    <div className={`absolute w-6 h-6 bg-blue-500 rounded-full top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'right-[-15px]' : 'left-[-15px]'}`}></div>
                    <h3 className='text-2xl font-bold mb-2'>{item.year}</h3>
                    <h4 className='text-xl mb-2'>{item.title}</h4>
                    <p className='text-gray-300'>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
