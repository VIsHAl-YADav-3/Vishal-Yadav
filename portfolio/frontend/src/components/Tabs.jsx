const TABS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function isActiveTab(tabId, activeId) {
  if (activeId === tabId) return true;
  if (tabId === "projects" && activeId?.startsWith("project-")) return true;
  return false;
}

export default function Tabs({ activeId, onNavigate }) {
  return (
    <div className="tabbar">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`tab${isActiveTab(tab.id, activeId) ? " active" : ""}`}
          onClick={() => onNavigate(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
