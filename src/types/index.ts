export interface Lawyer {
  id: string;
  name: string;
  city: string;
  language: string[];
  gender: 'Male' | 'Female';
  specialization: string[];
  rating: number;
  proBono: boolean;
  avatar: string;
  experience: number;
}

export interface Story {
  id: string;
  title: string;
  category: string;
  content: string;
  anonymous: boolean;
  authorName?: string;
  date: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  category?: string;
  legalClause?: string;
  recommendation?: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
}

export interface RightsCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  laws: RightsLaw[];
}

export interface RightsLaw {
  id: string;
  title: string;
  description: string;
  urduTranslation: string;
  legalReference: string;
}