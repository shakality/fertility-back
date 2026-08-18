export interface BookEdition {
  id: string;
  name: string;
  format: string;
  priceUSD: number;
  priceNGN: number;
  popular?: boolean;
  features: string[];
  badge?: string;
}

export interface Chapter {
  id: number;
  title: string;
  summary: string;
  pages: string;
  readTime: string;
  content: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
