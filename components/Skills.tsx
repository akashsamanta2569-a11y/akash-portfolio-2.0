"use client";

import { useState } from "react";
import {
  Code2,
  Server,
  Layout,
  Database,
  Cpu,
  Wrench,
  Check,
  Sparkles,
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Code2;
  items: string[];
  description: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Core syntax & algorithms",
    icon: Code2,
    items: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL"],
    description:
      "Deep foundation in Python for backend engineering and machine learning; C/C++ for systems concepts and data structures; modern TypeScript for type-safe applications.",
  },
  {
    id: "backend",
    title: "Backend Engineering",
    subtitle: "APIs & server architecture",
    icon: Server,
    items: ["FastAPI", "Flask", "RESTful APIs", "JWT Authentication", "Middleware", "Pydantic"],
    description:
      "Designing scalable asynchronous endpoints in FastAPI, secure token authentication with JWT, schema validation, and clean layered microservices.",
  },
  {
    id: "frontend",
    title: "Frontend & UI Systems",
    subtitle: "Client interfaces & tooling",
    icon: Layout,
    items: ["Next.js", "React", "Tailwind CSS", "Streamlit", "HTML5 / CSS3", "Responsive Design"],
    description:
      "Building fast, accessible client experiences with Next.js App Router, React, and modular styling. Crafting data dashboards with Streamlit for rapid ML evaluation.",
  },
  {
    id: "databases",
    title: "Databases & Storage",
    subtitle: "Relational & document stores",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "SQLite", "Supabase", "SQLAlchemy", "Data Modeling"],
    description:
      "Schema design, indexing, and ORM integration across relational engines (PostgreSQL, SQLite) and document stores (MongoDB, Supabase).",
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    subtitle: "Data science & models",
    icon: Cpu,
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "TensorFlow Lite",
      "Edge Impulse",
    ],
    description:
      "Data preprocessing, statistical analysis, computer vision pipelines, and embedded model inference exploring edge AI paradigms.",
  },
  {
    id: "tools",
    title: "Developer Tools & Platforms",
    subtitle: "Workflow & infrastructure",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Docker", "Google Cloud Fundamentals", "Linux CLI"],
    description:
      "Version control workflows, containerization basics with Docker, cloud fundamentals, and command-line efficiency.",
  },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<string>("all");

  const filtered =
    activeGroup === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeGroup);

  return (
    <section id="skills" className="skills-section">
      <div className="wrap section-pad">
        {/* Section Header */}
        <div className="section-head">
          <div>
            <span className="section-eyebrow">CAPABILITIES // 04</span>
            <h2 className="section-heading">
              Technical <br />
              <span className="heading-italic">Toolkit.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            Organized by engineering discipline. No arbitrary percentages — only tested technologies actively applied in real projects and hackathons.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="filter-pill-row" role="tablist" aria-label="Skills categories">
          <button
            type="button"
            className={`filter-pill ${activeGroup === "all" ? "active" : ""}`}
            onClick={() => setActiveGroup("all")}
            aria-selected={activeGroup === "all"}
          >
            All Disciplines ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill ${activeGroup === cat.id ? "active" : ""}`}
              onClick={() => setActiveGroup(cat.id)}
              aria-selected={activeGroup === cat.id}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="skills-cards-grid">
          {filtered.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="skill-category-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon-box">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="skill-card-num">0{idx + 1} // DOMAIN</span>
                    <h3 className="skill-card-title">{cat.title}</h3>
                    <div className="skill-card-subtitle">{cat.subtitle}</div>
                  </div>
                </div>

                <p className="skill-card-desc">{cat.description}</p>

                {/* Items Pill Matrix */}
                <div className="skill-pills-wrap">
                  {cat.items.map((skill) => (
                    <div key={skill} className="skill-item-pill">
                      <span className="skill-pill-bullet" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

