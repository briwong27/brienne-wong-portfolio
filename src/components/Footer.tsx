import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-wrap footer-inner">
        <p>
          {site.name} · {site.location}
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </footer>
  );
}
