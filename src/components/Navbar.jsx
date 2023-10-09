import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; // Import icons from react-icons/ai
import logo from '../assets/APPTEX.png'; // Import logo image

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='z-[1000] bg-white shadow-sm w-full fixed flex items-center md:px-0 px-4'>
      <div className='flex w-[80%] md:py-0 py-4 mx-auto justify-between items-center'>
        <h1><img src={logo} alt="" /></h1> {/* Logo */}
        <ul className='hidden md:flex text-white'>
          <li className='p-4 cursor-pointer text-black hover:border-b-2 border-blue-400 transition-all'>
            <Link to='home' smooth={true} duration={500}>Home</Link> {/* Scroll link */}
          </li>
          <li className='p-4 cursor-pointer text-black hover:border-b-2 border-blue-400 transition-all'>
            <Link to='services' smooth={true} duration={500}>Services</Link> {/* Scroll link */}
          </li>
          <li className='p-4 cursor-pointer text-black hover:border-b-2 border-blue-400 transition-all'>
            <Link to='portfolio' smooth={true} duration={500}>Portfolio</Link> {/* Scroll link */}
          </li>
          <li className='p-4 cursor-pointer text-black hover:border-b-2 border-blue-400 transition-all'>
            <Link to='testimonial' smooth={true} duration={500}>Testimonial</Link> {/* Scroll link */}
          </li>
          <li className='p-4 cursor-pointer text-black hover:border-b-2 border-blue-400 transition-all'>
            <Link to='contact' smooth={true} duration={500}>Contact</Link> {/* Scroll link */}
          </li>
        </ul>
      </div>
      <div onClick={handleNav} className='block md:hidden '>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />} {/* Toggle menu icon */}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r text-black bg-[#fff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='m-4'><img src={logo} alt="" /></h1> {/* Logo */}
        <li className='p-4 cursor-pointer'>
          <Link to='home' smooth={true} duration={500}>Home</Link> {/* Scroll link */}
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to='services' smooth={true} duration={500}>Services</Link> {/* Scroll link */}
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to='portfolio' smooth={true} duration={500}>Portfolio</Link> {/* Scroll link */}
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to='testimonial' smooth={true} duration={500}>Testimonial</Link> {/* Scroll link */}
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to='contact' smooth={true} duration={500}>Contact</Link> {/* Scroll link */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
