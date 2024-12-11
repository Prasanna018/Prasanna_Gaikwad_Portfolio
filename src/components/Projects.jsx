import { motion } from 'framer-motion';
import movie_loom from '../assets/movie-loom.png'
import { useInView } from 'react-intersection-observer';
import React from 'react';
const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Movie-Loom Website",
      description: "A full-stack (Netflix like) platform built with MERN stack",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: movie_loom,
    },
    {
      title: "Social Media App",
      description: "Real-time social media application with chat functionality",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/500x300",
    },
    {
      title: "Task Management",
      description: "Collaborative task management system with real-time updates",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/500x300",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-textPrimary text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-textPrimary mb-2">
                  {project.title}
                </h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-secondary bg-secondary/10 px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;