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
<<<<<<< HEAD
}
=======
}
>>>>>>> 6dade488c8b37cd1f5ca7e86b54a6d8a9b1790ad
