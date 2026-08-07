export type OptionMarker = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'x' | '+' | '–';

export interface ContextItem {
  id: string;
  text: string;
  title?: string;
}

export interface QuestionItem {
  n: number;
  text: string;
  options: string[];
  correct: string;
  explanation?: string;
  audioScript?: string;
}

export interface ExamSection {
  id: string;
  title: string;
  shortCode: 'LV1' | 'LV2' | 'LV3' | 'SB1' | 'SB2' | 'HV1' | 'HV2' | 'HV3';
  module: 'Leseverstehen' | 'Sprachbausteine' | 'Hörverstehen';
  timeLimitMinutes: number;
  description: string;
  contextType?: 'texts' | 'wordbank';
  contextData?: ContextItem[] | string[];
  items: QuestionItem[];
}

export interface WritingTopic {
  id: number;
  title: string;
  subtitle: string;
  adContent: string;
  adTitle: string;
  adAddress?: string;
  promptRequirements: string[];
}

export interface SpeakingPart {
  part: number;
  title: string;
  duration: string;
  description: string;
  prompts: string[];
  readingText?: string;
}

export interface ExamAttempt {
  id?: string;
  userId: string;
  email: string;
  sectionId?: string; // 'full' or specific section id
  sectionTitle?: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  timestamp: any;
  durationSeconds?: number;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  isAdmin?: boolean;
}

