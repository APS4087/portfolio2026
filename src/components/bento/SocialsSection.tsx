'use client';

import React from 'react';

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
  const handleSocialClick = (social: SocialLink) => {
    if (onSocialClick) {
      onSocialClick(social.url, social.name);
    } else if (social.url) {
      window.open(social.url, '_blank');
    }
  };

  return (
    <div className={`col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 bg-white border border-[#E5E5E7] rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 lg:p-4 xl:p-5 2xl:p-8 flex items-center ${className}`}>
      <div className="flex justify-between items-center w-full gap-2">
        {socialLinks.map((social) => (
          <span 
            key={social.id}
            className={`text-[#6E6E73] font-light text-[8px] sm:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] uppercase tracking-wide break-words text-center flex-1 ${social.url ? 'cursor-pointer hover:text-[#007AFF] transition-colors' : ''}`}
            onClick={() => handleSocialClick(social)}
          >
            {social.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SocialsSection;
