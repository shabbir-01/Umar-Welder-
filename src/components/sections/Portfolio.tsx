'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Maximize2 } from 'lucide-react';
import { Lightbox } from '@/components/ui/Lightbox';
import { Project } from '@/types';

export function Portfolio() {
  const { isArabic } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filters = [
    { id: 'all', labelEn: 'All', labelAr: 'الكل' },
    { id: 'sheds', labelEn: 'Sheds', labelAr: 'مظلات' },
    { id: 'doors-windows', labelEn: 'Doors & Windows', labelAr: 'أبواب ونوافذ' },
    { id: 'railings', labelEn: 'Railings', labelAr: 'درابزين' },
    { id: 'others', labelEn: 'Others', labelAr: 'أخرى' },
  ];

  const projects: Project[] = [
    // 4 Sheds
    { id: 2, image: '/images/img2.jpg',  category: 'sheds',          titleEn: 'Custom Shed Build',        titleAr: 'بناء مظلة مخصصة',        descriptionEn: 'Durable shed structure with reinforced frame', descriptionAr: 'هيكل مظلة متين بإطار معزز' },
    { id: 5, image: '/images/img3.jpg',  category: 'sheds',          titleEn: 'Carport Structure',       titleAr: 'موقف سيارات مظلل',        descriptionEn: 'Metal carport designed for durability',         descriptionAr: 'موقف سيارات معدني مصمم للمتانة' },
    { id: 8, image: '/images/img4.jpg',  category: 'sheds',          titleEn: 'Workshop Shed',           titleAr: 'مظلة ورشة',               descriptionEn: 'Spacious workshop shed with ventilation',       descriptionAr: 'مظلة ورشة فسيحة مع تهوية' },
    { id: 11, image: '/images/img5.jpg', category: 'sheds',         titleEn: 'Storage Shed',            titleAr: 'مظلة تخزين',               descriptionEn: 'Compact storage shed solution',                  descriptionAr: 'حل مظلة تخزين مدمجة' },
    
    // 4 Doors & Windows
    { id: 3, image: '/images/img6.jpg',  category: 'doors-windows',  titleEn: 'Steel Door Install',      titleAr: 'تركيب باب فولاذي',        descriptionEn: 'Security steel door with premium finish',       descriptionAr: 'باب أمان فولاذي بلمسة نهائية ممتازة' },
    { id: 6, image: '/images/img7.jpg',  category: 'doors-windows',  titleEn: 'Window Frame Set',        titleAr: 'مجموعة إطارات نوافذ',     descriptionEn: 'Custom aluminum window framing',                 descriptionAr: 'إطارات نوافذ ألمنيوم مخصصة' },
    { id: 9, image: '/images/img8.jpg',  category: 'doors-windows',  titleEn: 'Entrance Door',           titleAr: 'باب مدخل',                 descriptionEn: 'Decorative steel entrance door',                 descriptionAr: 'باب مدخل فولاذي زخرفي' },
    { id: 12, image: '/images/img9.jpg', category: 'doors-windows', titleEn: 'Shopfront Windows',       titleAr: 'نوافذ واجهة متجر',         descriptionEn: 'Shopfront windows with metal frames',            descriptionAr: 'نوافذ واجهة متجر بإطارات معدنية' },
    
    // 2 Railings
    { id: 4, image: '/images/img10.jpg',  category: 'railings',       titleEn: 'Balcony Railing',         titleAr: 'درابزين شرفة',           descriptionEn: 'Elegant and safe balcony railing system',       descriptionAr: 'نظام درابزين شرفة أنيق وآمن' },
    { id: 7, image: '/images/img11.jpg',  category: 'railings',       titleEn: 'Stair Railing',           titleAr: 'درابزين درج',             descriptionEn: 'Staircase safety railing with modern design',   descriptionAr: 'درابزين درج آمن بتصميم عصري' },
    
    // 1 Others
    { id: 10, image: '/images/img12.jpg', category: 'others',        titleEn: 'Custom Metalwork',        titleAr: 'أعمال معدنية مخصصة',        descriptionEn: 'Specialized custom metal fabrication',           descriptionAr: 'تصنيع معادن مخصصة ومتخصصة' },
  ];

  // Filter projects based on active filter
  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  };
  
  const filteredProjects = getFilteredProjects();


  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className={`section-title ${isArabic ? 'font-cairo' : 'font-sans'}`}>
          {isArabic ? 'معرض أعمالنا' : 'Our Portfolio'}
        </h2>
        <p className={`section-subtitle ${isArabic ? 'font-cairo' : 'font-sans'}`}>
          {isArabic 
            ? 'مجموعة مختارة من مشاريعنا المتميزة'
            : 'A selection of our finest projects'
          }
        </p>

        <div className="portfolio-filters" style={{ position: 'relative', zIndex: 100 }}>
          {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`portfolio-filter ${activeFilter === filter.id ? 'active' : ''} ${
                  isArabic ? 'font-cairo' : 'font-sans'
                }`}
                data-filter={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
                aria-label={`Filter by ${isArabic ? filter.labelAr : filter.labelEn}`}
                style={{
                  backgroundColor: activeFilter === filter.id ? '#ff6b35' : 'transparent',
                  borderColor: activeFilter === filter.id ? '#ff6b35' : '#333',
                  color: activeFilter === filter.id ? 'white' : '#ccc',
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                  position: 'relative',
                  zIndex: 101,
                  padding: '12px 24px',
                  border: '2px solid',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease'
                }}
              >
              {isArabic ? filter.labelAr : filter.labelEn}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`portfolio-item ${project.category}`}
              data-category={project.category}
              data-project-id={project.id}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeIn 0.5s ease-in-out forwards'
              }}
            >
              <div className="portfolio-image">
                <Image 
                  src={project.image || '/images/placeholder.jpg'}
                  alt={isArabic ? project.titleAr : project.titleEn}
                  width={350}
                  height={350}
                  className="portfolio-img"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  priority={index < 4}
                  onError={() => {
                    // Handle error by showing placeholder
                    const placeholder = document.querySelector(`[data-project-id="${project.id}"] .portfolio-placeholder`) as HTMLElement;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                />
                <div className="portfolio-placeholder" style={{ display: 'none' }}>
                  <div className="placeholder-content">
                    <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                      {isArabic ? 'صورة المشروع' : 'Project Image'}
                    </p>
                  </div>
                </div>
                <div 
                  className="portfolio-overlay" 
                  onClick={() => openLightbox(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(project);
                    }
                  }}
                  aria-label={`Open ${isArabic ? project.titleAr : project.titleEn} in lightbox`}
                >
                  <div className="portfolio-content">
                    <div className="fullscreen-icon">
                      <Maximize2 />
                    </div>
                    <h3 className={isArabic ? 'font-cairo' : 'font-sans'}>
                      {isArabic ? project.titleAr : project.titleEn}
                    </h3>
                    <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                      {isArabic ? project.descriptionAr : project.descriptionEn}
                    </p>
                    <button className={`btn-secondary ${isArabic ? 'font-cairo' : 'font-sans'}`}>
                      {isArabic ? 'عرض بالحجم الكامل' : 'View Fullscreen'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Lightbox 
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        project={selectedProject}
      />
    </section>
  );
}