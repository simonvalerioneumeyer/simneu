import Link from "next/link";

export default function NotFound() {
  return (
    <section className="card p-8">
      <h1 className="text-2xl font-bold text-slate-900">Page Not Found</h1>
      <p className="mt-3 text-slate-700">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-5 inline-flex text-sm font-semibold text-accent hover:underline">
        Return Home
      </Link>
    </section>
  );
}
