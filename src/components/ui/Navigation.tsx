'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Building2 } from 'lucide-react';

export function Navigation() {
  const { isArabic } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { 
      id: 'home', 
      label: isArabic ? 'الرئيسية' : 'Home',
      href: 'hero'
    },
    { 
      id: 'about', 
      label: isArabic ? 'من نحن' : 'About',
      href: 'about'
    },
    { 
      id: 'services', 
      label: isArabic ? 'الخدمات' : 'Services',
      href: 'services'
    },
    { 
      id: 'portfolio', 
      label: isArabic ? 'معرض الأعمال' : 'Portfolio',
      href: 'portfolio'
    },
    { 
      id: 'contact', 
      label: isArabic ? 'اتصل بنا' : 'Contact',
      href: 'contact'
    }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className={`nav-logo ${isArabic ? 'font-cairo' : 'font-sans'}`}
          >
            <Building2 className="w-8 h-8 text-orange-500" />
            <span>
              {isArabic ? 'عمر حداد' : 'Umar Welder'}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="nav-menu desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`nav-link ${isArabic ? 'font-cairo' : 'font-sans'}`}
                data-section={item.href}
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="nav-mobile">
            <button
              onClick={toggleMobileMenu}
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`nav-menu mobile ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className={`nav-link ${isArabic ? 'font-cairo' : 'font-sans'}`}
              data-section={item.href}
            >
              {item.label}
            </button>
          ))}
          <div className="mobile-language-toggle">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
