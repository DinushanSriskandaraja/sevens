"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeadFunnel from "../components/LeadFunnel";
import { PROJECTS } from "../../data/siteData";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<"All" | "Web Application" | "Website" | "Mobile Application">("All");

  const filteredProjects = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />

      <main id="top" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
        {/* Page Hero */}
        <section className="section" style={{ paddingBottom: "40px" }}>
          <div className="wrap">
            <div className="section-head" style={{ maxWidth: "800px" }}>
              <p className="hero__kicker">
                <span className="dot" aria-hidden="true"></span>
                Selected Case Studies
              </p>
              <h1 style={{ fontSize: "clamp(34px, 4.4vw, 56px)", fontWeight: 700, margin: "16px 0", letterSpacing: "-0.035em", color: "#ffffff" }}>
                Production digital products engineered for velocity and impact.
              </h1>
              <p style={{ fontSize: "17px", color: "var(--p-muted)", lineHeight: 1.6 }}>
                Explore 34+ web applications, high-performance websites, and mobile applications we have engineered for venture-backed founders and global brands.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="portfolio-filter-row">
              {(["All", "Web Application", "Website", "Mobile Application"] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`filter-btn ${filter === cat ? "active" : ""}`}
                >
                  {cat === "All" ? "All Case Studies (6)" : `${cat}s`}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid">
              {filteredProjects.map((proj) => (
                <div key={proj.id} id={proj.id} className="case-card span-6">
                  <div className="case-media">
                    <img src={proj.image} alt={proj.title} loading="lazy" />
                    <span className="case-category-badge">{proj.category}</span>
                  </div>
                  <div className="case-content">
                    <div className="case-header">
                      <h3>{proj.title}</h3>
                      <p className="case-tagline">{proj.tagline}</p>
                    </div>

                    <p className="case-desc">{proj.overview}</p>

                    {/* Challenge & Solution Breakdown */}
                    <div style={{ margin: "16px 0", padding: "16px", background: "var(--p-surface)", borderRadius: "var(--r-inner)", border: "1px solid var(--p-border)", fontSize: "13px" }}>
                      <div style={{ marginBottom: "8px" }}>
                        <strong style={{ color: "var(--p-accent)" }}>Challenge: </strong>
                        <span style={{ color: "var(--p-muted)" }}>{proj.challenge}</span>
                      </div>
                      <div>
                        <strong style={{ color: "#ffffff" }}>Solution: </strong>
                        <span style={{ color: "var(--p-muted)" }}>{proj.solution}</span>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="case-metrics-grid">
                      {proj.metrics.map((m, idx) => (
                        <div key={idx} className="case-metric-box">
                          <strong>{m.value}</strong>
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote style={{ margin: "14px 0 20px 0", fontStyle: "normal", fontSize: "13px", color: "#fdfbf7", borderLeft: "2px solid var(--p-accent)", paddingLeft: "14px" }}>
                      &ldquo;{proj.testimonial.quote}&rdquo;
                      <footer style={{ marginTop: "6px", fontSize: "12px", color: "var(--p-muted)" }}>
                        — {proj.testimonial.author}, {proj.testimonial.role}
                      </footer>
                    </blockquote>

                    {/* Tech Stack */}
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "auto" }}>
                      {proj.stack.map((tech, idx) => (
                        <span key={idx} className="stack-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Funnel Estimator inside Portfolio */}
        <section className="section" style={{ borderTop: "1px solid var(--p-border)", paddingTop: "80px" }}>
          <div className="wrap grid grid--top" style={{ gap: "32px" }}>
            <div className="span-5">
              <div className="section-head">
                <p className="hero__kicker">
                  <span className="dot" aria-hidden="true"></span>
                  Start a Project
                </p>
                <h2>Have a platform in mind? <span className="muted">Let us estimate your sprint scope.</span></h2>
                <p>
                  Whether launching a complex B2B SaaS web app, an offline-first iOS/Android mobile application, or a high-converting marketing site, our senior architects deliver fixed-price roadmaps within 24 hours.
                </p>
              </div>
              
              <div className="contact-bento-card" style={{ marginTop: "32px", padding: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--p-border)", paddingBottom: "12px" }}>
                    <span style={{ color: "var(--p-muted)", fontSize: "14px" }}>Architecture Proposal</span>
                    <strong style={{ color: "var(--p-accent)", fontSize: "14px" }}>Within 24 Hours</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--p-border)", paddingBottom: "12px" }}>
                    <span style={{ color: "var(--p-muted)", fontSize: "14px" }}>Sprint Cadence</span>
                    <strong style={{ color: "#ffffff", fontSize: "14px" }}>2-Week Milestones</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--p-muted)", fontSize: "14px" }}>Code Ownership</span>
                    <strong style={{ color: "#ffffff", fontSize: "14px" }}>100% Day One</strong>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="span-7 start-6">
              <LeadFunnel />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
