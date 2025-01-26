import { useState } from 'react';
import { Link, scroller } from 'react-scroll';
import { motion } from 'framer-motion';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Home'); // State for selected tab

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
    { name: 'Resume', to: '/resume.pdf', download: 'Resume' },
  ];

  // Handle tab click to update state and scroll to the section
  const handleTabClick = (name) => {
    setSelectedTab(name);
    setIsOpen(false); // Close mobile menu on selection
  };

  return (
    <nav className="fixed w-full  backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-bold text-xl cursor-pointer"
          >


            <Link to="home" smooth={true} duration={500}>
              Prasanna Gaikwad
            </Link>

          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.download ? (
                  <a href={item.to} download={item.download} className="text-textSecondary hover:text-secondary">
                    {item.name}
                  </a>
                ) : (
                  <Link
                    onClick={() => handleTabClick(item.name)}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true} // Watches the scroll position
                    activeClass="underline text-secondary" // Add underline dynamically
                    onSetActive={() => setSelectedTab(item.name)} // Update state when active
                    className={`text-textSecondary hover:text-secondary hover:scale-110 cursor-pointer ${selectedTab === item.name ? 'underline text-secondary' : ''
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textSecondary hover:text-secondary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 flex items-center justify-center flex-col">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.download ? (
                    <a href={item.to} download={item.download} className="text-textSecondary hover:text-secondary">
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      onClick={() => handleTabClick(item.name)}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      spy={true} // Watches the scroll position
                      activeClass="underline text-secondary" // Add underline dynamically
                      onSetActive={() => setSelectedTab(item.name)} // Update state when active
                      className={`text-textSecondary hover:text-secondary cursor-pointer hover:scale-105 ${selectedTab === item.name ? 'underline text-secondary' : ''
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
