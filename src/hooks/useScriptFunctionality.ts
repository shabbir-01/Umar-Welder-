'use client';

import { useEffect } from 'react';

export const useScriptFunctionality = () => {
  useEffect(() => {
    // Smooth scrolling for nav links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('data-section');
      
      if (href) {
        e.preventDefault();
        const element = document.getElementById(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add click listeners to nav links
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-menu.mobile');
    
    const toggleMobileMenu = () => {
      hamburger?.classList.toggle('active');
      mobileMenu?.classList.toggle('active');
    };

    hamburger?.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking nav links
    const mobileNavLinks = document.querySelectorAll('.nav-menu.mobile .nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        mobileMenu?.classList.remove('active');
      });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add scrolled class when scrolled down
      if (scrollTop > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
      
      // Hide/show navbar on scroll
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar?.classList.add('hidden');
      } else {
        // Scrolling up
        navbar?.classList.remove('hidden');
      }
      
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    // Portfolio filtering
    const portfolioFilters = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    const filterPortfolio = (filter: string) => {
      portfolioItems.forEach(item => {
        const itemElement = item as HTMLElement;
        if (filter === 'all' || itemElement.classList.contains(filter)) {
          itemElement.style.display = 'block';
          setTimeout(() => {
            itemElement.classList.add('show');
          }, 100);
        } else {
          itemElement.classList.remove('show');
          setTimeout(() => {
            itemElement.style.display = 'none';
          }, 300);
        }
      });
      
      // Update active filter
      portfolioFilters.forEach(btn => btn.classList.remove('active'));
      document.querySelector(`[data-filter="${filter}"]`)?.classList.add('active');
    };

    portfolioFilters.forEach(filter => {
      filter.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const filterValue = target.getAttribute('data-filter');
        if (filterValue) {
          filterPortfolio(filterValue);
        }
      });
    });

    // Service cards animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));

    // Observe portfolio items
    portfolioItems.forEach(item => observer.observe(item));

    // Observe about features
    const aboutFeatures = document.querySelectorAll('.about-feature');
    aboutFeatures.forEach(feature => observer.observe(feature));

    // Portfolio lightbox functionality (handled by React components)
    // Contact map interactions (handled by anchor tags)

    // Add loading animation to page
    const addLoadingAnimation = () => {
      const body = document.body;
      body.classList.add('loading');
      
      setTimeout(() => {
        body.classList.remove('loading');
        body.classList.add('loaded');
      }, 1000);
    };

    // Run loading animation
    addLoadingAnimation();

    // Hero sparks animation
    const createSparks = () => {
      const heroSection = document.querySelector('.hero');
      if (!heroSection) return;

      for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.left = Math.random() * 100 + '%';
        spark.style.top = Math.random() * 100 + '%';
        spark.style.animationDelay = Math.random() * 3 + 's';
        heroSection.appendChild(spark);
      }
    };

    createSparks();

    // Cleanup function
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      
      hamburger?.removeEventListener('click', toggleMobileMenu);
      
      mobileNavLinks.forEach(link => {
        link.removeEventListener('click', () => {
          hamburger?.classList.remove('active');
          mobileMenu?.classList.remove('active');
        });
      });
      
      window.removeEventListener('scroll', handleScroll);
      
      portfolioFilters.forEach(filter => {
        filter.removeEventListener('click', () => {});
      });
      
      observer.disconnect();
    };
  }, []);
};
