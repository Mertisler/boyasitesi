'use client';

import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const personalInfo = {
    name: "Sedat Davet",
    email: "Sedatdavet.0404@gmail.com",
    phone: "+90 545 542 04 67"
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          
          {/* About/Brand Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Sedat Davet İnşaat</h3>
            <p className="text-sm">
              Profesyonel inşaat ve dekorasyon hizmetleri. Hayallerinizi gerçeğe dönüştürüyoruz.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center md:justify-start hover:text-white transition-colors">
                  <FaEnvelope className="mr-2" /> {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center md:justify-start hover:text-white transition-colors">
                  <FaPhone className="mr-2" /> {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; {currentYear} {personalInfo.name}. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 