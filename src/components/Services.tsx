'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaPaintRoller, FaBuilding, FaPalette, FaTape, FaBrush, FaSprayCan, FaRuler, FaSwatchbook } from 'react-icons/fa';

const services = [
  {
    title: 'İç Cephe Boyama',
    description: 'Yaşam alanlarınıza estetik ve ferahlık katın.',
    icon: <FaPaintRoller className="w-10 h-10 text-secondary" />,
    color: 'from-blue-500 to-purple-500',
    delay: 0.1,
  },
  {
    title: 'Dış Cephe Boyama',
    description: 'Binanızın değerini artıran, koruyucu ve şık çözümler.',
    icon: <FaBuilding className="w-10 h-10 text-secondary" />,
    color: 'from-purple-500 to-pink-500',
    delay: 0.2,
  },
  {
    title: 'Dekoratif Boya',
    description: 'Mekanlara özel dokunuşlar ve sanatsal uygulamalar.',
    icon: <FaPalette className="w-10 h-10 text-secondary" />,
    color: 'from-pink-500 to-red-500',
    delay: 0.3,
  },
  {
    title: 'Duvar Kağıdı Uygulama',
    description: 'Modern ve klasik desenlerle duvarlarınıza hayat verin.',
    icon: <FaTape className="w-10 h-10 text-secondary" />,
    color: 'from-red-500 to-orange-500',
    delay: 0.4,
  },
  {
    title: 'Özel Boya Teknikleri',
    description: 'Faux finish, trompe l\'oeil ve diğer özel teknikler.',
    icon: <FaBrush className="w-10 h-10 text-secondary" />,
    color: 'from-orange-500 to-yellow-500',
    delay: 0.5,
  },
  {
    title: 'Spray Boya Uygulaması',
    description: 'Hızlı ve profesyonel sonuçlar için spray boya çözümleri.',
    icon: <FaSprayCan className="w-10 h-10 text-secondary" />,
    color: 'from-yellow-500 to-green-500',
    delay: 0.6,
  },
  {
    title: 'Ölçüm ve Planlama',
    description: 'Profesyonel ölçüm ve detaylı iş planlaması.',
    icon: <FaRuler className="w-10 h-10 text-secondary" />,
    color: 'from-green-500 to-teal-500',
    delay: 0.7,
  },
  {
    title: 'Renk Danışmanlığı',
    description: 'Mekanınıza en uygun renk kombinasyonlarını belirliyoruz.',
    icon: <FaSwatchbook className="w-10 h-10 text-secondary" />,
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

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
          className="text-center mb-16"
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
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 rounded-xl animate-paint-splash`} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-5 w-16 h-16 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 