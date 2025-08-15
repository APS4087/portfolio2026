'use client';

import React from 'react';
import Image from "next/image";

interface PortraitSectionProps {
  className?: string;
  imageSrc?: string;
  altText?: string;
}

const PortraitSection: React.FC<PortraitSectionProps> = ({ 
  className = "",
  imageSrc = "/images/me.jpg",
  altText = "Julia Huang portrait"
}) => {
  return (
    <div className={`col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 bg-white border border-[#E5E5E7] rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] overflow-hidden ${className}`}>
      <div className="w-full h-full relative">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover object-[50%_15%]"
        />
      </div>
    </div>
  );
};

export default PortraitSection;
