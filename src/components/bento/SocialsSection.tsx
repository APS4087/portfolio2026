'use client';

import React from 'react';
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

interface SocialLink {
  name: string;
  url?: string;
  id: string;
}

interface SocialsSectionProps {
  className?: string;
  socialLinks?: SocialLink[];
  onSocialClick?: (url?: string, socialName?: string) => void;
}

const defaultSocialLinks: SocialLink[] = [
  { name: "INSTAGRAM", url: "https://instagram.com", id: "instagram" },
  { name: "TWITTER", url: "https://twitter.com", id: "twitter" },
  { name: "LINKEDIN", url: "https://linkedin.com", id: "linkedin" }
];

const SocialsSection: React.FC<SocialsSectionProps> = ({ 
  className = "", 
  socialLinks = defaultSocialLinks,
  onSocialClick 
}) => {
  const { isDarkMode } = useTheme();
  const handleSocialClick = (social: SocialLink) => {
    if (onSocialClick) {
      onSocialClick(social.url, social.name);
    } else if (social.url) {
      window.open(social.url, '_blank');
    }
  };

  return (
    <div className={`col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 row-start-4 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col justify-center min-h-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-[#E5E5E7]'} ${className}`}>
      <h3 className={`nothing-subtitle text-[clamp(10px,1.2vw,14px)] mb-1 sm:mb-2 lg:mb-3 text-center truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>
        SOCIALS
      </h3>
      <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3 flex-1 justify-center overflow-hidden">
        {socialLinks.map((social) => (
          <button
            key={social.name}
            onClick={() => handleSocialClick(social)}
            className={`nothing-mono text-[clamp(10px,1.3vw,16px)] text-left text-interactive hover:text-accent transition-colors duration-300 ease-nothing truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}
          >
            {social.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialsSection;
