'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const completedWorks = [
  {
    imageUrl: '/gallery/resimler/oturma.jpeg',
    title: 'Modern Oturma Odası',
    description: 'Konfor ve stilin buluştuğu alan.',
  },
  {
    imageUrl: '/gallery/resimler/discephe.jpeg',
    title: 'Çağdaş Villa Cephesi',
    description: 'Estetik ve dayanıklı dış tasarım.',
  },
  {
    imageUrl: '/gallery/resimler/ofis.jpeg',
    title: 'Verimli Ofis Alanı',
    description: 'Fonksiyonel ve motive edici çalışma ortamı.',
  },
  {
    imageUrl: '/gallery/resimler/mutfak.jpeg',
    title: 'Şık Mutfak Tasarımı',
    description: 'Modern ekipmanlar ve zarif dokunuşlar.',
  },
  {
    imageUrl: '/gallery/resimler/yatak.jpeg',
    title: 'Huzurlu Yatak Odası',
    description: 'Rahatlatıcı renkler ve minimalist dekor.',
  },
  {
    imageUrl: '/gallery/resimler/banyo.jpeg',
    title: 'Spa Tarzı Banyo',
    description: 'Lüks detaylar ve ferah atmosfer.',
  }
];

const constructionWorks = [
  {
    imageUrl: '/gallery/resimler/dis.jpeg',
    title: 'Kaba İnşaat',
    description: 'Temel, kolon, kiriş ve duvar işleri.',
  },
  {
    imageUrl: '/gallery/resimler/ince.jpeg',
    title: 'İnce İnşaat',
    description: 'Sıva, boya, alçıpan ve kaplama işleri.',
  },
  {
    imageUrl: '/gallery/resimler/tesisat.jpeg',
    title: 'Mekanik Tesisat',
    description: 'Su tesisatı, doğalgaz ve ısıtma sistemleri.',
  },
  {
    imageUrl: '/gallery/resimler/elektrik.jpeg',
    title: 'Elektrik Tesisatı',
    description: 'Elektrik sistemleri ve aydınlatma işleri.',
  },
  {
    imageUrl: '/gallery/resimler/cati.jpeg',
    title: 'Çatı ve Cephe',
    description: 'Çatı kaplama ve dış cephe sistemleri.',
  },
  {
    imageUrl: '/gallery/resimler/zemin.jpeg',
    title: 'Zemin Kaplama',
    description: 'Seramik, parke ve diğer zemin kaplamaları.',
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4
    }
  }
};

export default function Gallery() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Projelerimizden Seçmeler
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Yaratıcılığımızı ve uzmanlığımızı yansıtan çalışmalarımız.
          </p>
        </motion.div>
        
        {/* Boya ve Dekorasyon Projeleri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {completedWorks.map((work, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-full h-72">
                <Image
                  src={work.imageUrl}
                  alt={work.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                <motion.h3 
                  className="text-xl font-semibold text-white mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                  {work.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 translate-y-4 group-hover:translate-y-0"
                >
                  {work.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* İnşaat İşleri Başlığı */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-12 relative"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary inline-block"
            whileHover={{
              scale: 1.05,
              color: "#2563eb",
              transition: { duration: 0.3 }
            }}
          >
            Ayrıca Her Türlü İnşaat İşleri Yapılır
          </motion.h2>
          <motion.div
            className="w-full h-1 bg-primary mt-4"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* İnşaat Projeleri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {constructionWorks.map((work, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative w-full h-72">
                <Image
                  src={work.imageUrl}
                  alt={work.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                <motion.h3 
                  className="text-xl font-semibold text-white mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                  {work.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 translate-y-4 group-hover:translate-y-0"
                >
                  {work.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 