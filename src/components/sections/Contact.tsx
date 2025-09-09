'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function Contact() {
  const { isArabic } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      titleEn: 'Visit Our Workshop',
      titleAr: 'زور ورشتنا',
      valueEn: 'Al Khaleej, Riyadh 13223, Saudi Arabia',
      valueAr: 'الخليج، الرياض 13223، المملكة العربية السعودية'
    },
    {
      icon: Clock,
      titleEn: 'Business Hours',
      titleAr: 'ساعات العمل',
      valueEn: 'Saturday - Thursday: 7:00 AM - 10:00 PM\nFriday: 2:00 PM - 10:00 PM',
      valueAr: 'السبت - الخميس: 7:00 ص - 10:00 م\nالجمعة: 2:00 ظ - 10:00 م'
    },
    {
      icon: Phone,
      titleEn: 'Call Us',
      titleAr: 'اتصل بنا',
      valueEn: '+966 55 XXX XXXX',
      valueAr: '+966 55 XXX XXXX'
    },
    {
      icon: Mail,
      titleEn: 'Email Us',
      titleAr: 'البريد الإلكتروني',
      valueEn: 'contact@umarwelder.com',
      valueAr: 'contact@umarwelder.com'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className={`section-title ${isArabic ? 'font-cairo' : 'font-sans'}`}>
          {isArabic ? 'تواصل معنا' : 'Get In Touch'}
        </h2>
        <p className={`section-subtitle ${isArabic ? 'font-cairo' : 'font-sans'}`}>
          {isArabic 
            ? 'تواصل معنا اليوم لمناقشة مشروعك القادم'
            : 'Contact us today to discuss your next metalwork project'
          }
        </p>

        <div className="contact-content">
          {/* Map Section */}
          <div className="contact-map">
            <div className="map-container">
              <div className="google-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4702.957702344106!2d46.79789337621861!3d24.770111248865213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f01098d38c2c7%3A0x2b5d077a6fe275d0!2zVW1hciBXZWxkZXIg2LnZhdixINit2K_Yp9iv!5e1!3m2!1sen!2sin!4v1757429411393!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={isArabic ? 'خريطة موقع عمر حداد' : 'Umar Welder Location Map'}
                ></iframe>
              </div>
              <div className="map-info">
                <div className="map-details">
                  <h3 className={isArabic ? 'font-cairo' : 'font-sans'}>
                    {isArabic ? 'عنوان ورشتنا' : 'Our Workshop Address'}
                  </h3>
                  <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                    {isArabic 
                      ? 'الخليج، الرياض 13223، المملكة العربية السعودية'
                      : 'Al Khaleej, Riyadh 13223, Saudi Arabia'
                    }
                  </p>
                  <div className="map-actions">
                    <a 
                      href="https://www.google.com/maps/place/Umar+Welder+%D8%B9%D9%85%D8%B1+%D8%AD%D8%AF%D8%A7%D8%AF/@24.770111,46.7978934,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f01098d38c2c7:0x2b5d077a6fe275d0!8m2!3d24.770111!4d46.8004683!16s%2Fg%2F11y3k5qr8q?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-primary ${isArabic ? 'font-cairo' : 'font-sans'}`}
                    >
                      {isArabic ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}
                    </a>
                    <a 
                      href="https://www.google.com/maps/dir//Umar+Welder+%D8%B9%D9%85%D8%B1+%D8%AD%D8%AF%D8%A7%D8%AF/@24.770111,46.7978934,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e2f01098d38c2c7:0x2b5d077a6fe275d0!2m2!1d46.8004683!2d24.770111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-secondary ${isArabic ? 'font-cairo' : 'font-sans'}`}
                    >
                      {isArabic ? 'احصل على اتجاهات' : 'Get Directions'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">
                    <IconComponent />
                  </div>
                  <div className="contact-details">
                    <h4 className={isArabic ? 'font-cairo' : 'font-sans'}>
                      {isArabic ? info.titleAr : info.titleEn}
                    </h4>
                    <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                      {isArabic ? info.valueAr : info.valueEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
