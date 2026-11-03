import {
  Trophy,
  Award,
  Sparkles,
  Flame,
  Code2,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

interface Achievement {
  id: string;
  badge: string;
  metric: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: typeof Trophy;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "gfg-rank",
    badge: "National Standing",
    metric: "#217",
    title: "GeeksforGeeks Campus Mantri Level-1",
    organization: "GeeksforGeeks India",
    period: "2026",
    description:
      "Ranked #217 out of 1,600+ campus ambassadors across India for active contributions to university coding culture, contest drives, and tech engagement.",
    icon: Trophy,
  },
  {
    id: "gsa-winner",
    badge: "Competition Winner",
    metric: "1 of 10",
    title: "Google Ambassador Fun-Meet Challenge",
    organization: "Google Student Ambassador Program",
    period: "2026",
    description:
      "Recognized as one of ten selected national winners in the Google Ambassador challenge, demonstrating creative problem solving and active community leadership.",
    icon: Award,
  },
  {
    id: "sih-selection",
    badge: "Hackathon Recognition",
    metric: "Top Scorer",
    title: "Smart India Hackathon 2026 Internal Selection",
    organization: "Brainware University SIH Evaluation",
    period: "2026",
    description:
      "LandGuard AI qualified in the university's internal SIH 2026 screening with top-scoring evaluations for geospatial AI and encroachment detection architecture.",
    icon: ShieldCheck,
  },
  {
    id: "unstop-potd",
    badge: "Consistency Streak",
    metric: "30 Days",
    title: "Unstop Problem of the Day Streak",
    organization: "Unstop Competitive Track",
    period: "2026",
    description:
      "Completed the rigorous 30-Day Problem of the Day challenge on Unstop, solving daily algorithmic, data structures, and logical reasoning problems without missing a day.",
    icon: Flame,
  },
  {
    id: "gsa-selection",
    badge: "Community Selection",
    metric: "Selected",
    title: "Google Student Ambassador Selection",
    organization: "Google India Ecosystem",
    period: "2026",
    description:
      "Selected through a competitive evaluation process to champion Google's developer tools and Gemini-driven student learning programs on campus.",
    icon: Sparkles,
  },
  {
    id: "hackathons-sprints",
    badge: "Technical Sprints",
    metric: "Active",
    title: "University & External Hackathon Sprints",
    organization: "UIDAI, SIH & Inter-College Hackathons",
    period: "2024 — Present",
    description:
      "Continually building rapid prototypes under pressure, collaborating with cross-functional teams, and presenting technical systems to expert judging panels.",
    icon: Code2,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="wrap section-pad">
        {/* Section Header */}
        <div className="section-head">
          <div>
            <span className="section-eyebrow">HONORS &amp; RECOGNITION // 05</span>
            <h2 className="section-heading">
              Verifiable <br />
              <span className="heading-italic">Milestones.</span>
            </h2>
          </div>
          <p className="section-head-desc">
            Authentic recognitions, competitive standings, and hackathon milestones achieved through consistent dedication and community work.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {ACHIEVEMENTS.map((ach) => {
            const Icon = ach.icon;
            return (
              <div key={ach.id} className="achievement-card">
                <div className="achievement-header">
                  <span className="achievement-badge-pill">{ach.badge}</span>
                  <div className="achievement-metric">{ach.metric}</div>
                </div>

                <div className="achievement-title-row">
                  <div className="achievement-icon-box">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="achievement-title">{ach.title}</h3>
                    <div className="achievement-org">
                      {ach.organization} • {ach.period}
                    </div>
                  </div>
                </div>

                <p className="achievement-desc">{ach.description}</p>

                <div className="achievement-footer">
                  <span className="verified-tag">
                    <CheckCircle size={13} />
                    <span>Verified Milestone</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

