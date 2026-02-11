import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-shell flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href={siteConfig.social.github} className="text-slate-600 transition hover:text-accent" aria-label="GitHub">
            <GitHubIcon />
          </Link>
          <Link href={siteConfig.social.linkedin} className="text-slate-600 transition hover:text-accent" aria-label="LinkedIn">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
