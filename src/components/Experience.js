// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    // {
    //   title: 'Coordinator',
    //   org: 'Anokhi Pehel',
    //   description: 'A non-profit organization initiated by students with a shared mission to support underprivileged students through various initiatives and events.',
    //   icon: <FiUsers className="text-2xl" />,
    //   gradient: 'from-blue-500 to-cyan-500'
    // },
    // {
    //   title: 'Event Coordinator',
    //   org: 'Antodaya',
    //   description: 'Led coordination for 1500+ students across 30+ schools in 20+ cultural and competitive events, ensuring smooth execution and engagement.',
    //   icon: <FiAward className="text-2xl" />,
    //   gradient: 'from-purple-500 to-pink-500'
    // }
  ];

  // return (
//     <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-cyan-900/30 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
//             Leadership & Experience
//           </h2>
//           <p className="text-gray-400 text-lg">Positions of responsibility</p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               whileHover={{ y: -10 }}
//               className="group"
//             >
//               <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
//                 <div className="flex items-start gap-6 mb-6">
//                   <div className={`p-4 bg-gradient-to-r ${exp.gradient} rounded-2xl text-white`}>
//                     {exp.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
//                     <h4 className="text-cyan-300 font-medium">{exp.org}</h4>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed">{exp.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
};

export default Experience;