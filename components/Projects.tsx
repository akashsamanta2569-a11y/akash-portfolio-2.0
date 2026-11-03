"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  Database,
  ShieldAlert,
  X,
  CheckCircle,
} from "lucide-react";

export interface ProjectData {
  number: string;
  name: string;
  tagline: string;
  category: "ai" | "backend" | "hackathon";
  categoryLabel: string;
  description: string;
  extendedOverview: string;
  keyFeatures: string[];
  techStack: string[];
  repoUrl?: string;
  badge?: string;
  accentColor: string;
  monogram: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: "01",
    name: "MemoryVault AI",
    tagline: "AI-Powered Memory Support & Cognitive Caregiver Platform",
    category: "ai",
    categoryLabel: "Full-Stack • Applied AI",
    badge: "Featured AI Platform",
    description:
      "A compassionate memory companion platform featuring AI memory chat, family vault, medicine & appointment scheduling, episodic-to-semantic memory consolidation, and a dedicated caregiver dashboard.",
    extendedOverview:
      "MemoryVault AI was engineered to bridge episodic memory gaps through structured conversational AI. It ingests daily conversational snippets, categorizes them into a semantic memory graph, and empowers caregivers with real-time anomaly alerts and compliance monitoring.",
    keyFeatures: [
      "AI Memory Chat with context retrieval and conversational recall",
      "Secure Family Vault for shared photo archives and multimedia stories",
      "Medicine and appointment scheduling with automated push reminders",
      "Episodic-to-semantic memory consolidation pipeline",
      "Caregiver dashboard providing cognitive engagement analytics",
    ],
    techStack: ["FastAPI", "MongoDB", "JWT Auth", "Python", "Applied AI", "Next.js"],
    repoUrl: "https://github.com/akashsamanta2569-a11y/memoryvault-ai",
    accentColor: "#7C6EE6",
    monogram: "MV",
  },
  {
    number: "02",
    name: "LandGuard AI",
    tagline: "Predictive Land Encroachment Detection & Geospatial Monitoring",
    category: "hackathon",
    categoryLabel: "Geospatial • Machine Learning",
    badge: "Smart India Hackathon 2026 Internal Top Scorer",
    description:
      "Smart India Hackathon 2026 project focused on land encroachment detection and predictive monitoring using computer vision, geospatial tile analysis, and automated boundary alerts.",
    extendedOverview:
      "Developed for the Smart India Hackathon 2026 challenge. LandGuard AI ingests historical satellite imagery and land boundary shapefiles to detect unauthorized physical encroachments. The team successfully qualified in the internal university selection with top-scoring recognition.",
    keyFeatures: [
      "Satellite tile comparison and difference segmentation",
      "Automated boundary transgression alerts and polygon overlays",
      "Encroachment risk scoring and historical time-lapse replay",
      "Internal university evaluation top scorer (SIH 2026 internal stage)",
    ],
    techStack: ["Python", "OpenCV", "Geospatial ML", "Flask", "NumPy", "Pandas"],
    repoUrl: "https://github.com/akashsamanta2569-a11y/SIH26017-LandGuard-AI",
    accentColor: "#2E7D5A",
    monogram: "LG",
  },
  {
    number: "03",
    name: "AadhaarGati",
    tagline: "UIDAI Data Hackathon 2026 Analytics & Enrolment Dashboard",
    category: "hackathon",
    categoryLabel: "Data Engineering • Analytics",
    badge: "UIDAI Data Hackathon 2026",
    description:
      "UIDAI Data Hackathon 2026 project exploring Aadhaar enrolment data analysis, predictive forecasting, red-zone bottleneck identification, and interactive administrative dashboards.",
    extendedOverview:
      "Built for the UIDAI Data Hackathon 2026. AadhaarGati processes large-scale demographic and enrolment datasets to surface regional operational backlogs, predict upcoming surge cycles, and visualize state-wise efficiency indices through an interactive dashboard.",
    keyFeatures: [
      "Time-series forecasting for enrolment demand surges",
      "Red-zone bottleneck identification using geographic clustering",
      "Interactive multi-filter dashboard powered by Chart.js and Flask",
      "Optimized SQLite/SQLAlchemy queries handling high-volume records",
    ],
    techStack: ["Python", "Flask", "Pandas", "Chart.js", "SQLAlchemy", "SQLite"],
    repoUrl: "https://github.com/akashsamanta2569-a11y/uidai-aadhaar-enrolment-dashboard",
    accentColor: "#D97706",
    monogram: "AG",
  },
  {
    number: "04",
    name: "TrustChain",
    tagline: "QR-Based Skill Badge Verification & Credential Prototype",
    category: "backend",
    categoryLabel: "Backend Security • Cryptography",
    badge: "Verification Prototype",
    description:
      "Skill badge verification prototype with QR-based credential validation, cryptographic authenticity checks, and tamper-resistant record tracking.",
    extendedOverview:
      "A prototype exploring credential integrity for hackathons and academic badges. TrustChain generates tamper-resistant QR payloads signed with cryptographic hashes, allowing instant offline or online verification without bloated infrastructure.",
    keyFeatures: [
      "Cryptographic signature creation and QR badge generation",
      "Instant client-side QR scanner and server verification endpoint",
      "Lightweight audit trails backed by SQLite and Flask micro-routes",
      "Tamper detection for altered recipient or issue dates",
    ],
    techStack: ["Flask", "SQLite", "Python", "QR Validation", "REST APIs"],
    accentColor: "#3B82F6",
    monogram: "TC",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "backend" | "hackathon">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (activeTab === "ai") return p.category === "ai" || p.techStack.includes("Applied AI");
          if (activeTab === "backend") return p.category === "backend" || p.techStack.includes("FastAPI") || p.techStack.includes("Flask");
          if (activeTab === "hackathon") return p.category === "hackathon";
          return true;
        });

  return (
    <section id="projects" className="projects-section">
      <div className="wrap section-pad">
        {/* Section Header */}
        <div className="section-head">
          <div>
            <span className="section-eyebrow">PORTFOLIO // 03</span>
            <h2 className="section-heading">
              Selected <br />
              <span className="heading-italic">Projects.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            Applied AI platforms, hackathon innovations, and resilient backend systems built with careful attention to architecture and code quality.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="filter-pill-row" role="tablist" aria-label="Project categories">
          <button
            type="button"
            className={`filter-pill ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
            aria-selected={activeTab === "all"}
          >
            All Work ({PROJECTS.length})
          </button>
          <button
            type="button"
            className={`filter-pill ${activeTab === "ai" ? "active" : ""}`}
            onClick={() => setActiveTab("ai")}
            aria-selected={activeTab === "ai"}
          >
            AI &amp; Machine Learning
          </button>
          <button
            type="button"
            className={`filter-pill ${activeTab === "backend" ? "active" : ""}`}
            onClick={() => setActiveTab("backend")}
            aria-selected={activeTab === "backend"}
          >
            Backend &amp; APIs
          </button>
          <button
            type="button"
            className={`filter-pill ${activeTab === "hackathon" ? "active" : ""}`}
            onClick={() => setActiveTab("hackathon")}
            aria-selected={activeTab === "hackathon"}
          >
            Hackathons (SIH / UIDAI)
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.number} className="project-card">
              {/* Card Visual Artwork */}
              <div
                className="project-visual-box"
                style={{
                  background:
                    project.number === "01"
                      ? "linear-gradient(135deg, #F0EEFC 0%, #E6E2FA 100%)"
                      : project.number === "02"
                      ? "linear-gradient(135deg, #EEF7F2 0%, #DFEFE6 100%)"
                      : project.number === "03"
                      ? "linear-gradient(135deg, #FEF7EE 0%, #FCEBDB 100%)"
                      : "linear-gradient(135deg, #EEF4FD 0%, #DCE8FA 100%)",
                }}
              >
                {/* Floating Mock Window */}
                <div className="project-mock-window">
                  <div className="mock-window-header">
                    <div className="mock-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="mock-tagline">{project.tagline}</span>
                  </div>
                  <div className="mock-window-body">
                    <span className="mock-code-hint">
                      $ git clone {project.name.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>
                </div>

                {/* Geometric Monogram Badge */}
                <div
                  className="project-monogram"
                  style={{
                    borderColor: project.accentColor,
                    color: project.accentColor,
                  }}
                >
                  <span>{project.monogram}</span>
                </div>

                <div className="project-index-pill">
                  <span>{project.number} // 04</span>
                </div>
              </div>

              {/* Card Meta & Content */}
              <div className="project-info">
                <div className="project-meta-top">
                  <span className="project-category-tag">{project.categoryLabel}</span>
                  {project.badge && (
                    <span className="project-badge-pill">{project.badge}</span>
                  )}
                </div>

                <h3 className="project-title">{project.name}</h3>

                <p className="project-description">{project.description}</p>

                {/* Tech Pills */}
                <div className="project-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions Row */}
                <div className="project-card-actions">
                  <button
                    type="button"
                    className="btn-details-trigger"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight size={14} />
                  </button>

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-repo-link"
                      aria-label={`Open ${project.name} repository on GitHub`}
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="repo-prototype-tag">Prototype</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global GitHub Link Banner */}
        <div className="projects-footer-cta">
          <span>Looking to explore more repositories, scripts, and open experiments?</span>
          <a
            href="https://github.com/akashsamanta2569-a11y"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={16} />
            <span>Explore Akash&apos;s GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Interactive Project Architecture Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="modal-index">
                  PROJECT {selectedProject.number} // ARCHITECTURE
                </span>
                <h3 id="modal-project-title" className="modal-title">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>System Overview</h4>
                <p>{selectedProject.extendedOverview}</p>
              </div>

              <div className="modal-section">
                <h4>Key Capabilities &amp; Features</h4>
                <ul className="modal-features-list">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle size={15} className="feature-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Technology Stack</h4>
                <div className="modal-tech-grid">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.repoUrl && (
                <div className="modal-footer-cta">
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Github size={16} />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

