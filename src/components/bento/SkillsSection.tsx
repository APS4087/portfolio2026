'use client';

import React from 'react';
import { useTheme } from "@/contexts/ThemeContext";

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
  { name: "Microsoft 365", id: "microsoft-365" },
  { name: "Network Admin", id: "network-admin" },
  { name: "Cloud Computing", id: "cloud-computing" },
  { name: "Cybersecurity", id: "cybersecurity" },
  { name: "React", id: "react" },
  { name: "Next.js", id: "nextjs" },
  { name: "TypeScript", id: "typescript" },
  { name: "Python", id: "python" },
  { name: "Shell Scripting", id: "shell-scripting" },
  { name: "Docker", id: "docker" },
  { name: "AWS", id: "aws" },
  { name: "AI/ML", id: "ai-ml" }
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  className = "", 
  skills = defaultSkills,
  title = "IT & Development Skills"
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`col-span-6 lg:col-span-5 xl:col-span-5 2xl:col-span-5 row-start-3 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col min-h-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-[#F5F5F7] border-[#E5E5E7]'} ${className}`}>
      <h3 className={`nothing-subtitle text-[clamp(10px,1.2vw,14px)] mb-1 flex-shrink-0 truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-1 flex-1 content-start overflow-hidden">
        {skills.slice(0, 8).map((skill) => (
          <span 
            key={skill.id}
            className={`nothing-mono text-[clamp(8px,1vw,12px)] rounded-full px-2 py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1 whitespace-nowrap flex-shrink-0 text-interactive transition-all duration-300 border border-transparent hover:border-accent/20 ${isDarkMode ? 'text-[#ffffff] bg-[#2a2a2a]' : 'text-[#1D1D1F] bg-white'}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
