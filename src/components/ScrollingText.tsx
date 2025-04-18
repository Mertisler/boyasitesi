'use client';

import { motion } from 'framer-motion';

const ScrollingText = () => {
  return (
    <div className="bg-primary text-white overflow-hidden py-2">
      <div className="relative">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
          className="whitespace-nowrap"
        >
          <span className="text-lg font-medium inline-block mr-16">
            🏢 Profesyonel İnşaat ve Tadilat Hizmetleri
          </span>
          <span className="text-lg font-medium inline-block mr-16">
            🏠 Ev ve İş Yeri Tadilatları
          </span>
          <span className="text-lg font-medium inline-block mr-16">
            🌍 İstanbul ve İzmir başta olmak üzere Türkiye'nin her yerinde hizmetinizdeyiz
          </span>
          <span className="text-lg font-medium inline-block mr-16">
            📞 Hemen Bize Ulaşın: +90 545 542 04 67
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingText; 