'use client';

import React from 'react';
import { MobileLayout, DesktopLayout } from '@/components';
import { CONTACT_INFO } from '@/constants/data';

export default function Home() {
  // Handler functions for interactions
  const handleContactClick = () => {
    // Handle contact action (e.g., open modal, navigate to contact page, etc.)
    if (CONTACT_INFO.email) {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    }
    console.log('Contact clicked');
  };

  const handleSocialClick = (url?: string, socialName?: string) => {
    // Handle social media clicks
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    console.log(`${socialName} clicked`);
  };

  return (
    <div className="h-screen bg-[#F5F5F7] p-1 sm:p-2 lg:p-3 xl:p-4 2xl:p-5 overflow-hidden">
      <div className="w-full max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-none mx-auto h-full">
        
        {/* Mobile Layout */}
        <MobileLayout />

        {/* Desktop Layout */}
        <DesktopLayout 
          onContactClick={handleContactClick}
          onSocialClick={handleSocialClick}
        />
        
      </div>
    </div>
  );
}
