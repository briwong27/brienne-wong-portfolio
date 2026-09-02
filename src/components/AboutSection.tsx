import { about, site } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="section-head">
        <h2>About</h2>
      </div>
      <div className="prose">
        <p className="lede">{about.lead}</p>
        <h3>{about.artsToContent.heading}</h3>
        {about.artsToContent.points.map((point) => (
          <div className="pair" key={point.to}>
            <p className="from">{point.from}</p>
            <p>→ {point.to}</p>
          </div>
        ))}
        <p>{about.aside}</p>
        <h3>Skills</h3>
        <ul className="skill-list">
          {site.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
