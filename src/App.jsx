import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import Experience from './components/Experience';
import bgVideo from '../src/assets/2863422-hd_1280_720_24fps.mp4';
import bg from '../src/assets/2863422-uhd_3840_2160_24fps.mp4'


function App() {
  const videoRef = useRef(null);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;

      // Set the playback speed (e.g., 0.5 for half speed)

    }
  }, []);
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
        {/* Background Video */}
        <video

          ref={videoRef}
          autoPlay

          loop
          muted
          src={bg}
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        ></video>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Home />
          <Skills />
          <Projects />
          {/* <Experience /> */}
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
