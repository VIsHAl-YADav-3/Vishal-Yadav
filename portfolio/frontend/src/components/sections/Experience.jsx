import { experience } from "../../data.js";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Work Experience</h2>

      {experience.map((job) => (
        <div className="timeline-item" key={job.company}>
          <div className="timeline-role">
            {job.role} · {job.company}
          </div>
          <div className="timeline-meta">{job.period}</div>
          <ul className="timeline-points">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
