'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export function Hero() {
  const { isArabic } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Background image placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="welding" patternUnits="userSpaceOnUse" width="100" height="100">
                  <rect width="100" height="100" fill="#1a1a1a"/>
                  <circle cx="20" cy="20" r="2" fill="#f59e0b" opacity="0.3"/>
                  <circle cx="60" cy="40" r="1.5" fill="#ef4444" opacity="0.4"/>
                  <circle cx="30" cy="70" r="1" fill="#10b981" opacity="0.3"/>
                  <circle cx="80" cy="30" r="2.5" fill="#3b82f6" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="1920" height="1080" fill="url(#welding)"/>
            </svg>
          `)}')`
        }}
      />
      
      {/* Language toggle */}
      <div className="absolute top-6 right-6 z-10">
        <LanguageToggle />
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Business name */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${
            isArabic 
              ? 'font-cairo text-white leading-relaxed' 
              : 'font-sans text-white leading-tight'
          }`}>
            {isArabic ? 'عمر حداد' : 'Umar Welder'}
          </h1>
          
          {/* Tagline */}
          <p className={`text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 ${
            isArabic ? 'font-cairo leading-relaxed' : 'font-sans leading-relaxed'
          }`}>
            {isArabic 
              ? 'خبير لحام وأعمال معدنية مخصصة وإصلاحات'
              : 'Expert welding, custom metalwork, and repairs'
            }
          </p>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              {isArabic ? 'اتصل الآن' : 'Contact Now'}
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              {isArabic ? 'معرض الأعمال' : 'View Portfolio'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
