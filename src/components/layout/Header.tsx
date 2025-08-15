'use client';

import React from 'react';
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '@/constants/data';

interface HeaderProps {
  className?: string;
  name?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  className = "",
  name = PERSONAL_INFO.name
}) => {
  return (
    <header className={`col-span-12 bg-white border border-[#E5E5E7] rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 lg:p-4 xl:p-5 2xl:p-8 flex justify-between items-center min-h-0 ${className}`}>
      <div className="text-[#1D1D1F] font-light text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] uppercase tracking-wide break-words min-w-0 flex-shrink-0">
        {name.toUpperCase()}
      </div>
      <nav className="flex gap-4 lg:gap-8 xl:gap-10 2xl:gap-16 flex-shrink-0">
        {NAVIGATION_ITEMS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[#6E6E73] font-light text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] uppercase hover:text-[#007AFF] transition-colors whitespace-nowrap"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
