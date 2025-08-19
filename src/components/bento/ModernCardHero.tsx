'use client';

import React from 'react';

interface ModernCardHeroProps {
  className?: string;
}

const ModernCardHero: React.FC<ModernCardHeroProps> = ({ 
  className = ""
}) => {
  return (
    <div className={`col-span-6 lg:col-span-5 xl:col-span-5 2xl:col-span-5 bg-white border border-gray-2 rounded-[20px] lg:rounded-[24px] xl:rounded-[28px] 2xl:rounded-[32px] overflow-hidden ${className}`}>
      
      {/* Header stripe */}
      <div className="bg-gradient-to-r from-accent to-accent/80 h-2"></div>
      
      {/* Main content */}
      <div className="p-8 lg:p-10 xl:p-12 2xl:p-14">
        
        {/* Name and title */}
        <div className="mb-8">
          <h1 className="text-title-large font-display text-bold text-foreground mb-3">
            Aung Pyae (Bill) Soe
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-accent/10 text-accent text-caption-1 font-mono text-semibold px-3 py-1 rounded-full">
              IT ADMINISTRATOR
            </span>
            <span className="bg-gray-1 text-tertiary text-caption-1 font-mono text-semibold px-3 py-1 rounded-full">
              FULL STACK DEVELOPER
            </span>
          </div>
          
          <p className="text-callout font-sans text-regular text-secondary">
            Maxwell Ship Management • Singapore
          </p>
        </div>

        {/* Key value proposition */}
        <div className="mb-8">
          <p className="text-body-large font-sans text-regular text-foreground text-balance mb-4">
            Specializing in enterprise IT infrastructure and modern web development for global maritime operations.
          </p>
          
          <p className="text-body font-sans text-regular text-secondary text-balance">
            Expert in Microsoft 365, network security, cloud services, and building scalable React applications.
          </p>
        </div>

        {/* Stats/highlights */}
        <div className="grid grid-cols-3 gap-6 py-6 border-t border-gray-2">
          <div className="text-center">
            <p className="text-title-2 font-display text-bold text-accent mb-1">2+</p>
            <p className="text-caption-1 font-mono text-medium text-tertiary">YEARS EXPERIENCE</p>
          </div>
          
          <div className="text-center">
            <p className="text-title-2 font-display text-bold text-accent mb-1">3</p>
            <p className="text-caption-1 font-mono text-medium text-tertiary">MAJOR PROJECTS</p>
          </div>
          
          <div className="text-center">
            <p className="text-title-2 font-display text-bold text-accent mb-1">100+</p>
            <p className="text-caption-1 font-mono text-medium text-tertiary">USERS SERVED</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ModernCardHero;
