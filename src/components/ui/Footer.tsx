'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { isArabic } = useLanguage();

  const currentYear = new Date().getFullYear();

  const services = [
    { nameEn: 'Metal Doors', nameAr: 'الأبواب المعدنية' },
    { nameEn: 'Window Frames', nameAr: 'إطارات النوافذ' },
    { nameEn: 'Railings', nameAr: 'الدرابزين' },
    { nameEn: 'Fencing', nameAr: 'السياج' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className={`nav-logo ${isArabic ? 'font-cairo' : 'font-sans'}`}>
              <Building2 className="w-8 h-8 text-orange-500" />
              <span>
                {isArabic ? 'عمر حداد' : 'Umar Welder'}
              </span>
            </div>
            <p className={isArabic ? 'font-cairo' : 'font-sans'}>
              {isArabic 
                ? 'خدمات تصنيع معدنية مهنية بجودة عالية في الرياض.'
                : 'Professional metal fabrication services with high quality in Riyadh.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className={isArabic ? 'font-cairo' : 'font-sans'}>
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className={isArabic ? 'font-cairo' : 'font-sans'}
                >
                  {isArabic ? 'من نحن' : 'About Us'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className={isArabic ? 'font-cairo' : 'font-sans'}
                >
                  {isArabic ? 'الخدمات' : 'Services'}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('portfolio');
                  }}
                  className={isArabic ? 'font-cairo' : 'font-sans'}
                >
                  {isArabic ? 'معرض الأعمال' : 'Portfolio'}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className={isArabic ? 'font-cairo' : 'font-sans'}
                >
                  {isArabic ? 'تواصل معنا' : 'Contact Us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-social">
            <h4 className={isArabic ? 'font-cairo' : 'font-sans'}>
              {isArabic ? 'تواصل معنا' : 'Contact'}
            </h4>
            <div className="simple-contact-info">
              <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                <strong>Phone:</strong> +966 55 XXX XXXX
              </p>
              <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                <strong>Email:</strong> contact@umarwelder.com
              </p>
              <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                <strong>Location:</strong><br />
                {isArabic 
                  ? 'الخليج، الرياض 13223'
                  : 'Al Khaleej, Riyadh 13223'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className={isArabic ? 'font-cairo' : 'font-sans'}>
            {isArabic 
              ? `© ${currentYear} عمر حداد - جميع الحقوق محفوظة | تصميم وتطوير متميز`
              : `© ${currentYear} Umar Welder عمر حداد - All Rights Reserved | Premium Design & Development`
            }
          </p>
        </div>
      </div>
    </footer>
  );
}
