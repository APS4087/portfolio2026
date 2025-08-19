// Common types used across the portfolio components

export interface Project {
  name: string;
  image?: string;
  hasImage?: boolean;
  url?: string;
  description?: string;
}

export interface Skill {
  name: string;
  id: string;
  category?: 'design' | 'development' | 'ai' | 'infrastructure' | 'automation' | 'other';
}

export interface SocialLink {
  name: string;
  url?: string;
  id: string;
  icon?: string;
}

export type AvailabilityStatus = 'available' | 'busy' | 'unavailable';

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  availability?: AvailabilityStatus;
  statusText?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  image: string;
}

// Component Props interfaces
export interface ComponentProps {
  className?: string;
}

export interface InteractiveComponentProps extends ComponentProps {
  onClick?: () => void;
}

export interface SocialComponentProps extends ComponentProps {
  onSocialClick?: (url?: string, socialName?: string) => void;
}
