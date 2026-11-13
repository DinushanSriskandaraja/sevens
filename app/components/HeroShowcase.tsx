"use client";

import React, { useState } from "react";

type Discipline = "web" | "mobile" | "website";

interface ShowcaseItem {
  id: Discipline;
  label: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  stack: string;
  image: string;
}

const SHOWCASES: ShowcaseItem[] = [
  {
    id: "web",
    label: "Web Applications",
    title: "Cobalt Pay",
    category: "B2B Subscription Platform",
    metric: "$45.2M",
    metricLabel: "ARR processed",
    stack: "Next.js 16 · Stripe",
    image: "assets/img/hero-web-app.jpg",
  },
  {
    id: "mobile",
    label: "Mobile Applications",
    title: "Kite Health",
    category: "Telehealth & Clinical Portal",
    metric: "4.9 ★",
    metricLabel: "60fps app",
    stack: "React Native · WebRTC",
    image: "assets/img/hero-mobile-app.jpg",
  },
  {
    id: "website",
    label: "Websites",
    title: "Vesper Architecture",
    category: "Editorial Practice Index",
    metric: "100/100",
    metricLabel: "Lighthouse",
    stack: "Next.js · Sanity",
    image: "assets/img/hero-website.jpg",
  },
];

export default function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<Discipline>("web");
  const current = SHOWCASES.find((s) => s.id === activeTab) || SHOWCASES[0];

  return (
    <div className="hero-minimal-showcase">
      {/* Minimal Discipline Switcher */}
      <div className="hero-tabs-minimal" role="tablist" aria-label="Disciplines">
        {SHOWCASES.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`hero-tab-minimal ${isActive ? "active" : ""}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Clean Frameless Display */}
      <div className="hero-frame-minimal">
        <img
          key={current.image}
          src={current.image}
          alt={`${current.title} - ${current.category}`}
          className="hero-image-minimal"
          loading="eager"
          decoding="async"
        />

        {/* Minimal Glass Caption */}
        <div className="hero-caption-minimal">
          <div className="caption-info">
            <span className="caption-title">{current.title}</span>
            <span className="caption-sep" aria-hidden="true">·</span>
            <span className="caption-meta">{current.stack}</span>
          </div>
          <div className="caption-metric">
            <strong>{current.metric}</strong>
            <span>{current.metricLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
