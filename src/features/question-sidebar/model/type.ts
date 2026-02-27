export interface Skills {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  specializations: Specialization[];
}

export interface Specialization {
  createdAt: string;
  description: string;
  id: number;
  imageSrc: string;
  slug: string;
  title: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  limit: number;
  page: number;
}

export type SkillsResponse = PaginatedResponse<Skills>;
export type SpecializationsResponse = PaginatedResponse<Specialization>;
