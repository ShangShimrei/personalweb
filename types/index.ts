export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl?: string;
}

export interface ModelSpec {
  id: string;
  name: string;
  architecture: string;
  description: string;
  performance: string;
  status: 'Production' | 'Experimental' | 'Deprecated';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Identifier for the icon component
}