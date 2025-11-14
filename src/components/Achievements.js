// src/components/Achievements.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      title: "Qualified JEE Advanced and Mains",
      description:
        "Secured AIR 19,317 IN JEE Advanced and AIR 16,924 IN JEE Mains",
      icon: <FiAward className="text-2xl" />,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "150+ Problems Solved",
      description:
        "Solved 150+ questions across all coding platforms including LeetCode and GeeksforGeeks demonstrating strong problem-solving skills and algorithmic thinking.",
      icon: <FiCode className="text-2xl" />,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent mb-4">
            Achievements
          </h2>
          <p className="text-gray-400 text-lg">Milestones I'm proud of</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${achievement.gradient} rounded-2xl text-white`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;