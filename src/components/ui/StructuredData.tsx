'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function StructuredData() {
  const { isArabic } = useLanguage();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://umarwelder.sa/#business",
    "name": isArabic ? "عمر حداد" : "Umar Welder",
    "alternateName": isArabic ? "Umar Welder" : "عمر حداد",
    "description": isArabic 
      ? "خدمات لحام مهنية في الرياض. أبواب وشبابيك ومظلات وسياج ودرابزين وسلالم مخصصة وإصلاحات. متاح في الموقع وفي الورشة."
      : "Professional welding services in Riyadh. Custom doors, windows, sheds, fencing, railings, staircases, and repairs. Available onsite and in shop.",
    "url": "https://umarwelder.sa",
    "telephone": "+966-XXX-XXX-XXX",
    "email": "info@umarwelder.sa",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Khaleej",
      "addressLocality": "Riyadh",
      "postalCode": "13223",
      "addressCountry": "SA",
      "addressRegion": "Riyadh Province"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "openingHours": [
      "Mo-Su 07:00-22:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "SAR",
    "areaServed": {
      "@type": "City",
      "name": "Riyadh",
      "containedIn": {
        "@type": "Country",
        "name": "Saudi Arabia"
      }
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "24.7136",
        "longitude": "46.6753"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isArabic ? "خدمات اللحام والأعمال المعدنية" : "Welding and Metalwork Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isArabic ? "الأبواب" : "Doors",
            "description": isArabic ? "أبواب معدنية مخصصة وأبواب الأمان وإصلاح الأبواب" : "Custom metal doors, security doors, and door repairs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isArabic ? "النوافذ" : "Windows",
            "description": isArabic ? "إطارات النوافذ والشبكات وتركيب النوافذ" : "Window frames, grilles, and window installations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isArabic ? "المظلات" : "Sheds",
            "description": isArabic ? "المظلات المعدنية ومواقف السيارات والهياكل المغطاة" : "Metal sheds, carports, and covered structures"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isArabic ? "السياج" : "Fencing",
            "description": isArabic ? "سياج الأمان والسياج الزخرفي والبوابات" : "Security fencing, decorative fences, and gates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isArabic ? "الدرابزين" : "Railings",
            "description": isArabic ? "درابزين السلالم ودرابزين الشرفات والدرابزين" : "Stair railings, balcony railings, and handrails"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isArabic ? "السلالم" : "Staircases",
            "description": isArabic ? "السلالم المعدنية والسلالم الحلزونية وإصلاح السلالم" : "Metal staircases, spiral stairs, and stair repairs"
          }
        }
      ]
    },
    "knowsAbout": [
      "Welding",
      "Metalwork",
      "Custom Fabrication",
      "Steel Work",
      "Iron Work",
      "Security Systems",
      "Construction",
      "Repair Services"
    ],
    "slogan": isArabic ? "خبير لحام وأعمال معدنية مخصصة وإصلاحات" : "Expert welding, custom metalwork, and repairs",
    "founder": {
      "@type": "Person",
      "name": "Umar"
    },
    "sameAs": [
      "https://www.facebook.com/umarwelder",
      "https://www.instagram.com/umarwelder",
      "https://wa.me/966XXXXXXXXX"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
