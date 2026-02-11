import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse machine learning and geospatial data science projects."
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
      <p className="mt-3 max-w-2xl text-slate-700">
        A selection of projects with focus on measurable outcomes, technical rigor, and real-world utility.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
