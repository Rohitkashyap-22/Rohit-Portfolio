// src/components/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      title: 'Bachelor of Technology – Electrical Engineering',
      institute: 'Motilal Nehru National Institute of Technology Allahabad',
      duration: 'Nov 2022 - Present',
      details: 'CPI - 8.33 (6th semester)',
      location: 'Prayagraj, Uttar Pradesh',
      icon: '🎓',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Intermediate - Physics, Chemistry and Mathematics',
      institute: 'Maharishi Vidya Mandir',
      duration: 'July 2020 – June 2021',
      details: 'Percentage - 95.6%',
      location: 'Prayagraj, Uttar Pradesh',
      icon: '📚',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-lg">My academic journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>
              )}

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl"
                  >
                    {edu.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                        {edu.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 text-sm">
                        <FiCalendar />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <h4 className="text-lg text-cyan-300 mb-3">
                      {edu.institute}
                    </h4>

                    <div className="flex items-center gap-4 text-gray-300 mb-3">
                      <div className="flex items-center gap-2">
                        <FiAward className="text-yellow-400" />
                        <span>{edu.details}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-red-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;