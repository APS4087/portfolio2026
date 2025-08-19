'use client';

import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  type: 'current' | 'previous';
  description: string;
}

interface ExperienceSectionProps {
  className?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "IT Administrator",
    company: "Maxwell Ship Management",
    duration: "Jul 2025 - Present",
    type: "current",
    description: "Managing IT infrastructure for global maritime operations, Microsoft 365, network security, and cloud services."
  },
  {
    title: "Frontend Design Engineer Intern",
    company: "Plato Singapore",
    duration: "Jan 2025 - Apr 2025",
    type: "previous",
    description: "Engineered AI-powered legal tech interfaces, improving document processing efficiency by 40%."
  },
  {
    title: "Technical Lead & Instructor",
    company: "SIM IT Club",
    duration: "Apr 2024 - Apr 2025",
    type: "previous",
    description: "Led development of 3 web applications for non-profits, achieving 45% increase in user engagement."
  }
];

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  className = ""
}) => {
  return (
    <div className={`col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 bg-tertiary border border-gray-2 rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-foreground text-label font-display text-semibold">
          EXPERIENCE
        </h3>
        <div className="w-[16px] h-[16px] bg-accent rounded-full flex items-center justify-center">
          <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
        </div>
      </div>
      
      <div className="flex-1 space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="flex items-start justify-between mb-1">
              <div className="flex-1 min-w-0">
                <h4 className="text-foreground text-callout font-display text-semibold text-balance">
                  {exp.title}
                </h4>
                <p className="text-secondary text-footnote font-sans text-medium">
                  {exp.company}
                </p>
              </div>
              <div className={`text-caption-1 font-mono text-medium px-2 py-1 rounded-full ${
                exp.type === 'current' 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-2 text-tertiary'
              }`}>
                {exp.type === 'current' ? 'CURRENT' : exp.duration.split(' - ')[0].split(' ')[1]}
              </div>
            </div>
            
            <p className="text-secondary text-subheadline font-sans text-regular text-balance mb-2">
              {exp.description}
            </p>
            
            {index < experiences.length - 1 && (
              <div className="w-full h-[1px] bg-gray-2 mt-3"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-2">
        <div className="flex items-center justify-between">
          <p className="text-tertiary text-caption-1 font-mono text-medium">
            Bachelor of Computer Science
          </p>
          <p className="text-tertiary text-caption-1 font-mono text-medium">
            University of Wollongong
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
