"use client";

import { useState } from "react";
import {
  Calendar,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
  Shield,
  Layers,
} from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "ambassador" | "leadership" | "community";
  typeLabel: string;
  badge?: string;
  description: string;
  highlights: string[];
  disclaimer?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "gsa",
    role: "Google Student Ambassador",
    organization: "Google Student Ambassador Program (India)",
    period: "2026",
    type: "ambassador",
    typeLabel: "Student Ambassador",
    badge: "Selected • Top 10 Challenge Winner",
    description:
      "Selected for Google's prestigious Student Ambassador program in India to foster developer culture, empower peers with Google AI technologies, and organize student-led technical workshops.",
    highlights: [
      "Organized and promoted Gemini and Nano Banana themed student events and interactive workshops.",
      "Helped students explore Google's latest AI developer tools, community learning pathways, and ecosystem resources.",
      "Recognized as one of ten national winners in the Google Ambassador fun-meet challenge.",
    ],
    disclaimer: "Student Ambassador community role. Not an employee of Google.",
  },
  {
    id: "gfg",
    role: "GeeksforGeeks Campus Mantri",
    organization: "GeeksforGeeks • Brainware University Representative",
    period: "2026",
    type: "ambassador",
    typeLabel: "Campus Mantri",
    badge: "Rank #217 / 1,600+ Nationwide",
    description:
      "Represented Brainware University as Campus Mantri, driving technical skill development, competitive programming culture, and interview preparation resources across the student community.",
    highlights: [
      "Achieved Level-1 rank #217 among 1,600+ campus ambassadors nationwide.",
      "Promoted coding contests, DSA prep tracks, and student development opportunities across batches.",
      "Qualified for and received the official GeeksforGeeks Campus Mantri welcome kit.",
    ],
    disclaimer: "Campus leadership role. Not an employee of GeeksforGeeks.",
  },
  {
    id: "iit-kgp",
    role: "Campus Ambassador — Kshitij 2027",
    organization: "IIT Kharagpur • Asia's Largest Techno-Management Fest",
    period: "2027 Campaign",
    type: "ambassador",
    typeLabel: "Outreach Ambassador",
    badge: "Campus Outreach Lead",
    description:
      "Selected as Campus Ambassador supporting outreach and student participation for Kshitij, the annual techno-management symposium of IIT Kharagpur.",
    highlights: [
      "Helped connect interested university students with technical workshops, robotics challenges, and flagship events.",
      "Participated actively in campus ambassador networking and inter-university technical community initiatives.",
      "Facilitated workshop registrations and information sessions for aspiring participants.",
    ],
    disclaimer: "External outreach ambassador. Not an IIT Kharagpur student or employee.",
  },
  {
    id: "community-network",
    role: "Founder & Community Organizer",
    organization: "Student Community Initiative (Cross-University Network)",
    period: "Ongoing",
    type: "community",
    typeLabel: "Community Initiative",
    badge: "Volunteer-Led Initiative",
    description:
      "Spearheading a volunteer-based cross-university student network, initially focused on West Bengal with an ambitious India-wide scope to democratize tech opportunities.",
    highlights: [
      "Curating and sharing high-signal hackathons, college events, workshops, and ambassador openings.",
      "Highlighting competitive challenges including Unstop and Matiks problem sprints.",
      "Encouraging student representatives from different colleges to collaborate, cross-pollinate ideas, and build together.",
    ],
  },
  {
    id: "cyber-club",
    role: "Member & Technical Contributor",
    organization: "University Technical Community • Cyber Club",
    period: "2024 — Present",
    type: "leadership",
    typeLabel: "Campus Community",
    badge: "Active Contributor",
    description:
      "Active member of the campus Cyber Club and contributor to student leadership, technical bootcamps, and developer initiatives.",
    highlights: [
      "Participated in peer learning circles focusing on cybersecurity fundamentals, Linux, and backend scripting.",
      "Contributed to organizing university tech events and collaborative hackathon preparation sessions.",
    ],
  },
];

export default function Experience() {
  const [filter, setFilter] = useState<"all" | "ambassador" | "community" | "leadership">("all");

  const filteredExperiences =
    filter === "all"
      ? EXPERIENCES
      : EXPERIENCES.filter((item) => item.type === filter);

  return (
    <section id="experience" className="experience-section">
      <div className="wrap section-pad">
        {/* Section Header */}
        <div className="section-head">
          <div>
            <span className="section-eyebrow">TRACK RECORD // 02</span>
            <h2 className="section-heading">
              Experience &amp; <br />
              <span className="heading-italic">Leadership.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            Student leadership roles, campus ambassador initiatives, and community organizing across leading developer ecosystems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-pill-row" role="tablist" aria-label="Experience filters">
          <button
            type="button"
            className={`filter-pill ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
            aria-selected={filter === "all"}
          >
            All Initiatives ({EXPERIENCES.length})
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "ambassador" ? "active" : ""}`}
            onClick={() => setFilter("ambassador")}
            aria-selected={filter === "ambassador"}
          >
            Ambassadorships (3)
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "community" ? "active" : ""}`}
            onClick={() => setFilter("community")}
            aria-selected={filter === "community"}
          >
            Community Network (1)
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "leadership" ? "active" : ""}`}
            onClick={() => setFilter("leadership")}
            aria-selected={filter === "leadership"}
          >
            University Clubs (1)
          </button>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-spine" />

          <div className="timeline-items">
            {filteredExperiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                {/* Timeline Node Point */}
                <div className="timeline-node">
                  <div className="node-dot" />
                  <span className="node-index">0{index + 1}</span>
                </div>

                {/* Timeline Card */}
                <div className="timeline-card">
                  <div className="card-top-row">
                    <div className="card-primary-meta">
                      <span className="card-type-tag">{exp.typeLabel}</span>
                      <div className="card-period">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {exp.badge && (
                      <span className="card-honor-badge">
                        <Sparkles size={12} />
                        <span>{exp.badge}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="card-role-title">{exp.role}</h3>
                  <div className="card-org-name">{exp.organization}</div>

                  <p className="card-description">{exp.description}</p>

                  <div className="card-highlights-list">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="highlight-bullet">
                        <CheckCircle2 size={15} className="bullet-check" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {exp.disclaimer && (
                    <div className="card-disclaimer">
                      <span className="disclaimer-label">Note:</span> {exp.disclaimer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

