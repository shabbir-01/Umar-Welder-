'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage, isArabic } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-white text-sm font-medium"
      aria-label={`Switch to ${isArabic ? 'English' : 'Arabic'}`}
      data-testid="language-toggle"
    >
      <Languages className="w-4 h-4" />
      <span>
        {isArabic ? 'EN' : 'عر'}
      </span>
    </button>
  );
}
