import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies in UX writing, information architecture, and content systems.",
};

export default function ProjectsPage() {
  return (
    <div className="site-wrap">
      <div className="page-intro">
        <p className="kicker">Case studies</p>
        <h1>Projects</h1>
        <p className="lede">
          UX writing, information architecture, and content systems — from
          consumer products to museums and civic tech.
        </p>
      </div>
      <div className="project-grid" style={{ paddingBottom: "3rem" }}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
