'use client';

import React from 'react';
import { Navigation } from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/ui/Footer';
import { useScriptFunctionality } from '@/hooks/useScriptFunctionality';

export function MainPageWrapper() {
  // Initialize all interactive functionality
  useScriptFunctionality();

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
