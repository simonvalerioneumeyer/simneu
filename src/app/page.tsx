import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: "Homepage of Simon Valerio Neumeyer, Senior Data Scientist and Data Engineer."
};

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="card grid gap-8 p-8 sm:p-12 md:grid-cols-[1fr_280px] md:items-center">
        <div>
          <p className="text-sm font-medium tracking-widest text-accent">WELCOME</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{siteConfig.name}</h1>
          <p className="mt-4 text-lg text-slate-700">Data Scientist | ML &amp; Geospatial | CV/Portfolio</p>
          <p className="mt-2 text-sm text-slate-500">{siteConfig.location}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={siteConfig.github} className="link-pill gap-2">
              <GitHubIcon className="h-4 w-4" /> GitHub
            </Link>
            <Link href={siteConfig.linkedin} className="link-pill gap-2">
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </Link>
            <Link href="/projects" className="link-pill">
              View Projects
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-slate-200">
          <Image
            src="/images/frontpage-photo.jpeg"
            alt="Simon Valerio Neumeyer featured portrait"
            width={560}
            height={760}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className="card p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Short Introduction</h2>
        <p className="mt-4 max-w-4xl text-slate-700">
          Senior Data Scientist and Data Engineer with 6+ years of experience building robust, production-grade Python data pipelines
          for analytics, machine learning, and AI systems. Strong background in large-scale data ingestion, transformation, and feature
          engineering across structured and unstructured data, supporting downstream ML, computer vision, geospatial analytics, and
          emerging LLM workflows in cloud environments.
        </p>
      </div>

    </section>
  );
}
