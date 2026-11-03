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
  devTools: Skill[];
}

export interface PortfolioInfo {
  name: string;
  title: string;
  tagline: string;
  github: string;
  linkedin: string;
  x: string;
  email: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
}

export interface ContactResponse {
  message: string;
}

export interface ErrorResponse {
  error: string;
}
