'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Maximize2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Project } from '@/types';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  projects?: Project[];
  onNext?: () => void;
  onPrev?: () => void;
}

export function Lightbox({ isOpen, onClose, project }: LightboxProps) {
  const { isArabic } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Focus management
      const lightboxContainer = document.querySelector('.lightbox-container') as HTMLElement;
      if (lightboxContainer) {
        lightboxContainer.focus();
      }
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
    <div 
      className="lightbox-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div className="lightbox-backdrop" />
      <div 
        className="lightbox-container" 
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
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
              <Image 
                src={project.image || '/images/placeholder.jpg'}
                alt={isArabic ? project.titleAr : project.titleEn}
                width={800}
                height={600}
                className="lightbox-image-content"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                priority
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
            <h3 
              id="lightbox-title"
              className={`lightbox-title ${isArabic ? 'font-cairo' : 'font-sans'}`}
            >
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
