// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const skills = {
    "Programming Languages": ['C++', 'JavaScript', 'SQL'],
    "Databases & Tools": ['MongoDB', 'GitHub', 'Git', 'VSCode'],
    "Technologies & Frameworks": ['ReactJS', 'NodeJS', 'ExpressJS'],
    "Domain Knowledge": ['Object Oriented Programming', 'Database Management Systems', 'Operating System', 'Computer Networking']
  };

  const icons = {
    "Programming Languages": <FaCode className="text-blue-400" />,
    "Databases & Tools": <FaDatabase className="text-green-400" />,
    "Technologies & Frameworks": <FaLaptopCode className="text-purple-400" />,
    "Domain Knowledge": <FaTools className="text-orange-400" />
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  {icons[category]}
                </div>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl p-4 text-center group hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                  >
                    <span className="text-white font-medium group-hover:text-blue-200 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;