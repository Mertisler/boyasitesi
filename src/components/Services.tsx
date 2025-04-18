'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaPaintRoller, FaBuilding, FaPalette, FaTape, FaBrush, FaSprayCan, FaRuler, FaSwatchbook } from 'react-icons/fa';

const services = [
  {
    title: 'İç Cephe Boyama',
    description: 'Yaşam alanlarınıza estetik ve ferahlık katın.',
    icon: <FaPaintRoller className="w-8 h-8 text-white" />,
    color: 'from-blue-500 to-purple-500',
    delay: 0.1,
  },
  {
    title: 'Dış Cephe Boyama',
    description: 'Binanızın değerini artıran, koruyucu ve şık çözümler.',
    icon: <FaBuilding className="w-8 h-8 text-white" />,
    color: 'from-purple-500 to-pink-500',
    delay: 0.2,
  },
  {
    title: 'Dekoratif Boya',
    description: 'Mekanlara özel dokunuşlar ve sanatsal uygulamalar.',
    icon: <FaPalette className="w-8 h-8 text-white" />,
    color: 'from-pink-500 to-red-500',
    delay: 0.3,
  },
  {
    title: 'Duvar Kağıdı Uygulama',
    description: 'Modern ve klasik desenlerle duvarlarınıza hayat verin.',
    icon: <FaTape className="w-8 h-8 text-white" />,
    color: 'from-red-500 to-orange-500',
    delay: 0.4,
  },
  {
    title: 'Özel Boya Teknikleri',
    description: 'Faux finish, trompe l\'oeil ve diğer özel teknikler.',
    icon: <FaBrush className="w-8 h-8 text-white" />,
    color: 'from-orange-500 to-yellow-500',
    delay: 0.5,
  },
  {
    title: 'Spray Boya Uygulaması',
    description: 'Hızlı ve profesyonel sonuçlar için spray boya çözümleri.',
    icon: <FaSprayCan className="w-8 h-8 text-white" />,
    color: 'from-yellow-500 to-green-500',
    delay: 0.6,
  },
  {
    title: 'Ölçüm ve Planlama',
    description: 'Profesyonel ölçüm ve detaylı iş planlaması.',
    icon: <FaRuler className="w-8 h-8 text-white" />,
    color: 'from-green-500 to-teal-500',
    delay: 0.7,
  },
  {
    title: 'Renk Danışmanlığı',
    description: 'Mekanınıza en uygun renk kombinasyonlarını belirliyoruz.',
    icon: <FaSwatchbook className="w-8 h-8 text-white" />,
    color: 'from-teal-500 to-cyan-500',
    delay: 0.8,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="hizmetler" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Profesyonel Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-300">
            Deneyimli ekibimizle, boya ve duvar kaplama ihtiyaçlarınız için kaliteli ve güvenilir çözümler sunuyoruz.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className={`relative w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br ${service.color}`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 