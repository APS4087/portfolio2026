import { Project, Skill, SocialLink, PersonalInfo, ContactInfo } from '@/types';

// Personal information
export const PERSONAL_INFO: PersonalInfo = {
  name: "Aung Pyae Soe",
  title: "Frontend Design Engineer & Full Stack Developer",
  description: "I'm a passionate frontend design engineer with expertise in AI-powered platforms and modern web development. I specialize in creating scalable web applications using React, Next.js, and cloud technologies, with experience in legal tech, AI image generation, and government assistance platforms.",
  location: "Singapore",
  image: "/images/me.jpg"
};

// Projects data
export const PROJECTS: Project[] = [
  {
    name: "SnapFace AI",
    image: "/images/portfolio-image.png",
    hasImage: true,
    description: "AI Image Generation Platform - Optimized processing time by 60% and costs by 25% using Flux Dev and Flux Schnell"
  },
  {
    name: "PetalScan",
    hasImage: false,
    description: "AI Plant Recognition App - Built with React Native and Firebase, identifying 500+ species with 20% accuracy improvement"
  },
  {
    name: "ezScheme",
    hasImage: false,
    description: "AI Government Assistance Platform - 1st Runner-up HackOMania 2024, increased engagement by 50% using React and Node.js"
  },
  {
    name: "Legal Tech Platform",
    hasImage: false,
    description: "Frontend interfaces for AI-powered legal tech at Plato Singapore, improving document processing efficiency by 40%"
  }
];

// Skills data
export const SKILLS: Skill[] = [
  { name: "React", id: "react", category: "development" },
  { name: "Next.js", id: "nextjs", category: "development" },
  { name: "TypeScript", id: "typescript", category: "development" },
  { name: "Node.js", id: "nodejs", category: "development" },
  { name: "AWS", id: "aws", category: "other" },
  { name: "PostgreSQL", id: "postgresql", category: "other" },
  { name: "React Native", id: "react-native", category: "development" },
  { name: "Docker", id: "docker", category: "other" },
  { name: "Python", id: "python", category: "development" },
  { name: "AI/ML", id: "ai-ml", category: "ai" },
  { name: "Firebase", id: "firebase", category: "other" },
  { name: "TensorFlow", id: "tensorflow", category: "ai" }
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LINKEDIN",
    url: "https://linkedin.com/in/aungpyaesoe",
    id: "linkedin"
  },
  {
    name: "GITHUB",
    url: "https://github.com/aungpyaesoe",
    id: "github"
  },
  {
    name: "WEBSITE",
    url: "https://aungpyaesoe.dev",
    id: "website"
  }
];

// Contact information
export const CONTACT_INFO: ContactInfo = {
  location: "Singapore",
  availability: 'available',
  statusText: "Freelance Work",
  email: "aungpyaesoe.bgs@gmail.com"
};

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: "PROJECTS", href: "#projects" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" }
] as const;
