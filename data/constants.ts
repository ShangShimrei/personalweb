import { Project, BlogPost, NavItem, SocialLink, ModelSpec } from '../types';

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
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', // AI Chip / Abstract
  },
  {
    id: '2',
    title: 'Reinforcement Learning',
    category: 'Research',
    description: 'Implementing PPO algorithms for optimizing complex environments and decision-making agents.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800', // Code / Algorithm
  },
  {
    id: '3',
    title: 'Agentic Systems',
    category: 'System Architecture',
    description: 'Multi-agent frameworks designed to autonomously solve complex planning and execution tasks.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800', // Robot / Agent
  },
  {
    id: '4',
    title: 'ML Works',
    category: 'Data Science',
    description: 'A comprehensive collection of predictive models, data analysis, and computer vision experiments.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Data Visualization
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Fine-Tuning Llama 3 on Custom Datasets',
    excerpt: 'A deep dive into PEFT and LoRA techniques to adapt large language models for specialized domain tasks without breaking the bank.',
    date: 'October 24, 2025',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'The Rise of Agentic AI Systems',
    excerpt: 'Moving beyond chatbots: How autonomous agents are planning, executing, and correcting their own code to solve complex engineering problems.',
    date: 'October 10, 2025',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Optimizing Transformer Inference',
    excerpt: 'Exploring quantization, KV-caching, and speculative decoding to reduce latency and memory footprint in production environments.',
    date: 'September 28, 2025',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800',
  },
];