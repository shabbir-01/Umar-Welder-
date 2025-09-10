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
      className={`language-toggle ${isArabic ? 'font-cairo' : 'font-sans'}`}
      aria-label={`Switch to ${isArabic ? 'English' : 'Arabic'}`}
      data-testid="language-toggle"
    >
      <Languages className="language-icon" />
      <span className="language-text">
        {isArabic ? 'EN' : 'عر'}
      </span>
    </button>
  );
}
