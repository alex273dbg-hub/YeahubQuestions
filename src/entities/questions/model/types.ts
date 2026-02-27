export interface User {
  id: string;
  username: string;
}

export interface QuestionSpecialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy: User;
}

export interface QuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
}

export default interface QuestionResponse {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string | null;
  shortAnswer: string | null;
  status: "public" | "private";
  rate: number;
  complexity: number;
  createdById: string;
  updatedById: string;
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
  createdAt: string;
  updatedAt: string;
  createdBy: User;
  updatedBy: User;
}

