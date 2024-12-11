import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React from 'react';
const Home = () => {
  return (
    <section id="home" className="pt-[20px] min-h-screen flex items-center justify-center bg-primary px-4">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} z
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl font-bold text-textPrimary mb-4">
            Prasanna Gaikwad
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-textSecondary mb-6">
            I build things for the web.
          </h2>
          <p className="text-textSecondary max-w-2xl mb-8">
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
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