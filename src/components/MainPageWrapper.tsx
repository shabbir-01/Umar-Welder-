'use client';

import React, { useEffect } from 'react';
import { Navigation } from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/ui/Footer';
import { useScriptFunctionality } from '@/hooks/useScriptFunctionality';
import { testInteractiveComponents, testSmoothScrolling, testPortfolioFilter } from '@/utils/interactionTest';

export function MainPageWrapper() {
  // Initialize all interactive functionality
  useScriptFunctionality();
  
  // Add test utilities to window object for debugging (only in development)
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // Make test functions available globally for debugging
      (window as any).testInteractiveComponents = testInteractiveComponents;
      (window as any).testSmoothScrolling = testSmoothScrolling;
      (window as any).testPortfolioFilter = testPortfolioFilter;
      
      // Run initial test after page loads
      setTimeout(() => {
        console.log('🚀 Running initial interactive components test...');
        try {
          testInteractiveComponents();
        } catch (error) {
          console.warn('⚠️ Some components may still be loading. This is normal.');
        }
      }, 3000);
    }
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
