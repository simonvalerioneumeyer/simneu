import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.summary
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <div className="card p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Project Detail</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">{project.title}</h1>
        <p className="mt-4 text-slate-700">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="card p-8">
        <h2 className="text-xl font-semibold text-slate-900">Problem</h2>
        <p className="mt-2 text-slate-700">{project.problem}</p>

        <h2 className="mt-6 text-xl font-semibold text-slate-900">Approach</h2>
        <p className="mt-2 whitespace-pre-line text-slate-700">{project.approach}</p>

        <h2 className="mt-6 text-xl font-semibold text-slate-900">Results</h2>
        <p className="mt-2 text-slate-700">{project.results}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {project.repoUrl ? (
          <Link href={project.repoUrl} className="link-pill">
            GitHub Repository
          </Link>
        ) : null}
        {project.demoUrl ? (
          <Link href={project.demoUrl} className="link-pill">
            Live Demo
          </Link>
        ) : null}
        {project.publicationUrl ? (
          <Link href={project.publicationUrl} className="link-pill">
            Related Publication
          </Link>
        ) : null}
        <Link href="/projects" className="link-pill">
          Back to Projects
        </Link>
      </div>
    </article>
  );
}
