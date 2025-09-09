'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';

export function Contact() {
  const { isArabic } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      titleEn: 'Address',
      titleAr: 'العنوان',
      valueEn: 'Al Khaleej, Riyadh 13223, Saudi Arabia',
      valueAr: 'الخليج، الرياض 13223، المملكة العربية السعودية',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      titleEn: 'Working Hours',
      titleAr: 'ساعات العمل',
      valueEn: 'Open everyday 7am – 10pm',
      valueAr: 'مفتوح كل يوم من 7 صباحاً حتى 10 مساءً',
      color: 'bg-green-500'
    },
    {
      icon: Phone,
      titleEn: 'Phone',
      titleAr: 'الهاتف',
      valueEn: '+966 XXX XXX XXX',
      valueAr: '+966 XXX XXX XXX',
      color: 'bg-orange-500'
    },
    {
      icon: Mail,
      titleEn: 'Email',
      titleAr: 'البريد الإلكتروني',
      valueEn: 'info@umarwelder.sa',
      valueAr: 'info@umarwelder.sa',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 ${
            isArabic ? 'font-cairo' : 'font-sans'
          }`}>
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${
            isArabic ? 'font-cairo' : 'font-sans'
          }`}>
            {isArabic 
              ? 'نحن هنا لمساعدتك في جميع احتياجاتك من اللحام والأعمال المعدنية'
              : 'We are here to help you with all your welding and metalwork needs'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isArabic ? 'lg:order-2' : ''}`}>
            <h3 className={`text-2xl font-bold mb-8 text-gray-900 ${
              isArabic ? 'font-cairo text-right' : 'font-sans text-left'
            }`}>
              {isArabic ? 'معلومات الاتصال' : 'Contact Information'}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                      isArabic ? 'flex-row-reverse text-right' : ''
                    }`}
                  >
                    <div className={`flex-shrink-0 w-14 h-14 ${info.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold text-gray-900 mb-2 ${
                        isArabic ? 'font-cairo' : 'font-sans'
                      }`}>
                        {isArabic ? info.titleAr : info.titleEn}
                      </h4>
                      <p className={`text-gray-600 ${isArabic ? 'font-cairo' : 'font-sans'}`}>
                        {isArabic ? info.valueAr : info.valueEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
              <div className={`flex items-center gap-4 mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <Calendar className="w-8 h-8" />
                <h4 className={`text-xl font-semibold ${isArabic ? 'font-cairo' : 'font-sans'}`}>
                  {isArabic ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                </h4>
              </div>
              <p className={`text-lg mb-6 opacity-90 ${
                isArabic ? 'font-cairo text-right' : 'font-sans text-left'
              }`}>
                {isArabic 
                  ? 'اتصل بنا اليوم للحصول على عرض أسعار مجاني واستشارة مهنية'
                  : 'Call us today for a free quote and professional consultation'
                }
              </p>
              <div className={`flex gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  {isArabic ? 'اتصل الآن' : 'Call Now'}
                </button>
                <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all">
                  {isArabic ? 'واتساب' : 'WhatsApp'}
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`${isArabic ? 'lg:order-1' : ''}`}>
            <h3 className={`text-2xl font-bold mb-8 text-gray-900 ${
              isArabic ? 'font-cairo text-right' : 'font-sans text-left'
            }`}>
              {isArabic ? 'موقعنا' : 'Our Location'}
            </h3>
            
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Google Maps Embed Placeholder */}
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h4 className={`text-xl font-semibold text-gray-700 mb-2 ${
                    isArabic ? 'font-cairo' : 'font-sans'
                  }`}>
                    Umar Welder عمر حداد
                  </h4>
                  <p className={`text-gray-500 ${isArabic ? 'font-cairo' : 'font-sans'}`}>
                    Al Khaleej, Riyadh 13223
                  </p>
                  <p className={`text-sm text-gray-400 mt-4 ${isArabic ? 'font-cairo' : 'font-sans'}`}>
                    {isArabic ? 'خريطة جوجل سيتم تحميلها هنا' : 'Google Maps will load here'}
                  </p>
                </div>
              </div>
              
              {/* Map overlay with actual embed code comment */}
              <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md">
                <p className="text-sm text-gray-600 font-medium">
                  📍 {isArabic ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}
                </p>
              </div>
            </div>
            
            {/* Map embed instructions */}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className={`text-sm text-blue-800 ${isArabic ? 'font-cairo text-right' : 'font-sans text-left'}`}>
                {isArabic 
                  ? '💡 لإضافة خريطة جوجل الحقيقية، استبدل هذا القسم بكود التضمين من Google Maps'
                  : "💡 To add real Google Maps, replace this section with Google Maps embed code"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
