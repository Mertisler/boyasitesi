'use client';

import { useEffect, useRef } from 'react';

export default function ScrollAnimator() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // Opsiyonel: Ekrandan çıkınca animasyonu sıfırlamak için
          // entry.target.classList.remove('is-visible');
        }
      });
    }, {
      threshold: 0.1, // Elementin %10'u görününce tetikle
    });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      elements.forEach((el) => observer.current?.unobserve(el));
    };
  }, []);

  return null; // Bu bileşen görsel bir çıktı üretmez
} 