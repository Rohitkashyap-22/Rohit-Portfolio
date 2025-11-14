// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiCoffee } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="text-red-400" />
            </motion.div>
            <span>and</span>
            <FiCoffee className="text-yellow-400" />
          </div>
          <p className="text-gray-400 mb-2">
            &copy; 2025 Anupam Kushwaha. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;