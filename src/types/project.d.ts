export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  images: string[];
  link: string;
  github?: string;
  technologies?: string[];
  features?: string[];
}

export interface ProjectSlugParams {
  slug: string;
}
