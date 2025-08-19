'use client';

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
// import Image from "next/image";

type AboutSectionProps = {
  className?: string;
};

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [notifications, setNotifications] = useState(true);

  return (
    <div className={`col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 row-start-4 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col min-h-0 overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#2a2a2a]' : 'bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] border-[#E5E5E7]'} ${className}`}>
      <div className="flex items-center gap-3 mb-3 overflow-hidden">
        <div className="bg-gradient-to-br from-[#007AFF] to-[#0056CC] rounded-full w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="white"/>
          </svg>
        </div>
        <span className={`nothing-subtitle text-[clamp(11px,1.3vw,16px)] font-semibold truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>SETTINGS</span>
      </div>
      
      <div className="flex flex-col gap-2 flex-1 justify-center overflow-hidden">
        <div className={`rounded-lg p-2 border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#2a2a2a] border-[#404040]' : 'bg-white border-[#E5E5E7]'}`}>
          <label className="flex items-center justify-between cursor-pointer overflow-hidden">
            <span className={`nothing-mono text-[clamp(9px,1.1vw,12px)] truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>Dark Mode</span>
            <div className="relative flex-shrink-0">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="sr-only"
              />
              <div className={`w-8 h-5 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-[#007AFF]' : 'bg-[#E5E5E7]'}`}>
                <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-200 transform translate-y-1 ${isDarkMode ? 'translate-x-4' : 'translate-x-1'}`}></div>
              </div>
            </div>
          </label>
        </div>
        
        <div className={`rounded-lg p-2 border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#2a2a2a] border-[#404040]' : 'bg-white border-[#E5E5E7]'}`}>
          <label className="flex items-center justify-between cursor-pointer overflow-hidden">
            <span className={`nothing-mono text-[clamp(9px,1.1vw,12px)] truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>Notifications</span>
            <div className="relative flex-shrink-0">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="sr-only"
              />
              <div className={`w-8 h-5 rounded-full transition-colors duration-200 ${notifications ? 'bg-[#007AFF]' : 'bg-[#E5E5E7]'}`}>
                <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-200 transform translate-y-1 ${notifications ? 'translate-x-4' : 'translate-x-1'}`}></div>
              </div>
            </div>
          </label>
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;
