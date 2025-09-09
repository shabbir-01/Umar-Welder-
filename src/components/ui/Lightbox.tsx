'use client';

import React, { useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    image?: string;
    titleEn: string;
    titleAr: string;
    descriptionEn: string;
    descriptionAr: string;
    category: string;
  } | null;
  projects?: any[];
  onNext?: () => void;
  onPrev?: () => void;
}

export function Lightbox({ isOpen, onClose, project }: LightboxProps) {
  const { isArabic } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-backdrop" />
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X />
        </button>
        
        <div className="lightbox-content">
          <div className="lightbox-image">
            {project.image ? (
              <img 
                src={project.image}
                alt={isArabic ? project.titleAr : project.titleEn}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '70vh', 
                  objectFit: 'contain',
                  borderRadius: '10px'
                }}
              />
            ) : (
              <div className="portfolio-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">
                    <Maximize2 />
                  </div>
                  <p>No image available</p>
                </div>
              </div>
            )}
          </div>
          <div className="lightbox-info">
            <h3 className={`lightbox-title ${isArabic ? 'font-cairo' : 'font-sans'}`}>
              {isArabic ? project.titleAr : project.titleEn}
            </h3>
            <p className={`lightbox-description ${isArabic ? 'font-cairo' : 'font-sans'}`}>
              {isArabic ? project.descriptionAr : project.descriptionEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
