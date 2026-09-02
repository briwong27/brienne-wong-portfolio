import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-wrap header-inner">
        <Link href="/" className="wordmark">
          Brienne Wong
        </Link>
        <nav aria-label="Primary">
          {links.map((link) =>
            link.href.includes("#") ? (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
