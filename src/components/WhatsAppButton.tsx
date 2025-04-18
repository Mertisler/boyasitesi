'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+905455420467"; // WhatsApp için numarayı boşluksuz format

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-2 sm:right-4 z-50">
      <motion.a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#25D366] text-white rounded-lg shadow-lg hover:bg-[#1da851] transition-colors"
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: 1, 
          x: [0, 5, -5, 5, -5, 0] 
        }}
        transition={{ 
          opacity: { duration: 0.5 },
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="text-white text-xl sm:text-2xl" />
        <span className="text-sm sm:text-base font-medium hidden sm:inline">
          WhatsApp ile Mesaj Gönderin
        </span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton; 