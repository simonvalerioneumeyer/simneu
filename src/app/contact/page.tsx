import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information and direct links for professional outreach."
};

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <div className="card p-8">
        <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
        <p className="mt-3 text-slate-700">For opportunities, collaboration, or project discussions, feel free to reach out.</p>

        <div className="mt-6 space-y-3 text-slate-700">
          <p>
            Location: <span className="font-medium">{siteConfig.location}</span>
          </p>
          <p>
            Phone: <span className="font-medium">{siteConfig.phone}</span>
          </p>
          <p>
            Email:{" "}
            <Link href={`mailto:${siteConfig.email}`} className="font-medium text-accent hover:underline">
              {siteConfig.email}
            </Link>
          </p>
          <p>
            GitHub:{" "}
            <Link href={siteConfig.github} className="font-medium text-accent hover:underline">
              {siteConfig.github}
            </Link>
          </p>
          <p>
            LinkedIn:{" "}
            <Link href={siteConfig.linkedin} className="font-medium text-accent hover:underline">
              {siteConfig.linkedin}
            </Link>
          </p>
        </div>
      </div>

      <div className="card p-8">
        <h2 className="text-xl font-semibold text-slate-900">Quick Message</h2>
        <p className="mt-2 text-slate-700">Use your default mail client with a prefilled subject line.</p>
        <Link
          href={`mailto:${siteConfig.email}?subject=Portfolio%20Inquiry`}
          className="mt-4 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          Send Email
        </Link>
      </div>
    </section>
  );
}
