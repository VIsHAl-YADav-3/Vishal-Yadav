import { achievements } from "../../data.js";

export default function Achievements() {
  return (
    <section id="achievements">
      <h2 className="section-title">Achievements</h2>

      {achievements.map((item) => (
        <div className="achievement-item" key={item.title}>
          <div className="achievement-title">{item.title}</div>
          <div className="achievement-meta">{item.period}</div>
          <div className="achievement-detail">{item.detail}</div>
        </div>
      ))}
    </section>
  );
}
