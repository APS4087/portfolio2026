'use client';

import React from 'react';

interface ProfessionalHeroProps {
  className?: string;
}

const ProfessionalHero: React.FC<ProfessionalHeroProps> = ({ 
  className = ""
}) => {
  return (
    <div className={`col-span-6 lg:col-span-5 xl:col-span-5 2xl:col-span-5 bg-gradient-to-br from-white to-gray-1 border border-gray-2 rounded-[20px] lg:rounded-[24px] xl:rounded-[28px] 2xl:rounded-[32px] p-8 lg:p-10 xl:p-12 2xl:p-16 relative overflow-hidden ${className}`}>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-caption-1 font-mono text-semibold text-accent">
              TECH PROFESSIONAL
            </span>
          </div>
          
          <h1 className="text-display font-display text-bold text-foreground text-balance mb-4">
            Aung Pyae Soe
          </h1>
          
          <p className="text-title-3 font-display text-medium text-secondary text-balance">
            IT Administrator & Developer
          </p>
        </div>

        {/* Key highlights */}
        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="group">
              <h3 className="text-headline font-display text-semibold text-foreground mb-2">
                Maritime IT Operations
              </h3>
              <p className="text-callout font-sans text-regular text-secondary text-balance">
                Managing enterprise infrastructure and Microsoft 365 for global shipping operations at Maxwell Ship Management
              </p>
            </div>
            
            <div className="group">
              <h3 className="text-headline font-display text-semibold text-foreground mb-2">
                Full Stack Development
              </h3>
              <p className="text-callout font-sans text-regular text-secondary text-balance">
                Building scalable web applications with React, Next.js, and cloud technologies for diverse industries
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-8 border-t border-gray-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div>
                <p className="text-caption-1 font-mono text-medium text-tertiary">LOCATION</p>
                <p className="text-callout font-display text-semibold text-foreground">Singapore</p>
              </div>
              <div>
                <p className="text-caption-1 font-mono text-medium text-tertiary">STATUS</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-callout font-display text-semibold text-foreground">Available</p>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-caption-1 font-mono text-medium text-tertiary">EDUCATION</p>
              <p className="text-footnote font-sans text-medium text-secondary">Computer Science, UOW</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfessionalHero;
