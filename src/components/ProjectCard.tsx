import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <p className="meta">
        {project.client} · {project.year}
      </p>
      <h2>
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>
      <p>{project.short}</p>
      <ul className="tags">
        {project.roles.slice(0, 3).map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </article>
  );
}
