import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React from 'react';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="pt-[100px] min-h-screen flex flex-col sm:flex-row items-center justify-center px-6 text-center"
    >
      {/* Full-Width Logo Image */}
      <div className="mb-6 sm:mb-0 sm:mr-6 w-full flex justify-center">
        <img
          className="rounded-full shadow-md w-full max-w-[500px]"
          src={logo}
          alt="Profile Logo"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary mb-2 text-sm sm:text-base">Hi, my name is</p>

          {/* Animated Name (Prevent Line Break) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary mb-2 whitespace-nowrap">
            <motion.span
              className="text-blue-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Prasanna Gaikwad
            </motion.span>
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl text-textSecondary mb-4">
            I build things for the web.
          </h2>

          <p className="text-textSecondary max-w-lg text-sm sm:text-base mb-6">
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I am focused on building accessible, human-centered products with my expertise.
          </p>

          <Link to="projects" smooth={true} duration={500} className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-secondary text-secondary px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-secondary/10 text-sm sm:text-base"
            >
              Check out my work!
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
