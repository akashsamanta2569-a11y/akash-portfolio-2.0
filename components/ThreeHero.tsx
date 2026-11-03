"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Play, Pause, Grid, Layers, Sparkles } from "lucide-react";
import type { SculptureMode } from "./Scene";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => (
    <div className="sculpture-loading-container" aria-hidden="true">
      <div className="sculpture-loading-pulse" />
      <span className="sculpture-loading-text">Loading 3D Sculpture...</span>
    </div>
  ),
});

export default function ThreeHero() {
  const [mode, setMode] = useState<SculptureMode>("orbital");
  const [isPaused, setIsPaused] = useState(false);
  const [wireframe, setWireframe] = useState(false);

  return (
    <div
      className="sculpture-canvas-wrapper"
      role="region"
      aria-label="Interactive Three.js 3D kinetic sculpture"
    >
      {/* Top Status & Controls Bar */}
      <div className="sculpture-top-bar">
        <span className="sculpture-badge">
          <Sparkles size={11} className="sculpture-badge-icon" />
          <span>WebGL 3D Core</span>
        </span>
        <div className="sculpture-mode-pills" role="tablist" aria-label="Sculpture mode">
          <button
            type="button"
            className={`sculpture-pill ${mode === "orbital" ? "active" : ""}`}
            onClick={() => setMode("orbital")}
            aria-selected={mode === "orbital"}
            title="Switch to Orbital Sculpture"
          >
            Orbital
          </button>
          <button
            type="button"
            className={`sculpture-pill ${mode === "prismatic" ? "active" : ""}`}
            onClick={() => setMode("prismatic")}
            aria-selected={mode === "prismatic"}
            title="Switch to Prismatic Sculpture"
          >
            Prismatic
          </button>
          <button
            type="button"
            className={`sculpture-pill ${mode === "harmonic" ? "active" : ""}`}
            onClick={() => setMode("harmonic")}
            aria-selected={mode === "harmonic"}
            title="Switch to Harmonic Sculpture"
          >
            Harmonic
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas */}
      <div className="sculpture-canvas">
        <Scene mode={mode} isPaused={isPaused} wireframe={wireframe} />
      </div>

      {/* Bottom Floating Control Strip */}
      <div className="sculpture-bottom-bar">
        <div className="sculpture-hint">
          <span className="sculpture-radar-dot" />
          <span>Mouse Interactive • 360° Parallax</span>
        </div>
        <div className="sculpture-action-buttons">
          <button
            type="button"
            className={`sculpture-icon-btn ${wireframe ? "active" : ""}`}
            onClick={() => setWireframe(!wireframe)}
            aria-label={wireframe ? "Solid mode" : "Wireframe mode"}
            title={wireframe ? "Switch to Solid" : "Switch to Wireframe"}
          >
            <Grid size={14} />
          </button>
          <button
            type="button"
            className={`sculpture-icon-btn ${isPaused ? "active" : ""}`}
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
            title={isPaused ? "Resume rotation" : "Pause rotation"}
          >
            {isPaused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
}
