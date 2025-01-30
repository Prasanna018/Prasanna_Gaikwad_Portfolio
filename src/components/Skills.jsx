import { FaReact, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import React from "react";

const Skills = () => {
  const skillsRow1 = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "REST APIs", icon: FaDatabase, color: "#FF6B6B" },
    { name: "Javascript", icon: SiJavascript, color: "#f7df1e" },
  ];

  const skillsRow2 = [
    { name: "MySql", icon: SiMysql, color: "#f29111" },
    { name: "Postgres", icon: SiPostgresql, color: "#0064a5" },
    { name: "Redis", icon: SiRedis, color: "#7A0C00" },
    { name: "Postman", icon: SiPostman, color: "#EF5B25" },
    { name: "Docker", icon: FaDocker, color: "#0db7ed" },
    { name: "Typescript", icon: SiTypescript, color: "#007acc" },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center w-32 gap-2"
      >
        <div
          className="w-20 h-20 flex items-center justify-center bg-white shadow-md rounded-lg"
          style={{ backgroundColor: `${skill.color}20` }}
        >
          <skill.icon size={40} color={skill.color} />
        </div>
        <p className="text-white font-medium text-center">{skill.name}</p>
      </div>
    ));

  return (
    <section id="skills" className="min-h-screen py-30 px-4 pt-20 lg:pt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-textPrimary text-center mb-16">
          Skills & Technologies
        </h2>
        <div className="space-y-20">
          {/* Row 1: Scroll to the left */}
          <div className="relative overflow-hidden w-full h-28 group">
            <div className="flex gap-12 animate-scroll-left">
              {renderSkills(skillsRow1.concat(skillsRow1))}
            </div>
          </div>

          {/* Row 2: Scroll to the right */}
          <div className="relative overflow-hidden w-full h-28 group">
            <div className="flex gap-12 animate-scroll-right">
              {renderSkills(skillsRow2.concat(skillsRow2))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

