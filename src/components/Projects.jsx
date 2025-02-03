import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import movie_loom from "../assets/movie-loom.png";
import quick_rent from "../assets/quick-rent.png";
import blog_verse from "../assets/blogverse.png";
import chit_chat from "../assets/chit-chat.png";
import Liquor_shop from "../assets/liquor_shop.png";
import hotelhub from "../assets/hotelhub.png";
import home_renting from "../assets/home_rental.png";
import elegance from '../assets/sallon.png'
import eventify from '../assets/eventify.png'
import React from "react";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    { title: "Eventify ", image: eventify, link: "https://eventify-eight-phi.vercel.app/" },
    { title: "Elegance Sallon Shop", image: elegance, link: "https://elegance-sallon-shop.vercel.app/" },
    { title: "Movie-Loom Website", image: movie_loom, link: "https://movie-loom-client.onrender.com/" },

    { title: "Quick-Rent Renting Platform", image: quick_rent, link: "http://renting-platform-frontend.vercel.app/" },
    { title: "Chit-Chat Chatting Web App", image: chit_chat, link: "https://chit-chat-1jwq.onrender.com/" },
    { title: "Liquor Shop Frontend", image: Liquor_shop, link: "https://liquor-shop-eight.vercel.app/" },
    { title: "Hotel Hub", image: hotelhub, link: "https://hotel-hub-sepia.vercel.app/" },

    { title: "Home Renting Platform", image: home_renting, link: "https://home-rental-platform-eta.vercel.app/" },
    { title: "Coming Soon", image: blog_verse },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const variants = {
              hidden: { opacity: 0, x: index % 3 === 0 ? -100 : index % 3 === 2 ? 100 : 0 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.1 } }
            };

            return (
              <motion.div
                key={project.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  {project.link && (
                    <div className="flex justify-center items-center mt-4">
                      <a className="underline text-blue-700 font-bold" target="_blank" href={project.link} rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
