// src/components/CodingProfiles.js
import React from 'react';
import { motion } from 'framer-motion';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "Rohit_Kashyap_2211",
      link: "https://leetcode.com/Rohit_Kashyap_2211/",
      icon: "/leetcode-icon.png",
      gradient: "from-orange-500 to-red-500",
      description: "Competitive Programming",
    },
    {
      platform: "GeeksforGeeks",
      username: "rohitkush22",
      link: "https://auth.geeksforgeeks.org/user/rohitkush22",
      icon: "/gfg icon.jpg",
      gradient: "from-green-500 to-emerald-500",
      description: "DSA Practice",
    },
  ];

  return (
    <section id="coding" className="py-20 bg-gradient-to-br from-slate-900 via-orange-900/20 to-red-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-4">
            Coding Profiles
          </h2>
          <p className="text-gray-400 text-lg">Where I practice and compete</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="block group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${profile.gradient} rounded-2xl blur-md opacity-50`}></div>
                    <img 
                      src={profile.icon} 
                      alt={profile.platform}
                      className="relative w-16 h-16 rounded-2xl object-cover border-2 border-white/10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{profile.platform}</h3>
                <p className="text-gray-400 text-sm mb-2">{profile.description}</p>
                <p className="text-cyan-300 font-medium">@{profile.username}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                    Visit Profile →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;