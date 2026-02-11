import projects from "@/data/projects.json";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  problem: string;
  approach: string;
  results: string;
  repoUrl?: string;
  demoUrl?: string;
};

export function getAllProjects(): Project[] {
  return projects as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
