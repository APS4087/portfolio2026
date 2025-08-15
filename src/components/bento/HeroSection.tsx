'use client';

import React from 'react';
import Image from "next/image";

interface HeroSectionProps {
  className?: string;
  title?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  className = "",
  title = "Artist Redefining Architecture with AI-Driven Design"
}) => {
  return (
    <div className={`col-span-6 lg:col-span-5 xl:col-span-5 2xl:col-span-5 bg-white border border-[#E5E5E7] rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 lg:p-4 xl:p-5 2xl:p-8 relative flex flex-col justify-end ${className}`}>
      <div className="absolute top-2 right-2 lg:top-3 lg:right-3 xl:top-4 xl:right-4 2xl:top-6 2xl:right-6 z-10">
        <Image
          src="/images/flower-icon.svg"
          alt="Flower icon"
          width={119}
          height={119}
          className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]"
        />
      </div>
      <div className="pr-8 sm:pr-10 lg:pr-16 xl:pr-20 2xl:pr-24">
        <h1 className="text-[#1D1D1F] font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[32px] leading-[1.1] break-words hyphens-auto">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
