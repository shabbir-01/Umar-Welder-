'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, ZoomIn } from 'lucide-react';

export function Portfolio() {
  const { isArabic } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', nameEn: 'All Work', nameAr: 'جميع الأعمال' },
    { id: 'doors', nameEn: 'Doors', nameAr: 'الأبواب' },
    { id: 'windows', nameEn: 'Windows', nameAr: 'النوافذ' },
    { id: 'railings', nameEn: 'Railings', nameAr: 'الدرابزين' },
    { id: 'custom', nameEn: 'Custom Work', nameAr: 'أعمال مخصصة' }
  ];

  // Generate SVG placeholder images for different types of work
  const generatePlaceholderSVG = (type: string, index: number) => {
    const svgTemplates = {
      door: `
        <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="400" fill="#2d3748"/>
          <rect x="20" y="20" width="260" height="360" fill="#4a5568" stroke="#718096" stroke-width="4"/>
          <rect x="40" y="40" width="220" height="320" fill="#1a202c"/>
          <circle cx="240" cy="200" r="8" fill="#f6e05e"/>
          <rect x="60" y="60" width="80" height="120" fill="#2d3748" opacity="0.7"/>
          <rect x="160" y="60" width="80" height="120" fill="#2d3748" opacity="0.7"/>
          <rect x="60" y="200" width="80" height="120" fill="#2d3748" opacity="0.7"/>
          <rect x="160" y="200" width="80" height="120" fill="#2d3748" opacity="0.7"/>
          <text x="150" y="390" text-anchor="middle" fill="#a0aec0" font-size="14">Custom Door ${index + 1}</text>
        </svg>
      `,
      window: `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#2d3748"/>
          <rect x="20" y="20" width="360" height="260" fill="#4a5568" stroke="#718096" stroke-width="4"/>
          <line x1="200" y1="20" x2="200" y2="280" stroke="#718096" stroke-width="3"/>
          <line x1="20" y1="150" x2="380" y2="150" stroke="#718096" stroke-width="3"/>
          <rect x="40" y="40" width="140" height="90" fill="#1a202c" opacity="0.8"/>
          <rect x="220" y="40" width="140" height="90" fill="#1a202c" opacity="0.8"/>
          <rect x="40" y="170" width="140" height="90" fill="#1a202c" opacity="0.8"/>
          <rect x="220" y="170" width="140" height="90" fill="#1a202c" opacity="0.8"/>
          <text x="200" y="290" text-anchor="middle" fill="#a0aec0" font-size="14">Window Frame ${index + 1}</text>
        </svg>
      `,
      railing: `
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#2d3748"/>
          <rect x="0" y="200" width="400" height="50" fill="#4a5568"/>
          ${[...Array(8)].map((_, i) => `
            <rect x="${i * 50 + 25}" y="80" width="6" height="120" fill="#718096"/>
            <circle cx="${i * 50 + 28}" cy="70" r="3" fill="#f6e05e"/>
          `).join('')}
          <rect x="0" y="60" width="400" height="8" fill="#718096"/>
          <rect x="0" y="120" width="400" height="6" fill="#718096"/>
          <text x="200" y="240" text-anchor="middle" fill="#a0aec0" font-size="14">Decorative Railing ${index + 1}</text>
        </svg>
      `,
      custom: `
        <svg viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="350" fill="#2d3748"/>
          <circle cx="175" cy="175" r="120" fill="none" stroke="#718096" stroke-width="4"/>
          <circle cx="175" cy="175" r="80" fill="none" stroke="#f6e05e" stroke-width="2"/>
          <circle cx="175" cy="175" r="40" fill="none" stroke="#68d391" stroke-width="2"/>
          ${[...Array(6)].map((_, i) => {
            const angle = (i * 60) * Math.PI / 180;
            const x1 = 175 + 40 * Math.cos(angle);
            const y1 = 175 + 40 * Math.sin(angle);
            const x2 = 175 + 120 * Math.cos(angle);
            const y2 = 175 + 120 * Math.sin(angle);
            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#718096" stroke-width="3"/>`;
          }).join('')}
          <text x="175" y="330" text-anchor="middle" fill="#a0aec0" font-size="14">Custom Art ${index + 1}</text>
        </svg>
      `
    };
    
    const types = ['door', 'window', 'railing', 'custom'];
    const selectedType = types[index % types.length] as keyof typeof svgTemplates;
    return `data:image/svg+xml;base64,${btoa(svgTemplates[selectedType])}`;
  };

  const portfolioItems = [
    { id: 1, category: 'doors', titleEn: 'Security Door', titleAr: 'باب أمان' },
    { id: 2, category: 'windows', titleEn: 'Window Grilles', titleAr: 'شبكات النوافذ' },
    { id: 3, category: 'railings', titleEn: 'Stair Railing', titleAr: 'درابزين السلم' },
    { id: 4, category: 'custom', titleEn: 'Decorative Gate', titleAr: 'بوابة زخرفية' },
    { id: 5, category: 'doors', titleEn: 'Metal Door', titleAr: 'باب معدني' },
    { id: 6, category: 'windows', titleEn: 'Window Frame', titleAr: 'إطار النافذة' },
    { id: 7, category: 'railings', titleEn: 'Balcony Railing', titleAr: 'درابزين الشرفة' },
    { id: 8, category: 'custom', titleEn: 'Custom Metalwork', titleAr: 'أعمال معدنية مخصصة' },
    { id: 9, category: 'doors', titleEn: 'Entry Door', titleAr: 'باب المدخل' },
    { id: 10, category: 'windows', titleEn: 'Security Windows', titleAr: 'نوافذ الأمان' },
    { id: 11, category: 'railings', titleEn: 'Handrail', titleAr: 'درابزين اليد' },
    { id: 12, category: 'custom', titleEn: 'Artistic Panel', titleAr: 'لوحة فنية' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 ${
            isArabic ? 'font-cairo' : 'font-sans'
          }`}>
            {isArabic ? 'معرض أعمالنا' : 'Our Portfolio'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${
            isArabic ? 'font-cairo' : 'font-sans'
          }`}>
            {isArabic 
              ? 'استعرض مجموعة من أعمالنا المتميزة في اللحام والأعمال المعدنية'
              : 'Browse our collection of exceptional welding and metalwork projects'
            }
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } ${isArabic ? 'font-cairo' : 'font-sans'}`}
            >
              {isArabic ? category.nameAr : category.nameEn}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={generatePlaceholderSVG(item.category, index)}
                  alt={isArabic ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <Eye className="w-6 h-6 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <ZoomIn className="w-6 h-6 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className={`text-lg font-semibold text-gray-900 ${
                  isArabic ? 'font-cairo text-right' : 'font-sans text-left'
                }`}>
                  {isArabic ? item.titleAr : item.titleEn}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <button className={`px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl ${
            isArabic ? 'font-cairo' : 'font-sans'
          }`}>
            {isArabic ? 'عرض المزيد من الأعمال' : 'View More Work'}
          </button>
        </div>
      </div>
    </section>
  );
}
