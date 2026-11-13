"use client";

import React, { useState } from "react";

interface LeadFunnelProps {
  initialService?: string;
  initialEmail?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function LeadFunnel({ initialService = "Web Application", initialEmail = "", compact = false }: LeadFunnelProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [service, setService] = useState(initialService);
  const [capabilities, setCapabilities] = useState<string[]>([
    "User Auth & Access Control",
    "API & Database Architecture",
  ]);
  const [timeline, setTimeline] = useState("Standard (6–8 weeks)");
  const [budget, setBudget] = useState("$15k – $30k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const [company, setCompany] = useState("");
  const [brief, setBrief] = useState("");

  React.useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  const allCapabilities = [
    "User Auth & Access Control",
    "Stripe & Subscription Billing",
    "AI & LLM Workflows",
    "Real-time WebSockets / Chat",
    "Headless CMS (Sanity / Payload)",
    "Offline Database Sync",
    "API & Database Architecture",
    "Custom Analytics Dashboard",
    "Native iOS & Android Deployment",
    "Automated CI/CD Pipeline",
  ];

  const toggleCapability = (cap: string) => {
    setCapabilities((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    );
  };

  // Estimate calculations
  const calculateEstimate = () => {
    let baseWeeks = 4;
    let baseSprints = 2;
    if (service === "Mobile Application") {
      baseWeeks = 6;
      baseSprints = 3;
    } else if (service === "Full-Stack Ecosystem") {
      baseWeeks = 8;
      baseSprints = 4;
    } else if (service === "High-Performance Website") {
      baseWeeks = 3;
      baseSprints = 1.5;
    }

    const extraWeeks = Math.floor(capabilities.length / 3);
    const totalWeeks = baseWeeks + extraWeeks;
    const sprints = (totalWeeks / 2).toFixed(1).replace(".0", "");

    return {
      weeks: `${totalWeeks}–${totalWeeks + 2} weeks`,
      sprints: `${sprints} sprints`,
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <div className={`funnel-container ${compact ? "funnel-container--compact" : ""}`}>
      {/* Progress Indicator */}
      {!submitted && (
        <div className="funnel-progress">
          <div className="funnel-steps">
            {[
              { num: 1, label: "Platform" },
              { num: 2, label: "Scope" },
              { num: 3, label: "Timeline" },
              { num: 4, label: "Brief" },
            ].map((s) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setStep(s.num as 1 | 2 | 3 | 4)}
                className={`funnel-step-btn ${step === s.num ? "active" : ""} ${
                  step > s.num ? "completed" : ""
                }`}
              >
                <span className="step-num">{step > s.num ? "✓" : s.num}</span>
                <span className="step-label">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="funnel-live-pill">
            <span className="pulse-dot" />
            <span>Est. Cadence: <strong>{estimate.sprints}</strong> ({estimate.weeks})</span>
          </div>
        </div>
      )}

      {submitted ? (
        <div className="funnel-success">
          <div className="success-icon">✓</div>
          <h3 className="success-title">Project Brief Logged</h3>
          <p className="success-desc">
            Thank you, <strong>{name}</strong>. Our lead systems architect is reviewing your technical requirements. We guarantee a fixed-scope roadmap and sprint availability response to <strong>{email}</strong> within 24 hours.
          </p>

          <div className="success-summary">
            <div className="summary-item">
              <span className="summary-label">Target Platform</span>
              <span className="summary-val">{service}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Selected Features</span>
              <span className="summary-val">{capabilities.length} capabilities</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Target Investment</span>
              <span className="summary-val">{budget}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Estimated Delivery</span>
              <span className="summary-val">{estimate.weeks}</span>
            </div>
          </div>

          <div className="success-actions">
            <a
              href="mailto:hello@sevens.example?subject=Discovery%20Call%20Request"
              className="btn btn--primary"
            >
              Book 20-Min Discovery Call
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="btn btn--secondary"
            >
              Configure Another Project
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="funnel-body">
          {/* STEP 1: Platform Selection */}
          {step === 1 && (
            <div className="funnel-screen">
              <div className="funnel-header">
                <h4>What kind of platform are you looking to build?</h4>
                <p>Select the core architecture your team needs launched.</p>
              </div>

              <div className="platform-grid">
                {[
                  {
                    id: "Web Application",
                    title: "Web Application",
                    desc: "Full-stack SaaS, internal operational tools, portal or subscription platform built on Next.js & Node.",
                    cadence: "From 4 weeks · Fixed Sprints",
                  },
                  {
                    id: "High-Performance Website",
                    title: "High-Performance Website",
                    desc: "Bespoke marketing site, headless CMS (Sanity / Payload), fluid micro-animations, and sub-second load times.",
                    cadence: "From 2 weeks · 99+ PageSpeed",
                  },
                  {
                    id: "Mobile Application",
                    title: "Mobile Application",
                    desc: "Cross-platform iOS and Android apps engineered with React Native, offline storage, and native performance.",
                    cadence: "From 6 weeks · App Store Ready",
                  },
                  {
                    id: "Full-Stack Ecosystem",
                    title: "Full-Stack Ecosystem",
                    desc: "Integrated digital ecosystem: responsive web app, companion mobile apps, and high-converting marketing site.",
                    cadence: "From 8 weeks · Unified Monorepo",
                  },
                ].map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setService(p.id);
                      setStep(2);
                    }}
                    className={`platform-card ${service === p.id ? "selected" : ""}`}
                  >
                    <div className="platform-card-header">
                      <h5>{p.title}</h5>
                      <span className="platform-check">{service === p.id ? "●" : "○"}</span>
                    </div>
                    <p className="platform-desc">{p.desc}</p>
                    <div className="platform-cadence">{p.cadence}</div>
                  </div>
                ))}
              </div>

              <div className="funnel-nav-row">
                <div />
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn btn--primary"
                >
                  Continue to Capabilities &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Capabilities & Features */}
          {step === 2 && (
            <div className="funnel-screen">
              <div className="funnel-header">
                <h4>Select required technical capabilities</h4>
                <p>Choose the core functional blocks. We engineer these with zero technical debt.</p>
              </div>

              <div className="capabilities-grid">
                {allCapabilities.map((cap) => {
                  const active = capabilities.includes(cap);
                  return (
                    <button
                      type="button"
                      key={cap}
                      onClick={() => toggleCapability(cap)}
                      className={`cap-chip ${active ? "active" : ""}`}
                    >
                      <span className="cap-mark">{active ? "✓" : "+"}</span>
                      <span className="cap-text">{cap}</span>
                    </button>
                  );
                })}
              </div>

              <div className="funnel-nav-row">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn--secondary"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn btn--primary"
                >
                  Continue to Timeline & Budget &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Timeline & Budget Range */}
          {step === 3 && (
            <div className="funnel-screen">
              <div className="funnel-header">
                <h4>Project timeline & investment parameters</h4>
                <p>Our two-week sprints operate on transparent, fixed-price milestone delivery.</p>
              </div>

              <div className="parameters-section">
                <label className="param-label">Target Launch Window</label>
                <div className="radio-pill-group">
                  {[
                    "Urgent (Within 30 days)",
                    "Standard (6–8 weeks)",
                    "Planned (Q2/Q3)",
                    "Flexible Scoping",
                  ].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`radio-pill ${timeline === t ? "selected" : ""}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="parameters-section" style={{ marginTop: "var(--s-5)" }}>
                <label className="param-label">Expected Investment Range</label>
                <div className="budget-cards-grid">
                  {[
                    {
                      range: "$8k – $15k",
                      title: "Sprint Build",
                      desc: "Ideal for rapid MVPs, landing systems, or focused component refactors.",
                    },
                    {
                      range: "$15k – $30k",
                      title: "Growth Platform",
                      desc: "Production web applications, mobile apps, or headless marketing engines.",
                    },
                    {
                      range: "$30k+",
                      title: "Scale Ecosystem",
                      desc: "Multi-platform systems, enterprise microservices, and dedicated engineering pods.",
                    },
                  ].map((b) => (
                    <div
                      key={b.range}
                      onClick={() => setBudget(b.range)}
                      className={`budget-card ${budget === b.range ? "selected" : ""}`}
                    >
                      <div className="budget-range">{b.range}</div>
                      <div className="budget-title">{b.title}</div>
                      <div className="budget-desc">{b.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="funnel-nav-row" style={{ marginTop: "var(--s-6)" }}>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn btn--secondary"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="btn btn--primary"
                >
                  Final Step: Project Brief &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Contact & Project Brief */}
          {step === 4 && (
            <div className="funnel-screen">
              <div className="funnel-header">
                <h4>Where should we send your technical scoping proposal?</h4>
                <p>You will speak directly with our senior engineering lead, never a salesperson.</p>
              </div>

              <div className="brief-fields-grid">
                <div className="field">
                  <label htmlFor="lead-name">Your Full Name *</label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Chen"
                  />
                </div>

                <div className="field">
                  <label htmlFor="lead-email">Work Email *</label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                  />
                </div>

                <div className="field" style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="lead-company">Company / Project Name</label>
                  <input
                    id="lead-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Health Inc. (or acme.com)"
                  />
                </div>

                <div className="field" style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="lead-brief">Project Brief & Technical Goals</label>
                  <textarea
                    id="lead-brief"
                    rows={3}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Briefly describe what you are building, target users, or key engineering bottlenecks you need solved..."
                  />
                </div>
              </div>

              <div className="funnel-reassurance">
                <div className="reassurance-item">
                  <span className="check-bullet">✓</span>
                  <span>48-Hour Technical Feasibility & Sprint Proposal</span>
                </div>
                <div className="reassurance-item">
                  <span className="check-bullet">✓</span>
                  <span>100% IP & Repository Ownership Transfer</span>
                </div>
                <div className="reassurance-item">
                  <span className="check-bullet">✓</span>
                  <span>No Sales Calls · Direct Conversation With Senior Architects</span>
                </div>
              </div>

              <div className="funnel-nav-row" style={{ marginTop: "var(--s-6)" }}>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn btn--secondary"
                >
                  &larr; Back
                </button>
                <button type="submit" className="btn btn--primary btn--xl">
                  Submit Project Brief & Get Scope &rarr;
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

