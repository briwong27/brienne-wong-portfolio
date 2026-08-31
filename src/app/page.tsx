import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="site-wrap">
      <section className="hero">
        <p className="kicker">{site.role}</p>
        <h1>{site.name}</h1>
        <p className="lede">{site.tagline}</p>
        <p>{site.intro}</p>
        <div className="btn-row">
          <Link className="btn btn-primary" href="/projects">
            See selected work
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Contact
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Selected work</h2>
          <Link href="/projects">All projects</Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
