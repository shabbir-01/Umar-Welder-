'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { isArabic } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="sparks"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="text-gradient">
            {isArabic ? 'عمر حداد' : 'Umar Welder'}
          </span>
          <span className="text-outline">
            {isArabic ? 'التصنيع' : 'Fabrication'}
          </span>
        </h1>
        <p className="hero-subtitle">
          {isArabic 
            ? 'صنع التميز في الفولاذ والحديد والألمنيوم'
            : 'Crafting Excellence in Steel, Iron & Aluminum'
          }
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">
              {isArabic ? 'مشروع مكتمل' : 'Projects Completed'}
            </span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">
              {isArabic ? 'سنة خبرة' : 'Years Experience'}
            </span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">
              {isArabic ? 'رضا العملاء' : 'Client Satisfaction'}
            </span>
          </div>
        </div>
        <div className="hero-buttons">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            {isArabic ? 'عرض مجاني' : 'Get Free Quote'}
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('portfolio')}
          >
            {isArabic ? 'معرض الأعمال' : 'View Our Work'}
          </button>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => scrollToSection('services')}>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
