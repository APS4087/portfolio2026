'use client';

import React from 'react';

interface Skill {
  name: string;
  id: string;
}

interface SkillsSectionProps {
  className?: string;
  skills?: Skill[];
  title?: string;
}

const defaultSkills: Skill[] = [
  { name: "Figma", id: "figma" },
  { name: "Blender", id: "blender" },
  { name: "AI/ML", id: "ai-ml" },
  { name: "3D Design", id: "3d-design" },
  { name: "Architecture", id: "architecture" },
  { name: "Creative Coding", id: "creative-coding" }
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  className = "", 
  skills = defaultSkills,
  title = "Skills & Tools"
}) => {
  return (
    <div className={`col-span-6 lg:col-span-5 xl:col-span-5 2xl:col-span-5 bg-[#F5F5F7] border border-[#E5E5E7] rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col ${className}`}>
      <h3 className="text-[#1D1D1F] font-medium text-[10px] sm:text-[11px] lg:text-[13px] xl:text-[15px] 2xl:text-[18px] mb-2 lg:mb-3 xl:mb-3 2xl:mb-4 flex-shrink-0">
        {title}
      </h3>
      <div className="flex flex-wrap gap-1 lg:gap-2 xl:gap-2 2xl:gap-3 flex-1 content-start">
        {skills.map((skill) => (
          <span 
            key={skill.id}
            className="text-[#1D1D1F] font-light text-[8px] sm:text-[9px] lg:text-[9px] xl:text-[10px] 2xl:text-[12px] bg-white rounded-full px-2 py-1 lg:px-2 lg:py-1 xl:px-3 xl:py-1 2xl:px-4 2xl:py-2 whitespace-nowrap flex-shrink-0"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
