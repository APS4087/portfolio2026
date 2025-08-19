'use client';

import React from 'react';
import Header from '../layout/Header';
import HeroSection from '../bento/HeroSection';
import PortraitSection from '../bento/PortraitSection';
import WorkSection from '../bento/WorkSection';
import SkillsSection from '../bento/SkillsSection';
import AvailabilitySection from '../bento/AvailabilitySection';
import AboutSection from '../bento/AboutSection';
import ContactSection from '../bento/ContactSection';
import SocialsSection from '../bento/SocialsSection';
import { PROJECTS, SKILLS, SOCIAL_LINKS, CONTACT_INFO, PERSONAL_INFO } from '@/constants/data';

interface DesktopLayoutProps {
  onContactClick?: () => void;
  onSocialClick?: (url?: string, socialName?: string) => void;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ 
  onContactClick, 
  onSocialClick 
}) => {
  return (
    <div className="grid grid-cols-12 gap-2 sm:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 h-full overflow-hidden grid-rows-[minmax(50px,8vh)_minmax(160px,50vh)_minmax(50px,21vh)_minmax(50px,21vh)]">
      {/* Row 1: Header - Full Width */}
      <Header />
      
      {/* Row 2: Hero, Portrait, Work (Work spans 2 rows) */}
      <HeroSection title={PERSONAL_INFO.title} />
      <PortraitSection imageSrc={PERSONAL_INFO.image} altText={`${PERSONAL_INFO.name} portrait`} />
      <WorkSection projects={PROJECTS} />
      
      {/* Row 3: Skills, Availability */}
      <SkillsSection skills={SKILLS} />
      <AvailabilitySection 
        status={CONTACT_INFO.availability}
        statusText={CONTACT_INFO.statusText}
        location={CONTACT_INFO.location}
      />
      
      {/* Row 4: About, Contact, Socials */}
      <AboutSection />
      <ContactSection onContactClick={onContactClick} />
      <SocialsSection socialLinks={SOCIAL_LINKS} onSocialClick={onSocialClick} />
    </div>
  );
};

export default DesktopLayout;
