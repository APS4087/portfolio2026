'use client';

import React from 'react';
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

interface HeroSectionProps {
  className?: string;
  title?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  className = "",
  title = "IT Infrastructure & Cloud Solutions Expert"
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`col-span-6 lg:col-span-5 xl:col-span-5 2xl:col-span-5 row-start-2 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 sm:p-4 lg:p-6 xl:p-8 2xl:p-12 relative flex flex-col min-h-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-gray-2'} ${className}`}>
      
      {/* Header with icon */}
      <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
          <span className={`nothing-subtitle text-[clamp(9px,1.1vw,12px)] ${isDarkMode ? 'text-[#cccccc]' : 'text-[#6B7280]'}`}>
            PROFESSIONAL
          </span>
        </div>
        <div className={`w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex items-center justify-center ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-tertiary'}`}>
          <Image
            src="/images/flower-icon.svg"
            alt="Professional icon"
            width={119}
            height={119}
            className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] xl:w-[18px] xl:h-[18px] 2xl:w-[20px] 2xl:h-[20px] opacity-60"
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col justify-between min-h-0">
        
        {/* Title and subtitle */}
        <div className="space-y-2 sm:space-y-3 lg:space-y-4 overflow-hidden">
          <h1 className="text-dot-matrix text-[clamp(20px,3.5vw,28px)] leading-tight">
            {title}
          </h1>
          
          <div className="space-y-2 overflow-hidden">
            <p className={`nothing-mono text-[clamp(13px,1.8vw,16px)] font-medium leading-relaxed ${isDarkMode ? 'text-[#cccccc]' : 'text-[#374151]'}`}>
              Supporting Global Maritime Operations
            </p>
            <p className={`nothing-mono text-[clamp(12px,1.6vw,15px)] leading-relaxed ${isDarkMode ? 'text-[#999999]' : 'text-[#6B7280]'}`}>
              Enterprise IT • Cloud Infrastructure • Modern Development
            </p>
          </div>
        </div>

        {/* Bottom section with current role */}
        <div className={`mt-2 sm:mt-3 lg:mt-4 pt-2 sm:pt-3 lg:pt-4 border-t overflow-hidden ${isDarkMode ? 'border-[#404040]' : 'border-[#E5E5E7]'}`}>
          <div className="flex items-center justify-between gap-2 min-w-0">
            <div className="flex-1 min-w-0">
              <p className={`nothing-subtitle text-[clamp(8px,1vw,10px)] mb-1 truncate ${isDarkMode ? 'text-[#808080]' : 'text-[#6B7280]'}`}>
                CURRENT ROLE
              </p>
              <p className={`nothing-mono text-[clamp(10px,1.2vw,14px)] text-semibold truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>
                IT Administrator
              </p>
              <p className={`nothing-mono text-[clamp(8px,1vw,12px)] truncate ${isDarkMode ? 'text-[#999999]' : 'text-[#374151]'}`}>
                Maxwell Ship Management
              </p>
            </div>
            
            <div className="text-right flex-shrink-0">
              <p className={`nothing-subtitle text-[clamp(8px,1vw,10px)] mb-1 truncate ${isDarkMode ? 'text-[#808080]' : 'text-[#6B7280]'}`}>
                LOCATION
              </p>
              <p className={`nothing-mono text-[clamp(10px,1.2vw,14px)] text-semibold truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>
                Singapore
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
