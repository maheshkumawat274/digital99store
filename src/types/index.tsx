
export type Category = 
  | 'AI Chatbot' | 'AI Prompts' | 'Article' | 'Business' 
  | 'Canva' | 'ChatGPT' | 'CV / Resume' | 'e-Book' 
  | 'Email' | 'Graphics' | 'HTML' | 'Info' 
  | 'Quotes Images' | 'Short Videos' | 'Stock Image' 
  | 'Tools' | 'Training' | 'WordPress';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  thumbnail: string;
  rating: number;
  sales: number;
  isTrending?: boolean;
  isBestSeller?: boolean;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  mobile?: string;
  avatar?: string;
  purchasedProducts: string[];
  wishlist: string[];
  cart: string[];
}

export type AuthView = 'login' | 'signup' | 'forgot-password' | 'authenticated';
