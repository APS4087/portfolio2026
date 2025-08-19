'use client';

import React from 'react';
import MobileLayout from "@/components/layout/MobileLayout";
import DesktopLayout from "@/components/layout/DesktopLayout";
import { useTheme } from "@/contexts/ThemeContext";
import { CONTACT_INFO } from '@/constants/data';

export default function Home() {
  const { isDarkMode } = useTheme();

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
    <div className={`h-screen p-1 sm:p-1.5 lg:p-2 xl:p-3 2xl:p-4 overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-[#F5F5F7]'}`}>
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
