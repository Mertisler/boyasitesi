'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const mainTitles = [
  "Mekanlarınıza Renk Katıyoruz",
  "Eviniz Emin Ellerde",
  "Siz Evinizi Kirletin Biz Yapalım",
  "Hayalinizdeki Mekanlar",
  "Profesyonel Boya Hizmetleri"
];

const subTitles = [
  "Uzman ekibimizle evinizi, ofisinizi veya iş yerinizi hayallerinizdeki renklere kavuşturalım.",
  "Daire tadilatından bina tadilatına, evinizin bütün işleri itina ile yapılır.",
  "20 yıllık tecrübemizle hayalinizdeki mekanları gerçeğe dönüştürüyoruz.",
  "Kaliteli malzeme ve uzman ekip ile garantili hizmet sunuyoruz.",
  "İstanbul'un her yerinde profesyonel boya ve tadilat hizmetleri."
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentSubTitleIndex, setCurrentSubTitleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Başlık değişimi için interval
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % mainTitles.length);
    }, 3000);

    // Alt başlık değişimi için interval
    const subTitleInterval = setInterval(() => {
      setCurrentSubTitleIndex((prev) => (prev + 1) % subTitles.length);
    }, 3000);

    return () => {
      clearInterval(titleInterval);
      clearInterval(subTitleInterval);
    };
  }, []);

  if (!mounted) return null;

  // Boya lekesi noktaları
  const paintSplashes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 1.5,
    rotation: Math.random() * 360,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 3,
    color: [
      'bg-gradient-to-r from-orange-500 to-yellow-500',
      'bg-gradient-to-r from-yellow-500 to-amber-500',
      'bg-gradient-to-r from-amber-500 to-orange-500',
      'bg-gradient-to-r from-orange-400 to-orange-600',
    ][Math.floor(Math.random() * 4)],
  }));

  // Boya damlaları
  const paintDrops = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: 10 + (i * 80) / 8,
    delay: 0.5 + Math.random() * 1.5,
    size: 30 + Math.random() * 40,
    duration: 2 + Math.random() * 2,
    color: [
      'from-orange-500 to-yellow-500',
      'from-yellow-500 to-amber-500',
      'from-amber-500 to-orange-500',
    ][Math.floor(Math.random() * 3)],
  }));

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animasyonlu Gradient Arka plan */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
          opacity: 0.2
        }}
      />

      {/* Boya lekeleri */}
      {paintSplashes.map((splash) => (
        <motion.div
          key={`splash-${splash.id}`}
          className={`absolute rounded-full ${splash.color} opacity-20 backdrop-blur-md`}
          style={{
            left: `${splash.x}%`,
            top: `${splash.y}%`,
            originX: 0.5,
            originY: 0.5,
          }}
          initial={{ 
            scale: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{ 
            scale: splash.scale, 
            rotate: splash.rotation,
            opacity: 0.2,
          }}
          transition={{
            duration: splash.duration,
            delay: splash.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <div className="w-32 h-32 md:w-48 md:h-48" />
        </motion.div>
      ))}

      {/* Boya damlaları */}
      {paintDrops.map((drop) => (
        <motion.div
          key={`drop-${drop.id}`}
          className={`absolute w-4 h-16 rounded-b-full bg-gradient-to-b ${drop.color}`}
          style={{
            left: `${drop.left}%`,
            top: '-50px',
          }}
          initial={{ y: -100, height: 0, opacity: 0 }}
          animate={{
            y: [0, 300],
            height: [0, drop.size],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Fırça darbeleri */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`brush-${i}`}
            className="absolute h-8 sm:h-12 md:h-16 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500"
            style={{
              width: '150%',
              left: '-25%',
              top: `${20 + i * 30}%`,
              originX: 0.5,
              originY: 0.5,
              rotate: i % 2 === 0 ? '2deg' : '-2deg',
            }}
            initial={{ 
              x: '-100%', 
              opacity: 0.2,
              scaleX: 0.8,
            }}
            animate={{ 
              x: '100%', 
              opacity: 0.3,
              scaleX: 1,
            }}
            transition={{
              duration: 12,
              delay: i * 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Boya damlacıkları */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-white"
            style={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0.4 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, 10, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Ana içerik */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentTitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg bg-black/20 px-8 py-4 rounded-xl"
          >
            {mainTitles[currentTitleIndex]}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentSubTitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg bg-black/20 px-8 py-4 rounded-xl"
          >
            {subTitles[currentSubTitleIndex]}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#hizmetler"
            className="bg-white text-orange-500 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#fff',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Hizmetleri keşfetmek için aşağıya kaydırın
          </motion.a>
          <motion.a
            href="tel:+905455420467"
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#f97316',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Hemen Ara
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 