import type { Category, Product } from "../types";


export const CATEGORIES: Category[] = [
  'AI Chatbot', 'AI Prompts', 'Article', 'Business', 'Canva', 
  'ChatGPT', 'CV / Resume', 'e-Book', 'Email', 'Graphics', 
  'HTML', 'Info', 'Quotes Images', 'Short Videos', 'Stock Image', 
  'Tools', 'Training', 'WordPress'
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Modern AI Chatbot Template',
    description: 'A fully responsive AI chatbot UI with dark mode support.',
    price: 49.99,
    category: 'AI Chatbot',
    thumbnail: 'https://picsum.photos/seed/ai1/600/400',
    rating: 4.8,
    sales: 120,
    isBestSeller: true
  },
  {
    id: '2',
    title: 'Ultimate ChatGPT Prompt Pack',
    description: '1000+ expert-crafted prompts for marketing and SEO.',
    price: 29.00,
    category: 'ChatGPT',
    thumbnail: 'https://picsum.photos/seed/chat/600/400',
    rating: 4.9,
    sales: 850,
    isTrending: true
  },
  {
    id: '3',
    title: 'Canva Social Media Kit',
    description: '500+ templates for Instagram, LinkedIn, and Twitter.',
    price: 19.99,
    category: 'Canva',
    thumbnail: 'https://picsum.photos/seed/canva/600/400',
    rating: 4.7,
    sales: 320,
    isTrending: true
  },
  {
    id: '4',
    title: 'Professional CV Bundle',
    description: '10 ATS-friendly resume templates for tech professionals.',
    price: 15.00,
    category: 'CV / Resume',
    thumbnail: 'https://picsum.photos/seed/cv/600/400',
    rating: 4.5,
    sales: 210
  },
  {
    id: '5',
    title: 'Digital Marketing Mastery e-Book',
    description: 'The ultimate guide to scaling your online presence.',
    price: 34.50,
    category: 'e-Book',
    thumbnail: 'https://picsum.photos/seed/ebook/600/400',
    rating: 5.0,
    sales: 540,
    isBestSeller: true
  },
  {
    id: '6',
    title: 'WordPress SaaS Landing Page',
    description: 'High-conversion Elementor template for SaaS products.',
    price: 59.00,
    category: 'WordPress',
    thumbnail: 'https://picsum.photos/seed/wp/600/400',
    rating: 4.6,
    sales: 88
  },
  {
    id: '7',
    title: 'Premium Stock Photo Bundle',
    description: '100+ high-res nature and business stock images.',
    price: 99.00,
    category: 'Stock Image',
    thumbnail: 'https://picsum.photos/seed/stock/600/400',
    rating: 4.9,
    sales: 150,
    isTrending: true
  },
  {
    id: '8',
    title: 'Email Marketing Sequences',
    description: 'Proven cold email and newsletter templates.',
    price: 25.00,
    category: 'Email',
    thumbnail: 'https://picsum.photos/seed/email/600/400',
    rating: 4.4,
    sales: 430
  }
];
