'use client';

import React from 'react';
import { Building2 } from 'lucide-react';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export function Loading({ message = 'Loading...', fullScreen = false }: LoadingProps) {
  return (
    <div className={`loading-container ${fullScreen ? 'loading-fullscreen' : ''}`}>
      <div className="loading-content">
        <div className="loading-icon">
          <Building2 className="w-12 h-12 text-orange-500" />
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <p className="loading-message">{message}</p>
      </div>
    </div>
  );
}
