import { projects } from "../../data.js";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      {projects.map((project) => (
        <article className="project-card" id={`project-${project.fileName}`} key={project.fileName}>
          <div className="project-head">
            <h3>{project.name}</h3>
            <div className="project-links">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Live demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <div className="project-subtitle">{project.subtitle}</div>
          <p className="project-desc">{project.description}</p>
          <ul className="project-points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="tech-row">
            {project.tech.map((t) => (
              <span className="tech-pill" key={t}>
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
