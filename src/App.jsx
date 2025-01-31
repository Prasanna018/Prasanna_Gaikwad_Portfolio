import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import Experience from './components/Experience';



function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX,
        }}
        className="fixed top-0 left-0 right-0 h-[7px] origin-left bg-pink-500 z-50"
      />

      <div className="relative min-h-screen">


        <Navbar />
        <Home />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </div>

    </>
  );
}

export default App;
