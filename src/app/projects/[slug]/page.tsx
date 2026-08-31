import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Figure } from "@/components/Figure";
import { getProject, projects } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.short,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="site-wrap case">
      <header className="case-hero">
        <p className="kicker">
          {project.client} · {project.year}
        </p>
        <h1>{project.title}</h1>
        <p className="lede">{project.short}</p>
        <ul className="tags">
          {project.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
        {project.website ? (
          <p>
            <a href={project.website} target="_blank" rel="noreferrer">
              Live site
            </a>
          </p>
        ) : null}
      </header>

      <div className="case-grid prose">
        <section className="block">
          <h2>Overview</h2>
          <p>{project.overview}</p>
          {project.highlights ? (
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>

        <section className="block">
          <h2>Problem</h2>
          {project.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>

        <section className="block">
          <h2>Goal</h2>
          <ul>
            {project.goals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h2>Role</h2>
          <p>I was responsible for:</p>
          <ul>
            {project.role.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>I worked with:</p>
          <ul>
            {project.role.collaborators.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {project.approaches.map((approach) => (
          <section className="block" key={approach.title}>
            <h2>{approach.title}</h2>
            {approach.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {approach.figures?.map((figure) => (
              <Figure key={figure.src} {...figure} />
            ))}
          </section>
        ))}

        <section className="block">
          <h2>Challenges</h2>
          {project.challenges.map((item) => (
            <div className="challenge" key={item.challenge}>
              <p>
                <strong>Challenge:</strong> {item.challenge}
              </p>
              <p>
                <strong>Solution:</strong> {item.solution}
              </p>
            </div>
          ))}
        </section>

        <section className="block">
          <h2>Takeaways</h2>
          <ul>
            {project.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {project.extra ? (
          <section className="block">
            <h2>{project.extra.heading}</h2>
            {project.extra.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {project.extra.bullets ? (
              <ul>
                {project.extra.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        <p>
          <Link href="/projects">← All projects</Link>
        </p>
      </div>
    </article>
  );
}
