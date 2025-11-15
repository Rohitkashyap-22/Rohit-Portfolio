// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiUser } from 'react-icons/fi';

const About = () => {
  const interests = ['Data Structures & Algorithms', 'Web Development', 'Operating Systems', 'Database Management System', 'OOPS Concept', 'System Design'];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FiUser className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about building innovative web applications and solving complex problems through code. 
                Currently pursuing B.Tech in Electrical Engineering at MNNIT Allahabad with a strong foundation 
                in full-stack development and a love for creating digital solutions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <FiMapPin className="text-green-400" />
                  </div>
                  <span className="text-gray-300">Prayagraj, Uttar Pradesh</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FiPhone className="text-blue-400" />
                  </div>
                  <a href="tel:+918426036535" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +91-8426036535
                  </a>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <FiMail className="text-purple-400" />
                  </div>
                  <a href="mailto:rohitkashyap2226@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                    rohitkashyap2226@gmail.com
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Areas of Interest</h3>
            <div className="grid gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl p-4 text-center group hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                >
                  <span className="text-white font-medium group-hover:text-blue-200 transition-colors">
                    {interest}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;