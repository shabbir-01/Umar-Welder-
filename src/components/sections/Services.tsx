'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Building2, 
  DoorOpen, 
  ArrowUpDown, 
  Shield, 
  Warehouse, 
  Wrench, 
  Settings, 
  Factory 
} from 'lucide-react';

export function Services() {
  const { isArabic } = useLanguage();

  const services = [
    {
      icon: Building2,
      titleEn: 'Structural Steel',
      titleAr: 'الفولاذ الهيكلي',
      descriptionEn: 'Heavy-duty structural fabrication for commercial and industrial projects',
      descriptionAr: 'أعمال الفولاذ الهيكلي الثقيلة للمشاريع التجارية والصناعية',
      features: [
        isArabic ? 'أطر المباني' : 'Building frameworks',
        isArabic ? 'عوارض داعمة' : 'Support beams',
        isArabic ? 'منصات صناعية' : 'Industrial platforms'
      ]
    },
    {
      icon: DoorOpen,
      titleEn: 'Doors & Windows',
      titleAr: 'الأبواب والنوافذ',
      descriptionEn: 'Custom metal doors, windows, and frames designed for durability and style',
      descriptionAr: 'أبواب ونوافذ معدنية مخصصة مصممة للمتانة والأناقة',
      features: [
        isArabic ? 'أبواب أمنية' : 'Security doors',
        isArabic ? 'نوافذ عواصف' : 'Storm windows',
        isArabic ? 'مداخل تجارية' : 'Commercial entries'
      ]
    },
    {
      icon: ArrowUpDown,
      titleEn: 'Railings & Staircases',
      titleAr: 'درابزين وسلالم',
      descriptionEn: 'Elegant and safe railing systems for residential and commercial spaces',
      descriptionAr: 'أنظمة درابزين أنيقة وآمنة للمساحات السكنية والتجارية',
      features: [
        isArabic ? 'درابزين سلالم' : 'Stair railings',
        isArabic ? 'أنظمة شرفات' : 'Balcony systems',
        isArabic ? 'أعمال معدنية زخرفية' : 'Decorative metalwork'
      ]
    },
    {
      icon: Shield,
      titleEn: 'Fencing Solutions',
      titleAr: 'حلول السياج',
      descriptionEn: 'Secure and attractive fencing options for any property type',
      descriptionAr: 'خيارات سياج آمنة وجذابة لأي نوع من العقارات',
      features: [
        isArabic ? 'أسيجة أمنية' : 'Security fencing',
        isArabic ? 'ألواح زخرفية' : 'Decorative panels',
        isArabic ? 'بوابات ومداخل' : 'Gates & entries'
      ]
    },
    {
      icon: Warehouse,
      titleEn: 'Sheds & Structures',
      titleAr: 'مظلات وهياكل',
      descriptionEn: 'Custom metal buildings and storage solutions built to last',
      descriptionAr: 'مباني معدنية مخصصة وحلول تخزين مبنية لتدوم',
      features: [
        isArabic ? 'مظلات تخزين' : 'Storage sheds',
        isArabic ? 'مواقف سيارات' : 'Carports',
        isArabic ? 'مباني ورش' : 'Workshop buildings'
      ]
    },
    {
      icon: Wrench,
      titleEn: 'Repair & Restoration',
      titleAr: 'إصلاح وترميم',
      descriptionEn: 'Expert repair services to restore your metal installations to perfect condition',
      descriptionAr: 'خدمات إصلاح خبيرة لاستعادة منشآتك المعدنية إلى حالة مثالية',
      features: [
        isArabic ? 'إصلاحات لحام' : 'Welding repairs',
        isArabic ? 'معالجة صدأ' : 'Rust treatment',
        isArabic ? 'استبدال مكونات' : 'Component replacement'
      ]
    },
    {
      icon: Settings,
      titleEn: 'Custom Fabrication',
      titleAr: 'تصنيع مخصص',
      descriptionEn: 'Specialized metalwork for unique projects and artistic installations',
      descriptionAr: 'أعمال معدنية متخصصة للمشاريع الفريدة والتركيبات الفنية',
      features: [
        isArabic ? 'منحوتات فنية' : 'Artistic sculptures',
        isArabic ? 'قطع آلات' : 'Machinery parts',
        isArabic ? 'تطوير نماذج أولية' : 'Prototype development'
      ]
    },
    {
      icon: Factory,
      titleEn: 'Industrial Solutions',
      titleAr: 'حلول صناعية',
      descriptionEn: 'Heavy-duty fabrication for manufacturing and industrial applications',
      descriptionAr: 'تصنيع متين للتطبيقات الصناعية والتصنيعية',
      features: [
        isArabic ? 'أنظمة نقل' : 'Conveyor systems',
        isArabic ? 'إطارات معدات' : 'Equipment frames',
        isArabic ? 'حواجز أمان' : 'Safety barriers'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className={`section-title ${isArabic ? 'font-cairo' : 'font-sans'}`}>
          {isArabic ? 'خبرتنا' : 'Our Expertise'}
        </h2>
        <p className={`section-subtitle ${isArabic ? 'font-cairo' : 'font-sans'}`}>
          {isArabic 
            ? 'من الفكرة إلى الإنجاز، نقدم أعمالاً معدنية استثنائية'
            : 'From concept to completion, we deliver exceptional metalwork'
          }
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card" data-service={service.titleEn.toLowerCase().replace(/\s+/g, '-')}>
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h3 className={isArabic ? 'font-cairo' : 'font-sans'}>
                  {isArabic ? service.titleAr : service.titleEn}
                </h3>
                <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                  {isArabic ? service.descriptionAr : service.descriptionEn}
                </p>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={isArabic ? 'font-cairo' : 'font-sans'}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
