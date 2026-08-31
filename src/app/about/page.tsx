import type { Metadata } from "next";
import { about, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: about.lead,
};

export default function AboutPage() {
  return (
    <div className="site-wrap">
      <div className="page-intro">
        <p className="kicker">About</p>
        <h1>Content with a collections-manager’s care</h1>
        <p className="lede">{about.lead}</p>
      </div>

      <div className="prose" style={{ paddingBottom: "2rem" }}>
        <h2>{about.artsToContent.heading}</h2>
        {about.artsToContent.points.map((point) => (
          <div className="pair" key={point.to}>
            <p className="from">{point.from}</p>
            <p>→ {point.to}</p>
          </div>
        ))}
        <p>{about.aside}</p>

        <h2>Skills</h2>
        <ul className="skill-list">
          {site.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
