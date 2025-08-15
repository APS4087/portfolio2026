'use client';

import React from 'react';
import Image from "next/image";

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
  const handleClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <div 
      className={`col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 bg-[#007AFF] rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col ${onContactClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''} ${className}`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-2 lg:mb-3 xl:mb-3 2xl:mb-4 flex-shrink-0">
        <div className="flex-1 min-w-0">
          <p className="text-white font-light text-[8px] sm:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] leading-[1.2] break-words">
            {questionText.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < questionText.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[30px] xl:h-[30px] 2xl:w-[36px] 2xl:h-[36px] bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 ml-2">
          <Image
            src="/images/arrow.svg"
            alt="Arrow"
            width={22}
            height={22}
            className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] lg:w-[14px] lg:h-[14px] xl:w-[16px] xl:h-[16px] 2xl:w-[20px] 2xl:h-[20px] brightness-0 invert"
          />
        </div>
      </div>
      <div className="flex-1 flex items-end">
        <h2 className="text-white font-medium text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] leading-[1.1] break-words hyphens-auto">
          {ctaText}
        </h2>
      </div>
    </div>
  );
};

export default ContactSection;
