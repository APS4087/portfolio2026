'use client';

import React from 'react';
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

interface ContactSectionProps {
  className?: string;
  questionText?: string;
  ctaText?: string;
  onContactClick?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ 
  className = "",
  questionText = "Have some\nquestions?",
  ctaText = "Contact me",
  onContactClick
}) => {
  const { isDarkMode } = useTheme();
  
  const handleClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <div 
      className={`col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5 row-start-4 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col justify-center min-h-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#007AFF] border-[#0056CC]' : 'bg-[#007AFF] border-[#E5E5E7]'} ${onContactClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''} ${className}`}
      onClick={handleClick}
    >
      <div className="flex flex-col justify-center flex-1 overflow-hidden">
        <p className="nothing-mono text-[clamp(11px,1.4vw,16px)] text-white mb-1 truncate">
          Let&apos;s work together!
        </p>
        <p className="nothing-mono text-[clamp(9px,1.1vw,14px)] text-white/80 line-clamp-2 leading-tight">
          I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
        </p>
        <p className="nothing-mono text-[clamp(9px,1.1vw,14px)] text-white/80 mt-1 truncate">
          Drop me a line and let&apos;s create something amazing together.
        </p>
      </div>
      
      <div className="flex justify-between items-end mt-2">
        <h2 className="nothing-button text-[clamp(14px,2vw,24px)] text-white text-balance">
          {ctaText}
        </h2>
        <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px] bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
          <Image
            src="/images/arrow.svg"
            alt="Arrow"
            width={22}
            height={22}
            className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] lg:w-[14px] lg:h-[14px] brightness-0 invert"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
