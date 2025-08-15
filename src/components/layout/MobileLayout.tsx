'use client';

import React from 'react';
import Image from "next/image";

const MobileLayout: React.FC = () => {
  return (
    <div className="block sm:hidden h-full">
      <div className="flex flex-col h-full gap-1">
        {/* Header */}
        <header className="flex-shrink-0 bg-white border border-[#E5E5E7] rounded-[8px] p-2 flex justify-between items-center h-[50px]">
          <div className="text-[#1D1D1F] font-light text-[12px] uppercase tracking-wide truncate">
            JULIA HUANG
          </div>
          <nav className="flex gap-2">
            <span className="text-[#6E6E73] font-light text-[7px] uppercase">PROJECTS</span>
            <span className="text-[#6E6E73] font-light text-[7px] uppercase">ABOUT</span>
            <span className="text-[#6E6E73] font-light text-[7px] uppercase">CONTACT</span>
          </nav>
        </header>
        
        {/* Horizontal scrolling content */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden">
          <div className="flex gap-1 h-[calc(100vh-70px)] min-w-max pb-1">
            {/* Intro Section */}
            <div className="w-[280px] h-[200px] bg-white border border-[#E5E5E7] rounded-[8px] p-3 relative flex flex-col justify-end overflow-hidden flex-shrink-0">
              <div className="absolute top-2 right-2">
                <Image
                  src="/images/flower-icon.svg"
                  alt="Flower icon"
                  width={119}
                  height={119}
                  className="w-[30px] h-[30px]"
                />
              </div>
              <div className="pr-8">
                <h1 className="text-[#1D1D1F] font-bold text-[14px] leading-[1.1] break-words">
                  Artist Redefining Architecture with AI-Driven Design
                </h1>
              </div>
            </div>

            {/* Portrait */}
            <div className="w-[180px] h-[200px] bg-white border border-[#E5E5E7] rounded-[8px] overflow-hidden flex-shrink-0">
              <div className="w-full h-full relative">
                <Image
                  src="/images/me.jpg"
                  alt="Julia Huang portrait"
                  fill
                  className="object-cover object-[50%_15%]"
                />
              </div>
            </div>

            {/* Work Section */}
            <div className="w-[260px] h-[200px] bg-white border border-[#E5E5E7] rounded-[8px] p-3 flex flex-col overflow-hidden flex-shrink-0">
              <div className="space-y-2">
                {/* Musea Project */}
                <div className="space-y-1">
                  <div className="relative">
                    <Image
                      src="/images/portfolio-image.png"
                      alt="Musea project"
                      width={399}
                      height={269}
                      className="w-full h-[60px] object-cover rounded-[6px]"
                    />
                    <div className="absolute top-1 right-1 w-[14px] h-[14px] bg-white rounded-full flex items-center justify-center">
                      <Image
                        src="/images/arrow-small.svg"
                        alt="Arrow"
                        width={15}
                        height={15}
                        className="w-[6px] h-[6px]"
                      />
                    </div>
                  </div>
                  <h3 className="text-[#1D1D1F] font-medium text-[11px] leading-[1.2] truncate">Musea</h3>
                  <div className="w-full h-[1px] bg-[#E5E5E7]"></div>
                </div>

                {/* Other Projects */}
                <div className="space-y-1">
                  <div>
                    <h3 className="text-[#1D1D1F] font-medium text-[11px] leading-[1.2] truncate">Elara</h3>
                    <div className="w-full h-[1px] bg-[#E5E5E7] mt-1"></div>
                  </div>
                  <div>
                    <h3 className="text-[#1D1D1F] font-medium text-[11px] leading-[1.2] truncate">Verve</h3>
                    <div className="w-full h-[1px] bg-[#E5E5E7] mt-1"></div>
                  </div>
                  <div>
                    <h3 className="text-[#1D1D1F] font-medium text-[11px] leading-[1.2] truncate">Zephyr</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="w-[220px] h-[200px] bg-white border border-[#E5E5E7] rounded-[8px] p-3 flex flex-col overflow-hidden flex-shrink-0">
              <div className="w-[20px] h-[20px] bg-[#007AFF] rounded-full flex items-center justify-center mb-2 flex-shrink-0">
                <Image
                  src="/images/circle-icon.svg"
                  alt="Circle icon"
                  width={38}
                  height={38}
                  className="w-[16px] h-[16px] brightness-0 invert"
                />
              </div>
              <p className="text-[#6E6E73] font-light text-[9px] leading-[1.3] overflow-hidden">
                Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA.
              </p>
            </div>

            {/* Contact Section */}
            <div className="w-[200px] h-[200px] bg-[#007AFF] rounded-[8px] p-3 flex flex-col justify-between overflow-hidden flex-shrink-0">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-white font-light text-[8px] leading-[1.2]">
                    Have some<br />questions?
                  </p>
                </div>
                <div className="w-[20px] h-[20px] bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow"
                    width={22}
                    height={22}
                    className="w-[10px] h-[10px] brightness-0 invert"
                  />
                </div>
              </div>
              <h2 className="text-white font-medium text-[16px] leading-[1.1] break-words">
                Contact me
              </h2>
            </div>

            {/* Skills Section */}
            <div className="w-[200px] h-[200px] bg-[#F5F5F7] border border-[#E5E5E7] rounded-[8px] p-3 flex flex-col overflow-hidden flex-shrink-0">
              <h3 className="text-[#1D1D1F] font-medium text-[11px] mb-2">Skills</h3>
              <div className="flex flex-wrap gap-1">
                <span className="text-[#1D1D1F] font-light text-[8px] bg-white rounded-full px-2 py-1">Figma</span>
                <span className="text-[#1D1D1F] font-light text-[8px] bg-white rounded-full px-2 py-1">AI/ML</span>
                <span className="text-[#1D1D1F] font-light text-[8px] bg-white rounded-full px-2 py-1">3D</span>
                <span className="text-[#1D1D1F] font-light text-[8px] bg-white rounded-full px-2 py-1">Blender</span>
              </div>
            </div>

            {/* Socials Section */}
            <div className="w-[160px] h-[200px] bg-white border border-[#E5E5E7] rounded-[8px] p-3 flex flex-col justify-center gap-4 overflow-hidden flex-shrink-0">
              <span className="text-[#6E6E73] font-light text-[9px] uppercase tracking-wide">INSTAGRAM</span>
              <span className="text-[#6E6E73] font-light text-[9px] uppercase tracking-wide">TWITTER</span>
              <span className="text-[#6E6E73] font-light text-[9px] uppercase tracking-wide">LINKEDIN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
