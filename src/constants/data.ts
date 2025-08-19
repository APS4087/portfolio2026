import { Project, Skill, SocialLink, PersonalInfo, ContactInfo } from '@/types';

// Personal information
export const PERSONAL_INFO: PersonalInfo = {
  name: "Bill Aung Pyae Soe",
  title: "IT Administrator & Full Stack Developer",
  description: "IT Administrator at Maxwell Ship Management supporting global maritime operations with cloud infrastructure, automation, and modern web technologies. I bridge the gap between enterprise IT operations and cutting-edge development, specializing in Microsoft 365, network security, and scalable web applications.",
  location: "Singapore",
  image: "/images/me.jpg"
};

// Projects data
export const PROJECTS: Project[] = [
  {
    name: "SnapFace AI",
    image: "/images/portfolio-image.png",
    hasImage: true,
    description: "AI Image Generation Platform - Optimized processing time by 60% and costs by 25% using Flux Dev and Flux Schnell. Built with Next.js and Supabase, serving 100+ users."
  },
  {
    name: "PetalScan",
    hasImage: false,
    description: "AI Plant Recognition App - React Native app identifying 500+ species with 20% accuracy improvement. Integrated Stripe payments and optimized backend with Docker."
  },
  {
    name: "ezScheme",
    hasImage: false,
    description: "AI Government Assistance Platform - 1st Runner-up HackOMania 2024. Built with React and Node.js, increased engagement by 50% for Singapore Government schemes."
  },
  {
    name: "Maritime IT Infrastructure",
    hasImage: false,
    description: "Enterprise IT Solutions - Managing global maritime IT operations including Microsoft 365, network security, and cloud services for international shipping operations."
  }
];

// Skills data - Updated to reflect current IT role + development background
export const SKILLS: Skill[] = [
  // IT Infrastructure & Cloud
  { name: "Microsoft 365", id: "microsoft-365", category: "infrastructure" },
  { name: "Network Administration", id: "network-admin", category: "infrastructure" },
  { name: "Cloud Computing", id: "cloud-computing", category: "infrastructure" },
  { name: "IT Infrastructure", id: "it-infrastructure", category: "infrastructure" },
  { name: "Cybersecurity", id: "cybersecurity", category: "infrastructure" },
  { name: "Shell Scripting", id: "shell-scripting", category: "automation" },
  { name: "System Administration", id: "system-admin", category: "infrastructure" },
  { name: "AWS", id: "aws", category: "infrastructure" },
  
  // Development Skills
  { name: "React", id: "react", category: "development" },
  { name: "Next.js", id: "nextjs", category: "development" },
  { name: "TypeScript", id: "typescript", category: "development" },
  { name: "Node.js", id: "nodejs", category: "development" },
  { name: "Python", id: "python", category: "development" },
  { name: "PostgreSQL", id: "postgresql", category: "development" },
  { name: "Docker", id: "docker", category: "development" },
  
  // AI & Automation
  { name: "AI/ML", id: "ai-ml", category: "ai" },
  { name: "Automation", id: "automation", category: "automation" },
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
    url: "https://billcreates.tech",
    id: "website"
  }
];

// Contact information
export const CONTACT_INFO: ContactInfo = {
  location: "Singapore",
  availability: 'available',
  statusText: "Open to Opportunities",
  email: "aungpyaesoe.bgs@gmail.com"
};

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: "PROJECTS", href: "#projects" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" }
] as const;
