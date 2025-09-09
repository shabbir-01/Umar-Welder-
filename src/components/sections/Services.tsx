'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  DoorOpen, 
  SquareDot, 
  Home, 
  Fence, 
  Move3d, 
  Wrench, 
  Hammer, 
  Settings 
} from 'lucide-react';

export function Services() {
  const { isArabic } = useLanguage();

  const services = [
    {
      icon: DoorOpen,
      titleEn: 'Doors',
      titleAr: 'الأبواب',
      descriptionEn: 'Custom metal doors, security doors, and door repairs',
      descriptionAr: 'أبواب معدنية مخصصة وأبواب الأمان وإصلاح الأبواب',
      color: 'bg-blue-500'
    },
    {
      icon: SquareDot,
      titleEn: 'Windows',
      titleAr: 'النوافذ',
      descriptionEn: 'Window frames, grilles, and window installations',
      descriptionAr: 'إطارات النوافذ والشبكات وتركيب النوافذ',
      color: 'bg-green-500'
    },
    {
      icon: Home,
      titleEn: 'Sheds',
      titleAr: 'المظلات',
      descriptionEn: 'Metal sheds, carports, and covered structures',
      descriptionAr: 'المظلات المعدنية ومواقف السيارات والهياكل المغطاة',
      color: 'bg-purple-500'
    },
    {
      icon: Fence,
      titleEn: 'Fencing',
      titleAr: 'السياج',
      descriptionEn: 'Security fencing, decorative fences, and gates',
      descriptionAr: 'سياج الأمان والسياج الزخرفي والبوابات',
      color: 'bg-orange-500'
    },
    {
      icon: Settings,
      titleEn: 'Railings',
      titleAr: 'الدرابزين',
      descriptionEn: 'Stair railings, balcony railings, and handrails',
      descriptionAr: 'درابزين السلالم ودرابزين الشرفات والدرابزين',
      color: 'bg-red-500'
    },
    {
      icon: Move3d,
      titleEn: 'Staircases',
      titleAr: 'السلالم',
      descriptionEn: 'Metal staircases, spiral stairs, and stair repairs',
      descriptionAr: 'السلالم المعدنية والسلالم الحلزونية وإصلاح السلالم',
      color: 'bg-indigo-500'
    },
    {
      icon: Hammer,
      titleEn: 'Custom Creations',
      titleAr: 'الإبداعات المخصصة',
      descriptionEn: 'Bespoke metalwork and artistic metal pieces',
      descriptionAr: 'أعمال معدنية مخصصة وقطع معدنية فنية',
      color: 'bg-pink-500'
    },
    {
      icon: Wrench,
      titleEn: 'General Repairs',
      titleAr: 'الإصلاحات العامة',
      descriptionEn: 'Welding repairs, maintenance, and restoration',
      descriptionAr: 'إصلاحات اللحام والصيانة والترميم',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 ${
            isArabic ? 'font-cairo' : 'font-sans'
          }`}>
            {isArabic ? 'خدماتنا' : 'Our Services'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${
            isArabic ? 'font-cairo' : 'font-sans'
          }`}>
            {isArabic 
              ? 'نقدم مجموعة شاملة من خدمات اللحام والأعمال المعدنية لتلبية جميع احتياجاتك'
              : 'We offer a comprehensive range of welding and metalwork services to meet all your needs'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 text-gray-900 ${
                  isArabic ? 'font-cairo text-right' : 'font-sans text-left'
                }`}>
                  {isArabic ? service.titleAr : service.titleEn}
                </h3>
                
                <p className={`text-gray-600 leading-relaxed ${
                  isArabic ? 'font-cairo text-right' : 'font-sans text-left'
                }`}>
                  {isArabic ? service.descriptionAr : service.descriptionEn}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className={`text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer ${
                    isArabic ? 'font-cairo' : 'font-sans'
                  }`}>
                    {isArabic ? 'اعرف المزيد ←' : 'Learn More →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className={`max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isArabic ? 'font-cairo' : 'font-sans'
            }`}>
              {isArabic ? 'بحاجة لخدمة مخصصة؟' : 'Need a Custom Service?'}
            </h3>
            <p className={`text-lg mb-6 opacity-90 ${
              isArabic ? 'font-cairo' : 'font-sans'
            }`}>
              {isArabic 
                ? 'تواصل معنا لمناقشة مشروعك والحصول على عرض أسعار مجاني'
                : 'Contact us to discuss your project and get a free quote'
              }
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              {isArabic ? 'احصل على عرض أسعار' : 'Get a Quote'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
