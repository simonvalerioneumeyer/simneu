import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Detailed professional profile, experience, and technical skills of Simon Valerio Neumeyer."
};

const skills = [
  "Python",
  "SQL",
  "AWS (S3, SageMaker)",
  "Machine Learning",
  "Computer Vision (YOLO, DeepSORT)",
  "Geospatial Data Science",
  "Data Engineering",
  "Git",
  "Shell",
  "QGIS",
  "R",
  "Stata",
  "Generative AI and LLMs",
  "RAG Pipelines"
];

const languages = ["German (Native)", "English (Fluent)", "Spanish (Professional)", "French (Intermediate)"];

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div className="card grid gap-8 p-8 md:grid-cols-[220px_1fr] md:items-start">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <Image
            src="/images/profile-photo.jpeg"
            alt="Simon Valerio Neumeyer"
            width={220}
            height={280}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-900">About Me</h1>
          <p className="mt-4 text-slate-700">
            I am a Senior Data Scientist and Data Engineer currently working at the World Bank Group, where I build and maintain
            end-to-end data pipelines for large-scale analytics and applied machine learning in transport, mobility, and financial
            inclusion projects.
          </p>
          <p className="mt-4 text-slate-700">
            My work combines classical ML, geospatial analytics, and computer vision with production-focused data engineering. Across
            prior roles at Novartis and BCG, I have delivered forecasting, optimization, and impact-evaluation systems that turn complex
            data into measurable decisions.
          </p>
          <p className="mt-4 text-slate-700">
            I also work as a freelance data scientist on selected data science projects, with a focus on geospatial modeling, mobility
            analytics, and decision-support tools for real-world operations.
          </p>
        </div>
      </div>

      <div className="card p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Core Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="card p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Languages</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {languages.map((language) => (
            <span key={language} className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-900">
              {language}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
