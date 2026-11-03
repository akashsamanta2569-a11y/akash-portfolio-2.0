import { Layers, ShieldCheck, Share2 } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="wrap">
        <div className="philosophy-header">
          <span className="section-eyebrow">PHILOSOPHY // 00</span>
          <p className="philosophy-quote">
            &ldquo;Good technology should feel <span className="quote-italic">effortless</span>.
            I craft systems that are clean on the outside, rigorously engineered on the inside,
            and genuinely useful in people&apos;s hands.&rdquo;
          </p>
        </div>

        <div className="philosophy-grid">
          <div className="philosophy-card">
            <div className="card-num">01</div>
            <div className="card-icon-box">
              <ShieldCheck size={20} />
            </div>
            <h3>Reliable Backend Architecture</h3>
            <p>
              Designing secure, modular RESTful APIs and micro-services with FastAPI, Flask, and Python.
              Focusing on strict typing, efficient querying, and resilient data models.
            </p>
          </div>

          <div className="philosophy-card">
            <div className="card-num">02</div>
            <div className="card-icon-box">
              <Layers size={20} />
            </div>
            <h3>Applied Machine Learning</h3>
            <p>
              Bridging theoretical machine learning with production code. Developing computer vision,
              data forecasting, and NLP workflows that solve real problems on resource-conscious runtimes.
            </p>
          </div>

          <div className="philosophy-card">
            <div className="card-num">03</div>
            <div className="card-icon-box">
              <Share2 size={20} />
            </div>
            <h3>Collaborative Community Impact</h3>
            <p>
              Actively organizing workshops, leading student ambassador initiatives, and breaking down
              campus boundaries so every developer can access hackathons and career growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

