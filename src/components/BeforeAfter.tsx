'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Modern Ofis Dönüşümü',
    description: 'Kurumsal kimliğe uygun renk paleti',
    beforeColor: 'from-gray-400 to-gray-600',
    afterColor: 'from-blue-500 to-indigo-600',
    stats: 'Çalışan memnuniyeti %40 arttı',
    statColor: 'bg-blue-600',
  },
  {
    title: 'Villa Renovasyonu',
    description: 'Lüks ve modern tasarım',
    beforeColor: 'from-gray-500 to-stone-600',
    afterColor: 'from-emerald-500 to-teal-600',
    stats: 'Mülk değeri %25 yükseldi',
    statColor: 'bg-emerald-600',
  },
  {
    title: 'Cafe Yenilemesi',
    description: 'Sıcak ve davetkar atmosfer',
    beforeColor: 'from-gray-500 to-amber-700',
    afterColor: 'from-amber-400 to-orange-600',
    stats: 'Müşteri trafiği %60 arttı',
    statColor: 'bg-amber-500',
  },
  {
    title: 'Ev Dekorasyonu',
    description: 'Ferah ve modern yaşam alanı',
    beforeColor: 'from-gray-400 to-gray-600',
    afterColor: 'from-rose-400 to-pink-600',
    stats: 'Yaşam kalitesi maksimumda',
    statColor: 'bg-rose-500',
  },
];

const BeforeAfter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredSide, setHoveredSide] = useState<'before' | 'after' | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-fade-in">
            Öncesi ve Sonrası
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in-up">
            Projelerimizin dönüşüm hikayeleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => {
                setActiveIndex(null);
                setHoveredSide(null);
              }}
            >
              <div className="relative h-64 md:h-80">
                <div className="absolute inset-0 flex">
                  {/* Öncesi */}
                  <motion.div 
                    className={`w-1/2 h-full bg-gradient-to-br ${project.beforeColor} flex items-center justify-center animate-paint-drop`}
                    onMouseEnter={() => setHoveredSide('before')}
                    onMouseLeave={() => setHoveredSide(null)}
                    animate={{
                      filter: hoveredSide === 'after' ? 'brightness(0.7)' : 'brightness(1)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-white text-xl font-bold bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeIndex === index && hoveredSide === 'before' ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      ÖNCESİ
                    </motion.div>
                    {/* Öncesi efekti - eskimiş görünüm */}
                    <div className="absolute inset-0 w-1/2 bg-black/20 mix-blend-multiply" />
                    <div className="absolute inset-0 w-1/2 bg-pattern-grid opacity-10" />
                  </motion.div>
                  
                  {/* Sonrası */}
                  <motion.div 
                    className={`w-1/2 h-full bg-gradient-to-br ${project.afterColor} flex items-center justify-center animate-brush-stroke`}
                    onMouseEnter={() => setHoveredSide('after')}
                    onMouseLeave={() => setHoveredSide(null)}
                    animate={{
                      filter: hoveredSide === 'before' ? 'brightness(0.7)' : 'brightness(1)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-white text-xl font-bold bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeIndex === index && hoveredSide === 'after' ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      SONRASI
                    </motion.div>
                    {/* Sonrası efekti - parlak ve temiz */}
                    <div className="absolute inset-0 left-1/2 w-1/2 bg-white/10 mix-blend-overlay" />
                    <div className="absolute inset-0 left-1/2 w-1/2 bg-pattern-dots opacity-10" />
                  </motion.div>
                  
                  {/* Orta çizgi */}
                  <div className="absolute inset-y-0 left-1/2 w-1 bg-white/50 transform -translate-x-1/2 z-10" />
                  
                  {/* Boya sıçrama efekti */}
                  <motion.div
                    className={`absolute top-0 left-1/2 w-12 h-12 rounded-full ${project.statColor} -translate-x-1/2 -translate-y-1/3 animate-paint-splash`}
                    initial={{ scale: 0 }}
                    animate={{ scale: activeIndex === index ? 1.2 : 0 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  />
                </div>
                
                {/* Bilgiler */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                  <div className="mt-2 inline-block bg-black/30 px-3 py-1 rounded-full text-white text-sm">
                    {project.stats}
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

export default BeforeAfter; 