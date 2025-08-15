'use client';

import React from 'react';
import Image from "next/image";

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
  { name: "Musea", image: "/images/portfolio-image.png", hasImage: true },
  { name: "Elara", hasImage: false },
  { name: "Verve", hasImage: false },
  { name: "Zephyr", hasImage: false }
];

const WorkSection: React.FC<WorkSectionProps> = ({ 
  className = "", 
  projects = defaultProjects 
}) => {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <div className={`col-span-3 lg:col-span-4 xl:col-span-4 2xl:col-span-4 row-span-2 bg-white border border-[#E5E5E7] rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col ${className}`}>
      <div className="flex-1 space-y-2 lg:space-y-3 xl:space-y-4 2xl:space-y-5">
        {/* Featured Project */}
        {featuredProject && (
          <div className="space-y-1 lg:space-y-2 xl:space-y-2 2xl:space-y-3">
            {featuredProject.hasImage && featuredProject.image && (
              <div className="relative">
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.name} project`}
                  width={399}
                  height={269}
                  className="w-full h-[60px] sm:h-[70px] lg:h-[90px] xl:h-[110px] 2xl:h-[140px] object-cover rounded-[6px] lg:rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px]"
                />
                <div className="absolute top-1 right-1 w-[14px] h-[14px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[24px] 2xl:h-[24px] bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/images/arrow-small.svg"
                    alt="Arrow"
                    width={15}
                    height={15}
                    className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] xl:w-[10px] xl:h-[10px] 2xl:w-[12px] 2xl:h-[12px]"
                  />
                </div>
              </div>
            )}
            <h3 className="text-[#1D1D1F] font-medium text-[10px] sm:text-[11px] lg:text-[13px] xl:text-[15px] 2xl:text-[18px] leading-[1.2] break-words">
              {featuredProject.name}
            </h3>
            <div className="w-full h-[1px] bg-[#E5E5E7]"></div>
          </div>
        )}

        {/* Other Projects */}
        <div className="flex-1 flex flex-col justify-evenly space-y-1 lg:space-y-2">
          {otherProjects.map((project, index) => (
            <div key={project.name} className="flex-shrink-0">
              <h3 className="text-[#1D1D1F] font-medium text-[10px] sm:text-[11px] lg:text-[13px] xl:text-[15px] 2xl:text-[18px] leading-[1.2] break-words">
                {project.name}
              </h3>
              {index < otherProjects.length - 1 && (
                <div className="w-full h-[1px] bg-[#E5E5E7] mt-1"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
