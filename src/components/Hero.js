// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiDownload, FiGithub, FiCode, FiCoffee } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const Hero = () => {
  const floatingElements = [
    { icon: <FaReact />, delay: 0, position: { top: "20%", left: "10%" } },
    { icon: <FaNodeJs />, delay: 0.5, position: { top: "60%", left: "85%" } },
    { icon: <FaDatabase />, delay: 1, position: { top: "80%", left: "15%" } },
    { icon: <FiCode />, delay: 1.5, position: { top: "30%", left: "80%" } },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/30 text-white py-20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Floating Tech Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl text-white/20"
          style={element.position}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Rohit
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent">
                Kashyap
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Full-Stack Developer &
              <span className="text-cyan-300 font-semibold">
                {" "}
                Electrical Engineering{" "}
              </span>
              Student at MNNIT Allahabad
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed"
            >
              Passionate about creating digital solutions that blend innovation
              with functionality. I transform complex problems into elegant,
              user-friendly applications.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-8 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-sm">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3"
              >
                <span className="relative z-10">Explore My Work</span>
                <div className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>

              <a
                href="https://drive.google.com/file/d/1dDz0JVsrY4sAGauOXgRemGSVM1BsLpnk/view?usp=drive_link"
                download="Rohit Kashyap Resume.pdf"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-white/10"
              >
                <FiDownload className="group-hover:translate-y-0.5 transition-transform duration-300" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center gap-6 mt-8"
            >
              <a
                href="https://github.com/Rohitkashyap-22"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <FiGithub className="text-xl" />
                </div>
                <span className="text-sm">@Rohitkashyap-22</span>
              </a>

              <a
                href="mailto:rohitkashyap2226@gmail.com"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <FiCoffee className="text-xl" />
                </div>
                <span className="text-sm">Let's Connect</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image Section (Modified to be Rounded Square and Object-Contain) */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Main Image Container */}
              <motion.div
                // Square look: w-80 h-80 with rounded-3xl
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl border-4 border-white/20 backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image */}
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-gray-800 flex items-center justify-center">
                  <img
                    src="/Rohit.jpg"
                    alt="Rohit Kashyap"
                    // Full visibility: object-contain
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback Avatar */}
                  <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl font-bold">
                    RK
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-cyan-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  👨‍💻 Developer
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-pink-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  🎓 MNNIT
                </motion.div>
              </motion.div>

              {/* Animated Orbit - Rounded-square orbits to match the container */}
              <motion.div
                className="absolute inset-0 rounded-[3.5rem] border-2 border-blue-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-4 rounded-[3rem] border-2 border-purple-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
