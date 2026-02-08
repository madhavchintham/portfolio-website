export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  categories: SkillCategory[];
}
