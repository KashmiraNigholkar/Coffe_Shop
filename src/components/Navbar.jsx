import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { SiCoffeescript } from 'react-icons/si';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Button from '../layouts/Button';
import Login from './Login';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className='w-full fixed top-0 z-50'>
      <div className='flex justify-between items-center p-5 lg:px-32 px-5 bg-gradient-to-r from-gray-800 to-yellow-500 shadow-md'>
        {/* Logo */}
        <div className='flex items-center gap-2 cursor-pointer'>
          <SiCoffeescript size={25} />
          <h1 className='text-xl font-semibold text-white'>CafePulse</h1>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center text-lg font-medium gap-8'>
          {['home', 'menu', 'aboutus', 'products', 'review'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="group relative inline-block hover:text-yellow-500 cursor-pointer text-white"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </Link>
          ))}
        </nav>

        {/* Button */}
        <div className='hidden md:flex'>
          <Button title="Login" />
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menu && (
        <div className='md:hidden flex flex-col absolute bg-white text-black left-0 top-16 font-semibold text-xl text-center pt-8 pb-4 gap-6 w-full shadow-md transition-transform duration-300'>
          {['home', 'menu', 'aboutus', 'products', 'review'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-yellow-500"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <Button title="Login" />
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
