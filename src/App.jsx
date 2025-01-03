import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll()
  console.log(scrollYProgress)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 7,
          originX: 0,
          zIndex: 100,
          backgroundColor: "#f30283",
        }}
      />
      <div className="bg-primary"

      >
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div >
    </>
  );
}

export default App;