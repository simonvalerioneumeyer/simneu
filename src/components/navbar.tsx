import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-900 sm:text-base">
          Portfolio
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
