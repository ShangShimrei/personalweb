import { BlogPost } from '../types';

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