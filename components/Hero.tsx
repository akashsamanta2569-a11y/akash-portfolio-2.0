"use client";

import { ArrowDownRight, ArrowUpRight, Sparkles, Terminal, Code2, Cpu } from "lucide-react";
import ThreeHero from "./ThreeHero";

export default function Hero() {
  return (
    <section id="top" className="hero-section wrap">
      {/* Top Meta Eyebrow */}
      <div className="hero-eyebrow">
        <span className="live-pill">
          <span className="live-dot" />
          <span className="live-label">OPEN TO 2027 ROLES & INTERNSHIPS</span>
        </span>
        <span className="eyebrow-separator" />
        <span className="eyebrow-detail">B.TECH CSE (AI & ML) • BRAINWARE UNIVERSITY</span>
        <span className="eyebrow-separator hide-mobile" />
        <span className="eyebrow-badge hide-mobile">PORTFOLIO</span>
      </div>

      {/* Main Grid: Left Copy & Right 3D Art */}
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-tag">
            <Sparkles size={13} className="hero-tag-icon" />
            <span>AKASH SAMANTA</span>
          </div>

          <h1 className="hero-heading">
            Building Ideas Into <br />
            <span className="hero-emphasis">Intelligent Experiences.</span>
          </h1>

          <div className="hero-subtitle-box">
            <p className="hero-subtitle">
              <span className="role-segment">AI &amp; ML Student</span>
              <span className="role-sep">|</span>
              <span className="role-segment">Backend Developer</span>
              <span className="role-sep">|</span>
              <span className="role-segment">Creative Problem Solver</span>
            </p>
          </div>

          <p className="hero-description">
            Passionate about backend architectures, machine learning workflows, and turning complex logic into responsive, human-centered software. Based in West Bengal, India.
          </p>

          {/* Two CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <ArrowDownRight size={17} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Let&apos;s Connect</span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Micro Tech Pill Highlights */}
          <div className="hero-tech-strip">
            <span className="tech-strip-label">CORE FOCUS:</span>
            <div className="tech-strip-items">
              <span className="tech-pill">
                <Terminal size={12} />
                <span>FastAPI &amp; Python</span>
              </span>
              <span className="tech-pill">
                <Cpu size={12} />
                <span>Applied AI / ML</span>
              </span>
              <span className="tech-pill">
                <Code2 size={12} />
                <span>Modern Web &amp; Next.js</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3D Art Column */}
        <div className="hero-art-container">
          <div className="hero-art-backdrop" />
          <ThreeHero />
        </div>
      </div>

      {/* Hero Bottom Banner / Marquee Cue */}
      <div className="hero-footer-bar">
        <div className="hero-footer-left">
          <span className="geo-dot">📍</span>
          <span>WEST BENGAL, INDIA</span>
          <span className="bar-star">✳</span>
          <span>COMMUNITY DRIVEN</span>
          <span className="bar-star">✳</span>
          <span>OPEN SOURCE CONTRIBUTOR</span>
        </div>
        <a href="#about" className="hero-scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={15} className="scroll-arrow-anim" />
        </a>
      </div>
    </section>
  );
}

