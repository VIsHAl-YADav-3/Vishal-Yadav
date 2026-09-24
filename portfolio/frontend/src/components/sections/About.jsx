import { profile, education } from "../../data.js";

export default function About() {
  return (
    <section id="about">
      <div className="hero">
        <div className="hero-top">
          <div className="hero-copy">
            <div className="hero-line">$ whoami</div>
            <h1>
              {profile.name} — {profile.role}
            </h1>
            <p className="tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <a className="btn primary" href={profile.resumeFile} download>
                Download Resume
              </a>
              <a className="btn" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <figure className="hero-photo">
            <img src={profile.photo} alt={profile.name} />
          </figure>
        </div>

        <p className="about-body">{profile.about}</p>

        <div className="education-card">
          <div className="degree">{education.degree}</div>
          <div className="meta">
            {education.school} · {education.years} · {education.score}
          </div>
        </div>
      </div>
    </section>
  );
}
