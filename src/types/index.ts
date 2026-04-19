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

export interface GithubLanguage {
  name: string;
  color: string;
  size: number;
  percentage: number;
}
 
export interface PinnedRepo {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  primaryLanguage: string | null;
  primaryLanguageColor: string | null;
  topics: string[];
}
 
export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
 
export interface ContributionWeek {
  days: ContributionDay[];
}
 
export interface GithubStats {
  totalRepositories: number;
  totalStars: number;
  totalCommitsThisYear: number;
  totalPRs: number;
  followers: number;
  languages: GithubLanguage[];
  pinnedRepos: PinnedRepo[];
  contributionWeeks: ContributionWeek[];
}
 