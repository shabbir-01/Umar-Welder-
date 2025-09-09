'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Hammer, MapPin, Clock } from 'lucide-react';

export function About() {
  const { isArabic } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 ${
            isArabic ? 'font-cairo' : 'font-sans'
          }`}>
            {isArabic ? 'من نحن' : 'About Us'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isArabic ? 'lg:order-2' : ''}`}>
            <p className={`text-lg leading-relaxed text-gray-700 mb-8 ${
              isArabic ? 'font-cairo text-right' : 'font-sans text-left'
            }`}>
              {isArabic 
                ? 'نحن نصنع الأبواب والنوافذ والمظلات والسياج والدرابزين والسلالم والإبداعات المخصصة وإصلاحات اللحام العامة. العمل متاح في الموقع وفي الورشة.'
                : 'We make doors, windows, sheds, fencing, railings, staircases, custom creations, and general welding repairs. Work is available both onsite and in shop.'
              }
            </p>
            
            {/* Features */}
            <div className="space-y-6">
              <div className={`flex items-start gap-4 ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Hammer className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${
                    isArabic ? 'font-cairo' : 'font-sans'
                  }`}>
                    {isArabic ? 'خبرة مهنية' : 'Professional Expertise'}
                  </h3>
                  <p className={`text-gray-600 ${isArabic ? 'font-cairo' : 'font-sans'}`}>
                    {isArabic 
                      ? 'سنوات من الخبرة في أعمال اللحام والحدادة المخصصة'
                      : 'Years of experience in welding and custom metalwork'
                    }
                  </p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${
                    isArabic ? 'font-cairo' : 'font-sans'
                  }`}>
                    {isArabic ? 'خدمة في الموقع' : 'Onsite Service'}
                  </h3>
                  <p className={`text-gray-600 ${isArabic ? 'font-cairo' : 'font-sans'}`}>
                    {isArabic 
                      ? 'نأتي إلى موقعك للمشاريع الكبيرة والإصلاحات الطارئة'
                      : 'We come to your location for large projects and emergency repairs'
                    }
                  </p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${
                    isArabic ? 'font-cairo' : 'font-sans'
                  }`}>
                    {isArabic ? 'ساعات مرنة' : 'Flexible Hours'}
                  </h3>
                  <p className={`text-gray-600 ${isArabic ? 'font-cairo' : 'font-sans'}`}>
                    {isArabic 
                      ? 'مفتوح كل يوم من 7 صباحاً حتى 10 مساءً'
                      : 'Open everyday from 7am to 10pm'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image placeholder */}
          <div className={`${isArabic ? 'lg:order-1' : ''}`}>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden">
                {/* SVG placeholder for welding workshop */}
                <svg className="w-full h-full object-cover" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#1f2937"/>
                  {/* Workshop elements */}
                  <rect x="50" y="180" width="100" height="80" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
                  <rect x="60" y="190" width="80" height="60" fill="#4b5563"/>
                  <circle cx="180" cy="150" r="30" fill="#ef4444" opacity="0.7"/>
                  <circle cx="180" cy="150" r="20" fill="#fbbf24" opacity="0.8"/>
                  <circle cx="180" cy="150" r="10" fill="#ffffff" opacity="0.9"/>
                  <rect x="250" y="100" width="80" height="120" fill="#6b7280" stroke="#9ca3af" strokeWidth="2"/>
                  <rect x="260" y="110" width="60" height="100" fill="#374151"/>
                  {/* Sparks effect */}
                  <circle cx="190" cy="140" r="2" fill="#fbbf24" opacity="0.6"/>
                  <circle cx="170" cy="135" r="1.5" fill="#ef4444" opacity="0.7"/>
                  <circle cx="185" cy="165" r="1" fill="#ffffff" opacity="0.8"/>
                  <text x="200" y="280" fill="#9ca3af" fontSize="16" textAnchor="middle">Professional Workshop</text>
                </svg>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Hammer className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
