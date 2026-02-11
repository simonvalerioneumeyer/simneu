import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card p-6">
      <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {tech}
          </span>
        ))}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex text-sm font-semibold text-accent hover:underline">
        View details
      </Link>
    </article>
  );
}
