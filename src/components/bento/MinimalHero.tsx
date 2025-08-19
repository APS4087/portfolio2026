'use client';

import React from 'react';

interface MinimalHeroProps {
  className?: string;
}

const MinimalHero: React.FC<MinimalHeroProps> = ({ 
  className = ""
}) => {
  return (
    <div className={`col-span-6 lg:col-span-5 xl:col-span-5 2xl:col-span-5 bg-white border border-gray-2 rounded-[16px] lg:rounded-[20px] xl:rounded-[24px] 2xl:rounded-[28px] p-8 lg:p-12 xl:p-16 2xl:p-20 relative ${className}`}>
      
      {/* Simple, clean layout */}
      <div className="space-y-12">
        
        {/* Main identity */}
        <div className="space-y-6">
          <div>
            <h1 className="text-display-large font-display text-bold text-foreground mb-2">
              Bill Soe
            </h1>
            <p className="text-title-2 font-display text-medium text-secondary">
              IT Administrator & Developer
            </p>
          </div>
          
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Core focus */}
        <div className="space-y-4">
          <p className="text-body-large font-sans text-regular text-foreground text-balance">
            Bridging enterprise IT operations with modern development practices.
          </p>
          
          <p className="text-body font-sans text-regular text-secondary text-balance">
            Currently managing global maritime IT infrastructure at Maxwell Ship Management while building scalable web applications with React and cloud technologies.
          </p>
        </div>

        {/* Expertise areas */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <p className="text-caption-1 font-mono text-semibold text-tertiary mb-1">INFRASTRUCTURE</p>
            <p className="text-callout font-sans text-medium text-foreground">Microsoft 365, Networks, Cloud</p>
          </div>
          
          <div>
            <p className="text-caption-1 font-mono text-semibold text-tertiary mb-1">DEVELOPMENT</p>
            <p className="text-callout font-sans text-medium text-foreground">React, Next.js, Full Stack</p>
          </div>
          
          <div>
            <p className="text-caption-1 font-mono text-semibold text-tertiary mb-1">INDUSTRY</p>
            <p className="text-callout font-sans text-medium text-foreground">Maritime, Legal Tech, AI</p>
          </div>
          
          <div>
            <p className="text-caption-1 font-mono text-semibold text-tertiary mb-1">LOCATION</p>
            <p className="text-callout font-sans text-medium text-foreground">Singapore</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MinimalHero;
