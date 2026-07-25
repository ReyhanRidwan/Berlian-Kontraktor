/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  icon: string; // Name of Lucide icon
  image: string;
  description: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  area: string;
  challenge: string;
  solution: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Layanan" | "Biaya" | "Waktu";
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
}
