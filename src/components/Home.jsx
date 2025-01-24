import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React from 'react';
import logo from '../assets/logo.jpg'
const Home = () => {
  return (
    <section id="home" className="pt-[100px] min-h-screen flex items-center sm:justify-around bg-primary px-4 lg:flex-row flex-col md:flex-col sm:flex-col text-center">



      <div className='m-4'>
        <img className='rounded-[50%] shadow-md' src={logo}></img>

      </div>
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl font-extra text-textPrimary mb-4">
            Prasanna Gaikwad
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-textSecondary mb-6">
            I build things for the web.
          </h2>
          <p className="text-textSecondary max-w-2xl mb-8">
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I am focused on building accessible, human-centered products with my expertise.
          </p>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary/10"
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