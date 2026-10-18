export interface PortfolioInfo {
  name: string;
  title: string;
  tagline: string;
  github: string;
  linkedin: string;
  email: string;
}

export interface Skill {
  name: string;
  level: 'proficient' | 'learning' | 'familiar';
}

export interface SkillCategory {
  languages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  blockchain: Skill[];
  databases: Skill[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  status: 'completed' | 'in-progress' | 'demo';
  contractAddress: string | null;
  explorerUrl: string | null;
}
