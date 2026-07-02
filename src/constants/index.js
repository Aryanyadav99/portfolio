export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/Aryanyadav99', icon: 'Github' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/aryan-yadav-0877922a7/', icon: 'Linkedin' },
  { id: 'leetcode', label: 'LeetCode', url: 'https://leetcode.com/u/Ryn_Ydv8874/', icon: 'Code2' },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Distributed Rate Limiter',
    description: 'A production-ready distributed rate limiter using Token Bucket, Redis, and Lua scripts.',
    technologies: ['Java', 'Spring Boot', 'Redis', 'Lua', 'Docker'],
    github: 'https://github.com/Aryanyadav99/distributed-rate-limiter',
    demo: 'https://github.com/Aryanyadav99/distributed-rate-limiter',
  },
  {
    id: 2,
    title: 'BusMate',
    description: 'Bus reservation backend featuring Redis seat locking, optimistic locking, concurrency control and booking workflow.',
    technologies: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'JPA'],
    github: 'https://github.com/Aryanyadav99/Bus_Mate_FullStack',
    demo: 'https://github.com/Aryanyadav99/Bus_Mate_FullStack',
  },
  {
    id: 3,
    title: 'CollabXSkill',
    description: 'Skill matching platform featuring authentication, realtime messaging (Chat) and collaboration.',
    technologies: ['Java', 'Spring Boot', 'WebSocket', 'JWT', 'Redis'],
    github: 'https://collab-x-skill-frontend.vercel.app/',
    demo: 'https://collab-x-skill-frontend.vercel.app/',
  },
  {
    id: 4,
    title: 'OrbKart',
    description: 'Scalable ecommerce backend supporting authentication, payment integration and RBAC.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Stripe', 'Redis'],
    github: 'https://github.com/Aryanyadav99/OrbKart_Backend',
    demo: 'https://github.com/Aryanyadav99/OrbKart_Backend',
  },
]

export const SKILLS = {
  backend: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Docker', 'Kafka'],
  frontend: ['React', 'Tailwind', 'JavaScript', 'TypeScript'],
  devops: ['Git', 'GitHub', 'Linux', 'AWS'],
  programming: ['Java', 'C++', 'Python'],
}

export const EDUCATION = {
  degree: 'Bachelor of Technology',
  field: 'Information Technology',
  institute: 'KIET Group of Institutions',
  duration: '2023-2027',
  cgpa: '9.0',
  highlights: ['Backend Development', 'System Design', 'Competitive Programming'],
}

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'LeetCode',
    stat1: '800+',
    label1: 'Problems Solved',
    stat2: 'Knight',
    label2: 'Badge',
    icon: 'Code2',
  },
  {
    id: 2,
    title: 'Contest Rating',
    stat1: '1800+',
    label1: 'Elo Rating',
    stat2: '500+',
    label2: 'Contests',
    icon: 'Zap',
  },
  {
    id: 3,
    title: 'GitHub',
    stat1: '50+',
    label1: 'Repositories',
    stat2: '1000+',
    label2: 'Contributions',
    icon: 'Github',
  },
  {
    id: 4,
    title: 'AWS Certified',
    stat1: 'Cloud',
    label1: 'Practitioner',
    stat2: 'Verified',
    label2: 'Certificate',
    icon: 'Cloud',
  },
]

export const THEME_COLORS = {
  primary: '#A855F7',
  accent: '#D8B4FE',
  background: '#05050A',
  cardBackground: '#0F0F1E',
  border: '#1A1A2E',
  neonGlow: 'rgba(168, 85, 247, 0.5)',
}

