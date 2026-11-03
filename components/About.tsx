import Image from "next/image";
import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Award,
  Terminal,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="wrap section-pad">
        <div className="about-grid">
          {/* Left Visual Editorial Column */}
          <div className="about-visual-column">
            <div className="about-art-card">
              <div className="art-badge-top">
                <span>IDENTITY // 2026</span>
                <span className="art-badge-dot" />
              </div>

              <div className="art-centerpiece">
                {/* Real User Photo with Floating Cosmic Rings */}
                <div className="art-photo-frame">
                  <Image
                    src="/akash-profile.jpg"
                    alt="Akash Samanta — Backend Developer & AI/ML Engineer"
                    width={400}
                    height={400}
                    priority
                    className="art-real-photo"
                  />
                  <div className="art-photo-overlay" />
                </div>

                <div className="art-orbit-ring ring-1" />
                <div className="art-orbit-ring ring-2" />
                <div className="art-satellite" />
              </div>

              <div className="art-caption-box">
                <div className="art-caption-row">
                  <span className="art-caption-title">Akash Samanta</span>
                  <span className="art-verified-badge" title="Verified Profile">
                    <CheckCircle2 size={15} />
                  </span>
                </div>
                <span className="art-caption-sub">AI &amp; ML Student • Backend Developer</span>
              </div>
            </div>

            {/* Quick Fact Badges */}
            <div className="about-facts-list">
              <div className="fact-item">
                <GraduationCap size={16} className="fact-icon" />
                <div>
                  <div className="fact-label">ACADEMIC FOUNDATION</div>
                  <div className="fact-val">B.Tech CSE (AI &amp; ML) • Brainware University</div>
                </div>
              </div>
              <div className="fact-item">
                <MapPin size={16} className="fact-icon" />
                <div>
                  <div className="fact-label">LOCATION &amp; REACH</div>
                  <div className="fact-val">West Bengal, India • Remote &amp; Global Availability</div>
                </div>
              </div>
              <div className="fact-item">
                <Terminal size={16} className="fact-icon" />
                <div>
                  <div className="fact-label">ENGINEERING DISCIPLINE</div>
                  <div className="fact-val">Backend APIs, Applied ML, System Modeling</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Story Column */}
          <div className="about-content-column">
            <span className="section-eyebrow">ABOUT ME // 01</span>
            
            <h2 className="section-heading">
              Curious by nature.<br />
              <span className="heading-italic">Builder</span> by choice.
            </h2>

            <div className="about-prose">
              <p className="lead-paragraph">
                I am a B.Tech CSE (AI &amp; ML) student at Brainware University with an interest in
                backend engineering, artificial intelligence, machine learning, problem solving,
                developer communities and building practical products.
              </p>
              
              <p>
                I enjoy participating in hackathons, experimenting with new technologies, learning
                from other developers, and helping students discover opportunities. Whether architecting
                a resilient REST API in FastAPI, exploring computer vision for land encroachment detection,
                or analyzing public data distributions, I care deeply about writing clean, reliable code
                that stands up to real scrutiny.
              </p>

              <p>
                Beyond code, my drive is centered around community empowerment. As a Google Student Ambassador
                and GeeksforGeeks Campus Mantri, I work to democratize technical knowledge and bridge
                cross-university student talent across West Bengal and India.
              </p>
            </div>

            {/* Interactive Stats / Milestones Grid */}
            <div className="about-highlights-grid">
              <div className="highlight-box">
                <div className="highlight-header">
                  <Award size={16} className="highlight-icon" />
                  <span className="highlight-tag">RANKING</span>
                </div>
                <div className="highlight-value">#217</div>
                <div className="highlight-desc">GeeksforGeeks Campus Mantri Level-1 out of 1,600+</div>
              </div>

              <div className="highlight-box">
                <div className="highlight-header">
                  <Terminal size={16} className="highlight-icon" />
                  <span className="highlight-tag">CHALLENGE</span>
                </div>
                <div className="highlight-value">30 Days</div>
                <div className="highlight-desc">Completed Unstop Problem of the Day streak</div>
              </div>

              <div className="highlight-box">
                <div className="highlight-header">
                  <HeartHandshake size={16} className="highlight-icon" />
                  <span className="highlight-tag">LEADERSHIP</span>
                </div>
                <div className="highlight-value">1 of 10</div>
                <div className="highlight-desc">Winners in Google Ambassador Fun-Meet Challenge</div>
              </div>
            </div>

            <div className="about-footer-actions">
              <a href="#experience" className="btn btn-primary">
                <span>View My Journey</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/akashsamanta2569-a11y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
