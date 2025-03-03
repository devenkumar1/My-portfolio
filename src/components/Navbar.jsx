'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import { FaBars, FaTimes } from 'react-icons/fa'; // For mobile menu icons
import { ModeToggle } from './ui/DarkModeToggler';
import Image from 'next/image';
import devenlogo  from '../assets/deven-logo.png'
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="
    pb-2 pt-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">      
    <div className="container mx-auto flex justify-between items-center">

        <motion.a 
          href="#" 
          className="text-white font-bold text-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Deven */}
          <Image src={devenlogo} width={100} height={100} alt={'Deven'} />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 ">
          {navbarItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }} 
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (using Framer Motion for animation) */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-gray-800 mt-2 py-2"
    >
      {navbarItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          className="block px-4 py-2 text-gray-300 hover:text-white transition duration-300"
          onClick={toggleMobileMenu} // Close menu after click
          whileTap={{ scale: 0.95 }} // Tap effect
        >
          {item.label}
        </motion.a>
      ))}

    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}

export default Navbar;