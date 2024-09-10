import React from 'react';
import logo from "../Images/single copy.png";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full p-4 z-[100] absolute'>
      {/* Logo */}
      <div className='text-red-600 cursor-pointer text-3xl md:text-5xl'>
        <img src={logo} alt="" className='h-[60px] md:h-[30px]' />
      </div>
      
      {/* Nav Links */}
      <ul className='hidden md:flex text-white space-x-8 font-bold'>
        <li className='cursor-pointer'>Home</li>
        <a  href="#About"  className='cursor-pointer'>About</a>
        <a href="#Services"  className='cursor-pointer'>Services</a>
        <a href="#Contact" className='cursor-pointer'>Contact</a>
      </ul>
      
      {/* Mobile Menu Icon */}
      <div className='md:hidden'>
        <button className='text-white'>Menu</button> {/* You can replace this with an actual hamburger menu icon */}
      </div>
    </div>
  );
}

export default Navbar;
