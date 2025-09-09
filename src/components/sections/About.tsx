'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Clock, Award, Wrench } from 'lucide-react';
import Image from 'next/image';

export function About() {
  const { isArabic } = useLanguage();

  const features = [
    {
      icon: Shield,
      titleEn: 'Quality Guaranteed',
      titleAr: 'جودة مضمونة'
    },
    {
      icon: Clock,
      titleEn: 'On-Time Delivery',
      titleAr: 'تسليم في الموعد'
    },
    {
      icon: Award,
      titleEn: 'Expert Team',
      titleAr: 'فريق خبير'
    },
    {
      icon: Wrench,
      titleEn: 'Professional Tools',
      titleAr: 'أدوات مهنية'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className={isArabic ? 'font-cairo' : 'font-sans'}>
              {isArabic ? 'من نحن' : 'About us'}
            </h2>
            <p className={isArabic ? 'font-cairo' : 'font-sans'}>
              {isArabic 
                ? 'مع أكثر من 15 عاماً من الخبرة في صناعة المعادن، نحن نقدم حلول متقدمة لجميع احتياجات اللحام والأعمال المعدنية.'
                : 'With over 15 years of experience in metal fabrication, we deliver advanced solutions for all welding and metalwork needs.'
              }
            </p>
            <p className={isArabic ? 'font-cairo' : 'font-sans'}>
              {isArabic 
                ? 'فريقنا من الحرفيين المهرة يلتزم بأعلى معايير الجودة والدقة، مع استخدام أحدث التقنيات والمعدات لضمان النتائج الممتازة.'
                : 'Our team of skilled craftsmen is committed to the highest standards of quality and precision, using the latest techniques and equipment to ensure exceptional results.'
              }
            </p>
            <p className={isArabic ? 'font-cairo' : 'font-sans'}>
              {isArabic 
                ? 'من المشاريع الصغيرة إلى المشاريع الصناعية الكبيرة، نحن فخورون بانجاز أكثر من 500 مشروع ناجح في جميع أنحاء الرياض.'
                : 'From small projects to large industrial undertakings, we are proud to have completed over 500 successful projects throughout Riyadh.'
              }
            </p>
            
            <div className="about-features">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="feature-item">
                    <IconComponent />
                    <span className={isArabic ? 'font-cairo' : 'font-sans'}>
                      {isArabic ? feature.titleAr : feature.titleEn}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-image-container">
              <Image
                src="/images/img1.jpg"
                alt={isArabic ? 'عمر حداد - أعمالنا وفريقنا' : 'Umar Welder - Our Work & Team'}
                width={600}
                height={400}
                className="about-main-image"
                priority
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4 className={isArabic ? 'font-cairo' : 'font-sans'}>
                    {isArabic ? 'خبرة في الأعمال المعدنية' : 'Expertise in Metalwork'}
                  </h4>
                  <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                    {isArabic ? 'جودة عالية في كل مشروع' : 'Quality in Every Project'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
