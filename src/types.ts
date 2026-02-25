export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  team: string;
  tech: string[];
  role: string;
  links: {
    github?: string;
    video?: string;
  };
  achievements: string[];
  troubleshooting: string;
}

export interface SkillItem {
  name: string;
  description?: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface Education {
  school: string;
  major: string;
  period: string;
}

export interface Award {
  title: string;
  date: string;
}

export interface Activity {
  title: string;
  period: string;
}
