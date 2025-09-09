// Test utility to verify all interactive components are working
export const testInteractiveComponents = () => {
  console.log('🔍 Testing Interactive Components...');
  
  // Test 1: Check if all sections exist
  const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];
  const missingSections: string[] = [];
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (!section) {
      missingSections.push(sectionId);
    } else {
      console.log(`✅ Section "${sectionId}" found`);
    }
  });
  
  if (missingSections.length > 0) {
    console.error('❌ Missing sections:', missingSections);
  }
  
  // Test 2: Check navigation links
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  console.log(`📍 Found ${navLinks.length} navigation links`);
  
  navLinks.forEach(link => {
    const target = link.getAttribute('data-section');
    const targetElement = document.getElementById(target || '');
    if (!targetElement) {
      console.error(`❌ Navigation link "${target}" has no matching section`);
    } else {
      console.log(`✅ Navigation link "${target}" → section found`);
    }
  });
  
  // Test 3: Check footer links
  const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
  console.log(`🔗 Found ${footerLinks.length} footer links`);
  
  // Test 4: Check Hero buttons
  const heroButtons = document.querySelectorAll('.hero .btn-primary, .hero .btn-secondary');
  console.log(`🎯 Found ${heroButtons.length} hero buttons`);
  
  // Test 5: Check Portfolio lightbox
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  console.log(`🖼️ Found ${portfolioItems.length} portfolio items`);
  
  // Test 6: Check Portfolio filters
  const portfolioFilters = document.querySelectorAll('.portfolio-filter');
  console.log(`🎛️ Found ${portfolioFilters.length} portfolio filters`);
  
  // Test 7: Check Google Maps
  const googleMap = document.querySelector('.google-map iframe');
  if (googleMap) {
    console.log('✅ Google Maps iframe found');
  } else {
    console.error('❌ Google Maps iframe not found');
  }
  
  // Test 8: Check map action links
  const mapActions = document.querySelectorAll('.map-actions a');
  console.log(`🗺️ Found ${mapActions.length} map action links`);
  
  // Test 9: Check language toggle
  const languageToggle = document.querySelector('.language-toggle');
  const languageToggleByTestId = document.querySelector('[data-testid="language-toggle"]');
  if (languageToggle || languageToggleByTestId) {
    console.log('✅ Language toggle found');
  } else {
    console.warn('⚠️ Language toggle not found during initial test - checking again...');
    // Try to find it after a delay since React components load dynamically
    setTimeout(() => {
      const retryToggle = document.querySelector('.language-toggle, [data-testid="language-toggle"]');
      if (retryToggle) {
        console.log('✅ Language toggle found on retry - component loaded successfully!');
      } else {
        console.warn('⚠️ Language toggle still not found - this may be normal if components are still loading');
        // One more try after a longer delay
        setTimeout(() => {
          const finalRetry = document.querySelector('.language-toggle, [data-testid="language-toggle"]');
          if (finalRetry) {
            console.log('✅ Language toggle found on final retry!');
          } else {
            console.info('📝 Note: Language toggle component may be loading. Check manually if language switching works.');
          }
        }, 2000);
      }
    }, 1000);
  }
  
  // Test 10: Check mobile menu
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.nav-menu.mobile');
  if (hamburger && mobileMenu) {
    console.log('✅ Mobile menu components found');
  } else {
    console.error('❌ Mobile menu components missing');
  }
  
  console.log('🏁 Interactive components test completed!');
  
  return {
    sectionsFound: sections.length - missingSections.length,
    totalSections: sections.length,
    navLinksFound: navLinks.length,
    heroButtonsFound: heroButtons.length,
    portfolioItemsFound: portfolioItems.length,
    portfolioFiltersFound: portfolioFilters.length,
    googleMapFound: !!googleMap,
    mapActionsFound: mapActions.length,
    languageToggleFound: !!(languageToggle || languageToggleByTestId),
    mobileMenuFound: !!(hamburger && mobileMenu),
    missingSections
  };
};

// Function to test smooth scrolling
export const testSmoothScrolling = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    console.log(`📍 Scrolled to ${sectionId}`);
    return true;
  } else {
    console.error(`❌ Section ${sectionId} not found for scrolling`);
    return false;
  }
};

// Function to test portfolio filtering
export const testPortfolioFilter = (filterValue: string) => {
  const filterButton = document.querySelector(`[data-filter="${filterValue}"]`) as HTMLElement;
  if (filterButton) {
    filterButton.click();
    console.log(`🎛️ Applied filter: ${filterValue}`);
    return true;
  } else {
    console.error(`❌ Filter button "${filterValue}" not found`);
    return false;
  }
};
