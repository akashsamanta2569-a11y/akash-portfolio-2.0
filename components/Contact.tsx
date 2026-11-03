"use client";

import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MessageSquare,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactEmail = "akashsamanta0018@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="wrap section-pad">
        <div className="contact-card-wrapper">
          <div className="contact-grid">
            {/* Left Column: Direct Info & Editorial */}
            <div className="contact-editorial">
              <div className="contact-meta-eyebrow">
                <span className="section-eyebrow">GET IN TOUCH // 07</span>
                <span className="availability-tag">
                  <span className="live-dot" />
                  <span>Available for 2027 Roles</span>
                </span>
              </div>

              <h2 className="contact-heading">
                Let&apos;s build <br />
                <span className="heading-italic">something good.</span>
                <span className="contact-sparkle">✳</span>
              </h2>

              <p className="contact-description">
                Whether you have an internship opportunity, an ambitious backend / AI project,
                a hackathon team invitation, or simply want to talk tech and community building — my inbox is always open.
              </p>

              {/* Copyable Email Box */}
              <div className="email-copy-box">
                <div className="email-info">
                  <span className="email-label">DIRECT EMAIL INQUIRIES</span>
                  <div className="email-address">{contactEmail}</div>
                </div>

                <div className="email-actions">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-copy-email"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={15} className="copied-check" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contactEmail}`}
                    className="btn-mailto"
                    title="Open mail client"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Verified Profiles Row */}
              <div className="contact-profiles-strip">
                <span className="profiles-label">PROFILES &amp; SOCIALS:</span>
                <div className="profile-links-list">
                  <a
                    href="https://github.com/akashsamanta2569-a11y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-btn"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href="https://chat.whatsapp.com/G59DtrCUDglIoB9hxgTAxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-btn"
                    title="Join Akash's WhatsApp Community"
                  >
                    <MessageCircle size={16} />
                    <span>WP Community</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/akashsamanta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-btn placeholder-btn"
                    title="LinkedIn profile placeholder"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                    <span className="profile-placeholder-tag">(Placeholder)</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quick Message Box */}
            <div className="contact-form-column">
              <div className="contact-form-container">
                <div className="form-top-bar">
                  <MessageSquare size={16} className="form-top-icon" />
                  <span className="form-top-title">Quick Message Dispatch</span>
                </div>

                {formSubmitted ? (
                  <div className="form-success-state">
                    <div className="success-icon-wrap">
                      <Check size={28} />
                    </div>
                    <h3>Message Received!</h3>
                    <p>
                      Thank you, <strong>{formData.name}</strong>. Your note has been logged.
                      You can also reach out directly via{" "}
                      <a href={`mailto:${contactEmail}`} className="inline-email-link">
                        {contactEmail}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      className="btn btn-secondary mt-4"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="quick-contact-form">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. elena@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject / Topic
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Internship / Hackathon / Collab"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Tell me a bit about what you're working on or how we can collaborate..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="form-textarea"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary form-submit-btn">
                      <span>Send Direct Message</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

