'use client';

import React from 'react';
import Image from "next/image";

interface AboutSectionProps {
  className?: string;
  description?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ 
  className = "",
  description = "Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally."
}) => {
  return (
    <div className={`col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 bg-white border border-[#E5E5E7] rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col ${className}`}>
      <div className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[30px] xl:h-[30px] 2xl:w-[36px] 2xl:h-[36px] bg-[#007AFF] rounded-full flex items-center justify-center mb-2 lg:mb-3 xl:mb-3 2xl:mb-4 flex-shrink-0">
        <Image
          src="/images/circle-icon.svg"
          alt="Circle icon"
          width={38}
          height={38}
          className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[26px] xl:h-[26px] 2xl:w-[30px] 2xl:h-[30px] brightness-0 invert"
        />
      </div>
      <div className="flex-1">
        <p className="text-[#6E6E73] font-light text-[8px] sm:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] leading-[1.4] break-words hyphens-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
