'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

interface AnalyticsProps {
  gaId?: string;
}

export function Analytics({ gaId }: AnalyticsProps) {
  useEffect(() => {
    // Track page views
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && window.gtag && gaId) {
        window.gtag('config', gaId, {
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    };

    handleRouteChange();
  }, [gaId]);

  // Don't render in development
  if (process.env.NODE_ENV === 'development' || !gaId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_location: window.location.href,
              page_title: document.title,
            });
          `,
        }}
      />
    </>
  );
}
