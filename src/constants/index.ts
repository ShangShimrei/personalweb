import { Project, NavItem, SocialLink, ModelSpec } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Models', href: '#models' },
  { label: 'Blog', href: '#blog' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Twitter', url: '#', icon: 'twitter' },
  { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
  { platform: 'GitHub', url: '#', icon: 'github' },
  { platform: 'Instagram', url: '#', icon: 'instagram' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LLM FineTuning',
    category: 'Machine Learning',
    description: 'Custom fine-tuning of Llama 3 models for specialized domain adaptation and improved reasoning capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Reinforcement Learning',
    category: 'Research',
    description: 'Implementing PPO algorithms for optimizing complex environments and decision-making agents.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Agentic Systems',
    category: 'System Architecture',
    description: 'Multi-agent frameworks designed to autonomously solve complex planning and execution tasks.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'ML Works',
    category: 'Data Science',
    description: 'A comprehensive collection of predictive models, data analysis, and computer vision experiments.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
];

export const AI_MODELS: ModelSpec[] = [
  {
    id: 'm1',
    name: 'SHIMREI-7B-V1',
    architecture: 'Llama 3 8B',
    description: 'Fine-tuned on synthetic reasoning datasets for improved logic and step-by-step problem solving in constrained environments.',
    performance: 'MMLU: 72.5%',
    status: 'Production'
  },
  {
    id: 'm2',
    name: 'VISION-X-LORA',
    architecture: 'Llava 1.6',
    description: 'A lightweight LoRA adapter designed for enhanced OCR capabilities on technical documentation and electrical schematics.',
    performance: 'DocVQA: 81.2%',
    status: 'Experimental'
  },
   {
    id: 'm3',
    name: 'NEXUS-CODER',
    architecture: 'DeepSeek Coder',
    description: 'Specialized model for modern web frameworks (React, Next.js, Tailwind) focusing on clean, accessible code patterns.',
    performance: 'HumanEval: 78%',
    status: 'Production'
  }
];