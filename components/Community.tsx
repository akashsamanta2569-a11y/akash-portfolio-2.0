import {
  Users2,
  HeartHandshake,
  Compass,
  ArrowUpRight,
  Sparkles,
  Share2,
  Globe2,
  MessageCircle,
} from "lucide-react";

export default function Community() {
  return (
    <section id="community" className="community-section">
      <div className="wrap section-pad">
        {/* Section Header */}
        <div className="community-hero-box">
          <div className="community-meta-top">
            <span className="section-eyebrow">COMMUNITY &amp; IMPACT // 06</span>
            <span className="volunteer-badge">
              <Sparkles size={12} />
              <span>Free &amp; Volunteer-Led</span>
            </span>
          </div>

          <h2 className="community-main-heading">
            Growing Together, <br />
            <span className="heading-italic">Beyond Campus Boundaries.</span>
          </h2>

          <p className="community-lead">
            Too often, high-impact opportunities — national hackathons, ambassador applications,
            and developer grants — remain siloed inside select institutions. I founded this
            volunteer initiative to connect student developers across universities, initially
            rooted in West Bengal with a broader India-wide vision.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="community-pillars-grid">
          <div className="community-pillar-card">
            <div className="pillar-icon-box">
              <Share2 size={22} />
            </div>
            <div className="pillar-num">PILLAR 01</div>
            <h3>Opportunity Dispatch</h3>
            <p>
              Curating and surfacing actionable hackathons, open-source cohorts, Unstop
              contests, and Matiks problem sprints. Every opportunity is vetted for real student value.
            </p>
            <div className="pillar-footer">
              <span className="pillar-tag">Zero Cost • Zero Spam</span>
            </div>
          </div>

          <div className="community-pillar-card">
            <div className="pillar-icon-box">
              <Globe2 size={22} />
            </div>
            <div className="pillar-num">PILLAR 02</div>
            <h3>Cross-University Bridges</h3>
            <p>
              Encouraging student representatives and ambassadors from different colleges
              to cross-pollinate ideas, share campus event invites, and form inter-institutional hackathon teams.
            </p>
            <div className="pillar-footer">
              <span className="pillar-tag">West Bengal &amp; Beyond</span>
            </div>
          </div>

          <div className="community-pillar-card">
            <div className="pillar-icon-box">
              <HeartHandshake size={22} />
            </div>
            <div className="pillar-num">PILLAR 03</div>
            <h3>Peer Mentorship</h3>
            <p>
              Demystifying the process of applying to competitive ambassador programs like
              Google Student Ambassador or GeeksforGeeks Campus Mantri, helping juniors build confidence.
            </p>
            <div className="pillar-footer">
              <span className="pillar-tag">Student-to-Student Guidance</span>
            </div>
          </div>
        </div>

        {/* Community Collaboration Invite Card */}
        <div className="community-action-card">
          <div className="action-card-copy">
            <div className="action-tag">
              <Users2 size={15} />
              <span>OPEN COLLABORATION</span>
            </div>
            <h3>Represent Your Campus or Collaborate</h3>
            <p>
              Are you a student lead, club organizer, or aspiring developer looking to bring
              hackathons and mentorship to your college? Join our active WhatsApp community to connect, share opportunities, and build together.
            </p>
          </div>
          <div className="action-card-cta">
            <a
              href="https://chat.whatsapp.com/G59DtrCUDglIoB9hxgTAxx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Connect on Akash's WhatsApp Community"
            >
              <MessageCircle size={16} />
              <span>Connect on Community</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
