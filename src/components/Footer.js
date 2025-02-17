import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"; // Import social media icons

export const Footer = () => {
  return (
    <footer
      className="min-h-[30vh] py-10 text-white overflow-hidden relative px-4" // Increased height with min-h-[30vh]
      style={{
        backgroundImage: `url('/pic4.jpg')`, // Replace with your actual background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Creates the scrolling effect
      }}
    >
      {/* Gradient Overlay for Blurred Edges */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)", // Blurs the edges
        }}
      ></div>

      {/* Dimmed Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Navigation Links */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="#home" className="hover:text-blue-400 transition-all duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition-all duration-300">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-all duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-all duration-300">
            Contact
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center gap-6 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://github.com/prasanthyendluru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/penchala-prasanth-yendluru-991840317/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition-all duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/prashanth_yendluru?utm_source=qr&igsh=ZGV0dHVxb2J0aDZx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500 transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Copyright Notice */}
        <motion.p
          className="text-sm sm:text-base text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          © {new Date().getFullYear()} Penchala Prasanth Yendluru 
        </motion.p>
      </div>
    </footer>
  );
};