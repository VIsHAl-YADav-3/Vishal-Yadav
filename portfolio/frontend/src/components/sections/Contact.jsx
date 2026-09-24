import { useState } from "react";
import { profile } from "../../data.js";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // { type: 'ok' | 'err', text }
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus({ type: "ok", text: "Message sent — thanks! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "err",
        text: "Couldn't send that — is the backend running? (" + err.message + ")",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact">
      <h2 className="section-title">Get in touch</h2>

      <div className="contact-grid">
        <div>
          <div className="contact-info-line">
            <span className="label">EMAIL</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-info-line">
            <span className="label">PHONE</span>
            <span>{profile.phone}</span>
          </div>
          <div className="contact-info-line">
            <span className="label">GITHUB</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.github.replace("https://", "")}
            </a>
          </div>
          <div className="contact-info-line">
            <span className="label">LINKEDIN</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin.replace("https://www.", "")}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? "Sending…" : "Send message"}
          </button>
          {status && <div className={`form-status ${status.type}`}>{status.text}</div>}
        </form>
      </div>
    </section>
  );
}
