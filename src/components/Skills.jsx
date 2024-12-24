import { color, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJavascript, SiMysql, SiPostgresql, SiRedis, SiPostman } from 'react-icons/si';
import { FaDocker } from "react-icons/fa";
import React from 'react';
const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'REST APIs', icon: FaDatabase, color: '#FF6B6B' },
    { name: "Javascript", icon: SiJavascript, color: '#f7df1e' },
    { name: "MySql", icon: SiMysql, color: '#f29111' },
    { name: "Postgres", icon: SiPostgresql, color: "#0064a5" },
    { name: "Redis", icon: SiRedis, color: "#7A0C00" },
    { name: "Postman", icon: SiPostman, color: "#EF5B25" },
    { name: "Docker", icon: FaDocker, color: "#0db7ed" }

  ];

  return (
    <section id="skills" className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-textPrimary text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 flex items-center justify-center bg-white/5 rounded-lg mb-4"
              >
                <skill.icon size={40} color={skill.color} />
              </motion.div>
              <p className="text-textSecondary text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;