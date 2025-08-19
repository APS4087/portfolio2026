'use client';

import React from 'react';
import { useTheme } from "@/contexts/ThemeContext";

interface AvailabilitySectionProps {
  className?: string;
  status?: 'available' | 'busy' | 'unavailable';
  statusText?: string;
  location?: string;
}

const AvailabilitySection: React.FC<AvailabilitySectionProps> = ({ 
  className = "",
  status = 'available',
  statusText = "Freelance Work",
  location = "Los Angeles, CA"
}) => {
  const { isDarkMode } = useTheme();
  
  const getStatusColor = () => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'busy':
        return 'bg-yellow-500';
      case 'unavailable':
        return 'bg-red-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className={`col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 row-start-3 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col justify-center items-center text-center min-h-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-[#E5E5E7]'} ${className}`}>
      <div className={`w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[30px] xl:h-[30px] 2xl:w-[36px] 2xl:h-[36px] rounded-full flex items-center justify-center mb-2 lg:mb-2 xl:mb-3 2xl:mb-4 flex-shrink-0 ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#F5F5F7]'}`}>
        <div className={`w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] lg:w-[10px] lg:h-[10px] xl:w-[12px] xl:h-[12px] 2xl:w-[16px] 2xl:h-[16px] ${getStatusColor()} rounded-full`}></div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center space-y-1">
        <p className={`nothing-mono text-[8px] sm:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[12px] break-words text-center ${isDarkMode ? 'text-[#999999]' : 'text-[#6E6E73]'}`}>
          Available for
        </p>
        <p className={`nothing-mono text-medium text-[9px] sm:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[16px] break-words text-center ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>
          {statusText}
        </p>
        <p className={`nothing-mono text-[7px] sm:text-[8px] lg:text-[8px] xl:text-[9px] 2xl:text-[11px] break-words text-center ${isDarkMode ? 'text-[#999999]' : 'text-[#6E6E73]'}`}>
          {location}
        </p>
      </div>
    </div>
  );
};

export default AvailabilitySection;
