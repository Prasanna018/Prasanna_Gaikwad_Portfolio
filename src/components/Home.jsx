import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React from 'react';
import logo from '../assets/logo.jpg'
const Home = () => {

  const text = "PRASANNA GAIWKAD".split("");
  return (
    <section id="home" className="pt-[100px] min-h-screen flex items-center sm:justify-around  px-4 lg:flex-row flex-col md:flex-col sm:flex-col text-center">

      <div className='m-4'>
        <img className='rounded-[50%] shadow-md' src={logo}></img>

      </div>
      <div className="flex justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl font-extra text-textPrimary mb-4">
            <motion.div
              className="text-4xl font-bold text-blue-300 flex  justify-center items-center text-center space-x-1"
              initial="rest"
              whileHover="hover"
            >
              {text.map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={{
                    rest: { y: 0, transition: { duration: 0.3 } },
                    hover: {
                      y: [0, -10, 0], // Creates a wave-like bounce
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: index * 0.1, // Adds delay for each letter
                      },
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
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