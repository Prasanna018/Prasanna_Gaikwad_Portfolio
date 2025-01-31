import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React from 'react';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="pt-[120px] min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-32 text-center lg:text-left gap-y-12 lg:gap-x-24 overflow-hidden"
    >
      {/* Image with left-to-right animation */}
      <motion.div
        initial={{ opacity: 0, x: -window.innerWidth }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
      >
        <img
          className="rounded-full shadow-md w-full max-w-[450px] lg:max-w-[550px]"
          src={logo}
          alt="Profile Logo"
        />
      </motion.div>

      {/* Text Content with right-to-left animation */}
      <motion.div
        initial={{ opacity: 0, x: window.innerWidth }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex flex-col md:text-center  items-center lg:items-center"
      >
        <p className="text-secondary mb-4 text-sm sm:text-base">Hi, my name is</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary mb-4 whitespace-nowrap">
          <motion.span
            className="text-blue-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Prasanna Gaikwad
          </motion.span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-textSecondary mb-6">
          I build things for the web.
        </h2>

        <p className="text-textSecondary max-w-lg text-sm sm:text-lg mb-8 leading-relaxed">
          I'm a full-stack developer specializing in building exceptional digital experiences.
          Currently, I am focused on developing accessible, human-centered products.
        </p>

        <Link to="projects" smooth={true} duration={500} className="inline-block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary/10 text-base sm:text-lg"
          >
            Check out my work!
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;