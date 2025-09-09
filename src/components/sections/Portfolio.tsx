'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Maximize2 } from 'lucide-react';
import { Lightbox } from '@/components/ui/Lightbox';

export function Portfolio() {
  const { isArabic } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filters = [
    { id: 'all', labelEn: 'All', labelAr: 'الكل' },
    { id: 'sheds', labelEn: 'Sheds', labelAr: 'مظلات' },
    { id: 'doors-windows', labelEn: 'Doors & Windows', labelAr: 'أبواب ونوافذ' },
    { id: 'railings', labelEn: 'Railings', labelAr: 'درابزين' },
    { id: 'others', labelEn: 'Others', labelAr: 'أخرى' },
  ];

  const projects = [
    // img2 - img12 mapped to categories
    { id: 2, image: '/images/img2.jpg',  category: 'sheds',          titleEn: 'Custom Shed Build',        titleAr: 'بناء مظلة مخصصة',        descriptionEn: 'Durable shed structure with reinforced frame', descriptionAr: 'هيكل مظلة متين بإطار معزز' },
    { id: 3, image: '/images/img3.jpg',  category: 'doors-windows',  titleEn: 'Steel Door Install',      titleAr: 'تركيب باب فولاذي',        descriptionEn: 'Security steel door with premium finish',       descriptionAr: 'باب أمان فولاذي بلمسة نهائية ممتازة' },
    { id: 4, image: '/images/img4.jpg',  category: 'railings',       titleEn: 'Balcony Railing',         titleAr: 'درابزين شرفة',           descriptionEn: 'Elegant and safe balcony railing system',       descriptionAr: 'نظام درابزين شرفة أنيق وآمن' },
    { id: 5, image: '/images/img5.jpg',  category: 'sheds',          titleEn: 'Carport Structure',       titleAr: 'موقف سيارات مظلل',        descriptionEn: 'Metal carport designed for durability',         descriptionAr: 'موقف سيارات معدني مصمم للمتانة' },
    { id: 6, image: '/images/img6.jpg',  category: 'doors-windows',  titleEn: 'Window Frame Set',        titleAr: 'مجموعة إطارات نوافذ',     descriptionEn: 'Custom aluminum window framing',                 descriptionAr: 'إطارات نوافذ ألمنيوم مخصصة' },
    { id: 7, image: '/images/img7.jpg',  category: 'railings',       titleEn: 'Stair Railing',           titleAr: 'درابزين درج',             descriptionEn: 'Staircase safety railing with modern design',   descriptionAr: 'درابزين درج آمن بتصميم عصري' },
    { id: 8, image: '/images/img8.jpg',  category: 'others',         titleEn: 'Workshop Shed',           titleAr: 'مظلة ورشة',               descriptionEn: 'Spacious workshop shed with ventilation',       descriptionAr: 'مظلة ورشة فسيحة مع تهوية' },
    { id: 9, image: '/images/img9.jpg',  category: 'doors-windows',  titleEn: 'Entrance Door',           titleAr: 'باب مدخل',                 descriptionEn: 'Decorative steel entrance door',                 descriptionAr: 'باب مدخل فولاذي زخرفي' },
    { id: 10, image: '/images/img10.jpg', category: 'railings',      titleEn: 'Terrace Railing',         titleAr: 'درابزين سطح',              descriptionEn: 'Terrace railing with sturdy posts',              descriptionAr: 'درابزين سطح مع أعمدة متينة' },
    { id: 11, image: '/images/img11.jpg', category: 'others',        titleEn: 'Storage Shed',            titleAr: 'مظلة تخزين',               descriptionEn: 'Compact storage shed solution',                  descriptionAr: 'حل مظلة تخزين مدمجة' },
    { id: 12, image: '/images/img12.jpg', category: 'others',        titleEn: 'Shopfront Windows',       titleAr: 'نوافذ واجهة متجر',         descriptionEn: 'Shopfront windows with metal frames',            descriptionAr: 'نوافذ واجهة متجر بإطارات معدنية' },
  ];

  // Filter projects based on active filter
  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  };
  
  const filteredProjects = getFilteredProjects();

  const handleFilterClick = (filterId: string) => {
    console.log('Filter button clicked:', filterId);
    setActiveFilter(filterId);
  };

  const openLightbox = (project: any) => {
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
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeIn 0.5s ease-in-out forwards'
              }}
            >
              <div className="portfolio-image">
                <img 
                  src={project.image}
                  alt={isArabic ? project.titleAr : project.titleEn}
                  style={{ 
                    width: '100%', 
                    height: '350px', 
                    objectFit: 'cover', 
                    aspectRatio: '1/1',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'var(--card-bg)'
                  }}
                  onError={(e) => {
                    // Hide the img and show placeholder
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.parentElement?.querySelector('.portfolio-placeholder') as HTMLElement;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                />
                <div className="portfolio-placeholder" style={{ display: 'none' }}>
                  <div className="placeholder-content">
                    <div className="placeholder-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                    </div>
                    <p className={isArabic ? 'font-cairo' : 'font-sans'}>
                      {isArabic ? 'صورة المشروع' : 'Project Image'}
                    </p>
                  </div>
                </div>
                <div className="portfolio-overlay" onClick={() => openLightbox(project)}>
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
