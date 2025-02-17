import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-20 overflow-hidden bg-gray-900 text-white"
      style={{
        backgroundImage: `url('/pic2.jpg')`, // Replace with your actual background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Creates the scrolling effect
      }}
    >
      {/* Overlay to Dim the Background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Top Decorative Wavy Divider */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 relative z-20">
        {/* Left Content - About Me */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-300 mt-6 leading-relaxed">
            I am{" "}
            <span className="text-blue-400 font-semibold">Penchala Prasanth Yendluru</span>, a passionate software developer who loves crafting{" "}
            <span className="text-purple-400 font-semibold">interactive & high-performing</span> applications.
          </p>
          <p className="text-gray-400 mt-4 leading-relaxed">
            My expertise lies in developing **clean, scalable**, and **efficient** code to create seamless user experiences. I thrive on problem-solving, experimenting with new tech, and building **impactful digital solutions**.
          </p>
          <p className="text-gray-400 mt-4 leading-relaxed italic">
            “Technology excites me, innovation drives me, and coding is my canvas to create something extraordinary.”
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-lg text-white text-center"
            >
              Let's Connect
            </a>
            <a
              href="/prasanth_yendluru_.pdf" // Update with actual path to your CV
              download
              className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Content - Replaced Image with Decorative Element */}
        <motion.div
          className="flex-1 flex items-center justify-center mt-8 md:mt-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          {/* Decorative Icon or SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-40 h-40 md:w-56 md:h-56 text-blue-400 opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </motion.div>
      </div>

      {/* Bottom Decorative Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
};