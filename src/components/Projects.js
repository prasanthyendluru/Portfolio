import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    name: "Resume Builder",
    description:
      "A web application for creating resumes with template styles, real-time preview, PDF generation, and shareable links. Users can edit and manage saved resumes for easy access and distribution.",
    images: [
      "/rb1.png", // Replace with actual image paths
      "/rb2.png",
    ],
    liveUrl: "https://resume-builder-86509.web.app/",
    repoUrl: "https://github.com/prasanthyendluru/Resume-Builder",
  },
  {
    name: "Employee Management System",
    description:
      "A platform where managers assign tasks to employees and track their progress. Employees can update task statuses dynamically, improving task tracking and team communication.",
    images: [
      "/ems1.png", // Replace with actual image paths
      "/ems2.png",
    ],
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/prasanthyendluru/Employee-management-system",
  },
  {
    name: "Lets Meet",
    description:
      "A web app for organizing and joining meetups, with user authentication, event creation, CAPTCHA verification, and downloadable participant details.",
    images: [
     "/lm1.png", // Replace with actual image paths
      "/lm2.png",
    ],
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/prasanthyendluru/Letsmeet",
  },
  
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up and reset overflow when component unmounts
    };
  }, [selectedProject]);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-40 text-white overflow-hidden relative px-4 min-h-screen" // Full screen height
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
          My Projects
        </h2>
        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg cursor-pointer border border-blue-500/20"
              onClick={() => handleOpenDialog(project)}
            >
              <div className="h-48 w-full bg-gray-700/50 rounded-lg overflow-hidden">
                <img
                  src={project.images[0]} // Use the first image as the thumbnail
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-4">
                {project.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Dialog */}
      {selectedProject && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50 px-4" // Added padding for mobile screens
          onClick={handleCloseDialog}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-lg max-w-[90vw] sm:max-w-4xl w-full relative z-10 overflow-y-auto max-h-[90vh] border border-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={handleCloseDialog}
            >
              X
            </button>
            <div className="flex flex-col md:flex-row items-center">
              {/* Image Carousel */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <div className="flex flex-col gap-4">
                  {selectedProject.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${selectedProject.name} Screenshot ${idx + 1}`}
                      className="w-full h-48 sm:h-72 object-contain rounded-lg"
                    />
                  ))}
                </div>
              </div>
              {/* Project Details */}
              <div className="md:w-1/2 md:ml-6 text-white">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  {selectedProject.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                  >
                    Live Preview
                  </a>
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};