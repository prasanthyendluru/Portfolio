import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profilepic from "../assets/p2.jpeg"; // Replace with your actual image path
import { motion } from "framer-motion";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Penchala Prasanth Yendluru"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white px-6 overflow-hidden relative "
      style={{
        backgroundImage: `url('/pic8.jpg')`, // Replace with your actual background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Creates the scrolling effect
      }}
    >
      {/* Overlay to Dim the Background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full max-w-6xl relative z-10">
        {/* Left Content (Typing Effect & Quote) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
            Hi,This is <span className="text-teal-400" ref={typedRef}></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-2">
            "Turning ideas into reality with elegant code."
          </p>
          {/* Buttons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Contact Me
            </a>
            <a
              href="/prasanth_yendluru_.pdf" // Update with actual path to your CV
              download
              className="px-6 py-3 rounded-lg border border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Content (Blended Profile Picture) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mt-6 md:mt-0 transform-gpu perspective-1000"
        >
          {/* Profile Image */}
          <img
            src={profilepic} // Replace with your actual image path
            alt="Prasanth Yendluru"
            className="w-full h-full object-cover rounded-full"
          />

          {/* Blurred Edge Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 rounded-full blur-md"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;