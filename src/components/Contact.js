import React, { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or backend)
    console.log("Form Data Submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section
      id="contact"
      className="py-20 text-white overflow-hidden relative px-4 min-h-screen" // Full screen height
      style={{
        backgroundImage: `url('/pic5.jpg')`, // Replace with your actual background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Creates the scrolling effect
      }}
    >
      {/* Overlay to Dim the Background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-10">
          Get in Touch
        </h2>
        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg border border-blue-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Field */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 sm:py-3 bg-gray-700/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 sm:py-3 bg-gray-700/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-2 sm:py-3 bg-gray-700/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};