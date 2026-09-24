import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Tabs from "./components/Tabs.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Achievements from "./components/sections/Achievements.jsx";
import Contact from "./components/sections/Contact.jsx";
import { projects } from "./data.js";

const SECTION_IDS = [
  "about",
  "skills",
  "projects",
  ...projects.map((p) => `project-${p.fileName}`),
  "experience",
  "achievements",
  "contact",
];

export default function App() {
  const [activeId, setActiveId] = useState("about");
  // While a click-triggered scroll is in flight, ignore the scroll-spy
  // observer so the clicked item stays highlighted instantly instead of
  // flickering through whatever sections scroll past on the way there.
  const suppressSpyRef = useRef(false);
  const resumeSpyTimeoutRef = useRef(null);

  function handleNavigate(id) {
    setActiveId(id);
    suppressSpyRef.current = true;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

    clearTimeout(resumeSpyTimeoutRef.current);
    resumeSpyTimeoutRef.current = setTimeout(() => {
      suppressSpyRef.current = false;
    }, 700);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (suppressSpyRef.current) return;
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Sidebar activeId={activeId} onNavigate={handleNavigate} />
      <div className="main">
        <Tabs activeId={activeId} onNavigate={handleNavigate} />
        <div className="content">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </div>
        <footer>Built with the MERN stack · React + Node + Express + MongoDB</footer>
      </div>
    </div>
  );
}
