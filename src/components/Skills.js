import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import django from "../assets/dj.png"; // Replace with your actual Django image path

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  {
    name: "Django",
    icon: (
      <img
        src={django}
        alt="Django"
        className="w-12 h-12 rounded-lg"
      />
    ),
  },
  { name: "Python", icon: <FaPython className="text-blue-300" /> },
  { name: "MySQL", icon: <FaDatabase className="text-purple-400" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-40 text-white overflow-hidden relative min-h-screen" // Full screen height
      style={{
        backgroundImage: `url('/pic8.jpg')`, // Replace with your actual background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Creates the scrolling effect
      }}
    >
      {/* Overlay to Dim the Background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-10">
          My Skills
        </h2>
        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg flex flex-col items-center gap-2 border border-blue-500/20 transition-all duration-300 hover:bg-gray-700/50"
            >
              {/* Icon or Local Image */}
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm md:text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};