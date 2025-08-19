'use client';

import React from 'react';
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

interface Project {
  name: string;
  image?: string;
  hasImage?: boolean;
}

interface WorkSectionProps {
  className?: string;
  projects?: Project[];
}

const defaultProjects: Project[] = [
  { name: "SnapFace AI", image: "/images/portfolio-image.png", hasImage: true },
  { name: "PetalScan", hasImage: false },
  { name: "ezScheme", hasImage: false },
  { name: "Maritime IT", hasImage: false }
];

const WorkSection: React.FC<WorkSectionProps> = ({ 
  className = "", 
  projects = defaultProjects 
}) => {
  const { isDarkMode } = useTheme();
  const [featuredProject, ...otherProjects] = projects;

  return (
    <div className={`col-span-3 lg:col-span-4 xl:col-span-4 2xl:col-span-4 row-start-2 row-span-2 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col min-h-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-[#E5E5E7]'} ${className}`}>
      <div className="flex-1 space-y-1 sm:space-y-2 lg:space-y-3 overflow-hidden">
        {/* Featured Project */}
        {featuredProject && (
          <div className="space-y-1 overflow-hidden">
            {featuredProject.hasImage && featuredProject.image && (
              <div className="relative">
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.name} project`}
                  width={399}
                  height={269}
                  className="w-full h-[clamp(40px,8vh,80px)] object-cover rounded-[6px] lg:rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px]"
                />
                <div className="absolute top-1 right-1 w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] xl:w-[18px] xl:h-[18px] bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/images/arrow-small.svg"
                    alt="Arrow"
                    width={15}
                    height={15}
                    className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] xl:w-[10px] xl:h-[10px]"
                  />
                </div>
              </div>
            )}
            <h3 className={`nothing-mono text-[clamp(11px,1.5vw,16px)] text-interactive truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>
              {featuredProject.name}
            </h3>
            <div className={`w-full h-[1px] ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#E5E5E7]'}`}></div>
          </div>
        )}

        {/* Other Projects */}
        <div className="flex-1 flex flex-col justify-evenly space-y-1 overflow-hidden">
          {otherProjects.map((project, index) => (
            <div key={project.name} className="flex-shrink-0 overflow-hidden">
              <h3 className={`nothing-mono text-[clamp(10px,1.3vw,14px)] text-interactive truncate ${isDarkMode ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>
                {project.name}
              </h3>
              {index < otherProjects.length - 1 && (
                <div className={`w-full h-[1px] mt-1 ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#E5E5E7]'}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
