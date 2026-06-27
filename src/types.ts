export interface ShortFormProject {
  id: string;
  title: string;
  duration: string;
  category: string;
  thumbnail: string;
  videoUrl: string; // Direct video mp4 URL for premium modal/hover autoplay
  tags: string[];
}

export interface LongFormProject {
  id: string;
  title: string;
  duration: string;
  viewCount: string;
  projectType: string;
  thumbnail: string;
  videoUrl: string; // Youtube-style or Direct mp4 URL for preview and showcase
  description: string;
  challenge: string;
  retentionRate: string;
  hookRate: string;
  softwareUsed: string[];
  keyEdits: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // lucide icon name
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatResult {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}
