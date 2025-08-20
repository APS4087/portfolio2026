'use client';

import React from 'react';
import { Search, Command } from 'lucide-react';
import { PERSONAL_INFO, NAVIGATION_ITEMS } from '@/constants/data';
import { useTheme } from '@/contexts/ThemeContext';
import { useSpotlight } from '@/hooks/use-spotlight';

interface HeaderProps {
  className?: string;
  name?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  className = "",
  name = PERSONAL_INFO.name
}) => {
  const { isDarkMode } = useTheme();
  const { open } = useSpotlight();

  return (
    <header className={`col-span-12 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 lg:p-4 xl:p-5 2xl:p-8 flex justify-between items-center min-h-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-[#E5E5E7]'} ${className}`}>
      <div className="nothing-hero text-[#1D1D1F] text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] break-words min-w-0 flex-shrink-0 flex items-baseline">
        <span className="text-dot-matrix-static">{name.split(' ')[0].toUpperCase()}</span>
        <span className={`nothing-hero ml-1 ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>{name.split(' ').slice(1).join(' ').toUpperCase()}</span>
      </div>
      <nav className="flex gap-4 lg:gap-8 xl:gap-10 2xl:gap-16 flex-shrink-0">
        {NAVIGATION_ITEMS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`nothing-subtitle text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] hover:text-[#007AFF] transition-colors whitespace-nowrap ${isDarkMode ? 'text-[#999999]' : 'text-[#6E6E73]'}`}
          >
            {item.name}
          </a>
        ))}
      </nav>
      <button 
        onClick={open}
        className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}
        aria-label="Search (Ctrl+K)"
      >
        <Search className="h-4 w-4" />
        <span className="text-xs font-mono hidden xl:inline">
          {navigator.platform.includes('Mac') ? '⌘K' : 'Ctrl K'}
        </span>
      </button>
    </header>
  );
};

export default Header;
