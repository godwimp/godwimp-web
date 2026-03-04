export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  category: string | null;
  isFeatured: boolean;
  githubUrl: string | null;
  liveUrl: string | null;
  npmUrl: string | null;
}

export interface ApiResponse<T> {
  success: number;
  data?: T;
  error?: string;
  message?: string;
}