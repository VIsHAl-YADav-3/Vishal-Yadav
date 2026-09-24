import { profile, projects } from "../data.js";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  {
    id: "projects",
    label: "Projects",
    children: projects.map((p) => ({
      id: `project-${p.fileName}`,
      label: p.name,
    })),
  },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar({ activeId, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="name">{profile.name}</div>
        <div className="role">{profile.role}</div>
      </div>

      <div className="tree-label">EXPLORER</div>
      <div className="tree-sub">
        {NAV.map((item) => (
          <div key={item.id}>
            <button
              className={`tree-item${activeId === item.id ? " active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="dot">•</span>
              {item.label}
            </button>
            {item.children?.map((child) => (
              <button
                key={child.id}
                className={`tree-item nested${activeId === child.id ? " active" : ""}`}
                onClick={() => onNavigate(child.id)}
              >
                <span className="dot">–</span>
                {child.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
