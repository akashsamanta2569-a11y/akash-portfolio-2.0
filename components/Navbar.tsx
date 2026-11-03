"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header-outer ${scrolled ? "scrolled" : ""}`}>
      <div className="site-header wrap">
        {/* Brand Logo */}
        <a href="#top" className="logo" aria-label="Akash Samanta - Back to top">
          akash<span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.label}
                {isActive && <span className="nav-indicator" />}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          <div className="header-status-pill" title="Current Status">
            <span className="live-dot" />
            <span className="status-text">Available 2026</span>
          </div>

          <a href="#contact" className="btn-header-cta">
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">Navigation</span>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile Navigation">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${
                activeSection === item.href.substring(1) ? "active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav-num">0{idx + 1}</span>
              <span className="mobile-nav-label">{item.label}</span>
              <ArrowUpRight size={16} className="mobile-nav-arrow" />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <div className="mobile-status-row">
            <span className="live-dot" />
            <span>Open for 2026 internships & engineering roles</span>
          </div>
          <a
            href="#contact"
            className="btn btn-primary w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

