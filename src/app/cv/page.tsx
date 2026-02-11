import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV",
  description: "View and download curriculum vitae documents."
};

const additionalPdfs = [
  { label: "General Cover Letter", href: "/documents/cover-letter.pdf" },
  { label: "Portfolio PDF", href: "/documents/portfolio.pdf" }
];

export default function CvPage() {
  return (
    <section className="space-y-6">
      <div className="card p-8">
        <h1 className="text-3xl font-bold text-slate-900">Curriculum Vitae</h1>
        <p className="mt-3 text-slate-700">View the embedded PDF below, download it directly, or open the LaTeX source file.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/documents/cv.pdf" className="link-pill" target="_blank">
            Download CV PDF
          </Link>
          <Link href="/documents/cv.tex" className="link-pill" target="_blank">
            View CV LaTeX Source
          </Link>
        </div>
      </div>

      <div className="card overflow-hidden">
        <iframe title="CV PDF" src="/documents/cv.pdf" className="h-[75vh] w-full" />
      </div>

      <div className="card p-8">
        <h2 className="text-xl font-semibold text-slate-900">Additional Documents</h2>
        <p className="mt-2 text-slate-700">Optional links for other PDFs. Remove or update any file paths you do not use.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {additionalPdfs.map((pdf) => (
            <Link key={pdf.href} href={pdf.href} className="link-pill" target="_blank">
              {pdf.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
