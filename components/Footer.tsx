"use client";

import { ArrowUp, Github, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Show West Bengal / IST (UTC+5:30) local time
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        {/* Top Footer Row */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              akash<span className="logo-dot">.</span>
            </a>
            <p className="footer-bio">
              B.Tech CSE (AI &amp; ML) at Brainware University. Backend systems, applied AI, and student developer communities.
            </p>
          </div>

          <div className="footer-time-box">
            <span className="time-label">LOCAL TIME (IST / WB, INDIA):</span>
            <div className="time-value">
              <span className="time-dot" />
              <span>{currentTime || "15:00:00 PM IST"}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <div className="footer-copy">
            © {new Date().getFullYear()} AKASH SAMANTA. ALL RIGHTS RESERVED.
          </div>

          <div className="footer-tech-stack">
            <span>BUILT WITH NEXT.JS 15 • THREE.JS • REACT THREE FIBER</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

