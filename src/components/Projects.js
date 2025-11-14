// src/components/Projects.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCalendar } from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Real-Time Chat Application",
      description: [
        "Developed a real-time messaging application enabling private and group conversations with instant updates powered by Socket.IO.",
        "Engineered secure login, session handling, and role-based access through JWT authentication and bcrypt password hashing.",
        "Structured and optimized MongoDB collections with Mongoose to store users, chats, and message history efficiently.",
        "Developed RESTful APIs for user, chat, and message operations, ensuring modular and scalable backend architecture.",
        "Created a responsive and modern UI with React and MUI for seamless cross-device usage.",
        "Delivered an intuitive, mobile-friendly interface using React and MUI, enhancing overall user experience.",
      ],
      tech: ["MERN Stack", "Socket.IO", "JWT", "REST APIs"],
      github: "https://github.com/Rohitkashyap-22/Chat-App.git",
      live: "https://chat-app-derl.onrender.com",
      image: "/images/chat-app-screenshot.png",
      period: "Nov 2024 - Dec 2024",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Job Portal Application",
      description: [
        "Developed a full-stack, role-based job platform using React, enabling seamless job discovery, application tracking, and recruitment management.",
        "Implemented secure authentication & authorization with Clerk (multi-session support + protected API routes).",
        "Designed a normalized relational database in Supabase (PostgreSQL) to handle complex relationships among users, profiles, jobs, and applications.",
        "Built core features: dynamic search/filters, CRUD operations, saved jobs system, ensuring responsive and engaging user experience.",
        "Delivered a modern, accessible UI with React, Tailwind CSS, and shadcn/ui.",
      ],
      tech: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Supabase",
        "Tailwind CSS",
        "Clerk",
        "shadcn/ui",
      ],
      github: "https://github.com/Rohitkashyap-22/Job-Portal.git",
      live: "https://job-portal-seven-mocha.vercel.app/",
      image: "/images/job-portal-screenshot.png",
      period: "July 2025 - Aug 2025",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Things I've built with passion
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}
                  ></div>
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FiCalendar />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300 border border-white/10">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithub />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <FiExternalLink />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FiX className="text-white text-xl" />
                  </button>

                  {/* Modal Header */}
                  <div className="p-6 border-b border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        <span>{selectedProject.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {selectedProject.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full text-sm text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg"
                      >
                        <FiGithub />
                        View Code
                      </a>
                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg"
                        >
                          <FiExternalLink />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
